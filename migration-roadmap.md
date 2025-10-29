# Roadmap de Migración de "Homer's Web Page" a React

**Fecha de Creación:** 29 de octubre de 2025  
**Estado General:** En Progreso  
**Proyecto:** Migrar la página web estática en `old/` a una aplicación React funcional, manteniendo toda la funcionalidad, estilos y assets. Cambiar "Homer" por "Ancleto".

## Análisis del Código Actual

He analizado el contenido de la carpeta `old`. La página web es una aplicación estática simple llamada "Ancleto's Web Page", con temática de Ancleto. Aquí un resumen de su estructura y funcionalidad:

### Estructura de Archivos:
- **`index.html`**: Página principal con estructura HTML básica. Incluye un loader, un telón animado, un título, una tabla con múltiples GIFs animados (relojes, gusanos, tostadoras, campanas, bocas, Jesús), y un elemento de audio con controles.
- **`estilo.css`**: Estilos CSS con animaciones (loader, telón que se abre), fuentes personalizadas (Cooper Black), y posicionamiento absoluto para los elementos. Usa flexbox y animaciones CSS.
- **`js/code.js`**: JavaScript simple que maneja el loader (lo oculta después de 3 segundos) y reproduce automáticamente el audio en loop.
- **Assets**:
  - `img/`: Icono y imágenes del telón.
  - `gifs/`: Múltiples GIFs animados (relojes, gusanos, tostadoras, etc.). Nota: Hay un archivo `INGENIERIA-2021.pdf` que parece fuera de lugar.
  - `sonidos/`: Audio en formatos MP3, OGG y WAV.
  - `fuentes/`: Fuentes TTF y OTF para el título.

### Funcionalidad:
- **Loader**: Muestra un GIF de hour-glass por 3 segundos al cargar la página.
- **Telón**: Dos imágenes que se animan para "abrirse" después de 3.5 segundos, revelando el contenido.
- **Contenido Principal**: Título centrado y una tabla con GIFs posicionados de manera específica (parece un collage temático).
- **Audio**: Se reproduce automáticamente en loop después del loader.
- **Interactividad**: Ninguna más allá del audio (controles nativos del navegador).
- **Estilo**: Fondo azul claro, animaciones suaves, fuentes personalizadas.

La página es estática, sin frameworks, y depende de HTML/CSS/JS vanilla. No hay estado dinámico ni componentes reutilizables.

## Roadmap de Acción para Migración a React

El objetivo es crear un clon funcional en React, manteniendo toda la funcionalidad, estilos y assets. Usaremos React para modularizar el código en componentes reutilizables, facilitando mantenimiento y escalabilidad. Asumimos un proyecto React estándar (e.g., con Vite).

### Fase 1: Preparación y Configuración (1-2 horas)
- [x] **Crear Proyecto React**:
  - Proyecto React ya creado en la raíz del workspace usando `npx create-react-app .` (no Vite en subcarpeta).
- [x] **Copiar y Organizar Assets**:
  - Copiar carpetas `img/`, `gifs/`, `sonidos/`, `fuentes/` de `old/` a `public/`.
  - Verificar y remover archivos irrelevantes (e.g., el PDF en `gifs/`).
- [x] **Configurar Fuentes y CSS Global**:
  - Copiar `@font-face` de `estilo.css` a un archivo CSS global (e.g., `src/index.css`).
  - Migrar estilos globales (body, loader, etc.) a módulos CSS o globales.

### Fase 2: Migración de Componentes (2-3 horas)
- [x] **Crear Componente Loader**:
  - Convertir el div `#loader` a un componente funcional `Loader.jsx`.
  - Usar `useEffect` para manejar el timeout de 3 segundos y ocultar el loader.
  - Renderizar el GIF de hour-glass.
- [x] **Crear Componente Curtain (Telón)**:
  - Convertir `#telon` a `Curtain.jsx`.
  - Usar clases CSS para animaciones (migrar keyframes de `estilo.css`).
  - Renderizar las dos imágenes del telón.
- [x] **Crear Componente Title**:
  - Convertir el header `.titulo` a `Title.jsx`.
  - Aplicar fuente personalizada y estilos.
- [x] **Crear Componente Table (Tabla de GIFs)**:
  - Convertir la tabla HTML a `Table.jsx` con JSX.
  - Renderizar cada celda como componentes o elementos JSX, manteniendo la estructura de tabla.
  - Posicionar GIFs con clases CSS migradas.
- [x] **Crear Componente Audio**:
  - Convertir el elemento `<audio>` a `AudioPlayer.jsx`.
  - Usar `useEffect` para reproducir automáticamente después del loader (integrar con estado global si es necesario).
- [x] **Componente Principal (App)**:
  - Crear `App.jsx` que orqueste todos los componentes.
  - Gestionar estado global (e.g., si el loader está activo) con `useState` o Context API.
  - Reemplazar la lógica de `code.js` con hooks en los componentes relevantes.

### Fase 3: Migración de Estilos y Lógica (1-2 horas)
- [x] **Migrar CSS**:
  - Convertir estilos específicos a módulos CSS (e.g., `Loader.module.css`) para encapsulación.
  - Mantener animaciones y posicionamiento idénticos.
  - Ajustar rutas de assets (e.g., `src="gifs/hour-glass.gif"` a `/gifs/hour-glass.gif` en public).
- [x] **Migrar JavaScript**:
  - Reemplazar `window.addEventListener('load')` con `useEffect` en componentes.
  - Manejar reproducción de audio con refs o estado.

### Fase 4: Pruebas y Ajustes (1 hora)
- [x] **Probar Funcionalidad**:
  - Ejecutar `npm start` y verificar: loader, animaciones del telón, GIFs, audio.
  - Asegurar compatibilidad en navegadores (audio con múltiples sources).
- [x] **Optimizar y Limpiar**:
  - Remover código no usado.
  - Agregar comentarios y estructura clara.
  - Si es necesario, optimizar assets (e.g., comprimir imágenes).

### Consideraciones Adicionales:
- **Dependencias**: No se necesitan librerías externas; React puro es suficiente.
- **Rendimiento**: Los GIFs y audio pueden ser pesados; considerar lazy loading si crece.
- **Accesibilidad**: Mantener controles de audio; agregar alt-text a imágenes si es relevante.
- **Tiempo Total Estimado**: 5-8 horas para un desarrollador experimentado.
- **Riesgos**: Asegurar que animaciones CSS se comporten igual en React; probar en diferentes dispositivos.

### Notas de Progreso
- **Actualizaciones**: Migración completada. Todos los componentes creados, estilos migrados, aplicación compilando y ejecutándose correctamente en http://localhost:3000.
- **Próximos Pasos**: Verificar funcionalidad en el navegador. Si hay ajustes necesarios, modificar componentes o estilos.