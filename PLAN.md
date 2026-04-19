# Bouwplan — Portfolio Challenge Cube

## Overzicht

Een visuele portfolio-website die het beoordelingsdocument "Hoofdportfolio Waardecreatie" vervangt. Gebouwd met Next.js 16, Tailwind v4, MDX en Framer Motion. De site mapt 1-op-1 op 5 rubric-criteria zodat de docent per onderdeel binnen 10 seconden bewijs vindt.

---

## Stap 0: Repo hygiëne

**Bestanden**: `README.md`, `.gitignore`, `.editorconfig`

- `README.md` met:
  - Projectdoel (Challenge Cube portfolio, HBO-beoordeling)
  - Rubric-overzicht: 5 criteria met route per criterium
  - Status-tabel per pagina (draft / review / final)
  - Tech stack (Next.js 16, Tailwind v4, MDX, Framer Motion)
  - How-to-run (`npm install` + `npm run dev`)
  - Commit-conventie: conventional commits (`feat:`, `fix:`, `docs:`, `content:`, `style:`)
- Controleer `.gitignore`: `node_modules/`, `.next/`, `.env*`, `.DS_Store` aanwezig
- `.editorconfig`: `indent_style = space`, `indent_size = 2`, `end_of_line = lf`, `charset = utf-8`, `trim_trailing_whitespace = true`
- Verifieer: `git status` toont geen ongewenste bestanden

---

## Stap 1: Dependencies & MDX configuratie

**Bestanden**: `package.json`, `next.config.ts`, `mdx-components.tsx`

- Installeer: `@next/mdx`, `@mdx-js/loader`, `@mdx-js/react`, `@types/mdx`, `framer-motion`, `lucide-react`
- Update `next.config.ts`: MDX plugin + `pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx']`
- Maak `mdx-components.tsx` aan in project root (vereist door Next.js App Router)
- Verifieer: `npm run dev` start zonder errors

---

## Stap 2: Designsysteem implementeren

**Bestanden**: `app/globals.css`, `app/layout.tsx`

- Definieer CSS custom properties in `globals.css` (zie `docs/design-system.md`)
- Configureer Instrument Serif + Inter via `next/font/google` in `layout.tsx`
- Stel dark mode in via `prefers-color-scheme` media query
- Verifieer: fonts laden correct, kleuren kloppen in light en dark mode

---

## Stap 3: Layout + navigatie + footer

**Bestanden**: `components/layout/Navigation.tsx`, `components/layout/Footer.tsx`, `app/layout.tsx`

- Sticky navigatie met 5 rubric-links + logo
- Mobiel hamburger-menu
- `aria-current="page"` op actieve link
- Skip-to-content link
- Footer met links naar bronnen en reflectie
- Verifieer: navigatie werkt op mobile en desktop, keyboard-accessible

---

## Stap 4: Componenten bouwen

**Bestanden**: `components/**/*.tsx`, `lib/types.ts`

Bouw in deze volgorde (afhankelijkheden eerst):

1. `RubricBadge` — simpelst, gebruikt door andere componenten
2. `SourceLink` — inline citatie, gebruikt door EvidenceCard
3. `ReflectionCallout` — standalone, geen dependencies
4. `EvidenceCard` — gebruikt RubricBadge + SourceLink
5. `QuoteBlock` — standalone citaat-component
6. `MethodCard` — standalone kaart voor modellen
7. `Timeline` — client component met Framer Motion
8. `PainGainMap` — drieluik-layout
9. `CriteriaTable` — responsive tabel/cards
10. `ValuePerspective` — waardeperspectief-kaart

Per component: props definieren, styling implementeren, registreren in `mdx-components.tsx`.

Verifieer: elk component renderen met test-data

---

## Stap 5: MDX rubric-pagina's als templates

**Bestanden**: `app/nieuwsgierigheid/page.mdx`, `app/onderzoek/page.mdx`, `app/concept/page.mdx`, `app/methoden/page.mdx`, `app/validatie/page.mdx`, `app/reflectie/page.mdx`

- Kopieer `docs/content-template.mdx` structuur naar elke pagina
- Vul frontmatter + rubric-metadata per pagina
- Voeg pagina-specifieke componenten toe (bijv. Timeline op /concept, PainGainMap op /onderzoek)
- Alle inhoud als `[INVULLEN: ...]` placeholder
- Vorige/Volgende navigatie onderaan elke pagina
- Verifieer: alle routes bereikbaar, componenten renderen

---

## Stap 6: Homepage

**Bestanden**: `app/page.tsx`, `components/home/Hero.tsx`, `components/home/EvidenceIndex.tsx`

- Hero-sectie: logo, korte pitch over Challenge Cube, CTA
- Concept-uitleg sectie: wat is de Challenge Cube + 6 categorieen
- Bewijslast-index: 5-koloms grid (responsive) met per criterium naam, ambitie-score, 3 bewijsstukken
- Verifieer: homepage laadt, grid is responsive, links werken

---

## Stap 7: Bronnen-pagina + link-systeem

**Bestanden**: `content/bronnen.ts`, `app/bronnen/page.tsx`

- Bronnenlijst als TypeScript data-bestand met APA-formattering
- Elke bron krijgt een uniek `id` als anker
- `SourceLink` component linkt naar `/bronnen#[id]`
- Verifieer: klik op SourceLink scrollt naar juiste bron

---

## Stap 8: Motion-laag (Framer Motion)

**Bestanden**: diverse componenten

- `fadeInUp` animatie op EvidenceCards en secties bij scroll
- Stagger-effect op lijsten (50ms delay per item)
- `prefers-reduced-motion` check: animaties uitschakelen
- Verifieer: animaties subtiel, niet afleidend, respecteren motion-voorkeur

---

## Stap 9: Accessibility & Lighthouse

**Geen nieuwe bestanden — audit en fixes**

- Contrastcheck op alle kleurcombinaties
- Focus-ring op alle interactieve elementen
- Heading-hierarchie controleren (h1→h2→h3)
- Alt-tekst op alle afbeeldingen
- `lang="nl"` op html-element
- Lighthouse audit: target 95+ op Performance, Accessibility, Best Practices, SEO
- Verifieer: keyboard-only navigatie door hele site

---

## Stap 10: Deploy op Vercel

**Bestanden**: geen nieuwe — configuratie via Vercel dashboard

- Koppel GitHub repository aan Vercel
- Controleer build: `npm run build` succesvol
- Stel metadata/OG-images in per pagina
- Test productie-URL op alle routes
- Verifieer: live site werkt identiek aan lokaal
