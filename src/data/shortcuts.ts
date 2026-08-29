/**
 * The keyboard examples. Keys are literal so they render as <kbd> without parsing, and
 * the label is a translation key rather than a sentence.
 */

import type { TranslationKey } from '@/i18n/ui';

export interface Shortcut {
    keys: readonly string[];
    labelKey: TranslationKey;
}

export const shortcuts: readonly Shortcut[] = [
    { keys: ['f'], labelKey: 'shortcut.hints' },
    { keys: ['gg'], labelKey: 'shortcut.top' },
    { keys: ['Ctrl', 'Shift', 'Z'], labelKey: 'shortcut.fold' },
    { keys: ['Alt', 'Shift', 'P'], labelKey: 'shortcut.panel' },
];
