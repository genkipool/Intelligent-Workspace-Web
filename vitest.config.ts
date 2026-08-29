import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';

export default defineConfig({
    resolve: {
        // Mirrors the `@/*` alias in tsconfig.json, so tests import modules by the same
        // path the site does. Two different aliases would be two things to keep in sync.
        alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    },
    test: {
        environment: 'node',
        include: ['src/**/*.test.ts'],
    },
});
