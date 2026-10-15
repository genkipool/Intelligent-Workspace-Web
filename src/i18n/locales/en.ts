/**
 * The source dictionary. Every other language is a translation of this one, and its
 * keys are the `TranslationKey` union: a key missing from, or extra in, any other
 * locale fails the type check.
 */

export const en = {
    // Metadata & Global
    'meta.title': 'Intelligent Workspace: Tab Manager, Keyboard Navigation & Dual AI',
    'meta.description':
        'Organize tabs automatically, browse with 77 link hints, run dual AI (Gemini Cloud + local Nano) with 58 tools, and loop YouTube videos. 100% local, no account.',
    'meta.keywords':
        'tab manager, tab groups, auto tab grouping, keyboard navigation, link hints, mouse-free browsing, keyboard-driven browsing, local ai browser extension, gemini nano, dual ai assistant, autonomous ai agent, youtube video looper, youtube shorts loop, shorts hover audio preview, floating picture in picture, auto pip, parked youtube player, text snippets expander, sidepanel downloads manager, bookmarks to rules, reader mode text to speech, full page screenshot ocr, kanban notes, dnr website blocker, pomodoro timer, cookie editor, right click enabler, qr code generator, 100% local first, zero telemetry, chrome extension manifest v3',
    /** The `alt` on the social card, and the only description a screen reader gets of it. */
    'meta.ogAlt': 'Intelligent Workspace: transform your browser into an autonomous workstation',

    // Navigation
    'nav.features': 'Features',
    'nav.tools': 'Tools',
    'nav.keyboard': 'Keyboard',
    'nav.privacy': 'Privacy',
    'nav.faq': 'FAQ',
    'nav.skip': 'Skip to content',
    'nav.theme': 'Switch theme',
    'nav.language': 'Language',
    'nav.install': 'Add to Chrome',
    'nav.contribute': 'Support',
    'nav.menu': 'Menu',
    'nav.contributeTitle': 'Support the development of Intelligent Workspace',
    'nav.version': 'Manifest V3',

    // Hero Section & 3-Slide Carousel
    'hero.title': 'A browser that organises itself.',
    'hero.btnInstall': 'Add to Google Chrome',
    'hero.btnSource': 'View Source on GitHub',
    'hero.contribute': 'Support the project',

    'hero.slide1.line1': 'Transform your browser into an',
    'hero.slide1.line2': 'autonomous workstation',
    'hero.slide1.lede':
        'Intelligent Workspace works as a control panel for managing the browser. Organize your tabs into groups with web activity, give your tabs basic features that improve productivity, browsing speed, and focus. It allows you to manage bookmarks, history, tabs, recently closed tabs, and tabs pending to be read from the side panel, omnibox, keyboard shortcuts, artificial intelligence, and context menu.',
    'hero.slide1.tag': 'Smart Workspaces & AI Assistant',

    'hero.slide2.line1': 'Universal Omnibar search and',
    'hero.slide2.line2': 'complete keyboard control',
    'hero.slide2.lede':
        'Press o and a search box floats over the page: open tabs, bookmarks, history, notes, screenshots, rules and backups, each behind its own prefix, and qaia: hands the whole sentence to the agent. Press f and every link wears a letter that opens it. Not one of these keys is fixed; all of them can be rebound.',
    'hero.slide2.tag': 'Omnibar & Keyboard Shortcuts',

    'hero.slide3.line1': 'Your complete workstation',
    'hero.slide3.line2': 'integrated in the side panel',
    'hero.slide3.lede':
        'Bookmarks, history, recently closed tabs, the reading list and downloads stop being pages you go and open. Beside them: notes with checklists and Kanban boards, the screenshot gallery with on-device OCR, the AI assistant, the Pomodoro timer, and your own music or online radio.',
    'hero.slide3.tag': 'One side panel, everything in it',

    'hero.carousel.prev': 'Previous slide',
    'hero.carousel.next': 'Next slide',
    'hero.carousel.slide': 'Go to slide',
    'hero.m1.title': 'Manage rules',
    'hero.m1.footer': 'Development: Luisrb85, Design & Testing: Flor Chávez.',
    'hero.m1.r1': 'Work',
    'hero.m1.r2': 'Documentation',
    'hero.m1.r3': 'Design',
    'hero.m1.r6': 'Mail',
    'hero.m2.hints': 'On the page itself',
    'hero.m2.k1': 'label every link',
    'hero.m2.k2': 'copy a link',
    'hero.m2.k3': 'read it out loud',
    'hero.m3.title': 'List groups',
    'hero.m3.g1': 'Work',
    'hero.m3.g2': 'Documentation',
    'hero.m3.g3': 'Design',

    // Problem vs Solution
    'problem.title': 'Browser chaos is not your fault.',
    'problem.subtitle':
        'The things a browser makes you do by hand every single day, and the part of the extension that stops each one. Nothing here needs an account, a server, or more discipline than you already have.',
    'problem.vs': 'What the extension does',

    'problem.p1.title': 'Forty tabs, forty favicons',
    'problem.p1.desc':
        'The tab you want is a four-pixel icon in a strip that stopped being readable an hour ago. You reopen pages you already have open, twice a day.',
    'problem.p2.title': 'You tidy the same tabs every morning',
    'problem.p2.desc':
        'You drag the work tabs into a group, name it, colour it. By the afternoon there are nine loose ones again, and tomorrow you do it a third time.',
    'problem.p3.title': 'Everything useful is a page away',
    'problem.p3.desc':
        'A bookmark, something in your history, a note, a screenshot: each one lives on its own page, and going to fetch it takes you off the page you were on.',
    'problem.p4.title': 'Your hand keeps leaving the keyboard',
    'problem.p4.desc':
        'Open a link, find a tab, jump to a group, close six of them: every one of those is a trip to the mouse and back, a few hundred times a day.',

    'problem.s1.title': 'A rule, written once',
    'problem.s1.desc':
        'A rule is a list of URL fragments and the group they belong to. Any tab whose address contains one of them lands there, with the name and colour you gave it. What has no rule is grouped by domain, subdomain, IP address or local file.',
    'problem.s2.title': 'The list keeps itself short',
    'problem.s2.desc':
        'A group nobody has touched folds itself when its timer runs out, the duplicate counter clears them in one click, and a whole group can be backed up and reopened days later exactly as it was.',
    'problem.s3.title': 'It is all in the same panel',
    'problem.s3.desc':
        'Bookmarks, history, recently closed tabs, the reading list, downloads, notes, the screenshot gallery and the assistant are nine views of one side panel, beside the page rather than instead of it.',
    'problem.s4.title': 'One key for each of them',
    'problem.s4.desc':
        'f draws a letter on every link, o opens a search box over the page with a prefix per source, and the agent takes the job in plain language. Every binding is editable.',

    // Feature Hub / Tabs Section
    'fhub.title': 'Core Productivity Pillars & Complete Browser Control',
    'fhub.subtitle':
        'Every other thing the extension does belongs to one of the panels below. Each one lists what it actually does: no capability is named here that you cannot find in the side panel today.',
    'fhub.tab1': 'AI agent',
    'fhub.tab2': 'Tabs & rules',
    'fhub.tab3': 'Time & focus',
    'fhub.tab4': 'Keyboard',

    // Tab 1: AI Agent
    'fhub.agent.title': 'An assistant that can act on the browser, not just talk about it',
    'fhub.agent.lead':
        'The assistant lives in the side panel and holds fifty-eight tools onto the browser itself: tabs, groups, rules, bookmarks, themes, snippets and site shortcuts. Ask in plain language and it runs them.',
    'fhub.agent.f1':
        '“Close the sports tabs and put GitHub and Jira in a red group called Work” executes directly on the browser: closing tabs, grouping them, and assigning color.',
    'fhub.agent.f2':
        'Summarises the page you are on into the panel, saves the conversation, reads it back aloud, and takes attached files, images and dictation.',
    'fhub.agent.f3':
        'Scheduled queries: a question that asks itself on the day and at the time you choose, and leaves the answer waiting.',
    'fhub.agent.f4':
        "Bring your own Google AI Studio key, several if you like. When they run out of quota, Chrome's on-device model (Gemini local) answers instead, offline and free.",

    // Tab 2: Tab Engine
    'fhub.tabs.title': 'Rules you write once, and never file a tab again',
    'fhub.tabs.lead':
        'Grouping is decided by rules, not by guesswork: a rule names the addresses it owns, the group they land in, and its colour. Everything else here exists to keep that list of groups short.',
    'fhub.tabs.f1':
        'Rules made of URL fragments, plus automatic grouping by domain, subdomain, IP address, local files, Chrome pages and extensions.',
    'fhub.tabs.f2':
        'Auto-collapse timer: a group nobody has touched folds itself and stops taking up the strip.',
    'fhub.tabs.f3':
        'Idle tabs are suspended to hand their memory back, and whole groups can be backed up and restored: one key restores every backup at once.',
    'fhub.tabs.f4':
        'Duplicate counter with one-click cleanup, mute every tab, hide a group, and drag to reorder both tabs and groups.',

    // Tab 3: Pomodoro & Analytics
    'fhub.focus.title': 'Where your hours actually went, and a limit that holds',
    'fhub.focus.lead':
        'Two things that work together: a record of the time each site takes, and rules that stop a site once it has had enough of your day. Everything is kept on this device.',
    'fhub.focus.f1':
        'Time per site and per category, sixteen categories built in plus any you add, with visits, average time per visit, peak hour and busiest weekday.',
    'fhub.focus.f2':
        'A daily allowance, a weekly one, and the hours a site may be opened at all. When one runs out the site is blocked, not just counted.',
    'fhub.focus.f3':
        'An optional password before a rule can be switched off or deleted, and a “five more minutes” that is recorded as a snooze rather than as lifting the limit.',
    'fhub.focus.f4':
        'Pomodoro with four methods, tasks per project, interruptions counted, and a dashboard with heatmap, streaks and per-project breakdown.',

    // Tab 4: Keyboard & Snippets
    'fhub.keys.title': 'Every command has a key, and every key can be changed',
    'fhub.keys.lead':
        'Two ways in: a floating search box over any page, and letter labels drawn on the page itself. Neither of them needs the mouse, and neither is fixed. Every binding on this page is editable.',
    'fhub.keys.f1':
        'Press f and every link wears a letter. Ctrl opens it in a background tab, Shift in a new window; cf copies the link instead.',
    'fhub.keys.f2':
        'Press o for the floating omnibar, or type find in the address bar: b: bookmarks, h: history, c: recently closed, f: text on the page, lnt: notes, rl: rules, bgr: backups.',
    'fhub.keys.f3':
        'Snippets with {{variables}} and defaults, rich text or plain, expanding in any input field; $$ opens the five you use most.',
    'fhub.keys.f4':
        'Dark, sepia, grayscale or light mode for one tab or all of them, split screen, picture-in-picture, and read-aloud, each on its own key.',

    // Tab 5: Music player and online radio

    // Feature Hub Mockups & Visual Previews (Bilingual)
    'fhub.tablistLabel': 'Feature Tabs',
    'fhub.agent.mockup.badge': 'AI assistant',
    'fhub.agent.mockup.latency': 'Gemini or on-device AI',
    'fhub.agent.mockup.user': 'You',
    'fhub.agent.mockup.userMsg':
        '“Close the sports tabs and put GitHub and Jira in a red group called Work.”',
    'fhub.agent.mockup.agent': 'Assistant',
    'fhub.agent.mockup.actionGroup': 'Group 2 tabs as “Work”',
    'fhub.agent.mockup.actionDiscard': 'Close 6 tabs',
    'fhub.agent.mockup.actionRam': 'Set color red',
    'fhub.agent.mockup.agentReply':
        'Closed 6 sports tabs, made the group Work with the GitHub and Jira tabs in it, and set it red.',
    'fhub.tabs.mockup.badge': 'List groups',
    'fhub.tabs.mockup.latency': 'Auto-collapse on',
    'fhub.tabs.mockup.c1Title': 'Entertainment',
    'fhub.tabs.mockup.c1Timer': 'folds in 15 min',
    'fhub.tabs.mockup.activeBadge': 'Active',
    'fhub.tabs.mockup.hibernatedBadge': 'Suspended',
    'fhub.tabs.mockup.c2Title': 'Holiday',
    'fhub.tabs.mockup.c2Timer': 'rule: *.astro.build',
    'fhub.tabs.mockup.c3Title': 'Chrome',
    'fhub.focus.mockup.badge': 'Web activity',
    'fhub.focus.mockup.efficiency': 'This device only',
    'fhub.focus.mockup.timer': '25:00',
    'fhub.focus.mockup.timerMode': 'Pomodoro · project: Landing',
    'fhub.focus.mockup.statInterrupt': 'Interruptions',
    'fhub.focus.mockup.statDaily': 'Focus today',
    'fhub.focus.mockup.heatmapTitle': 'Activity streak',
    'fhub.focus.mockup.rowDaily': 'Daily',
    'fhub.focus.mockup.rowWeekly': 'Weekly',
    'fhub.focus.mockup.rowHours': 'Hours',

    // Dedicated Showcase 1: Omnibar & Link Hints
    'omnibar.badge': 'Command bar',
    'omnibar.title': 'One search box over any page, and a letter on every link',
    'omnibar.subtitle':
        'Press o and the omnibar floats over whatever you are reading. Each prefix searches a different thing, and one of them hands the sentence straight to the agent. Prefer the address bar? Type find there and you get the same search without leaving it.',
    'omnibar.f1.title': 'Everything, behind a prefix',
    'omnibar.f1.desc':
        'b: bookmarks, h: history, c: recently closed, lnt: notes, limg: screenshots, rl: rules, bgr: backups, lai: past AI conversations. Type @ and it lists every prefix, so you never have to remember one.',
    'omnibar.f2.title': 'Commands, not only results',
    'omnibar.f2.desc':
        'dg: closes whole groups, dt: closes several tabs at once, ts: puts the ones you pick side by side, f: finds text inside the page, ar: reads it aloud, cr: writes a grouping rule, qaia: gives the job to the agent.',
    'omnibar.f3.title': 'Letter labels on the page itself',
    'omnibar.f3.desc':
        'Press f and every link, button and field wears a one or two letter label. Ctrl opens it in a background tab, Shift in a new window, and cf copies the link instead of following it.',

    // Dedicated Showcase 2: Reader Mode & TTS
    'reader.badge': 'Reading and listening',
    'reader.title': 'A clean page, read out loud, with the word it is saying lit up',
    'reader.subtitle':
        'Reader mode takes the page down to its text. The floating player then reads it, highlighting the paragraph and the word as it goes, at the voice, speed and pitch you choose.',
    'reader.f1.title': 'It highlights what it is reading',
    'reader.f1.desc':
        'The paragraph and the word being spoken are marked as the voice moves through them, and you set how solid that highlight looks.',
    'reader.f2.title': 'The page, without the page',
    'reader.f2.desc':
        'One key strips the article out of its layout. Dark, sepia, grayscale or light can also be applied to any site as it is, for one tab or for every tab at once.',
    'reader.f3.title': 'The voice is yours to set',
    'reader.f3.desc':
        'Language, speed, pitch and volume; start it with ar from the keyboard, from the omnibar, or on the assistant’s own answers.',

    // Dedicated Showcase 3: Media & YouTube Loop
    'media.badge': 'Floating video',
    'media.title': 'Any video on top of your work, and YouTube on repeat',
    'media.subtitle':
        'A picture-in-picture button appears on YouTube, Shorts, TikTok and ordinary HTML5 players. The whole page can float too, and the loop button lives in the player where you would expect it.',
    'media.f1.title': 'Picture-in-picture that floats itself',
    'media.f1.desc':
        'Send a video out with wv, or let it leave on its own: as floats it once you scroll past it, ah when you switch away from the tab.',
    'media.f2.title': 'A loop button inside YouTube',
    'media.f2.desc':
        'Added to the YouTube player and to Shorts, so a track, a lesson or a background loop repeats without touching anything.',
    'media.f3.title': 'The whole page, floating',
    'media.f3.desc':
        'wp puts the current page in a document picture-in-picture window and we in a clean popup, both also reachable from the omnibar with wp:, we: and wv:, and from the right-click menu.',
    'keep.badge': 'Nothing is lost',
    'keep.title': 'Put a page away, or a whole window, and get it back exactly as it was',
    'keep.subtitle':
        'Something the browser has never been good at: keeping a picture of what you were looking at, and putting a set of tabs somewhere safe until you need them again.',
    'keep.capture.title': 'Every way to capture, and one gallery to keep them in',
    'keep.capture.lead':
        'Not just the visible screen. The whole page, scrolled and stitched into one image up to 30,000 pixels tall; the same page split into parts when that is easier to read; an area you draw yourself; or every tab of a group in one go.',
    'keep.capture.f1':
        'cs captures the page and ca an area you drag, both without leaving it. The group menu captures every tab it holds, visible screen or full page.',
    'keep.capture.f2':
        'They land in a local gallery in the side panel, where a capture can be pinned so a new browser session does not clear it.',
    'keep.capture.f3':
        'Text inside a capture can be lifted out of it and copied, by an engine that runs on your own machine. Save one as PNG or PDF, or download the lot.',
    'keep.backup.title': 'A group put away, and the memory back with it',
    'keep.backup.lead':
        'A backup is a whole group closed and kept: its tabs, their order and their titles. It stays in the list with a B on it, and one click opens every one of them again.',
    'keep.backup.f1':
        'Back up one group from its own row, or every inactive group at once with bg. br restores all of them.',
    'keep.backup.f2':
        'bgr: in the omnibar searches inside the backups: restore a whole group, a single tab out of one, or everything the filter matched.',
    'keep.backup.f3':
        'The current session can be saved and reopened another day, and rules, themes, bookmarks, shortcuts and snippets all export and import as files.',
    'keep.shot.gallery': 'Gallery',
    'keep.shot.s1': 'docs.astro.build (full page)',
    'keep.shot.s2': 'IW-214 · area',
    'keep.shot.s3': 'Pricing table',
    'keep.shot.s4': 'Invoice · June',
    'keep.opt.visible': 'Capture the visible area',
    'keep.opt.full': 'Capture the full page',
    'keep.opt.parts': 'Capture the full page in parts',
    'keep.opt.area': 'Capture web area',
    'keep.opt.group': "Capture the group's tabs",
    'keep.shot.groups': 'Tab groups',
    'keep.shot.g1': 'Work',
    'keep.shot.g2': 'Documentation',
    'keep.shot.g3': 'Design',

    // Dedicated Showcase 4: Activity Dashboard
    'activity.badge': 'Web activity',
    'activity.title': 'Web activity: where your day goes, and what you do about it',
    'activity.subtitle':
        'The side panel holds today; the full page holds the rest. Time per site and per category, and rules that stop a site once it has had enough of your day. All of it recorded on this device, and none of it sent anywhere.',
    'activity.f1.title': 'Today, beside the page you are on',
    'activity.f1.desc':
        'One box per site, folded, with the time it has taken. Unfold it and you get visits, average time per visit, its share of the day, and the three rules that govern it.',
    'activity.f2.title': 'A daily cap, a weekly cap, and opening hours',
    'activity.f2.desc':
        'When one runs out the site is actually blocked, on a screen that says why and when it lifts. A password can be required before a rule is switched off, and "five more minutes" is recorded as a snooze.',
    'activity.f3.title': 'The whole record, in a full page',
    'activity.f3.desc':
        'Time browsing, focus ratio, peak hour, busiest weekday, stretches, streak and top category, with the hour-by-hour grid, the per-category split, and every visit on a timeline.',
    'activity.panel.title': 'Web activity',
    'activity.panel.search': 'Search sites',
    'activity.panel.visits': 'Visits',
    'activity.panel.perVisit': 'Per visit',
    'activity.panel.share': 'Share',
    'activity.panel.daily': 'Daily',
    'activity.panel.weekly': 'Weekly',
    'activity.panel.schedule': 'Allowed hours',
    'activity.panel.overLimit': 'over limit',
    'activity.panel.outsideHours': 'outside hours',

    // Dedicated Showcase 5: Bookmarks & Link Auditor
    'bookmarks.badge': 'The lists you already have',
    'bookmarks.title': 'Bookmarks, history and downloads, without leaving the page',
    'bookmarks.subtitle':
        'Chrome scatters these five lists across pages you have to go and open. Here they are five views of one panel, beside whatever you are reading, with a search that filters as you type and an action on every row.',
    'bookmarks.f1.title': 'The whole bookmark tree, editable',
    'bookmarks.f1.desc':
        'Search across every folder, create, rename, delete and drag things around, import and export, and turn a single bookmark or an entire folder into a grouping rule.',
    'bookmarks.f2.title': 'It finds the bookmarks that no longer work',
    'bookmarks.f2.desc':
        'A scan visits each saved address and reports the ones that fail, sorted by what went wrong: 4xx, 5xx, timeout or a connection error. Filter to one kind and delete them together.',
    'bookmarks.f3.title': 'History, recently closed and downloads',
    'bookmarks.f3.desc':
        'History by day with a date filter, a recently closed list that brings back a whole window in one click, and downloads grouped by date and filtered by status: complete, in progress, interrupted.',

    // Dedicated Showcase 6: Snippets Expander
    'snippets.badge': 'Text that types itself',
    'snippets.title': 'Abbreviations that expand, with variables it asks you for',
    'snippets.subtitle':
        'Type a short trigger and the full text appears, formatted or plain, with variables filled in on the spot, in any text field on any site.',
    'snippets.f1.title': 'Variables written {{like this}}',
    'snippets.f1.desc':
        'Give one a default with {{name|there}} and it fills itself in unless you say otherwise. The editor checks the syntax while you write it, so a broken snippet never gets saved.',
    'snippets.f2.title': 'Formatted, or deliberately plain',
    'snippets.f2.desc':
        'A rich text editor for bold, lists and links; add # to the end of the trigger and the same snippet pastes with no formatting at all.',
    'snippets.f3.title': '$$ opens the ones you use most',
    'snippets.f3.desc':
        'In any text field, including Google Docs, Word Online and WhatsApp, where ordinary expanders give up.',
    'omnibar.m.footer': 'And the rest:',
    'omnibar.m.f1': 'notes',
    'omnibar.m.f2': 'screenshots',
    'omnibar.m.f3': 'rules',
    'omnibar.m.f4': 'backups',
    'reader.m.articleTitle': 'What the reader keeps, and what it throws away',
    'reader.m.articleMeta': 'Reader mode · the article and nothing else',
    'reader.m.bodyA':
        'The reader takes the article out of its layout: no menus, no banners, no floating boxes. The player then reads it, and the paragraph it is on is marked, along with the ',
    'reader.m.mark': 'word',
    'reader.m.bodyB': ' being spoken, at an opacity you set yourself.',
    'reader.m.tail':
        'Language, speed, pitch and volume are yours to set, and the two marks keep the colours of whichever theme the extension is wearing.',
    'bookmarks.m.title': 'Bookmarks',
    'bookmarks.m.search': 'astro',
    'bookmarks.m.folder1': 'Frontend',
    'bookmarks.m.folder2': 'Reading later',
    'bookmarks.m.folder3': 'Design references',
    'bookmarks.m.folder4': 'Toolbar',
    'bookmarks.m.i4': 'genkipool/workspace',
    'bookmarks.m.i1': 'Astro · Routing',
    'bookmarks.m.i2': 'Astro · Server islands',
    'bookmarks.m.i3b': 'View transitions · MDN',
    'snippets.m.triggerLabel': 'In any text field, type $$',
    'snippets.m.result': 'Reviewed and approved. Tested on {{branch}}.',
    'snippets.m.search': 'Search snippets…',
    'snippets.m.s2': 'Hi {{name}}, thanks for writing in about {{topic}}…',
    'snippets.m.s3': '{{date|today}}',
    'snippets.m.p1': 'plain text, no formatting',
    'snippets.m.p2': 'opens your five most used',
    'snippets.m.p3': 'default value',
    'snippets.m.p3code': '{{date|today}}',
    'fhub.keys.mockup.badge': 'Link hints and snippets',
    'fhub.keys.mockup.latency': 'Every key rebindable',
    'fhub.keys.mockup.hintsLabel': 'Press f, then type the label',
    'fhub.keys.mockup.linkDoc': 'Documentation',
    'fhub.keys.mockup.linkSettings': 'Pricing',
    'fhub.keys.mockup.linkDeploy': 'Sign in',
    'fhub.keys.mockup.snippetLabel': 'Snippet with variables',
    'fhub.keys.mockup.snippetTrigger': 'You type:',
    'fhub.keys.mockup.snippetResult': 'Reviewed and approved. Tested on {{branch}}.',
    'fhub.keys.mockup.snippetSearch': 'Search snippets…',
    'fhub.keys.mockup.pageTitle': 'Any page, once the labels are on',
    'fhub.keys.mockup.pageBodyA':
        'Press f and every link, button and field on the page wears one or two letters. Type them and it opens; hold Ctrl and it opens in a background tab. It works on ',
    'fhub.keys.mockup.pageLink': 'this one too',
    'fhub.keys.mockup.pageBodyB':
        ', and in any text field on it two dollar signs open the snippets you use most.',

    // Swiss Army Bento Grid & 18-Tool Arsenal (Expanded)
    'bento.badge': 'The full inventory',
    'bento.title': 'The whole toolbox, in one side panel, with no telemetry',
    'bento.subtitle':
        'Everything below ships in the extension today and runs on your own machine. Filter by what you came here for.',
    'bento.filter.all': 'Everything',
    'bento.filter.tabs': 'Tabs and workspaces',
    'bento.filter.productivity': 'Productivity',
    'bento.filter.tools': 'Quick utilities',

    // 1. AI Grouping
    'bento.aiGrouping.title': 'Automatic grouping and the rules engine',
    'bento.aiGrouping.desc':
        'Every new tab lands in a group decided by a rule: a rule is a list of URL fragments, and any address that contains one of them belongs to it. Everything without a rule is grouped by domain, subdomain, IP address or local file.',
    'bento.aiGrouping.tag': 'Tab engine',
    'bento.aiGrouping.badge': 'Rules, colours and timers',
    'bento.aiGrouping.h1': 'Rules by URL fragment, plus domain, subdomain, IP and files',
    'bento.aiGrouping.h2': 'A fixed colour and name per rule',
    'bento.aiGrouping.h3': 'Import, export and reorder your rules',

    // 2. Hibernation & RAM Saver
    'bento.hibernation.title': 'Idle tabs suspended, groups backed up',
    'bento.hibernation.desc':
        'Tabs untouched for an hour or more are discarded by Chrome itself: they keep their title and their place in the strip and reload on click. Whole groups can be backed up and restored later.',
    'bento.hibernation.tag': 'Memory',
    'bento.hibernation.badge': 'Discard and restore',
    'bento.hibernation.h1': 'Configurable idle threshold before discarding',
    'bento.hibernation.h2': 'Backup every group and restore them all with one key',
    'bento.hibernation.h3': 'Saved sessions you can reopen days later',

    // 3. Tab Tree & Subgroups
    'bento.tabTree.title': 'The group list, with a row per tab',
    'bento.tabTree.desc':
        'Every group in the window as a card you can fold, rename, recolour and reorder, with its tabs listed inside and grouped into subgroups by domain.',
    'bento.tabTree.tag': 'Side panel',
    'bento.tabTree.badge': 'Subgroups by domain',
    'bento.tabTree.h1': 'Fold, rename, recolour and hide a group',
    'bento.tabTree.h2': 'Per tab: mute, pin, QR, split screen, picture-in-picture',
    'bento.tabTree.h3': 'Drag to reorder tabs and groups; the active tab scrolls into view',

    // 4. Recently Closed Restore
    'bento.recentClosed.title': 'Recently closed, and saved sessions',
    'bento.recentClosed.desc':
        'Tabs and whole windows you closed, in the order you closed them, each one click away from coming back. The current session can be saved and reopened later.',
    'bento.recentClosed.tag': 'Recovery',
    'bento.recentClosed.badge': 'Tabs and windows',
    'bento.recentClosed.h1': 'An entire closed window restored in one click',
    'bento.recentClosed.h2': 'Reachable from the omnibar with c:',
    'bento.recentClosed.h3': 'Save the current session and reopen it another day',

    // 5. Bookmarks Manager & Auditor
    'bento.bookmarks.title': 'Bookmark tree, with a link check',
    'bento.bookmarks.desc':
        'Search every folder, create and rename them, drag things around and import or export the lot. Then a scan that visits each saved address and gathers up the ones that no longer answer.',
    'bento.bookmarks.tag': 'Bookmarks',
    'bento.bookmarks.badge': 'Search, edit, and a dead-link scan',
    'bento.bookmarks.h1': 'Search across the whole tree as you type',
    'bento.bookmarks.h2': 'Turn a bookmark or a folder into a grouping rule',
    'bento.bookmarks.h3': 'Dead links sorted by 4xx, 5xx, timeout or connection error',

    // 6. Downloads Manager
    'bento.downloads.title': 'Downloads, grouped by date',
    'bento.downloads.desc':
        'Your downloads in the side panel, grouped by day, filtered by status and searchable by filename or URL, with the system folder one button away.',
    'bento.downloads.tag': 'Side panel',
    'bento.downloads.badge': 'Filter by status and date',
    'bento.downloads.h1': 'Complete, in progress and interrupted, filtered apart',
    'bento.downloads.h2': 'Delete one, a whole day, or the entire history',
    'bento.downloads.h3': 'Find and download files from the page you are on',

    // 7. Smart History & Calendar
    'bento.history.title': 'History, by day and by date',
    'bento.history.desc':
        'Your history grouped into days, with a calendar filter to jump to one, a search that filters as you type, and deletion that works on a single entry or a whole day.',
    'bento.history.tag': 'History',
    'bento.history.badge': 'Calendar filter',
    'bento.history.h1': 'Pick a date from the calendar and jump to it',
    'bento.history.h2': 'Search by keyword across everything recorded',
    'bento.history.h3': 'Delete one entry or a whole day, with a confirmation',

    // 8. Quick Notes, Markdown & Kanban
    'bento.notes.title': 'Notes, checklists and Kanban boards',
    'bento.notes.desc':
        'Three kinds of note in the same panel: rich text, a checklist that counts what is done, and a To Do / In Progress / Done board. Voice notes and attached files live there too.',
    'bento.notes.tag': 'Notes',
    'bento.notes.badge': 'Text, checklist, Kanban',
    'bento.notes.h1': 'Checklists and boards that show their own progress',
    'bento.notes.h2': 'Voice notes, and PDFs or images viewed in the panel',
    'bento.notes.h3': 'Searchable from the omnibar with lnt:',

    // 9. Reader Mode & TTS
    'bento.readerTts.title': 'Reader mode and read-aloud',
    'bento.readerTts.desc':
        'The page stripped down to its article, and a floating player that reads it out loud while highlighting the paragraph and the word it is on.',
    'bento.readerTts.tag': 'Reading',
    'bento.readerTts.badge': 'Word-by-word highlight',
    'bento.readerTts.h1': 'Language, speed, pitch and volume, all adjustable',
    'bento.readerTts.h2': 'Highlight opacity you set yourself',
    'bento.readerTts.h3': 'Dark, sepia, grayscale or light, per tab or everywhere',

    // 10. Screenshot Studio & 30k Crawler
    'bento.screenshotStudio.title': 'Screenshots, a gallery, and OCR',
    'bento.screenshotStudio.desc':
        'Capture a selected area or scroll the whole page into one image, up to 30,000 pixels tall. Everything lands in a local gallery, and text inside a capture can be read out of it.',
    'bento.screenshotStudio.tag': 'Capture',
    'bento.screenshotStudio.badge': 'Full page and OCR',
    'bento.screenshotStudio.h1': 'Area capture with ca, full page with cs',
    'bento.screenshotStudio.h2': 'Text recognition that runs on your machine, not a server',
    'bento.screenshotStudio.h3': 'Save as PNG or PDF, or copy straight to the clipboard',

    // 11. Activity & Analytics Dashboard
    'bento.analytics.title': 'Web activity, limits and blocking',
    'bento.analytics.desc':
        'How long each site takes, by category, today in the panel and over time in a full page. Then a daily cap, a weekly cap and opening hours, and a site that is actually blocked when one runs out.',
    'bento.analytics.tag': 'Time',
    'bento.analytics.badge': 'Caps, hours and password',
    'bento.analytics.h1': 'Visits, time per visit, share of the day, per site',
    'bento.analytics.h2': 'Hour-by-hour grid, categories, streaks and timeline',
    'bento.analytics.h3': 'A password before a rule can be switched off',

    // 12. Overflow Menu & Mass Actions
    'bento.overflow.title': 'Mass actions on the whole window',
    'bento.overflow.desc':
        'The operations you want on forty tabs at once: mute everything, clear the duplicates, fold or unfold every group, close all but the one you are in, and drop the empty ones.',
    'bento.overflow.tag': 'Bulk actions',
    'bento.overflow.badge': 'Duplicate counter',
    'bento.overflow.h1': 'A live count of duplicate tabs, cleared in one click',
    'bento.overflow.h2': 'Mute or unmute every tab at once',
    'bento.overflow.h3': 'Fold all, close all but this group, delete empty groups',

    // 13. Split Screen
    'bento.splitScreen.title': 'Split screen, side by side',
    'bento.splitScreen.desc':
        'Put two open tabs side by side in the same window, to read one while writing in the other. Both keep navigating on their own.',
    'bento.splitScreen.tag': 'Multitasking',
    'bento.splitScreen.badge': 'Side by side',
    'bento.splitScreen.h1': 'ts on the page, or ts: in the omnibar',
    'bento.splitScreen.h2': 'Pick the tabs to pair from the omnibar list',
    'bento.splitScreen.h3': 'Back to a single window whenever you like',

    // 14. Picture-in-Picture Hub
    'bento.pipHub.title': 'Picture-in-picture, video or whole page',
    'bento.pipHub.desc':
        'A floating window that stays on top: a video from YouTube, Shorts, TikTok or any HTML5 player, or the page itself as a document picture-in-picture.',
    'bento.pipHub.tag': 'Floating windows',
    'bento.pipHub.badge': 'Floats on its own',
    'bento.pipHub.h1': 'Floats when you scroll past the video, or leave the tab',
    'bento.pipHub.h2': 'The whole page floating with wp, or as a popup with we',
    'bento.pipHub.h3': 'A loop button added inside YouTube and Shorts',

    // 15. In-Browser OCR & QR Studio
    'bento.ocrScanner.title': 'OCR and QR codes',
    'bento.ocrScanner.desc':
        'Read the text out of a screenshot without sending it anywhere, decode a QR code found in an image, and generate one for the tab you are on.',
    'bento.ocrScanner.tag': 'Local tools',
    'bento.ocrScanner.badge': 'Nothing leaves the device',
    'bento.ocrScanner.h1': 'Text recognition running in the browser itself',
    'bento.ocrScanner.h2': 'QR decoding, with the browser’s own detector when it has one',
    'bento.ocrScanner.h3': 'A QR of the current tab, to open it on your phone',

    // 16. Screen Color Picker & Magnifier
    'bento.colorPicker.title': 'Screen colour picker with a magnifier',
    'bento.colorPicker.desc':
        "A lens that magnifies thirteen by thirteen pixels under the cursor and copies the colour you click. It works on Linux, where Chrome's own eyedropper does not exist.",
    'bento.colorPicker.tag': 'Design',
    'bento.colorPicker.badge': '13 × 13 lens',
    'bento.colorPicker.h1': 'Magnified lens over the live page',
    'bento.colorPicker.h2': 'The colour goes straight to the clipboard',
    'bento.colorPicker.h3': 'Feeds the theme editor’s own palette',

    // 17. Cookie Cleaner & Editor
    'bento.cookieManager.title': 'Cookie editor',
    'bento.cookieManager.desc':
        'See the cookies a site has set, edit a value, change an expiry, or delete them, from the side panel and without opening developer tools.',
    'bento.cookieManager.tag': 'Developer',
    'bento.cookieManager.badge': 'Per domain',
    'bento.cookieManager.h1': 'Create, edit and delete a site’s cookies',
    'bento.cookieManager.h2': 'Clear a domain to test a signed-out state',
    'bento.cookieManager.h3': 'Reachable from the tab row it belongs to',

    // 18. Viridian Theme Studio
    'bento.themeStudio.title': 'Theme editor, with a schedule',
    'bento.themeStudio.desc':
        "Build a palette with a colour editor and it repaints the extension's own interface. Save as many as you like, reorder them, and have one switch itself on at a set time.",
    'bento.themeStudio.tag': 'Appearance',
    'bento.themeStudio.badge': 'Scheduled themes',
    'bento.themeStudio.h1': 'Themes that turn on at an hour or on given days',
    'bento.themeStudio.h2': 'Import, export, and sync across your browsers',
    'bento.themeStudio.h3': 'Group colours taken from each site’s favicon',

    // 19. QR Code Studio & Scanner
    'bento.qrTools.title': 'QR Code Scanner & Generator',
    'bento.qrTools.desc':
        'Generate clean QR codes for any active tab, link or text in 1 click, and scan codes directly from your screen.',
    'bento.qrTools.tag': 'Quick Tool',
    'bento.qrTools.badge': 'Native',
    'bento.qrTools.h1': 'Instant QR generation for tabs and URLs',
    'bento.qrTools.h2': 'Direct on-screen scanner without camera',
    'bento.qrTools.h3': 'Export in high-resolution PNG or vector SVG',

    // 20. Online Radio

    // 21. Music Player

    // Legacy compatibility keys for footer
    'bento.c1.title': 'Dual-Tab Split Screen',
    'bento.c2.title': 'Video Picture-in-Picture',
    'bento.c3.title': 'Screenshot OCR Engine',
    'bento.c4.title': 'Screen Eyedropper & Magnifier',
    'bento.c6.title': 'Viridian Theme Studio',

    // Comparison Matrix
    'comp.badge': 'Comparison',
    'comp.title': 'One unified workspace where there used to be friction',
    'comp.subtitle':
        'Every workflow below is unified into a single productivity side panel. One cohesive interface, unified shortcuts, local on-device privacy, and zero telemetry.',
    'comp.colFeature': 'Capability',
    'comp.colStandard': 'Fragmented tools',
    'comp.colIw': 'Intelligent Workspace',
    'comp.r1.feature': 'Tabs, groups and sessions',
    'comp.r1.standard':
        'Separate tools for grouping, sessions, and sidebar views: conflicting interfaces, fragmented shortcuts, and inconsistent workflows.',
    'comp.r1.iw':
        'Rules by URL fragment; grouping by domain, subdomain and IP; auto-collapse timers; group backup and restore; recently closed and saved sessions.',
    'comp.r2.feature': 'Memory and idle tabs',
    'comp.r2.standard':
        'A suspender that replaces your tab with its own placeholder page, and loses the tab if it is ever uninstalled.',
    'comp.r2.iw':
        'Chrome’s own tab discarding after an hour idle: the tab keeps its title and its place, and wakes up on click.',
    'comp.r3.feature': 'AI in the sidebar',
    'comp.r3.standard':
        'A chat panel that can read the page and nothing else: it cannot close a tab, make a group or write a rule.',
    'comp.r3.iw':
        'Fifty-eight tools onto the browser, plus summaries, saved conversations, scheduled questions, and Chrome’s on-device model when the quota runs out.',
    'comp.r4.feature': 'Search and keyboard control',
    'comp.r4.standard':
        'Disconnected command palettes and link hint tools, with shortcut conflicts and separate configuration menus.',
    'comp.r4.iw':
        'One floating omnibar with a prefix per source, letter labels on every link, and every binding editable in one place.',
    'comp.r5.feature': 'Notes, bookmarks, history, downloads',
    'comp.r5.standard':
        'A notes app with an account, a bookmark manager with a subscription, and Chrome’s own pages for the rest.',
    'comp.r5.iw':
        'Notes, checklists and Kanban boards, the bookmark tree, history, recently closed, the reading list and downloads, all in the same panel, all local.',
    'comp.r6.feature': 'Screen time and blocking',
    'comp.r6.standard':
        'A tracker that uploads your browsing to somebody’s server, and a blocker that a new tab gets around.',
    'comp.r6.iw':
        'Time per site and category on this device only, daily and weekly caps, opening hours, and a block screen that can ask for a password.',
    'comp.r7.feature': 'Screenshots, OCR, QR, cookies, colour',
    'comp.r7.standard':
        'Multiple standalone utilities, each with separate configurations, cluttered toolbars, and inconsistent UIs.',
    'comp.r7.iw':
        'Full-page and area capture with a local gallery, on-device OCR, QR reader and generator, a cookie editor, and a screen colour picker.',
    'comp.deck.badTitle': 'Fragmented workflows',
    'comp.deck.badDesc':
        'Multiple disconnected tools with conflicting shortcuts and cluttered interfaces, often sending your browsing data to external servers.',
    'comp.deck.goodTitle': 'One unified workstation',
    'comp.deck.goodDesc':
        'One Manifest V3 extension, one side panel, one place where every shortcut is defined, and storage that never leaves this device.',
    'comp.eyebrow': 'Side by side',

    // Legacy & Shared Feature Keys

    // Keyboard Section
    'kb.title': 'Put the mouse down.',
    'kb.desc':
        'Three ways in, and none of them needs the mouse: a search box that floats over the page, letter labels drawn on the links themselves, and the browser-level shortcuts. Every key here can be reassigned.',
    'kb.zoneA.badge': 'Floating omnibar',
    'kb.zoneA.title': 'Press o, or type find in the address bar',
    'kb.zoneA.desc':
        'One box, and a prefix per source. Type @ if you cannot remember one and it lists them all.',
    'kb.zoneB.badge': 'On the page',
    'kb.zoneB.title': 'Letter labels and page keys',
    'kb.zoneB.desc':
        'One or two letters, typed on the page itself. With hints on, every link and field wears one.',
    'kb.zoneC.badge': 'Browser level',
    'kb.zoneC.title': 'Chrome shortcuts and panel keys',
    'kb.zoneC.desc':
        'The four Chrome-level combinations, and the page keys that open one side panel view or another.',

    // Action Keys (Omnibar & Zone B)
    'shortcut.global.fold': 'Fold or unfold the current group',
    'shortcut.global.dedup': 'Fold or unfold every group',
    'shortcut.global.sort': 'Sort the tabs alphabetically',
    'shortcut.global.panel': 'Open the main panel',
    'shortcut.global.omnibar': 'Side panel with the group list',
    'shortcut.global.activity': 'Side panel with web activity',
    'shortcut.global.dark': 'Dark mode on this tab',
    'shortcut.global.mute': 'Mute or unmute every tab',

    'shortcut.omnibar.search': 'Open the omnibar over the page',
    'shortcut.omnibar.tab': 'List every prefix there is',
    'shortcut.omnibar.mute': 'Search your bookmarks',
    'shortcut.omnibar.clean': 'Search your history',
    'shortcut.omnibar.book': 'Search recently closed tabs',
    'shortcut.omnibar.note': 'Find text inside the current page',
    'shortcut.omnibar.split': 'Split screen with the tabs you pick',
    'shortcut.omnibar.agent': 'Hand the job to the AI agent',

    'shortcut.hint.open': 'Label every link; Ctrl opens in the background, Shift in a new window',
    'shortcut.hint.newtab': 'Label every link and copy its URL instead',
    'shortcut.hint.yank': 'Focus the first text field on the page',
    'shortcut.hint.scroll': 'Scroll down / scroll up',
    'shortcut.hint.split': 'Open this tab in split screen',
    'shortcut.hint.pip': 'Send the video to a floating window',
    'shortcut.hint.aloud': 'Read the page out loud',
    'shortcut.hint.close': 'Close the current tab',

    // Category Sub-badges
    'shortcut.cat.tabs': 'Tabs',
    'shortcut.cat.organise': 'Lists',
    'shortcut.cat.panel': 'Side panel',
    'shortcut.cat.omnibar': 'Omnibar',
    'shortcut.cat.hints': 'Link labels',
    'shortcut.cat.clipboard': 'Clipboard',
    'shortcut.cat.navigation': 'On the page',
    'shortcut.cat.split': 'Split screen',
    'shortcut.cat.media': 'Media',
    'shortcut.cat.agent': 'AI agent',
    'shortcut.cat.reader': 'Reading',
    'shortcut.cat.display': 'Display mode',

    // Privacy & Permissions
    'trust.heading': 'Complete Permission Transparency & Control',
    'trust.lede':
        'Chrome will tell you this extension asks for {count} permissions. That is a fair thing to be suspicious about, so here is what each group of them is for. Nothing is uploaded, because there is nowhere to upload it to.',
    'trust.colPermissions': 'Manifest V3 Permissions',
    'trust.colPurpose': 'Purpose & Justification',
    'trust.tabs':
        'Reading, grouping, folding, suspending and restoring your tabs, and putting two of them side by side.',
    'trust.lists':
        'The bookmark tree, history, reading list and downloads in the side panel, and the button that opens the downloads folder.',
    'trust.pages':
        'The letter labels, reader mode, snippet expansion and picture-in-picture on web pages, and the blocking a web activity limit does.',
    'trust.state':
        'Keeping your settings, running the Pomodoro timer and the scheduled AI queries, noticing when you step away so the clock stops, and playing the chime.',
    'trust.cookies': 'The cookie editor, and nothing else.',
    'trust.entry':
        'The side panel itself, the right-click menu, and the keyboard commands you can rebind in Chrome.',
    'trust.tell':
        'The Pomodoro and time-limit notices, and copying a URL, a screenshot or a colour to the clipboard.',
    'trust.chrome':
        'The site icons in every list, and the screen size, which split screen and the floating windows need to place themselves.',
    'trust.hosts':
        'A host permission rather than an API one, and the reason those page features can run on any site instead of a list Chrome would have to approve.',
    'trust.source': 'The source code is public. Every single line can be inspected and audited.',
    'trust.sourceCta': 'Audit on GitHub',
    'trust.policyCta': 'Read the privacy policy',

    'trust.card1.title': 'It stays on this machine',
    'trust.card1.desc':
        'Groups, rules, notes, screenshots, time records and Pomodoro history live in your browser’s own storage. There is no server to send them to.',
    'trust.card2.title': 'Your AI key, your traffic',
    'trust.card2.desc':
        'The Google AI Studio key you paste is kept in local storage and used to talk to Google directly. Chrome’s on-device model needs no key and no connection at all.',
    'trust.card3.title': 'No analytics, no ads',
    'trust.card3.desc':
        'No tracking pixel, no fingerprinting, no telemetry endpoint, and nothing that has to be turned off in settings.',

    // Privacy Policy: the standalone /privacy page
    'privacy.meta.title': 'Privacy Policy | Intelligent Workspace',
    'privacy.meta.description':
        'What Intelligent Workspace stores, where it stores it, and the few moments anything leaves your browser. No account, no server of ours, no analytics.',
    'privacy.eyebrow': 'Legal',
    'privacy.title': 'Privacy Policy',
    'privacy.effective': 'In effect since',
    'privacy.lede':
        'There is no account to create, no server of ours to talk to, and nothing in the extension that reports back. That leaves this document short on promises and long on specifics: what is stored, where it sits, and every moment something crosses the network.',
    'privacy.toc': 'On this page',

    'privacy.sum1.title': 'No account, no server',
    'privacy.sum1.desc':
        'Nothing you do in the extension is sent to us. There is no “us” at the other end: no backend, no database, no log with your name on it.',
    'privacy.sum2.title': 'Your key, your traffic',
    'privacy.sum2.desc':
        'The assistant talks to Google with the key you pasted, from your browser, under your quota. There is no proxy of ours in the middle to read it.',
    'privacy.sum3.title': 'Nothing is sold, ever',
    'privacy.sum3.desc':
        'No advertising, no data brokers, no telemetry endpoint, and no profile of you for anyone to buy.',

    // The first layer the AEPD asks for: the six answers a reader is entitled to
    // before deciding whether to read the rest.
    'privacy.basic.heading': 'Basic information on data protection',
    'privacy.basic.controller': 'Controller',
    'privacy.basic.controllerV': 'Luis Reoyo (GENKI Organización), Spain.',
    'privacy.basic.purpose': 'Purpose',
    'privacy.basic.purposeV':
        'To run the features of the extension on your own device, and to serve this website.',
    'privacy.basic.basis': 'Legal basis',
    'privacy.basic.basisV':
        'Your consent, given by installing the extension and by switching on each optional feature, and our legitimate interest in serving and securing the website.',
    'privacy.basic.recipients': 'Recipients',
    'privacy.basic.recipientsV':
        'None by default. A feature you trigger yourself can reach Google, the radio directory, YouTube, jsDelivr, Stripe or Vercel, each listed in section 5.',
    'privacy.basic.transfers': 'Transfers',
    'privacy.basic.transfersV':
        'Those providers are outside the EEA. The request is made by your browser and only when you ask for it. Section 6 explains the safeguards.',
    'privacy.basic.rights': 'Your rights',
    'privacy.basic.rightsV':
        'Access, rectification, erasure, restriction, portability, objection, and the withdrawal of consent. Most of them you exercise yourself, from the panel. Section 14.',

    'privacy.scope.title': 'Two different things, one policy',
    'privacy.scope.p1':
        'This covers the Chrome extension and the website you are reading. They are separate pieces of software with separate privacy stories, and blurring the two is how a policy ends up meaning nothing. Wherever a rule applies to one and not the other, it says so.',
    'privacy.scope.p2':
        'Both are published by Luis Reoyo (GENKI Organización), who is also the data controller for the little the website handles. No data protection officer is appointed, because the scale of this processing does not require one under article 37 of the GDPR. Anything in this document can be checked against the source code, which is public.',

    'privacy.basis.title': 'Why each thing is processed, and under which legal basis',
    'privacy.basis.p1':
        'The GDPR asks for a lawful basis per purpose rather than one for the whole product, so here they are, one line each.',
    'privacy.basis.li1':
        'Running the features on your device: your consent, given when you install the extension and again when you switch on an optional feature such as the activity record or the assistant. Article 6.1.a.',
    'privacy.basis.li2':
        'Sending a prompt to Google, searching the radio directory or loading a YouTube thumbnail: your consent, given by the action itself. Nothing is sent until you ask for it.',
    'privacy.basis.li3':
        'Serving this website and keeping it up: our legitimate interest in delivering the pages you requested and in aggregate measurement that carries no identifier. Article 6.1.f.',
    'privacy.basis.li4':
        'Processing a software support contribution: performance of the transaction you started, and the accounting duties that follow it. Articles 6.1.b and 6.1.c.',
    'privacy.basis.p2':
        'Where the basis is consent you can withdraw it at any time, and withdrawing it is a switch in the settings rather than a request to us. Withdrawal does not undo processing that already happened, which in this case means data already written to your own device and which you can delete yourself.',

    'privacy.store.title': 'What the extension keeps, and where',
    'privacy.store.p1':
        'Everything the extension knows lives in your own browser profile, in the two places Chrome gives an extension: its storage areas and an IndexedDB database. Neither is reachable from the internet, and no part of the extension copies them anywhere.',
    'privacy.store.colWhat': 'What',
    'privacy.store.colWhere': 'Where it lives',
    'privacy.store.colLeaves': 'Does it leave this machine?',
    'privacy.store.note':
        'Removing the extension from chrome://extensions deletes all of it, databases included. Chrome does that itself, and nothing is left behind anywhere else, because there is nowhere else.',

    'privacy.store.r1.what': 'Groups, rules, colours and grouping preferences',
    'privacy.store.r1.leaves': 'Only through Chrome’s own profile sync, if you have it switched on',
    'privacy.store.r2.what': 'Notes, checklists and Kanban boards',
    'privacy.store.r2.leaves': 'No',
    'privacy.store.r3.what': 'Screenshots, and the text OCR reads out of them',
    'privacy.store.r3.leaves': 'No',
    'privacy.store.r4.what': 'Conversations with the AI assistant',
    'privacy.store.r4.leaves': 'No. The replies arrive from Google; the transcript stays here',
    'privacy.store.r5.what': 'Saved sessions and group backups',
    'privacy.store.r5.leaves': 'Only inside a file you export yourself, to the folder you choose',
    'privacy.store.r6.what': 'Pomodoro sessions and their history',
    'privacy.store.r6.leaves': 'No',
    'privacy.store.r7.what': 'Music you add and your radio favourites',
    'privacy.store.r7.leaves': 'No',
    'privacy.store.r8.what': 'Web activity: seconds, visits and sessions per site, per day',
    'privacy.store.r8.leaves': 'No, unless you switch on that record’s own sync, which is off by default',
    'privacy.store.r9.what': 'Snippets, keyboard overrides and omnibar preferences',
    'privacy.store.r9.leaves': 'Only through Chrome’s own profile sync, if you have it switched on',
    'privacy.store.r10.what': 'Your Google AI Studio key',
    'privacy.store.r10.leaves': 'Never synced. It travels only as the header of your own request to Google',

    'privacy.sync.title': 'Chrome’s own sync, and what rides along',
    'privacy.sync.p1':
        'Some settings, namely rules, snippets and keyboard overrides, are written to the browser’s synced storage area so a second computer signed into the same Chrome profile behaves the same way. That area belongs to Chrome, not to us: with Chrome sync on, Google carries it under your account; with it off, it stays on this machine and behaves exactly like local storage.',
    'privacy.sync.p2':
        'The web activity record is deliberately kept out of it. Syncing it is a switch of its own, off until you turn it on, because where somebody has been is not something to start shipping anywhere without being asked. Your API key is never synced at all.',

    'privacy.net.title': 'When something does leave your browser',
    'privacy.net.p1':
        'The features below reach the network because they cannot work otherwise, and each is listed with what it sends and when. None of them is on a schedule and none runs in the background waiting to phone home.',
    'privacy.net.colWhere': 'Where to',
    'privacy.net.colWhat': 'What is sent',
    'privacy.net.colWhen': 'When',
    'privacy.net.p2':
        'And, of course, the websites you open yourself. The extension arranges the tabs around a page; it does not sit between you and what is in it.',

    'privacy.net.r1.what':
        'Your prompt, whatever page text or screenshot you attached to it, and your own API key. Asking it to find an open tab also sends the titles and addresses of the tabs you have open, because that is the list it searches',
    'privacy.net.r1.when':
        'Only when you ask the assistant for something, from the panel or by typing `find` and a space in Chrome’s address bar',
    'privacy.net.r2.host': 'Chrome’s built-in on-device model',
    'privacy.net.r2.what': 'Nothing. It runs inside Chrome, on this machine, and makes no request at all',
    'privacy.net.r2.when': 'When you choose it instead of Gemini',
    'privacy.net.r5.what': 'The video id, for the thumbnail and the embedded player',
    'privacy.net.r5.when': 'Only for a YouTube link you preview or play',
    'privacy.net.r7.what': 'Nothing about you. It fetches the OCR language model, which Chrome then caches',
    'privacy.net.r7.when': 'The first time you run OCR on a screenshot',

    'privacy.transfers.title': 'Transfers outside the European Economic Area',
    'privacy.transfers.p1':
        'Every provider in that table is a company established in the United States: Google, Vercel, Stripe, the jsDelivr network, and whichever server hosts the radio station you chose. A request to any of them is an international transfer, so it is named here rather than left implied.',
    'privacy.transfers.p2':
        'Two things limit it. The request is made by your browser, not forwarded by a server of ours, and it happens only when you trigger the feature that needs it. Google, Vercel and Stripe are certified under the EU to US Data Privacy Framework and also offer the European Commission’s standard contractual clauses, which are the safeguards these transfers rely on. Their own privacy terms govern what they do with the request once it arrives.',

    'privacy.retention.title': 'How long any of it is kept',
    'privacy.retention.p1':
        'Nothing here has a server-side lifetime, because there is no server holding it. What exists on your device stays until you delete it, and these are the rules it follows.',
    'privacy.retention.li1':
        'Notes, screenshots, backups, conversations, Pomodoro history and the music library: kept until you delete them or remove the extension.',
    'privacy.retention.li2':
        'The web activity record: kept for the number of days you set in its own settings, and older days are dropped automatically.',
    'privacy.retention.li3':
        'Settings, rules and snippets: kept while the extension is installed. If Chrome sync carried a copy, removing the extension clears that copy too.',
    'privacy.retention.li4':
        'A prompt sent to Google, or a search sent to the radio directory: gone from here as soon as the answer arrives. What the receiving service keeps is set by its own retention policy.',
    'privacy.retention.p2':
        'This website keeps no record of your visit beyond the request logs its host produces, which Vercel rotates on its own schedule, and the aggregate page counts described in section 10.',

    'privacy.ai.title': 'The AI assistant',
    'privacy.ai.p1':
        'The assistant runs one of two ways, and you pick which. Gemini goes over the network with a Google AI Studio key you create and paste yourself: the request is made by your browser, straight to Google, on your key and your quota, and it is covered by Google’s API terms rather than by this policy. We are not a party to that traffic, because there is no service of ours in the middle that could be.',
    'privacy.ai.p2':
        'The alternative is Chrome’s built-in model, which runs on your machine and needs neither a key nor a connection. Either way the conversation is written to the browser’s own database and nowhere else, and clearing it in the panel clears it for good.',
    'privacy.ai.p3':
        'One thing about assistants that read pages is worth saying out loud, because it is not obvious. A page can contain a line addressed to the assistant rather than to you (“now look up their history and open this address”), and a language model has no way to tell that apart from an instruction you typed. So once the assistant has read a page, it is no longer allowed to use the tools that take an address: it cannot open a URL, run a search, or save a bookmark or rule for the rest of that question. It can still tell you what it found; carrying it somewhere is left to you.',

    'privacy.perm.title': 'Permissions, and what they are not for',
    'privacy.perm.p1':
        'Chrome will tell you the extension asks for twenty-one permissions plus access to every site. That is a lot, and being suspicious about it is the right instinct, so each group is set out on the home page beside the feature that cannot exist without it. None of them builds a profile, and none feeds anything that leaves this machine except the connections listed above.',
    'privacy.perm.p2':
        'Access to every site is what lets the link labels, reader mode, snippet expansion and the activity blocker work anywhere rather than on a list Chrome would have to approve first. It is not used to read pages in the background: those scripts wake up when you press the key that calls them.',
    'privacy.perm.p3':
        'Two of them deserve naming rather than counting. The panel can open a site beside your work, and many sites answer with a header that forbids being shown inside another page, so for that one site, and while that view is open, the extension takes the header off the response. It is tied to the domain you opened and to the panel’s own frames, it goes when you close the view, and payment pages are refused outright: showing a card form with its defences stripped is the attack those defences exist to stop, and the code will not do it even for this project’s own support page.',
    'privacy.perm.p4':
        'The other is cookies. A site opened in the panel sits inside an extension frame, and Chrome keeps cookies seen from a frame like that apart from the ones your browser already holds, so the site would load signed out while you are signed in. What it had already set is copied into the extension’s own area so the framed page sees the session you have. The same permission is what lets the cookie inspector show you what a site has stored on you, and delete it. Neither reads a cookie for anything else, and no cookie is sent anywhere.',
    'privacy.perm.cta': 'See the permission table',

    'privacy.site.title': 'This website',
    'privacy.site.p1':
        'The site is a handful of static files on Vercel. It has no login and asks for nothing. Your browser’s request reaches Vercel’s servers, which see what any web server sees: an IP address, a user agent, the page asked for. That is hosting, not tracking.',
    'privacy.site.p2':
        'Two Vercel measurement scripts do run here: Analytics, which counts page views without cookies and without a cross-site identifier, and Speed Insights, which reports how quickly the page rendered. Both only ever aggregate, neither follows you to another site, and the extension itself carries neither.',
    'privacy.site.p3':
        'The support payment page is the one exception to “no third-party frames”: it loads Stripe, and only Stripe.',

    'privacy.cookies.title': 'Cookies and local storage',
    'privacy.cookies.p1':
        'This website sets no cookies. Not an analytics cookie, not a session cookie, not a consent cookie, which is why you were never shown a banner asking you to accept one.',
    'privacy.cookies.p2':
        'It stores at most two things in your browser, and only after you act: pressing the light and dark toggle writes your choice under the key iw-theme in local storage, so the next page you open does not flash the wrong colours; picking a language from the language menu writes it under iw-lang, so the site opens in that language next time. Until you pick one, the site reads the languages your browser already announces and opens in the first one it is written in, without storing anything. Both are preferences you asked for, stored on your own device, readable by nobody else, and article 22.2 of the Spanish LSSI exempts exactly this kind of storage from prior consent. Clearing your browser data removes them and the site goes back to following your system settings.',

    'privacy.pay.title': 'Support and Payments',
    'privacy.pay.p1':
        'Payments to support development go through Stripe. Card, Google Pay, Apple Pay and PayPal are four ways of paying it, not four processors: Stripe presents each of them, and choosing a wallet hands the payment to that wallet’s own sheet under whatever terms you already have with it. The card form is Stripe’s own, running inside Stripe’s frame, so the card number is typed into their field and never touches this site, the one server function behind it, or the extension. That function does exactly one thing: ask Stripe to create a payment between 1 and 500 euros and hand the browser back a token good for that single payment.',
    'privacy.pay.p2':
        'What Stripe collects, and what it does with it, is governed by Stripe’s privacy policy rather than this one. We keep no record of who contributed, because there is no database here to keep one in. A payment is voluntary, unlocks nothing, and is not a subscription.',
    'privacy.pay.p3':
        'The extension’s About page also shows a few cryptocurrency addresses, for anyone who would rather send something that way. They are static text with a button that copies one to your clipboard. No wallet is connected or read, no transaction is built or seen, nothing is mined, and no network request is made: the addresses are as inert as an account number printed on a page, and nothing here learns that you copied one.',

    'privacy.limited.title': 'Chrome Web Store Limited Use',
    'privacy.limited.p1':
        'Intelligent Workspace’s use of information received from Google APIs follows the Chrome Web Store User Data Policy, including its Limited Use requirements. Concretely: the data is used only to provide the features described here and on the home page; it is never sold; it is never transferred to anyone except where a feature you triggered requires it; it is never used for advertising, profiling or creditworthiness; and no human reads it, because it never arrives anywhere a human could.',

    'privacy.rights.title': 'Your data, and getting rid of it',
    'privacy.rights.p1':
        'You hold all of it, which answers most of the usual rights on its own. There is no export request to file, because the extension writes its own data to a file whenever you ask. There is no deletion request either, because the delete button is already in the panel.',
    'privacy.rights.li1':
        'Delete one thing, a note, a screenshot, a backup or a day of activity, where it is shown.',
    'privacy.rights.li2':
        'Wipe a whole area from the extension’s settings, the activity record and the assistant’s conversations included.',
    'privacy.rights.li3':
        'Remove the extension at chrome://extensions and Chrome drops every byte of its storage with it.',
    'privacy.rights.li4':
        'Turn off Chrome’s profile sync, or the activity record’s own sync switch, if you would rather nothing rode along.',
    'privacy.rights.li5':
        'Withdraw your consent to any optional feature by switching it off, which stops the processing from that moment on.',
    'privacy.rights.li6':
        'Revoke your Google AI Studio key in Google’s console. It is your key on your account, and revoking it ends the extension’s access immediately.',
    'privacy.rights.p2':
        'If you are in the EU or the UK, the rights of access, rectification, erasure, restriction, portability and objection apply, along with the right to withdraw consent. In practice there is nothing here to act on, but write to the address below and you will get a straight answer about what exists, which is what those rights are for. You will have one within a month.',
    'privacy.rights.p3':
        'You can also complain to a supervisory authority. In Spain that is the Agencia Española de Protección de Datos, at www.aepd.es.',

    'privacy.legal.title': 'Responsibility, minors and the law',
    'privacy.legal.p1':
        'The controller is Luis Reoyo (GENKI Organización), Spain. Spanish and EU data protection law applies: Regulation (EU) 2016/679, Organic Law 3/2018, and Law 34/2002 for the website itself.',
    'privacy.legal.p2':
        'Nothing here is a statutory or contractual requirement. You are not obliged to provide any data, and the only consequence of providing none is that the feature you did not use does not run. There is no automated decision making and no profiling of any kind, under article 22 of the GDPR or otherwise.',
    'privacy.legal.p3':
        'The extension is a general productivity tool, not directed at children, and it collects nothing that would identify one, or anyone else. There is no age gate because there is no account to put one in front of.',

    'privacy.changes.title': 'Changes to this policy',
    'privacy.changes.p1':
        'When this policy changes the new version replaces this page and the date at the top moves with it. Any change that alters what leaves your browser will also be named in the release notes of the version that makes it, and announced in the extension itself, so it cannot arrive quietly.',

    'privacy.contact.title': 'Contact',
    'privacy.contact.p1':
        'Questions about any of this, including the ones that begin “I do not believe you”, go to the address below. The source code is public, so a claim on this page that the code does not back up is a bug report worth filing.',
    'privacy.contact.email': 'Write to us',
    'privacy.contact.source': 'Read the source',
    // Terms of service
    'terms.meta.title': 'Terms of Service | Intelligent Workspace',
    'terms.meta.description':
        'The terms for using Intelligent Workspace: a free extension, a licence that costs nothing, and tips that are voluntary and buy no feature.',
    'terms.eyebrow': 'Legal',
    'terms.title': 'Terms of Service',
    'terms.effective': 'In effect since',
    'terms.lede':
        'This document says what you are agreeing to when you install Intelligent Workspace, and, because it is the question that actually matters here, what a tip is and is not. The extension is free, complete and identical for everyone. Money is never the difference between two copies of it.',
    'terms.toc': 'On this page',

    'terms.sum1.title': 'Free, and complete',
    'terms.sum1.desc':
        'Every feature ships to everyone. There is no paid tier, no trial that expires, no account and no advertising, and nothing below creates one.',
    'terms.sum2.title': 'A tip buys nothing',
    'terms.sum2.desc':
        'Leaving a tip is voluntary, the amount is yours to choose, and it unlocks nothing at all. It is a thank-you, not a purchase.',
    'terms.sum3.title': 'Your consumer rights stand',
    'terms.sum3.desc':
        'Nothing here takes away a right Spanish or EU law gives you, including suing where you live. Where a clause and the law disagree, the law wins.',

    'terms.id.heading': 'Who provides this service',
    'terms.id.holder': 'Holder',
    'terms.id.contact': 'Contact',
    'terms.id.activity': 'Activity',
    'terms.id.activityV':
        'Development and free distribution of the Intelligent Workspace browser extension, and the operation of this website.',
    'terms.id.law': 'Governed by',
    'terms.id.lawV':
        'Spanish law, in particular Act 34/2002 on information society services (LSSI-CE) and Royal Legislative Decree 1/2007, the consolidated Consumer Protection Act.',

    'terms.scope.title': 'Purpose and acceptance',
    'terms.scope.p1':
        'These terms govern the use of the Intelligent Workspace browser extension, of this website, and of the page it serves for leaving a tip. "The holder" is the person identified above; "you" is whoever installs the extension or visits the site.',
    'terms.scope.p2':
        'Installing the extension, or using this site, means you accept these terms. If you do not accept them, do not install it. And if you already have, uninstalling it is the way to end the agreement, at any moment and with no formality.',
    'terms.scope.p3':
        'The extension itself asks nothing of you and can be used by anyone. Leaving a tip is different: it is a payment, so you must be of legal age and have capacity to make it, and you must use a payment method that belongs to you.',

    'terms.service.title': 'What Intelligent Workspace is',
    'terms.service.p1':
        'It is an extension for Chrome and Chromium-based browsers, distributed through the Chrome Web Store, that turns the browser into a workspace: tab groups and rules, a side panel with notes, bookmarks, history, screenshots, a timer and a music player, keyboard navigation, and an optional assistant.',
    'terms.service.li1':
        'It works without an account, without registration and without a server of ours holding your data.',
    'terms.service.li2':
        'It runs in your browser, on your machine. A handful of features reach out to a third-party service, and only when you use that feature.',
    'terms.service.li3':
        'It is installed and updated through the Chrome Web Store, whose own terms govern that distribution and which we do not control.',
    'terms.service.p2':
        'It is software running on your computer rather than a service we host on your behalf, so there is nothing here for us to switch off remotely. What that also means is that the copy you have keeps working on its own terms; see the sections on updates and on termination.',

    'terms.licence.title': 'Licence and intellectual property',
    'terms.licence.p1':
        'You are granted a free, personal, non-exclusive, non-transferable and revocable licence to install and use the extension as it is published, for as long as you comply with these terms. No fee is charged for it, and no tip is required to obtain or keep it.',
    'terms.licence.p2':
        'The extension, its source code, its design, its name and its logo belong to the holder. The code is published on GitHub so that anyone can audit what it does. That is not the same as open source, and no permission beyond reading, auditing and proposing changes is given by publishing it.',
    'terms.licence.li1':
        'Republishing or distributing it, in whole or in part, on the Chrome Web Store or any other distribution channel.',
    'terms.licence.li2':
        'Building or distributing derivative works, forks or repackaged versions intended for use outside this project.',
    'terms.licence.li3': 'Any commercial exploitation, including selling, sublicensing or bundling it.',
    'terms.licence.li4': 'Removing or altering copyright notices, licence text, authorship or brand marks.',
    'terms.licence.p3':
        'The LICENSE file in the repository is the full text and prevails over this summary on anything to do with the code. Nothing here limits the rights that copyright law grants you regardless, in particular the study and interoperability rights in article 100 of the Spanish Copyright Act.',

    'terms.use.title': 'How you may use it',
    'terms.use.p1':
        'You use the extension under your own responsibility and on pages you are entitled to visit. In particular, you agree not to use it for the following.',
    'terms.use.li1': 'Breaking the law, or breaking the terms of the websites you browse with it.',
    'terms.use.li2':
        'Reaching content, accounts or systems you have no right to reach, or getting round a technical restriction placed by a third party.',
    'terms.use.li3':
        'Interfering with the extension, altering its behaviour to impersonate the original, or presenting a modified build as this one.',
    'terms.use.li4':
        'Automating abusive traffic against third-party services through the extension, including the assistant.',
    'terms.use.li5': 'Anything that damages the holder, other users, or the reputation of the project.',
    'terms.use.p2':
        'Your data is yours and stays on your machine, which also makes it your responsibility: keep your own copies of anything that matters, using the export the extension provides. A serious breach of this section ends the licence in section 3, though as a practical matter the only thing that ends is your right to keep using the copy you have.',

    'terms.updates.title': 'Updates, changes and availability',
    'terms.updates.p1':
        'Chrome updates extensions on its own. A new version may add features, change how one behaves, or remove one that can no longer be maintained. The changelog on this site and in the repository records what changed and when.',
    'terms.updates.p2':
        'Several features depend on interfaces we do not own: the browser’s own APIs, and the third-party services listed in section 9. A change on their side can break a feature without warning, and repairing it is not always in our hands.',
    'terms.updates.p3':
        'There is no commitment to publish new versions indefinitely. If development stops, the version you have installed keeps working for as long as your browser supports it, and everything it stored stays where it always was: on your machine.',

    'terms.tips.title': 'Voluntary support (tips)',
    'terms.tips.p1':
        'The extension is free and stays free. If you use it, find it useful and feel like supporting the work behind it, this site has a page where you can leave a tip of an amount you choose. It is a tip from someone who uses the extension, not payment for anything. It is worth being exact about what it is, because everything else in this section follows from it.',
    'terms.tips.colIs': 'What a tip is',
    'terms.tips.colIsNot': 'What it is not',
    'terms.tips.r1.is': 'A voluntary, one-off tip, for an amount you decide yourself.',
    'terms.tips.r1.isNot': 'A price, a fee, a subscription or a recurring charge.',
    'terms.tips.r2.is': 'A thank-you for work that is already published and already free.',
    'terms.tips.r2.isNot': 'Payment for a feature, a licence, a key or a future version.',
    'terms.tips.r3.is': 'Help towards hosting, tooling and the hours the project takes.',
    'terms.tips.r3.isNot': 'A contract for services, support, maintenance or development.',
    'terms.tips.r4.is': 'Independent of the software, which is the same whether you give or not.',
    'terms.tips.r4.isNot':
        'A claim to priority, privileges, or anything a person who gives nothing does not also have.',
    'terms.tips.p2':
        'No feature is behind a payment, now or in any published version. Leaving a tip gives you no additional function, no early access, no priority in support, no vote on what gets built, and no promise that anything at all gets built. Nothing is sent to you in return, and no reward is offered.',
    'terms.tips.p3':
        'That is also why a tip carries no invoice and no VAT: you set the amount freely, and it does not pay for any particular thing, so it is not consideration for a supply. The holder receives it as what it is, a tip, and declares it as such.',
    'terms.tips.note':
        'If a future version ever offers something in exchange for a payment, that will be a sale. It will be described as a sale, with its own terms, its price and its invoice. It will not be called a tip.',
    'terms.tips.cta': 'Leave a tip',

    'terms.refunds.title': 'Refunds and charges you do not recognise',
    'terms.refunds.p1':
        'A tip is final by its nature, but a payment can still go wrong, and a wrong payment is not a tip. So, on request and with no explanation needed, a tip is refunded in full within 14 calendar days of the charge in any of these cases.',
    'terms.refunds.li1': 'You tipped by mistake, or the same tip went through twice.',
    'terms.refunds.li2': 'The amount charged is not the amount you meant to give.',
    'terms.refunds.li3':
        'The payment was made with a card or account that is not yours, in which case tell your bank as well.',
    'terms.refunds.p2':
        'Write to the address in section 17 with the date, the amount and the last four digits of the card. The money goes back to the same payment method, which usually takes between five and ten working days depending on your bank.',
    'terms.refunds.p3':
        'After those 14 days, write anyway: cases are looked at one by one and a genuine mistake is refunded. Please ask before opening a chargeback with your bank, because a disputed payment carries a fixed fee larger than most tips, so a one-euro tip ends up costing the project money.',

    'terms.payments.title': 'Payments and payment data',
    'terms.payments.p1':
        'Tips are processed by Stripe Payments Europe, Ltd. Your card details are typed into Stripe’s own fields and travel to Stripe. Neither this website, nor the extension, nor the holder ever sees or stores a card number.',
    'terms.payments.p2':
        'The payment sheet is served by this site and may be shown inside the extension’s side panel. Some methods, PayPal among them, cannot authenticate inside another site’s frame and will open a window of their own. Stripe’s terms and privacy notice govern the processing of the payment itself.',
    'terms.payments.p3':
        'Tips are charged in euros, for the amount shown before you confirm. If your account is held in another currency, your bank may apply its own conversion and charges, which are outside our control.',

    'terms.third.title': 'Third-party services',
    'terms.third.p1':
        'Some features talk to services that are not ours, and only when you use that feature. Their own terms apply to them, and we neither control them nor answer for them.',
    'terms.third.li1':
        'Google Gemini, for the assistant. The API key is yours, entered by you and stored on your machine: the quota, the cost and the terms of that key are between you and Google.',
    'terms.third.li2':
        'The Chrome Web Store, which distributes and updates the extension under Google’s terms.',
    'terms.third.li3':
        'YouTube, for video previews, and the CDN that serves the text-recognition model that runs on your machine.',
    'terms.third.li4': 'Stripe, for tips, as described in section 8.',
    'terms.third.p2':
        'Content you reach through the extension belongs to whoever published it, and linking to it is not an endorsement. The privacy policy lists every host the extension can contact, what it sends and when.',

    'terms.data.title': 'Personal data',
    'terms.data.p1':
        'The extension has no accounts and no telemetry. Your groups, rules, notes, screenshots and activity stay in your browser’s own storage on your machine, and what leaves it does so only because you used a feature that had to send something.',
    'terms.data.p2':
        'The privacy policy is the document that governs all of this, and it forms part of these terms. It is written as a layered notice, with the summary first and the detail underneath.',
    'terms.data.cta': 'Read the privacy policy',

    'terms.warranty.title': 'No warranty',
    'terms.warranty.p1':
        'The extension is supplied free of charge and as it is, with no warranty of any kind beyond what the law requires. To the fullest extent permitted, no promise is made that it is free of errors or fit for a particular purpose.',
    'terms.warranty.li1':
        'It is not warranted to run without interruption or error, nor to be compatible with every browser version, operating system or other extension you have installed.',
    'terms.warranty.li2':
        'A feature that depends on a third-party service is not warranted to keep working if that service changes or closes.',
    'terms.warranty.li3':
        'You are responsible for your own copies. Uninstalling the extension, or losing the browser profile, takes its local data with it, so export what matters before either happens.',
    'terms.warranty.p2': 'None of this excludes a warranty that the law does not allow to be excluded.',
    'terms.warranty.note':
        'If you are a consumer, the rules on conformity of digital content and services apply where they apply by law. Those are articles 115 and following of Royal Legislative Decree 1/2007, which transposes Directive (EU) 2019/770, and this section does not displace them.',

    'terms.liability.title': 'Limitation of liability',
    'terms.liability.p1':
        'To the maximum extent the law permits, the holder is not liable for indirect or consequential harm arising from using the extension or from being unable to use it: loss of data, of profit, of business or of opportunity, however caused.',
    'terms.liability.p2': 'The following are never excluded, and no clause here tries to:',
    'terms.liability.li1': 'Wilful misconduct or gross negligence on the part of the holder.',
    'terms.liability.li2': 'Death or personal injury caused by the holder’s acts or omissions.',
    'terms.liability.li3':
        'Any liability that Spanish law does not permit to be excluded or limited, in particular towards consumers.',
    'terms.liability.p3':
        'Where a limit is lawful, the holder’s total liability is capped at the greater of fifty euros or the sum of the tips received from you in the twelve months before the event. The extension is free, and this figure is what stands in for a price that does not exist.',

    'terms.consumers.title': 'If you are a consumer',
    'terms.consumers.p1':
        'You are a consumer if you use the extension outside a trade, business or profession, as article 3 of Royal Legislative Decree 1/2007 defines it. Everything in this section is in addition to your rights, never instead of them.',
    'terms.consumers.p2':
        'The statutory fourteen-day right of withdrawal applies to contracts where goods or services are supplied for a price. A voluntary tip is not one: nothing is bought, and nothing is supplied in exchange. The fourteen-day refund in section 7 is given voluntarily and is at least as favourable, and it stands whether or not the statutory right applies.',
    'terms.consumers.p3':
        'If something is wrong, write first; most things are resolved in one reply. The holder is not adhered to any consumer arbitration scheme. You can also take a complaint to the consumer authority of your autonomous community or your country, and for a cross-border complaint the European Consumer Centre network is the route; the European ODR platform is not, as it was shut down in July 2025.',
    'terms.consumers.cta': 'Support centre',

    'terms.termination.title': 'Duration and termination',
    'terms.termination.p1':
        'The licence runs for as long as you use the extension. You end it whenever you like by uninstalling, with no notice, no formality and nothing to cancel: there is no subscription to stop.',
    'terms.termination.p2':
        'The holder may end the licence if you seriously breach section 4 or section 3. In practice that means you must stop using the extension and remove it; there is no remote switch, and none is claimed.',
    'terms.termination.p3':
        'Removing the extension deletes the data it kept in your browser. Export anything you want to keep before you uninstall, because after that neither you nor we can recover it.',

    'terms.changes.title': 'Changes to these terms',
    'terms.changes.p1':
        'These terms may change: a new feature, a new payment method, a change in the law. The date at the top of this page says which version is in effect, and every earlier version is in the public history of the repository this site is built from.',
    'terms.changes.p2':
        'A substantial change is announced on this page, and on the page where tips are taken when it touches them. Using the extension after the new date means accepting the new text; if you would rather not, uninstalling is the answer. No change ever applies backwards to a tip already given.',

    'terms.law.title': 'Governing law and jurisdiction',
    'terms.law.p1':
        'These terms are governed by Spanish law, and are written for the Spanish and European Union framework the holder operates in.',
    'terms.law.p2':
        'If you are a consumer resident in another EU country, choosing Spanish law does not deprive you of the mandatory protections of your own country, as article 6 of the Rome I Regulation provides. Where the two differ, whichever protects you more is the one that applies.',
    'terms.law.p3':
        'A consumer may bring a claim before the courts of their own place of residence, and may only be sued there, under articles 17 to 19 of Regulation (EU) 1215/2012. No clause here asks you to give that up, and one that appeared to would be void.',
    'terms.law.p4':
        'Where the user is not a consumer, the parties submit to the courts of the holder’s domicile in Spain. If any clause of these terms is held void, the rest stays in force and the void clause is read down to the closest lawful meaning. The Spanish version prevails in case of discrepancy with any translation.',

    'terms.contact.title': 'Contact',
    'terms.contact.p1':
        'One inbox for all of it: a question about these terms, a refund, a bug, or anything about your data. It is a real address rather than a form, and it is read by the person who wrote the code. Spanish and English both work.',
    'terms.contact.email': 'Write to us',
    'terms.contact.source': 'Read the source',

    // Tab Strip & Screenshots

    // Family Categories

    // Team Section
    'team.heading': 'Made by a couple',
    'team.subtitle':
        'No investors, no bloated roadmap. Built with craft for users who demand peak performance and complete control over their browser.',
    'team.social': 'Social media',
    'team.youtube': 'YouTube channel',
    'team.dev': 'Architecture, AI & Core Engineering',
    'team.design': 'UX/UI Design & Quality Assurance',
    'team.quote':
        'We built Intelligent Workspace because we believe your browser should be your most powerful workstation, not your biggest distraction.',
    'team.acknowledgement':
        'Special thanks to Flor Chávez for her relentless dedication to intuitive design and rigorous QA.',

    // How it works

    // FAQ
    'faq.heading': 'Frequently Asked Questions',
    'faq.subtitle': 'Everything you need to know about privacy, performance, and architecture.',
    'faq.cost.q': 'How much does it cost?',
    'faq.cost.a':
        'Intelligent Workspace is completely free. There are no paywalled features, no subscriptions, and no advertisements. Voluntary contributions help support ongoing maintenance.',
    'faq.account.q': 'Do I need an account to use it?',
    'faq.account.a':
        'No. There is no login, no email capture, and no authentication server. All your settings and data remain on your device.',
    'faq.ai.q': 'How does the Gemini AI integration work?',
    'faq.ai.a':
        "You paste your own free API key from Google AI Studio; it is kept in local browser storage and used only when you prompt the assistant, going straight to Google. You can store more than one, and when they run out of quota the extension falls back to Chrome's on-device model, which needs no key and works offline.",
    'faq.data.q': 'Does any personal data leave my computer?',
    'faq.data.a':
        'None. Groups, rules, notes, screenshots, time records and Pomodoro history are stored by your own browser. The only outbound traffic is the request you make to Google when you prompt the assistant, and even that stops if you use the on-device model.',
    'faq.browsers.q': 'Which browsers are supported?',
    'faq.browsers.a':
        "Chrome and the Chromium browsers that implement the Side Panel and Tab Groups APIs: Brave, Edge, Opera, Vivaldi. Firefox and Safari do not have those APIs, so it cannot run there. Chrome's on-device AI model is a Chrome feature and needs a machine that qualifies for it; everything else works without it.",
    'faq.source.q': 'Can I read the source code?',
    'faq.source.a':
        'Yes. The whole repository is on GitHub so that anyone can audit it and open a pull request. The licence is proprietary rather than open source: you may read it, build it for your own private use, and propose fixes, but not republish it or ship a derivative.',

    // Final CTA & Contribution Band
    'contribute.title': 'Support Independent Development',
    'contribute.eyebrow': 'Free, private, and open to audit',
    'contribute.body':
        'Intelligent Workspace is free, private, and ad-free. If it gives you your focus and afternoons back, a voluntary contribution keeps development active.',
    'contribute.cta': 'Support Project',
    'contribute.secured':
        'Payments processed securely by Stripe. We never see or store your payment details.',

    // Payment Page
    'pay.title': 'Support Intelligent Workspace',
    'pay.chooseAmount': 'Choose an amount',
    'pay.otherAmount': 'Other amount',
    'pay.orCard': 'or pay by card',
    'pay.loading': 'Loading the secure payment form…',
    'pay.opensOutside':
        'It has opened in its own window. Finish the payment there and this panel will stay as it is.',
    'pay.method.card': 'Card',
    'pay.method.revolutPay': 'Revolut Pay',
    'pay.opensInWindow':
        'These open in a window of their own, where Chrome can still offer you a saved card.',
    'pay.redirecting': 'Taking you there to authorise the payment…',
    'pay.thanks': 'Thank you. Your support payment went through.',
    'pay.notConfigured': 'Payments are not configured on this deployment yet.',
    'pay.contributeNow': 'Support',
    'pay.tipNote': 'The tip is voluntary.',
    'pay.termsLink': 'Terms of service',
    'pay.secured': 'Payments are processed by Stripe. This page never stores your card.',
    'pay.failed': 'The payment could not be completed.',
    'pay.badAmount': 'Choose an amount between 1 and 500 euros.',
    'pay.walletUnavailable': 'That wallet is not available on this device. The options below still are.',

    // Error Pages
    'errors.badge': 'Status code',
    'errors.notFound.title': 'This page does not exist',
    'errors.notFound.desc':
        'The address you followed is not part of this site, or the page it pointed at has moved. Everything else is still where you left it.',
    'errors.notFound.cta': 'Back to the home page',
    'errors.notFound.meta': 'Page not found',
    'errors.server.title': 'Something went wrong at our end',
    'errors.server.desc':
        'The page could not be built for you. Nothing of yours was touched and nothing was sent anywhere. Try again, and if it keeps happening the source is on GitHub.',
    'errors.server.retry': 'Try again',
    'errors.server.cta': 'Go to the home page',
    'errors.server.meta': 'Something went wrong',
    'errors.contribute': 'Support the project',
    'errors.source': 'Read the source',

    // Site chrome — the header and footer shared by the policy, the support centre
    // and the error screens, and the scroll buttons every page carries. The two
    // scroll labels are the extension's own `scrollToTop` and `scrollToBottom`.
    'doc.back': 'Back to the site',
    'doc.scrollTop': 'Scroll to top',
    'doc.scrollBottom': 'Scroll to bottom',

    // Support centre
    'support.meta.title': 'Support | Intelligent Workspace',
    'support.meta.description':
        'Help with Intelligent Workspace: fixes for the problems that come up most, what to put in a report, and the three places a message actually reaches.',
    'support.eyebrow': 'Support',
    'support.title': 'Help with Intelligent Workspace',
    'support.lede':
        'Two people build this extension and the same two answer the post. Most of what arrives has a fix on this page, so it is worth a minute before you write, and if it is not here, the addresses below are real inboxes rather than a form.',
    'support.badge': 'Usually answered within two working days',

    'support.channels.heading': 'Where to write',
    'support.channels.sub': 'Three routes, and the one you pick changes how quickly it gets looked at.',
    'support.ch1.title': 'Email',
    'support.ch1.desc':
        'Anything you would rather not post in public: a screenshot with your own tabs in it, a problem with a contribution, or a question about what the extension stores.',
    'support.ch1.meta': 'Private · answered by a person',
    'support.ch1.cta': 'Write to us',
    'support.ch2.title': 'GitHub issues',
    'support.ch2.desc':
        'Bugs and feature requests. Public, so anyone hitting the same thing finds your report, and you can watch the fix land in a commit.',
    'support.ch2.meta': 'Public · fastest for bugs',
    'support.ch2.cta': 'Open an issue',
    'support.ch3.title': 'Chrome Web Store',
    'support.ch3.desc':
        'The support tab on the listing, for anyone who would rather not leave the store. It reaches the same inbox, a little more slowly.',
    'support.ch3.meta': 'Public · store listing',
    'support.ch3.cta': 'Go to the listing',

    'support.fix.heading': 'Fix it in a minute',
    'support.fix.sub':
        'The seven things that account for most of the post. Each answer is the one we would have replied with.',
    'support.fix.q1': 'The side panel will not open, or the extension is nowhere to be seen',
    'support.fix.a1':
        'Open the puzzle-piece menu in the toolbar and pin Intelligent Workspace, then check it is enabled at chrome://extensions. The side panel needs a Chromium browser that ships the Side Panel API: Chrome, Brave, Edge, Opera and Vivaldi have it; Firefox and Safari do not, so the extension cannot run there at all.',
    'support.fix.q2': 'A keyboard shortcut does nothing',
    'support.fix.a2':
        'Two causes, in this order. Another extension may already own the combination: open chrome://extensions/shortcuts and rebind whichever one you prefer. And the keys typed on the page itself (the letter labels, the omnibar) need a content script, which Chrome forbids on its own pages: chrome://, the Web Store and the PDF viewer will never respond to them. Every key can be rebound; none of them is fixed.',
    'support.fix.q3': 'The assistant answers with a quota or key error',
    'support.fix.a3':
        "A free Google AI Studio key has a daily ceiling, and that message is Google refusing the request rather than the extension failing. Paste a second key in the settings (the extension rotates through the ones you store) or switch the assistant to Chrome's on-device model, which needs no key, costs nothing and works offline.",
    'support.fix.q4': 'Some tabs are not landing in the group their rule names',
    'support.fix.a4':
        'A rule matches a fragment of the address rather than a whole one, so "docs.google" catches every document and "google" catches far more than you meant. Check the fragment appears in the URL exactly as you typed it, and remember that a tab you dragged into a group by hand stays where you put it: the rules sort what arrives, they do not overrule you.',
    'support.fix.q5': 'My settings did not follow me to another computer',
    'support.fix.a5':
        "Only the small things travel. Rules, preferences and shortcuts sit in the browser's synced storage and follow your Chrome profile; notes, screenshots, time records and Pomodoro history are far too large for that quota and stay in the local database on each machine. Move them with the export file: it is a plain backup you write on one computer and import on the other.",
    'support.fix.q6': 'I want to start over, or I am about to reinstall',
    'support.fix.a6':
        'Export a backup first, from the backup panel. Uninstalling a Chrome extension deletes its local database along with it, and there is no copy on our side to send you: that is the other half of keeping everything on your machine. With the file saved, a fresh install is one import away from where you left off.',
    'support.fix.q7': 'Chrome has felt slower since I installed it',
    'support.fix.a7':
        'Tell us, with the number in front. Open Chrome\'s own task manager (Shift+Esc), find the row for the extension, and send us what it says along with roughly how many tabs and how many rules you have. A slowdown we can reproduce is a bug we can fix; one described as "it feels heavy" is one we can only guess at.',

    'support.report.heading': 'What to put in a report',
    'support.report.sub':
        'A report with these five lines is usually answered once. Without them it turns into three messages of questions before anyone can start.',
    'support.report.i1':
        'The extension version, from chrome://extensions, and your browser with its version.',
    'support.report.i2': 'Your operating system: a bug that only happens on one is a common shape.',
    'support.report.i3': 'What you did, step by step, in enough detail that somebody else can do it too.',
    'support.report.i4': 'What you expected to happen, and what happened instead.',
    'support.report.i5':
        'Anything red in the console: right-click the panel, choose Inspect, and copy the Console tab.',
    'support.report.note':
        'Screenshots help and are welcome. Crop out whatever you would rather not share; we do not need your tabs to read an error message.',

    'support.more.heading': 'Answers already written down',
    'support.more.sub': 'Four pages that between them cover most of what gets asked twice.',
    'support.more.r1.title': 'Frequently asked questions',
    'support.more.r1.desc': 'Cost, accounts, the AI key, and which browsers work.',
    'support.more.r2.title': 'Every keyboard shortcut',
    'support.more.r2.desc': 'The omnibar prefixes, the page keys and the browser commands.',
    'support.more.r3.title': 'Privacy policy',
    'support.more.r3.desc': 'What is stored, where it sits, and what leaves the machine.',
    'support.more.r4.title': 'Support the project',
    'support.more.r4.desc': 'The extension is free. A contribution is what keeps it maintained.',

    'support.contact.heading': 'Still stuck?',
    'support.contact.p1':
        'Write, and say what you already tried. There is no ticket number, no bot and no first line: the message arrives in the inbox of whoever wrote the code.',
    'support.contact.email': 'Send an email',
    'support.contact.issue': 'Open an issue',
    'support.contact.privacy':
        'A question about your data or your rights goes to the same address; the privacy policy says what is held and what you can ask for.',
    'support.contact.privacyCta': 'Read the privacy policy',

    // Footer
    'footer.store': 'Chrome Web Store',
    'footer.github': 'GitHub Repository',
    'footer.desc':
        'Intelligent Workspace: the comprehensive productivity and advanced browser suite for Google Chrome. Built with craft in Spain.',
    'footer.prodTitle': 'Product',
    'footer.toolsTitle': 'Utilities',
    'footer.privacyTitle': 'Privacy & Trust',
    'footer.policy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.support': 'Support',
    'footer.navLabel': 'Site pages',
    'footer.copyright': '© 2026 GENKI Organización / Luis Reoyo. All rights reserved.',
    'footer.license': 'Source available for audit on GitHub. Proprietary license.',

    // Labels read by screen readers, and the example tab titles drawn in the shots
    'nav.mainLabel': 'Main navigation',
    'hero.carouselLabel': 'Slide navigation',
    'bento.filter.label': 'Filter tools by category',
    'demo.tab.astroTalk': 'Astro 6 in twenty minutes',
    'demo.tab.svelteRunes': 'Svelte 5 runes, explained',
    'demo.tab.focus': 'Focus · Deep work',
    'demo.tab.flights': 'Flight booking · July',
    'demo.tab.lisbon': 'Apartment in Lisbon',
    'demo.tab.activityPanel': 'IW-214 · Web activity panel',
    'demo.tab.landing': 'Landing · side panel',
} as const;
