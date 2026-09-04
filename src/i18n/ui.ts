/**
 * Every string on the site, in both languages (English and Spanish).
 * Clean, professional, emoji-free, type-safe copy.
 */

export const defaultLang = 'en' as const;

export const ui = {
    en: {
        // Metadata & Global
        'meta.title': 'Intelligent Workspace: a browser that files itself',
        'meta.description':
            'Rules that group your tabs, a floating omnibar and letter labels on every link, an AI assistant with fifty-eight tools onto the browser, screen time with caps that actually block, and fourteen panels beside the page you are reading. All local, no account.',

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
        'nav.donate': 'Donate',
        'nav.menu': 'Menu',
        'nav.donateTitle': 'Support the development of Intelligent Workspace',
        'nav.version': 'Manifest V3',

        // Hero Section & 3-Slide Carousel
        'hero.title': 'A browser that organises itself.',
        'hero.btnInstall': 'Add to Google Chrome',
        'hero.btnSource': 'View Source on GitHub',
        'hero.support': 'Support the project',

        'hero.slide1.line1': 'Transform your browser into an',
        'hero.slide1.line2': 'autonomous workstation',
        'hero.slide1.lede':
            'A rule is a list of URL fragments and the group they belong to. Write it once and every tab whose address contains one of them lands in that group, under its name, in its colour. Everything else sorts itself by domain, subdomain, IP address or local file, a group you stop touching folds itself, and the assistant in the panel rearranges the lot if you ask it in a sentence.',
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
        'problem.s3.title': 'It is all in the same column',
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
        'fhub.tab5': 'Music & radio',

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
        'fhub.media.title': 'Your own music, and the radio, with no tab holding them',
        'fhub.media.lead':
            'A player inside the side panel, fed by a folder on your own disk and by the stations you save. The sound is made by an offscreen document rather than by the panel, so it carries on when you hide the drawer, change view or close the page.',
        'fhub.media.f1':
            'Point it at a folder, or at a handful of files, and it takes the audio in it: up to five hundred tracks, grouped by the folder they came from, reordered by dragging and searchable by name.',
        'fhub.media.f2':
            'Online radio in the same player: search the Radio Browser directory by name, country or tag, or paste a stream address yourself, and the stations sit above your files in the list.',
        'fhub.media.f3':
            'Transport, ten-second jumps, volume and mute in the panel, and the same controls under the toolbar button while the drawer is closed. A stream shows a live bar instead of a seek bar, because it has no end to seek to.',
        'fhub.media.f4':
            'Nothing is uploaded. The folder is handed over by the File System Access API rather than by a file input, and the playlist and the stations live in your browser’s own storage.',

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
        'activity.f1.title': 'Today, in the column beside the page',
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
        'bookmarks.title': 'Bookmarks, history and downloads, in the column beside the page',
        'bookmarks.subtitle':
            'Chrome keeps five of these lists in pages you have to go and open. Here they are five views of one panel, with a search that filters as you type and an action on every row.',
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
        'fhub.media.mockup.badge': 'Music player',
        'fhub.media.mockup.searchPlaceholder': 'Search tracks…',
        'fhub.media.mockup.tabMusic': 'Music',
        'fhub.media.mockup.tabRadio': 'Radio',
        'fhub.media.mockup.tabAll': 'All',
        'fhub.media.mockup.savedStations': 'Saved stations',
        'fhub.media.mockup.folder': 'Focus',

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
        'bento.radio.title': 'Online radio, directory included',
        'bento.radio.desc':
            'Search the Radio Browser directory by name, country or tag, or paste the address of a stream yourself. The stations you keep live in the same player as your files, under their own tab.',
        'bento.radio.tag': 'Radio',
        'bento.radio.badge': 'Live streams',
        'bento.radio.h1': 'Thousands of stations to search, or an address you paste in',
        'bento.radio.h2': 'Export and import the list as JSON',
        'bento.radio.h3': 'Optional sync of your stations across the Chromes you are signed in to',

        // 21. Music Player
        'bento.musicPlayer.title': 'A music player, in the side panel',
        'bento.musicPlayer.desc':
            'Hand it a folder, or a handful of files, and it plays them beside the page you are reading. The sound is made by an offscreen document rather than by the panel, so hiding the drawer, changing view or closing the page does not stop the music.',
        'bento.musicPlayer.tag': 'Audio',
        'bento.musicPlayer.badge': 'Keeps playing when hidden',
        'bento.musicPlayer.h1': 'A folder or a file selection, grouped by folder and reordered by dragging',
        'bento.musicPlayer.h2':
            'Seek bar, ten-second jumps, volume and mute, and the same controls under the toolbar button',
        'bento.musicPlayer.h3':
            'Nothing is uploaded: the folder is read on your machine and kept in your own browser',

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
            'What Intelligent Workspace stores, where it stores it, and the handful of moments something leaves your browser. No account, no server of ours, no analytics inside the extension.',
        'privacy.eyebrow': 'Legal',
        'privacy.title': 'Privacy Policy',
        'privacy.effective': 'In effect since',
        'privacy.lede':
            'There is no account to create, no server of ours to talk to, and nothing in the extension that reports back. That leaves this document short on promises and long on specifics: what is stored, where it sits, and every moment something crosses the network.',
        'privacy.back': 'Back to the site',
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
            'Sending a prompt to Google, searching the radio directory, loading a YouTube thumbnail or fetching a site icon: your consent, given by the action itself. Nothing is sent until you ask for it.',
        'privacy.basis.li3':
            'Serving this website and keeping it up: our legitimate interest in delivering the pages you requested and in aggregate measurement that carries no identifier. Article 6.1.f.',
        'privacy.basis.li4':
            'Processing a donation: performance of the transaction you started, and the accounting duties that follow it. Articles 6.1.b and 6.1.c.',
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
        'privacy.store.r10.leaves':
            'Never synced. It travels only as the header of your own request to Google',

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
            'Your prompt, whatever page text or screenshot you attached to it, and your own API key',
        'privacy.net.r1.when': 'Only when you ask the assistant for something',
        'privacy.net.r2.host': 'Chrome’s built-in on-device model',
        'privacy.net.r2.what': 'Nothing. It runs inside Chrome, on this machine, and makes no request at all',
        'privacy.net.r2.when': 'When you choose it instead of Gemini',
        'privacy.net.r3.what': 'The station name or genre you typed, and nothing else',
        'privacy.net.r3.when': 'While you search or browse online radio',
        'privacy.net.r4.host': 'The radio station you press play on',
        'privacy.net.r4.what':
            'An ordinary audio request to that station’s own server, which sees your IP address as any website does',
        'privacy.net.r4.when': 'While a station is playing',
        'privacy.net.r5.what': 'The video id, for the thumbnail and the embedded player',
        'privacy.net.r5.when': 'Only for a YouTube link you preview or play',
        'privacy.net.r6.what': 'The domain of a link, so the omnibar can draw its site icon',
        'privacy.net.r6.when': 'While the omnibar has results on screen',
        'privacy.net.r7.what':
            'Nothing about you. It fetches the OCR language model, which Chrome then caches',
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

        'privacy.perm.title': 'Permissions, and what they are not for',
        'privacy.perm.p1':
            'Chrome will tell you the extension asks for twenty-four permissions plus access to every site. That is a lot, and being suspicious about it is the right instinct, so each group is set out on the home page beside the feature that cannot exist without it. None of them builds a profile, and none feeds anything that leaves this machine except the connections listed above.',
        'privacy.perm.p2':
            'Access to every site is what lets the link labels, reader mode, snippet expansion and the activity blocker work anywhere rather than on a list Chrome would have to approve first. It is not used to read pages in the background: those scripts wake up when you press the key that calls them.',
        'privacy.perm.cta': 'See the permission table',

        'privacy.site.title': 'This website',
        'privacy.site.p1':
            'The site is a handful of static files on Vercel. It has no login and asks for nothing. Your browser’s request reaches Vercel’s servers, which see what any web server sees: an IP address, a user agent, the page asked for. That is hosting, not tracking.',
        'privacy.site.p2':
            'Two Vercel measurement scripts do run here: Analytics, which counts page views without cookies and without a cross-site identifier, and Speed Insights, which reports how quickly the page rendered. Both only ever aggregate, neither follows you to another site, and the extension itself carries neither.',
        'privacy.site.p3':
            'The donation page is the one exception to “no third-party frames”: it loads Stripe, and only Stripe.',

        'privacy.cookies.title': 'Cookies and local storage',
        'privacy.cookies.p1':
            'This website sets no cookies. Not an analytics cookie, not a session cookie, not a consent cookie, which is why you were never shown a banner asking you to accept one.',
        'privacy.cookies.p2':
            'It does store one thing in your browser, and only after you act: pressing the light and dark toggle writes your choice under the key iw-theme in local storage, so the next page you open does not flash the wrong colours. That is a preference you asked for, stored on your own device, readable by nobody else, and article 22.2 of the Spanish LSSI exempts exactly this kind of storage from prior consent. Clearing your browser data removes it and the site goes back to following your system setting.',

        'privacy.pay.title': 'Donations',
        'privacy.pay.p1':
            'Donations go through Stripe. The card form is Stripe’s own, running inside Stripe’s frame, so the card number is typed into their field and never touches this site, the one server function behind it, or the extension. That function does exactly one thing: ask Stripe to create a payment between 1 and 500 euros and hand the browser back a token good for that single payment.',
        'privacy.pay.p2':
            'What Stripe collects, and what it does with it, is governed by Stripe’s privacy policy rather than this one. We keep no record of who donated, because there is no database here to keep one in. A donation is voluntary, unlocks nothing, and is not a subscription.',

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

        // Tab Strip & Screenshots

        // Family Categories

        // Team Section
        'team.heading': 'Made by a couple',
        'team.subtitle':
            'No investors, no bloated roadmap. Built with craft for users who demand peak performance and complete control over their browser.',
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
            'Intelligent Workspace is completely free. There are no paywalled features, no subscriptions, and no advertisements. Optional donations help support ongoing maintenance.',
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

        // Final CTA & Donate Band
        'donate.title': 'Support Independent Development',
        'donate.eyebrow': 'Free, private, and open to audit',
        'donate.body':
            'Intelligent Workspace is free, private, and ad-free. If it gives you your focus and afternoons back, a one-off donation keeps development active.',
        'donate.cta': 'Donate',
        'donate.secured':
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
        'pay.thanks': 'Thank you. Your donation went through.',
        'pay.notConfigured': 'Donations are not configured on this deployment yet.',
        'pay.donateNow': 'Donate',
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
        'errors.support': 'Support the project',
        'errors.source': 'Read the source',

        // Footer
        'footer.store': 'Chrome Web Store',
        'footer.github': 'GitHub Repository',
        'footer.desc':
            'Intelligent Workspace: the comprehensive productivity and advanced browser suite for Google Chrome. Built with craft in Spain.',
        'footer.prodTitle': 'Product',
        'footer.toolsTitle': 'Utilities',
        'footer.privacyTitle': 'Privacy & Trust',
        'footer.policy': 'Privacy Policy',
        'footer.copyright': '© 2026 GENKI Organización / Luis Reoyo. All rights reserved.',
        'footer.license': 'Source available for audit on GitHub. Proprietary license.',
    },

    es: {
        // Metadata & Global
        'meta.title': 'Intelligent Workspace: un navegador que se archiva solo',
        'meta.description':
            'Reglas que agrupan tus pestañas, un omnibar flotante y etiquetas de letra en cada enlace, un asistente de IA con cincuenta y ocho herramientas sobre el navegador, tiempo de pantalla con topes que bloquean de verdad, y catorce paneles junto a la página que lees. Todo en local y sin cuenta.',

        // Navigation
        'nav.features': 'Capacidades',
        'nav.tools': 'Herramientas',
        'nav.keyboard': 'Teclado',
        'nav.privacy': 'Privacidad',
        'nav.faq': 'FAQ',
        'nav.skip': 'Ir al contenido',
        'nav.theme': 'Cambiar tema',
        'nav.language': 'Idioma',
        'nav.install': 'Añadir a Chrome',
        'nav.donate': 'Donar',
        'nav.menu': 'Menú',
        'nav.donateTitle': 'Apoya el desarrollo de Intelligent Workspace',
        'nav.version': 'Manifest V3',

        // Hero Section & 3-Slide Carousel
        'hero.title': 'Un navegador que se ordena solo.',
        'hero.btnInstall': 'Añadir a Google Chrome',
        'hero.btnSource': 'Ver Código en GitHub',
        'hero.support': 'Apoyar el proyecto',

        'hero.slide1.line1': 'Transforma tu navegador en una',
        'hero.slide1.line2': 'estación de trabajo autónoma',
        'hero.slide1.lede':
            'Una regla es una lista de fragmentos de URL y el grupo al que pertenecen. La escribes una vez y cada pestaña cuya dirección contenga uno de ellos cae en ese grupo, con su nombre y su color. Lo demás se ordena solo por dominio, subdominio, dirección IP o archivo local, el grupo que dejas de tocar se pliega, y el asistente del panel te lo reorganiza todo si se lo pides en una frase.',
        'hero.slide1.tag': 'Espacios Inteligentes y Asistente IA',

        'hero.slide2.line1': 'Búsqueda universal Omnibar y',
        'hero.slide2.line2': 'control total por teclado',
        'hero.slide2.lede':
            'Pulsa o y un buscador flota sobre la página: pestañas abiertas, marcadores, historial, notas, capturas, reglas y copias de seguridad, cada uno con su prefijo, y qaia: le entrega la frase entera al agente. Pulsa f y cada enlace lleva una letra que lo abre. Ninguna de estas teclas es fija: todas se pueden reasignar.',
        'hero.slide2.tag': 'Omnibar y Atajos de Teclado',

        'hero.slide3.line1': 'Toda tu estación de trabajo',
        'hero.slide3.line2': 'integrada en el panel lateral',
        'hero.slide3.lede':
            'Marcadores, historial, pestañas cerradas, lista de lectura y descargas dejan de ser páginas que hay que ir a abrir. Al lado: notas con listas y tableros Kanban, la galería de capturas con OCR en tu propio equipo, el asistente de IA, el temporizador Pomodoro y tu música o la radio online.',
        'hero.slide3.tag': 'Un panel lateral con todo dentro',

        'hero.carousel.prev': 'Slide anterior',
        'hero.carousel.next': 'Slide siguiente',
        'hero.carousel.slide': 'Ir al slide',
        'hero.m1.title': 'Gestionar Reglas',
        'hero.m1.footer': 'Desarrollo: Luisrb85, Diseño & Testing: Flor Chávez.',
        'hero.m1.r1': 'Trabajo',
        'hero.m1.r2': 'Documentación',
        'hero.m1.r3': 'Diseño',
        'hero.m1.r6': 'Correo',
        'hero.m2.hints': 'Sobre la propia página',
        'hero.m2.k1': 'etiquetar cada enlace',
        'hero.m2.k2': 'copiar un enlace',
        'hero.m2.k3': 'leerla en voz alta',
        'hero.m3.title': 'Listar grupos',
        'hero.m3.g1': 'Trabajo',
        'hero.m3.g2': 'Documentación',
        'hero.m3.g3': 'Diseño',

        // Problem vs Solution
        'problem.title': 'El caos de tu navegador no es culpa tuya.',
        'problem.subtitle':
            'Las cosas que un navegador te obliga a hacer a mano todos los días, y la parte de la extensión que corta cada una. Nada de esto necesita cuenta, servidor ni más disciplina de la que ya tienes.',
        'problem.vs': 'Lo que hace la extensión',

        'problem.p1.title': 'Cuarenta pestañas, cuarenta favicons',
        'problem.p1.desc':
            'La pestaña que quieres es un icono de cuatro píxeles en una barra que dejó de leerse hace una hora. Acabas abriendo dos veces al día páginas que ya tenías abiertas.',
        'problem.p2.title': 'Ordenas las mismas pestañas cada mañana',
        'problem.p2.desc':
            'Arrastras las del trabajo a un grupo, lo nombras, le pones color. Por la tarde vuelve a haber nueve sueltas, y mañana lo repites por tercera vez.',
        'problem.p3.title': 'Todo lo útil está a una página de distancia',
        'problem.p3.desc':
            'Un marcador, algo del historial, una nota, una captura: cada cosa vive en su propia página, e ir a buscarla te saca de la página en la que estabas.',
        'problem.p4.title': 'La mano no para de salir del teclado',
        'problem.p4.desc':
            'Abrir un enlace, encontrar una pestaña, saltar a un grupo, cerrar seis: cada una de esas cosas es un viaje al ratón y vuelta, unos cuantos cientos de veces al día.',

        'problem.s1.title': 'Una regla, escrita una vez',
        'problem.s1.desc':
            'Una regla es una lista de fragmentos de URL y el grupo al que pertenecen. Cualquier pestaña cuya dirección contenga uno de ellos cae ahí, con el nombre y el color que le pusiste. Lo que no tiene regla se agrupa por dominio, subdominio, dirección IP o archivo local.',
        'problem.s2.title': 'La lista se mantiene corta sola',
        'problem.s2.desc':
            'El grupo que nadie toca se pliega al vencer su temporizador, el contador de duplicadas las limpia de un clic, y un grupo entero se respalda y se reabre días después tal y como estaba.',
        'problem.s3.title': 'Todo está en la misma columna',
        'problem.s3.desc':
            'Marcadores, historial, pestañas cerradas, lista de lectura, descargas, notas, galería de capturas y asistente son nueve vistas de un mismo panel lateral, junto a la página y no en lugar de ella.',
        'problem.s4.title': 'Una tecla para cada cosa',
        'problem.s4.desc':
            'f dibuja una letra sobre cada enlace, o abre un buscador sobre la página con un prefijo por fuente, y el agente acepta el encargo en lenguaje normal. Todas las combinaciones se editan.',

        // Feature Hub / Tabs Section
        'fhub.title': 'Pilares de productividad y control total del navegador',
        'fhub.subtitle':
            'Cualquier otra cosa que hace la extensión pertenece a uno de los paneles de abajo. Cada uno enumera lo que hace de verdad: aquí no se nombra nada que no puedas encontrar hoy en el panel lateral.',
        'fhub.tab1': 'Agente IA',
        'fhub.tab2': 'Pestañas y reglas',
        'fhub.tab3': 'Tiempo y foco',
        'fhub.tab4': 'Teclado',
        'fhub.tab5': 'Música y radio',

        // Tab 1: AI Agent
        'fhub.agent.title': 'Un asistente que actúa sobre el navegador, no que habla de él',
        'fhub.agent.lead':
            'El asistente vive en el panel lateral y tiene cincuenta y ocho herramientas enganchadas al propio navegador: pestañas, grupos, reglas, marcadores, temas, snippets y atajos de sitio. Se lo pides en lenguaje normal y las ejecuta.',
        'fhub.agent.f1':
            '«Cierra las pestañas de deportes y mete GitHub y Jira en un grupo rojo llamado Trabajo» se ejecuta directamente en el navegador: cierra pestañas, las agrupa y asigna el color.',
        'fhub.agent.f2':
            'Resume en el panel la página que tienes delante, guarda la conversación, te la lee en voz alta y acepta archivos, imágenes y dictado por micrófono.',
        'fhub.agent.f3':
            'Consultas programadas: una pregunta que se lanza sola el día y a la hora que elijas y te deja la respuesta esperando.',
        'fhub.agent.f4':
            'Pones tu clave de Google AI Studio, varias si quieres. Cuando se agota la cuota responde el modelo local de Chrome (Gemini local), sin conexión y sin coste.',

        // Tab 2: Tab Engine
        'fhub.tabs.title': 'Reglas que escribes una vez y no vuelves a archivar una pestaña',
        'fhub.tabs.lead':
            'La agrupación la deciden reglas, no conjeturas: una regla dice qué direcciones le pertenecen, en qué grupo caen y de qué color. Todo lo demás existe para que esa lista de grupos siga siendo corta.',
        'fhub.tabs.f1':
            'Reglas hechas de fragmentos de URL, más la agrupación automática por dominio, subdominio, dirección IP, archivos locales, páginas de Chrome y extensiones.',
        'fhub.tabs.f2':
            'Temporizador de plegado: el grupo que nadie toca se pliega solo y deja de ocupar la barra.',
        'fhub.tabs.f3':
            'Las pestañas paradas se suspenden y devuelven su memoria, y los grupos enteros se respaldan y se restauran: una sola tecla restaura todas las copias.',
        'fhub.tabs.f4':
            'Contador de duplicadas con limpieza en un clic, silenciar todas las pestañas, ocultar un grupo y reordenar pestañas y grupos arrastrando.',

        // Tab 3: Pomodoro & Analytics
        'fhub.focus.title': 'Dónde se fueron tus horas, y un límite que aguanta',
        'fhub.focus.lead':
            'Dos cosas que funcionan juntas: el registro del tiempo que se lleva cada sitio, y reglas que lo paran cuando ya ha tenido bastante de tu día. Todo se queda en este equipo.',
        'fhub.focus.f1':
            'Tiempo por sitio y por categoría, dieciséis categorías incluidas más las que añadas, con visitas, tiempo medio por visita, hora punta y día más cargado.',
        'fhub.focus.f2':
            'Un tope diario, otro semanal y las horas en que ese sitio puede abrirse siquiera. Cuando se agota uno, el sitio se bloquea; no solo se cuenta.',
        'fhub.focus.f3':
            'Contraseña opcional para poder desactivar o borrar una regla, y un «cinco minutos más» que queda registrado como prórroga, no como quitar el límite.',
        'fhub.focus.f4':
            'Pomodoro con cuatro métodos, tareas por proyecto, interrupciones contadas y un panel con mapa de calor, rachas y desglose por proyecto.',

        // Tab 4: Keyboard & Snippets
        'fhub.keys.title': 'Cada comando tiene una tecla, y cada tecla se puede cambiar',
        'fhub.keys.lead':
            'Dos vías de entrada: un buscador flotante sobre cualquier página y etiquetas de letra dibujadas sobre la propia página. Ninguna necesita el ratón y ninguna es fija. Todas las combinaciones se editan.',
        'fhub.keys.f1':
            'Pulsa f y cada enlace lleva una letra. Ctrl lo abre en una pestaña de fondo y Mayús en otra ventana; cf copia el enlace en vez de abrirlo.',
        'fhub.keys.f2':
            'Pulsa o para el omnibar flotante, o escribe find en la barra de direcciones: b: marcadores, h: historial, c: cerradas, f: texto en la página, lnt: notas, rl: reglas, bgr: copias de seguridad.',
        'fhub.keys.f3':
            'Snippets con {{variables}} y valores por defecto, con formato o en texto plano, que se expanden en cualquier campo; $$ abre los cinco que más usas.',
        'fhub.keys.f4':
            'Modo oscuro, sepia, escala de grises o claro para una pestaña o para todas, pantalla dividida, picture-in-picture y lectura en voz alta, cada uno con su tecla.',

        // Tab 5: Reproductor de música y radio online
        'fhub.media.title': 'Tu música, y la radio, sin una pestaña que las sostenga',
        'fhub.media.lead':
            'Un reproductor dentro del panel lateral, alimentado por una carpeta de tu propio disco y por las emisoras que guardes. El sonido lo produce un documento offscreen y no el panel, así que sigue sonando cuando ocultas el cajón, cambias de vista o cierras la página.',
        'fhub.media.f1':
            'Le señalas una carpeta, o un puñado de archivos, y coge el audio que haya en ella: hasta quinientas pistas, agrupadas por la carpeta de la que vienen, reordenables arrastrando y buscables por nombre.',
        'fhub.media.f2':
            'Radio online en el mismo reproductor: busca en el directorio de Radio Browser por nombre, país o etiqueta, o pega tú mismo la dirección de una emisión, y las emisoras quedan por encima de tus archivos en la lista.',
        'fhub.media.f3':
            'Transporte, saltos de diez segundos, volumen y silencio en el panel, y los mismos controles bajo el botón de la barra mientras el cajón está cerrado. Una emisión muestra una barra en directo en lugar de una barra de posición, porque no tiene final al que ir.',
        'fhub.media.f4':
            'No se sube nada. La carpeta se entrega con la File System Access API y no con un campo de archivo, y la lista de reproducción y las emisoras viven en el almacenamiento del propio navegador.',

        // Feature Hub Mockups & Visual Previews (Bilingual)
        'fhub.tablistLabel': 'Pestañas de Funcionalidades',
        'fhub.agent.mockup.badge': 'Asistente IA',
        'fhub.agent.mockup.latency': 'Gemini o IA local',
        'fhub.agent.mockup.user': 'Tú',
        'fhub.agent.mockup.userMsg':
            '«Cierra las pestañas de deportes y mete GitHub y Jira en un grupo rojo llamado Trabajo».',
        'fhub.agent.mockup.agent': 'Asistente',
        'fhub.agent.mockup.actionGroup': 'Agrupar 2 pestañas en «Trabajo»',
        'fhub.agent.mockup.actionDiscard': 'Cerrar 6 pestañas',
        'fhub.agent.mockup.actionRam': 'Asignar color rojo',
        'fhub.agent.mockup.agentReply':
            'He cerrado 6 pestañas de deportes, he creado el grupo Trabajo con las de GitHub y Jira dentro y lo he puesto en rojo.',
        'fhub.tabs.mockup.badge': 'Listar grupos',
        'fhub.tabs.mockup.latency': 'Plegado automático activo',
        'fhub.tabs.mockup.c1Title': 'Entretenimiento',
        'fhub.tabs.mockup.c1Timer': 'se pliega en 15 min',
        'fhub.tabs.mockup.activeBadge': 'Activa',
        'fhub.tabs.mockup.hibernatedBadge': 'Suspendida',
        'fhub.tabs.mockup.c2Title': 'Vacaciones',
        'fhub.tabs.mockup.c2Timer': 'regla: *.astro.build',
        'fhub.tabs.mockup.c3Title': 'Chrome',
        'fhub.focus.mockup.badge': 'Actividad web',
        'fhub.focus.mockup.efficiency': 'Solo en este equipo',
        'fhub.focus.mockup.timer': '25:00',
        'fhub.focus.mockup.timerMode': 'Pomodoro · proyecto: Landing',
        'fhub.focus.mockup.statInterrupt': 'Interrupciones',
        'fhub.focus.mockup.statDaily': 'Foco hoy',
        'fhub.focus.mockup.heatmapTitle': 'Racha de actividad',
        'fhub.focus.mockup.rowDaily': 'Diario',
        'fhub.focus.mockup.rowWeekly': 'Semanal',
        'fhub.focus.mockup.rowHours': 'Horas',

        // Dedicated Showcase 1: Omnibar & Link Hints
        'omnibar.badge': 'Barra de comandos',
        'omnibar.title': 'Un buscador sobre cualquier página, y una letra en cada enlace',
        'omnibar.subtitle':
            'Pulsa o y el omnibar flota sobre lo que estés leyendo. Cada prefijo busca en un sitio distinto, y uno de ellos le pasa la frase directamente al agente. ¿Prefieres la barra de direcciones? Escribe find ahí y tienes la misma búsqueda sin salir de ella.',
        'omnibar.f1.title': 'Todo, detrás de un prefijo',
        'omnibar.f1.desc':
            'b: marcadores, h: historial, c: cerradas recientemente, lnt: notas, limg: capturas, rl: reglas, bgr: copias de seguridad, lai: conversaciones anteriores con la IA. Escribe @ y te los lista todos, para no tener que recordar ninguno.',
        'omnibar.f2.title': 'Comandos, no solo resultados',
        'omnibar.f2.desc':
            'dg: cierra grupos enteros, dt: cierra varias pestañas de golpe, ts: pone las que elijas en pantalla dividida, f: busca texto dentro de la página, ar: la lee en voz alta, cr: escribe una regla de agrupación, qaia: le da el encargo al agente.',
        'omnibar.f3.title': 'Etiquetas de letra sobre la propia página',
        'omnibar.f3.desc':
            'Pulsa f y cada enlace, botón y campo lleva una etiqueta de una o dos letras. Ctrl lo abre en una pestaña de fondo, Mayús en otra ventana, y cf copia el enlace en lugar de seguirlo.',

        // Dedicated Showcase 2: Reader Mode & TTS
        'reader.badge': 'Leer y escuchar',
        'reader.title': 'Una página limpia, leída en voz alta, con la palabra encendida',
        'reader.subtitle':
            'El modo lectura deja la página en su texto. El reproductor flotante te la lee resaltando el párrafo y la palabra según avanza, con la voz, la velocidad y el tono que elijas.',
        'reader.f1.title': 'Resalta lo que está leyendo',
        'reader.f1.desc':
            'El párrafo y la palabra que suena van marcados según la voz los recorre, y tú decides cuánto se nota ese resaltado.',
        'reader.f2.title': 'La página, sin la página',
        'reader.f2.desc':
            'Una tecla saca el artículo de su maquetación. Oscuro, sepia, escala de grises o claro también se pueden aplicar a cualquier web tal cual está, para una pestaña o para todas a la vez.',
        'reader.f3.title': 'La voz la pones tú',
        'reader.f3.desc':
            'Idioma, velocidad, tono y volumen; se arranca con ar desde el teclado, desde el omnibar o sobre las propias respuestas del asistente.',

        // Dedicated Showcase 3: Media & YouTube Loop
        'media.badge': 'Vídeo flotante',
        'media.title': 'Cualquier vídeo encima de tu trabajo, y YouTube en bucle',
        'media.subtitle':
            'Aparece un botón de picture-in-picture en YouTube, Shorts, TikTok y en los reproductores HTML5 normales. La página entera también puede flotar, y el botón de bucle está dentro del reproductor, donde uno lo buscaría.',
        'media.f1.title': 'Picture-in-picture que sale solo',
        'media.f1.desc':
            'Saca el vídeo con wv, o deja que se vaya solo: as lo hace flotar en cuanto lo pasas con el scroll, ah cuando te cambias de pestaña.',
        'media.f2.title': 'Un botón de bucle dentro de YouTube',
        'media.f2.desc':
            'Se añade al reproductor de YouTube y a Shorts, para que una canción, una lección o un fondo se repitan sin tocar nada.',
        'media.f3.title': 'La página entera, flotando',
        'media.f3.desc':
            'wp pone la página actual en una ventana de picture-in-picture de documento y we en una emergente limpia, ambas también desde el omnibar con wp:, we: y wv:, y desde el menú del botón derecho.',
        'keep.badge': 'Nada se pierde',
        'keep.title': 'Guarda una página, o una ventana entera, y recupérala tal y como estaba',
        'keep.subtitle':
            'Algo que el navegador nunca ha hecho bien: guardar una imagen de lo que estabas mirando, y dejar un conjunto de pestañas a buen recaudo hasta que vuelvas a necesitarlas.',
        'keep.capture.title': 'Todas las formas de capturar, y una galería donde quedan',
        'keep.capture.lead':
            'No solo la pantalla visible. La página entera, recorrida y unida en una sola imagen de hasta 30.000 píxeles de alto; esa misma página por partes cuando así se lee mejor; un área que dibujas tú; o todas las pestañas de un grupo de una vez.',
        'keep.capture.f1':
            'cs captura la página y ca un área que arrastras, las dos sin salir de ella. El menú del grupo captura todas sus pestañas, pantalla visible o página completa.',
        'keep.capture.f2':
            'Caen en una galería local del panel lateral, donde una captura se puede archivar para que una sesión nueva del navegador no la borre.',
        'keep.capture.f3':
            'El texto que hay dentro de una captura se puede extraer y copiar, con un motor que se ejecuta en tu propio equipo. Guarda una en PNG o PDF, o descárgalas todas.',
        'keep.backup.title': 'Un grupo guardado, y la memoria de vuelta con él',
        'keep.backup.lead':
            'Una copia de seguridad es un grupo entero cerrado y guardado: sus pestañas, su orden y sus títulos. Se queda en la lista con una B, y un clic vuelve a abrirlas todas.',
        'keep.backup.f1':
            'Respalda un grupo desde su propia fila, o todos los grupos inactivos de una vez con bg. br los restaura todos.',
        'keep.backup.f2':
            'bgr: en el omnibar busca dentro de las copias: restaura un grupo entero, una sola pestaña de dentro, o todo lo que haya filtrado.',
        'keep.backup.f3':
            'La sesión actual se puede guardar y reabrir otro día, y las reglas, los temas, los marcadores, los atajos y los snippets se exportan e importan como archivos.',
        'keep.shot.gallery': 'Galería',
        'keep.shot.s1': 'docs.astro.build (página completa)',
        'keep.shot.s2': 'IW-214 · área',
        'keep.shot.s3': 'Tabla de precios',
        'keep.shot.s4': 'Factura · junio',
        'keep.opt.visible': 'Capturar el área visible',
        'keep.opt.full': 'Capturar la página completa',
        'keep.opt.parts': 'Capturar la página completa por partes',
        'keep.opt.area': 'Capturar área web',
        'keep.opt.group': 'Capturar las pestañas del grupo',
        'keep.shot.groups': 'Listar grupos',
        'keep.shot.g1': 'Trabajo',
        'keep.shot.g2': 'Documentación',
        'keep.shot.g3': 'Diseño',

        // Dedicated Showcase 4: Activity Dashboard
        'activity.badge': 'Actividad web',
        'activity.title': 'Actividad web: a dónde se va tu día y qué haces con él',
        'activity.subtitle':
            'El panel lateral guarda el día de hoy; la página completa guarda el resto. Tiempo por sitio y por categoría, y reglas que paran un sitio cuando ya ha tenido bastante de tu día. Todo se registra en este equipo y nada sale de aquí.',
        'activity.f1.title': 'Hoy, en la columna junto a la página',
        'activity.f1.desc':
            'Una caja por sitio, plegada, con el tiempo que se ha llevado. La despliegas y tienes visitas, tiempo medio por visita, su parte del día y las tres reglas que lo gobiernan.',
        'activity.f2.title': 'Tope diario, tope semanal y horario',
        'activity.f2.desc':
            'Cuando se agota uno, el sitio se bloquea de verdad, en una pantalla que dice por qué y a qué hora se levanta. Puede pedirse contraseña antes de desactivar una regla, y el «cinco minutos más» queda registrado como prórroga.',
        'activity.f3.title': 'Todo el registro, en una página completa',
        'activity.f3.desc':
            'Tiempo navegando, índice de foco, hora punta, día más cargado, sesiones, racha y categoría principal, con la rejilla hora a hora, el reparto por categorías y cada visita en una línea de tiempo.',
        'activity.panel.title': 'Actividad web',
        'activity.panel.search': 'Buscar sitios',
        'activity.panel.visits': 'Visitas',
        'activity.panel.perVisit': 'Por visita',
        'activity.panel.share': 'Peso',
        'activity.panel.daily': 'Diario',
        'activity.panel.weekly': 'Semanal',
        'activity.panel.schedule': 'Horario',
        'activity.panel.overLimit': 'límite superado',
        'activity.panel.outsideHours': 'fuera de horario',

        // Dedicated Showcase 5: Bookmarks & Link Auditor
        'bookmarks.badge': 'Las listas que ya tienes',
        'bookmarks.title': 'Marcadores, historial y descargas, en la columna junto a la página',
        'bookmarks.subtitle':
            'Chrome guarda cinco de estas listas en páginas que hay que ir a abrir. Aquí son cinco vistas de un mismo panel, con una búsqueda que filtra mientras escribes y una acción en cada fila.',
        'bookmarks.f1.title': 'El árbol de marcadores entero, editable',
        'bookmarks.f1.desc':
            'Busca en todas las carpetas, crea, renombra, borra y arrastra, importa y exporta, y convierte un marcador suelto o una carpeta completa en una regla de agrupación.',
        'bookmarks.f2.title': 'Encuentra los marcadores que ya no funcionan',
        'bookmarks.f2.desc':
            'Un escaneo visita cada dirección guardada y te devuelve las que fallan, ordenadas por lo que ha pasado: 4xx, 5xx, tiempo agotado o error de conexión. Filtras por un tipo y las borras juntas.',
        'bookmarks.f3.title': 'Historial, cerradas recientemente y descargas',
        'bookmarks.f3.desc':
            'Historial por días con filtro de fecha, una lista de cerradas que recupera una ventana entera con un clic, y descargas agrupadas por fecha y filtradas por estado: completadas, en curso, interrumpidas.',

        // Dedicated Showcase 6: Snippets Expander
        'snippets.badge': 'Texto que se escribe solo',
        'snippets.title': 'Abreviaturas que se expanden, con variables que te pregunta',
        'snippets.subtitle':
            'Escribes un atajo corto y aparece el texto completo, con formato o en plano, con las variables rellenadas al vuelo, en cualquier campo de texto de cualquier web.',
        'snippets.f1.title': 'Variables escritas {{así}}',
        'snippets.f1.desc':
            'Dale un valor por defecto con {{nombre|hola}} y se rellena solo salvo que digas otra cosa. El editor comprueba la sintaxis mientras escribes, así que un snippet roto no llega a guardarse.',
        'snippets.f2.title': 'Con formato, o en plano a propósito',
        'snippets.f2.desc':
            'Un editor de texto enriquecido para negritas, listas y enlaces; añade # al final del atajo y ese mismo snippet se pega sin formato ninguno.',
        'snippets.f3.title': '$$ abre los que más usas',
        'snippets.f3.desc':
            'En cualquier campo de texto, incluidos Google Docs, Word Online y WhatsApp, donde los expansores normales se rinden.',
        'omnibar.m.footer': 'Y el resto:',
        'omnibar.m.f1': 'notas',
        'omnibar.m.f2': 'capturas',
        'omnibar.m.f3': 'reglas',
        'omnibar.m.f4': 'copias',
        'reader.m.articleTitle': 'Qué conserva el lector y qué tira',
        'reader.m.articleMeta': 'Modo lectura · el artículo y nada más',
        'reader.m.bodyA':
            'El lector saca el artículo de su maquetación: sin menús, sin banners, sin cajas flotantes. Después el reproductor lo lee, y el párrafo en el que va queda marcado, junto con la ',
        'reader.m.mark': 'palabra',
        'reader.m.bodyB': ' que suena, con la opacidad que tú elijas.',
        'reader.m.tail':
            'El idioma, la velocidad, el tono y el volumen los pones tú, y las dos marcas conservan los colores del tema que lleve puesto la extensión.',
        'bookmarks.m.title': 'Marcadores',
        'bookmarks.m.search': 'astro',
        'bookmarks.m.folder1': 'Frontend',
        'bookmarks.m.folder2': 'Para leer después',
        'bookmarks.m.folder3': 'Referencias de diseño',
        'bookmarks.m.folder4': 'Barra de marcadores',
        'bookmarks.m.i4': 'genkipool/workspace',
        'bookmarks.m.i1': 'Astro · Enrutado',
        'bookmarks.m.i2': 'Astro · Islas de servidor',
        'bookmarks.m.i3b': 'Transiciones de vista · MDN',
        'snippets.m.triggerLabel': 'En cualquier campo de texto, escribe $$',
        'snippets.m.result': 'Revisado y aprobado. Probado en {{rama}}.',
        'snippets.m.search': 'Buscar snippets…',
        'snippets.m.s2': 'Hola {{nombre}}, gracias por escribir sobre {{tema}}…',
        'snippets.m.s3': '{{fecha|hoy}}',
        'snippets.m.p1': 'texto plano, sin formato',
        'snippets.m.p2': 'abre los cinco que más usas',
        'snippets.m.p3': 'valor por defecto',
        'snippets.m.p3code': '{{fecha|hoy}}',
        'fhub.keys.mockup.badge': 'Etiquetas de enlace y snippets',
        'fhub.keys.mockup.latency': 'Todas las teclas reasignables',
        'fhub.keys.mockup.hintsLabel': 'Pulsa f y escribe la etiqueta',
        'fhub.keys.mockup.linkDoc': 'Documentación',
        'fhub.keys.mockup.linkSettings': 'Precios',
        'fhub.keys.mockup.linkDeploy': 'Entrar',
        'fhub.keys.mockup.snippetLabel': 'Snippet con variables',
        'fhub.keys.mockup.snippetTrigger': 'Escribes:',
        'fhub.keys.mockup.snippetResult': 'Revisado y aprobado. Probado en {{rama}}.',
        'fhub.keys.mockup.snippetSearch': 'Buscar snippets…',
        'fhub.keys.mockup.pageTitle': 'Cualquier página, con las etiquetas puestas',
        'fhub.keys.mockup.pageBodyA':
            'Pulsa f y cada enlace, botón y campo de la página lleva una o dos letras. Las escribes y se abre; con Ctrl se abre en una pestaña de fondo. Funciona en ',
        'fhub.keys.mockup.pageLink': 'este también',
        'fhub.keys.mockup.pageBodyB':
            ', y en cualquier campo de texto de la página dos signos de dólar abren los snippets que más usas.',
        'fhub.media.mockup.badge': 'Reproductor de música',
        'fhub.media.mockup.searchPlaceholder': 'Buscar pista…',
        'fhub.media.mockup.tabMusic': 'Música',
        'fhub.media.mockup.tabRadio': 'Radio',
        'fhub.media.mockup.tabAll': 'Todo',
        'fhub.media.mockup.savedStations': 'Emisoras guardadas',
        'fhub.media.mockup.folder': 'Concentración',

        // Swiss Army Bento Grid & 18-Tool Arsenal (Expanded)
        'bento.badge': 'El inventario completo',
        'bento.title': 'La caja de herramientas entera, en un panel lateral y sin telemetría',
        'bento.subtitle':
            'Todo lo de abajo viene en la extensión hoy y funciona en tu propia máquina. Filtra por lo que hayas venido a buscar.',
        'bento.filter.all': 'Todo',
        'bento.filter.tabs': 'Pestañas y espacios',
        'bento.filter.productivity': 'Productividad',
        'bento.filter.tools': 'Utilidades rápidas',

        // 1. AI Grouping
        'bento.aiGrouping.title': 'Agrupación automática y motor de reglas',
        'bento.aiGrouping.desc':
            'Cada pestaña nueva cae en el grupo que decide una regla: una regla es una lista de fragmentos de URL, y cualquier dirección que contenga uno de ellos le pertenece. Lo que no tiene regla se agrupa por dominio, subdominio, dirección IP o archivo local.',
        'bento.aiGrouping.tag': 'Motor de pestañas',
        'bento.aiGrouping.badge': 'Reglas, colores y temporizadores',
        'bento.aiGrouping.h1': 'Reglas por fragmento de URL, más dominio, subdominio, IP y archivos',
        'bento.aiGrouping.h2': 'Un color y un nombre fijos por regla',
        'bento.aiGrouping.h3': 'Importa, exporta y reordena tus reglas',

        // 2. Hibernation & RAM Saver
        'bento.hibernation.title': 'Pestañas paradas suspendidas, grupos respaldados',
        'bento.hibernation.desc':
            'Las pestañas que llevan una hora o más sin tocarse las suspende el propio Chrome: conservan su título y su sitio en la barra y se recargan al hacer clic. Los grupos enteros se respaldan y se restauran después.',
        'bento.hibernation.tag': 'Memoria',
        'bento.hibernation.badge': 'Suspender y restaurar',
        'bento.hibernation.h1': 'Umbral de inactividad configurable antes de suspender',
        'bento.hibernation.h2': 'Respalda todos los grupos y restáuralos con una tecla',
        'bento.hibernation.h3': 'Sesiones guardadas que puedes reabrir días después',

        // 3. Tab Tree & Subgroups
        'bento.tabTree.title': 'La lista de grupos, con una fila por pestaña',
        'bento.tabTree.desc':
            'Cada grupo de la ventana como una tarjeta que se pliega, se renombra, se recolorea y se reordena, con sus pestañas listadas dentro y agrupadas en subgrupos por dominio.',
        'bento.tabTree.tag': 'Panel lateral',
        'bento.tabTree.badge': 'Subgrupos por dominio',
        'bento.tabTree.h1': 'Plegar, renombrar, recolorear y ocultar un grupo',
        'bento.tabTree.h2': 'Por pestaña: silenciar, fijar, QR, pantalla dividida, PiP',
        'bento.tabTree.h3': 'Arrastra para reordenar; la pestaña activa se centra sola',

        // 4. Recently Closed Restore
        'bento.recentClosed.title': 'Cerradas recientemente y sesiones guardadas',
        'bento.recentClosed.desc':
            'Las pestañas y ventanas que cerraste, en el orden en que las cerraste, cada una a un clic de volver. La sesión actual se puede guardar y reabrir más tarde.',
        'bento.recentClosed.tag': 'Recuperación',
        'bento.recentClosed.badge': 'Pestañas y ventanas',
        'bento.recentClosed.h1': 'Una ventana cerrada entera restaurada con un clic',
        'bento.recentClosed.h2': 'Accesible desde el omnibar con c:',
        'bento.recentClosed.h3': 'Guarda la sesión actual y reábrela otro día',

        // 5. Bookmarks Manager & Auditor
        'bento.bookmarks.title': 'Árbol de marcadores, con revisión de enlaces',
        'bento.bookmarks.desc':
            'Busca en todas las carpetas, créalas y renómbralas, arrastra e importa o exporta el conjunto. Y luego un escaneo que visita cada dirección guardada y reúne las que ya no responden.',
        'bento.bookmarks.tag': 'Marcadores',
        'bento.bookmarks.badge': 'Buscar, editar y escaneo de enlaces rotos',
        'bento.bookmarks.h1': 'Busca en todo el árbol según escribes',
        'bento.bookmarks.h2': 'Convierte un marcador o una carpeta en una regla',
        'bento.bookmarks.h3': 'Enlaces rotos ordenados por 4xx, 5xx, tiempo agotado o error de conexión',

        // 6. Downloads Manager
        'bento.downloads.title': 'Descargas, agrupadas por fecha',
        'bento.downloads.desc':
            'Tus descargas en el panel lateral, agrupadas por día, filtradas por estado y buscables por nombre de archivo o URL, con la carpeta del sistema a un botón.',
        'bento.downloads.tag': 'Panel lateral',
        'bento.downloads.badge': 'Filtro por estado y fecha',
        'bento.downloads.h1': 'Completadas, en curso e interrumpidas, filtradas aparte',
        'bento.downloads.h2': 'Borra una, un día entero o todo el historial',
        'bento.downloads.h3': 'Encuentra y descarga archivos de la página en la que estás',

        // 7. Smart History & Calendar
        'bento.history.title': 'Historial, por día y por fecha',
        'bento.history.desc':
            'Tu historial agrupado en días, con un calendario para saltar a uno, una búsqueda que filtra según escribes y un borrado que funciona sobre una entrada o sobre un día completo.',
        'bento.history.tag': 'Historial',
        'bento.history.badge': 'Filtro de calendario',
        'bento.history.h1': 'Elige una fecha en el calendario y salta a ella',
        'bento.history.h2': 'Busca por palabra clave en todo lo registrado',
        'bento.history.h3': 'Borra una entrada o un día entero, con confirmación',

        // 8. Quick Notes, Markdown & Kanban
        'bento.notes.title': 'Notas, listas de tareas y tableros Kanban',
        'bento.notes.desc':
            'Tres clases de nota en el mismo panel: texto con formato, una lista que cuenta lo hecho y un tablero Por hacer / En curso / Hecho. Las notas de voz y los archivos adjuntos también viven ahí.',
        'bento.notes.tag': 'Notas',
        'bento.notes.badge': 'Texto, lista, Kanban',
        'bento.notes.h1': 'Listas y tableros que muestran su propio progreso',
        'bento.notes.h2': 'Notas de voz, y PDF o imágenes vistos en el panel',
        'bento.notes.h3': 'Buscables desde el omnibar con lnt:',

        // 9. Reader Mode & TTS
        'bento.readerTts.title': 'Modo lectura y lectura en voz alta',
        'bento.readerTts.desc':
            'La página reducida a su artículo, y un reproductor flotante que te la lee resaltando el párrafo y la palabra en la que va.',
        'bento.readerTts.tag': 'Lectura',
        'bento.readerTts.badge': 'Resaltado palabra a palabra',
        'bento.readerTts.h1': 'Idioma, velocidad, tono y volumen, todo ajustable',
        'bento.readerTts.h2': 'La opacidad del resaltado la eliges tú',
        'bento.readerTts.h3': 'Oscuro, sepia, escala de grises o claro, por pestaña o en todas',

        // 10. Screenshot Studio & 30k Crawler
        'bento.screenshotStudio.title': 'Capturas, galería y OCR',
        'bento.screenshotStudio.desc':
            'Captura un área seleccionada o recorre la página entera en una sola imagen, hasta 30.000 píxeles de alto. Todo cae en una galería local, y el texto que hay dentro de una captura se puede extraer.',
        'bento.screenshotStudio.tag': 'Captura',
        'bento.screenshotStudio.badge': 'Página completa y OCR',
        'bento.screenshotStudio.h1': 'Captura de área con ca, página completa con cs',
        'bento.screenshotStudio.h2': 'Reconocimiento de texto en tu equipo, no en un servidor',
        'bento.screenshotStudio.h3': 'Guarda en PNG o PDF, o copia directamente al portapapeles',

        // 11. Activity & Analytics Dashboard
        'bento.analytics.title': 'Actividad web, límites y bloqueo',
        'bento.analytics.desc':
            'Cuánto se lleva cada sitio, por categorías, hoy en el panel y a lo largo del tiempo en una página completa. Y luego un tope diario, otro semanal y un horario, y un sitio que se bloquea de verdad cuando se agota uno.',
        'bento.analytics.tag': 'Tiempo',
        'bento.analytics.badge': 'Topes, horarios y contraseña',
        'bento.analytics.h1': 'Visitas, tiempo por visita y parte del día, por sitio',
        'bento.analytics.h2': 'Rejilla hora a hora, categorías, rachas y línea de tiempo',
        'bento.analytics.h3': 'Una contraseña antes de poder desactivar una regla',

        // 12. Overflow Menu & Mass Actions
        'bento.overflow.title': 'Acciones masivas sobre toda la ventana',
        'bento.overflow.desc':
            'Lo que quieres hacer sobre cuarenta pestañas a la vez: silenciarlas todas, limpiar las duplicadas, plegar o desplegar todos los grupos, cerrar todos menos en el que estás y eliminar los vacíos.',
        'bento.overflow.tag': 'Acciones en lote',
        'bento.overflow.badge': 'Contador de duplicadas',
        'bento.overflow.h1': 'Un contador vivo de pestañas duplicadas, limpiadas de un clic',
        'bento.overflow.h2': 'Silencia o reactiva todas las pestañas a la vez',
        'bento.overflow.h3': 'Plegar todo, cerrar el resto de grupos, borrar los vacíos',

        // 13. Split Screen
        'bento.splitScreen.title': 'Pantalla dividida, una al lado de la otra',
        'bento.splitScreen.desc':
            'Pon dos pestañas abiertas una al lado de la otra en la misma ventana, para leer en una mientras escribes en la otra. Cada una sigue navegando por su cuenta.',
        'bento.splitScreen.tag': 'Multitarea',
        'bento.splitScreen.badge': 'Una al lado de la otra',
        'bento.splitScreen.h1': 'ts en la página, o ts: en el omnibar',
        'bento.splitScreen.h2': 'Elige en el omnibar qué pestañas emparejar',
        'bento.splitScreen.h3': 'Vuelta a una sola ventana cuando quieras',

        // 14. Picture-in-Picture Hub
        'bento.pipHub.title': 'Picture-in-picture, de vídeo o de página entera',
        'bento.pipHub.desc':
            'Una ventana flotante que se queda encima: un vídeo de YouTube, Shorts, TikTok o cualquier reproductor HTML5, o la propia página como picture-in-picture de documento.',
        'bento.pipHub.tag': 'Ventanas flotantes',
        'bento.pipHub.badge': 'Sale flotando sola',
        'bento.pipHub.h1': 'Flota al pasar el vídeo con el scroll, o al irte de la pestaña',
        'bento.pipHub.h2': 'La página entera flotando con wp, o como emergente con we',
        'bento.pipHub.h3': 'Un botón de bucle añadido dentro de YouTube y Shorts',

        // 15. In-Browser OCR & QR Studio
        'bento.ocrScanner.title': 'OCR y códigos QR',
        'bento.ocrScanner.desc':
            'Extrae el texto de una captura sin enviarla a ninguna parte, descodifica un QR que aparezca en una imagen y genera uno de la pestaña en la que estás.',
        'bento.ocrScanner.tag': 'Herramientas locales',
        'bento.ocrScanner.badge': 'Nada sale del equipo',
        'bento.ocrScanner.h1': 'Reconocimiento de texto dentro del propio navegador',
        'bento.ocrScanner.h2': 'Lectura de QR, con el detector del navegador cuando lo hay',
        'bento.ocrScanner.h3': 'Un QR de la pestaña actual, para abrirla en el móvil',

        // 16. Screen Color Picker & Magnifier
        'bento.colorPicker.title': 'Cuentagotas de pantalla con lupa',
        'bento.colorPicker.desc':
            'Una lente que amplía trece por trece píxeles bajo el cursor y copia el color en el que haces clic. Funciona en Linux, donde el cuentagotas propio de Chrome no existe.',
        'bento.colorPicker.tag': 'Diseño',
        'bento.colorPicker.badge': 'Lente de 13 × 13',
        'bento.colorPicker.h1': 'Lente ampliada sobre la página en vivo',
        'bento.colorPicker.h2': 'El color va directo al portapapeles',
        'bento.colorPicker.h3': 'Alimenta la paleta del editor de temas',

        // 17. Cookie Cleaner & Editor
        'bento.cookieManager.title': 'Editor de cookies',
        'bento.cookieManager.desc':
            'Mira las cookies que ha puesto un sitio, edita un valor, cambia una caducidad o bórralas, desde el panel lateral y sin abrir las herramientas de desarrollo.',
        'bento.cookieManager.tag': 'Desarrollo',
        'bento.cookieManager.badge': 'Por dominio',
        'bento.cookieManager.h1': 'Crea, edita y borra las cookies de un sitio',
        'bento.cookieManager.h2': 'Vacía un dominio para probar la sesión cerrada',
        'bento.cookieManager.h3': 'Accesible desde la fila de la pestaña a la que pertenece',

        // 18. Viridian Theme Studio
        'bento.themeStudio.title': 'Editor de temas, con horario',
        'bento.themeStudio.desc':
            'Construye una paleta con un editor de colores y repinta la propia interfaz de la extensión. Guarda los que quieras, reordénalos y haz que uno se active solo a una hora fijada.',
        'bento.themeStudio.tag': 'Apariencia',
        'bento.themeStudio.badge': 'Temas programados',
        'bento.themeStudio.h1': 'Temas que se activan a una hora o en ciertos días',
        'bento.themeStudio.h2': 'Importa, exporta y sincroniza entre tus navegadores',
        'bento.themeStudio.h3': 'Colores de grupo tomados del favicon de cada web',

        // 19. QR Code Studio & Scanner
        'bento.qrTools.title': 'Generador y Escáner QR',
        'bento.qrTools.desc':
            'Genera códigos QR de cualquier pestaña o texto en 1 clic y escanea códigos directamente desde la pantalla sin herramientas externas.',
        'bento.qrTools.tag': 'Utilidad Rápida',
        'bento.qrTools.badge': 'Nativo',
        'bento.qrTools.h1': 'Generación instantánea de QR para pestañas y URLs',
        'bento.qrTools.h2': 'Escaneo directo en pantalla sin cámara externa',
        'bento.qrTools.h3': 'Exportación en PNG de alta resolución y SVG vectorial',

        // 20. Online Radio
        'bento.radio.title': 'Radio online, con el directorio incluido',
        'bento.radio.desc':
            'Busca en el directorio de Radio Browser por nombre, país o etiqueta, o pega tú mismo la dirección de una emisión. Las emisoras que guardes viven en el mismo reproductor que tus archivos, en su propia pestaña.',
        'bento.radio.tag': 'Radio',
        'bento.radio.badge': 'Emisiones en directo',
        'bento.radio.h1': 'Miles de emisoras que buscar, o una dirección que pegas tú',
        'bento.radio.h2': 'Exporta e importa la lista en JSON',
        'bento.radio.h3': 'Sincronización opcional de tus emisoras entre los Chrome con tu sesión iniciada',

        // 21. Music Player
        'bento.musicPlayer.title': 'Un reproductor de música, en el panel lateral',
        'bento.musicPlayer.desc':
            'Le das una carpeta, o un puñado de archivos, y suenan junto a la página que estás leyendo. El sonido lo produce un documento offscreen y no el panel, así que ocultar el cajón, cambiar de vista o cerrar la página no detiene la música.',
        'bento.musicPlayer.tag': 'Audio',
        'bento.musicPlayer.badge': 'Sigue sonando oculto',
        'bento.musicPlayer.h1':
            'Una carpeta o una selección de archivos, agrupados por carpeta y reordenables arrastrando',
        'bento.musicPlayer.h2':
            'Barra de posición, saltos de diez segundos, volumen y silencio, y los mismos controles bajo el botón de la barra',
        'bento.musicPlayer.h3':
            'No se sube nada: la carpeta se lee en tu equipo y se guarda en tu propio navegador',

        // Legacy compatibility keys for footer
        'bento.c1.title': 'Pantalla Dividida (Split Screen)',
        'bento.c2.title': 'Picture-in-Picture de Vídeo',
        'bento.c3.title': 'Capturas de Pantalla con OCR',
        'bento.c4.title': 'Selector de Color y Cuentagotas',
        'bento.c6.title': 'Taller de Temas Viridian',

        // Comparison Matrix
        'comp.badge': 'Comparativa',
        'comp.title': 'Un entorno unificado donde antes había dispersión',
        'comp.subtitle':
            'Cada flujo de trabajo se integra de forma natural en un único panel lateral de productividad. Una interfaz coherente, atajos unificados, privacidad local y sin telemetría.',
        'comp.colFeature': 'Capacidad',
        'comp.colStandard': 'Herramientas dispersas',
        'comp.colIw': 'Intelligent Workspace',
        'comp.r1.feature': 'Pestañas, grupos y sesiones',
        'comp.r1.standard':
            'Herramientas separadas para agrupar, guardar sesiones y ver barras laterales: tres interfaces distintas, atajos en conflicto y flujos incompatibles.',
        'comp.r1.iw':
            'Reglas por fragmento de URL; agrupación por dominio, subdominio e IP; temporizadores de plegado; copia y restauración de grupos; cerradas recientemente y sesiones guardadas.',
        'comp.r2.feature': 'Memoria y pestañas paradas',
        'comp.r2.standard':
            'Un suspensor que sustituye tu pestaña por su propia página de aviso, y que se lleva la pestaña por delante si algún día lo desinstalas.',
        'comp.r2.iw':
            'La suspensión propia de Chrome tras una hora sin uso: la pestaña conserva su título y su sitio, y despierta al hacer clic.',
        'comp.r3.feature': 'IA en la barra lateral',
        'comp.r3.standard':
            'Un panel de chat que sabe leer la página y poco más: no puede cerrar una pestaña, ni crear un grupo, ni escribir una regla.',
        'comp.r3.iw':
            'Cincuenta y ocho herramientas enganchadas al navegador, más resúmenes, conversaciones guardadas, preguntas programadas y el modelo local de Chrome cuando se acaba la cuota.',
        'comp.r4.feature': 'Búsqueda y control por teclado',
        'comp.r4.standard':
            'Herramientas sueltas para paletas de comandos y navegación por teclado, con teclas en conflicto y menús de ajustes divididos.',
        'comp.r4.iw':
            'Un omnibar flotante con un prefijo por fuente, etiquetas de letra en cada enlace y todas las combinaciones editables en un mismo sitio.',
        'comp.r5.feature': 'Notas, marcadores, historial, descargas',
        'comp.r5.standard':
            'Una app de notas con cuenta, un gestor de marcadores con suscripción y las páginas de Chrome para todo lo demás.',
        'comp.r5.iw':
            'Notas, listas de tareas y tableros Kanban, el árbol de marcadores, el historial, las cerradas recientemente, la lista de lectura y las descargas, en el mismo panel y en local.',
        'comp.r6.feature': 'Tiempo de pantalla y bloqueo',
        'comp.r6.standard':
            'Un medidor que sube tu navegación al servidor de alguien, y un bloqueador que se esquiva abriendo otra pestaña.',
        'comp.r6.iw':
            'Tiempo por sitio y por categoría solo en este equipo, topes diarios y semanales, franjas horarias y una pantalla de bloqueo que puede pedir contraseña.',
        'comp.r7.feature': 'Capturas, OCR, QR, cookies, color',
        'comp.r7.standard':
            'Múltiples utilidades sueltas, cada una con su propia configuración, sobrecargando la barra de navegación.',
        'comp.r7.iw':
            'Captura de página completa y de área con galería local, OCR en tu propio equipo, lector y generador de QR, editor de cookies y cuentagotas de pantalla.',
        'comp.deck.badTitle': 'Flujos fragmentados',
        'comp.deck.badDesc':
            'Múltiples herramientas desconectadas, con atajos en conflicto e interfaces dispersas, a menudo enviando tus datos a servidores externos.',
        'comp.deck.goodTitle': 'Una sola estación de trabajo',
        'comp.deck.goodDesc':
            'Una extensión Manifest V3, un panel lateral, un único sitio donde se definen todos los atajos y un almacenamiento que no sale de este equipo.',
        'comp.eyebrow': 'Cara a cara',

        // Legacy & Shared Feature Keys

        // Keyboard Section
        'kb.title': 'Suelta el ratón.',
        'kb.desc':
            'Tres vías de entrada, y ninguna necesita el ratón: un buscador que flota sobre la página, etiquetas de letra dibujadas sobre los propios enlaces, y los atajos a nivel de navegador. Todas las teclas se pueden reasignar.',
        'kb.zoneA.badge': 'Omnibar flotante',
        'kb.zoneA.title': 'Pulsa o, o escribe find en la barra de direcciones',
        'kb.zoneA.desc':
            'Una sola caja, y un prefijo por fuente. Escribe @ si no recuerdas alguno y te los lista todos.',
        'kb.zoneB.badge': 'Sobre la página',
        'kb.zoneB.title': 'Etiquetas de letra y teclas de página',
        'kb.zoneB.desc':
            'Una o dos letras, escritas sobre la propia página. Con las etiquetas activas, cada enlace y cada campo lleva la suya.',
        'kb.zoneC.badge': 'A nivel de navegador',
        'kb.zoneC.title': 'Atajos de Chrome y teclas de panel',
        'kb.zoneC.desc':
            'Las cuatro combinaciones a nivel de Chrome, y las teclas de página que abren una u otra vista del panel lateral.',

        // Action Keys (Omnibar & Zone B)
        'shortcut.global.fold': 'Plegar o desplegar el grupo actual',
        'shortcut.global.dedup': 'Plegar o desplegar todos los grupos',
        'shortcut.global.sort': 'Ordenar las pestañas alfabéticamente',
        'shortcut.global.panel': 'Abrir el panel principal',
        'shortcut.global.omnibar': 'Panel lateral con la lista de grupos',
        'shortcut.global.activity': 'Panel lateral con la actividad web',
        'shortcut.global.dark': 'Modo oscuro en esta pestaña',
        'shortcut.global.mute': 'Silenciar o reactivar todas las pestañas',

        'shortcut.omnibar.search': 'Abrir el omnibar sobre la página',
        'shortcut.omnibar.tab': 'Listar todos los prefijos que hay',
        'shortcut.omnibar.mute': 'Buscar en tus marcadores',
        'shortcut.omnibar.clean': 'Buscar en tu historial',
        'shortcut.omnibar.book': 'Buscar en las pestañas cerradas recientemente',
        'shortcut.omnibar.note': 'Buscar texto dentro de la página actual',
        'shortcut.omnibar.split': 'Pantalla dividida con las pestañas que elijas',
        'shortcut.omnibar.agent': 'Encargarle la tarea al agente de IA',

        'shortcut.hint.open': 'Etiquetar cada enlace; Ctrl lo abre de fondo y Mayús en otra ventana',
        'shortcut.hint.newtab': 'Etiquetar cada enlace y copiar su URL en vez de abrirlo',
        'shortcut.hint.yank': 'Enfocar el primer campo de texto de la página',
        'shortcut.hint.scroll': 'Bajar / subir en la página',
        'shortcut.hint.split': 'Abrir esta pestaña en pantalla dividida',
        'shortcut.hint.pip': 'Sacar el vídeo a una ventana flotante',
        'shortcut.hint.aloud': 'Leer la página en voz alta',
        'shortcut.hint.close': 'Cerrar la pestaña actual',

        // Category Sub-badges
        'shortcut.cat.tabs': 'Pestañas',
        'shortcut.cat.organise': 'Listas',
        'shortcut.cat.panel': 'Panel lateral',
        'shortcut.cat.omnibar': 'Omnibar',
        'shortcut.cat.hints': 'Etiquetas',
        'shortcut.cat.clipboard': 'Portapapeles',
        'shortcut.cat.navigation': 'En la página',
        'shortcut.cat.split': 'Pantalla dividida',
        'shortcut.cat.media': 'Multimedia',
        'shortcut.cat.agent': 'Agente IA',
        'shortcut.cat.reader': 'Lectura',
        'shortcut.cat.display': 'Modo de pantalla',

        // Privacy & Permissions
        'trust.heading': 'Transparencia y Control Total de Permisos',
        'trust.lede':
            'Chrome te dirá que esta extensión pide {count} permisos. Es razonable desconfiar de eso, así que aquí tienes para qué es cada grupo. No se sube nada, porque no hay sitio al que subirlo.',
        'trust.colPermissions': 'Permisos del Manifest V3',
        'trust.colPurpose': 'Finalidad y Justificación',
        'trust.tabs':
            'Leer, agrupar, plegar, suspender y restaurar tus pestañas, y poner dos de ellas una al lado de la otra.',
        'trust.lists':
            'El árbol de marcadores, el historial, la lista de lectura y las descargas en el panel lateral, y el botón que abre la carpeta de descargas.',
        'trust.pages':
            'Las etiquetas de letra, el modo lectura, los snippets y el picture-in-picture sobre las páginas web, y el bloqueo que hace un límite de actividad web.',
        'trust.state':
            'Guardar tus ajustes, mantener el temporizador Pomodoro y las consultas de IA programadas, detectar cuándo te alejas para que el reloj se pare, y hacer sonar el aviso.',
        'trust.cookies': 'El editor de cookies, y nada más.',
        'trust.entry':
            'El propio panel lateral, el menú del botón derecho y los comandos de teclado que puedes reasignar en Chrome.',
        'trust.tell':
            'Los avisos del Pomodoro y de los límites de tiempo, y copiar al portapapeles una URL, una captura o un color.',
        'trust.chrome':
            'Los iconos de los sitios en cada lista, y el tamaño de la pantalla, que la pantalla dividida y las ventanas flotantes necesitan para colocarse.',
        'trust.hosts':
            'Un permiso de host, no de API, y la razón por la que esas funciones de página pueden ejecutarse en cualquier sitio en vez de en una lista que Chrome tendría que aprobar.',
        'trust.source': 'El código fuente es público. Cada línea se puede auditar y comprobar en GitHub.',
        'trust.sourceCta': 'Auditar en GitHub',
        'trust.policyCta': 'Leer la política de privacidad',

        'trust.card1.title': 'Se queda en esta máquina',
        'trust.card1.desc':
            'Grupos, reglas, notas, capturas, registros de tiempo e historial del Pomodoro viven en el almacenamiento del propio navegador. No hay servidor al que mandarlos.',
        'trust.card2.title': 'Tu clave de IA, tu tráfico',
        'trust.card2.desc':
            'La clave de Google AI Studio que pegas se guarda en local y se usa para hablar con Google directamente. El modelo local de Chrome no necesita clave ni conexión.',
        'trust.card3.title': 'Sin analíticas ni anuncios',
        'trust.card3.desc':
            'Sin píxel de seguimiento, sin huella digital, sin servidor de telemetría y sin nada que haya que desactivar en los ajustes.',

        // Privacy Policy: the standalone /privacy page
        'privacy.meta.title': 'Política de Privacidad | Intelligent Workspace',
        'privacy.meta.description':
            'Qué guarda Intelligent Workspace, dónde lo guarda y las contadas veces que algo sale de tu navegador. Sin cuenta, sin servidor nuestro y sin analíticas dentro de la extensión.',
        'privacy.eyebrow': 'Legal',
        'privacy.title': 'Política de Privacidad',
        'privacy.effective': 'En vigor desde el',
        'privacy.lede':
            'No hay cuenta que crear, no hay servidor nuestro con el que hablar y no hay nada en la extensión que informe de vuelta. Eso deja este documento corto en promesas y largo en detalles: qué se guarda, dónde está y cada momento en que algo cruza la red.',
        'privacy.back': 'Volver al sitio',
        'privacy.toc': 'En esta página',

        'privacy.sum1.title': 'Sin cuenta, sin servidor',
        'privacy.sum1.desc':
            'Nada de lo que haces en la extensión se nos envía. No hay un «nosotros» al otro lado: ni backend, ni base de datos, ni registro con tu nombre.',
        'privacy.sum2.title': 'Tu clave, tu tráfico',
        'privacy.sum2.desc':
            'El asistente habla con Google usando la clave que tú pegaste, desde tu navegador y con tu cuota. No hay ningún proxy nuestro en medio que pueda leerlo.',
        'privacy.sum3.title': 'No se vende nada, nunca',
        'privacy.sum3.desc':
            'Sin publicidad, sin intermediarios de datos, sin servidor de telemetría y sin un perfil tuyo que nadie pueda comprar.',

        // The first layer the AEPD asks for: the six answers a reader is entitled to
        // before deciding whether to read the rest.
        'privacy.basic.heading': 'Información básica sobre protección de datos',
        'privacy.basic.controller': 'Responsable',
        'privacy.basic.controllerV': 'Luis Reoyo (GENKI Organización), España.',
        'privacy.basic.purpose': 'Finalidad',
        'privacy.basic.purposeV':
            'Hacer funcionar las funciones de la extensión en tu propio dispositivo y servir esta web.',
        'privacy.basic.basis': 'Base jurídica',
        'privacy.basic.basisV':
            'Tu consentimiento, prestado al instalar la extensión y al activar cada función opcional, y nuestro interés legítimo en servir y proteger la web.',
        'privacy.basic.recipients': 'Destinatarios',
        'privacy.basic.recipientsV':
            'Ninguno por defecto. Una función que actives tú puede llegar a Google, al directorio de radio, a YouTube, a jsDelivr, a Stripe o a Vercel, y todas están en la sección 5.',
        'privacy.basic.transfers': 'Transferencias',
        'privacy.basic.transfersV':
            'Esos proveedores están fuera del EEE. La petición la hace tu navegador y solo cuando tú la pides. La sección 6 explica las garantías.',
        'privacy.basic.rights': 'Tus derechos',
        'privacy.basic.rightsV':
            'Acceso, rectificación, supresión, limitación, portabilidad, oposición y retirada del consentimiento. Casi todos los ejerces tú mismo, desde el panel. Sección 14.',

        'privacy.scope.title': 'Dos cosas distintas, una sola política',
        'privacy.scope.p1':
            'Esto cubre la extensión de Chrome y la web que estás leyendo. Son dos programas separados con dos historias de privacidad separadas, y mezclarlas es justo lo que vacía de sentido a una política. Cuando una regla se aplica a una y no a la otra, aquí se dice.',
        'privacy.scope.p2':
            'Ambas las publica Luis Reoyo (GENKI Organización), que es además el responsable del tratamiento de lo poco que maneja la web. No hay delegado de protección de datos designado, porque la escala de este tratamiento no lo exige según el artículo 37 del RGPD. Todo lo que dice este documento se puede contrastar con el código fuente, que es público.',

        'privacy.basis.title': 'Por qué se trata cada cosa, y con qué base jurídica',
        'privacy.basis.p1':
            'El RGPD pide una base jurídica por finalidad, no una para todo el producto, así que aquí están, una línea cada una.',
        'privacy.basis.li1':
            'Hacer funcionar las funciones en tu dispositivo: tu consentimiento, prestado al instalar la extensión y de nuevo al activar una función opcional como el registro de actividad o el asistente. Artículo 6.1.a.',
        'privacy.basis.li2':
            'Enviar una consulta a Google, buscar en el directorio de radio, cargar una miniatura de YouTube o pedir un icono de sitio: tu consentimiento, prestado con la propia acción. No se envía nada hasta que lo pides.',
        'privacy.basis.li3':
            'Servir esta web y mantenerla en pie: nuestro interés legítimo en entregar las páginas que has pedido y en una medición agregada que no lleva identificador. Artículo 6.1.f.',
        'privacy.basis.li4':
            'Tramitar una donación: la ejecución de la operación que has iniciado y los deberes contables que la siguen. Artículos 6.1.b y 6.1.c.',
        'privacy.basis.p2':
            'Donde la base es el consentimiento, puedes retirarlo cuando quieras, y retirarlo es un interruptor en los ajustes, no una solicitud a nosotros. La retirada no deshace el tratamiento ya ocurrido, que en este caso son datos ya escritos en tu propio dispositivo y que puedes borrar tú.',

        'privacy.store.title': 'Qué guarda la extensión, y dónde',
        'privacy.store.p1':
            'Todo lo que la extensión sabe vive en tu propio perfil del navegador, en los dos sitios que Chrome le da a una extensión: sus áreas de almacenamiento y una base de datos IndexedDB. Ninguno de los dos es accesible desde internet, y ninguna parte de la extensión los copia a ningún sitio.',
        'privacy.store.colWhat': 'Qué',
        'privacy.store.colWhere': 'Dónde vive',
        'privacy.store.colLeaves': '¿Sale de esta máquina?',
        'privacy.store.note':
            'Si quitas la extensión desde chrome://extensions se borra todo, bases de datos incluidas. Lo hace Chrome, y no queda nada en ningún otro sitio, porque no hay ningún otro sitio.',

        'privacy.store.r1.what': 'Grupos, reglas, colores y preferencias de agrupación',
        'privacy.store.r1.leaves':
            'Solo a través de la sincronización de perfil de Chrome, si la tienes activada',
        'privacy.store.r2.what': 'Notas, listas de tareas y tableros Kanban',
        'privacy.store.r2.leaves': 'No',
        'privacy.store.r3.what': 'Capturas de pantalla, y el texto que el OCR saca de ellas',
        'privacy.store.r3.leaves': 'No',
        'privacy.store.r4.what': 'Conversaciones con el asistente de IA',
        'privacy.store.r4.leaves': 'No. Las respuestas llegan de Google; la transcripción se queda aquí',
        'privacy.store.r5.what': 'Sesiones guardadas y copias de grupos',
        'privacy.store.r5.leaves': 'Solo dentro de un archivo que exportas tú, a la carpeta que elijas',
        'privacy.store.r6.what': 'Sesiones de Pomodoro y su historial',
        'privacy.store.r6.leaves': 'No',
        'privacy.store.r7.what': 'La música que añades y tus emisoras favoritas',
        'privacy.store.r7.leaves': 'No',
        'privacy.store.r8.what': 'Actividad web: segundos, visitas y sesiones por sitio y por día',
        'privacy.store.r8.leaves':
            'No, salvo que actives la sincronización propia de ese registro, desactivada por defecto',
        'privacy.store.r9.what': 'Snippets, atajos reasignados y preferencias del omnibar',
        'privacy.store.r9.leaves':
            'Solo a través de la sincronización de perfil de Chrome, si la tienes activada',
        'privacy.store.r10.what': 'Tu clave de Google AI Studio',
        'privacy.store.r10.leaves':
            'Nunca se sincroniza. Solo viaja como cabecera de tu propia petición a Google',

        'privacy.sync.title': 'La sincronización de Chrome, y qué se sube a ella',
        'privacy.sync.p1':
            'Algunos ajustes, en concreto reglas, snippets y atajos reasignados, se escriben en el área sincronizada del navegador para que un segundo ordenador con el mismo perfil de Chrome se comporte igual. Esa área es de Chrome, no nuestra: con la sincronización activada, Google la lleva bajo tu cuenta; con ella desactivada, se queda en esta máquina y funciona igual que el almacenamiento local.',
        'privacy.sync.p2':
            'El registro de actividad web se queda fuera a propósito. Sincronizarlo es un interruptor aparte, apagado hasta que tú lo enciendas, porque por dónde ha pasado alguien no es algo que se mande a ningún sitio sin preguntar. Tu clave de API no se sincroniza nunca.',

        'privacy.net.title': 'Cuándo sale algo de tu navegador',
        'privacy.net.p1':
            'Las funciones de abajo salen a la red porque no pueden funcionar de otra manera, y cada una está aquí con qué envía y cuándo. Ninguna sigue un horario ni se queda en segundo plano esperando para llamar a casa.',
        'privacy.net.colWhere': 'Adónde',
        'privacy.net.colWhat': 'Qué se envía',
        'privacy.net.colWhen': 'Cuándo',
        'privacy.net.p2':
            'Y, por supuesto, las webs que abres tú. La extensión ordena las pestañas alrededor de una página; no se coloca entre tú y lo que hay dentro de ella.',

        'privacy.net.r1.what':
            'Tu petición, el texto de la página o la captura que le hayas adjuntado, y tu propia clave de API',
        'privacy.net.r1.when': 'Solo cuando le pides algo al asistente',
        'privacy.net.r2.host': 'El modelo local integrado en Chrome',
        'privacy.net.r2.what':
            'Nada. Se ejecuta dentro de Chrome, en esta máquina, y no hace ninguna petición',
        'privacy.net.r2.when': 'Cuando lo eliges en lugar de Gemini',
        'privacy.net.r3.what': 'El nombre o el género de emisora que escribes, y nada más',
        'privacy.net.r3.when': 'Mientras buscas o exploras la radio en línea',
        'privacy.net.r4.host': 'La emisora a la que le das al play',
        'privacy.net.r4.what':
            'Una petición de audio corriente al servidor de la propia emisora, que ve tu IP como la ve cualquier web',
        'privacy.net.r4.when': 'Mientras suena una emisora',
        'privacy.net.r5.what': 'El identificador del vídeo, para la miniatura y el reproductor incrustado',
        'privacy.net.r5.when': 'Solo con un enlace de YouTube que previsualizas o reproduces',
        'privacy.net.r6.what': 'El dominio de un enlace, para que el omnibar dibuje su icono de sitio',
        'privacy.net.r6.when': 'Mientras el omnibar tiene resultados en pantalla',
        'privacy.net.r7.what': 'Nada sobre ti. Descarga el modelo de idioma del OCR, que Chrome luego cachea',
        'privacy.net.r7.when': 'La primera vez que pasas el OCR por una captura',

        'privacy.transfers.title': 'Transferencias fuera del Espacio Económico Europeo',
        'privacy.transfers.p1':
            'Todos los proveedores de esa tabla son empresas establecidas en Estados Unidos: Google, Vercel, Stripe, la red jsDelivr y el servidor que aloje la emisora que hayas elegido. Una petición a cualquiera de ellos es una transferencia internacional, así que se nombra aquí en vez de dejarla sobreentendida.',
        'privacy.transfers.p2':
            'Dos cosas la limitan. La petición la hace tu navegador, no la reenvía ningún servidor nuestro, y ocurre solo cuando activas la función que la necesita. Google, Vercel y Stripe están certificados en el Marco de Privacidad de Datos UE-EE. UU. y ofrecen además las cláusulas contractuales tipo de la Comisión Europea, que son las garantías en las que se apoyan estas transferencias. Lo que hagan con la petición una vez llega lo rigen sus propias condiciones de privacidad.',

        'privacy.retention.title': 'Cuánto tiempo se conserva todo esto',
        'privacy.retention.p1':
            'Nada de esto tiene una vida útil en servidor, porque no hay servidor que lo guarde. Lo que existe en tu dispositivo se queda hasta que lo borras, y estas son las reglas que sigue.',
        'privacy.retention.li1':
            'Notas, capturas, copias de seguridad, conversaciones, historial del Pomodoro y biblioteca de música: hasta que los borres o quites la extensión.',
        'privacy.retention.li2':
            'El registro de actividad web: los días que fijes en sus propios ajustes, y los días más antiguos se descartan solos.',
        'privacy.retention.li3':
            'Ajustes, reglas y snippets: mientras la extensión esté instalada. Si la sincronización de Chrome llevaba una copia, quitar la extensión borra también esa copia.',
        'privacy.retention.li4':
            'Una consulta enviada a Google, o una búsqueda enviada al directorio de radio: desaparece de aquí en cuanto llega la respuesta. Lo que conserve el servicio que la recibe lo marca su propia política de conservación.',
        'privacy.retention.p2':
            'Esta web no guarda ningún registro de tu visita más allá de los logs de petición que genera su alojamiento, que Vercel rota según su propio calendario, y los recuentos agregados de páginas que describe la sección 10.',

        'privacy.ai.title': 'El asistente de IA',
        'privacy.ai.p1':
            'El asistente funciona de dos maneras y eliges tú cuál. Gemini sale a la red con una clave de Google AI Studio que creas y pegas tú: la petición la hace tu navegador, directa a Google, con tu clave y tu cuota, y la rigen las condiciones de la API de Google, no esta política. No somos parte de ese tráfico, porque no hay ningún servicio nuestro en medio que pudiera serlo.',
        'privacy.ai.p2':
            'La alternativa es el modelo integrado de Chrome, que se ejecuta en tu máquina y no necesita ni clave ni conexión. En ambos casos la conversación se escribe en la base de datos del propio navegador y en ningún otro sitio, y borrarla desde el panel la borra de verdad.',

        'privacy.perm.title': 'Los permisos, y para qué no son',
        'privacy.perm.p1':
            'Chrome te dirá que la extensión pide veinticuatro permisos más acceso a todos los sitios. Son muchos, y desconfiar es el instinto correcto, así que cada grupo está explicado en la portada junto a la función que no puede existir sin él. Ninguno construye un perfil, y ninguno alimenta nada que salga de esta máquina más allá de las conexiones de arriba.',
        'privacy.perm.p2':
            'El acceso a todos los sitios es lo que permite que las etiquetas de enlace, el modo lectura, los snippets y el bloqueo por actividad funcionen en cualquier web y no en una lista que Chrome tendría que aprobar antes. No se usa para leer páginas en segundo plano: esos scripts se despiertan cuando pulsas la tecla que los llama.',
        'privacy.perm.cta': 'Ver la tabla de permisos',

        'privacy.site.title': 'Esta web',
        'privacy.site.p1':
            'La web son un puñado de archivos estáticos en Vercel. No tiene inicio de sesión y no pide nada. La petición de tu navegador llega a los servidores de Vercel, que ven lo que ve cualquier servidor web: una dirección IP, un agente de usuario y la página pedida. Eso es alojamiento, no seguimiento.',
        'privacy.site.p2':
            'Sí se ejecutan aquí dos scripts de medición de Vercel: Analytics, que cuenta visitas sin cookies y sin identificador entre sitios, y Speed Insights, que informa de lo rápido que se dibujó la página. Los dos solo agregan, ninguno te sigue a otra web y la extensión no lleva ninguno de los dos.',
        'privacy.site.p3':
            'La página de donación es la única excepción al «sin marcos de terceros»: carga Stripe, y solo Stripe.',

        'privacy.cookies.title': 'Cookies y almacenamiento local',
        'privacy.cookies.p1':
            'Esta web no pone cookies. Ni de analítica, ni de sesión, ni de consentimiento, y por eso nunca te ha salido un banner pidiéndote que aceptes ninguna.',
        'privacy.cookies.p2':
            'Sí guarda una cosa en tu navegador, y solo después de que actúes tú: al pulsar el conmutador de claro y oscuro se escribe tu elección bajo la clave iw-theme en el almacenamiento local, para que la siguiente página no parpadee con los colores equivocados. Es una preferencia que has pedido tú, guardada en tu propio dispositivo, que nadie más puede leer, y el artículo 22.2 de la LSSI exime exactamente a este tipo de almacenamiento del consentimiento previo. Si borras los datos de navegación desaparece y la web vuelve a seguir el ajuste de tu sistema.',

        'privacy.pay.title': 'Donaciones',
        'privacy.pay.p1':
            'Las donaciones pasan por Stripe. El formulario de tarjeta es el suyo y se ejecuta dentro de su marco, así que el número de tarjeta se escribe en su campo y no toca esta web, ni la única función de servidor que hay detrás, ni la extensión. Esa función hace exactamente una cosa: pedirle a Stripe que cree un pago de entre 1 y 500 euros y devolverle al navegador un testigo válido solo para ese pago.',
        'privacy.pay.p2':
            'Lo que Stripe recoge, y lo que hace con ello, lo rige la política de privacidad de Stripe y no esta. Nosotros no guardamos ningún registro de quién donó, porque aquí no hay base de datos donde guardarlo. Donar es voluntario, no desbloquea nada y no es una suscripción.',

        'privacy.limited.title': 'Uso limitado de la Chrome Web Store',
        'privacy.limited.p1':
            'El uso que Intelligent Workspace hace de la información recibida de las API de Google cumple la Política de Datos de Usuario de la Chrome Web Store, incluidos sus requisitos de Uso Limitado. En concreto: los datos se usan solo para ofrecer las funciones descritas aquí y en la portada; no se venden nunca; no se transfieren a nadie salvo cuando lo exige una función que has activado tú; no se usan para publicidad, perfilado ni solvencia crediticia; y ninguna persona los lee, porque no llegan a ningún sitio donde una persona pudiera hacerlo.',

        'privacy.rights.title': 'Tus datos, y cómo deshacerte de ellos',
        'privacy.rights.p1':
            'Los tienes todos tú, lo que resuelve por sí solo casi todos los derechos habituales. No hay solicitud de exportación que presentar, porque la extensión escribe sus propios datos en un archivo cuando se lo pides. Tampoco hay solicitud de supresión, porque el botón de borrar ya está en el panel.',
        'privacy.rights.li1':
            'Borra una cosa concreta, una nota, una captura, una copia de seguridad o un día de actividad, allí donde se muestra.',
        'privacy.rights.li2':
            'Vacía un área entera desde los ajustes de la extensión, incluidos el registro de actividad y las conversaciones del asistente.',
        'privacy.rights.li3':
            'Quita la extensión en chrome://extensions y Chrome se lleva con ella hasta el último byte de su almacenamiento.',
        'privacy.rights.li4':
            'Desactiva la sincronización de perfil de Chrome, o el interruptor propio del registro de actividad, si prefieres que no suba nada.',
        'privacy.rights.li5':
            'Retira tu consentimiento a cualquier función opcional apagándola, lo que detiene el tratamiento a partir de ese momento.',
        'privacy.rights.li6':
            'Revoca tu clave de Google AI Studio en la consola de Google. Es tu clave en tu cuenta, y revocarla corta el acceso de la extensión al instante.',
        'privacy.rights.p2':
            'Si estás en la UE o el Reino Unido, se aplican los derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición, junto con el derecho a retirar el consentimiento. En la práctica aquí no hay nada sobre lo que actuar, pero escribe a la dirección de abajo y tendrás una respuesta clara sobre qué existe, que es para lo que están esos derechos. La tendrás en menos de un mes.',
        'privacy.rights.p3':
            'También puedes reclamar ante una autoridad de control. En España es la Agencia Española de Protección de Datos, en www.aepd.es.',

        'privacy.legal.title': 'Responsabilidad, menores y ley aplicable',
        'privacy.legal.p1':
            'El responsable del tratamiento es Luis Reoyo (GENKI Organización), España. Se aplica la normativa española y europea de protección de datos: el Reglamento (UE) 2016/679, la Ley Orgánica 3/2018 y la Ley 34/2002 para la propia web.',
        'privacy.legal.p2':
            'Nada de esto es un requisito legal ni contractual. No estás obligado a facilitar ningún dato, y la única consecuencia de no facilitar ninguno es que la función que no has usado no se ejecuta. No hay decisiones automatizadas ni perfilado de ningún tipo, ni al amparo del artículo 22 del RGPD ni de otra forma.',
        'privacy.legal.p3':
            'La extensión es una herramienta de productividad general, no está dirigida a menores y no recoge nada que identificaría a uno, ni a nadie. No hay verificación de edad porque no hay cuenta delante de la que ponerla.',

        'privacy.changes.title': 'Cambios en esta política',
        'privacy.changes.p1':
            'Cuando esta política cambie, la nueva versión sustituirá a esta página y la fecha de arriba se moverá con ella. Cualquier cambio que altere lo que sale de tu navegador se nombrará además en las notas de la versión que lo introduzca, y se avisará en la propia extensión, para que no llegue en silencio.',

        'privacy.contact.title': 'Contacto',
        'privacy.contact.p1':
            'Cualquier duda sobre todo esto, incluidas las que empiezan por «no me lo creo», a la dirección de abajo. El código fuente es público, así que una afirmación de esta página que el código no respalde es un informe de error que merece la pena abrir.',
        'privacy.contact.email': 'Escríbenos',
        'privacy.contact.source': 'Leer el código fuente',

        // Tab Strip & Screenshots

        // Family Categories

        // Team Section
        'team.heading': 'Hecho por una pareja',
        'team.subtitle':
            'Sin inversores ni hojas de ruta dictadas por terceros. Desarrollado con dedicación para quienes exigen un rendimiento impecable y control total en su navegador.',
        'team.dev': 'Arquitectura, IA y Desarrollo Core',
        'team.design': 'Diseño UX/UI y Control de Calidad',
        'team.quote':
            'Creamos Intelligent Workspace porque creemos que tu navegador debe ser tu mejor estación de trabajo, no tu mayor distracción.',
        'team.acknowledgement':
            'Un agradecimiento especial a Flor Chávez por su incansable dedicación en el diseño intuitivo y las pruebas de calidad.',

        // How it works

        // FAQ
        'faq.heading': 'Preguntas Frecuentes',
        'faq.subtitle': 'Todo lo que necesitas saber sobre privacidad, rendimiento y arquitectura.',
        'faq.cost.q': '¿Cuánto cuesta?',
        'faq.cost.a':
            'Intelligent Workspace es totalmente gratuita. No hay funciones de pago ocultas, ni suscripciones, ni publicidad. Las donaciones voluntarias ayudan a mantener el proyecto vivo.',
        'faq.account.q': '¿Necesito registrarme o crear una cuenta?',
        'faq.account.a':
            'No. No hay registros, ni captura de correos, ni servidores de cuentas. Todos tus datos y ajustes se guardan localmente en tu navegador.',
        'faq.ai.q': '¿Cómo funciona la integración con Google Gemini?',
        'faq.ai.a':
            'Pegas tu propia clave gratuita de Google AI Studio; se guarda en el almacenamiento local del navegador y solo se usa cuando le preguntas al asistente, yendo directamente a Google. Puedes guardar más de una, y cuando se les acaba la cuota la extensión pasa al modelo local de Chrome, que no necesita clave y funciona sin conexión.',
        'faq.data.q': '¿Sale algún dato privado de mi equipo?',
        'faq.data.a':
            'Ninguno. Grupos, reglas, notas, capturas, registros de tiempo e historial del Pomodoro los guarda tu propio navegador. El único tráfico saliente es la petición que haces a Google al preguntarle al asistente, y hasta eso desaparece si usas el modelo local.',
        'faq.browsers.q': '¿Qué navegadores son compatibles?',
        'faq.browsers.a':
            'Chrome y los navegadores Chromium que implementan las API de panel lateral y grupos de pestañas: Brave, Edge, Opera, Vivaldi. Firefox y Safari no tienen esas API, así que ahí no puede funcionar. El modelo de IA local es una función de Chrome y necesita un equipo que cumpla sus requisitos; todo lo demás funciona sin él.',
        'faq.source.q': '¿Puedo leer el código fuente?',
        'faq.source.a':
            'Sí. El repositorio entero está en GitHub para que cualquiera pueda auditarlo y abrir un pull request. La licencia es propietaria, no de código abierto: puedes leerlo, compilarlo para tu uso privado y proponer arreglos, pero no republicarlo ni distribuir un derivado.',

        // Final CTA & Donate Band
        'donate.title': 'Apoya el Desarrollo Independiente',
        'donate.eyebrow': 'Gratis, privado y auditable',
        'donate.body':
            'Intelligent Workspace es gratuita, privada y sin publicidad. Si te devuelve el foco y tus tardes, una donación puntual ayuda a continuar su desarrollo.',
        'donate.cta': 'Donar',
        'donate.secured':
            'Pagos gestionados de forma segura a través de Stripe. Nunca guardamos tus datos bancarios.',

        // Payment Page
        'pay.title': 'Apoya Intelligent Workspace',
        'pay.chooseAmount': 'Elige un importe',
        'pay.otherAmount': 'Otro importe',
        'pay.orCard': 'o paga con tarjeta',
        'pay.loading': 'Cargando el formulario de pago seguro…',
        'pay.opensOutside':
            'Se ha abierto en su propia ventana. Termina ahí el pago y este panel se queda como está.',
        'pay.method.card': 'Tarjeta',
        'pay.method.revolutPay': 'Revolut Pay',
        'pay.opensInWindow':
            'Se abren en una ventana propia, donde Chrome sí puede ofrecerte una tarjeta guardada.',
        'pay.redirecting': 'Te llevamos allí para autorizar el pago…',
        'pay.thanks': 'Gracias. Tu donación se ha completado.',
        'pay.notConfigured': 'Las donaciones aún no están configuradas en este despliegue.',
        'pay.donateNow': 'Donar',
        'pay.secured': 'Los pagos los procesa Stripe. Esta página nunca guarda tu tarjeta.',
        'pay.failed': 'No se ha podido completar el pago.',
        'pay.badAmount': 'Elige un importe entre 1 y 500 euros.',
        'pay.walletUnavailable':
            'Ese monedero no está disponible en este dispositivo. Las opciones de abajo sí.',

        // Error Pages
        'errors.badge': 'Código de estado',
        'errors.notFound.title': 'Esta página no existe',
        'errors.notFound.desc':
            'La dirección que has seguido no forma parte de este sitio, o la página a la que apuntaba se ha movido. Todo lo demás sigue donde lo dejaste.',
        'errors.notFound.cta': 'Volver a la página de inicio',
        'errors.notFound.meta': 'Página no encontrada',
        'errors.server.title': 'Algo ha fallado por nuestra parte',
        'errors.server.desc':
            'La página no se ha podido generar. No se ha tocado nada tuyo ni se ha enviado nada a ninguna parte. Inténtalo de nuevo y, si se repite, el código está en GitHub.',
        'errors.server.retry': 'Intentar de nuevo',
        'errors.server.cta': 'Ir a la página de inicio',
        'errors.server.meta': 'Algo ha salido mal',
        'errors.support': 'Apoyar el proyecto',
        'errors.source': 'Leer el código fuente',

        // Footer
        'footer.store': 'Chrome Web Store',
        'footer.github': 'Repositorio de GitHub',
        'footer.desc':
            'Intelligent Workspace: la suite integral de productividad y gestión avanzada para Google Chrome. Desarrollada con dedicación en España.',
        'footer.prodTitle': 'Producto',
        'footer.toolsTitle': 'Utilidades',
        'footer.privacyTitle': 'Privacidad y Confianza',
        'footer.policy': 'Política de Privacidad',
        'footer.copyright': '© 2026 GENKI Organización / Luis Reoyo. Todos los derechos reservados.',
        'footer.license': 'Código disponible para auditoría en GitHub. Licencia propietaria.',
    },
} as const;

export type Lang = keyof typeof ui;

export type TranslationKey = keyof (typeof ui)['en'];

const _everyLanguageIsComplete: Record<Lang, Record<TranslationKey, string>> = ui;
void _everyLanguageIsComplete;
