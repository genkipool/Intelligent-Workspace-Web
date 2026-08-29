/**
 * Why an extension that touches this much of the browser is still safe to install.
 *
 * An extension asking for twenty-three permissions is a reasonable thing to be
 * suspicious of, and hiding the number would be the wrong answer. Each entry names a
 * group of permissions and the feature that cannot exist without it, so a reader can
 * check the claim against `chrome://extensions` rather than take it on faith.
 */

import type { TranslationKey } from '@/i18n/ui';

export interface Grant {
    /** As Chrome spells them, so a reader can match them against the install prompt. */
    permissions: readonly string[];
    forKey: TranslationKey;
}

export const grants: readonly Grant[] = [
    { permissions: ['tabs', 'tabGroups', 'sessions', 'windows'], forKey: 'trust.tabs' },
    { permissions: ['bookmarks', 'history', 'readingList', 'downloads'], forKey: 'trust.lists' },
    { permissions: ['scripting', 'declarativeNetRequest'], forKey: 'trust.pages' },
    { permissions: ['storage', 'alarms', 'idle', 'offscreen'], forKey: 'trust.state' },
    { permissions: ['cookies'], forKey: 'trust.cookies' },
];

/** Straight from the manifest, so the headline number cannot drift from reality. */
export const permissionCount = 23;
