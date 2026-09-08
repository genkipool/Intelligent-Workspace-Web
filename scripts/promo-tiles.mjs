/**
 * The Chrome Web Store's two promotional tiles, drawn once per language.
 *
 * These are not screenshots. `store-shots.mjs` photographs the built site for the
 * seventeen listing images; a promo tile is a designed graphic, so this follows
 * `og.mjs` instead: one SVG template filled from the table below, rendered by librsvg.
 *
 *     pnpm run promo
 *
 * WHAT THE STORE ASKS FOR, and what each constraint costs:
 *
 * - **Small tile, 440x280.** It appears in category grids and search results, often
 *   scaled down further. That is the whole reason the small template is centred and
 *   carries three elements and no more: a mark, the name, and one line. Anything else
 *   at this size is a grey smudge.
 * - **Marquee tile, 1400x560.** Only shown if the extension is featured, and shown
 *   large. It gets the headline, the lede and a drawing of what the product does.
 * - **24-bit, no alpha, both.** librsvg writes RGBA whatever it is given, so every file
 *   goes through ImageMagick afterwards to be flattened onto the ground colour and
 *   written as `PNG24`. `render()` then reads the result back with `identify` and fails
 *   if the channel survived: a tile the store rejects is worth catching here, not on upload.
 *
 * TEXT STAYS AWAY FROM THE EDGES. The store crops these tiles at some sizes, so nothing
 * is placed in the outer margin, and the only thing that touches an edge is the ground
 * and the accent rule that is meant to be cut.
 *
 * Needs `rsvg-convert` (librsvg) and `magick` (ImageMagick) on the PATH. The PNGs are
 * committed next to the screenshots, in `assets/chrome-web-store/`, which is outside
 * `public/` and `src/` so nothing ships them with the site.
 */

import { writeFileSync, unlinkSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'assets', 'chrome-web-store');

/**
 * The copy, taken from the site rather than written again here.
 *
 * `name` and `headline` are `meta.title` and `hero.slide1` in `src/i18n/ui.ts`; `tagline`
 * is the second half of `meta.title`, which is the one line that says what the extension
 * is. If any of them changes there, change it here: this file is the only place they are
 * duplicated, and the duplication is deliberate, since a Node script cannot import the
 * dictionary's TypeScript.
 */
const COPY = {
    en: {
        name: 'Intelligent Workspace',
        tagline: 'A browser that files itself',
        headline: ['Transform your browser into an', 'autonomous workstation'],
        lede: 'Tab rules, a floating omnibar and an AI assistant.',
        meta: '100% local  ·  No account  ·  Chrome',
        groups: ['Work', 'Docs', 'Design', 'Mail'],
    },
    es: {
        name: 'Intelligent Workspace',
        tagline: 'Un navegador que se archiva solo',
        headline: ['Transforma tu navegador en una', 'estación de trabajo autónoma'],
        lede: 'Reglas de pestañas, omnibar y asistente de IA.',
        meta: '100% local  ·  Sin cuenta  ·  Chrome',
        groups: ['Trabajo', 'Documentación', 'Diseño', 'Correo'],
    },
};

/** The colour the tiles are flattened onto: the first stop of the ground gradient. */
const GROUND = '#000000';

/**
 * Roughly how wide a string sets, in pixels. Same approximation as `og.mjs`, and used
 * for the same one job: catching a line that has outgrown its box. There is no font
 * metric available to a Node script that has not loaded the font, so `fits()` keeps a
 * 4% margin on top of it.
 */
function textWidth(text, size, bold = false) {
    return text.length * size * (bold ? 0.63 : 0.55);
}

function fits(label, text, size, bold, budget) {
    const width = textWidth(text, size, bold) * 1.04;
    if (width > budget) {
        throw new Error(
            `${label} does not fit: "${text}" sets about ${Math.round(width)}px, budget ${Math.round(budget)}px. ` +
                `Shorten the copy or drop the size.`,
        );
    }
}

/** The three-card mark from `public/assets/logo.svg`, at its own coordinates. */
const LOGO = `
    <rect x="11" y="10" width="324" height="300" rx="49" fill="#5ABCCC"/>
    <rect x="49" y="42" width="157" height="104" rx="24" fill="#FFFFFF"/>
    <rect x="80" y="87" width="324" height="300" rx="49" fill="#66ACEB"/>
    <rect x="116" y="117" width="158" height="104" rx="24" fill="#FFFFFF"/>
    <rect x="148" y="146" width="324" height="299" rx="49" fill="#4474C5"/>
    <rect x="165" y="179" width="343" height="84" rx="18" fill="#9AC5EA"/>
    <circle cx="213.5" cy="221" r="31.5" fill="#F48325"/>
    <circle cx="295.5" cy="221" r="31.5" fill="#DF5F1D"/>
    <circle cx="377.5" cy="221" r="31.5" fill="#F4D54E"/>
    <circle cx="459.5" cy="221" r="31.5" fill="#3E9D46"/>`;

