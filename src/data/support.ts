/**
 * The support centre, as structure rather than prose.
 *
 * Same division as `@/data/privacy`: the copy is in `ui.ts` with every other string on
 * the site, and what lives here is the shape it hangs on — which routes a message can
 * take, which problems the page answers, and which pages it hands the reader on to.
 *
 * Adding a troubleshooting entry is one line here plus its two keys, and the component
 * never has to be opened. Removing one is a line, which matters more: an answer that has
 * stopped being true is worse than no answer, and the cheaper it is to delete, the more
 * likely it is to actually go.
 */

import type { TranslationKey } from '@/i18n/ui';
import type { IconName } from '@/data/icons';
import { supportUrls } from '@/data/site';

export interface SupportChannel {
    /** Also the `data-channel` on the card, so a stylesheet can tell them apart. */
    id: 'email' | 'issues' | 'store';
    icon: IconName;
    href: string;
    /** Whether the link leaves the site, which decides the `target` and the `rel`. */
    external: boolean;
    titleKey: TranslationKey;
    descKey: TranslationKey;
    /** The one-line "what this route is for", under the description. */
    metaKey: TranslationKey;
    ctaKey: TranslationKey;
}

/**
 * In the order they are worth trying. Email first because it is the one that reaches a
 * person directly and the only one that is private; the store listing last because it is
 * the slowest, and it is on the list only because some readers will never leave it.
 */
export const channels: readonly SupportChannel[] = [
    {
        id: 'email',
        icon: 'note',
        href: supportUrls.email,
        external: false,
        titleKey: 'support.ch1.title',
        descKey: 'support.ch1.desc',
        metaKey: 'support.ch1.meta',
        ctaKey: 'support.ch1.cta',
    },
    {
        id: 'issues',
        icon: 'github',
        href: supportUrls.issues,
        external: true,
        titleKey: 'support.ch2.title',
        descKey: 'support.ch2.desc',
        metaKey: 'support.ch2.meta',
        ctaKey: 'support.ch2.cta',
    },
    {
        id: 'store',
        icon: 'chromeStore',
        href: supportUrls.store,
        external: true,
        titleKey: 'support.ch3.title',
        descKey: 'support.ch3.desc',
        metaKey: 'support.ch3.meta',
        ctaKey: 'support.ch3.cta',
    },
];

export interface TroubleshootingEntry {
    qKey: TranslationKey;
    aKey: TranslationKey;
}

/**
 * The problems that account for most of the post, in the order they arrive: first the
 * extension not appearing at all, then a key that does nothing, then the assistant, then
 * the rules, then the two questions about moving between machines, then performance.
 *
 * The shape is the FAQ's, and `QuestionList.astro` draws both. The difference is what
 * they are for — the FAQ answers a reader deciding whether to install, this answers one
 * who already did and is stuck.
 */
export const troubleshooting: readonly TroubleshootingEntry[] = [
    { qKey: 'support.fix.q1', aKey: 'support.fix.a1' },
    { qKey: 'support.fix.q2', aKey: 'support.fix.a2' },
    { qKey: 'support.fix.q3', aKey: 'support.fix.a3' },
    { qKey: 'support.fix.q4', aKey: 'support.fix.a4' },
    { qKey: 'support.fix.q5', aKey: 'support.fix.a5' },
    { qKey: 'support.fix.q6', aKey: 'support.fix.a6' },
    { qKey: 'support.fix.q7', aKey: 'support.fix.a7' },
];

/** What a report needs to be answerable in one reply rather than four. */
export const reportChecklist: readonly TranslationKey[] = [
    'support.report.i1',
    'support.report.i2',
    'support.report.i3',
    'support.report.i4',
    'support.report.i5',
];

export interface ResourceLink {
    icon: IconName;
    titleKey: TranslationKey;
    descKey: TranslationKey;
    /** Localised by the component, so a Spanish reader never lands on the English page. */
    path: string;
    /** Appended after the localised path, for the two that point into a section. */
    hash?: string;
    /**
     * `data-astro-reload`, for the donation sheet. A view transition swaps the DOM
     * without re-running module scripts, and `/pay` needs its own to run — see the
     * `transitions` prop in `Base.astro` for the whole story.
     */
    reload?: boolean;
}

/** Questions this page does not have to answer twice, because a page already does. */
export const resources: readonly ResourceLink[] = [
    {
        icon: 'bookOpen',
        titleKey: 'support.more.r1.title',
        descKey: 'support.more.r1.desc',
        path: '/',
        hash: '#faq',
    },
    {
        icon: 'keyboardKeys',
        titleKey: 'support.more.r2.title',
        descKey: 'support.more.r2.desc',
        path: '/',
        hash: '#teclado',
    },
    {
        icon: 'shieldCheck',
        titleKey: 'support.more.r3.title',
        descKey: 'support.more.r3.desc',
        path: '/privacy',
    },
    {
        icon: 'heart',
        titleKey: 'support.more.r4.title',
        descKey: 'support.more.r4.desc',
        path: '/pay',
        reload: true,
    },
];
