# 🔍 Buscar Lotes por Sedes

## 🎯 Nueva Funcionalidad Implementada

Se ha agregado una **funcionalidad completa de búsqueda de lotes** que te permite encontrar en qué sedes hay productos de un lote específico, facilitando la trazabilidad y el control de inventario por lotes.

## ✨ Características Principales

### 🔍 **Búsqueda Específica de Lotes**
- **Búsqueda por número de lote:** Encuentra todos los productos con un lote específico
- **Filtro por producto:** Combina búsqueda de lote con filtro de producto
- **Búsqueda flexible:** Encuentra lotes que contengan el texto ingresado
- **Resultados detallados:** Muestra información completa de cada ubicación

### 📋 **Vista de Todos los Lotes**
- **Lista completa:** Muestra todos los lotes en el inventario
- **Agrupación inteligente:** Agrupa por lote y producto
- **Distribución por sedes:** Muestra en qué sedes está cada lote
- **Cantidades totales:** Suma las cantidades por lote

### 📊 **Exportación a Excel**
- **Exportación específica:** Solo los lotes buscados
- **Exportación completa:** Todos los lotes del inventario
- **Formato estructurado:** Columnas organizadas y legibles
- **Nombres de archivo:** Automáticos con fecha y lote

## 🚀 Cómo Usar la Funcionalidad

### 1. **Acceder a la Función**
```
1. Ir al menú principal
2. Hacer clic en "🔍 BUSCAR LOTES"
3. Se abre la nueva sección de búsqueda
```

### 2. **Búsqueda Específica de Lote**
```
1. En "Número de lote a buscar" escribir el lote (ej: "2323")
2. Opcional: Filtrar por producto específico
3. Hacer clic en "🔍 BUSCAR LOTE"
4. Ver resultados organizados por sede
```

### 3. **Ver Todos los Lotes**
```
1. Hacer clic en "📋 VER TODOS LOS LOTES"
2. Se muestran todos los lotes del inventario
3. Cada lote muestra su distribución por sedes
4. Información de vencimiento y prioridad
```

### 4. **Exportar a Excel**
```
1. Realizar una búsqueda o ver todos los lotes
2. Hacer clic en "📊 EXPORTAR A EXCEL"
3. Se descarga automáticamente el archivo
4. Nombre del archivo incluye fecha y lote
```

## 📊 Ejemplos de Resultados

### **Búsqueda Específica - Lote "2323"**
```
🔍 Lote "2323" encontrado en 2 ubicación(es)

🏢 BODEGA CENTRAL
📦 3000 unidades
📦 Lote: 2323
📅 Vence: 15/12/2025
🟢 105 días restantes
🏷️ Producto: CARNE DE CERDO 1000 GRS

🏢 IE El Salado
📦 2000 unidades
📦 Lote: 2323
📅 Vence: 15/12/2025
🟢 105 días restantes
🏷️ Producto: CARNE DE CERDO 1000 GRS
```

### **Vista de Todos los Lotes**
```
📦 Lote: 2323
📊 5000 unidades total
🏷️ Producto: CARNE DE CERDO 1000 GRS
📅 Vence: 15/12/2025
🟢 105 días restantes
🏢 Sedes: 2

📍 Distribución por sedes:
• BODEGA CENTRAL: 3000 unidades
• IE El Salado: 2000 unidades
```

## 🎨 Interfaz de Usuario

### **Sección de Búsqueda**
- **Campo de lote:** Con autocompletado y botón de limpiar
- **Filtro de producto:** Opcional para búsquedas más específicas
- **Botones de acción:** Buscar, ver todos, exportar

### **Resultados Visuales**
- **Tarjetas organizadas:** Cada resultado en una tarjeta individual
- **Información estructurada:** Datos organizados en grid
- **Indicadores de prioridad:** Colores según días restantes
- **Iconos descriptivos:** Fácil identificación visual

### **Estilos CSS**
```css
.lote-sede-item {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.lote-sede-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.lote-sede-detalles {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}
```

