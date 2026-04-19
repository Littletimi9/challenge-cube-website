# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Visuele portfolio-website ter vervanging van het beoordelingsdocument "Hoofdportfolio Waardecreatie" (50% eindcijfer). Eindgebruiker is de docent/beoordelaar.

**Concept**: De Challenge Cube — een dobbelsteen met QR-codes voor pauze-challenges. 6 categorieën: Speed games, 1v1, Group games, TikTok challenge, Quizmaster, Random minigame.

## Commando's

```bash
npm run dev      # http://localhost:3000 (Turbopack)
npm run build    # Productie-build + typecheck
npm run lint     # ESLint (eslint-config-next)
```

Geen geautomatiseerde tests.

## Architectuur

**Tech stack**: Next.js 16 App Router · TypeScript strict · Tailwind CSS v4 (PostCSS, geen `tailwind.config`) · MDX via `@next/mdx` · Framer Motion v12 · Lucide React v1

**Routing**: 5 rubric-pagina's als `.mdx` bestanden in `app/[route]/page.mdx`. MDX-componenten zijn globaal beschikbaar via `mdx-components.tsx` — geen import nodig in `.mdx` bestanden. Voeg nieuwe componenten altijd toe aan zowel `components/` als `mdx-components.tsx`.

**Rubric → route → primaire componenten**:

| # | Route | Componenten |
|---|---|---|
| 1 | `/nieuwsgierigheid` | OriginStory, EvidenceCard, ReflectionCallout |
| 2 | `/onderzoek` | EvidenceCard, QuoteBlock, PainGainMap, TriangulationDiagram |
| 3 | `/concept` | Timeline, EvidenceCard, ReflectionCallout |
| 4 | `/methoden` | MethodCard, EvidenceCard, ReflectionCallout |
| 5 | `/validatie` | CriteriaTable, ValuePerspectiveGrid, EvidenceCard |

Extra pagina's: `/reflectie`, `/bronnen`

**Bronnen**: `content/bronnen.ts` — TypeScript data met APA-stijl en unieke `id` per bron. `SourceLink` linkt via `/bronnen#[id]`.

**Types**: alle gedeelde prop-interfaces in `lib/types.ts`.

**Layout**: `app/layout.tsx` wraps children in `<main id="main-content" class="max-w-5xl ...">` — pagina's hoeven geen eigen `<main>` te gebruiken.

## Design tokens

Alle kleuren via CSS custom properties in `globals.css`. **Nooit** Tailwind kleur-utilities gebruiken.

| Token | Light | Dark |
|---|---|---|
| `--canvas` | `#F5F1EA` | `#0F0E0C` |
| `--surface` | `#FFFFFF` | `#1A1815` |
| `--text-primary` | `#0A0A0A` | `#F5F1EA` |
| `--text-secondary` | `#5A5A5A` | `#A39B8B` |
| `--accent` | `#E63946` | `#FF5A65` |
| `--accent-light` | `#FDEEF0` | `#3A1519` |
| `--border` | `#E5DED0` | `#2A2722` |
| `--reflection-bg` | `#FFF8E7` | `#1F1A08` |
| `--reflection-border` | `#D4A72C` | `#B8860B` |
| `--success` | `#2D7A4F` | `#4CAF78` |
| `--success-light` | `#EBF7EF` | `#0F2A1E` |
| `--improvement` | `#C2610F` | `#F59E4A` |

Gebruik via: `text-[--text-primary]`, `bg-[--surface]`, `border-[--border]`, etc.

Fonts: `--font-instrument-serif` (headings), `--font-inter` (body) — ingesteld via `next/font/google` in `layout.tsx`.

**`--accent` nooit gebruiken voor grote vlakken** (section backgrounds, hero-fills).

## Kritieke gotchas

**Lucide React v1** heeft een strengere `IconComponentProps`. Bij dynamic lookups op naam:
```ts
type IconComponent = React.ComponentType<{ size?: number; className?: string }>
const Icon = (LucideIcons as unknown as Record<string, IconComponent>)[iconName]
```

**Tailwind v4** gebruikt geen `tailwind.config` — theme extensions gaan via `@theme inline` in `globals.css`.

**Animaties**: altijd `whileInView` met `once: true`, max 0.6s, `prefers-reduced-motion` respecteren.

## Conventies

- Code in Engels, content in Nederlands
- `@/` alias voor project root
- Placeholder-tekst: `[INVULLEN: beschrijving]` (geen lorem ipsum)
- Conventional commits: `feat:`, `fix:`, `content:`, `style:`, `refactor:`
- WCAG 2.2 AA: focus-ring `focus-visible:ring-2 ring-[--accent] ring-offset-2`
- Elke evidence-sectie krijgt een `<RubricBadge>`
- Geen glassmorphism, geen parallax, geen paarse gradienten — academisch portfolio
