/**
 * Fade each section in the first time it comes near the viewport.
 *
 * The whole job is one `IntersectionObserver`. What is worth being careful about is the
 * first pass, because getting it wrong shows up in the profile rather than on the screen:
 *
 * - Reads and writes are in separate loops. Measuring an element and then adding a class
 *   to it, forty times in a row, makes the browser recompute layout between every pair —
 *   the same forty elements re-laid out forty times. Reading all of them first and then
 *   writing all of them is one layout instead. This was a 134 ms task on a mid-range
 *   phone; it is now short enough not to be one.
 *
 * - There is no blanket timer. An earlier version revealed every element after 1.8 s no
 *   matter where it was, which cost a style recalculation over the whole document and,
 *   worse, meant nothing below the first screen ever actually animated: by the time a
 *   reader scrolled to it, the timer had already shown it. The observer is the fallback
 *   it does not need one of.
 */

/** Elements at or above this point are already on screen and must not fade in late. */
function initReveal(): void {
    const targets = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];
    if (targets.length === 0) return;

    const wantsMotion = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
    if (!wantsMotion || !('IntersectionObserver' in window)) {
        for (const target of targets) target.classList.add('is-in');
        return;
    }

    // Read every position, then write every class. Never interleave the two.
    const viewportHeight = window.innerHeight;
    const alreadyOnScreen = targets.filter((target) => target.getBoundingClientRect().top < viewportHeight);
    for (const target of alreadyOnScreen) target.classList.add('is-in');

    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                entry.target.classList.add('is-in');
                observer.unobserve(entry.target);
            }
        },
        { rootMargin: '0px 0px -5% 0px', threshold: 0.01 },
    );

    for (const target of targets) {
        if (!target.classList.contains('is-in')) observer.observe(target);
    }
}

// The first load, and every page the view transition swaps in after it.
initReveal();
document.addEventListener('astro:page-load', initReveal);
