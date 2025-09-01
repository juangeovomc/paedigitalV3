// 🔥 SISTEMA PAE DIGITAL - SINCRONIZACIÓN SIMPLE CON FIREBASE
// Este archivo maneja la conexión con Firebase de forma simple y confiable

// Estado global de Firebase
let firebaseStatus = {
    inicializado: false,
    conectado: false,
    ultimaSincronizacion: null
};

// 🔍 VERIFICAR SI FIREBASE ESTÁ FUNCIONANDO
async function verificarFirebase() {
    try {
        console.log('🔍 Verificando Firebase...');
        
        // 1. Verificar que Firebase esté cargado
        if (typeof firebase === 'undefined') {
            throw new Error('Firebase no está cargado');
        }
        
        // 2. Verificar que esté inicializado
        if (firebase.apps.length === 0) {
            throw new Error('Firebase no está inicializado');
        }
        
        // 3. Verificar que Firestore esté disponible
        if (!firebase.firestore) {
            throw new Error('Firestore no está disponible');
        }
        
        // 4. Hacer una prueba real de conexión
        const db = firebase.firestore();
        const testDoc = db.collection('test').doc('conexion');
        
        // Escribir un documento de prueba
        await testDoc.set({
            timestamp: new Date(),
            mensaje: 'Prueba de conexión'
        });
        
        // Leer el documento de prueba
        const doc = await testDoc.get();
        
        // Eliminar el documento de prueba
        await testDoc.delete();
        
        // Si llegamos aquí, todo está funcionando
        firebaseStatus.inicializado = true;
        firebaseStatus.conectado = true;
        firebaseStatus.ultimaSincronizacion = new Date();
        
        console.log('✅ Firebase conectado correctamente');
        actualizarIndicadorConexion(true);
        
        return {
            exito: true,
            mensaje: 'Firebase conectado correctamente'
        };
        
    } catch (error) {
        console.error('❌ Error verificando Firebase:', error);
        firebaseStatus.conectado = false;
        actualizarIndicadorConexion(false);
        
        return {
            exito: false,
            mensaje: `Error: ${error.message}`
        };
    }
}

// 💾 GUARDAR DATOS EN FIREBASE
async function guardarEnFirebase(datos) {
    try {
        // Verificar Firebase primero
        const verificacion = await verificarFirebase();
        if (!verificacion.exito) {
            console.log('⚠️ No se puede sincronizar - Firebase no disponible');
            return false;
        }
        
        console.log('💾 Guardando datos en Firebase...');
        
        const db = firebase.firestore();
        const batch = db.batch();
        
        // Guardar inventario
        const inventarioRef = db.collection('inventario').doc('datos');
        batch.set(inventarioRef, {
            inventario: datos.inventario,
            contadores: datos.contadores,
            fechasVencimiento: datos.fechasVencimiento,
            lotes: datos.lotes,
            ultimaActualizacion: new Date(),
            sedeActual: datos.sedeActual
        });
        
        // Guardar historial (solo los últimos 100 movimientos para evitar problemas)
        const historialLimitado = datos.historial.slice(-100);
        
        // Eliminar historial anterior
        const historialRef = db.collection('historial');
        const historialDocs = await historialRef.get();
        historialDocs.forEach(doc => {
            batch.delete(doc.ref);
        });
        
        // Agregar historial nuevo
        historialLimitado.forEach((movimiento, index) => {
            const docRef = historialRef.doc(`mov_${movimiento.id}_${index}`);
            batch.set(docRef, movimiento);
        });
        
        // Ejecutar todas las operaciones
        await batch.commit();
        
        firebaseStatus.ultimaSincronizacion = new Date();
        console.log('✅ Datos guardados en Firebase exitosamente');
        
        return true;
        
    } catch (error) {
        console.error('❌ Error guardando en Firebase:', error);
        return false;
    }
}

