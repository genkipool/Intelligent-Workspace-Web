/**
 * Serves `.vercel/output/static` the way the host actually serves it.
 *
 * This exists because measuring against a naive static server is measuring the server.
 * A run against `python -m http.server` scored this site 91 on mobile and blamed a 74 KB
 * stylesheet; the same build behind compression scored 100, because the stylesheet is
 * 12 KB on the wire and the 74 KB never existed outside the test. Two things account for
 * the whole difference, so both are here:
 *
 *   - gzip on every text response, which is what Vercel does by default;
 *   - `immutable` caching on the hashed `/_astro/` assets, which is what makes a repeat
 *     visit free and what `vercel.json` already asks for.
 *
 * Run it with the directory to serve; `pnpm run perf` does that for you.
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import zlib from 'node:zlib';

const ROOT = path.resolve(process.argv[2] ?? '.vercel/output/static');
const PORT = Number(process.argv[3] ?? 4173);
const HOST = '127.0.0.1';

const TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.ico': 'image/x-icon',
    '.woff2': 'font/woff2',
};

/** Text compresses; a PNG or a woff2 is already compressed and gzip only costs time. */
const COMPRESSIBLE = /\.(html|css|js|json|svg)$/;

function resolveFile(urlPath, rootDir = ROOT) {
    if (!urlPath || typeof urlPath !== 'string') return null;

    let pathname;
    try {
        const rawPath = urlPath.split('?')[0].split('#')[0];
        pathname = decodeURIComponent(rawPath);
    } catch {
        return null;
    }

    if (pathname.includes('\0')) return null;

    // Never let a path escape the served directory.
    const candidate = path.join(rootDir, pathname);
    const rel = path.relative(rootDir, candidate);
    if (rel.startsWith('..') || path.isAbsolute(rel)) return null;

    const clean = path.normalize(pathname);
    const cleanCandidate = path.join(rootDir, clean);
    const cleanRel = path.relative(rootDir, cleanCandidate);
    if (cleanRel.startsWith('..') || path.isAbsolute(cleanRel)) return null;

    const canonicalRoot = fs.existsSync(rootDir) ? fs.realpathSync(rootDir) : rootDir;

    for (const attempt of [candidate, path.join(candidate, 'index.html'), `${candidate}.html`]) {
        try {
            if (fs.existsSync(attempt) && fs.statSync(attempt).isFile()) {
                if (fs.existsSync(rootDir)) {
                    const realCandidate = fs.realpathSync(attempt);
                    const realRel = path.relative(canonicalRoot, realCandidate);
                    if (realRel.startsWith('..') || path.isAbsolute(realRel)) continue;
                }
                return attempt;
            }
        } catch {
            // Ignore filesystem errors and continue to next candidate
        }
    }
    return null;
}

function createServer(options = {}) {
    const rootDir = options.root ? path.resolve(options.root) : ROOT;
    return http.createServer((request, response) => {
        const resolved = resolveFile(request.url, rootDir);
        const file = resolved ?? resolveFile('/404', rootDir);
        if (file === null) {
            response.writeHead(404, { 'content-type': 'text/plain' });
            return response.end('not found');
        }

        const statusCode = resolved ? 200 : 404;
        const extension = path.extname(file);
        const body = fs.readFileSync(file);
        const headers = {
            'content-type': TYPES[extension] ?? 'application/octet-stream',
            // Hashed filenames can be cached forever; a page cannot.
            'cache-control': file.includes(`${path.sep}_astro${path.sep}`)
                ? 'public, max-age=31536000, immutable'
                : 'public, max-age=0, must-revalidate',
        };

        if (COMPRESSIBLE.test(extension) && /\bgzip\b/.test(request.headers['accept-encoding'] ?? '')) {
            const compressed = zlib.gzipSync(body, { level: 9 });
            response.writeHead(statusCode, {
                ...headers,
                'content-encoding': 'gzip',
                'content-length': compressed.length,
            });
            return response.end(compressed);
        }

        response.writeHead(statusCode, { ...headers, 'content-length': body.length });
        response.end(body);
    });
}

const isDirectRun =
    process.argv[1] &&
    (path.resolve(process.argv[1]) === fileURLToPath(import.meta.url) ||
        (fs.existsSync(process.argv[1]) &&
            fs.realpathSync(path.resolve(process.argv[1])) ===
                fs.realpathSync(fileURLToPath(import.meta.url))));

if (isDirectRun) {
    const server = createServer();
    server.listen(PORT, HOST, () => {
        console.log(`Serving ${ROOT} on http://${HOST}:${PORT} — gzipped, with cache headers.`);
    });
}

export { resolveFile, createServer, ROOT, PORT, HOST };
