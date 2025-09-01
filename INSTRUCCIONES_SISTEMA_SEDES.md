# 🏫 Sistema de Gestión por Sedes - PAE Digital

## 🔐 Sistema de Autenticación por Sede

### Credenciales de Acceso

#### 🏢 BODEGA CENTRAL (Acceso completo)
- **Usuario:** `admin`
- **Contraseña:** `admin123`
- **Usuario:** `bodega`
- **Contraseña:** `bodega123`
- **Usuario:** `supervisor`
- **Contraseña:** `supervisor123`

#### 🏫 Sedes Educativas (Acceso limitado a su sede)

**Formato de credenciales:** `[nombre_sede]` / `[nombre_sede]123`

**Ejemplos:**
- **IE Alejandro Vélez Barrientos:**
  - Usuario: `alejandro`
  - Contraseña: `alejandro123`
  - Usuario: `admin_alejandro`
  - Contraseña: `admin_alejandro123`

- **IE San Vicente Sede Alto las Flores:**
  - Usuario: `sanvicente`
  - Contraseña: `sanvicente123`
  - Usuario: `admin_sanvicente`
  - Contraseña: `admin_sanvicente123`

- **IE Comercial de Envigado:**
  - Usuario: `comercial`
  - Contraseña: `comercial123`
  - Usuario: `admin_comercial`
  - Contraseña: `admin_comercial123`

### 📋 Lista Completa de Sedes

1. **BODEGA CENTRAL** - Acceso completo al sistema
2. **IE Alejandro Vélez Barrientos**
3. **IE San Vicente Sede Alto las Flores**
4. **IE Comercial de Envigado**
5. **IE Comercial de Envigado Sede Pio XII**
6. **IE Comercial de Envigado Sede San Rafael**
7. **IE Darío de Bedout**
8. **IE El Salado**
9. **IE El Salado Sede La Morena**
10. **IE José Manuel Restrepo Vélez (JOMAR)**
11. **IE José Manuel Restrepo Vélez (JOMAR) Sede Fernando González**
12. **IE José Miguel de la Calle**
13. **IE La Paz**
14. **IE La Paz Sede El Trianón**
15. **IE John F. Keneddy**
16. **IE Leticia Arango de Avendaño**
17. **IE Las Palmas**
18. **IE Martín Eduardo Rios Llano (Pantanillo)**
19. **IE Martín Eduardo Rios Llano Sede La Cruz del Porvenir (Perico)**
20. **IE Manuel Uribe Ángel (MUA)**
21. **IE Manuel Uribe Ángel Sede Marceliano Vélez**
22. **IE Normal Superior de Envigado**
23. **IE Marie Poussepin**
24. **Centro vida alto de los sueños**
25. **Comedor comunitario la Mina**
26. **Comedor Comunitario Uribe Angel**
27. **Comedor Comunitario Santa Gertrudis**

## 🔒 Permisos por Sede

### 🏢 BODEGA CENTRAL
- ✅ **Entradas:** Puede registrar entradas de productos
- ✅ **Salidas:** Puede registrar salidas a cualquier sede
- ✅ **Historial:** Ve todo el historial del sistema
- ✅ **Reportes:** Acceso completo a todos los reportes
- ✅ **Alertas:** Recibe alertas de todo el sistema

### 🏫 Sedes Educativas
- ❌ **Entradas:** No pueden registrar entradas (solo BODEGA)
- ✅ **Salidas:** Solo pueden registrar salidas para su propia sede
- 🔍 **Historial:** Solo ven movimientos de su sede y BODEGA
- 📊 **Reportes:** Solo ven reportes de su sede
- ⚠️ **Alertas:** Solo reciben alertas de su sede

## ⚠️ Sistema de Alertas Mejorado

### 🔧 Problemas Solucionados
1. **Alertas repetitivas:** Ahora solo se muestran una vez por día por producto
2. **Frecuencia excesiva:** Se redujo de cada 5 minutos a cada 30 minutos
3. **Alertas sin contexto:** Ahora se muestran solo para la sede del usuario

