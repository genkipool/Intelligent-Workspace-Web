# Capturas para la Chrome Web Store

Las imágenes promocionales de Intelligent Workspace, en los dos idiomas de la ficha.

No forman parte del sitio: esta carpeta queda fuera de `public/` y de `src/`, así que
Astro no las copia a `dist/` ni existe ninguna ruta pública que las sirva. Están aquí
solo para tenerlas versionadas y localizadas a la hora de publicar la extensión.

```
1280x800/en/   las diecisiete capturas de la ficha inglesa
1280x800/es/   las mismas diecisiete, de la versión en español del sitio
440x280/<lang>/   mosaico promocional pequeño
1400x560/<lang>/  mosaico promocional con desplazamiento (marquee)
```

Las capturas y los mosaicos no se hacen igual, y conviene no confundirlos: una captura es
una fotografía del sitio construido, y un mosaico es un gráfico diseñado. Por eso hay dos
scripts.

## Cómo se hacen

```bash
pnpm build          # se toman del build, no del servidor de desarrollo
pnpm shots          # los dos idiomas, diecisiete cada uno
pnpm shots -- es    # solo uno
pnpm shots -- en 09 # solo una, por su número
```

`scripts/store-shots.mjs` sirve `.vercel/output/static`, lanza `google-chrome-stable` sin
ventana y lo maneja por el protocolo de DevTools. Necesita además `magick` (ImageMagick).
No se ejecuta durante el build.

## Los mosaicos promocionales

```bash
pnpm promo          # los cuatro: dos tamaños por dos idiomas
```

`scripts/promo-tiles.mjs` no fotografía nada: dibuja un SVG por mosaico, con la misma
forma que `og.mjs`, y lo pasa por `rsvg-convert`. No hace falta compilar el sitio antes.

Dos cosas que la tienda exige y que el script comprueba solo:

- **24 bits sin canal alfa.** librsvg escribe siempre RGBA, así que cada fichero pasa
  después por ImageMagick, que lo aplana sobre el negro del fondo y lo escribe como
  `PNG24`. Luego el script vuelve a leerlo con `identify` y falla si no salió
  `TrueColor` de 8 bits o si el tamaño no es el pedido.
- **El texto no toca los bordes.** La tienda recorta estos mosaicos a según qué tamaños.
  Lo único que llega al borde es el fondo y la línea de acento de abajo, que está puesta
  para que se corte.

Si cambia la redacción del sitio, cambia la tabla `COPY` del script: los textos están
duplicados ahí porque un script de Node no puede importar el diccionario de TypeScript,
y `fits()` se niega a dibujar una línea que se saldría de su caja en vez de recortarla
en silencio.

## Las reglas de encuadre

Son tres, y las tres salieron de medir las capturas hechas a mano que había antes.

**Una captura es del producto, no de la página que lo vende.** La cabecera, los botones de
añadir a Chrome y de GitHub, las flechas del carrusel y sus tres barras de progreso se
ocultan antes de disparar. Nada de eso le sirve a quien mira la ficha.

**Los elementos van integrados en el fondo.** Las bandas alternas, el contenedor del hub y
la tarjeta de cada panel están un par de puntos por encima del color de la página: contra
la pizarra plana de antes no se veían, y sobre el degradado actual se leen como una caja
con fondo propio. Se les quita el fondo, el borde y la sombra, y el panel de la extensión
queda sobre el degradado. El relleno se queda: es lo que aparta el texto del borde.

**El marco horizontal es siempre el mismo.** Se toma la columna de 1560px dentro de la que
está maquetado todo, no el elemento de cada toma ni la ventana entera. Encuadrar sobre el
elemento cortaba el panel de la 05 por la derecha; encuadrar sobre la ventana de 1920
dejaba 180px de fondo muerto a cada lado y encogía la tipografía una quinta parte. Con la
columna, las diecisiete tienen el mismo margen —el relleno de 64px de la propia columna— y
ninguna roza un borde. La única excepción es la 17: sus tres tablas de atajos son más altas
que cualquier marco 8:5 que dé la columna, así que esa se echa atrás hasta la ventana, que
es exactamente lo que hacía la versión anterior de esa imagen.

Verticalmente manda el elemento de la toma, centrado. Las secciones vecinas se ocultan
mientras se dispara, así que alrededor solo queda el degradado.

## Por qué ya no se rellena

El juego anterior se hizo desde capturas de 1920×993, escaladas enteras a 1280×662 y
rellenadas arriba y abajo hasta 800 con el mismo `#212a34` del fondo. Aquello funcionaba
porque el fondo de la página era ese gris plano. Ya no lo es: es un degradado de negro a
viridiano, y una banda de gris sólido cruzando la parte de arriba sería lo primero que
vería quien mire la ficha. Ahora el recorte se toma directamente en 8:5 y se escala a
1280×800 de una vez. No se rellena, no se deforma y no se recorta de más.

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
