# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Visuele portfolio-website ter vervanging van het beoordelingsdocument "Hoofdportfolio Waardecreatie" (50% eindcijfer). Eindgebruiker is de docent/beoordelaar.

**Concept**: De Challenge Cube — een dobbelsteen met QR-codes voor pauze-challenges. Zes categorieën: Speed games, 1v1, Group games, TikTok, Quizmaster, Random minigame.

**Design blueprint** staat in `docs/design-blueprint.md` — single source of truth voor alle visuele beslissingen. Lees hem volledig door voordat je iets aan styling of componenten verandert; wijk er niet van af zonder expliciete update van dat document.

## Commando's

```bash
npm run dev      # http://localhost:3000 (Turbopack)
npm run build    # Productie-build + typecheck
npm run lint     # ESLint (eslint-config-next)
```

Geen geautomatiseerde tests. Verifieer frontend-wijzigingen met `npm run dev` + handmatig in browser.

## Architectuur

**Tech stack**: Next.js 16 App Router · React 19 · TypeScript strict · Tailwind CSS v4 (PostCSS, geen `tailwind.config`) · MDX via `@next/mdx` · Framer Motion v12 · Lucide React v1

### Component-folders

- `components/layout/` — Navigation (sticky blur, 7 links, `aria-current`), Footer (status-bar)
- `components/home/` — Hero, HeroCollage, StatsStrip, RubricIndex + RubricRow, Pitch, Categories
- `components/rubric/` — PageHead, SectionHeading, RubricBadge, SourceLink, EvidenceCard, EvidenceGrid, Triangulation, QuoteBlock, ReflectionGrid, MethodCard, Timeline, CriteriaTable, PageNav, ValuePerspectives
- `components/motion/FadeIn.tsx` — client-wrapper die `useReducedMotion()` respecteert

Types worden inline per component gedefinieerd en geëxporteerd waar nodig (bv. `RubricRowData` uit RubricRow). Géén centrale `lib/types.ts`.

### Routing

5 rubric-pagina's + `/reflectie` als `.mdx` bestanden in `app/<route>/page.mdx`. `/bronnen` is een `page.tsx` die typed data uit `content/bronnen.ts` rendert. Homepage (`app/page.tsx`) componeert Hero + StatsStrip + RubricIndex + Pitch.

MDX-componenten zijn globaal beschikbaar via `mdx-components.tsx` — géén import nodig in `.mdx` bestanden. **Bij elk nieuw MDX-component: toevoegen aan `components/rubric/` én registreren in `mdx-components.tsx`.**

### Rubric → route → primaire componenten

| # | Route | Componenten |
|---|---|---|
| 1 | `/nieuwsgierigheid` | EvidenceGrid + EvidenceCard, ReflectionGrid |
| 2 | `/onderzoek` | Triangulation, QuoteBlock, EvidenceGrid, ReflectionGrid |
| 3 | `/concept` | Timeline, EvidenceGrid, ReflectionGrid |
| 4 | `/methoden` | MethodCard (grid van 3), ReflectionGrid |
| 5 | `/validatie` | CriteriaTable, ValuePerspectives, EvidenceGrid, ReflectionGrid |

Elke rubric-pagina begint met `<PageHead>` (groot mint-nummer + titel + meta) en eindigt met `<PageNav>` (vorige/volgende).

### Content & data

- `content/rubrics.ts` — array voor homepage RubricIndex, getypt via `RubricRowData`
- `content/bronnen.ts` — typed `Source[]` met APA-stijl, `SourceType`-union en `typeLabels`. Elke bron heeft uniek `id` — `SourceLink` deep-linkt via `/bronnen#<id>`.

### Layout

`app/layout.tsx` wrapt children in `<main id="main-content">` zónder max-width — de blueprint is **full-width**, content wordt beperkt door grid-kolommen binnen secties, niet door een centrale container. Skip-to-content link + `lang="nl"` staan in layout.

## Design tokens

Alle kleuren via CSS custom properties in `app/globals.css` (dark filmic, géén lightmode). **Nooit** Tailwind kleur-utilities gebruiken.

**Core**:
`--canvas: #161613` · `--canvas-elevated: #1A1A17` · `--surface: #1F1F1B`

**Text**:
`--text-primary: #F5F5F2` · `--text-secondary: #C8C8BE` · `--text-muted: #A8A89E` · `--text-dim: #5A5A50`

**Borders**:
`--border: rgba(245,245,242,0.1)` · `--border-strong: rgba(245,245,242,0.2)`

**Accents** (spaarzaam — signaal, geen decoratie):
`--accent-mint: #5EE3D3` + `--accent-mint-soft` + `--accent-mint-border` · `--accent-amber: #E8B84F` + `--accent-amber-soft`

**Categorieën**: `--cat-speed`, `--cat-1v1`, `--cat-group`, `--cat-tiktok`, `--cat-quiz`, `--cat-random`

Fonts: `--font-instrument-serif` (headings én card-titels), `--font-inter` (body) — beide via `next/font/google` in `layout.tsx`. Géén font-weight 600 of 700; alleen 400 en 500.

Utility: `.hl` in `globals.css` = mint-pill-highlight voor één woord in hero-titels.

## Kritieke gotchas

**Tailwind v4**: géén `tailwind.config`. Theme-aliassen staan in `@theme inline` in `globals.css`. Nieuwe tokens altijd als CSS custom properties, niet als Tailwind theme extensions.

**Styling**: voor dynamische kleurwaarden gebruik inline `style={{ color: 'var(--token)' }}`, niet `className="text-[var(--token)]"` — Tailwind v4 parseert die laatste soms inconsistent binnen arbitrary values. Tailwind gebruik je voor layout/spacing, custom properties voor kleur.

**Lucide React v1** heeft strenge `IconComponentProps`. Bij dynamic icon-lookups op naam:
```ts
type IconComponent = React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>
const Icon = (LucideIcons as unknown as Record<string, IconComponent>)[iconName]
```
MethodCard gebruikt deze pattern.

**Animaties**: gebruik `<FadeIn>` uit `components/motion/` of volg het pattern uit `Timeline.tsx` — altijd `useReducedMotion()` checken en statisch teruggeven bij `reduce`, `once: true` op viewport, max 500ms duration. Blueprint verbiedt parallax, scroll-jacking en autoplay-video met sound.

**Focus-ring** is globaal gedefinieerd via `*:focus-visible` in `globals.css` (mint outline + 2px offset). Voeg géén per-component focus classes toe — dat dubbelt de ring.

## Conventies

- Code in Engels, content in Nederlands
- `@/` alias voor project root
- Placeholder-tekst altijd als `[INVULLEN: beschrijving]` — géén lorem ipsum
- Conventional commits: `feat:`, `fix:`, `content:`, `style:`, `refactor:`
- Nooit auto-committen of pushen — vraag eerst toestemming
- Heading-hiërarchie strikt: h1 alleen in Hero / PageHead (één per pagina), h2 in SectionHeading en homepage-headings, h3 op cards en list-items
- Elke evidence-sectie krijgt een `<RubricBadge>` bovenaan
- Géén glassmorphism, géén parallax, géén paarse gradienten — academisch portfolio, donker-filmisch
- Accent-kleuren (mint/amber) spaarzaam: nummers, highlights, hovers — nooit grote vlakken
