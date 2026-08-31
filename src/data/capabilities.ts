/**
 * The panels the extension actually ships, taken from its own about page.
 *
 * This is the honest inventory, not a marketing shortlist: nineteen entries, grouped the
 * way a user meets them. The four deep sections above the grid explain the *why*; this
 * answers "but what is actually in it".
 *
 * SCALING RULE: a new panel is one entry here plus its keys in `ui.ts`. `SwissArmyBento`
 * derives the filter bar and the grid from `category`, so nothing in the markup counts
 * or orders them.
 */

import type { TranslationKey } from '@/i18n/ui';
import type { IconName } from '@/data/icons';

export type BentoCategory = 'tabs' | 'productivity' | 'tools';

export interface BentoCard {
    id: string;
    category: BentoCategory;
    /** A glyph in `@/data/icons`, so a name that does not exist fails the build. */
    icon: IconName;
    titleKey: TranslationKey;
    descKey: TranslationKey;
    tagKey: TranslationKey;
    badgeKey: TranslationKey;
    highlightKeys: readonly [TranslationKey, TranslationKey, TranslationKey];
    span: 'col-span-1' | 'col-span-2';
}

export const bentoCategories: readonly { id: BentoCategory | 'all'; labelKey: TranslationKey }[] = [
    { id: 'all', labelKey: 'bento.filter.all' },
    { id: 'tabs', labelKey: 'bento.filter.tabs' },
    { id: 'productivity', labelKey: 'bento.filter.productivity' },
    { id: 'tools', labelKey: 'bento.filter.tools' },
];

