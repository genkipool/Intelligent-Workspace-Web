# Original User Request

## 2026-08-30T01:23:15Z

Rediseño integral y ampliación de la landing page de Intelligent Workspace para convertirla en una web premium, moderna, elegante y panorámica (estilo radix-community.genkipool.com), con integración total de todas las herramientas de la extensión, eliminación de menciones a Vimium, corrección de atajos de teclado vs navegación, rediseño del tab-nav y contraste impecable en modo claro sin fondos oscuros residuales ni textos invisibles.

Working directory: /home/lrb85/proyectos/Intelligent-Workspace-Web
Integrity mode: development

## Requirements

### R1. Cobertura Exhaustiva de Todas las Funcionalidades de la Extensión

Incorporar secciones dedicadas y tarjetas interactivas para el arsenal completo de herramientas de Intelligent Workspace (/home/lrb85/proyectos/intelligent_workspace/Intelligent_Tab_Group_Svelte/):

1. **Gestión de Pestañas y Espacios de Trabajo**: Agrupación inteligente por IA, hibernación (RAM saver), árbol de pestañas, pestañas cerradas recientemente con restauración en 1 clic.
2. **Productividad y Organización**:
    - **Gestor de Marcadores**: Búsqueda semántica, etiquetas y organización jerárquica.
    - **Gestor de Descargas**: Control y filtrado rápido sin abrir páginas pesadas de Chrome.
    - **Historial Inteligente**: Cronología y agrupación por dominio.
    - **Notas Rápidas & Markdown**: Bloc de notas integrado en el panel lateral.
    - **Modo Lectura**: Vista limpia sin anuncios ni distracciones.
    - **Galería de Medios**: Extracción y visualización de imágenes/vídeos de pestañas activas.
    - **Web de Gestión de Actividad y Analíticas**: Dashboard a pantalla completa con mapa de calor, tiempo de foco y métricas.
    - **Menú Overflow**: Silenciar todas las pestañas, deduplicador, cerrar a la derecha, recarga masiva.
3. **Herramientas Rápidas (Navaja Suiza)**: Split Screen, Picture-in-Picture, OCR / Escaneo de texto en imágenes, Cuentagotas (Color Picker), Limpiador de Cookies y Temas Viridian.

### R2. Refactorización del Selector de Pestañas (`tab-nav`) y Secciones Interactivas

- Rediseñar `<div class="tab-nav" role="tablist">` con una barra de navegación moderna, estilizada, con micro-interacciones suaves, bordes sutiles, estados activos destacados con gradiente Viridian e iconos vectoriales SVG nítidos.

### R3. Corrección de la Sección de Teclado y Atajos ("Suelta el ratón")

- Separar claramente los **Atajos Globales de Control de Pestañas/Ventana** (Plegar/desplegar grupos, Silenciar, Búsqueda omnibox, Ordenar) de las **Etiquetas de Navegación por Teclado** (Hint navigation).
- Eliminar cualquier mención de marcas externas como "Vimium" y usar nomenclatura propia de producto: «Navegación Visual por Etiquetas» o «Keyboard Hint Navigation».

### R4. Modo Claro 100% Impecable y Cero Contenedores Oscuros

- Auditoría total de la sección "Una Extensión Ligera Reemplaza a Diez" (`SwissArmyBento.astro`) y resto de componentes:
    - Eliminar cualquier fondo `#111a22`, `#1b2631`, `#091117`, `rgba(0,0,0,...)` residual en modo claro.
    - Asegurar que todas las etiquetas (`.tag-pill`, `.perm-tag`, `.card-tag`, `.latency-pill`), textos, bordes e iconos tengan fondos blancos/crema claros y tipografía oscura de máximo contraste (`#0b1c15`, `#1e382e`, `#3d5a4e`).

### R5. Arquitectura Panorámica (1560px), i18n Completo (ES/EN) y 0 Errores

- Conservar soporte bilingüe completo (ES y EN) en `src/i18n/ui.ts` con paridad 100% probada por tests unitarios.
- Pasar limpiamente `astro check`, `vitest run`, `astro build`, `check:headers` y `prettier --check` con 0 errores y 0 warnings.

## Acceptance Criteria

### Verificación de Funcionalidades y Contenido

- [ ] Todas las características clave (Marcadores, Descargas, Historial, Pestañas Cerradas, Notas, Modo Lectura, Galería de Medios, Menú Overflow y Dashboard de Actividad) están descritas e ilustradas visualmente en la web.
- [ ] No aparece ninguna mención a "Vimium" en todo el código ni en los diccionarios i18n (`src/i18n/ui.ts`).
- [ ] La sección de teclado separa explícitamente navegación por enlaces vs atajos del sistema.

### Verificación Visual y de Tema Claro

- [ ] En modo claro (`data-theme="light"`), no existe ningún contenedor oscuro, tarjeta negra o texto blanco invisible sobre fondo claro.
- [ ] La sección `SwissArmyBento` presenta todas las tarjetas con fondo blanco `#ffffff`, borde sutil y textos oscuros de alto contraste.
- [ ] El componente `tab-nav` presenta un diseño moderno con alta fidelidad visual en ambos temas.

### Verificación Programática y de Calidad

- [ ] `pnpm run check` pasa con 0 errores y 0 warnings.
- [ ] `pnpm run test` pasa el 100% de los tests unitarios.
- [ ] `pnpm run build` genera la salida estática sin fallos.
- [ ] `pnpm run check:headers` valida las políticas CSP.
- [ ] `pnpm run format` valida el formateo Prettier sin diferencias.
