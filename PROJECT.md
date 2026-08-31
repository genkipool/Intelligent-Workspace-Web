# Project: Intelligent Workspace Web Redesign

## Architecture

- **Framework**: Astro 7.2.9 + TypeScript 6.0.3 + Vitest 4.1.11
- **Layout**: Panoramic Grid Layout (`--measure: 1560px`) with fluid responsive gutters
- **Styling**: Pure CSS Custom Properties with Viridian design system (`#16a085`, `#0e6655`, `#1b2631`), seamless Light/Dark mode switching with zero-FOUC inline theme script
- **i18n**: Type-safe bilingual URL routing (`/` English, `/es/` Spanish) powered by `src/i18n/ui.ts` and `src/i18n/utils.ts`
- **Data Flow**: Static component assembly in `src/components/` rendering typed data from `src/data/` and dictionary strings from `src/i18n/ui.ts`
- **Shared shapes**: `Showcase.astro` (the six two-column feature sections), `SectionHeader.astro` (the nine centred headings), `Icon.astro` + `IconSprite.astro` (every glyph written once per page as a `<symbol>`, referenced with `<use>`)

## Feature Inventory

| #   | Feature                           | Description                                                                                      | Milestone | Source        |
| --- | --------------------------------- | ------------------------------------------------------------------------------------------------ | --------- | ------------- |
| 1   | Rules engine & AI agent           | Grouping by domain, subdomain, IP, files or regex; agent with 58 browser tools                   | M2        | Extension     |
| 2   | Idle tab discarding & backups     | Chrome tab discarding after a configurable idle threshold (60 min default); group backup/restore | M2        | Extension     |
| 3   | Tab Tree & Subgroups              | Hierarchical domain accordions and nested controls                                               | M2        | Survey 2 §1.3 |
| 4   | Recently Closed Restore           | Closed session tracker with timestamps and 1-click recovery                                      | M2        | Survey 2 §1.4 |
| 5   | Bookmarks Manager                 | Folder tree, search, drag and drop, import/export, bookmark-to-rule (no link scanner)            | M2        | Extension     |
| 6   | Downloads Manager                 | Side panel download inspector, progress bar, category filter, action toolbar                     | M2        | Survey 2 §2.2 |
| 7   | Smart History                     | Grouping by day, calendar date filter, keyword search, single or whole-day deletion              | M2        | Extension     |
| 8   | Quick Notes & Markdown            | Rich text/Markdown, interactive checklists, Kanban task board                                    | M2        | Survey 2 §2.4 |
| 9   | Reader Mode & TTS                 | Distraction-free article overlay with floating Text-to-Speech audio reader                       | M2        | Survey 2 §2.5 |
| 10  | Media Gallery & Screenshot Studio | Area capture, 30,000px full-page crawler, local Tesseract WASM OCR                               | M2        | Survey 2 §2.6 |
| 11  | Web activity, limits & blocking   | Side panel + full page: time per site and category, daily/weekly caps, hours, password           | M2        | Extension     |
| 12  | Overflow Menu & Mass Actions      | Mute all tabs, tab deduplicator badge, close other groups, mass reload                           | M2        | Survey 2 §2.8 |
| 13  | Split Screen Workstation          | Side-by-side dual tab comparison workstation                                                     | M2        | Survey 2 §3.1 |
| 14  | Picture-in-Picture Floating       | Document PiP and Video PiP with auto-float on scroll                                             | M2        | Survey 2 §3.2 |
| 15  | OCR Text Scanning & QR Hub        | In-browser WebAssembly OCR and QR scanner/generator                                              | M2        | Survey 2 §3.3 |
| 16  | Screen Color Picker (Cuentagotas) | 13x13 magnifier canvas lens overlay with HEX/RGB copy                                            | M2        | Survey 2 §3.4 |
| 17  | Cookie Cleaner & Editor           | Domain cookie manager with attribute editing and JSON import/export                              | M2        | Survey 2 §3.5 |
| 18  | Viridian Themes & Custom Studio   | Signature emerald palette, dark/light themes, zero-flash mirror                                  | M2        | Survey 2 §3.6 |
| 19  | Dynamic Snippets System           | Expansions with `{{var}}` and `{{var\|default}}`, `#` for plain text, `$$` quick menu            | M2        | Extension     |
| 20  | Modern `tab-nav` Selector         | Slick tab navigation bar with micro-interactions, Viridian gradients, crisp SVG icons            | M3        | Survey 1 §3.1 |
| 21  | Keyboard Hint Navigation          | Mouse-free letter labels (`f`, `cf`, `j`/`k`, `i`, `x`, `ts`, `wv`, `ar`)                        | M1        | Extension     |
| 22  | Global Window & Tab Shortcuts     | Manifest commands (`Ctrl+Shift+Z/Q/S`, `Alt+Shift+P`) and the `find` omnibox keyword             | M1        | Extension     |
| 23  | Total Vimium Brand Removal        | Eliminate all 9 occurrences of Vimium across code, UI, and i18n dictionaries                     | M1        | Survey 3 §1   |
| 24  | Flawless Light Mode Contrast      | 0 dark containers, pure white/cream surfaces, WCAG AA/AAA dark ink typography                    | M4        | Survey 3 §2   |
| 25  | 1560px Panoramic Architecture     | Widescreen fluid layout container and responsive scaling                                         | M5        | Survey 3 §4   |
| 26  | Bilingual i18n Dictionary Parity  | 100% parity across ES/EN dictionaries with 0 hardcoded strings                                   | M5        | Survey 1 §5   |
| 27  | Validation & Quality Pipeline     | 0 errors and 0 warnings on check, test, build, headers, format                                   | M5        | Survey 1 §6   |

