# 🔧 Solución al Problema del Selector de Destino

## 🐛 Problema Identificado

**Descripción:** Cuando el usuario selecciona "BODEGA CENTRAL" por primera vez en el formulario de salida, no aparece el campo "¿Para qué sede va?" (selector de destino). Sin embargo, si selecciona otra sede y luego vuelve a seleccionar "BODEGA CENTRAL", el campo sí aparece correctamente.

## 🔍 Análisis del Problema

### Causa Raíz:
1. El campo de destino está inicialmente oculto (`style="display: none;"`)
2. La función `mostrarOcultarDestino()` solo se ejecuta en el evento `onchange`
3. Si el usuario selecciona "BODEGA CENTRAL" por primera vez, la función no se ejecuta porque no hay un "cambio" desde un valor anterior
4. El estado inicial no se verifica al cargar la página

## ✅ Soluciones Implementadas

### 1. **Mejora de la Función `mostrarOcultarDestino()`**
```javascript
function mostrarOcultarDestino() {
    const sedeOrigen = document.getElementById('sede-salida').value;
    const campoDestino = document.getElementById('campo-destino');
    
    console.log('mostrarOcultarDestino ejecutado - Sede origen:', sedeOrigen);
    
    if (sedeOrigen === 'BODEGA CENTRAL') {
        campoDestino.style.display = 'block';
        console.log('Campo destino mostrado');
    } else {
        campoDestino.style.display = 'none';
        document.getElementById('sede-destino').value = '';
        console.log('Campo destino ocultado');
    }
}
```

### 2. **Evento Adicional en el Selector**
```html
<select id="sede-salida" onchange="mostrarOcultarDestino()" onclick="mostrarOcultarDestino()">
```

### 3. **Verificación al Cargar la Página**
```javascript
// Verificar estado inicial del selector de destino para salidas
setTimeout(() => {
    const sedeSalida = document.getElementById('sede-salida');
    if (sedeSalida.value === 'BODEGA CENTRAL') {
        console.log('BODEGA CENTRAL ya seleccionada al cargar, ejecutando mostrarOcultarDestino...');
        mostrarOcultarDestino();
    }
}, 100);
```

### 4. **Verificación al Abrir la Sección de Salida**
```javascript
} else if (seccion === 'salida') {
    cargarProductosParaSalida();
    // Verificar estado del selector de destino cuando se abre la sección de salida
    setTimeout(() => {
        const sedeSalida = document.getElementById('sede-salida');
        if (sedeSalida.value === 'BODEGA CENTRAL') {
            console.log('Sección salida abierta - BODEGA CENTRAL seleccionada, ejecutando mostrarOcultarDestino...');
            mostrarOcultarDestino();
        }
    }, 100);
}
```

### 5. **Función de Prueba para Debugging**
```javascript
function probarSelectorDestino() {
    console.log('=== PRUEBA DEL SELECTOR DE DESTINO ===');
    // ... código de prueba completo
}
```

## 🎯 Resultado Esperado

### Comportamiento Correcto:
1. **Primera vez:** Al seleccionar "BODEGA CENTRAL", el campo de destino aparece inmediatamente
2. **Cambios posteriores:** El campo se muestra/oculta correctamente según la selección
3. **Navegación:** Al abrir la sección de salida, si "BODEGA CENTRAL" está seleccionada, el campo aparece
4. **Limpieza:** Al limpiar el formulario, el campo se oculta correctamente

## 🔧 Archivos Modificados

- `index.html` - Líneas modificadas:
  - Función `mostrarOcultarDestino()` (línea ~2075)
  - Selector de sede-salida (línea ~937)
  - Función `mostrarSeccion()` (línea ~1520)
  - Inicialización DOMContentLoaded (línea ~3550)
  - Nueva función `probarSelectorDestino()` (línea ~2085)

## 🧪 Cómo Probar la Solución

1. **Abrir la consola del navegador** (F12)
2. **Ir a la sección de Salida**
3. **Seleccionar "BODEGA CENTRAL"** - El campo de destino debe aparecer inmediatamente
4. **Usar el botón "🔧 PROBAR SELECTOR"** para ejecutar la prueba automática
5. **Verificar los logs en la consola** para confirmar el funcionamiento

## 📋 Checklist de Verificación

- [ ] Campo de destino aparece al seleccionar "BODEGA CENTRAL" por primera vez
- [ ] Campo de destino se oculta al seleccionar otras sedes
- [ ] Campo de destino reaparece al volver a "BODEGA CENTRAL"
- [ ] Funciona correctamente al abrir la sección de salida
- [ ] Se resetea correctamente al limpiar el formulario
- [ ] Los logs en consola muestran el comportamiento esperado

## 🚀 Estado de la Solución

**✅ IMPLEMENTADA Y LISTA PARA PRUEBAS**

La solución aborda todos los escenarios posibles y incluye logging para facilitar el debugging. El problema del selector de destino debería estar completamente resuelto.