export const bentoCards: readonly BentoCard[] = [
    // ── 1. Tabs & Workspaces (4 items) ──
    {
        id: 'ai-grouping',
        category: 'tabs',
        icon: 'sparkles',
        titleKey: 'bento.aiGrouping.title',
        descKey: 'bento.aiGrouping.desc',
        tagKey: 'bento.aiGrouping.tag',
        badgeKey: 'bento.aiGrouping.badge',
        highlightKeys: ['bento.aiGrouping.h1', 'bento.aiGrouping.h2', 'bento.aiGrouping.h3'],
        span: 'col-span-2',
    },
    {
        id: 'hibernation',
        category: 'tabs',
        icon: 'ram',
        titleKey: 'bento.hibernation.title',
        descKey: 'bento.hibernation.desc',
        tagKey: 'bento.hibernation.tag',
        badgeKey: 'bento.hibernation.badge',
        highlightKeys: ['bento.hibernation.h1', 'bento.hibernation.h2', 'bento.hibernation.h3'],
        span: 'col-span-1',
    },
    {
        id: 'tab-tree',
        category: 'tabs',
        icon: 'tree',
        titleKey: 'bento.tabTree.title',
        descKey: 'bento.tabTree.desc',
        tagKey: 'bento.tabTree.tag',
        badgeKey: 'bento.tabTree.badge',
        highlightKeys: ['bento.tabTree.h1', 'bento.tabTree.h2', 'bento.tabTree.h3'],
        span: 'col-span-1',
    },
    {
        id: 'recent-closed',
        category: 'tabs',
        icon: 'historyRestore',
        titleKey: 'bento.recentClosed.title',
        descKey: 'bento.recentClosed.desc',
        tagKey: 'bento.recentClosed.tag',
        badgeKey: 'bento.recentClosed.badge',
        highlightKeys: ['bento.recentClosed.h1', 'bento.recentClosed.h2', 'bento.recentClosed.h3'],
        span: 'col-span-2',
    },

    // ── 2. Productivity & Organization (8 items) ──
    {
        id: 'bookmarks',
        category: 'productivity',
        icon: 'bookmarkCheck',
        titleKey: 'bento.bookmarks.title',
        descKey: 'bento.bookmarks.desc',
        tagKey: 'bento.bookmarks.tag',
        badgeKey: 'bento.bookmarks.badge',
        highlightKeys: ['bento.bookmarks.h1', 'bento.bookmarks.h2', 'bento.bookmarks.h3'],
        span: 'col-span-2',
    },
    {
        id: 'downloads',
        category: 'productivity',
        icon: 'downloadTray',
        titleKey: 'bento.downloads.title',
        descKey: 'bento.downloads.desc',
        tagKey: 'bento.downloads.tag',
        badgeKey: 'bento.downloads.badge',
        highlightKeys: ['bento.downloads.h1', 'bento.downloads.h2', 'bento.downloads.h3'],
        span: 'col-span-1',
    },
    {
        id: 'smart-history',
        category: 'productivity',
        icon: 'calendar',
        titleKey: 'bento.history.title',
        descKey: 'bento.history.desc',
        tagKey: 'bento.history.tag',
        badgeKey: 'bento.history.badge',
        highlightKeys: ['bento.history.h1', 'bento.history.h2', 'bento.history.h3'],
        span: 'col-span-1',
    },
    {
        id: 'quick-notes',
        category: 'productivity',
        icon: 'fileText',
        titleKey: 'bento.notes.title',
        descKey: 'bento.notes.desc',
        tagKey: 'bento.notes.tag',
        badgeKey: 'bento.notes.badge',
        highlightKeys: ['bento.notes.h1', 'bento.notes.h2', 'bento.notes.h3'],
        span: 'col-span-2',
    },
    {
        id: 'reader-tts',
        category: 'productivity',
        icon: 'bookOpenLines',
        titleKey: 'bento.readerTts.title',
        descKey: 'bento.readerTts.desc',
        tagKey: 'bento.readerTts.tag',
        badgeKey: 'bento.readerTts.badge',
        highlightKeys: ['bento.readerTts.h1', 'bento.readerTts.h2', 'bento.readerTts.h3'],
        span: 'col-span-1',
    },
    {
        id: 'screenshot-studio',
        category: 'productivity',
        icon: 'cameraShot',
        titleKey: 'bento.screenshotStudio.title',
        descKey: 'bento.screenshotStudio.desc',
        tagKey: 'bento.screenshotStudio.tag',
        badgeKey: 'bento.screenshotStudio.badge',
        highlightKeys: [
            'bento.screenshotStudio.h1',
            'bento.screenshotStudio.h2',
            'bento.screenshotStudio.h3',
        ],
        span: 'col-span-2',
    },
    {
        id: 'analytics-dashboard',
        category: 'productivity',
        icon: 'chartLine',
        titleKey: 'bento.analytics.title',
        descKey: 'bento.analytics.desc',
        tagKey: 'bento.analytics.tag',
        badgeKey: 'bento.analytics.badge',
        highlightKeys: ['bento.analytics.h1', 'bento.analytics.h2', 'bento.analytics.h3'],
        span: 'col-span-2',
    },
    {
        id: 'overflow-actions',
        category: 'productivity',
        icon: 'slider',
        titleKey: 'bento.overflow.title',
        descKey: 'bento.overflow.desc',
        tagKey: 'bento.overflow.tag',
        badgeKey: 'bento.overflow.badge',
        highlightKeys: ['bento.overflow.h1', 'bento.overflow.h2', 'bento.overflow.h3'],
        span: 'col-span-1',
    },

    // ── 3. Quick Tools & Utilities (6 items) ──
    {
        id: 'split-screen',
        category: 'tools',
        icon: 'splitView',
        titleKey: 'bento.splitScreen.title',
        descKey: 'bento.splitScreen.desc',
        tagKey: 'bento.splitScreen.tag',
        badgeKey: 'bento.splitScreen.badge',
        highlightKeys: ['bento.splitScreen.h1', 'bento.splitScreen.h2', 'bento.splitScreen.h3'],
        span: 'col-span-2',
    },
    {
        id: 'pip-hub',
        category: 'tools',
        icon: 'pipScreen',
        titleKey: 'bento.pipHub.title',
        descKey: 'bento.pipHub.desc',
        tagKey: 'bento.pipHub.tag',
        badgeKey: 'bento.pipHub.badge',
        highlightKeys: ['bento.pipHub.h1', 'bento.pipHub.h2', 'bento.pipHub.h3'],
        span: 'col-span-1',
    },
    {
        id: 'ocr-scanner',
        category: 'tools',
        icon: 'focusFrame',
        titleKey: 'bento.ocrScanner.title',
        descKey: 'bento.ocrScanner.desc',
        tagKey: 'bento.ocrScanner.tag',
        badgeKey: 'bento.ocrScanner.badge',
        highlightKeys: ['bento.ocrScanner.h1', 'bento.ocrScanner.h2', 'bento.ocrScanner.h3'],
        span: 'col-span-1',
    },
    {
        id: 'color-picker',
        category: 'tools',
        icon: 'eyedropper',
        titleKey: 'bento.colorPicker.title',
        descKey: 'bento.colorPicker.desc',
        tagKey: 'bento.colorPicker.tag',
        badgeKey: 'bento.colorPicker.badge',
        highlightKeys: ['bento.colorPicker.h1', 'bento.colorPicker.h2', 'bento.colorPicker.h3'],
        span: 'col-span-1',
    },
    {
        id: 'cookie-manager',
        category: 'tools',
        icon: 'globe',
        titleKey: 'bento.cookieManager.title',
        descKey: 'bento.cookieManager.desc',
        tagKey: 'bento.cookieManager.tag',
        badgeKey: 'bento.cookieManager.badge',
        highlightKeys: ['bento.cookieManager.h1', 'bento.cookieManager.h2', 'bento.cookieManager.h3'],
        span: 'col-span-1',
    },
    {
        id: 'theme-studio',
        category: 'tools',
        icon: 'contrast',
        titleKey: 'bento.themeStudio.title',
        descKey: 'bento.themeStudio.desc',
        tagKey: 'bento.themeStudio.tag',
        badgeKey: 'bento.themeStudio.badge',
        highlightKeys: ['bento.themeStudio.h1', 'bento.themeStudio.h2', 'bento.themeStudio.h3'],
        span: 'col-span-2',
    },
    {
        id: 'qr-tools',
        category: 'tools',
        icon: 'layoutGrid',
        titleKey: 'bento.qrTools.title',
        descKey: 'bento.qrTools.desc',
        tagKey: 'bento.qrTools.tag',
        badgeKey: 'bento.qrTools.badge',
        highlightKeys: ['bento.qrTools.h1', 'bento.qrTools.h2', 'bento.qrTools.h3'],
        span: 'col-span-1',
    },
];
