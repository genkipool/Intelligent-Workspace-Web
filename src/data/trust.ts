/**
 * Why an extension that touches this much of the browser is still safe to install.
 *
 * An extension asking for twenty-one permissions is a reasonable thing to be
 * suspicious of, and hiding the number would be the wrong answer. So every one of
 * them is here: the list below is `manifest.json`'s `permissions` array, in its own
 * order, grouped by the feature that cannot exist without it. A reader can check the
 * claim against `chrome://extensions` rather than take it on faith, and the count in
 * the heading is the count of names in this file.
 *
 * `<all_urls>` is a host permission rather than an API permission, so Chrome lists it
 * separately in the install prompt; it gets its own row for the same reason.
 */

import type { TranslationKey } from '@/i18n/ui';

export interface Grant {
    /** As Chrome spells them, so a reader can match them against the install prompt. */
    permissions: readonly string[];
    forKey: TranslationKey;
}

export const grants: readonly Grant[] = [
    { permissions: ['tabs', 'tabGroups', 'sessions'], forKey: 'trust.tabs' },
    {
        permissions: ['bookmarks', 'history', 'readingList', 'downloads', 'downloads.open'],
        forKey: 'trust.lists',
    },
    {
        permissions: ['scripting', 'declarativeNetRequestWithHostAccess'],
        forKey: 'trust.pages',
    },
    { permissions: ['sidePanel', 'contextMenus'], forKey: 'trust.entry' },
    { permissions: ['storage', 'alarms', 'idle', 'offscreen'], forKey: 'trust.state' },
    { permissions: ['notifications', 'clipboardWrite'], forKey: 'trust.tell' },
    { permissions: ['favicon', 'system.display'], forKey: 'trust.chrome' },
    { permissions: ['cookies'], forKey: 'trust.cookies' },
    { permissions: ['<all_urls>'], forKey: 'trust.hosts' },
];

/**
 * The manifest's `permissions` array, counted. `<all_urls>` is not in it, so it is
 * not in the number either.
 */
export const permissionCount = grants
    .flatMap((grant) => grant.permissions)
    .filter((permission) => permission !== '<all_urls>').length;
