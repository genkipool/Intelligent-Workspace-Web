# Capturas para la Chrome Web Store

Copia de seguridad de las imágenes promocionales de Intelligent Workspace, en los dos
idiomas de la ficha.

No forman parte del sitio: esta carpeta queda fuera de `public/` y de `src/`, así que
Astro no las copia a `dist/` ni existe ninguna ruta pública que las sirva. Están aquí
solo para tenerlas versionadas y localizadas a la hora de publicar la extensión.

```
1280x800/en/   las diecisiete de la ficha inglesa
1280x800/es/   las mismas diecisiete, de la versión en español del sitio
```

## Cómo se hacen

```bash
pnpm build          # las capturas se toman del build, no del servidor de desarrollo
pnpm shots          # los dos idiomas, diecisiete cada uno
pnpm shots -- es    # solo uno
pnpm shots -- en 09 # solo una, por su número
```

`scripts/store-shots.mjs` sirve `.vercel/output/static`, lanza `google-chrome-stable` sin
ventana y lo maneja por el protocolo de DevTools. Cada imagen es un recorte alrededor de
un elemento real de la página: el guion dice de qué elemento se trata, qué pestaña o
diapositiva elegir antes, y qué partes de ese elemento dejar fuera. No hay ni un solo
desplazamiento en píxeles, así que una sección que crece una línea sigue quedando centrada
en su propia captura.

Necesita `google-chrome-stable` y `magick` (ImageMagick). No se ejecuta durante el build.

## Por qué ya no se rellena

El primer juego se hizo a mano desde capturas de 1920×993, escaladas enteras a 1280×662 y
rellenadas arriba y abajo hasta 800 con el mismo `#212a34` del fondo. Aquello funcionaba
porque el fondo de la página era ese gris plano. Ya no lo es: es un degradado de negro a
viridiano, y una banda de gris sólido cruzando la parte de arriba sería lo primero que
vería quien mire la ficha.

Ahora el recorte se toma directamente en 8:5 y se escala a 1280×800 de una vez. No se
rellena, no se recorta de más y no se deforma nada.

## Qué hay en cada una

| Archivo                                 | Contenido                                                                           |
| --------------------------------------- | ----------------------------------------------------------------------------------- |
| `01-hero-workstation.png`               | Portada, primera diapositiva: «un navegador que se archiva solo» + gestor de reglas |
| `02-hero-omnibar-teclado.png`           | Portada, segunda: omnibar universal y control por teclado                           |
| `03-panel-lateral-grupos.png`           | Portada, tercera: el panel lateral completo con la lista de grupos                  |
| `04-agente-ia.png`                      | Pilar «Agente IA»: el asistente ejecutando acciones sobre el navegador              |
| `05-reglas-agrupado-automatico.png`     | Pilar «Pestañas y reglas»: reglas, autocolapso y suspensión                         |
| `06-tiempo-y-foco.png`                  | Pilar «Tiempo y foco»: actividad web, límites por sitio y Pomodoro                  |
| `07-teclado-y-snippets.png`             | Pilar «Teclado»: etiquetas de letra sobre la página y snippets con `$$`             |
| `08-musica-y-radio.png`                 | Pilar «Música y radio»: reproductor local y radio online                            |
| `09-pestanas-y-reglas.png`              | El mismo panel que la 05, esta vez bajo la tira de pestañas                         |
| `10-omnibar-prefijos.png`               | Barra de comandos: prefijos, comandos y etiquetas de enlace                         |
| `11-modo-lectura-voz.png`               | Modo lectura y lectura en voz alta con resaltado                                    |
| `12-video-flotante-pip.png`             | Picture-in-picture y bucle dentro de YouTube                                        |
| `13-capturas-y-galeria.png`             | Capturas (visible, completa, área, grupo) y galería con OCR                         |
| `14-actividad-web-limites.png`          | Actividad web al detalle: topes diario, semanal y horario                           |
| `15-marcadores-historial-descargas.png` | Marcadores, historial, cerradas y descargas en el panel                             |
| `16-snippets-variables.png`             | Abreviaturas que se expanden con variables `{{así}}`                                |
| `17-atajos-de-teclado.png`              | Tabla completa de atajos: omnibar, página y navegador                               |
