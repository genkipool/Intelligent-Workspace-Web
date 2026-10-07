/**
 * Lighthouse against the real build, so "did it get faster" has an answer.
 *
 * Two things this prints that the Lighthouse report buries, and that between them explain
 * most arguments about the number:
 *
 *   - The five metrics the performance score is actually made of, with their weights.
 *     Everything else in the report — unused CSS, render-blocking resources, forced
 *     reflow — carries weight zero. They are worth fixing on their own merits, and they
 *     cannot move the score by a single point.
 *
 *   - Mobile and desktop separately. Mobile is the default preset and the harsher one:
 *     four times the CPU throttling and a slow connection. A site at 100 on desktop can
 *     sit well below it on mobile, and the mobile number is the one people quote.
 *
 * Lighthouse is not a dependency of this project — it pulls in a browser driver and this
 * is a five-file marketing site. It is fetched on demand:
 *
 *     pnpm run perf
 *
 * Pass a URL to measure something already running, including the deployed site:
 *
 *     node scripts/lighthouse.mjs https://example.com
 */
import { spawn, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const TARGET = process.argv[2];

if (TARGET !== undefined) {
    try {
        const parsed = new URL(TARGET);
        if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
            console.error(`Invalid URL protocol: "${parsed.protocol}". Only http: and https: are allowed.`);
            process.exit(1);
        }
    } catch {
        console.error(
            `Invalid URL provided to lighthouse audit: "${TARGET}". Expected a valid http:// or https:// URL.`,
        );
        process.exit(1);
    }
}

const PORT = 4173;
const OUT = fs.mkdtempSync(path.join(os.tmpdir(), 'iw-lh-'));

/** The audits that carry weight. Everything else in the report is advice. */
const SCORED = [
    ['first-contentful-paint', 10],
    ['speed-index', 10],
    ['largest-contentful-paint', 25],
    ['total-blocking-time', 30],
    ['cumulative-layout-shift', 25],
];

function run(command, args, options = {}) {
    const result = spawnSync(command, args, { encoding: 'utf8', ...options });
    if (result.error) throw result.error;
    return result;
}

function report(label, file) {
    const result = JSON.parse(fs.readFileSync(file, 'utf8'));
    const score = Math.round(result.categories.performance.score * 100);
    console.log(`\n  ${label.padEnd(8)} ${score}/100`);
    for (const [id, weight] of SCORED) {
        const audit = result.audits[id];
        const bar = '█'.repeat(Math.round(audit.score * 10)).padEnd(10, '·');
        console.log(`    ${bar} ${String(audit.displayValue).padStart(7)}  ${id} (weight ${weight})`);
    }
    const advice = Object.values(result.audits).filter(
        (a) => a.score !== null && a.score < 1 && !SCORED.some(([id]) => id === a.id),
    );
    if (advice.length > 0) {
        console.log('    unscored advice:');
        for (const audit of advice) {
            console.log(`      · ${audit.id}${audit.displayValue ? ` — ${audit.displayValue}` : ''}`);
        }
    }
    return score;
}

let server;
let url = TARGET;

if (url === undefined) {
    if (!fs.existsSync('.vercel/output/static/index.html')) {
        console.log('No build found. Running `astro build` first.');
        run('pnpm', ['run', 'build'], { stdio: 'inherit' });
    }
    server = spawn(process.execPath, ['scripts/serve-built.mjs', '.vercel/output/static', String(PORT)], {
        stdio: 'ignore',
    });
    await new Promise((resolve) => setTimeout(resolve, 1200));
    url = `http://localhost:${PORT}/`;
}

console.log(`Measuring ${url}`);

try {
    const scores = {};
    for (const [label, preset] of [
        ['mobile', []],
        ['desktop', ['--preset=desktop']],
    ]) {
        const file = path.join(OUT, `${label}.json`);
        const result = run(
            'pnpm',
            [
                'dlx',
                'lighthouse',
                url,
                '--only-categories=performance',
                '--quiet',
                '--output=json',
                `--output-path=${file}`,
                '--chrome-flags=--headless=new --no-sandbox --disable-gpu --disable-dev-shm-usage',
                ...preset,
            ],
            { stdio: ['ignore', 'ignore', 'inherit'] },
        );
        if (!fs.existsSync(file)) {
            console.error(`\nLighthouse produced no report for ${label} (exit ${result.status}).`);
            process.exitCode = 1;
            break;
        }
        scores[label] = report(label, file);
    }
    console.log(
        `\n  Only the five metrics above move the number. ` +
            `Anything listed as advice is worth fixing on its own merits.\n`,
    );
} finally {
    server?.kill();
    fs.rmSync(OUT, { recursive: true, force: true });
}
