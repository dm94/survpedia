# Design system — Survpedia

<!-- impeccable:design-schema 1 -->

## World

**The field manual.** Survpedia is set like a printed engineer's handbook: cool grey-green stock, ink, hairlines, serif reading voice, monospaced figures. The reference object is a technical manual you would keep at a workbench, not a SaaS dashboard.

The old look is now an explicit anti-reference: gradient wordmark, blue→cyan accents, soft-shadowed rounded cards, and a hero that described the product instead of indexing it.

## Palette

Restrained strategy: neutrals tinted from paper, one accent, and hue used only where it carries data (element categories).

| Token | Light | Dark | Role |
|---|---|---|---|
| `paper` | `#e8eae2` (232 234 226) | `#161814` (22 24 20) | page ground |
| `paper-sunken` | `#dfe1d7` (223 225 215) | `#1d201a` (29 32 26) | inset fields, code, search input |
| `ink` | `#171a16` (23 26 22) | `#e7e9dd` (231 233 221) | text, rules at 2px |
| `ink-muted` | `#5b6056` (91 96 86) | `#a1a596` (161 165 150) | secondary text, mono labels (5.3:1 light, 7.0:1 dark) |
| `rule` | `#c9ccc1` (201 204 193) | `#33362e` (51 54 46) | 1px hairlines |
| `rule-strong` | `#a6aa9b` (166 170 155) | `#4a4e42` (74 78 66) | scrollbar, list ticks |
| `accent` | `#b23a1c` (178 58 28) | `#e0552c` (224 85 44) | links, active nav, focus, progress |

Element categories (the only saturated colour system in the UI; values are `--cat`, mixed 9% into the ground for tile fill and used at full strength for the symbol and hover outline):

| Key | Light | Dark |
|---|---|---|
| nonmetal | `#3a5c3c` | `#86ab88` |
| noble | `#6b5a86` | `#a191c0` |
| alkali | `#a8432c` | `#d97b5f` |
| alkaline | `#8a6a24` | `#c9a952` |
| transition | `#35596e` | `#7ba0b8` |
| post-transition | `#2a6058` | `#6fb0a4` |
| metalloid | `#4d6437` | `#9db27a` |
| lanthanide | `#7b4762` | `#c08ba7` |
| actinide | `#74303a` | `#c07b84` |
| other | `#6d6a5c` | `#9a9483` |

Category hue is assigned by `getCategoryKey()` in `src/lib/element-category.ts`, which normalizes the localized `category` strings stored in content. Never match category names inline.

## Type

Two self-hosted families, no external font requests.

- **Reading + display:** `Newsreader Variable` (`--font-read`). Serif body at 17px/1.72; entry titles `clamp(2.1rem, 5.2vw, 3.4rem)` at weight 400 and `-0.025em`; masthead `clamp(3rem, 10vw, 5.75rem)` at `-0.035em`. Emphasis comes from size and weight, never gradient.
- **Data:** `IBM Plex Mono` 400/500 (`--font-data`). Reserved for figures, symbols, formulas, counts, reading time, tags, control labels and section labels — never for prose.
- Measure: 60ch for entry text (≈78 characters at 17px), ~52ch for index descriptions. Labels are 11px uppercase at `0.10–0.14em`; nothing functional ships below 11px.

## Composition

- Document, not dashboard: content sits in a single 1180px column; entry pages split into a reading column plus a 248px marginal rail separated by a 1px rule.
- Lists, not cards: materials, inventions and knowledge indexes are ruled catalogue rows (`Card.astro` → `.entry-row`), one per line, with a 48px thumbnail where an image exists. This scales to 543 inventions.
- Elements are a hairline lattice: `gap-px` over `bg-rule`, tiles square, category tint as fill, `outline: 1px` of the category hue on hover.
- Radii are 0 everywhere. Elevation is declared once as a border; there are no shadows.
- Headings never take an eyebrow/kicker above them; the count sits opposite the heading on the same baseline.

## Components

- `.entry-row` — catalogue row; a 1px accent line scales in from the left on hover/focus (220ms).
- `.el-tile` — element square; mono number, serif symbol, mono uppercase name.
- `.el-swatch` — 10px legend square using the same `--cat` mapping.
- `.meta-label` / `.tag` — mono uppercase labels and bordered 11px tags (no pills).
- `.entry-body` — long-form content styling: serif h2 with a hairline above, rule ticks for bullets, mono numerals in ordered lists, tables in mono with hairline rows, accent links with a 3px underline offset.
- `Entry.astro` — shared entry shell: back link, 2px ink rule, provenance tag + reading time, title, `lead` slot, content, `rail` slot.

## Motion

One authored moment: the accent rule under a catalogue row drawing in from the left. Header progress hairline is 2px accent. All transitions are 140–220ms `cubic-bezier(0.2, 0.8, 0.2, 1)`; `prefers-reduced-motion` collapses them to 0.01ms.

## Browser surfaces

Themed selection (accent at 18%), accent caret, paper/ink scrollbars, 2px accent focus outline at 2px offset, tabular figures wherever numbers align, oldstyle figures in prose.

## Print

`@media print` drops header, footer, progress bar and scroll control, forces black on white, removes link colour, and avoids breaks inside tables, images and preformatted blocks — a page is meant to be carried to a workbench.

## Refused

Gradient text; eyebrow labels above headings; shadowed rounded cards as page structure; nested cards; icon+heading+text tile grids as the primary listing; mono used as decoration for prose; decorative blur/glass; category hue applied to anything that is not data. Also refused: a warm cream/beige ground (the default AI editorial palette) — the stock is a cool grey-green, which is what keeps the paper world from reading as a template.
