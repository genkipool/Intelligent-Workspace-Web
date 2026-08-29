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
        'hero.title': 'A browser that organises itself.',
        'hero.lede':
            'Forty tabs become six groups without you doing anything. Then an AI agent, a focus timer and a keyboard-driven web, all in the panel beside the page.',
        'hero.scroll': 'See how',
        'shot.pending': 'Screenshot pending',
        'shot.window': 'The side panel open beside a page you are reading',
        'shot.agent': 'The agent being asked to tidy up, and reporting what it did',
        'shot.focus': 'The Pomodoro panel and the activity dashboard',
        'shot.keyboard': 'Every link on a page wearing a keyboard label',
        'hero.install': 'Add to Chrome',
        'hero.support': 'Support the project',

        'strip.said': '“Close the sports tabs and put GitHub in Work.”',
        'strip.did': '6 tabs closed · 2 moved · group renamed',
        'strip.caption': 'Grouping follows rules you write — by domain, by subdomain, by IP, or by regex.',
        'strip.alt': 'Loose tabs collapsing into four coloured groups',

        'features.heading': 'What it actually does',
        'features.title': 'Four things it does that nothing else quite does.',
        'caps.title': 'Fourteen panels, all of them beside the page you are reading.',
        'trust.title': 'Twenty-three permissions, and a reason for each one.',
        'faq.title': 'The questions worth asking first.',
        'team.title': 'Two people, no company behind them.',

        'feature.grouping.title': 'Grouping that stays out of the way',
        'feature.grouping.lead':
            'Tabs sort themselves the moment they open, by whatever you decide matters: the domain, the subdomain, the IP address, or a rule you write with a regular expression. You set it up once and then stop thinking about it.',
        'feature.grouping.d1':
            'A group you have not touched for a while folds itself. You choose the timer, or turn it off.',
        'feature.grouping.d2':
            'Save a whole group, drop it out of memory, and bring it back weeks later with every tab where you left it.',
        'feature.grouping.d3':
            'Duplicates are counted and removed in one action, across every window at once.',

        'feature.agent.title': 'An agent, not a chatbot',
        'feature.agent.lead':
            'Most AI in a browser writes you a paragraph. This one changes the browser. Ask it in plain language and it closes tabs, builds groups, renames them and moves things between them — then tells you exactly what it did.',
        'feature.agent.d1':
            '“Close the sports tabs and put GitHub in Work” is a sentence it can carry out, not one it explains back to you.',
        'feature.agent.d2':
            'It summarises a long article into the side panel, and keeps the conversation so you can find it again.',
        'feature.agent.d3':
            'Tasks can run on a schedule — a morning digest that is waiting when you sit down.',

        'feature.focus.title': 'Deep work, and proof of it',
        'feature.focus.lead':
            'A floating Pomodoro with tasks grouped by project, and a dashboard that measures the parts nobody measures. Not how long the timer ran: how often something pulled you out of it.',
        'feature.focus.d1':
            'Interruptions are counted, so a session that technically lasted an hour does not get to pretend it was an hour of work.',
        'feature.focus.d2': 'A heatmap of your days, in the shape everyone already knows how to read.',
        'feature.focus.d3':
            'Web activity is tracked per site, and any site can be blocked outright while the timer is running.',

        'feature.keyboard.title': 'The whole browser from the keyboard',
        'feature.keyboard.lead':
            'Twenty-four commands, every one of them rebindable, plus a hint system that puts a label on every link so you can follow it by typing. The mouse becomes optional rather than merely discouraged.',
        'feature.keyboard.d1':
            'Snippets expand rich text with your own variables, in any input field on any site.',
        'feature.keyboard.d2':
            'Type “find” in the address bar to search tabs, bookmarks, history and downloads at once.',
        'feature.keyboard.d3':
            'Two tabs side by side in one window, and a picture-in-picture that survives switching tabs.',

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

        'problem.kicker': 'The problem',
        'problem.title': 'You did not open forty tabs on purpose.',
        'problem.s1': 'The tab you need is a four-pixel favicon somewhere in the strip.',
        'problem.s2': 'You keep three windows open because one stopped being usable.',
        'problem.s3': 'Closing anything feels risky, so nothing ever gets closed.',
        'problem.s4': 'The browser is where you work, and it is the least organised thing you own.',
        'problem.turn':
            'None of that is a discipline problem. It is a browser that has never been told what belongs together.',

        'how.heading': 'How it goes',
        'how.s1.title': 'Install it',
        'how.s1.body':
            'One click from the Chrome Web Store. Nothing to sign up for, nothing to configure before it starts working — the default rules group by domain from the first tab.',
        'how.s2.title': 'Say what belongs where',
        'how.s2.body':
            'Once. Name a group, drop a domain or a regular expression in it, pick a colour. Or let the AI do it by describing what you want in a sentence.',
        'how.s3.title': 'Forget about it',
        'how.s3.body':
            'New tabs land in the right group on their own. Groups you stop using fold themselves. The strip stays readable without you tending it.',

        'faq.heading': 'Before you install it',
        'faq.cost.q': 'What does it cost?',
        'faq.cost.a':
            'Nothing, and there is no paid tier waiting behind a feature. No ads, no tracking, nothing sold. Donations are the only money involved and they are optional.',
        'faq.account.q': 'Do I need an account?',
        'faq.account.a':
            'No. There is no sign-up, no login, and no server of ours to hold an account on. Everything is stored by your browser, on your machine.',
        'faq.ai.q': 'Where does the AI come from?',
        'faq.ai.a':
            'You bring a free API key from Google AI Studio and paste it in once. It is kept in local storage on your device and is used only for the requests you make. Leave it out and every other feature still works.',
        'faq.data.q': 'What leaves my computer?',
        'faq.data.a':
            'Your groups, notes, screenshots, Pomodoro history and settings: nothing. They live in your browser storage. The only outbound traffic is the AI requests you trigger yourself, and they go to Google, not to us.',
        'faq.browsers.q': 'Does it work in other browsers?',
        'faq.browsers.a':
            'It is built for Chrome and uses the side panel and tab-group APIs, so Chromium browsers with the same APIs — Edge, Brave, Opera — generally work. Firefox and Safari do not.',
        'faq.source.q': 'Can I read the code?',
        'faq.source.a':
            'Yes. The source is public so that anyone can audit what an extension with these permissions actually does. It is not open source in the licensing sense — you can read it and propose fixes, not republish it.',
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
        'hero.title': 'Un navegador que se ordena solo.',
        'hero.lede':
            'Cuarenta pestañas se convierten en seis grupos sin que hagas nada. Y luego un agente de IA, un temporizador de foco y toda la web al teclado, en el panel junto a la página.',
        'hero.scroll': 'Ver cómo',
        'shot.pending': 'Captura pendiente',
        'shot.window': 'El panel lateral abierto junto a una página que estás leyendo',
        'shot.agent': 'El agente recibiendo una orden y contando qué hizo',
        'shot.focus': 'El panel de Pomodoro y el cuadro de actividad',
        'shot.keyboard': 'Cada enlace de una página con su etiqueta de teclado',
        'hero.install': 'Añadir a Chrome',
        'hero.support': 'Apoyar el proyecto',

        'strip.said': '«Cierra las pestañas de deportes y mete GitHub en Trabajo.»',
        'strip.did': '6 pestañas cerradas · 2 movidas · grupo renombrado',
        'strip.caption':
            'El agrupado sigue reglas que tú escribes: por dominio, por subdominio, por IP o por regex.',
        'strip.alt': 'Pestañas sueltas plegándose en cuatro grupos de colores',

        'features.heading': 'Lo que hace de verdad',
        'features.title': 'Cuatro cosas que hace y que no hace del todo nadie más.',
        'caps.title': 'Catorce paneles, todos junto a la página que estás leyendo.',
        'trust.title': 'Veintitrés permisos, y un motivo para cada uno.',
        'faq.title': 'Las preguntas que conviene hacerse primero.',
        'team.title': 'Dos personas, sin ninguna empresa detrás.',

        'feature.grouping.title': 'Agrupado que no molesta',
        'feature.grouping.lead':
            'Las pestañas se ordenan solas en cuanto se abren, por lo que tú decidas que importa: el dominio, el subdominio, la dirección IP o una regla que escribas con una expresión regular. Lo configuras una vez y dejas de pensar en ello.',
        'feature.grouping.d1':
            'Un grupo que llevas un rato sin tocar se pliega solo. El temporizador lo eliges tú, o lo apagas.',
        'feature.grouping.d2':
            'Guarda un grupo entero, sácalo de la memoria y recupéralo semanas después con cada pestaña donde la dejaste.',
        'feature.grouping.d3':
            'Las duplicadas se cuentan y se quitan de una vez, en todas las ventanas a la vez.',

        'feature.agent.title': 'Un agente, no un chatbot',
        'feature.agent.lead':
            'La mayoría de la IA en un navegador te escribe un párrafo. Esta cambia el navegador. Pídeselo en lenguaje llano y cierra pestañas, crea grupos, los renombra y mueve cosas entre ellos; luego te dice exactamente qué hizo.',
        'feature.agent.d1':
            '«Cierra las pestañas de deportes y mete GitHub en Trabajo» es una frase que ejecuta, no una que te explica.',
        'feature.agent.d2':
            'Resume un artículo largo en el panel lateral, y guarda la conversación para que puedas volver a ella.',
        'feature.agent.d3':
            'Las tareas pueden ir programadas: un resumen de la mañana esperándote cuando te sientas.',

        'feature.focus.title': 'Trabajo profundo, y la prueba',
        'feature.focus.lead':
            'Un Pomodoro flotante con tareas agrupadas por proyecto, y un panel que mide lo que nadie mide. No cuánto corrió el temporizador: cuántas veces algo te sacó de él.',
        'feature.focus.d1':
            'Las interrupciones se cuentan, así una sesión que técnicamente duró una hora no puede fingir que fue una hora de trabajo.',
        'feature.focus.d2': 'Un mapa de calor de tus días, con la forma que todo el mundo ya sabe leer.',
        'feature.focus.d3':
            'La actividad se registra por sitio, y cualquiera se puede bloquear del todo mientras corre el temporizador.',

        'feature.keyboard.title': 'El navegador entero desde el teclado',
        'feature.keyboard.lead':
            'Veinticuatro comandos, todos reasignables, más un sistema de etiquetas que pone una sobre cada enlace para que lo sigas escribiendo. El ratón pasa a ser opcional, no solo desaconsejado.',
        'feature.keyboard.d1':
            'Los snippets expanden texto con tus propias variables, en cualquier campo de cualquier web.',
        'feature.keyboard.d2':
            'Escribe «find» en la barra de direcciones y busca pestañas, marcadores, historial y descargas a la vez.',
        'feature.keyboard.d3':
            'Dos pestañas lado a lado en una ventana, y un picture-in-picture que sobrevive al cambiar de pestaña.',

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

        'problem.kicker': 'El problema',
        'problem.title': 'No abriste cuarenta pestañas a propósito.',
        'problem.s1': 'La pestaña que buscas es un favicon de cuatro píxeles en algún punto de la tira.',
        'problem.s2': 'Tienes tres ventanas abiertas porque una dejó de ser usable.',
        'problem.s3': 'Cerrar algo da apuro, así que no se cierra nunca nada.',
        'problem.s4': 'El navegador es donde trabajas, y es lo más desordenado que tienes.',
        'problem.turn':
            'Nada de eso es falta de disciplina. Es un navegador al que nadie le ha dicho qué va con qué.',

        'how.heading': 'Cómo va la cosa',
        'how.s1.title': 'Instálala',
        'how.s1.body':
            'Un clic desde la Chrome Web Store. Nada que registrar, nada que configurar antes de que empiece a funcionar: las reglas por defecto agrupan por dominio desde la primera pestaña.',
        'how.s2.title': 'Di qué va dónde',
        'how.s2.body':
            'Una vez. Pon nombre a un grupo, mete dentro un dominio o una expresión regular, elige un color. O deja que la IA lo haga describiéndoselo en una frase.',
        'how.s3.title': 'Olvídate',
        'how.s3.body':
            'Las pestañas nuevas caen solas en su grupo. Los grupos que dejas de usar se pliegan. La tira se mantiene legible sin que la cuides.',

        'faq.heading': 'Antes de instalarla',
        'faq.cost.q': '¿Cuánto cuesta?',
        'faq.cost.a':
            'Nada, y no hay una versión de pago esperando detrás de ninguna función. Sin anuncios, sin rastreo, sin vender nada. Las donaciones son el único dinero que hay de por medio y son opcionales.',
        'faq.account.q': '¿Necesito una cuenta?',
        'faq.account.a':
            'No. No hay registro, ni inicio de sesión, ni un servidor nuestro donde tener una cuenta. Todo lo guarda tu navegador, en tu máquina.',
        'faq.ai.q': '¿De dónde sale la IA?',
        'faq.ai.a':
            'Pones tu propia clave gratuita de Google AI Studio una sola vez. Se guarda en el almacenamiento local de tu dispositivo y se usa solo para las peticiones que hagas tú. Si no la pones, el resto de funciones siguen funcionando igual.',
        'faq.data.q': '¿Qué sale de mi ordenador?',
        'faq.data.a':
            'Tus grupos, notas, capturas, historial de Pomodoro y ajustes: nada. Viven en el almacenamiento de tu navegador. El único tráfico saliente son las peticiones de IA que provocas tú, y van a Google, no a nosotros.',
        'faq.browsers.q': '¿Funciona en otros navegadores?',
        'faq.browsers.a':
            'Está hecha para Chrome y usa las APIs de panel lateral y de grupos de pestañas, así que los navegadores Chromium con las mismas APIs —Edge, Brave, Opera— suelen funcionar. Firefox y Safari no.',
        'faq.source.q': '¿Puedo leer el código?',
        'faq.source.a':
            'Sí. El código es público para que cualquiera pueda auditar qué hace de verdad una extensión con estos permisos. No es open source en el sentido de la licencia: puedes leerlo y proponer arreglos, no republicarlo.',
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
