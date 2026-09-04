/**
 * The privacy policy, as structure rather than prose.
 *
 * The copy itself is in `ui.ts` like every other string on the site; what lives here is
 * the shape it hangs on — the section list the table of contents is built from, and the
 * two tables that carry the actual claims. Both tables are the part a reader can check
 * against the extension, so they are data: a store that stops being used, or a host the
 * extension stops calling, is one line to delete here rather than a paragraph to find
 * inside a page.
 *
 * `where` and `host` are deliberately not translated. They are the literal names of a
 * storage area and of a domain — `chrome.storage.sync` is spelled the same in Spanish,
 * and translating a hostname would make the claim uncheckable. The two rows that name
 * something rather than a host (Chrome's own model, whichever station you pressed play
 * on) carry a `hostKey` instead.
 */

import type { TranslationKey } from '@/i18n/ui';

/** Bump this, and the date in the page's header moves. ISO, so `<time>` can use it. */
export const effectiveDate = '2026-09-04';

export interface PolicySection {
    /** The `id` on the `<section>` and the fragment the contents list points at. */
    id: string;
    titleKey: TranslationKey;
}

/**
 * Every section, in the order the article renders them, and the order the numbers in the
 * copy count from: the first layer points at "section 5", "section 6", "section 10" and
 * "section 14", and those are positions in this list. Reordering a row renumbers a
 * cross-reference, so read the copy before moving one.
 *
 * The list is also read twice, once for the contents rail and once for the headings, so a
 * section cannot appear in one and be missing from the other.
 */
export const sections: readonly PolicySection[] = [
    { id: 'scope', titleKey: 'privacy.scope.title' },
    { id: 'basis', titleKey: 'privacy.basis.title' },
    { id: 'store', titleKey: 'privacy.store.title' },
    { id: 'sync', titleKey: 'privacy.sync.title' },
    { id: 'network', titleKey: 'privacy.net.title' },
    { id: 'transfers', titleKey: 'privacy.transfers.title' },
    { id: 'retention', titleKey: 'privacy.retention.title' },
    { id: 'ai', titleKey: 'privacy.ai.title' },
    { id: 'permissions', titleKey: 'privacy.perm.title' },
    { id: 'website', titleKey: 'privacy.site.title' },
    { id: 'cookies', titleKey: 'privacy.cookies.title' },
    { id: 'donations', titleKey: 'privacy.pay.title' },
    { id: 'limited-use', titleKey: 'privacy.limited.title' },
    { id: 'rights', titleKey: 'privacy.rights.title' },
    { id: 'legal', titleKey: 'privacy.legal.title' },
    { id: 'changes', titleKey: 'privacy.changes.title' },
    { id: 'contact', titleKey: 'privacy.contact.title' },
];

/**
 * The first layer, in the shape the AEPD publishes and every Spanish reviewer looks for:
 * six rows answering who, what for, on what basis, who else sees it, whether it leaves
 * the EEA, and what the reader can do about it. The full text is the second layer, and
 * the numbers in the copy point from one to the other.
 *
 * It exists because article 12 of the GDPR asks for the information to be concise as well
 * as complete, and a seventeen-section document is not concise on its own. WP260 calls
 * this a layered notice and recommends it for exactly this situation.
 */
export interface BasicRow {
    labelKey: TranslationKey;
    valueKey: TranslationKey;
}

export const basicRows: readonly BasicRow[] = [
    { labelKey: 'privacy.basic.controller', valueKey: 'privacy.basic.controllerV' },
    { labelKey: 'privacy.basic.purpose', valueKey: 'privacy.basic.purposeV' },
    { labelKey: 'privacy.basic.basis', valueKey: 'privacy.basic.basisV' },
    { labelKey: 'privacy.basic.recipients', valueKey: 'privacy.basic.recipientsV' },
    { labelKey: 'privacy.basic.transfers', valueKey: 'privacy.basic.transfersV' },
    { labelKey: 'privacy.basic.rights', valueKey: 'privacy.basic.rightsV' },
];

export interface StorageRow {
    whatKey: TranslationKey;
    /** The storage area, as the code spells it. Not copy, and not translated. */
    where: string;
    leavesKey: TranslationKey;
}

/**
 * Where each kind of data actually sits. Checked against the extension rather than
 * described from memory: the IndexedDB stores are the ones `core/services/dbSchema.js`
 * creates, the synced keys are the ones `utils/importExport.js` reads, and the activity
 * record's layout is the one documented at the top of `core/services/webActivitySchema.js`.
 */
export const storageRows: readonly StorageRow[] = [
    { whatKey: 'privacy.store.r1.what', where: 'chrome.storage.sync', leavesKey: 'privacy.store.r1.leaves' },
    { whatKey: 'privacy.store.r2.what', where: 'IndexedDB', leavesKey: 'privacy.store.r2.leaves' },
    { whatKey: 'privacy.store.r3.what', where: 'IndexedDB', leavesKey: 'privacy.store.r3.leaves' },
    { whatKey: 'privacy.store.r4.what', where: 'IndexedDB', leavesKey: 'privacy.store.r4.leaves' },
    { whatKey: 'privacy.store.r5.what', where: 'IndexedDB', leavesKey: 'privacy.store.r5.leaves' },
    { whatKey: 'privacy.store.r6.what', where: 'IndexedDB', leavesKey: 'privacy.store.r6.leaves' },
    { whatKey: 'privacy.store.r7.what', where: 'IndexedDB', leavesKey: 'privacy.store.r7.leaves' },
    {
        whatKey: 'privacy.store.r8.what',
        where: 'chrome.storage.local',
        leavesKey: 'privacy.store.r8.leaves',
    },
    { whatKey: 'privacy.store.r9.what', where: 'chrome.storage.sync', leavesKey: 'privacy.store.r9.leaves' },
    {
        whatKey: 'privacy.store.r10.what',
        where: 'chrome.storage.local',
        leavesKey: 'privacy.store.r10.leaves',
    },
];

export interface ConnectionRow {
    /** A literal hostname, where the destination is one. */
    host?: string;
    /** A description, where it is not — Chrome's own model, or whichever station is playing. */
    hostKey?: TranslationKey;
    sendsKey: TranslationKey;
    whenKey: TranslationKey;
}

/**
 * Every request the extension can make that is not the reader opening a page themselves.
 * The list is the external origins that appear in its source, minus the ones that are
 * only ever a link the user clicks.
 */
export const connectionRows: readonly ConnectionRow[] = [
    {
        host: 'generativelanguage.googleapis.com',
        sendsKey: 'privacy.net.r1.what',
        whenKey: 'privacy.net.r1.when',
    },
    { hostKey: 'privacy.net.r2.host', sendsKey: 'privacy.net.r2.what', whenKey: 'privacy.net.r2.when' },
    { host: 'api.radio-browser.info', sendsKey: 'privacy.net.r3.what', whenKey: 'privacy.net.r3.when' },
    { hostKey: 'privacy.net.r4.host', sendsKey: 'privacy.net.r4.what', whenKey: 'privacy.net.r4.when' },
    { host: 'youtube.com · i.ytimg.com', sendsKey: 'privacy.net.r5.what', whenKey: 'privacy.net.r5.when' },
    { host: 'google.com/s2/favicons', sendsKey: 'privacy.net.r6.what', whenKey: 'privacy.net.r6.when' },
    { host: 'cdn.jsdelivr.net', sendsKey: 'privacy.net.r7.what', whenKey: 'privacy.net.r7.when' },
];
