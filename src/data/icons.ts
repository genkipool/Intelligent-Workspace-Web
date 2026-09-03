/**
 * The whole icon set, as data.
 *
 * Two components read it: `Icon.astro` renders one reference, and `IconSprite.astro`
 * renders every glyph once per page as a `<symbol>`. Keeping the paths here rather than
 * inside a component is what lets both do that from one source.
 *
 * The extension glyphs are `<symbol>`s copied out of
 * `Intelligent_Tab_Group_Svelte/src/ui/components/Icons.svelte`, path data and
 * `viewBox` unchanged: the shots on this page are supposed to be the extension rather
 * than an artist's impression of it, and the toolbar icons are most of what a reader
 * recognises. The rest are the page's own furniture — chevrons, the store mark, the
 * theme pair, the bullet glyphs beside each showcase.
 *
 * Adding one: paste its viewBox and its children under a short name. Do not redraw an
 * extension glyph.
 */

export interface IconDef {
    readonly viewBox: string;
    /** The `<symbol>` children, as markup. Colour comes from `currentColor`. */
    readonly body: string;
}

export const icons = {
    pin: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="4"></circle><path d="M12 8v18"></path></g>',
    },
    rules: {
        viewBox: '0 0 24 24',
        body: '<circle cx="2.5" cy="4" r="1.5" fill="currentColor"></circle><circle cx="2.5" cy="12" r="1.5" fill="currentColor"></circle><circle cx="2.5" cy="20" r="1.5" fill="currentColor"></circle><path d="M9 4h13M9 12h13M9 20h13" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none"></path>',
    },
    home: {
        viewBox: '2 2 20 20',
        body: '<path d="m12 3.188 9.45 7.087-.45 1.35h-.75v8.625H3.75v-8.625H3l-.45-1.35zm-6.75 6.937v8.625h13.5v-8.625L12 5.063z" fill="currentColor"></path>',
    },
    back: {
        viewBox: '0 0 24 24',
        body: '<path d="M15 20l-8-8 8-8" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>',
    },
    pomodoro: {
        viewBox: '0 0 512 512',
        body: '<path d="M360 80c4.8-12.8 8-27.2 8-44.8 0-4.8-1.6-4.8-4.8-8s-8-4.8-12.8-4.8c-19.2 1.6-40 9.6-60.8 24-6.4-11.2-12.8-22.4-22.4-33.6C264 9.6 259.2 8 256 8c-4.8 0-9.6 1.6-11.2 6.4-9.6 11.2-17.6 20.8-24 33.6q-26.4-21.6-57.6-24c-4.8 0-9.6 1.6-12.8 4.8S144 35.2 144 40c0 16 1.6 28.8 6.4 40C59.2 104 0 176 0 260.8 0 376 108.8 504 256 504s256-128 256-243.2c0-88-59.2-156.8-152-180.8m-65.6 8c1.6 0 1.6-1.6 1.6-3.2 12.8-11.2 24-19.2 36.8-24-4.8 19.2-19.2 48-57.6 56C280 105.6 288 96 294.4 88M256 49.6c4.8 6.4 8 12.8 9.6 20.8-11.2 12.8-19.2 28.8-25.6 48-1.6 0-3.2-1.6-4.8-1.6 1.6-32 8-51.2 20.8-67.2m-48 28.8c-1.6 6.4-3.2 14.4-4.8 22.4-11.2-8-20.8-20.8-25.6-40 11.2 3.2 20.8 9.6 30.4 17.6M256 472C128 472 32 360 32 260.8c0-73.6 52.8-132.8 134.4-152 12.8 16 27.2 25.6 43.2 32 1.6 0 1.6 0 3.2 1.6 12.8 4.8 27.2 8 36.8 9.6h1.6c6.4 0 11.2-3.2 14.4-8 24-3.2 54.4-12.8 76.8-35.2 84.8 17.6 139.2 76.8 139.2 152C480 360 384 472 256 472" fill="currentColor"></path>',
    },
    duplicates: {
        viewBox: '0 0 24 24',
        body: '<path d="M13.5 3H8a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h3m2.5-18L19 8.625M13.5 3v4.625a1 1 0 0 0 1 1H19m0 0v3.188M15 16l2.5 2.5M20 21l-2.5-2.5m0 0L20 16m-2.5 2.5L15 21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>',
    },
    more: {
        viewBox: '0 0 24 24',
        body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 1a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 1a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-4 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6" fill="currentColor"></path>',
    },
    camera: {
        viewBox: '0 0 24 24',
        body: '<g stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M12 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6"></path><path d="M3 16.8V9.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 6 5.08 6 6.2 6h1.055c.123 0 .184 0 .24-.006a1 1 0 0 0 .725-.448c.11-.22.165-.33.228-.425a2 2 0 0 1 1.447-.895C10.123 4 10.246 4 10.492 4h3.018c.246 0 .37 0 .482.013a2 2 0 0 1 1.448.895c.063.095.118.205.228.425a1 1 0 0 0 .724.447c.057.007.118.007.241.007H17.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 7.52 21 8.08 21 9.2v7.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C19.48 20 18.92 20 17.8 20H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 18.48 3 17.92 3 16.8"></path></g>',
    },
    backup: {
        viewBox: '0 0 32 32',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="14" cy="8" rx="10" ry="5"></ellipse><path d="M24 16V8M4 8v8c0 2.8 4.5 5 10 5 1.2 0 2.3-.1 3.4-.3"></path><path d="M4 16v8c0 2.8 4.5 5 10 5 2 0 3.8-.3 5.3-.8"></path><circle cx="24" cy="23" r="7"></circle><path d="M24 16v10m-3-3 3 3 3-3"></path></g>',
    },
    trash: {
        viewBox: '0 0 24 24',
        body: '<path d="M10 11V17M14 11V17M4 7H20M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path><path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>',
    },
    gemini: {
        viewBox: '0 0 471 471',
        body: '<path fill="currentColor" d="M235.5 471q0-48.866-18.84-91.845-18.252-42.978-50.044-74.771T91.845 254.34Q48.867 235.5 0 235.5q48.867 0 91.845-18.251 42.979-18.84 74.771-50.633t50.044-74.771Q235.5 48.867 235.5 0q0 48.867 18.251 91.845 18.84 42.978 50.633 74.771t74.771 50.633Q422.134 235.499 471 235.5q-48.866 0-91.845 18.84-42.978 18.252-74.771 50.044-31.793 31.793-50.633 74.771Q235.501 422.134 235.5 471"></path>',
    },
    note: {
        viewBox: '0 0 24 24',
        body: '<g stroke="currentColor" stroke-width="1.5" fill="none"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"></path><path d="M8 10.5h8M8 14h5.5" stroke-linecap="round"></path></g>',
    },
    reader: {
        viewBox: '0 0 24 24',
        body: '<path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>',
    },
    music: {
        viewBox: '0 0 24 24',
        body: '<path d="M9 18V6l11-2v12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="6" cy="18" r="3" fill="currentColor"></circle><circle cx="17" cy="16" r="3" fill="currentColor"></circle>',
    },
    expandAll: {
        viewBox: '0 0 32 32',
        body: '<path d="M12 10h14a2.003 2.003 0 0 0 2-2V4a2.003 2.003 0 0 0-2-2H12a2.003 2.003 0 0 0-2 2v1H6V2H4v23a2.003 2.003 0 0 0 2 2h4v1a2.003 2.003 0 0 0 2 2h14a2.003 2.003 0 0 0 2-2v-4a2.003 2.003 0 0 0-2-2H12a2.003 2.003 0 0 0-2 2v1H6v-8h4v1a2.003 2.003 0 0 0 2 2h14a2.003 2.003 0 0 0 2-2v-4a2.003 2.003 0 0 0-2-2H12a2.003 2.003 0 0 0-2 2v1H6V7h4v1a2.003 2.003 0 0 0 2 2m0-6h14l.001 4H12Zm0 20h14l.001 4H12Zm0-10h14l.001 4H12Z" fill="currentColor"></path>',
    },
    tabGroups: {
        viewBox: '0 0 512 512',
        body: '<path d="M136 24H16v120h120Zm-32 88H48V56h56Zm32 88H16v120h120Zm-32 88H48v-56h56Zm32 88H16v120h120Zm-32 88H48v-56h56Zm72-440.002h320v32H176zm0 88h256v32H176zm0 88h320v32H176zm0 88h256v32H176zm0 176h256v32H176zm0-88h320v32H176z" fill="currentColor"></path>',
    },
    clock: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3.5 2"></path></g>',
    },
    settings: {
        viewBox: '0 0 32 32',
        body: '<path fill="currentColor" d="m30.015 12.97-2.567-.569c-.2-.64-.462-1.252-.762-1.841l1.389-2.313c.518-.829.78-2.047 0-2.829L26.66 4.004c-.78-.781-2.098-.64-2.894-.088L21.515 5.35a12 12 0 0 0-1.829-.768l-.576-2.598C18.938 1.031 18.105 0 17 0h-2c-1.104 0-1.781 1.047-2 2l-.642 2.567a12 12 0 0 0-1.948.819l-2.308-1.47c-.795-.552-2.114-.692-2.894.088L3.793 5.418c-.781.782-.519 2 0 2.828l1.461 2.435a12 12 0 0 0-.705 1.72l-2.566.569c-.953.171-1.984 1.005-1.984 2.109v2c0 1.105 1.047 1.782 2 2l2.598.649c.179.551.404 1.08.658 1.593l-1.462 2.438c-.518.828-.78 2.047 0 2.828l1.415 1.414c.78.782 2.098.64 2.894.089l2.313-1.474a12 12 0 0 0 1.96.823l.64 2.559c.219.953.896 2 2 2h2c1.105 0 1.938-1.032 2.11-1.985l.577-2.604c.628-.203 1.23-.459 1.808-.758l2.256 1.438c.796.552 2.114.692 2.895-.089l1.415-1.414c.78-.782-.518-2 0-2.828l-1.39-2.317c.279-.549.521-1.12.716-1.714l2.599-.649c.953-.219 2-.895 2-2v-2c0-1.104-1.031-1.938-1.985-2.11zm-.014 3.969a1.3 1.3 0 0 1-.448.192l-3.708.926-.344 1.051c-.155.474-.356.954-.597 1.428l-.502.986 1.959 3.267c.125.2.183.379.201.485l-1.316 1.314a1.6 1.6 0 0 1-.341-.14l-3.292-2.099-1.023.529a10 10 0 0 1-1.503.631l-1.09.352-.824 3.723c-.038.199-.145.36-.218.417h-1.8a1.3 1.3 0 0 1-.191-.448l-.921-3.681-1.066-.338a10 10 0 0 1-1.63-.684l-1.028-.543-3.293 2.099a.76.76 0 0 1-.409.143l-1.311-1.276a1.3 1.3 0 0 1 .181-.449l2.045-3.408-.487-.98a10 10 0 0 1-.547-1.325l-.343-1.052-3.671-.918a1.4 1.4 0 0 1-.485-.2v-1.86l.005.001c.034 0 .198-.117.335-.142l3.772-.835.346-1.103c.141-.449.333-.917.588-1.43l.487-.98-2.024-3.373a1.4 1.4 0 0 1-.201-.485L6.622 5.42c.128.041.271.093.34.14l3.354 2.138 1.027-.542a10 10 0 0 1 1.622-.682l1.063-.338.912-3.649c.053-.231.138-.398.2-.485h1.859c-.014.02.115.195.142.339l.84 3.794 1.089.352c.511.165 1.023.38 1.523.639l1.023.532 3.224-2.053a.75.75 0 0 1 .409-.143l1.313 1.276a1.3 1.3 0 0 1-.181.45l-1.98 3.296.505.988c.273.533.48 1.033.635 1.529l.346 1.104 3.697.82c.224.041.398.171.434.241zM16.013 9.99c-3.321 0-6.023 2.697-6.023 6.01s2.702 6.01 6.023 6.01 6.023-2.697 6.023-6.009-2.702-6.01-6.023-6.01zM16 20c-2.205 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4" />',
    },
    resize: {
        viewBox: '0 0 24 24',
        body: '<path fill="currentColor" fill-rule="nonzero" d="M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z"></path>',
    },
    collapseAll: {
        viewBox: '0 0 32 32',
        body: '<path fill="currentColor" transform="translate(32 0) scale(-1 1)" d="M12 10h14a2.003 2.003 0 0 0 2-2V4a2.003 2.003 0 0 0-2-2H12a2.003 2.003 0 0 0-2 2v1H6V2H4v23a2.003 2.003 0 0 0 2 2h4v1a2.003 2.003 0 0 0 2 2h14a2.003 2.003 0 0 0 2-2v-4a2.003 2.003 0 0 0-2-2H12a2.003 2.003 0 0 0-2 2v1H6v-8h4v1a2.003 2.003 0 0 0 2 2h14a2.003 2.003 0 0 0 2-2v-4a2.003 2.003 0 0 0-2-2H12a2.003 2.003 0 0 0-2 2v1H6V7h4v1a2.003 2.003 0 0 0 2 2m0-6h14l.001 4H12Zm0 20h14l.001 4H12Zm0-10h14l.001 4H12Z"></path>',
    },
    edit: {
        viewBox: '0 0 24 24',
        body: '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="m15 5 4 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
    },
    power: {
        viewBox: '0 0 24 24',
        body: '<path d="M12 3v9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path><path d="M7.5 6.4a8 8 0 1 0 9 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>',
    },
    close: {
        viewBox: '0 0 24 24',
        body: '<path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>',
    },
    search: {
        viewBox: '0 0 24 24',
        body: '<circle cx="11" cy="11" r="8" fill="none" stroke="currentColor" stroke-width="2"></circle><path d="m21 21-4.35-4.35" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>',
    },
    pause: {
        viewBox: '0 0 24 24',
        body: '<path d="M7 5h3.5v14H7zm6.5 0H17v14h-3.5z" fill="currentColor"></path>',
    },
    rewind: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 5a7 7 0 1 1-6.9 8.2"></path><path d="M11.5 2 8 5l3.5 3"></path></g><text x="12" y="15.5" text-anchor="middle" font-size="7" stroke="none" fill="currentColor" font-family="system-ui, sans-serif">10</text>',
    },
    forward: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 5a7 7 0 1 0 6.9 8.2"></path><path d="M12.5 2 16 5l-3.5 3"></path></g><text x="12" y="15.5" text-anchor="middle" font-size="7" stroke="none" fill="currentColor" font-family="system-ui, sans-serif">10</text>',
    },
    volume: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h3.5L12 19V5L7.5 9z" fill="currentColor"></path><path d="M16 9.5a3.5 3.5 0 0 1 0 5"></path><path d="M18.5 7a7 7 0 0 1 0 10"></path></g>',
    },
    loop: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2l3 3-3 3"></path><path d="M3 11V9a4 4 0 0 1 4-4h13"></path><path d="M7 22l-3-3 3-3"></path><path d="M21 13v2a4 4 0 0 1-4 4H4"></path></g>',
    },
    pip: {
        viewBox: '0 0 24 24',
        body: '<rect x="2" y="4" width="20" height="16" rx="2.5" stroke="currentColor" stroke-width="2" fill="none"></rect><rect x="12" y="12" width="8" height="6" rx="1" fill="currentColor"></rect>',
    },
    moreDots: {
        viewBox: '0 0 24 24',
        body: '<g fill="currentColor"><circle cx="12" cy="5" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="12" cy="19" r="2"></circle></g>',
    },
    createRule: {
        viewBox: '3 3 26 26',
        body: '<path d="M24 15v2h-7v7h-2v-7H8v-2h7V8h2v7zm.485 9.485c-4.686 4.686-12.284 4.686-16.971 0s-4.686-12.284 0-16.971c4.687-4.686 12.284-4.686 16.971 0 4.687 4.687 4.687 12.285 0 16.971M23.071 8.929c-3.842-3.842-10.167-3.975-14.142 0-3.899 3.899-3.899 10.243 0 14.142 3.975 3.975 10.301 3.841 14.142 0 3.899-3.899 3.899-10.243 0-14.142" fill="currentColor"></path>',
    },
    addToRule: {
        viewBox: '0 0 24 24',
        body: '<g stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"><circle cx="13" cy="12" r="10"></circle><path d="M1 12h14"></path><path d="M12 8l4 4-4 4"></path></g>',
    },
    copy: {
        viewBox: '0 0 24 24',
        body: '<path d="M7.4 6.6c0-2.198 1.75-4 3.934-4h5.333c2.184 0 3.934 1.802 3.934 4v6.8c0 2.198-1.75 4-3.934 4a0.6 0.6 0 0 1 0-1.2c1.498 0 2.734-1.242 2.734-2.8v-6.8c0-1.558-1.235-2.8-2.734-2.8h-5.333c-1.498 0-2.734 1.242-2.734 2.8a0.6 0.6 0 0 1-1.2 0" fill="currentColor"></path><path d="M3.4 10.6c0-2.198 1.75-4 3.934-4h5.333c2.184 0 3.934 1.802 3.934 4v6.8c0 2.198-1.75 4-3.934 4H7.334c-2.184 0-3.934-1.802-3.934-4zm3.934-2.8c-1.498 0-2.734 1.242-2.734 2.8v6.8c0 1.558 1.236 2.8 2.734 2.8h5.333c1.499 0 2.734-1.242 2.734-2.8v-6.8c0-1.558-1.235-2.8-2.734-2.8z" fill="currentColor"></path>',
    },
    editPencil: {
        viewBox: '0 0 24 24',
        body: '<path d="m21.28 6.4-9.54 9.54c-.95.95-3.77 1.39-4.4.76s-.2-3.45.75-4.4l9.55-9.55a2.58 2.58 0 1 1 3.64 3.65" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"></path><path d="M11 4H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h11c2.21 0 3-1.8 3-4v-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>',
    },
    openAll: {
        viewBox: '0 0 24 24',
        body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M19 1H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13l2 1V3c0-1.1-.9-2-2-2m-4 6v12.97l-5-2.15-5 2.15V7zM5 5h10c1.1 0 2 .9 2 2v16l-7-3-7 3V7c0-1.1.9-2 2-2" fill="currentColor"></path>',
    },
    addFolder: {
        viewBox: '0 0 24 24',
        body: '<g stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M9 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-5l-2-3H9Z"></path><path d="M12 11v6m3-3h-6"></path></g>',
    },
    folder: {
        viewBox: '0 0 24 24',
        body: '<path d="M3 8.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 5 5.08 5 6.2 5h3.475c.489 0 .733 0 .963.055.204.05.4.13.579.24.201.123.374.296.72.642l.126.126c.346.346.519.519.72.642q.271.165.579.24c.23.055.474.055.963.055H17.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 8.52 21 9.08 21 10.2v5.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C19.48 19 18.92 19 17.8 19H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 17.48 3 16.92 3 15.8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>',
    },
    chevronRight: {
        viewBox: '0 0 24 24',
        body: '<path d="m9 6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path>',
    },
    youtube: {
        viewBox: '0 0 28 20',
        body: '<path d="M27.4 3.1a3.5 3.5 0 0 0-2.46-2.48C22.77 0 14 0 14 0S5.23 0 3.06.62A3.5 3.5 0 0 0 .6 3.1C0 5.28 0 10 0 10s0 4.72.6 6.9a3.5 3.5 0 0 0 2.46 2.48C5.23 20 14 20 14 20s8.77 0 10.94-.62a3.5 3.5 0 0 0 2.46-2.48C28 14.72 28 10 28 10s0-4.72-.6-6.9" fill="#f00"></path><path d="M11.2 14.29 18.5 10l-7.3-4.29z" fill="#fff"></path>',
    },
    readerPause: {
        viewBox: '0 0 24 24',
        body: '<path d="M9 5v14M15 5v14"></path>',
    },
    readerPrev: {
        viewBox: '0 0 24 24',
        body: '<path d="M18 6 9 12l9 6zM6 5v14"></path>',
    },
    readerNext: {
        viewBox: '0 0 24 24',
        body: '<path d="m6 6 9 6-9 6zM18 5v14"></path>',
    },
    readerCollapse: {
        viewBox: '0 0 24 24',
        body: '<path d="m9 6 6 6-6 6"></path>',
    },
    readerSettings: {
        viewBox: '0 0 24 24',
        body: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 9 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 9a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1"></path>',
    },
    readerClose: {
        viewBox: '0 0 24 24',
        body: '<path d="M6 6l12 12M18 6 6 18"></path>',
    },
    searchGlobal: {
        viewBox: '0 0 512 512',
        body: '<path d="m508.255 490.146-128-128c-.06-.06-.137-.077-.196-.128 34.193-38.434 55.142-88.917 55.142-144.418 0-120.175-97.425-217.6-217.6-217.6S.001 97.425.001 217.6s97.425 217.6 217.6 217.6c55.501 0 105.975-20.949 144.418-55.151.06.06.077.137.128.196l128 128c2.5 2.509 5.777 3.755 9.054 3.755s6.554-1.246 9.054-3.746c4.992-5.001 4.992-13.107 0-18.108M217.601 409.6c-105.865 0-192-86.135-192-192s86.135-192 192-192 192 86.135 192 192-86.135 192-192 192" fill="currentColor"></path>',
    },
    restore: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"></path><path d="M3 4v5h5"></path></g>',
    },
    ocr: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3"></path><path d="M7 9h10M7 13h7"></path></g>',
    },
    pinArchive: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="4" rx="1"></rect><path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8"></path><path d="M10 12h4"></path></g>',
    },
    download: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"></path><path d="m7 11 5 5 5-5"></path><path d="M4 20h16"></path></g>',
    },
    plus: {
        viewBox: '0 0 24 24',
        body: '<path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M4 12H20M12 4V20"></path>',
    },
    export: {
        viewBox: '0 0 1920 1920',
        body: '<path fill="currentColor" fill-rule="evenodd" d="m0 1016.081 409.186 409.073 79.85-79.736-272.867-272.979h1136.415V959.611H216.169l272.866-272.866-79.85-79.85L0 1016.082ZM1465.592 305.32l315.445 315.445h-315.445V305.32Zm402.184 242.372-329.224-329.11C1507.042 187.07 1463.334 169 1418.835 169h-743.83v677.647h112.94V281.941h564.706v451.765h451.765v903.53H787.946V1185.47H675.003v564.705h1242.353V667.522c0-44.498-18.07-88.207-49.581-119.83Z" />',
    },
    importFile: {
        viewBox: '0 0 1920 1920',
        body: '<path fill="currentColor" fill-rule="evenodd" d="m807.186 686.592 272.864 272.864H0v112.94h1080.05l-272.864 272.978 79.736 79.849 409.296-409.183-409.296-409.184-79.736 79.736ZM1870.419 434.69l-329.221-329.11C1509.688 74.07 1465.979 56 1421.48 56H451.773v730.612h112.94V168.941h790.584v451.762h451.762v1129.405H564.714v-508.233h-112.94v621.173H1920V554.52c0-45.176-17.619-87.754-49.58-119.83Zm-402.181-242.37 315.443 315.442h-315.443V192.319Z" />',
    },
    ruleEdit: {
        viewBox: '0 0 24 24',
        body: '<path d="M18.111,2.293,9.384,11.021a.977.977,0,0,0-.241.39L8.052,14.684A1,1,0,0,0,9,16a.987.987,0,0,0,.316-.052l3.273-1.091a.977.977,0,0,0,.39-.241l8.728-8.727a1,1,0,0,0,0-1.414L19.525,2.293A1,1,0,0,0,18.111,2.293ZM11.732,13.035l-1.151.384.384-1.151L16.637,6.6l.767.767Zm7.854-7.853-.768.767-.767-.767.767-.768ZM3,5h8a1,1,0 0 1,0,2H4V20H17V13a1,1,0 0 1,2,0v8a1,1,0 0 1-1,1H3a1,1,0 0 1-1-1V6A1,1,0 0 1,3,5Z" fill="currentColor"></path>',
    },
    ruleDelete: {
        viewBox: '0 0 24 24',
        body: '<path d="M14.28 2a2 2 0 0 1 1.897 1.368L16.72 5H20a1 1 0 0 1 0 2l-.003.071-.867 12.143A3 3 0 0 1 16.138 22H7.862a3 3 0 0 1-2.992-2.786L4.003 7.07 4 7a1 1 0 0 1 0-2h3.28l.543-1.632A2 2 0 0 1 9.721 2zm3.717 5H6.003l.862 12.071a1 1 0 0 0 .997.929h8.276a1 1 0 0 0 .997-.929zM10 10a1 1 0 0 1 .993.883L11 11v5a1 1 0 0 1-1.993.117L9 16v-5a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1m.28-6H9.72l-.333 1h5.226z" fill="currentColor"></path>',
    },

    // ── The page's own furniture ──
    chromeStore: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line></g>',
    },
    sun: {
        viewBox: '0 0 24 24',
        body: '<circle cx="12" cy="12" r="4.2"></circle><g stroke-linecap="round"><path d="M12 2.6v2.4M12 19v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2.6 12h2.4M19 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7">></path></g>',
    },
    moon: {
        viewBox: '0 0 24 24',
        body: '<path d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.4 8.4 0 1 0 10.2 10.2z"></path>',
    },
    github: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">></path></g>',
    },
    chevronLeft: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></g>',
    },
    chevronRightBold: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></g>',
    },
    chevronDown: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></g>',
    },
    alertTriangle: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></g>',
    },
    memory: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></g>',
    },
    gridFour: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></g>',
    },
    shieldCheck: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></g>',
    },
    bolt: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></g>',
    },
    gauge: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 18a8 8 0 1 1 16 0"/><line x1="12" y1="18" x2="16" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></g>',
    },
    sparkles: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></g>',
    },
    ram: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/><path d="M10 6h8"/><path d="M10 18h8"/></g>',
    },
    tree: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><path d="M6.5 10v7a2 2 0 0 0 2 2h5.5"/></g>',
    },
    historyRestore: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></g>',
    },
    bookmarkCheck: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/><path d="m9 10 2 2 4-4"/></g>',
    },
    downloadTray: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></g>',
    },
    calendar: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/></g>',
    },
    fileText: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/></g>',
    },
    bookOpenLines: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/><path d="M6 8h2"/><path d="M6 12h2"/></g>',
    },
    cameraShot: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></g>',
    },
    chartLine: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/><circle cx="19" cy="9" r="1.5"/></g>',
    },
    slider: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/><path d="M12 3v2"/><path d="M12 19v2"/></g>',
    },
    splitView: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="3" x2="12" y2="21"/></g>',
    },
    focusFrame: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7V4h3"/><path d="M20 7V4h-3"/><path d="M4 17v3h3"/><path d="M20 17v3h-3"/><line x1="9" y1="12" x2="15" y2="12"/></g>',
    },
    eyedropper: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 22 1-1h3l9-9"></path><path d="M3 21v-3l9-9"></path><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3z"></path></g>',
    },
    contrast: {
        viewBox: '0 0 24 24',
        body: '<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"></circle><path d="M12 3.2a8.8 8.8 0 0 1 0 17.6z" fill="currentColor"></path>',
    },
    layoutGrid: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3z"/><path d="M20 14v3h-3"/><path d="M14 20h7"/></g>',
    },
    lock: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></g>',
    },
    key: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="5.5"></circle><path d="m21 2-9.6 9.6"></path><path d="m15.5 7.5 3 3L22 7l-3-3"></path></g>',
    },
    shield: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></g>',
    },
    botFace: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v3"></path><rect x="4" y="5" width="16" height="14" rx="3"></rect><path d="M9 11h.01"></path><path d="M15 11h.01"></path><path d="M9 15c.8.8 2.2.8 3 .8s2.2 0 3-.8"></path><path d="M2 12h2"></path><path d="M20 12h2"></path></g>',
    },
    browserTabs: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="15" rx="3"></rect><line x1="2" y1="10" x2="22" y2="10"></line><line x1="8" y1="5" x2="8" y2="10"></line><line x1="14" y1="5" x2="14" y2="10"></line></g>',
    },
    timer: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="2" x2="14" y2="2"></line><line x1="12" y1="14" x2="15" y2="11"></line><circle cx="12" cy="14" r="8"></circle></g>',
    },
    keyboardKeys: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="3" ry="3"></rect><path d="M6 8h.01"></path><path d="M10 8h.01"></path><path d="M14 8h.01"></path><path d="M18 8h.01"></path><path d="M6 12h.01"></path><path d="M10 12h.01"></path><path d="M14 12h.01"></path><path d="M18 12h.01"></path><path d="M7 16h10"></path></g>',
    },
    heart: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">></path></g>',
    },
    terminal: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></g>',
    },
    keyboardSmall: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="3" ry="3"></rect><path d="M6 8h.01"></path><path d="M10 8h.01"></path><path d="M14 8h.01"></path></g>',
    },
    mic: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></g>',
    },
    bookOpen: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></g>',
    },
    globe: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></g>',
    },
    pipScreen: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><rect x="12" y="9" width="8" height="6" rx="1"></rect></g>',
    },
    loopArrows: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M21 21v-5h-5"></path></g>',
    },
    imageFrame: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></g>',
    },
    calendarPlain: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></g>',
    },
    clockLarge: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></g>',
    },
    activity: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></g>',
    },
    bookmarkPlus: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path><line x1="12" y1="7" x2="12" y2="13"></line><line x1="9" y1="10" x2="15" y2="10"></line></g>',
    },
    fileLines: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z">></path><polyline points="14 2 14 8 20 8"></polyline><line x1="8" y1="13" x2="16" y2="13"></line></g>',
    },
    windowTop: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M10 4v4"></path><path d="M2 8h20"></path></g>',
    },
    typeTool: {
        viewBox: '0 0 24 24',
        body: '<g fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></g>',
    },
} as const satisfies Record<string, IconDef>;

export type IconName = keyof typeof icons;

/** Every glyph, for a page that draws enough of them to want the whole sprite. */
export const allIconNames = Object.keys(icons) as readonly IconName[];

/**
 * What the chrome shared by every page draws — currently just `ThemeToggle`'s pair.
 * A page that carries the chrome and nothing else needs only these two symbols.
 */
export const chromeIconNames = ['sun', 'moon'] as const satisfies readonly IconName[];
