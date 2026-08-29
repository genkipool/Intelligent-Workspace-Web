/**
 * The landing page's only script: a language toggle and the footer year.
 *
 * Every translatable string sits in the markup as `data-en` / `data-es`, so the page is
 * readable and indexable with JavaScript switched off — the English text is what the
 * HTML actually contains, and the toggle only swaps it. No dictionary object to drift
 * out of sync with the markup.
 */

(() => {
    const STORAGE_KEY = 'iw-lang';
    const button = document.getElementById('lang');

    function apply(lang) {
        for (const node of document.querySelectorAll('[data-en]')) {
            const value = node.dataset[lang];
            if (value) node.textContent = value;
        }
        document.documentElement.lang = lang;
        // The button shows the language you would switch *to*, which is the convention
        // people already expect from every other language toggle.
        button.textContent = lang === 'es' ? 'EN' : 'ES';
        button.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a español');
    }

    let current = 'en';
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'es' || stored === 'en') current = stored;
        else if ((navigator.language || '').toLowerCase().startsWith('es')) current = 'es';
    } catch {
        // Private mode, or storage disabled. The default is fine.
    }

    if (current !== 'en') apply(current);
    else button.textContent = 'ES';

    button.addEventListener('click', () => {
        current = current === 'es' ? 'en' : 'es';
        apply(current);
        try {
            localStorage.setItem(STORAGE_KEY, current);
        } catch {
            // Nothing to do: the choice simply will not survive a reload.
        }
    });

    document.getElementById('year').textContent = String(new Date().getFullYear());
})();
