/**
 * The keys the extension actually ships, in the three places a reader meets them.
 *
 * Every entry here was read off the extension's own command registry rather than
 * invented for the page: `omnibarShortcuts` are the omnibar prefixes from
 * `hint/omnibar.js`, `hintNavigationShortcuts` are the default mappings in
 * `hint/registry.js`, and `browserShortcuts` are the `commands` block of the
 * manifest plus the panel keys. If a key changes there, it changes here: a
 * shortcut on this page that does nothing in the browser is worse than no page.
 */

import type { TranslationKey } from '@/i18n/ui';

export interface ShortcutItem {
    readonly keys: readonly string[];
    readonly actionKey: TranslationKey;
    readonly categoryKey: TranslationKey;
}

export interface ShortcutZone {
    readonly id: 'omnibar' | 'hints' | 'browser';
    readonly badgeKey: TranslationKey;
    readonly titleKey: TranslationKey;
    readonly descKey: TranslationKey;
    readonly items: readonly ShortcutItem[];
}

/** Zone 1: the floating omnibar, and the prefix in front of each source. */
export const omnibarShortcuts: readonly ShortcutItem[] = [
    { keys: ['o'], actionKey: 'shortcut.omnibar.search', categoryKey: 'shortcut.cat.omnibar' },
    { keys: ['@'], actionKey: 'shortcut.omnibar.tab', categoryKey: 'shortcut.cat.omnibar' },
    { keys: ['b:'], actionKey: 'shortcut.omnibar.mute', categoryKey: 'shortcut.cat.organise' },
    { keys: ['h:'], actionKey: 'shortcut.omnibar.clean', categoryKey: 'shortcut.cat.organise' },
    { keys: ['c:'], actionKey: 'shortcut.omnibar.book', categoryKey: 'shortcut.cat.tabs' },
    { keys: ['f:'], actionKey: 'shortcut.omnibar.note', categoryKey: 'shortcut.cat.navigation' },
    { keys: ['ts:'], actionKey: 'shortcut.omnibar.split', categoryKey: 'shortcut.cat.split' },
    { keys: ['qaia:'], actionKey: 'shortcut.omnibar.agent', categoryKey: 'shortcut.cat.agent' },
] as const;

/** Zone 2: the letter labels and the page keys, typed on the page itself. */
export const hintNavigationShortcuts: readonly ShortcutItem[] = [
    { keys: ['f'], actionKey: 'shortcut.hint.open', categoryKey: 'shortcut.cat.hints' },
    { keys: ['cf'], actionKey: 'shortcut.hint.newtab', categoryKey: 'shortcut.cat.clipboard' },
    { keys: ['j', '/', 'k'], actionKey: 'shortcut.hint.scroll', categoryKey: 'shortcut.cat.navigation' },
    { keys: ['i'], actionKey: 'shortcut.hint.yank', categoryKey: 'shortcut.cat.navigation' },
    { keys: ['x'], actionKey: 'shortcut.hint.close', categoryKey: 'shortcut.cat.tabs' },
    { keys: ['ts'], actionKey: 'shortcut.hint.split', categoryKey: 'shortcut.cat.split' },
    { keys: ['wv'], actionKey: 'shortcut.hint.pip', categoryKey: 'shortcut.cat.media' },
    { keys: ['ar'], actionKey: 'shortcut.hint.aloud', categoryKey: 'shortcut.cat.reader' },
] as const;

/** Zone 3: the manifest's own commands, and the keys that open a panel view. */
export const browserShortcuts: readonly ShortcutItem[] = [
    { keys: ['Ctrl', 'Shift', 'Z'], actionKey: 'shortcut.global.fold', categoryKey: 'shortcut.cat.tabs' },
    { keys: ['Ctrl', 'Shift', 'Q'], actionKey: 'shortcut.global.dedup', categoryKey: 'shortcut.cat.tabs' },
    {
        keys: ['Ctrl', 'Shift', 'S'],
        actionKey: 'shortcut.global.sort',
        categoryKey: 'shortcut.cat.organise',
    },
    { keys: ['Alt', 'Shift', 'P'], actionKey: 'shortcut.global.panel', categoryKey: 'shortcut.cat.panel' },
    { keys: ['pl'], actionKey: 'shortcut.global.omnibar', categoryKey: 'shortcut.cat.panel' },
    { keys: ['pw'], actionKey: 'shortcut.global.activity', categoryKey: 'shortcut.cat.panel' },
    { keys: ['mb'], actionKey: 'shortcut.global.dark', categoryKey: 'shortcut.cat.display' },
    { keys: ['so'], actionKey: 'shortcut.global.mute', categoryKey: 'shortcut.cat.media' },
] as const;

export const keyboardZones: readonly ShortcutZone[] = [
    {
        id: 'omnibar',
        badgeKey: 'kb.zoneA.badge',
        titleKey: 'kb.zoneA.title',
        descKey: 'kb.zoneA.desc',
        items: omnibarShortcuts,
    },
    {
        id: 'hints',
        badgeKey: 'kb.zoneB.badge',
        titleKey: 'kb.zoneB.title',
        descKey: 'kb.zoneB.desc',
        items: hintNavigationShortcuts,
    },
    {
        id: 'browser',
        badgeKey: 'kb.zoneC.badge',
        titleKey: 'kb.zoneC.title',
        descKey: 'kb.zoneC.desc',
        items: browserShortcuts,
    },
] as const;
