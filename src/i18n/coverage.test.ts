/**
 * A translation nobody reads.
 *
 * `ui.ts` is the largest file in the project, and the entries in it are the ones most
 * likely to outlive what used them: a section is rewritten, its copy is not deleted,
 * and the dictionary keeps a paragraph in two languages that no page renders. Eighty-six
 * of them had accumulated that way. Nothing catches it — a key is only ever read
 * dynamically, so neither the compiler nor the bundler can tell.
 *
 * This walks the source for every key and fails on the ones nothing mentions. If a key
 * really is meant to sit unused for now, delete it: it is in the history, and writing it
 * again when the section arrives costs less than carrying it in both languages until
 * then.
 */
import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { ui } from '@/i18n/ui';

const SOURCE_ROOT = path.resolve(process.cwd(), 'src');
const DICTIONARY = path.join(SOURCE_ROOT, 'i18n', 'ui.ts');

function sourceFiles(dir: string): string[] {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) return sourceFiles(full);
        if (!/\.(astro|ts)$/.test(entry.name) || full === DICTIONARY) return [];
        return [full];
    });
}

describe('the dictionary carries no dead copy', () => {
    it('has a reader for every key', () => {
        const source = sourceFiles(SOURCE_ROOT)
            .map((file) => fs.readFileSync(file, 'utf-8'))
            .join('\n');

        // A key reaches a component either as a quoted literal — `t('nav.faq')`, or a
        // `titleKey` in a data module — or as an attribute on a component that takes one.
        const unused = Object.keys(ui.en).filter(
            (key) => !source.includes(`'${key}'`) && !source.includes(`"${key}"`),
        );

        expect(unused, 'these keys are translated twice and rendered nowhere').toEqual([]);
    });
});
