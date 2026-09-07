/**
 * The Chrome Web Store listing's screenshots, both languages, from the built site.
 *
 * The seventeen images in `assets/chrome-web-store/1280x800/<lang>/` are shots of this site —
 * its hero, its five pillar panels, its showcases — so they can be taken again rather
 * than kept as the only copy. That matters twice over: the first set was made by hand
 * from originals that no longer exist, and it was only ever English, which left the
 * Spanish listing showing English screenshots.
 *
 * The framing is the shot table below and nothing else. Each entry names the element the
 * shot is built around, the pillar tab or hero slide to choose first, and anything inside
 * that element to keep out of the picture. There is not a pixel offset anywhere, so a
 * section that grows by a line still lands in the middle of its own shot.
 *
 *     pnpm run shots          both languages, all seventeen each
 *     pnpm run shots -- es    one language
 *     pnpm run shots -- en 09 one shot, by its number
 *
 * Each shot is a clip around its own element rather than a photograph of the viewport:
 * the element's box, grown to 8:5 about its centre, captured at the scale that lands it
 * on 1280x800. That is what keeps the navigation bar and the next section out of a shot
 * of the hero, and it is why nothing here is padded. The old set was 1920x993 scaled to
 * 1280x662 and filled top and bottom to 800 with flat `#212a34`, which worked only while
 * the page background was that flat colour. It is a gradient now, and a band of solid
 * grey across the top of every shot would be the first thing a reader saw.
 *
 * Needs `google-chrome-stable` and `magick` (ImageMagick) on the PATH. It builds nothing:
 * run `pnpm build` first, since it serves `.vercel/output/static`.
 */

import { spawn, execFileSync } from 'node:child_process';
import { mkdirSync, rmSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import os from 'node:os';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'assets', 'chrome-web-store', '1280x800');
const STATIC = path.join(ROOT, '.vercel', 'output', 'static');

const PORT = 4319;
const DEVTOOLS_PORT = 9322;
const VIEWPORT = { width: 1920, height: 1200 };
const TARGET = { width: 1280, height: 800 };

/**
 * Where each shot sits.
 *
 * `at` is the element the shot is built around: the frame takes its width and its centre.
 * `tab` clicks a pillar first and `slide` picks a hero slide, both the way a reader would.
 * `hide` is for parts of that element this particular shot does not want — which is how
 * 05 and 09 differ, one being the panel alone and the other the panel under its strip.
 */
/** The hub's heading and its tab strip: present in shot 09, out of the way in 04-08. */
const PILLAR_FURNITURE = ['#pilares .section-header', '#pilares .tab-nav'];

const SHOTS = [
    { n: '01', name: 'hero-workstation', at: '#hero', slide: 0 },
    { n: '02', name: 'hero-omnibar-teclado', at: '#hero', slide: 1 },
    { n: '03', name: 'panel-lateral-grupos', at: '#hero', slide: 2 },
    { n: '04', name: 'agente-ia', at: '#tab-agent', tab: 'agent', hide: PILLAR_FURNITURE },
    { n: '05', name: 'reglas-agrupado-automatico', at: '#tab-tabs', tab: 'tabs', hide: PILLAR_FURNITURE },
    { n: '06', name: 'tiempo-y-foco', at: '#tab-focus', tab: 'focus', hide: PILLAR_FURNITURE },
    { n: '07', name: 'teclado-y-snippets', at: '#tab-keys', tab: 'keys', hide: PILLAR_FURNITURE },
    { n: '08', name: 'musica-y-radio', at: '#tab-media', tab: 'media', hide: PILLAR_FURNITURE },
    { n: '09', name: 'pestanas-y-reglas', at: '[data-tabs-container]', tab: 'tabs' },
    { n: '10', name: 'omnibar-prefijos', at: '#omnibar' },
    { n: '11', name: 'modo-lectura-voz', at: '#modo-lectura' },
    { n: '12', name: 'video-flotante-pip', at: '#multimedia' },
    // The captures block only: this section carries a second row about backups, and a
    // frame around both fits neither. The heading goes with the row it does not describe.
    {
        n: '13',
        name: 'capturas-y-galeria',
        at: '#capturas-copias .keep-row',
        hide: ['#capturas-copias .section-header', '#capturas-copias .keep-row.reversed'],
    },
    { n: '14', name: 'actividad-web-limites', at: '#actividad' },
    { n: '15', name: 'marcadores-historial-descargas', at: '#marcadores' },
    { n: '16', name: 'snippets-variables', at: '#snippets' },
    // Top-aligned: the three shortcut tables are taller than any 8:5 frame, so the crop
    // has to start at the heading rather than land wherever the middle happens to be.
    { n: '17', name: 'atajos-de-teclado', at: '#teclado', top: true },
];

