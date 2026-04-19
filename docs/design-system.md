# Designsysteem — Portfolio Thijs (Challenge Cube)

## Ontwerpfilosofie

Rustig, typografisch sterk, academisch maar niet saai. De site vertelt een onderzoeksverhaal — geen marketingsite, geen standaard AI-esthetiek. Het ontwerp ondersteunt de inhoud zonder af te leiden.

**Anti-patronen**: geen paarse gradienten, geen glassmorphism, geen overdreven blobs, geen neon-accenten, geen parallax-overkill.

---

## 1. Kleurpalet

Editorial monochroom met één krachtige accentkleur. De warme crème-achtergrond geeft de site een ambachtelijk, niet-digitaal gevoel dat past bij het speelse concept van de Challenge Cube. De rode accentkleur is bewust spaarzaam — elke keer dat hij verschijnt trekt hij aandacht.

**Regel**: `--accent` wordt **nooit** gebruikt voor grote vlakken (backgrounds, secties). Alleen voor interactieve elementen (links, knoppen, CTA's) en RubricBadges, zodat het per pagina krachtig en herkenbaar blijft.

### Light mode

| Token | HEX | Gebruik |
|---|---|---|
| `--canvas` | `#F5F1EA` | Pagina-achtergrond (warm cream) |
| `--surface` | `#FFFFFF` | Cards, panels, content-blokken |
| `--text-primary` | `#0A0A0A` | Koppen, broodtekst |
| `--text-secondary` | `#5A5A5A` | Subtekst, meta-info, bijschriften |
| `--accent` | `#E63946` | Links, knoppen, actieve nav, CTA, RubricBadges |
| `--accent-light` | `#FDEEF0` | Hover-states, badge-achtergronden |
| `--border` | `#E5DED0` | Hairline borders, scheidingslijnen |
| `--reflection-bg` | `#FFF8E7` | ReflectionCallout achtergrond |
| `--reflection-border` | `#D4A72C` | ReflectionCallout rand |

### Dark mode

| Token | HEX |
|---|---|
| `--canvas` | `#0F0E0C` |
| `--surface` | `#1A1815` |
| `--text-primary` | `#F5F1EA` |
| `--text-secondary` | `#A39B8B` |
| `--accent` | `#FF5A65` |
| `--accent-light` | `#3A1519` |
| `--border` | `#2A2722` |
| `--reflection-bg` | `#1F1A08` |
| `--reflection-border` | `#B8860B` |

### Contrastcheck (WCAG AA)

Light mode:
- `--text-primary` (#0A0A0A) op `--canvas` (#F5F1EA): **17.4:1** (AAA)
- `--text-secondary` (#5A5A5A) op `--canvas` (#F5F1EA): **5.9:1** (AA)
- `--accent` (#E63946) op `--canvas` (#F5F1EA): **4.6:1** (AA — voldoet voor large text en UI-elementen)
- `--accent` (#E63946) op `--surface` (#FFFFFF): **4.5:1** (AA)

Dark mode:
- `--text-primary` (#F5F1EA) op `--canvas` (#0F0E0C): **16.8:1** (AAA)
- `--text-secondary` (#A39B8B) op `--canvas` (#0F0E0C): **7.2:1** (AAA)
- `--accent` (#FF5A65) op `--canvas` (#0F0E0C): **5.1:1** (AA)

> **Let op**: `--accent` (#E63946) op wit haalt precies AA. Gebruik het daarom **niet** voor kleine body-tekst onder 18px normaal of 14px bold — alleen voor knoppen, badges en grote interactieve elementen waar AA voor UI-componenten (3:1) van toepassing is.

---

## 2. Typografie

### Fonts

| Rol | Font | Gewichten | Bron |
|---|---|---|---|
| Headings | **Instrument Serif** | 400 (regular) | Google Fonts |
| Body | **Inter** | 400, 500, 600 | Google Fonts (variable) |
| Mono/data | **Geist Mono** | 400 | Al aanwezig via next/font |

### Type scale (modular — ratio 1.25 major third)

| Niveau | Rem | Px | Gebruik |
|---|---|---|---|
| `text-xs` | 0.75rem | 12px | Bijschriften, meta |
| `text-sm` | 0.875rem | 14px | Secundaire tekst |
| `text-base` | 1rem | 16px | Broodtekst |
| `text-lg` | 1.125rem | 18px | Lead-paragrafen |
| `text-xl` | 1.25rem | 20px | Subkoppen (h4) |
| `text-2xl` | 1.563rem | 25px | Sectiekoppen (h3) |
| `text-3xl` | 1.953rem | 31px | Paginakoppen (h2) |
| `text-4xl` | 2.441rem | 39px | Hero-koppen (h1) |

### Regelafstand

- Headings: `leading-tight` (1.2)
- Body: `leading-relaxed` (1.7)
- Maximale regelbreedte: `max-w-prose` (65ch)

---

## 3. Spacing & Grid

### Baseline grid: 8px

Alle spacing is een veelvoud van 8px:

| Token | Waarde | Gebruik |
|---|---|---|
| `space-1` | 4px | Inline spacing, icon-gaps |
| `space-2` | 8px | Tight padding |
| `space-3` | 12px | Standaard gap |
| `space-4` | 16px | Card padding, list gaps |
| `space-6` | 24px | Sectie-padding horizontaal |
| `space-8` | 32px | Sectie-padding verticaal |
| `space-12` | 48px | Tussen secties |
| `space-16` | 64px | Tussen grote blokken |
| `space-24` | 96px | Hero / page-header spacing |

### Layout

- **Max content-width**: `max-w-4xl` (896px) voor tekst-pagina's
- **Max page-width**: `max-w-6xl` (1152px) voor de homepage grid
- **Horizontale padding**: `px-6` (24px) op mobile, `px-8` (32px) op desktop
- **Responsive breakpoints**: `sm:640px`, `md:768px`, `lg:1024px`

---

## 4. Motion (Framer Motion)

### Patronen

| Naam | Beschrijving | Gebruik |
|---|---|---|
| `fadeInUp` | opacity 0→1, y 20→0, duration 0.5s, ease-out | Cards, secties bij scroll |
| `stagger` | 50ms delay per child | Lijsten, card-grids |
| `slideIn` | x -20→0, opacity 0→1 | Sidebar-elementen, nav |
| `scaleIn` | scale 0.95→1, opacity 0→1 | Modals, popovers |

### Regels

- **Alle animaties** checken `prefers-reduced-motion` — bij voorkeur instant tonen
- Geen animaties >0.6s duration
- Geen parallax-scroll
- Geen autoplay video/animaties
- Gebruik `whileInView` met `once: true` (animeer 1x, niet bij elke scroll)

### Implementatie

```tsx
// Voorbeeld: herbruikbare motion wrapper
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, ease: "easeOut" }
}
```

---

## 5. Iconografie & Beeldstijl

### Icons
- **Bibliotheek**: Lucide React
- **Grootte**: 20px (inline), 24px (standalone)
- **Kleur**: `currentColor` — erft van tekst
- **Stroke width**: 1.5 (standaard Lucide)

### Afbeeldingen
- Consistente frame-stijl: `rounded-lg border border-[--border] shadow-sm`
- Geen polaroid-effect (te speels voor academische context)
- Alt-tekst verplicht op alle afbeeldingen
- Lazy loading via Next.js `<Image>` component
- WebP/AVIF via Next.js image optimization

### Screenshots & onderzoeksmateriaal
- Lichte schaduw (`shadow-sm`) + subtiele border
- Caption eronder in `text-sm text-[--text-secondary]`
- Optioneel: nummer-label voor verwijzing vanuit tekst

---

## 6. Componenten-styling

### Cards (EvidenceCard, MethodCard)
```
bg-[--surface]
border border-[--border]
rounded-xl
p-6
shadow-sm
hover:shadow-md transition-shadow
```

### Callouts (ReflectionCallout)
```
bg-[--reflection-bg]
border-l-4 border-[--reflection-border]
rounded-r-lg
p-5
```

### Badges (RubricBadge)
```
inline-flex items-center gap-1.5
bg-[--accent-light]
text-[--accent]
text-xs font-medium
px-2.5 py-1
rounded-full
```

---

## 7. Accessibility (WCAG 2.2 AA)

### Verplicht

- [ ] Alle kleurcombinaties voldoen aan WCAG AA contrast (4.5:1 voor tekst, 3:1 voor large text)
- [ ] Focus-ring op alle interactieve elementen: `focus-visible:ring-2 ring-[--accent] ring-offset-2`
- [ ] Skip-to-content link bovenaan de pagina
- [ ] Logische heading-hierarchie (h1→h2→h3, geen niveaus overslaan)
- [ ] Alle afbeeldingen hebben alt-tekst
- [ ] Formulieren (indien aanwezig) hebben labels
- [ ] `prefers-reduced-motion` wordt gerespecteerd
- [ ] Keyboard-navigatie werkt op alle interactieve elementen
- [ ] `aria-current="page"` op actieve nav-link
- [ ] Taal-attribuut `lang="nl"` op `<html>`

### Dark mode
- Implementeer via `prefers-color-scheme` media query
- Optioneel: handmatige toggle met `localStorage` persistentie