## Milestones

| #   | Name                                                  | Scope                                                                                                                                                                                                                   | Dependencies   | Status |
| --- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------ |
| M1  | Keyboard & Vimium Eradication (R3)                    | Split Global Shortcuts vs Visual Hint Navigation in `KeyboardBand.astro`, purge all 9 Vimium mentions in `Features.astro`, `KeyboardBand.astro`, and `src/i18n/ui.ts`                                                   | none           | DONE   |
| M2  | Feature Arsenal Expansion (R1)                        | Expand `SwissArmyBento.astro` and supporting data models to fully showcase all 18 extension productivity tools (Bookmarks, Downloads, History, Notes, Reader, Gallery, Analytics, Overflow) with bilingual i18n support | M1             | DONE   |
| M3  | Interactive `tab-nav` Refactor (R2)                   | Modernize `<div class="tab-nav">` in `Features.astro` with slick styling, micro-interactions, Viridian active gradient, crisp SVG icons, and ARIA keyboard support                                                      | M1             | DONE   |
| M4  | Flawless Light Mode & Contrast (R4)                   | Audit and enforce 100% light theme compliance across all components (especially SwissArmyBento, Features, Trust, KeyboardBand, badges, tags), eliminating any dark background bleed in light mode                       | M2, M3         | DONE   |
| M5  | Layout, i18n Parity & Quality Gates (R5 & Validation) | Localize header strings in `Comparison.astro` and `Trust.astro`, update `.prettierignore`, and ensure 0 errors across check, test, build, check:headers, format                                                         | M1, M2, M3, M4 | DONE   |

## Interface Contracts

### `src/i18n/ui.ts`

- All new keys added for tools and navigation MUST be present in both `en` and `es` blocks with identical key names.
- Type checking enforced via `const _everyLanguageIsComplete: Record<Lang, Record<TranslationKey, string>> = ui;`.

### Truthfulness Contract

- No capability may be named on the site unless it exists in the extension at `/home/lrb85/proyectos/intelligent_workspace/Intelligent_Tab_Group_Svelte/`. The sources of truth are `_locales/*/messages.json`, `src/ui/pages/about/components/FeatureCategoriesSection.svelte`, `manifest.json`, and the component that implements the feature.
- Product mock-ups are drawn with `src/styles/extension-ui.css`, which transcribes the extension's own tokens, class names and numbers (panel chrome, group list, omnibar, web activity boxes, assistant card, read-aloud player, snippet menu, PiP bar). A shot uses those classes; it does not invent its own lookalike.
- Reusable shots live in `src/components/shots/`: `PanelGroupList.astro` (the "Listar grupos" side panel), `PanelRules.astro` (the rules manager) and `PanelGallery.astro` (the screenshot gallery and the capture menu). Each takes its content as props, so the same interface can appear more than once on the page with different groups, rules or captures in it. A second copy of any of them is a bug, not a variation.
- A shot draws the layout the panel actually uses, and for the rules page that is the side panel one, not the tab the resize button opens. `rules.css` rebuilds the page below 600px: the green `--header-color` bar with pin / group list / home / back, four action buttons sharing the width with their labels hidden, rules as cards with an accent border, and the compact ON/OFF button in place of the sliding switch. The group list starts with its search field collapsed, so its shot shows the control row alone.
- Sizes may be scaled up for the page; the interface may not be changed. A side panel is read at arm's length inside the browser and this page shows it at a distance, so `.iw-shot` sets a 15px base and the controls are a few pixels larger than the extension's. Which controls, in which order, with which glyphs, stays exactly as the extension has it.
- No numbers in a heading, as digits or as words. `permissionCount` is still derived and still true; it just does not go in the title.
- Icons inside a shot come from `src/components/Icon.astro`, which draws a glyph from the registry in `src/data/icons.ts` — extension glyphs there are copied verbatim out of its sprite (`Icons.svelte`, `WebActivityIcons.svelte`, `videoPipUi.js`). A stand-in icon from a generic set gives the shot away, so do not draw one.
- Shots are always in Viridian, the theme the extension ships with (`src/utils/theme.js` falls back to it). That is what a screenshot of it looks like; the "no dark containers in light mode" rule below is about the page's own chrome, not about a photograph of a dark application.
- No fake browser frame around a shot: no title bar, no traffic lights, no address bar. The extension's chrome is the subject, and a second invented one only competes with it.
- Nothing in a shot is a real link. A hint label needs something link-shaped under it, so `.looks-like-link` styles a span as one; a real anchor there would promise a destination this page does not have.
- `permissionCount` in `src/data/trust.ts` is derived from the grant table, and the table lists every name in the manifest's `permissions` array. If the two ever disagree the heading is lying, which is the one thing this section cannot do.
- No em dashes anywhere in the copy.
- Invented figures — megabytes freed, percentages of RAM, latency numbers, link-health scores — are not allowed. If a number cannot be traced to the extension, it does not go on the page.

