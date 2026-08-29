/**
 * The panels the extension actually ships, taken from its own about page.
 *
 * This is the honest inventory, not a marketing shortlist: fourteen entries, grouped the
 * way a user meets them. The landing page's four deep entries in `features.ts` explain
 * the *why*; this answers "but what is actually in it".
 *
 * SCALING RULE: a new panel is one entry here plus its two keys in `ui.ts`. The grid
 * derives its groups from `family`, so nothing in the markup counts or orders them.
 */

import type { TranslationKey } from '@/i18n/ui';

export type Family = 'organise' | 'find' | 'focus' | 'read';

export interface Capability {
    id: string;
    family: Family;
    nameKey: TranslationKey;
    lineKey: TranslationKey;
}

/** The order the families appear in. */
export const families: readonly Family[] = ['organise', 'find', 'focus', 'read'];

export const capabilities: readonly Capability[] = [
    { id: 'groups', family: 'organise', nameKey: 'cap.groups', lineKey: 'cap.groups.line' },
    { id: 'rules', family: 'organise', nameKey: 'cap.rules', lineKey: 'cap.rules.line' },
    { id: 'themes', family: 'organise', nameKey: 'cap.themes', lineKey: 'cap.themes.line' },
    { id: 'shortcuts', family: 'organise', nameKey: 'cap.shortcuts', lineKey: 'cap.shortcuts.line' },

    { id: 'omnibar', family: 'find', nameKey: 'cap.omnibar', lineKey: 'cap.omnibar.line' },
    { id: 'bookmarks', family: 'find', nameKey: 'cap.bookmarks', lineKey: 'cap.bookmarks.line' },
    { id: 'history', family: 'find', nameKey: 'cap.history', lineKey: 'cap.history.line' },
    { id: 'recent', family: 'find', nameKey: 'cap.recent', lineKey: 'cap.recent.line' },
    { id: 'downloads', family: 'find', nameKey: 'cap.downloads', lineKey: 'cap.downloads.line' },

    { id: 'assistant', family: 'focus', nameKey: 'cap.assistant', lineKey: 'cap.assistant.line' },
    { id: 'pomodoro', family: 'focus', nameKey: 'cap.pomodoro', lineKey: 'cap.pomodoro.line' },
    { id: 'music', family: 'focus', nameKey: 'cap.music', lineKey: 'cap.music.line' },

    { id: 'reading', family: 'read', nameKey: 'cap.reading', lineKey: 'cap.reading.line' },
    { id: 'aloud', family: 'read', nameKey: 'cap.aloud', lineKey: 'cap.aloud.line' },
];