const [, , langArg, shotArg] = process.argv;
const LANGS = langArg ? [langArg] : ['en', 'es'];
const WANTED = shotArg ? SHOTS.filter((s) => s.n === shotArg) : SHOTS;

if (LANGS.some((l) => l !== 'en' && l !== 'es')) {
    console.error(`Unknown language "${langArg}". Use en or es.`);
    process.exit(1);
}
if (WANTED.length === 0) {
    console.error(`No shot numbered "${shotArg}".`);
    process.exit(1);
}
if (!existsSync(STATIC)) {
    console.error('No build to shoot. Run `pnpm build` first.');
    process.exit(1);
}

/* ── CDP, over the WebSocket Node already has ─────────────────────────────────── */

let socket;
let sessionId;
let nextId = 1;
const pending = new Map();

/**
 * One request. Before the tab is attached there is no session and the command goes to
 * the browser itself; after it, every command carries the session and lands in the page.
 */
function send(method, params = {}) {
    const id = nextId++;
    socket.send(JSON.stringify(sessionId ? { id, sessionId, method, params } : { id, method, params }));
    return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
}

/** `expression` in the page, awaited, with the result unwrapped. */
async function evaluate(expression) {
    const { result, exceptionDetails } = await send('Runtime.evaluate', {
        expression,
        awaitPromise: true,
        returnByValue: true,
    });
    if (exceptionDetails) throw new Error(exceptionDetails.exception?.description ?? 'page threw');
    return result.value;
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/* ── The page state each shot needs ───────────────────────────────────────────── */

/**
 * Put `selector` where the shot wants it, with the page settled around it.
 *
 * Everything here runs through the page's own controls rather than around them: a pillar
 * is chosen by clicking its tab, a hero slide by clicking its indicator. The alternative
 * — setting classes by hand — photographs a state the site can never actually be in.
 *
 * `data-reveal` is the exception. The scroll-reveal script fades a section in as it
 * arrives, and a screenshot taken mid-fade catches it at half opacity; the shots that
 * came out washed out in the first run were all that. Marking every section revealed
 * before scrolling is the same end state, reached without waiting on an animation.
 */
async function stage(shot) {
    await evaluate(`
        document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-in'));
        document.documentElement.style.scrollBehavior = 'auto';
        document.querySelectorAll('.site-header, .scroll-buttons, [data-scroll-buttons]')
            .forEach((el) => { el.style.visibility = 'hidden'; });

        // content-visibility: auto skips a section the viewport is nowhere near, which is
        // exactly what a clip reaching past the viewport asks Chrome to draw. Shots 16 and
        // 17 came back as empty background for that reason alone. Turning it off for the
        // capture changes what is painted, never what is laid out.
        const style = document.createElement('style');
        style.textContent =
            '.section-container{content-visibility:visible!important;contain-intrinsic-size:auto!important}';
        document.head.append(style);
        true;
    `);

    if (shot.slide !== undefined) {
        await evaluate(`document.querySelector('[data-slide-target="${shot.slide}"]').click(); true;`);
        await sleep(700);
    }

    if (shot.tab) {
        await evaluate(`document.querySelector('[data-tab="tab-${shot.tab}"]').click(); true;`);
        await sleep(500);
    }

    /*
     * The frame, in page coordinates.
     *
     * The element's own box decides the shot; it is then grown along whichever axis is
     * short until it is 8:5, about its centre, and nudged back inside the document if
     * that pushed it over an edge. A section wider than 8:5 — every one of them — grows
     * downwards and upwards equally, which is why the shots sit centred without a single
     * offset written anywhere.
     */
    /*
     * Everything that is not this shot, out of the way.
     *
     * A section is wider than 8:5 and shorter than it, so the frame always grows
     * downwards and upwards past the section's own edges — and the first run put half of
     * the previous section's panel across the top of shot 14, plus the sticky header
     * floating through the middle of it. Hiding the neighbours leaves the section sitting
     * on the page's own gradient, which is the composition the first set had and the one
     * a listing wants. `visibility` rather than `display`: nothing below moves, so the
     * box measured next is the box a reader sees.
     */
    await evaluate(`
        (() => {
            const target = document.querySelector('${shot.at}');
            if (!target) return false;
            document.querySelectorAll('main > *, body > footer').forEach((el) => {
                const keep = el === target || el.contains(target) || target.contains(el);
                el.style.visibility = keep ? '' : 'hidden';
            });
            // Furniture that belongs to the section but not to this shot: the pillar
            // strip and the hub's own heading, which otherwise put the tail of a
            // paragraph across the top of a panel shot.
            ${JSON.stringify(shot.hide ?? [])}.forEach((selector) => {
                document.querySelectorAll(selector).forEach((el) => { el.style.visibility = 'hidden'; });
            });
            return true;
        })()
    `);

    /*
     * On screen, and only then measured.
     *
     * `.section-container` carries `content-visibility: auto` with an 800px intrinsic
     * placeholder, so a section the page has never scrolled near reports that placeholder
     * as its height rather than its real one. Measuring first put shot 14's content in the
     * bottom third of a frame sized for a section 160px taller than it is. Scrolling it
     * into view, letting the reveal settle, and measuring after is the whole fix.
     */
    await evaluate(`
        (() => {
            const el = document.querySelector('${shot.at}');
            if (!el) return false;
            el.scrollIntoView({ block: 'center', behavior: 'instant' });
            return true;
        })()
    `);
    await sleep(700);

    const frame = await evaluate(`
        (() => {
            const anchor = document.querySelector('${shot.at}');
            if (!anchor) return null;
            // An alternating band runs the full width of the window while its contents
            // stop at the 1560px measure, so framing on the section shrank the content to
            // two thirds of the shot. The measure is what the eye reads as the page.
            const el = anchor.matches('.wrap') ? anchor : (anchor.querySelector('.wrap') ?? anchor);
            const box = el.getBoundingClientRect();
            // The element's own width sets the frame, always, and 8:5 sets the height
            // from it. Growing the width instead when the element is taller than 8:5 —
            // the first rule here — asked for a 2560px frame on a 1920px page, and the
            // shots of the two tallest sections came back as empty background with the
            // section somewhere off the left edge.
            const width = box.width;
            const height = width * ${TARGET.height} / ${TARGET.width};
            const x = box.left + window.scrollX;
            // Centred on the element, unless the shot asks for its top edge. A section
            // taller than its own frame gets cropped either way, and the shortcut tables
            // are taller in Spanish than in English — enough that centring cut the
            // heading off the top of one language and not the other.
            const y = box.top + window.scrollY
                + (${shot.top ? 'false' : 'true'} ? (box.height - height) / 2 : 0);

            // The gradient, pinned over the frame. The ambient layer is fixed, so it
            // paints the viewport and nothing outside it, and a clip that reached past
            // the scroll position came back with the body's flat colour across part of it
            // and a hard seam through the middle. Laying the same layer over exactly the
            // frame gives that region the gradient it would have if the reader had it on
            // screen: the same picture, without depending on where the page is scrolled.
            const ambient = document.querySelector('.ambient-bg');
            if (ambient) {
                ambient.style.position = 'absolute';
                ambient.style.top = y + 'px';
                ambient.style.left = '0';
                ambient.style.width = '100%';
                ambient.style.height = height + 'px';
                const dots = ambient.querySelector('.dot-grid');
                if (dots) dots.style.position = 'absolute';
            }

            return { x, y, width, height };
        })()
    `);
    if (!frame) throw new Error(`selector ${shot.at} matched nothing`);

    // Long enough for the reveal transitions and any lazy layout to settle.
    await sleep(900);
    return frame;
}

/* ── Chrome, and the server it reads ──────────────────────────────────────────── */

const profile = path.join(os.tmpdir(), `iw-shots-${process.pid}`);
let server;
let chrome;

function stop() {
    socket?.close();
    chrome?.kill();
    server?.kill();
    // Chrome is still flushing its profile as it goes down, so the first unlink races it.
    // The retries win that race; a leftover directory in /tmp is not worth an exit code.
    try {
        rmSync(profile, { recursive: true, force: true, maxRetries: 20, retryDelay: 100 });
    } catch {}
}

process.on('exit', stop);
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => process.exit(1));

