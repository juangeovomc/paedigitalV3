# 🔐 SISTEMA DE PERMISOS POR SEDE - PAE DIGITAL

## 📋 **RESUMEN DEL SISTEMA**

El sistema ahora implementa un control de permisos estricto donde cada sede solo puede ver y modificar sus propios datos, mientras que solo la cuenta de ADMIN (BODEGA) tiene acceso completo.

---

## 🏢 **CUENTA ADMIN (BODEGA)**

### **Permisos:**
- ✅ **Ver todo el inventario** de todas las sedes
- ✅ **Registrar entradas** de productos nuevos
- ✅ **Registrar salidas** hacia cualquier sede
- ✅ **Registrar devoluciones** desde cualquier sede
- ✅ **Limpiar historial** completo
- ✅ **Ver todos los movimientos** de todas las sedes
- ✅ **Editar y eliminar** cualquier dato

### **Credenciales:**
- **Usuario:** `admin`
- **Contraseña:** `admin123`

---

## 🏫 **CUENTAS DE SEDE**

### **Permisos:**
- ✅ **Ver solo su inventario** (productos que han recibido)
- ✅ **Registrar entradas** para su propia sede
- ✅ **Registrar salidas** para su propia sede
- ✅ **Registrar devoluciones** para su propia sede
- ❌ **NO pueden limpiar historial**
- ❌ **NO pueden ver datos de otras sedes**

### **Credenciales:**
- **Usuario:** `[nombre_sede]` (ejemplo: `alejandro`)
- **Contraseña:** `[nombre_sede]123` (ejemplo: `alejandro123`)

---

## 🔒 **RESTRICCIONES IMPLEMENTADAS**

### **1. Registro de Movimientos:**
- **Usuarios de sede:** Pueden seleccionar entrada, salida o devolución, pero solo para su sede
- **BODEGA:** Puede seleccionar cualquier tipo y cualquier sede

### **2. Visualización de Inventario:**
- **Usuarios de sede:** Solo ven productos con stock disponible en su sede
- **BODEGA:** Ve todo el inventario general

### **3. Historial de Movimientos:**
- **Usuarios de sede:** Solo ven movimientos de su sede
- **BODEGA:** Ve todos los movimientos de todas las sedes

### **4. Contadores:**
- **Usuarios de sede:** Solo cuentan movimientos de su sede
- **BODEGA:** Cuenta todos los movimientos

### **5. Funciones Administrativas:**
- **Limpiar historial:** Solo disponible para BODEGA
- **Filtros de sede:** Bloqueados para usuarios de sede

---

## 🎯 **CASOS DE USO**

### **Escenario 1: Usuario de Sede "Alejandro Vélez"**
1. **Inicia sesión** con `alejandro` / `alejandro123`
2. **Ve solo su inventario** (productos que ha recibido de BODEGA)
3. **Registra entradas** cuando recibe productos nuevos para su sede
4. **Registra salidas** para su sede cuando consume productos
5. **Registra devoluciones** cuando devuelve productos a BODEGA
6. **No puede** ver datos de otras sedes

### **Escenario 2: Administrador BODEGA**
1. **Inicia sesión** con `admin` / `admin123`
2. **Ve todo el inventario** de todas las sedes
3. **Registra entradas** cuando recibe productos nuevos
4. **Registra salidas** hacia cualquier sede
5. **Puede limpiar historial** y hacer cambios administrativos

---

## 🚨 **ALERTAS Y NOTIFICACIONES**

### **Para Usuarios de Sede:**
- Mensaje azul que indica "Modo Sede"
- Explica que pueden registrar entradas, salidas y devoluciones para su sede
- Recomienda usar cuenta BODEGA para ver todo

### **Para BODEGA:**
- Acceso completo sin restricciones
- Puede ver y modificar todo el sistema

---

## 🔧 **FUNCIONES TÉCNICAS IMPLEMENTADAS**

1. **`configurarPermisosSede()`** - Configura la interfaz según permisos
2. **`filtrarInventarioPorSede()`** - Filtra inventario por sede
3. **`mostrarMensajePermisos()`** - Muestra mensaje de permisos
4. **Validaciones en `registrarMovimiento()`** - Previene acciones no permitidas
5. **Filtrado en `mostrarHistorial()`** - Solo muestra movimientos relevantes

---

## 📱 **INTERFAZ ADAPTATIVA**

### **Campos Bloqueados para Sedes:**
- Sede (siempre la sede del usuario)
- Botón de limpiar historial (oculto)
- Filtros de sede (bloqueados)

### **Campos Disponibles para Sedes:**
- Tipo de movimiento (entrada, salida, devolución)
- Nombre del producto
- Cantidad
- Descripción
- Mes del movimiento
- Fecha de vencimiento (si aplica)
- Número de lote (si aplica)

---

## 🎉 **BENEFICIOS DEL SISTEMA**

1. **Seguridad:** Cada sede solo ve sus datos
2. **Control:** BODEGA mantiene control total
3. **Trazabilidad:** Movimientos claramente identificados por sede
4. **Simplicidad:** Interfaz adaptada a cada tipo de usuario
5. **Auditoría:** Historial completo para administradores

---

## 🚀 **PRÓXIMAS MEJORAS SUGERIDAS**

- [ ] Reportes específicos por sede
- [ ] Dashboard con estadísticas por sede
- [ ] Notificaciones automáticas entre sedes
- [ ] Sistema de aprobaciones para movimientos grandes
- [ ] Backup automático de datos por sede

---

*Sistema implementado en PAE DIGITAL v2.0 - Control de Permisos por Sede*
