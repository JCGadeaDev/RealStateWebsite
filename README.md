# 🏡 Real State Website

Una plataforma moderna y completa para visualizar, gestionar y administrar propiedades inmobiliarias. Desarrollada con tecnologías de vanguardia para proporcionar una experiencia de usuario óptima.

## 📋 Descripción

Real State Website es una aplicación web interactiva que permite a agentes inmobiliarios y usuarios visualizar propiedades, filtrar opciones, ver análisis de datos y gestionar información de inmuebles de forma intuitiva. La plataforma está optimizada para rendimiento y accesibilidad.

---

## 🚀 Tecnologías Utilizadas

### Frontend Framework
- **React 19.1.1** - Biblioteca de interfaz de usuario con componentes reutilizables
- **React Router DOM 6.30.1** - Enrutamiento para navegación entre páginas
- **React Router Hash Link 2.4.3** - Enlaces con hash para navegación suave

### Build Tool & Development
- **Vite 7.1.7** - Herramienta de construcción rápida y moderna
- **ESLint 9.36.0** - Linting para mantener la calidad del código
- **@vitejs/plugin-react-swc** - Transformación rápida de React usando SWC

### Estilos & UI
- **Tailwind CSS 3.x** - Framework de utilidades CSS
  - `@tailwindcss/forms` - Estilos avanzados para formularios
  - `@tailwindcss/typography` - Estilos para contenido tipográfico
  - `@tailwindcss/aspect-ratio` - Manejo de relaciones de aspecto
  - `tailwindcss-animate` - Animaciones predefinidas
  - `tailwindcss-fluid-type` - Tipografía fluida responsive
  - `tailwindcss-elevation` - Estilos de elevación (shadows)
  - PostCSS & Autoprefixer - Procesamiento CSS

- **Framer Motion 11.18.2** - Animaciones y transiciones suaves
- **Lucide React 0.552.0** - Iconos SVG personalizables
- **Class Variance Authority 0.7.1** - Gestión de variantes de clases
- **clsx 2.1.1** - Utilidad para combinar clases CSS
- **Tailwind Merge 3.3.1** - Fusion inteligente de clases Tailwind

### Estado & Gestión de Datos
- **Redux Toolkit 2.9.2** - Gestión de estado centralizada
- **React Hook Form 7.65.0** - Gestión eficiente de formularios
- **Axios 1.13.1** - Cliente HTTP para peticiones API

### Visualización de Datos
- **Recharts 3.3.0** - Gráficos y visualizaciones interactivas
- **D3 7.9.0** - Herramientas avanzadas de visualización de datos

### Internacionalización (i18n)
- **i18next 25.6.0** - Framework de internacionalización
- **react-i18next 16.2.3** - Integración de i18next con React
- **i18next-browser-languagedetector 8.2.0** - Detección automática del idioma
- **i18next-http-backend 3.0.2** - Carga de traducciones desde servidor

### Utilidades
- **React Helmet 6.1.0** - Gestión del head HTML (SEO)
- **date-fns 4.1.0** - Utilidades para manejo de fechas
- **@radix-ui/react-slot 1.2.3** - Componentes primitivos accesibles

### Testing & Calidad
- **@testing-library/react 16.3.0** - Testing de componentes React
- **@testing-library/jest-dom 6.9.1** - Matchers personalizados para Jest
- **@testing-library/user-event 14.6.1** - Simulación de eventos de usuario

### Development Tools
- **@types/react 19.1.16** - Tipos TypeScript para React
- **@types/react-dom 19.1.9** - Tipos TypeScript para React DOM
- **globals 16.4.0** - Variables globales para JavaScript
- **eslint-plugin-react-hooks 5.2.0** - Reglas de linting para React Hooks
- **eslint-plugin-react-refresh 0.4.22** - Soporte para React Fast Refresh

---

## 📁 Estructura del Proyecto

```
RealStateWebsite/
├── src/
│   ├── app/              # Configuración de la aplicación
│   ├── components/       # Componentes reutilizables
│   ├── pages/           # Páginas de la aplicación
│   ├── hooks/           # Hooks personalizados
│   ├── data/            # Datos estáticos
│   ├── utils/           # Funciones utilitarias
│   ├── styles/          # Estilos globales
│   ├── assets/          # Imágenes y recursos
│   ├── i18n/            # Configuración de internacionalización
│   ├── App.jsx          # Componente principal
│   ├── Routes.jsx       # Definición de rutas
│   └── main.jsx         # Punto de entrada
├── public/              # Archivos estáticos públicos
├── index.html           # Archivo HTML principal
├── vite.config.js       # Configuración de Vite
├── tailwind.config.js   # Configuración de Tailwind CSS
├── postcss.config.js    # Configuración de PostCSS
├── eslint.config.js     # Configuración de ESLint
├── package.json         # Dependencias del proyecto
└── .env                 # Variables de entorno

```

---

## 🛠️ Instalación y Uso

### Requisitos
- Node.js 16+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/JCGadeaDev/RealStateWebsite.git
cd RealStateWebsite

# Instalar dependencias
npm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo con HMR
npm run dev
```

La aplicación se abrirá en `http://localhost:5173`

### Build

```bash
# Crear construcción optimizada para producción
npm run build

# Previsualizar la construcción
npm run preview
```

### Linting

```bash
# Verificar el código con ESLint
npm run lint
```

---

## ✨ Características Principales

- 🎨 **Interfaz moderna** - Diseño limpio y responsive con Tailwind CSS
- 🌍 **Multiidioma** - Soporte para múltiples idiomas con i18next
- 📊 **Análisis de datos** - Gráficos interactivos con Recharts y D3
- 🚀 **Rendimiento optimizado** - Construcción rápida con Vite
- ♿ **Accesible** - Componentes primitivos accesibles de Radix UI
- 🎯 **SPA responsiva** - Aplicación de una sola página con React Router
- 📱 **Mobile-first** - Diseño responsive para todos los dispositivos

---

## 📦 Scripts Disponibles

| Script | Descripción |
|--------|------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run preview` | Previsualiza la construcción |
| `npm run lint` | Ejecuta ESLint para verificar el código |

---

## 🔗 Enlaces Útiles

- [React Documentación](https://react.dev)
- [Vite Documentación](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [React Router](https://reactrouter.com)

---

## 📝 Licencia

Este proyecto está bajo licencia MIT.

---

## 👨‍💻 Autor

**JCGadeaDev** - [GitHub Profile](https://github.com/JCGadeaDev)

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor abre un issue o crea un pull request para sugerir cambios.

---

**Última actualización:** Noviembre 2025