async function waitFor(url, what) {
    for (let attempt = 0; attempt < 100; attempt++) {
        try {
            const response = await fetch(url);
            if (response.ok) return response;
        } catch {}
        await sleep(100);
    }
    throw new Error(`${what} never came up`);
}

mkdirSync(OUT, { recursive: true });

server = spawn(process.execPath, ['scripts/serve-built.mjs', STATIC, String(PORT)], {
    cwd: ROOT,
    stdio: 'ignore',
});
await waitFor(`http://localhost:${PORT}/`, 'the static server');

chrome = spawn(
    'google-chrome-stable',
    [
        '--headless=new',
        `--remote-debugging-port=${DEVTOOLS_PORT}`,
        `--user-data-dir=${profile}`,
        `--window-size=${VIEWPORT.width},${VIEWPORT.height}`,
        '--force-device-scale-factor=1',
        '--hide-scrollbars',
        '--no-first-run',
        '--no-sandbox',
        '--disable-gpu',
        '--disable-dev-shm-usage',
        'about:blank',
    ],
    { stdio: 'ignore' },
);

const version = await (await waitFor(`http://localhost:${DEVTOOLS_PORT}/json/version`, 'Chrome')).json();

socket = new WebSocket(version.webSocketDebuggerUrl);
socket.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    const waiting = pending.get(message.id);
    if (!waiting) return;
    pending.delete(message.id);
    message.error ? waiting.reject(new Error(message.error.message)) : waiting.resolve(message.result);
});
await new Promise((resolve, reject) => {
    socket.addEventListener('open', resolve, { once: true });
    socket.addEventListener('error', reject, { once: true });
});

