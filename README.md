# Portfolio Challenge Cube

Visuele portfolio-website ter vervanging van het beoordelingsdocument "Hoofdportfolio Waardecreatie" (50% eindcijfer). De eindgebruiker is de docent/beoordelaar.

**Concept**: De Challenge Cube — een dobbelsteen met QR-codes die korte challenges aanbiedt voor studenten tijdens pauzes.

---

## Rubric-overzicht

| # | Criterium | Route | Status |
|---|---|---|---|
| 1 | Eigen nieuwsgierigheid als vertrekpunt | `/nieuwsgierigheid` | draft |
| 2 | Gebruikersgericht onderzoek | `/onderzoek` | draft |
| 3 | Concept ontwikkeling | `/concept` | draft |
| 4 | Inzet van modellen en methodieken | `/methoden` | draft |
| 5 | Aansluiting eindgebruiker | `/validatie` | draft |
| — | Eindreflectie | `/reflectie` | draft |
| — | Bronnenlijst | `/bronnen` | draft |

---

## Tech stack

- Next.js 16 (App Router) + TypeScript (strict)
- Tailwind CSS v4 (via PostCSS plugin)
- MDX via `@next/mdx`
- Framer Motion
- Lucide React
- Deploy: Vercel

---

## Aan de slag

```bash
npm install
npm run dev      # http://localhost:3000
```

Overige commando's:

```bash
npm run build    # Productie-build
npm run lint     # ESLint
```

---

## Commit-conventie

Conventional Commits:

| Prefix | Gebruik |
|---|---|
| `feat:` | Nieuwe functionaliteit of component |
| `fix:` | Bugfix |
| `content:` | Tekst, MDX-inhoud toevoegen of aanpassen |
| `style:` | Styling zonder logica-wijziging |
| `docs:` | Documentatie (README, CLAUDE.md, etc.) |
| `refactor:` | Refactoring zonder gedragswijziging |