### 📅 Control de Alertas
- **Frecuencia:** Una vez por día por producto
- **Verificación automática:** Cada 30 minutos
- **Almacenamiento:** Se guarda en localStorage la fecha de la última alerta
- **Filtrado:** Solo alertas relevantes para la sede del usuario

### 🚨 Tipos de Alertas
1. **Stock bajo:** Productos con menos de 10 unidades
2. **Stock crítico:** Productos con menos de 5 unidades
3. **Vencimiento próximo:** Productos que vencen en 8 días o menos
4. **Vencimiento crítico:** Productos que vencen en 5 días o menos

## 🎯 Funcionalidades por Sede

### Para BODEGA CENTRAL
- **Gestión completa** de inventario
- **Registro de entradas** de proveedores
- **Distribución** a todas las sedes
- **Monitoreo global** del sistema
- **Reportes completos** de todas las sedes

### Para Sedes Educativas
- **Consumo de productos** de su inventario
- **Registro de salidas** para su uso
- **Monitoreo local** de su stock
- **Alertas específicas** de su sede
- **Reportes locales** de su actividad

## 🔄 Flujo de Trabajo

### 1. **BODEGA CENTRAL**
```
Proveedor → BODEGA (Entrada) → Distribución a Sedes (Salidas)
```

### 2. **Sedes Educativas**
```
BODEGA → Sede (Entrada automática) → Consumo interno (Salidas)
```

## 📱 Interfaz de Usuario

### Header Mejorado
- **Información de sede:** Muestra la sede actual y usuario
- **Botón de cerrar sesión:** Para cambiar de usuario/sede
- **Indicadores de estado:** Conexión y alertas
- **Tema oscuro:** Opción de cambio de tema

### Filtros Inteligentes
- **Por sede:** Solo muestra opciones relevantes
- **Por tipo de movimiento:** Entradas/Salidas
- **Por fecha:** Filtrado por mes
- **Por producto:** Búsqueda inteligente

## 🛡️ Seguridad

### Autenticación
- **Sesiones persistentes:** Se mantiene la sesión activa
- **Validación de permisos:** Cada acción verifica permisos
- **Filtrado de datos:** Solo se muestran datos relevantes
- **Logout seguro:** Limpia todas las credenciales

### Validaciones
- **Stock disponible:** Verifica stock antes de salidas
- **Permisos de sede:** Valida que la sede pueda realizar la acción
- **Datos requeridos:** Valida campos obligatorios
- **Formato de datos:** Valida tipos y formatos

## 🚀 Instalación y Uso

### 1. **Acceso al Sistema**
- Abrir el archivo `index.html` en un navegador
- Se mostrará la pantalla de login automáticamente

### 2. **Inicio de Sesión**
- Seleccionar la sede correspondiente
- Ingresar usuario y contraseña
- Hacer clic en "Ingresar"

### 3. **Navegación**
- **Pestaña Inventario:** Registrar movimientos y ver stock
- **Pestaña Stock Completo:** Vista detallada del inventario
- **Pestaña Reportes:** Generar reportes mensuales

### 4. **Cerrar Sesión**
- Hacer clic en el botón 🚪 en el header
- Confirmar el cierre de sesión

## 🔧 Configuración

### Agregar Nueva Sede
1. Editar el archivo `index.html`
2. Buscar `CONFIGURACION_SEDES`
3. Agregar la nueva sede con sus usuarios
4. Actualizar los selectores de sede en el HTML

### Modificar Credenciales
1. Editar la función `verificarCredenciales`
2. Agregar las nuevas credenciales
3. Actualizar la documentación

## 📞 Soporte

### Problemas Comunes
1. **No puedo iniciar sesión:** Verificar credenciales
2. **No veo mis datos:** Verificar que esté en la sede correcta
3. **Alertas repetitivas:** Limpiar localStorage y reiniciar
4. **Error de conexión:** Verificar conectividad a internet

### Contacto
- **Desarrollador:** Sistema PAE Digital
- **Versión:** 2.0 con Sistema de Sedes
- **Fecha:** Diciembre 2024

---

**¡El sistema está listo para uso en producción! 🎉**

