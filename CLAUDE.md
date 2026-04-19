# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

# Portfolio Challenge Cube — Project Instructies

## Projectdoel

Visuele portfolio-website ter vervanging van het beoordelingsdocument "Hoofdportfolio Waardecreatie". Telt voor 50% van het eindcijfer. De eindgebruiker is de docent/beoordelaar.

**Concept**: De Challenge Cube — een dobbelsteen met QR-codes die korte challenges aanbiedt voor studenten tijdens pauzes. 6 categorieën: Speed games, 1v1, Group games, TikTok challenge, Quizmaster, Random minigame.

## Commando's

```bash
npm run dev      # Start ontwikkelserver op http://localhost:3000
npm run build    # Productie-build
npm run start    # Start productie-server (na build)
npm run lint     # ESLint (eslint-config-next)
```

Er zijn geen geautomatiseerde tests in dit project.

## Architectuur

### Directorystructuur (gepland)

```
app/
  layout.tsx                  # Root layout — fonts, metadata, lang="nl"
  page.tsx                    # Homepage (hero + bewijslast-index)
  globals.css                 # CSS custom properties (design tokens), Tailwind import
  [route]/page.mdx            # Per rubric-criterium: nieuwsgierigheid, onderzoek,
                              #   concept, methoden, validatie, reflectie, bronnen
components/
  layout/
    Navigation.tsx            # Sticky nav met 5 rubric-links + hamburger
    Footer.tsx
  home/
    Hero.tsx
    EvidenceIndex.tsx         # 5-koloms bewijslast-overzicht
  [naam].tsx                  # Overige componenten (zie hieronder)
content/
  bronnen.ts                  # Bronnenlijst als TypeScript data (APA-stijl, unieke ids)
lib/
  types.ts                    # Gedeelde TypeScript interfaces
mdx-components.tsx            # MDX component-registratie (vereist door Next.js App Router)
```

### MDX-setup (Stap 1 in PLAN.md — nog niet geconfigureerd)

Vereist: `@next/mdx`, `@mdx-js/loader`, `@mdx-js/react`, `@types/mdx` installeren en `next.config.ts` updaten met MDX plugin + `pageExtensions`. Zie `PLAN.md` voor details.

### Componenten en hun afhankelijkheden

Bouw in deze volgorde (afhankelijkheden eerst):

1. `RubricBadge` — geen deps; gebruikt door alle andere componenten
2. `SourceLink` — linkt naar `/bronnen#{id}`; gebruikt door EvidenceCard
3. `ReflectionCallout` — standalone
4. `EvidenceCard` — gebruikt RubricBadge + SourceLink
5. `QuoteBlock`, `MethodCard` — standalone
6. `Timeline` — **client component** (Framer Motion stagger)
7. `PainGainMap`, `CriteriaTable`, `ValuePerspective` — standalone
8. `OriginStory` — voor `/nieuwsgierigheid`
9. `TriangulationDiagram` — **client component** (SVG-positionering)
10. `ValuePerspectiveGrid` — **client component** (radar-chart); wrapt `ValuePerspective`

Alle componenten zijn React Server Components tenzij anders aangegeven. Volledige prop-interfaces staan in `docs/components.md`.

### Rubric → Route mapping

| # | Route | Primaire componenten |
|---|---|---|
| 1 | `/nieuwsgierigheid` | OriginStory, EvidenceCard, ReflectionCallout |
| 2 | `/onderzoek` | EvidenceCard, QuoteBlock, PainGainMap, TriangulationDiagram |
| 3 | `/concept` | Timeline, EvidenceCard, ReflectionCallout |
| 4 | `/methoden` | MethodCard, EvidenceCard, ReflectionCallout |
| 5 | `/validatie` | CriteriaTable, ValuePerspectiveGrid, EvidenceCard |

## Design tokens (CSS custom properties)

Alle kleuren via `globals.css` — **nooit** Tailwind kleur-utilities zoals `text-blue-500`.

