import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import zlib from 'node:zlib';
import { spawn, type ChildProcess } from 'node:child_process';
import type { AddressInfo } from 'node:net';
import { resolveFile, createServer, HOST, PORT } from '../scripts/serve-built.mjs';

function makeRequest(
    serverPort: number,
    requestPath: string,
    headers: Record<string, string> = {},
): Promise<{ statusCode: number | undefined; headers: http.IncomingHttpHeaders; body: Buffer }> {
    return new Promise((resolve, reject) => {
        const req = http.request(
            {
                host: '127.0.0.1',
                port: serverPort,
                path: requestPath,
                headers,
            },
            (res) => {
                const chunks: Buffer[] = [];
                res.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
                res.on('end', () => {
                    resolve({
                        statusCode: res.statusCode,
                        headers: res.headers,
                        body: Buffer.concat(chunks),
                    });
                });
            },
        );
        req.on('error', reject);
        req.end();
    });
}

describe('scripts/serve-built.mjs Static Server Security & Functionality', () => {
    let tempBase: string;
    let tempRoot: string;
    let tempSibling: string;
    let server: http.Server;
    let serverPort: number;

    beforeAll(async () => {
        tempBase = fs.mkdtempSync(path.join(os.tmpdir(), 'iw-serve-test-'));
        tempRoot = path.join(tempBase, 'static');
        tempSibling = path.join(tempBase, 'static-backup');

        fs.mkdirSync(tempRoot, { recursive: true });
        fs.mkdirSync(tempSibling, { recursive: true });

        // Populate legitimate files in root
        fs.writeFileSync(path.join(tempRoot, 'index.html'), '<html><body>Homepage</body></html>');
        fs.writeFileSync(path.join(tempRoot, 'fallback.html'), '<html><body>Fallback Page</body></html>');
        fs.mkdirSync(path.join(tempRoot, 'pay'), { recursive: true });
        fs.writeFileSync(path.join(tempRoot, 'pay', 'index.html'), '<html><body>Pay Page</body></html>');
        fs.mkdirSync(path.join(tempRoot, '_astro'), { recursive: true });
        fs.writeFileSync(path.join(tempRoot, '_astro', 'bundle.css'), 'body { background: #fff; }');
        fs.writeFileSync(path.join(tempRoot, 'data.json'), '{"status":"ok"}');

        // Populate sensitive files outside root
        fs.writeFileSync(path.join(tempBase, 'package.json'), '{"name":"victim-parent"}');
        fs.writeFileSync(path.join(tempSibling, 'secret.txt'), 'CONFIDENTIAL_DATA');

        // Create symlink inside root pointing outside
        try {
            fs.symlinkSync(path.join(tempSibling, 'secret.txt'), path.join(tempRoot, 'symlink-escape.txt'));
        } catch {
            // In case symlink creation is restricted
        }

        server = createServer({ root: tempRoot });
        await new Promise<void>((resolve) => {
            server.listen(0, HOST, () => {
                const addr = server.address() as AddressInfo;
                serverPort = addr.port;
                resolve();
            });
        });
    });

    afterAll(async () => {
        await new Promise<void>((resolve) => server.close(() => resolve()));
        fs.rmSync(tempBase, { recursive: true, force: true });
    });

    describe('Interface Binding & Valid Static Asset Serving', () => {
        it('binds strictly to 127.0.0.1 loopback interface', () => {
            const addr = server.address() as AddressInfo;
            expect(addr.address).toBe('127.0.0.1');
            expect(HOST).toBe('127.0.0.1');
            expect(PORT).toBe(4173);
        });

        it('serves root index.html with correct headers', async () => {
            const res = await makeRequest(serverPort, '/');
            expect(res.statusCode).toBe(200);
            expect(res.headers['content-type']).toBe('text/html; charset=utf-8');
            expect(res.headers['cache-control']).toBe('public, max-age=0, must-revalidate');
            expect(res.body.toString()).toContain('Homepage');
        });

        it('resolves clean subdirectories with index.html', async () => {
            const res = await makeRequest(serverPort, '/pay');
            expect(res.statusCode).toBe(200);
            expect(res.headers['content-type']).toBe('text/html; charset=utf-8');
            expect(res.body.toString()).toContain('Pay Page');
        });

        it('resolves extensionless HTML fallback', async () => {
            const res = await makeRequest(serverPort, '/fallback');
            expect(res.statusCode).toBe(200);
            expect(res.headers['content-type']).toBe('text/html; charset=utf-8');
            expect(res.body.toString()).toContain('Fallback Page');
        });

        it('strips query parameters and url fragments cleanly', async () => {
            const res = await makeRequest(serverPort, '/index.html?version=2&utm_source=test#section');
            expect(res.statusCode).toBe(200);
            expect(res.body.toString()).toContain('Homepage');
        });

        it('serves compressible assets with gzip when requested', async () => {
            const res = await makeRequest(serverPort, '/_astro/bundle.css', {
                'accept-encoding': 'gzip, deflate, br',
            });
            expect(res.statusCode).toBe(200);
            expect(res.headers['content-encoding']).toBe('gzip');
            expect(res.headers['cache-control']).toBe('public, max-age=31536000, immutable');
            const unzipped = zlib.gunzipSync(res.body).toString();
            expect(unzipped).toBe('body { background: #fff; }');
        });

        it('serves immutable cache headers for hashed _astro assets', async () => {
            const res = await makeRequest(serverPort, '/_astro/bundle.css');
            expect(res.statusCode).toBe(200);
            expect(res.headers['cache-control']).toBe('public, max-age=31536000, immutable');
        });
    });

    describe('Path Traversal Resistance', () => {
        it('rejects relative directory traversal escapes with 404 (/../../package.json)', async () => {
            const res = await makeRequest(serverPort, '/../../package.json');
            expect(res.statusCode).toBe(404);
            expect(res.body.toString()).not.toContain('victim-parent');
        });

        it('rejects encoded directory traversal (/%2e%2e/package.json)', async () => {
            const res = await makeRequest(serverPort, '/%2e%2e/package.json');
            expect(res.statusCode).toBe(404);
            expect(res.body.toString()).not.toContain('victim-parent');
        });

        it('rejects double-encoded or multiple traversal hops (/%2e%2e/%2e%2e/package.json)', async () => {
            const res = await makeRequest(serverPort, '/%2e%2e/%2e%2e/package.json');
            expect(res.statusCode).toBe(404);
            expect(res.body.toString()).not.toContain('victim-parent');
        });

        it('rejects slash encoded traversals (/..%2fpackage.json)', async () => {
            const res = await makeRequest(serverPort, '/..%2fpackage.json');
            expect(res.statusCode).toBe(404);
            expect(res.body.toString()).not.toContain('victim-parent');
        });
    });

    describe('Prefix Collision Resistance', () => {
        it('rejects sibling directories sharing a common name prefix', async () => {
            const res = await makeRequest(serverPort, '/../static-backup/secret.txt');
            expect(res.statusCode).toBe(404);
            expect(res.body.toString()).not.toContain('CONFIDENTIAL_DATA');
        });

        it('rejects encoded sibling prefix escape (/%2e%2e/static-backup/secret.txt)', async () => {
            const res = await makeRequest(serverPort, '/%2e%2e/static-backup/secret.txt');
            expect(res.statusCode).toBe(404);
            expect(res.body.toString()).not.toContain('CONFIDENTIAL_DATA');
        });
    });

    describe('Denial of Service (DoS) and Input Sanitization', () => {
        it('does not crash and returns 404 on malformed percent encoding (/%ff)', async () => {
            const res = await makeRequest(serverPort, '/%ff');
            expect(res.statusCode).toBe(404);
        });

        it('does not crash and returns 404 on invalid UTF-8 percent encoding (/%c0%af)', async () => {
            const res = await makeRequest(serverPort, '/%c0%af');
            expect(res.statusCode).toBe(404);
        });

        it('does not crash and returns 404 on incomplete percent encoding (/% or /index.html%)', async () => {
            const res1 = await makeRequest(serverPort, '/%');
            expect(res1.statusCode).toBe(404);

            const res2 = await makeRequest(serverPort, '/index.html%');
            expect(res2.statusCode).toBe(404);
        });

        it('rejects null byte injection and returns 404 (/index.html%00.png)', async () => {
            const res = await makeRequest(serverPort, '/index.html%00.png');
            expect(res.statusCode).toBe(404);
        });
    });

    describe('Symlink Escape Protection', () => {
        it('rejects symlinks that point outside root', async () => {
            const symlinkPath = path.join(tempRoot, 'symlink-escape.txt');
            if (fs.existsSync(symlinkPath)) {
                const res = await makeRequest(serverPort, '/symlink-escape.txt');
                expect(res.statusCode).toBe(404);
                expect(res.body.toString()).not.toContain('CONFIDENTIAL_DATA');
            }
        });
    });

    describe('Unit Tests: resolveFile() Helper Function', () => {
        it('returns null for non-string or empty urlPath', () => {
            expect(resolveFile(null as unknown as string, tempRoot)).toBeNull();
            expect(resolveFile(undefined as unknown as string, tempRoot)).toBeNull();
            expect(resolveFile('', tempRoot)).toBeNull();
        });

        it('returns null when path escapes via relative segments', () => {
            expect(resolveFile('/../../package.json', tempRoot)).toBeNull();
            expect(resolveFile('../static-backup/secret.txt', tempRoot)).toBeNull();
            expect(resolveFile('/../static-backup/secret.txt', tempRoot)).toBeNull();
        });

        it('returns null on null byte injection', () => {
            expect(resolveFile('/index.html\0.png', tempRoot)).toBeNull();
            expect(resolveFile('/index.html%00.png', tempRoot)).toBeNull();
        });

        it('returns null on URI malformed errors', () => {
            expect(resolveFile('/%ff', tempRoot)).toBeNull();
            expect(resolveFile('/%c0%af', tempRoot)).toBeNull();
        });

        it('correctly resolves genuine files in root', () => {
            const resolved = resolveFile('/index.html', tempRoot);
            expect(resolved).toBe(path.join(tempRoot, 'index.html'));
        });
    });

    describe('Subprocess Integration: CLI Execution', () => {
        let child: ChildProcess;
        const cliPort = 49152 + Math.floor(Math.random() * 5000);

        afterAll(() => {
            child?.kill();
        });

        it('spawns scripts/serve-built.mjs and logs 127.0.0.1 host', async () => {
            let stdoutData = '';
            await new Promise<void>((resolve, reject) => {
                child = spawn(
                    process.execPath,
                    ['scripts/serve-built.mjs', '.vercel/output/static', String(cliPort)],
                    { stdio: ['ignore', 'pipe', 'pipe'] },
                );

                child.stdout?.on('data', (data) => {
                    stdoutData += data.toString();
                    if (stdoutData.includes(`http://127.0.0.1:${cliPort}`)) {
                        resolve();
                    }
                });

                child.stderr?.on('data', (err) => {
                    console.error('CLI stderr:', err.toString());
                });

                child.on('error', reject);
            });

            expect(stdoutData).toContain(`http://127.0.0.1:${cliPort}`);

            // Make HTTP request against CLI process
            const res = await makeRequest(cliPort, '/');
            expect(res.statusCode).toBe(200);

            // Verify traversal rejection against CLI process
            const traversalRes = await makeRequest(cliPort, '/../../package.json');
            expect(traversalRes.statusCode).toBe(404);
        });
    });
});
