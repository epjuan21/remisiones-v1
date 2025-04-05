# Estructura de Carpetas y Archivos - Proyecto Remisiones

A continuación se presenta la estructura completa de carpetas y archivos dentro de la carpeta `src` del proyecto de Registro de Remisiones:

```
src/
│
├── middleware.js                # Middleware para autenticación con Supabase
│
├── app/                         # Carpeta principal de la aplicación Next.js
│   │
│   ├── page.js                  # Página principal (Home)
│   ├── layout.js                # Layout principal de la aplicación
│   ├── globals.css              # Estilos globales CSS
│   ├── favicon.ico              # Icono de la aplicación
│   │
│   ├── api/                     # API routes de Next.js
│   │
│   ├── auth/                    # Sección de autenticación
│   │   ├── layout.js            # Layout específico para páginas de autenticación
│   │   │
│   │   ├── login/               # Página de inicio de sesión
│   │   │   └── page.js          # Componente de la página de login
│   │   │
│   │   ├── recovery/            # Página de recuperación de contraseña
│   │   │   └── page.js          # Componente de recuperación de contraseña
│   │   │
│   │   └── reset-password/      # Página de restablecimiento de contraseña
│   │       └── page.js          # Componente de restablecimiento de contraseña
│   │
│   ├── dashboard/               # Sección de dashboard
│   │
│   ├── perfil/                  # Sección de perfil de usuario
│   │
│   ├── lib/                     # Librería de utilidades
│   │   ├── actions.js           # Acciones del servidor (server actions)
│   │   ├── supabase.js          # Configuración del cliente de Supabase
│   │   │
│   │   ├── hooks/               # Custom hooks de React
│   │   ├── utils/               # Utilidades generales
│   │   └── supabase/            # Utilidades específicas de Supabase
│   │
│   └── componets/               # Componentes reutilizables
│       ├── Header.js            # Componente de encabezado
│       ├── Footer.js            # Componente de pie de página
│       ├── HeroSection.js       # Componente de la sección hero
│       ├── Features.js          # Componente de características principales
│       ├── CallToAction.js      # Componente de llamada a la acción
│       │
│       ├── auth/                # Componentes relacionados con autenticación
│       │   ├── LoginForm.js     # Formulario de inicio de sesión
│       │   ├── RecoveryForm.js  # Formulario de recuperación de contraseña
│       │   └── ResetPasswordForm.js # Formulario de restablecimiento de contraseña
│       │
│       ├── dashboard/           # Componentes relacionados con el dashboard
│       ├── remisiones/          # Componentes relacionados con remisiones
│       ├── personal/            # Componentes relacionados con usuarios/personal
│       └── ui/                  # Componentes de interfaz de usuario genéricos
│
```

## Descripción de los Principales Componentes

### Página Principal
- **page.js**: Página de inicio que muestra la presentación del sistema
- **layout.js**: Layout principal que envuelve todas las páginas

### Autenticación
- **auth/layout.js**: Layout específico para las páginas de autenticación
- **auth/login/page.js**: Página de inicio de sesión
- **auth/recovery/page.js**: Página para solicitar recuperación de contraseña
- **auth/reset-password/page.js**: Página para establecer una nueva contraseña

### Componentes
- **Header.js**: Navegación superior de la aplicación
- **Footer.js**: Pie de página con información de contacto y enlaces
- **HeroSection.js**: Banner principal con título y llamada a la acción
- **Features.js**: Sección que muestra las características principales
- **CallToAction.js**: Sección secundaria para animar a registrarse/iniciar sesión
- **auth/LoginForm.js**: Formulario para iniciar sesión que integra con Supabase

### Utilidades y Configuración
- **middleware.js**: Middleware para protección de rutas y manejo de autenticación
- **lib/supabase.js**: Configuración del cliente de Supabase
- **lib/actions.js**: Acciones del servidor para operaciones de autenticación 