### Keyboard Component Contract

- `KeyboardBand.astro` renders `keyboardZones` from `src/data/shortcuts.ts`, which holds three zones:
    1. `omnibarShortcuts`: the floating omnibar and its prefixes (`o`, `@`, `b:`, `h:`, `c:`, `f:`, `ts:`, `qaia:`).
    2. `hintNavigationShortcuts`: in-page keys from the extension's hint registry (`f`, `cf`, `j`/`k`, `i`, `x`, `ts`, `wv`, `ar`).
    3. `browserShortcuts`: the manifest's own commands plus the panel keys (`Ctrl+Shift+Z`, `Ctrl+Shift+Q`, `Ctrl+Shift+S`, `Alt+Shift+P`, `pl`, `pw`, `mb`, `so`).
- Every key listed must exist in the extension: the omnibar prefixes come from `src/utils/hint/omnibar.js`, the page keys from `_getDefaultMappings()` in `src/utils/hint/registry.js`, and the combinations from the `commands` block of `manifest.json`. A shortcut on the page that does nothing in the browser is a bug.
- Naming convention: Strictly "Navegación Visual por Etiquetas" (ES) / "Visual Link Hints" or "Keyboard Hint Navigation" (EN). No third-party trademarks.

### Light Mode Contrast Contract

- In `:root[data-theme='light']`:
    - Cards & panels background: `#ffffff` or `#f7faf8`
    - Container borders: `#c8dcd2` or `#dbe8e0`
    - Headings & primary text: `#0b1c15` (18.5:1 contrast)
    - Secondary text: `#1e382e` (13.5:1 contrast)
    - Muted text: `#3d5a4e` (7.2:1 contrast)
    - Tags & Pills: Light background (`#eaf3ee` or `#ffffff`) with dark viridian text (`#0a5745` / `#0e6655`)
    - No element shall have `#111a22`, `#1b2631`, `#091117`, or dark semi-transparent overlays in light mode.

## Code Layout

- `src/components/`: UI components (Astro)
- `src/data/`: Static typed data models (TypeScript), including the icon registry
- `src/i18n/`: Bilingual translation dictionaries and helper functions
- `src/styles/`: Global CSS and design tokens. `global.css` holds the tokens and the shared molecules (`.section-header`, `.syntax-chip`, buttons); `extension-ui.css` is imported by `Landing.astro` alone, since only the shots use it
- Tests sit beside what they test as `*.test.ts`

## Duplication Contract

- A section that looks like another section is the same component with different props. The six showcases and the nine section headings each have exactly one definition; a second copy of either is a bug.
- A `:root[data-theme='light']` rule that restates what its base rule already resolves to in light mode is dead weight. The palette is in `global.css`; a component override says `var(--text-color)`, never `#0b1c15`.
- A translation key nothing renders is deleted, not kept. `src/i18n/coverage.test.ts` fails the build on one.
- A glyph nothing draws is deleted from the registry. `src/components/icon-sprite.test.ts` fails the build on an unused symbol, and on a `<use>` whose symbol the page's sprite was never asked for.
- A scoped style cannot reach an `<Icon>`: the `<svg>` carries `Icon.astro`'s scope. Use `:global()` and say why.
