/**
 * Lifts each section in as it arrives.
 *
 * THE RULE THIS FILE EXISTS TO OBEY: content must never be able to stay invisible.
 *
 * A reveal-on-scroll effect is one of the easiest ways to ship a blank page, and there
 * are three separate ways it happens. All three are handled here, because the failure is
 * silent — the page looks loaded, and the words are simply not there.
 *
 *   1. The script never runs at all. Handled by the stylesheet never hiding anything:
 *      `.js-reveal` is added from here, so with no JavaScript nothing is ever hidden.
 *   2. The observer exists but its callback never fires — a background tab, a headless
 *      renderer, an old engine. Handled by the timeout below.
 *   3. The section was already on screen at load, so it never "intersects" anything.
 *      Handled by revealing what is already in view synchronously.
 *
 * The third one is also just correct behaviour: animating in something the reader is
 * already looking at is a flash, not an entrance.
 */

const targets = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];

const wantsMotion = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

if (wantsMotion && 'IntersectionObserver' in window && targets.length > 0) {
    const reveal = (element: Element) => element.classList.add('is-in');

    for (const target of targets) target.classList.add('js-reveal');

    // Anything already on screen is revealed in the same frame it was hidden, so it
    // never actually disappears.
    const viewportHeight = window.innerHeight;
    for (const target of targets) {
        if (target.getBoundingClientRect().top < viewportHeight) reveal(target);
    }

    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                reveal(entry.target);
                // One-way: a section that has arrived stays arrived. Re-hiding on scroll
                // up is what makes this pattern feel like a gimmick.
                observer.unobserve(entry.target);
            }
        },
        // Fires a little before the section reaches the viewport, so the movement has
        // finished by the time the reader is actually looking at it.
        { rootMargin: '0px 0px -10% 0px', threshold: 0.02 },
    );

    for (const target of targets) observer.observe(target);

    // The safety net. If the observer has not accounted for everything within a few
    // seconds, the effect is abandoned and the page is simply shown. A missed animation
    // is a small loss; a blank section is a broken page.
    window.setTimeout(() => {
        for (const target of targets) reveal(target);
        observer.disconnect();
    }, 2500);
}