// One tab for everything, with a viewport the window size cannot argue with.
const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
({ sessionId } = await send('Target.attachToTarget', { targetId, flatten: true }));

await send('Page.enable');
await send('Runtime.enable');
await send('Emulation.setDeviceMetricsOverride', {
    width: VIEWPORT.width,
    height: VIEWPORT.height,
    deviceScaleFactor: 1,
    mobile: false,
});

/* ── Take them ────────────────────────────────────────────────────────────────── */

for (const lang of LANGS) {
    const url = lang === 'en' ? `http://localhost:${PORT}/` : `http://localhost:${PORT}/es/`;
    const directory = path.join(OUT, lang);
    mkdirSync(directory, { recursive: true });

    for (const shot of WANTED) {
        await send('Page.navigate', { url });
        // `Page.loadEventFired` needs an event subscription; polling readyState is one
        // line and cannot miss the event by attaching a moment late.
        for (let attempt = 0; attempt < 100; attempt++) {
            if ((await evaluate('document.readyState')) === 'complete') break;
            await sleep(100);
        }
        await sleep(400);

        const frame = await stage(shot);

        const { data } = await send('Page.captureScreenshot', {
            format: 'png',
            captureBeyondViewport: true,
            clip: { ...frame, scale: TARGET.width / frame.width },
        });
        const file = path.join(directory, `${shot.n}-${shot.name}.png`);
        // The clip lands within a pixel of the target; `!` settles the rounding rather
        // than shipping a listing image that is 1280x799. `color-type=2` is 24-bit RGB
        // with no alpha, which is the only PNG the Web Store accepts, and the compression
        // triple is lossless — the same pixels, about 12% smaller, over 34 files.
        execFileSync(
            'magick',
            [
                'png:-',
                '-resize',
                `${TARGET.width}x${TARGET.height}!`,
                '-strip',
                '-define',
                'png:color-type=2',
                '-define',
                'png:compression-level=9',
                '-define',
                'png:compression-filter=5',
                '-define',
                'png:compression-strategy=1',
                file,
            ],
            { input: Buffer.from(data, 'base64') },
        );
        console.log(`${lang}  ${path.relative(ROOT, file)}`);
    }
}

stop();