| Token | Light | Dark | Gebruik |
|---|---|---|---|
| `--canvas` | `#F5F1EA` | `#0F0E0C` | Pagina-achtergrond |
| `--surface` | `#FFFFFF` | `#1A1815` | Cards, panels |
| `--text-primary` | `#0A0A0A` | `#F5F1EA` | Koppen, broodtekst |
| `--text-secondary` | `#5A5A5A` | `#A39B8B` | Subtekst, meta |
| `--accent` | `#E63946` | `#FF5A65` | Links, knoppen, RubricBadges — **nooit voor grote vlakken** |
| `--accent-light` | `#FDEEF0` | `#3A1519` | Hover-states, badge-achtergronden |
| `--border` | `#E5DED0` | `#2A2722` | Borders, scheidingslijnen |
| `--reflection-bg` | `#FFF8E7` | `#1F1A08` | ReflectionCallout achtergrond |
| `--reflection-border` | `#D4A72C` | `#B8860B` | ReflectionCallout rand |

Gebruik via: `text-[--text-primary]`, `bg-[--surface]`, `border-[--border]`, etc.

**Fonts**: Instrument Serif (headings), Inter (body) — via `next/font/google` in `layout.tsx`.

## Rubric (5 criteria)

1. Eigen nieuwsgierigheid als vertrekpunt → `/nieuwsgierigheid`
2. Gebruikersgericht onderzoek → `/onderzoek`
3. Concept ontwikkeling → `/concept`
4. Inzet van modellen en methodieken → `/methoden`
5. Aansluiting eindgebruiker → `/validatie`

Extra pagina's: `/reflectie`, `/bronnen`

## Tech stack

- Next.js 16 (App Router) + TypeScript (strict)
- Tailwind CSS v4 (via PostCSS plugin — geen `tailwind.config`)
- MDX via `@next/mdx` voor content-pagina's
- Framer Motion voor subtiele animaties
- Lucide React voor icons
- Deploy: Vercel

## Conventies

- **Taal**: code in Engels, content in Nederlands
- **Componentnamen**: PascalCase (`EvidenceCard.tsx`)
- **Bestanden**: kebab-case voor routes, PascalCase voor componenten
- **Imports**: `@/` alias voor project root
- **Commits**: conventional commits (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `content:`)

## Do's

- Gebruik altijd `RubricBadge` op evidence-secties — elke sectie met bewijs krijgt een RubricBadge
- Houd content (MDX) en presentatie (TSX) gescheiden
- Respecteer `prefers-reduced-motion` bij alle animaties (`whileInView` met `once: true`)
- Alt-tekst op alle afbeeldingen; gebruik `<Image>` van Next.js
- WCAG 2.2 AA — focus-ring: `focus-visible:ring-2 ring-[--accent] ring-offset-2`
- Semantic HTML (`article`, `section`, `nav`, `main`)
- Placeholder-tekst: `[INVULLEN: beschrijving]`-marker

## Don'ts

- **Geen paarse gradienten, geen glassmorphism, geen parallax** — dit is een academisch portfolio
- Geen lorem ipsum — gebruik `[INVULLEN: beschrijving]` markers
- Geen autoplay animaties; geen animaties >0.6s
- Geen inline styles — altijd Tailwind of CSS custom properties
- Geen `any` types in TypeScript
- **Nooit `--accent` gebruiken voor grote vlakken** (section backgrounds, hero-fills)
- Geen Tailwind kleur-utilities — gebruik altijd `text-[--text-primary]`, `bg-[--surface]`, etc.

## Nieuwe content toevoegen

1. Open de MDX-pagina in `app/[route]/page.mdx`
2. Vervang `[INVULLEN: ...]` markers met je eigen tekst
3. Voeg componenten toe: `<EvidenceCard>`, `<QuoteBlock>`, `<ReflectionCallout>`, etc.
4. Voeg bronnen toe in `content/bronnen.ts` met een uniek `id`
5. Link naar bronnen met `<SourceLink id="bron-id" />`
6. Update `status` in de pagina metadata: `'draft'` → `'review'` → `'final'`

## Planning- en designdocumenten

- `PLAN.md` — stapsgewijs bouwplan (10 stappen, incl. afhankelijkheden)
- `docs/design-system.md` — volledige kleur-, typografie-, spacing- en motion-specs
- `docs/components.md` — component-specs met volledige prop-interfaces
- `docs/information-architecture.md` — sitemap, rubric-mapping, navigatiestructuur
- `docs/wireframes.md` — ASCII wireframes per pagina
