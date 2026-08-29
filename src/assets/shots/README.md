# Screenshots

Four slots, reserved in the layout by `ProductShot.astro`. Until a file lands here the
page shows a dashed placeholder stating what the shot is and what size it needs, so
nothing about the layout changes when the real image arrives.

| File               | What it shows                                                                                    | Shape   | Minimum     |
| ------------------ | ------------------------------------------------------------------------------------------------ | ------- | ----------- |
| `window-panel.png` | The whole browser window: a page on the left, the side panel with your groups on the right       | 16 / 10 | 1600 × 1000 |
| `panel-agent.png`  | The panel alone, with a conversation where the agent is asked to tidy up and reports what it did | 1 / 1.6 | 900 × 1440  |
| `dashboard.png`    | The Pomodoro panel and/or the activity dashboard with the heatmap                                | 16 / 10 | 1600 × 1000 |
| `hints.png`        | A real page with the keyboard labels drawn over every link                                       | 16 / 10 | 1600 × 1000 |

## Wiring one up

In `src/components/Features.astro`, import the file and pass it to the matching
`ProductShot`:

```astro
import windowPanel from '@/assets/shots/window-panel.png'; ...
<ProductShot lang={lang} src={windowPanel} ... />
```

The placeholder disappears by itself.

## Taking them

Use a real profile with real tabs — the point of these is that they are not mock-ups.
Crop to the window, not the whole desktop, and keep the browser at a normal size so the
side panel has its usual proportions. A 2× (retina) capture is ideal; the build does not
re-encode images, so what you supply is what ships.
