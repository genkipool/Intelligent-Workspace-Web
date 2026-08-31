/**
 * Intelligent Workspace — High Performance Scroll Reveal & View Transition Hook
 * Uses IntersectionObserver with lightweight batching and supports Astro View Transitions.
 */

function initReveal() {
    const targets = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];
    const wantsMotion = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

    if (!wantsMotion || !('IntersectionObserver' in window) || targets.length === 0) {
        for (const target of targets) {
            target.classList.add('is-in');
        }
        return;
    }

    const reveal = (element: Element) => {
        element.classList.add('is-in');
    };

    // Synchronously reveal items already in viewport to eliminate first paint flash
    const viewportHeight = window.innerHeight;
    for (const target of targets) {
        if (target.getBoundingClientRect().top < viewportHeight) {
            reveal(target);
        }
    }

    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                reveal(entry.target);
                observer.unobserve(entry.target);
            }
        },
        { rootMargin: '0px 0px -5% 0px', threshold: 0.01 },
    );

    for (const target of targets) {
        if (!target.classList.contains('is-in')) {
            observer.observe(target);
        }
    }

    // Safety fallback
    window.setTimeout(() => {
        for (const target of targets) {
            reveal(target);
        }
        observer.disconnect();
    }, 1800);
}

// Initialize on first load and on every View Transition page load
initReveal();
document.addEventListener('astro:page-load', initReveal);