// 📥 CARGAR DATOS DESDE FIREBASE
async function cargarDesdeFirebase() {
    try {
        // Verificar Firebase primero
        const verificacion = await verificarFirebase();
        if (!verificacion.exito) {
            console.log('⚠️ No se puede cargar - Firebase no disponible');
            return false;
        }
        
        console.log('📥 Cargando datos desde Firebase...');
        
        const db = firebase.firestore();
        
        // Cargar inventario
        const inventarioDoc = await db.collection('inventario').doc('datos').get();
        
        if (inventarioDoc.exists) {
            const datos = inventarioDoc.data();
            
            // Actualizar variables globales
            window.inventario = datos.inventario || {};
            window.contadores = datos.contadores || { entradas: 0, salidas: 0, devoluciones: 0 };
            window.fechasVencimiento = datos.fechasVencimiento || {};
            window.lotes = datos.lotes || {};
            window.sedeActual = datos.sedeActual || 'BODEGA CENTRAL';
            
            console.log('✅ Inventario cargado desde Firebase');
        }
        
        // Cargar historial
        const historialSnapshot = await db.collection('historial').get();
        const historialCargado = [];
        
        historialSnapshot.forEach(doc => {
            historialCargado.push(doc.data());
        });
        
        // Ordenar por timestamp
        historialCargado.sort((a, b) => a.timestamp - b.timestamp);
        window.historial = historialCargado;
        
        console.log('✅ Historial cargado desde Firebase');
        
        firebaseStatus.ultimaSincronizacion = new Date();
        
        return true;
        
    } catch (error) {
        console.error('❌ Error cargando desde Firebase:', error);
        return false;
    }
}

// 🔄 SINCRONIZACIÓN MANUAL
async function sincronizarManual() {
    try {
        console.log('🔄 Iniciando sincronización manual...');
        
        // Verificar conexión
        const verificacion = await verificarFirebase();
        if (!verificacion.exito) {
            mostrarMensaje('❌ No se puede sincronizar: ' + verificacion.mensaje, 'error');
            return false;
        }
        
        // Cargar datos desde Firebase
        const cargado = await cargarDesdeFirebase();
        if (cargado) {
            mostrarMensaje('✅ Datos sincronizados exitosamente', 'exito');
            return true;
        } else {
            mostrarMensaje('❌ Error al cargar datos', 'error');
            return false;
        }
        
    } catch (error) {
        console.error('❌ Error en sincronización manual:', error);
        mostrarMensaje('❌ Error de sincronización: ' + error.message, 'error');
        return false;
    }
}

// 🔍 DIAGNOSTICAR PROBLEMAS
function diagnosticarProblemasSincronizacion() {
    const diagnostico = {
        firebaseCargado: typeof firebase !== 'undefined',
        firebaseInicializado: firebaseStatus.inicializado,
        firebaseConectado: firebaseStatus.conectado,
        ultimaSincronizacion: firebaseStatus.ultimaSincronizacion,
        conexionInternet: navigator.onLine
    };
    
    console.log('🔍 Diagnóstico de Firebase:', diagnostico);
    
    let mensaje = '🔍 DIAGNÓSTICO DE FIREBASE:\n\n';
    
    if (diagnostico.firebaseCargado) {
        mensaje += '✅ Firebase SDK cargado\n';
    } else {
        mensaje += '❌ Firebase SDK no cargado\n';
    }
    
    if (diagnostico.firebaseInicializado) {
        mensaje += '✅ Firebase inicializado\n';
    } else {
        mensaje += '❌ Firebase no inicializado\n';
    }
    
    if (diagnostico.firebaseConectado) {
        mensaje += '✅ Firebase conectado\n';
    } else {
        mensaje += '❌ Firebase no conectado\n';
    }
    
    if (diagnostico.conexionInternet) {
        mensaje += '✅ Conexión a internet\n';
    } else {
        mensaje += '❌ Sin conexión a internet\n';
    }
    
    if (diagnostico.ultimaSincronizacion) {
        mensaje += `✅ Última sincronización: ${diagnostico.ultimaSincronizacion.toLocaleString()}\n`;
    } else {
        mensaje += '❌ Nunca sincronizado\n';
    }
    
    alert(mensaje);
}

// 📱 ACTUALIZAR INDICADOR DE CONEXIÓN
function actualizarIndicadorConexion(conectado) {
    const indicador = document.getElementById('indicador-conexion');
    if (indicador) {
        if (conectado) {
            indicador.textContent = '✅ Conectado';
            indicador.className = 'indicador-conexion conectado';
        } else {
            indicador.textContent = '❌ Desconectado';
            indicador.className = 'indicador-conexion desconectado';
        }
    }
}

