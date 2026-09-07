/**
 * The terms of service, as structure rather than prose.
 *
 * Same division as `@/data/privacy`: the copy is in `ui.ts` with every other string on
 * the site, and what lives here is the shape it hangs on — the section list the contents
 * rail is built from, and the identification block Spanish law requires by name.
 *
 * WHAT THIS DOCUMENT HAS TO DO, and why it is written the way it is:
 *
 *   1. Identify who is behind the service, in the box at the top of the page rather than
 *      in a line buried in section fourteen. READ THE NOTE ON `identity` BELOW BEFORE
 *      CHANGING THAT BOX: it publishes a name and an address to write to, and it stops
 *      there, which is a deliberate decision and not an oversight.
 *   2. Say that the extension is free and that a tip buys nothing. This is the
 *      part with real legal weight. A voluntary tip whose amount the payer chooses, which
 *      unlocks no feature and entitles them to nothing, is not the consideration for a
 *      service — the CJEU said so in Tolsma (C-16/93, 3 March 1994, the street musician),
 *      and the Spanish DGT applied that same "direct link" test to creators' tips in
 *      binding ruling V5110-26 (3 July 2026). Every clause in the `tips` section is
 *      written to keep that true: no reward, no tier, no priority, no promise. The day one
 *      of those appears, the payment becomes consideration and this document is wrong.
 *   3. Disclaim what can be disclaimed and no more. Spanish and EU consumer law voids a
 *      blanket exclusion of liability, so the wording carves out what it may not exclude
 *      (intent, gross negligence, personal injury) and says so out loud, which is also
 *      what keeps the rest of the clause standing.
 *   4. Not lie about jurisdiction. A consumer in the EU can always sue where they live —
 *      articles 17 to 19 of Regulation 1215/2012 — and keeps the mandatory protections of
 *      their own country under article 6 of Rome I. A clause claiming otherwise is void
 *      and makes the whole document look drafted in bad faith.
 *
 * WHAT IS DELIBERATELY NOT HERE: a link to the European ODR platform. Every template
 * still carries one; the platform was switched off on 20 July 2025 by Regulation (EU)
 * 2024/3228, and pointing consumers at a dead service is now itself the complaint.
 */

import type { TranslationKey } from '@/i18n/ui';
import { site } from '@/data/site';

/** Bump this, and the date in the page's header moves. ISO, so `<time>` can use it. */
export const effectiveDate = '2026-09-08';

export interface TermsSection {
    /** The `id` on the `<section>` and the fragment the contents list points at. */
    id: string;
    titleKey: TranslationKey;
}

/**
 * Every section, in the order the article renders them, and the order the numbers in the
 * copy count from. Six clauses point at a section by its number, and every one of those
 * numbers is a position in this list:
 *
 *   `use.p2` → 3 · `updates.p2` → 9 · `refunds.p2` → 17
 *   `third.li4` → 8 · `consumers.p2` → 7 · `termination.p2` → 4 and 3
 *
 * So reordering a row renumbers a cross-reference somewhere else in the document, and
 * nothing in the build will notice. Read those six before moving one.
 */
export const sections: readonly TermsSection[] = [
    { id: 'scope', titleKey: 'terms.scope.title' },
    { id: 'service', titleKey: 'terms.service.title' },
    { id: 'licence', titleKey: 'terms.licence.title' },
    { id: 'use', titleKey: 'terms.use.title' },
    { id: 'updates', titleKey: 'terms.updates.title' },
    { id: 'tips', titleKey: 'terms.tips.title' },
    { id: 'refunds', titleKey: 'terms.refunds.title' },
    { id: 'payments', titleKey: 'terms.payments.title' },
    { id: 'third-party', titleKey: 'terms.third.title' },
    { id: 'data', titleKey: 'terms.data.title' },
    { id: 'warranty', titleKey: 'terms.warranty.title' },
    { id: 'liability', titleKey: 'terms.liability.title' },
    { id: 'consumers', titleKey: 'terms.consumers.title' },
    { id: 'termination', titleKey: 'terms.termination.title' },
    { id: 'changes', titleKey: 'terms.changes.title' },
    { id: 'law', titleKey: 'terms.law.title' },
    { id: 'contact', titleKey: 'terms.contact.title' },
];

/**
 * The identification block: who is behind this, and how to reach them.
 *
 * WHAT IS HERE, AND WHAT IS NOT, ON PURPOSE. Article 10 of Ley 34/2002 (LSSI-CE) asks a
 * provider established in Spain for four things: a name, a domicile, a means of direct
 * contact, and a tax number. This box carries the name and the contact address and stops
 * there. The holder is one person publishing a free extension, and a tax number here is
 * the number on a national ID card and a domicile is a home address; putting either on a
 * public page is a permanent, indexable disclosure about a private individual, made for a
 * project that sells nothing.
 *
 * That is a decision with a cost, and the cost should be named rather than hidden: if the
 * project is ever held to be an economic activity — and voluntary tips arriving steadily
 * is the thing that would make it one — this box is short of what article 10 asks for.
 * The moment the tips stop being incidental, or the project starts selling anything, add
 * the two fields back. They are two entries in `identityRows` and two pairs of keys.
 *
 * `value` is a literal, a name or an address, and is deliberately not translated. The two
 * rows that carry a sentence rather than a datum use `valueKey` instead.
 */
export const identity = {
    /** The natural person who publishes the extension. */
    name: 'Luis Reoyo',
} as const;

export interface IdentityRow {
    labelKey: TranslationKey;
    /** A literal datum — a name, a number, an address. Not copy, and not translated. */
    value?: string;
    /** A sentence, for the rows that carry one. */
    valueKey?: TranslationKey;
}

export const identityRows: readonly IdentityRow[] = [
    { labelKey: 'terms.id.holder', value: identity.name },
    { labelKey: 'terms.id.contact', value: site.privacyEmail },
    { labelKey: 'terms.id.activity', valueKey: 'terms.id.activityV' },
    { labelKey: 'terms.id.law', valueKey: 'terms.id.lawV' },
];

/**
 * What a tip is and is not, side by side.
 *
 * The distinction is the whole point of the document, and a reader skimming for it should
 * not have to parse a paragraph: the left column is what the payment is, the right is
 * what it is not. Both columns are also the promise the product has to keep; see the note
 * in this file's header about what happens the day a tier appears.
 *
 * The copy says "tip" throughout, never "gift" or "donation". That is deliberate and it
 * is the word the DGT ruling uses. The rest of the site still says "aportación" on its
 * buttons, which is the friendly word for the same thing; this document is where it is
 * named precisely.
 */
export interface TipRow {
    isKey: TranslationKey;
    isNotKey: TranslationKey;
}

export const tipRows: readonly TipRow[] = [
    { isKey: 'terms.tips.r1.is', isNotKey: 'terms.tips.r1.isNot' },
    { isKey: 'terms.tips.r2.is', isNotKey: 'terms.tips.r2.isNot' },
    { isKey: 'terms.tips.r3.is', isNotKey: 'terms.tips.r3.isNot' },
    { isKey: 'terms.tips.r4.is', isNotKey: 'terms.tips.r4.isNot' },
];
