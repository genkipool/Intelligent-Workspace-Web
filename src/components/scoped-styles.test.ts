/**
 * A scoped style that reaches nothing.
 *
 * Astro scopes a `<style>` to the component that rendered the element: it stamps a
 * `data-astro-cid-…` on that component's own markup and adds the same attribute to every
 * part of every selector. So moving markup into a new component and leaving its styles
 * behind does not fail the build, does not fail the type check, and does not fail a test
 * that reads the markup — the rules simply stop matching, and the section arrives
 * unstyled.
 *
 * That is exactly what happened when the four feature panels moved into
 * `PillarPanel.astro`: fifteen rules stayed in `Features.astro`, and the section lost its
 * two-column grid, its card, its typography and its fade at once.
 *
 * This reads the built CSS and the built HTML and checks the pairing directly. A rule
 * written `.panel-grid[data-astro-cid-abc]` has to find an element that carries both the
 * class and that scope, or it is styling nothing.
 *
 * Only components that reach a prerendered page can be checked this way. `ErrorPage` is
 * rendered on demand, so no file in the build carries its markup; a scope that appears in
 * no static page at all is skipped rather than reported, since its absence says where the
 * component is used and not that anything is wrong with it.
 */
import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

const STATIC_ROOT = path.resolve(process.cwd(), '.vercel', 'output', 'static');

/**
 * Classes that only ever exist after a script adds them, so no built page carries them.
 * Each is a state, not a shape: losing its rule changes behaviour, not layout, and the
 * page still renders. A new entry here needs to be one of those.
 */
const ADDED_AT_RUNTIME = new Set(['is-in', 'is-open', 'is-selected', 'is-busy', 'is-visible', 'active']);

/** `.foo[data-astro-cid-x]` → the class and the scope it is bound to. */
const SCOPED_SELECTOR = /\.([A-Za-z0-9_-]+)\[(data-astro-cid-[a-z0-9]+)\]/g;

function readAll(directory: string, extension: string): string[] {
    if (!fs.existsSync(directory)) return [];
    return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
        const full = path.join(directory, entry.name);
        if (entry.isDirectory()) return readAll(full, extension);
        return entry.name.endsWith(extension) ? [fs.readFileSync(full, 'utf-8')] : [];
    });
}

describe('scoped styles reach the markup they describe', () => {
    it('pairs every scoped class with an element that carries the same scope', () => {
        const stylesheets = readAll(path.join(STATIC_ROOT, '_astro'), '.css');
        // A bare `vitest` run before a build has nothing to read; CI always builds first.
        if (stylesheets.length === 0) return;

        const html = readAll(STATIC_ROOT, '.html').join('\n');

        // Every (class, scope) pair the markup actually renders.
        const rendered = new Set<string>();
        for (const tag of html.matchAll(/<[a-z][^>]*>/g)) {
            const classes = tag[0].match(/class="([^"]*)"/)?.[1];
            const scope = tag[0].match(/data-astro-cid-[a-z0-9]+/)?.[0];
            if (classes === undefined || scope === undefined) continue;
            for (const name of classes.split(/\s+/)) {
                if (name) rendered.add(`${name}|${scope}`);
            }
        }

        // A scope that no prerendered page carries belongs to an on-demand route.
        const prerenderedScopes = new Set(
            [...html.matchAll(/data-astro-cid-[a-z0-9]+/g)].map((match) => match[0]),
        );

        const orphans = new Set<string>();
        for (const sheet of stylesheets) {
            for (const [, className, scope] of sheet.matchAll(SCOPED_SELECTOR)) {
                if (ADDED_AT_RUNTIME.has(className)) continue;
                if (!prerenderedScopes.has(scope)) continue;
                if (!rendered.has(`${className}|${scope}`)) orphans.add(`.${className}[${scope}]`);
            }
        }

        expect(
            [...orphans],
            'these rules are scoped to a component that does not render the class — the markup moved and the style did not follow',
        ).toEqual([]);
    });
});
