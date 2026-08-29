/**
 * Every string on the site, in both languages.
 *
 * SCALING RULE: this file is the only place copy lives. Components never contain a
 * literal sentence — they call `t('key')` — so adding a language means adding one object
 * here and one entry in `locales` in `astro.config.mjs`, and adding a sentence means one
 * key in each object rather than hunting through markup.
 *
 * TypeScript enforces the pairing: `Translations` is derived from the English object, so
 * a key added to `en` and forgotten in `es` fails `astro check` instead of silently
 * rendering an English sentence on the Spanish page.
 */

export const defaultLang = 'en' as const;

export const ui = {
    en: {
        'meta.title': 'Intelligent Workspace — a browser that organises itself',
        'meta.description':
            'A Chrome extension that groups your tabs, runs an AI agent over your browser, tracks deep work, and lets you drive the whole web from the keyboard.',

        'nav.what': 'What it does',
        'nav.keyboard': 'Keyboard',
        'nav.privacy': 'Privacy',
        'nav.skip': 'Skip to content',
        'nav.switchTo': 'Cambiar a español',

        'hero.eyebrow.a': 'Chrome extension',
        'hero.eyebrow.b': 'Free, no account',
        'hero.title': 'Forty tabs. Six groups. No effort.',
        'hero.lede':
            'Intelligent Workspace turns Chrome into a workstation that tidies itself — grouping tabs by your own rules, taking orders in plain language, and handing the whole web over to your keyboard.',
        'hero.install': 'Add to Chrome',
        'hero.support': 'Support the project',

        'strip.said': '“Close the sports tabs and put GitHub in Work.”',
        'strip.did': '6 tabs closed · 2 moved · group renamed',
        'strip.caption': 'Grouping follows rules you write — by domain, by subdomain, by IP, or by regex.',
        'strip.alt': 'Loose tabs collapsing into four coloured groups',

        'features.heading': 'What it actually does',

        'feature.grouping.title': 'Grouping that stays out of the way',
        'feature.grouping.body':
            'Tabs sort themselves by domain, subdomain, IP address or rules you write with regex. Groups you stop touching collapse on a timer you choose. Whole groups can be saved, unloaded from memory, and brought back weeks later exactly as they were.',
        'feature.agent.title': 'An agent, not a chatbot',
        'feature.agent.body':
            'Ask in plain language and it acts on the browser itself: closes tabs, builds groups, renames them, moves things around. It will also summarise a long article, and it can run tasks on a schedule while you are away from the machine.',
        'feature.focus.title': 'Deep work, measured',
        'feature.focus.body':
            'A floating Pomodoro with tasks grouped by project, and a dashboard that shows the parts nobody tracks: how often you were interrupted, how long the streak lasted, and a heatmap of what you actually got done.',
        'feature.tools.title': 'And the rest of the toolbox',
        'feature.tools.body':
            'Two tabs side by side. Reading modes and a theme creator that paints the browser itself. A cookie editor, full-page and area screenshots with a local gallery, QR codes, and a reader that speaks the page aloud.',

        'keyboard.title': 'Put the mouse down',
        'keyboard.body':
            'Press one key and every link on the page grows a label. Type the label to follow it. Snippets expand rich text with your own variables in any input field on any site, and every command has a shortcut you can change.',
        'keyboard.legend': 'Example shortcuts',
        'shortcut.hints': 'label every link',
        'shortcut.top': 'jump to the top',
        'shortcut.fold': 'fold this group',
        'shortcut.panel': 'open the panel',

        'privacy.kicker': 'Where your data goes',
        'privacy.answer': 'Nowhere.',
        'privacy.body':
            "There is no account, and no server of ours behind any of this. Your groups, notes, screenshots and Pomodoro history sit in your own browser's storage. If you turn on the AI features you bring your own Google AI Studio key, and it never leaves your device.",

        'donate.title': 'Two people build this',
        'donate.body':
            'It is free, there are no ads, nothing is tracked and nothing is sold. If it gives you your afternoons back, a one-off donation is what keeps it moving.',
        'donate.cta': 'Donate',

        'footer.store': 'Chrome Web Store',

        'pay.title': 'Support Intelligent Workspace',
        'pay.chooseAmount': 'Choose an amount',
        'pay.otherAmount': 'Other amount',
        'pay.orCard': 'or pay by card',
        'pay.donateNow': 'Donate',
        'pay.secured': 'Payments are processed by Stripe. This page never stores your card.',
        'pay.failed': 'The payment could not be completed.',
        'pay.badAmount': 'Choose an amount between 1 and 500 euros.',
        'pay.walletUnavailable':
            'That wallet is not available on this device, so the card form is shown instead.',

        'nav.theme': 'Switch theme',
        'nav.themeLight': 'Light',
        'nav.themeDark': 'Dark',
        'nav.language': 'Language',

        'caps.heading': "Everything that's in it",
        'caps.lede':
            'Fourteen panels, all of them in the side panel next to the page you are reading — not in a tab you have to go and find.',
        'family.organise': 'Organise',
        'family.find': 'Find',
        'family.focus': 'Focus',
        'family.read': 'Read',

        'cap.groups': 'Tab groups',
        'cap.groups.line': 'Every group, foldable, with the tabs inside listed and searchable.',
        'cap.rules': 'Rules',
        'cap.rules.line': 'Say once where a site belongs and it lands there from then on.',
        'cap.themes': 'Themes',
        'cap.themes.line': 'Build a palette and it paints the browser interface, not just a page.',
        'cap.shortcuts': 'Shortcuts',
        'cap.shortcuts.line': 'Twenty-four commands, every one of them rebindable.',
        'cap.omnibar': 'Omnibar',
        'cap.omnibar.line': 'Type find in the address bar and search everything at once.',
        'cap.bookmarks': 'Bookmarks',
        'cap.bookmarks.line': 'The whole tree, editable, without leaving the page.',
        'cap.history': 'History',
        'cap.history.line': 'By day, filterable, and it deletes ranges properly.',
        'cap.recent': 'Recently closed',
        'cap.recent.line': 'The tab you shut by accident, one click away.',
        'cap.downloads': 'Downloads',
        'cap.downloads.line': 'Pause, resume and open, without the downloads page.',
        'cap.assistant': 'AI assistant',
        'cap.assistant.line': 'Summaries, saved conversations, and scheduled tasks.',
        'cap.pomodoro': 'Pomodoro',
        'cap.pomodoro.line': 'A floating timer, tasks per project, and a real dashboard.',
        'cap.music': 'Music player',
        'cap.music.line': 'Your own files, playing while the browser does everything else.',
        'cap.reading': 'Reader',
        'cap.reading.line': 'Strip a page to its text, in dark, sepia or paper.',
        'cap.aloud': 'Read aloud',
        'cap.aloud.line': 'The page, spoken, with the voice and speed you pick.',

        'trust.heading': 'About those permissions',
        'trust.lede':
            'Chrome will tell you this extension asks for {count} of them, and that is worth being suspicious about. Here is what each group is for. None of it leaves your machine.',
        'trust.tabs': 'Reading, grouping, folding and restoring your tabs — the whole point.',
        'trust.lists': 'Showing your bookmarks, history, reading list and downloads in the panel.',
        'trust.pages': 'The keyboard hints, the reader and the snippets, which run on the page itself.',
        'trust.state': 'Remembering your setup, running the timers, and playing audio in the background.',
        'trust.cookies': 'The cookie editor, and nothing else.',
        'trust.source': 'The source is public. Every claim on this page can be checked against it.',
        'trust.sourceCta': 'Read the code',

        'team.heading': 'Who makes it',
        'team.dev': 'Development and architecture',
        'team.design': 'Design, UX and testing',
        'team.line':
            'No company, no investors, no roadmap written by anyone else. Two people who wanted a browser that behaved.',
    },

    es: {
        'meta.title': 'Intelligent Workspace — un navegador que se ordena solo',
        'meta.description':
            'Una extensión de Chrome que agrupa tus pestañas, pone un agente de IA sobre tu navegador, mide tu trabajo profundo y te entrega toda la web al teclado.',

        'nav.what': 'Qué hace',
        'nav.keyboard': 'Teclado',
        'nav.privacy': 'Privacidad',
        'nav.skip': 'Ir al contenido',
        'nav.switchTo': 'Switch to English',

        'hero.eyebrow.a': 'Extensión de Chrome',
        'hero.eyebrow.b': 'Gratis, sin cuenta',
        'hero.title': 'Cuarenta pestañas. Seis grupos. Cero esfuerzo.',
        'hero.lede':
            'Intelligent Workspace convierte Chrome en una estación de trabajo que se ordena sola: agrupa pestañas con tus propias reglas, acepta órdenes en lenguaje llano y te entrega toda la web al teclado.',
        'hero.install': 'Añadir a Chrome',
        'hero.support': 'Apoyar el proyecto',

        'strip.said': '«Cierra las pestañas de deportes y mete GitHub en Trabajo.»',
        'strip.did': '6 pestañas cerradas · 2 movidas · grupo renombrado',
        'strip.caption':
            'El agrupado sigue reglas que tú escribes: por dominio, por subdominio, por IP o por regex.',
        'strip.alt': 'Pestañas sueltas plegándose en cuatro grupos de colores',

        'features.heading': 'Lo que hace de verdad',

        'feature.grouping.title': 'Agrupado que no molesta',
        'feature.grouping.body':
            'Las pestañas se ordenan solas por dominio, subdominio, dirección IP o reglas que tú escribes con regex. Los grupos que dejas de tocar se pliegan con el temporizador que elijas. Puedes guardar grupos enteros, sacarlos de la memoria y recuperarlos semanas después tal y como estaban.',
        'feature.agent.title': 'Un agente, no un chatbot',
        'feature.agent.body':
            'Pídeselo en lenguaje llano y actúa sobre el navegador: cierra pestañas, crea grupos, los renombra, mueve cosas de sitio. También resume un artículo largo, y puede ejecutar tareas programadas mientras no estás delante.',
        'feature.focus.title': 'Trabajo profundo, medido',
        'feature.focus.body':
            'Un Pomodoro flotante con tareas agrupadas por proyecto, y un panel que enseña lo que nadie mide: cuántas veces te interrumpieron, cuánto duró la racha y un mapa de calor de lo que sacaste adelante de verdad.',
        'feature.tools.title': 'Y el resto de la caja de herramientas',
        'feature.tools.body':
            'Dos pestañas lado a lado. Modos de lectura y un creador de temas que pinta el propio navegador. Editor de cookies, capturas de página completa y de área con galería local, códigos QR y un lector que te lee la página en voz alta.',

        'keyboard.title': 'Suelta el ratón',
        'keyboard.body':
            'Pulsa una tecla y cada enlace de la página se llena de etiquetas. Escribe la etiqueta para seguirlo. Los snippets expanden texto con tus propias variables en cualquier campo de cualquier web, y cada comando tiene un atajo que puedes cambiar.',
        'keyboard.legend': 'Atajos de ejemplo',
        'shortcut.hints': 'etiquetar los enlaces',
        'shortcut.top': 'saltar arriba',
        'shortcut.fold': 'plegar este grupo',
        'shortcut.panel': 'abrir el panel',

        'privacy.kicker': 'A dónde van tus datos',
        'privacy.answer': 'A ningún sitio.',
        'privacy.body':
            'No hay cuenta, ni un servidor nuestro detrás de nada de esto. Tus grupos, notas, capturas e historial de Pomodoro viven en el almacenamiento de tu propio navegador. Si activas la IA pones tu propia clave de Google AI Studio, y no sale nunca de tu dispositivo.',

        'donate.title': 'Esto lo hacen dos personas',
        'donate.body':
            'Es gratis, no tiene anuncios, no rastrea nada y no vende nada. Si te devuelve las tardes, una donación puntual es lo que la mantiene en marcha.',
        'donate.cta': 'Donar',

        'footer.store': 'Chrome Web Store',

        'pay.title': 'Apoya Intelligent Workspace',
        'pay.chooseAmount': 'Elige un importe',
        'pay.otherAmount': 'Otro importe',
        'pay.orCard': 'o paga con tarjeta',
        'pay.donateNow': 'Donar',
        'pay.secured': 'Los pagos los procesa Stripe. Esta página nunca guarda tu tarjeta.',
        'pay.failed': 'No se ha podido completar el pago.',
        'pay.badAmount': 'Elige un importe entre 1 y 500 euros.',
        'pay.walletUnavailable':
            'Ese monedero no está disponible en este dispositivo, así que se muestra el formulario de tarjeta.',

        'nav.theme': 'Cambiar tema',
        'nav.themeLight': 'Claro',
        'nav.themeDark': 'Oscuro',
        'nav.language': 'Idioma',

        'caps.heading': 'Todo lo que lleva dentro',
        'caps.lede':
            'Catorce paneles, todos en el panel lateral junto a la página que estás leyendo, no en una pestaña que tengas que ir a buscar.',
        'family.organise': 'Ordenar',
        'family.find': 'Encontrar',
        'family.focus': 'Concentrarse',
        'family.read': 'Leer',

        'cap.groups': 'Grupos de pestañas',
        'cap.groups.line': 'Cada grupo, plegable, con sus pestañas listadas y buscables.',
        'cap.rules': 'Reglas',
        'cap.rules.line': 'Di una vez dónde va un sitio y a partir de ahí cae solo.',
        'cap.themes': 'Temas',
        'cap.themes.line': 'Monta una paleta y pinta la interfaz del navegador, no solo una página.',
        'cap.shortcuts': 'Atajos',
        'cap.shortcuts.line': 'Veinticuatro comandos, todos reasignables.',
        'cap.omnibar': 'Omnibar',
        'cap.omnibar.line': 'Escribe find en la barra de direcciones y busca en todo a la vez.',
        'cap.bookmarks': 'Marcadores',
        'cap.bookmarks.line': 'El árbol entero, editable, sin salir de la página.',
        'cap.history': 'Historial',
        'cap.history.line': 'Por días, filtrable, y borra rangos como es debido.',
        'cap.recent': 'Cerradas hace poco',
        'cap.recent.line': 'La pestaña que cerraste sin querer, a un clic.',
        'cap.downloads': 'Descargas',
        'cap.downloads.line': 'Pausar, reanudar y abrir, sin la página de descargas.',
        'cap.assistant': 'Asistente de IA',
        'cap.assistant.line': 'Resúmenes, conversaciones guardadas y tareas programadas.',
        'cap.pomodoro': 'Pomodoro',
        'cap.pomodoro.line': 'Temporizador flotante, tareas por proyecto y un panel de verdad.',
        'cap.music': 'Reproductor de música',
        'cap.music.line': 'Tus propios ficheros, sonando mientras el navegador hace lo demás.',
        'cap.reading': 'Lector',
        'cap.reading.line': 'Deja la página en su texto, en oscuro, sepia o papel.',
        'cap.aloud': 'Lectura en voz alta',
        'cap.aloud.line': 'La página, leída, con la voz y la velocidad que elijas.',

        'trust.heading': 'Sobre esos permisos',
        'trust.lede':
            'Chrome te dirá que esta extensión pide {count}, y hacer bien en desconfiar. Esto es para qué sirve cada grupo. Nada de ello sale de tu máquina.',
        'trust.tabs': 'Leer, agrupar, plegar y restaurar tus pestañas: justo de lo que va todo.',
        'trust.lists': 'Enseñar tus marcadores, historial, lista de lectura y descargas en el panel.',
        'trust.pages':
            'Las etiquetas de teclado, el lector y los snippets, que corren sobre la propia página.',
        'trust.state': 'Recordar tu configuración, llevar los temporizadores y sonar de fondo.',
        'trust.cookies': 'El editor de cookies, y nada más.',
        'trust.source': 'El código es público. Todo lo que dice esta página se puede comprobar en él.',
        'trust.sourceCta': 'Ver el código',

        'team.heading': 'Quién la hace',
        'team.dev': 'Desarrollo y arquitectura',
        'team.design': 'Diseño, UX y pruebas',
        'team.line':
            'Sin empresa, sin inversores, sin una hoja de ruta escrita por nadie más. Dos personas que querían un navegador que se portara bien.',
    },
} as const;

export type Lang = keyof typeof ui;

/** The key set is whatever English declares. */
export type TranslationKey = keyof (typeof ui)['en'];

/**
 * The completeness check. Assigning `ui` to this type fails to compile if any language
 * is missing a key English has, so `astro check` catches a half-translated release
 * instead of the Spanish page quietly rendering an English sentence.
 */
const _everyLanguageIsComplete: Record<Lang, Record<TranslationKey, string>> = ui;
void _everyLanguageIsComplete;