/** The mark's own drawn size, so a target width can be turned into a scale. */
const LOGO_BOX = { width: 508, height: 445 };

const FONT = "'Inter', 'DejaVu Sans', 'Liberation Sans', sans-serif";

/** The ground, its two lifts and the accent rule: shared by both tiles. */
function defs() {
    return `  <defs>
    <linearGradient id="ground" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#000000"/>
      <stop offset="34%" stop-color="#04140f"/>
      <stop offset="68%" stop-color="#0a3931"/>
      <stop offset="100%" stop-color="#128a72"/>
    </linearGradient>
    <radialGradient id="glow" cx="88%" cy="86%" r="62%">
      <stop offset="0%" stop-color="#2ecc71" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#2ecc71" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="lift" cx="12%" cy="8%" r="55%">
      <stop offset="0%" stop-color="#1abc9c" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#1abc9c" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="rule" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#16a085"/>
      <stop offset="100%" stop-color="#2ecc71"/>
    </linearGradient>
  </defs>`;
}

function ground(width, height) {
    return `  <rect width="${width}" height="${height}" fill="url(#ground)"/>
  <rect width="${width}" height="${height}" fill="url(#glow)"/>
  <rect width="${width}" height="${height}" fill="url(#lift)"/>`;
}

/**
 * The small tile: 440x280, and centred.
 *
 * Centred rather than the marquee's left-aligned lockup because this one is read at a
 * glance in a grid of other tiles, where a column of left-ranged text next to a large
 * empty right half reads as a mistake. Three elements, no more.
 */
function smallTile(lang) {
    const { name, tagline } = COPY[lang];
    const WIDTH = 440;
    const HEIGHT = 280;
    const MARGIN = 34;
    const SAFE = WIDTH - MARGIN * 2;

    /* Bigger than the type needs, on purpose: in a grid of tiles the mark is what gets
       recognised, and the store shows this one smaller than 440 wide more often than not. */
    const markWidth = 94;
    const scale = markWidth / LOGO_BOX.width;
    const markX = (WIDTH - markWidth) / 2;
    const markY = 40;

    const nameSize = 27;
    const taglineSize = 15.5;

    fits('small: name', name, nameSize, true, SAFE);
    fits('small: tagline', tagline, taglineSize, false, SAFE);

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
${defs()}
${ground(WIDTH, HEIGHT)}

  <g transform="translate(${markX}, ${markY}) scale(${scale})">${LOGO}
  </g>

  <text x="${WIDTH / 2}" y="190" text-anchor="middle" font-family="${FONT}" font-size="${nameSize}" font-weight="800" fill="#FFFFFF" letter-spacing="-0.7">${name}</text>
  <text x="${WIDTH / 2}" y="220" text-anchor="middle" font-family="${FONT}" font-size="${taglineSize}" font-weight="500" fill="#8fe3c9" letter-spacing="0.2">${tagline}</text>

  <rect x="0" y="${HEIGHT - 5}" width="${WIDTH}" height="5" fill="url(#rule)"/>
</svg>
`;
}

/**
 * The four grouped tabs on the right of the marquee.
 *
 * It is the product's own shape rather than decoration: a rounded card per group, each
 * with the coloured dot Chrome gives a tab group and a couple of tab rows under it. The
 * colours are four of Chrome's nine, which is what the extension actually assigns.
 */
function groupCard(lang, x, y, width) {
    const colours = ['#2ecc71', '#5AA9E6', '#B07BD6', '#F4A259'];
    const rowHeight = 74;
    const gap = 14;

    return COPY[lang].groups
        .map((label, i) => {
            const top = y + i * (rowHeight + gap);
            const dot = x + 26;
            const textX = x + 48;
            // Two tab rows under each group's name, at widths that vary so the card reads
            // as a list rather than as a placeholder block.
            const barWidths = [
                [168, 132],
                [196, 108],
                [152, 150],
                [124, 158],
            ][i];
            return `  <g>
    <rect x="${x}" y="${top}" width="${width}" height="${rowHeight}" rx="14" fill="#0d1f1a" fill-opacity="0.72" stroke="#1e4c40" stroke-width="1.5"/>
    <circle cx="${dot}" cy="${top + 24}" r="7" fill="${colours[i]}"/>
    <text x="${textX}" y="${top + 29}" font-family="${FONT}" font-size="16" font-weight="700" fill="#e6f5ef">${label}</text>
    <rect x="${textX}" y="${top + 44}" width="${barWidths[0]}" height="8" rx="4" fill="#2a5f52"/>
    <rect x="${textX + barWidths[0] + 12}" y="${top + 44}" width="${barWidths[1]}" height="8" rx="4" fill="#1f4a40"/>
  </g>`;
        })
        .join('\n');
}

/**
 * The marquee: 1400x560. Wide and short, so the lockup runs down the left and the
 * grouped-tabs drawing fills the right instead of the text stretching across all of it.
 */
function marqueeTile(lang) {
    const { name, headline, lede, meta } = COPY[lang];
    const WIDTH = 1400;
    const HEIGHT = 560;
    const MARGIN = 88;

    /**
     * The text column stops here; everything right of it belongs to the drawing.
     *
     * 880 and not less: the longest headline line is thirty characters, and at any size
     * worth setting a marquee headline in, thirty characters need most of this. The first
     * draft gave the text 700 and `fits()` refused it, which is what `fits()` is for.
     */
    const COLUMN = 880;
    const SAFE = COLUMN - MARGIN;

    const markWidth = 104;
    const scale = markWidth / LOGO_BOX.width;

    const nameSize = 30;
    const headlineSize = 38;
    const ledeSize = 23;
    const metaSize = 19;

    const nameX = MARGIN + markWidth + 24;
    fits('marquee: name', name, nameSize, true, COLUMN - nameX + MARGIN);
    headline.forEach((line, i) => fits(`marquee: headline ${i + 1}`, line, headlineSize, true, SAFE));
    fits('marquee: lede', lede, ledeSize, false, SAFE);
    fits('marquee: meta', meta, metaSize, false, SAFE);

    const cardX = 910;
    const cardWidth = WIDTH - cardX - MARGIN;

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
${defs()}
${ground(WIDTH, HEIGHT)}

  <g transform="translate(${MARGIN}, 74) scale(${scale})">${LOGO}
  </g>
  <text x="${nameX}" y="139" font-family="${FONT}" font-size="${nameSize}" font-weight="700" fill="#FFFFFF" letter-spacing="-0.5">${name}</text>

  <text font-family="${FONT}" font-size="${headlineSize}" font-weight="800" fill="#FFFFFF" letter-spacing="-1.4">
    <tspan x="${MARGIN}" y="286">${headline[0]}</tspan>
    <tspan x="${MARGIN}" y="344">${headline[1]}</tspan>
  </text>

  <text x="${MARGIN}" y="404" font-family="${FONT}" font-size="${ledeSize}" font-weight="400" fill="#cfe6de">${lede}</text>
  <text x="${MARGIN}" y="466" font-family="${FONT}" font-size="${metaSize}" font-weight="600" fill="#6fe0c2" letter-spacing="0.3">${meta}</text>

${groupCard(lang, cardX, 111, cardWidth)}

  <rect x="0" y="${HEIGHT - 7}" width="${WIDTH}" height="7" fill="url(#rule)"/>
</svg>
`;
}