## 🔧 Funciones Implementadas

### **`buscarLoteEnSedes()`**
```javascript
// Busca un lote específico en todas las sedes
// Parámetros: loteBuscar, productoFiltro (opcional)
// Retorna: Resultados agrupados por sede
```

### **`mostrarTodosLosLotes()`**
```javascript
// Muestra todos los lotes del inventario
// Agrupa por lote y producto
// Muestra distribución por sedes
```

### **`exportarLotesExcel()`**
```javascript
// Exporta resultados a Excel
// Formato: Lote, Producto, Sede, Cantidad, Fecha Vencimiento, Días Restantes
// Nombre de archivo automático
```

### **`limpiarBusquedaLote()`**
```javascript
// Limpia todos los campos de búsqueda
// Oculta resultados
```

## 📈 Beneficios de la Funcionalidad

### **Para el Usuario:**
1. **Trazabilidad completa:** Sabe exactamente dónde está cada lote
2. **Control de distribución:** Ve cómo se distribuyen los lotes por sedes
3. **Búsqueda rápida:** Encuentra lotes específicos en segundos
4. **Información detallada:** Fechas de vencimiento y prioridades
5. **Exportación fácil:** Datos en Excel para análisis externo

### **Para la Gestión:**
1. **Auditoría de lotes:** Control completo de la distribución
2. **Trazabilidad:** Seguimiento desde entrada hasta consumo
3. **Control de calidad:** Monitoreo de fechas de vencimiento
4. **Optimización:** Identificación de patrones de distribución
5. **Cumplimiento:** Registros detallados para auditorías

## 🚀 Casos de Uso

### **Búsqueda de Lote Específico**
```
Escenario: Necesitas encontrar el lote "2323" de carne de cerdo
1. Buscar lote: "2323"
2. Filtrar producto: "carne"
3. Resultado: Ve que está en BODEGA CENTRAL e IE El Salado
```

### **Control de Vencimientos**
```
Escenario: Quieres ver todos los lotes que vencen pronto
1. Ver todos los lotes
2. Identificar los que tienen 🔴 (urgentes)
3. Tomar acciones preventivas
```

### **Análisis de Distribución**
```
Escenario: Quieres ver cómo se distribuyó un lote
1. Buscar el lote específico
2. Ver en qué sedes está
3. Analizar cantidades por sede
```

### **Auditoría de Inventario**
```
Escenario: Necesitas un reporte completo de lotes
1. Ver todos los lotes
2. Exportar a Excel
3. Usar para auditoría externa
```

## ✅ Estado de la Implementación

**✅ COMPLETAMENTE FUNCIONAL**

La funcionalidad está implementada y lista para usar:
- ✅ Búsqueda específica de lotes
- ✅ Vista de todos los lotes
- ✅ Exportación a Excel
- ✅ Interfaz intuitiva
- ✅ Resultados detallados
- ✅ Filtros combinados

## 🔄 Compatibilidad

- **Inventario existente:** Funciona con todos los lotes registrados
- **Nuevos lotes:** Se incluyen automáticamente en las búsquedas
- **Filtros:** Compatible con búsquedas por producto
- **Exportación:** Formato Excel estándar

## 📋 Archivos Modificados

### **`index.html`**
- **Nuevo botón:** "🔍 BUSCAR LOTES" en el menú principal
- **Nueva sección:** `seccion-buscar-lotes` con interfaz completa
- **Nuevas funciones:** `buscarLoteEnSedes()`, `mostrarTodosLosLotes()`, `exportarLotesExcel()`
- **Estilos CSS:** Para la nueva interfaz y resultados

### **Funciones Principales**
- `buscarLoteEnSedes()` - Búsqueda específica
- `mostrarTodosLosLotes()` - Vista completa
- `exportarLotesExcel()` - Exportación
- `limpiarBusquedaLote()` - Limpieza

La implementación es **completamente funcional** y proporciona una herramienta poderosa para el control y trazabilidad de lotes en el sistema de inventario.