// 💾 GUARDAR DATOS LOCALMENTE
function guardarDatosLocal(datos) {
    try {
        localStorage.setItem('paeDigitalData', JSON.stringify(datos));
        return true;
    } catch (error) {
        console.error('Error guardando datos locales:', error);
        return false;
    }
}

// 📥 CARGAR DATOS LOCALMENTE
function cargarDatosLocal() {
    try {
        const datos = localStorage.getItem('paeDigitalData');
        if (datos) {
            return JSON.parse(datos);
        }
        return null;
    } catch (error) {
        console.error('Error cargando datos locales:', error);
        return null;
    }
}

// 🔄 CARGAR DATOS (LOCAL + FIREBASE)
async function cargarDatos() {
    // Primero cargar desde local
    const datosLocales = cargarDatosLocal();
    if (datosLocales) {
        window.inventario = datosLocales.inventario || {};
        window.historial = datosLocales.historial || [];
        window.contadores = datosLocales.contadores || { entradas: 0, salidas: 0, devoluciones: 0 };
        window.fechasVencimiento = datosLocales.fechasVencimiento || {};
        window.lotes = datosLocales.lotes || {};
        window.sedeActual = datosLocales.sedeActual || 'BODEGA CENTRAL';
    }
    
    // Luego intentar sincronizar con Firebase
    try {
        await cargarDesdeFirebase();
    } catch (error) {
        console.log('⚠️ No se pudo cargar desde Firebase, usando datos locales');
    }
}

// 💾 GUARDAR DATOS (LOCAL + FIREBASE)
async function guardarDatos() {
    const datos = {
        inventario: window.inventario || {},
        historial: window.historial || [],
        contadores: window.contadores || { entradas: 0, salidas: 0, devoluciones: 0 },
        fechasVencimiento: window.fechasVencimiento || {},
        lotes: window.lotes || {},
        ultimaActualizacion: new Date(),
        sedeActual: window.sedeActual || 'BODEGA CENTRAL'
    };
    
    // Guardar localmente
    guardarDatosLocal(datos);
    
    // Intentar sincronizar con Firebase
    try {
        await guardarEnFirebase(datos);
    } catch (error) {
        console.log('⚠️ No se pudo sincronizar con Firebase, datos guardados localmente');
    }
}

// 🚀 INICIALIZAR CUANDO SE CARGA LA PÁGINA
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Inicializando sistema PAE Digital...');
    
    // Verificar Firebase al cargar
    verificarFirebase();
    
    // Configurar eventos de conexión
    window.addEventListener('online', function() {
        console.log('🌐 Conexión a internet restaurada');
        verificarFirebase();
    });
    
    window.addEventListener('offline', function() {
        console.log('❌ Conexión a internet perdida');
        actualizarIndicadorConexion(false);
    });
});

// 📝 FUNCIÓN PARA MOSTRAR MENSAJES
function mostrarMensaje(mensaje, tipo) {
    // Crear elemento de mensaje
    const div = document.createElement('div');
    div.className = `mensaje-${tipo}`;
    div.textContent = mensaje;
    div.style.position = 'fixed';
    div.style.top = '20px';
    div.style.left = '50%';
    div.style.transform = 'translateX(-50%)';
    div.style.zIndex = '10000';
    div.style.padding = '15px 25px';
    div.style.borderRadius = '10px';
    div.style.fontWeight = '600';
    div.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    
    // Colores según tipo
    if (tipo === 'exito') {
        div.style.background = '#d4edda';
        div.style.color = '#155724';
        div.style.border = '1px solid #c3e6cb';
    } else if (tipo === 'error') {
        div.style.background = '#f8d7da';
        div.style.color = '#721c24';
        div.style.border = '1px solid #f5c6cb';
    } else {
        div.style.background = '#d1ecf1';
        div.style.color = '#0c5460';
        div.style.border = '1px solid #bee5eb';
    }
    
    document.body.appendChild(div);
    
    // Eliminar después de 5 segundos
    setTimeout(() => {
        if (div.parentNode) {
            div.parentNode.removeChild(div);
        }
    }, 5000);
}

console.log('🔥 Sistema PAE Digital - Firebase Sync cargado'); 