/** Renders one SVG to a flattened, alpha-free PNG, then proves the alpha is gone. */
function render(svg, file, width, height) {
    const svgPath = `${file}.svg`;
    writeFileSync(svgPath, svg);
    try {
        execFileSync('rsvg-convert', ['-w', String(width), '-h', String(height), '-o', file, svgPath]);
    } catch (error) {
        console.error('rsvg-convert failed. Install librsvg (`pacman -S librsvg`) and run again.');
        throw error;
    } finally {
        // The SVG is the intermediate, not an asset.
        unlinkSync(svgPath);
    }

    // The store rejects an image with an alpha channel, and librsvg always writes one.
    execFileSync('magick', [
        file,
        '-background',
        GROUND,
        '-alpha',
        'remove',
        '-alpha',
        'off',
        `PNG24:${file}`,
    ]);

    /* Piped rather than space-separated on purpose: `%[channels]` answers `srgb  3.0`,
       spaces and all, so splitting on a space loses every field after it. */
    const probe = execFileSync('magick', ['identify', '-format', '%w|%h|%[depth]|%[type]', file])
        .toString()
        .trim();
    const [w, h, depth, type] = probe.split('|');
    if (Number(w) !== width || Number(h) !== height) {
        throw new Error(`${path.basename(file)} came out ${w}x${h}, expected ${width}x${height}`);
    }
    /* `TrueColor` is three channels at 8 bits: exactly the 24-bit PNG the store asks for.
       `TrueColorAlpha` is what librsvg hands over and what the flatten above removes. */
    if (type !== 'TrueColor' || Number(depth) !== 8) {
        throw new Error(
            `${path.basename(file)} is ${type} at ${depth}-bit; the store wants TrueColor at 8-bit (24-bit, no alpha)`,
        );
    }
    console.log(`wrote ${path.relative(ROOT, file)}  ${w}x${h}  ${type} ${depth}-bit`);
}

const TILES = [
    { dir: '440x280', name: 'small-promo-tile', build: smallTile, width: 440, height: 280 },
    { dir: '1400x560', name: 'marquee-promo-tile', build: marqueeTile, width: 1400, height: 560 },
];

for (const tile of TILES) {
    for (const lang of Object.keys(COPY)) {
        const dir = path.join(OUT, tile.dir, lang);
        mkdirSync(dir, { recursive: true });
        render(tile.build(lang), path.join(dir, `${tile.name}.png`), tile.width, tile.height);
    }
}
