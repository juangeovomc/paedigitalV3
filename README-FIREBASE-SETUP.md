# 🔥 Configuración de Firebase para PAE Digital

## 📋 Pasos para configurar Firebase correctamente

### 1. **Configurar Firebase Console**

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Selecciona tu proyecto `inventario-pae-digital`
3. Ve a **Firestore Database** en el menú lateral
4. Crea la base de datos si no existe

### 2. **Configurar Reglas de Seguridad**

1. En Firestore Database, ve a la pestaña **Rules**
2. Reemplaza las reglas existentes con el contenido del archivo `firestore.rules`
3. Haz clic en **Publish**

### 3. **Verificar Configuración del Proyecto**

1. Ve a **Project Settings** (ícono de engranaje)
2. En la pestaña **General**, verifica que el Project ID sea: `inventario-pae-digital`
3. En la pestaña **Service accounts**, genera una nueva clave privada si es necesario

### 4. **Configurar Autenticación (Opcional)**

Si quieres agregar autenticación:
1. Ve a **Authentication** en el menú lateral
2. Habilita **Email/Password** o **Anonymous** authentication
3. Configura las reglas de Firestore para usuarios autenticados

### 5. **Verificar la Configuración en el Código**

El archivo `firebase-config.js` debe contener:

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyBp1dxYiEaao-vhc-wI2Oe2jlN-Kk4Srlg",
    authDomain: "inventario-pae-digital.firebaseapp.com",
    projectId: "inventario-pae-digital",
    storageBucket: "inventario-pae-digital.firebasestorage.app",
    messagingSenderId: "521072530695",
    appId: "1:521072530695:web:3adee4cb525f937d6261a2",
    measurementId: "G-J6FS38EP6R"
};
```

### 6. **Probar la Conexión**

1. Abre la aplicación en el navegador
2. Abre las **Developer Tools** (F12)
3. Ve a la pestaña **Console**
4. Deberías ver mensajes como:
   - `🚀 Inicializando Firebase...`
   - `🔍 Verificando Firebase...`
   - `✅ Firebase conectado correctamente`

### 7. **Solución de Problemas Comunes**

#### **Error: "Firebase SDK no está cargado"**
- Verifica que los scripts de Firebase estén incluidos en `index.html`
- Asegúrate de que no haya errores de red al cargar los scripts

#### **Error: "Firebase no está inicializado"**
- Verifica que `firebase-config.js` se cargue después de los SDKs de Firebase
- Asegúrate de que `firebase.initializeApp(firebaseConfig)` se ejecute

#### **Error: "Error de permisos en Firebase"**
- Verifica que las reglas de Firestore permitan lectura/escritura
- Asegúrate de que el Project ID sea correcto

#### **Error: "Sin conexión a internet"**
- Verifica tu conexión a internet
- Intenta recargar la página

### 8. **Comandos para Verificar**

En la consola del navegador, puedes ejecutar:

```javascript
// Verificar si Firebase está disponible
console.log('Firebase:', typeof firebase !== 'undefined' ? 'Disponible' : 'No disponible');

// Verificar si hay apps inicializadas
console.log('Apps:', firebase.apps.length);

// Verificar configuración
console.log('Config:', firebase.app().options);

// Probar conexión manualmente
verificarFirebase().then(result => console.log('Conexión:', result));
```

### 9. **Estructura de Datos Esperada**

Firestore debe tener estas colecciones:

```
inventario/
  datos/
    - inventario: {}
    - contadores: { entradas: 0, salidas: 0 }
    - fechasVencimiento: {}
    - lotes: {}
    - ultimaActualizacion: timestamp
    - sedeActual: string

historial/
  mov_1234567890_0/
    - id: number
    - producto: string
    - cantidad: number
    - tipo: string
    - sede: string
    - descripcion: string
    - fecha: string
    - timestamp: timestamp
```

### 10. **Monitoreo y Logs**

Para monitorear el uso:
1. Ve a **Usage** en Firebase Console
2. Revisa **Firestore** para ver las operaciones
3. Revisa **Authentication** si usas autenticación

### 11. **Backup y Restauración**

Para hacer backup de los datos:
1. Ve a **Firestore Database**
2. Haz clic en **Export** en la pestaña **Data**
3. Selecciona las colecciones a exportar
4. Descarga el archivo JSON

### 12. **Contacto para Soporte**

Si tienes problemas:
1. Revisa los logs en la consola del navegador
2. Verifica la configuración de Firebase
3. Contacta al administrador del sistema

---

## ✅ Checklist de Verificación

- [ ] Firebase Console configurado
- [ ] Firestore Database creado
- [ ] Reglas de seguridad aplicadas
- [ ] Configuración del proyecto verificada
- [ ] Scripts de Firebase incluidos en HTML
- [ ] Conexión probada en consola
- [ ] Datos sincronizando correctamente
- [ ] No hay errores en la consola

---

**Nota:** Este sistema está diseñado para funcionar sin autenticación para facilitar el uso. Si necesitas mayor seguridad, considera implementar autenticación de usuarios.


