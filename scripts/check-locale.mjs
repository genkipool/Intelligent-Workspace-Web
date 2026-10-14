/**
 * Checks one translated dictionary against the English source before it is wired in.
 *
 * Usage: node scripts/check-locale.mjs fr
 *
 * The type check already fails on a missing or extra key once the locale is registered
 * in `ui.ts`; this says which one, and also catches what the compiler cannot see: a
 * placeholder lost in translation, an em dash, an empty string, or a block of entries
 * left in English.
 */

import { readFileSync } from 'node:fs';

const code = process.argv[2];
if (!code) {
    console.error('Usage: node scripts/check-locale.mjs <code>');
    process.exit(1);
}

const KEY = /^\s*'([^']+)':/gm;

/** Evaluates a locale file's object literal without a TypeScript toolchain. */
function load(file) {
    const source = readFileSync(file, 'utf8');
    const start = source.indexOf('= {');
    const end = source.lastIndexOf('}');
    if (start < 0 || end < 0) throw new Error(`${file}: no object literal found`);
    return new Function(`return (${source.slice(start + 2, end + 1)});`)();
}

const en = load('src/i18n/locales/en.ts');
let target;
try {
    target = load(`src/i18n/locales/${code}.ts`);
} catch (error) {
    console.error(`${code}: does not parse: ${error.message}`);
    process.exit(1);
}

const problems = [];
const enKeys = Object.keys(en);
const targetKeys = Object.keys(target);
const raw = readFileSync(`src/i18n/locales/${code}.ts`, 'utf8');
const declared = [...raw.matchAll(KEY)].map((m) => m[1]);
const duplicates = declared.filter((k, i) => declared.indexOf(k) !== i);

for (const key of enKeys) if (!(key in target)) problems.push(`missing key: ${key}`);
for (const key of targetKeys) if (!(key in en)) problems.push(`extra key: ${key}`);
for (const key of duplicates) problems.push(`duplicate key: ${key}`);

// Snippet demos translate their variable names (`{name}` becomes `{nombre}`), so only
// the number of placeholders has to survive, not their spelling.
const placeholders = (s) => (s.match(/\{[^{}\s]*\}/g) ?? []).length;
let identical = 0;
for (const key of enKeys) {
    const value = target[key];
    if (typeof value !== 'string') continue;
    if (!value.trim()) problems.push(`empty: ${key}`);
    if (value.includes('—')) problems.push(`em dash: ${key}`);
    if (/\bvim(ium)?\b/i.test(value)) problems.push(`forbidden term "vim": ${key}`);
    if (placeholders(value) !== placeholders(en[key]))
        problems.push(
            `placeholder count differs in ${key}: ${placeholders(en[key])} vs ${placeholders(value)}`,
        );
    if (value === en[key]) identical++;
}

console.log(`${code}: ${targetKeys.length}/${enKeys.length} keys, ${identical} identical to English`);
if (problems.length) {
    console.error(problems.join('\n'));
    process.exit(1);
}
console.log(`${code}: OK`);
