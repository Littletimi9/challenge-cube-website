# Design Blueprint — Portfolio Challenge Cube

> Single source of truth voor alle visuele beslissingen. Wijk hier niet van af zonder expliciete aanpassing van dit document.

---

## Ontwerpfilosofie

Donker, filmisch, typografisch dominant. Geen magazine-editorial, geen Bootstrap-corporate. Een portfolio dat voelt als een serieuze documentaire-site: NASA-achtige hiërarchie, This is Beyond-achtige typografische moves, maar met een eigen mint/amber-signatuur.

**De site is informatief én visueel.** Tekst en beeld in balans, niet tekst-zwaar en niet beeld-zwaar. Elke sectie moet rubric-bewijs dragen én visueel rijk zijn.

**Anti-patronen:**
- Geen puur zwart (#000) — voelt dood
- Geen Tailwind-default blauw — voelt generiek
- Geen gradient-blobs, glassmorphism, parallax-scrolling
- Geen Instagram/TikTok-carousel van content
- Geen donker-paars/neon — past niet bij academische context

---

## 1. Kleurpalet

Donkere basis met één koele (mint) en één warme (amber) accentkleur. Beide accentkleuren worden **spaarzaam** gebruikt — ze zijn signaal, geen decoratie.

### Core tokens

| Token | HEX | Gebruik |
|---|---|---|
| `--canvas` | `#161613` | Pagina-achtergrond (warm donker, niet puur zwart) |
| `--canvas-elevated` | `#1A1A17` | Verhoogde secties, subtiel contrast |
| `--surface` | `#1F1F1B` | Cards en blokken die van canvas moeten pop-en |
| `--text-primary` | `#F5F5F2` | Headings, broodtekst (warm wit, niet puur wit) |
| `--text-secondary` | `#C8C8BE` | Lead-paragrafen, subtiele tekst |
| `--text-muted` | `#A8A89E` | Meta-info, labels, eyebrow-tekst |
| `--text-dim` | `#5A5A50` | Decoratieve labels, status-tekst |
| `--border` | `rgba(245,245,242,0.1)` | Hairlines tussen secties |
| `--border-strong` | `rgba(245,245,242,0.2)` | Actieve borders, cards |

### Accents

| Token | HEX | Gebruik |
|---|---|---|
| `--accent-mint` | `#5EE3D3` | Primary accent: nummers, highlights, active nav, hover |
| `--accent-mint-soft` | `rgba(94,227,211,0.12)` | Achtergrond voor subtiele mint-blokken |
| `--accent-mint-border` | `rgba(94,227,211,0.3)` | Borders van mint-accented cards |
| `--accent-amber` | `#E8B84F` | Secondary accent: ambitie-labels, reflectie-warm |
| `--accent-amber-soft` | `rgba(232,184,79,0.15)` | Warme accent-achtergronden |

### Category colors (voor de 6 Cube-categorieën)

| Categorie | HEX | Gebruik |
|---|---|---|
| Speed | `#E8B84F` | Amber |
| 1v1 | `#E88B6C` | Coral |
| Group | `#D47A95` | Roze |
| TikTok | `#5EE3D3` | Mint |
| Quiz | `#8BA8DB` | Blauw |
| Random | `#C8C8BE` | Neutraal |

### Light mode

**Bewust niet standaard.** De site is primair donker. Als er ooit een lightmode komt wordt dat een aparte beslissing — nu eerst donker perfectioneren.

---

## 2. Typografie

### Fonts

| Rol | Font | Gewicht | Fallback |
|---|---|---|---|
| Display & headings | **Instrument Serif** | 400 | Georgia, serif |
| Body | **Inter** | 400, 500 | system-ui, sans-serif |
| Mono (stats, data) | **Geist Mono** | 400 | ui-monospace |

Geen font-weight 600 of 700. Alleen 400 en 500. Meer gewichten maken het zwaarder dan het moet zijn.

### Type scale

| Rol | Size | Line-height | Letter-spacing | Gebruik |
|---|---|---|---|---|
| Mega display | 88–96px | 0.95–0.98 | -0.03em | Hero-titel homepage |
| Display | 56–72px | 1 | -0.02em | Groot pagina-nummer (56px), pagina-titel (64px) |
| Heading L | 40px | 1.1 | -0.01em | Sectie-heading binnen pagina |
| Heading M | 32–36px | 1.2 | -0.01em | Grote pitch-tekst |
| Heading S | 28px | 1.15 | -0.005em | Card-titels, rubric-naam in lijst |
| Lead | 18–19px | 1.55 | 0 | Inleidende paragrafen |
| Body | 15–16px | 1.6 | 0 | Broodtekst in cards, refl-text |
| Body small | 13–14px | 1.5–1.6 | 0 | Secundaire body, dense evidence |
| Label | 11px | 1.4 | 0.2em | Eyebrows, section-labels, nav |
| Meta | 10–12px | 1.5 | 0.15em | Bronnen, crumbs, status |

### Typografische regels

- **Eyebrows altijd uppercase**, letter-spacing 0.2em, color `--text-muted`
- **Headings in Instrument Serif** — inclusief card-titels, niet alleen hero
- **Geen mid-sentence bolding** in body — gebruik kleur voor nadruk, niet gewicht
- **Hero-titel krijgt altijd één gehighlight woord** in mint-pill (`<span class="hl">`)
- **Grote nummers in hero en page-heads** in Instrument Serif, kleur mint

---

## 3. Spacing & ritme

### Baseline
8px grid. Alle padding/margin is multiple van 8.

### Vertical rhythm regels (cruciaal)

Niet elke sectie krijgt dezelfde padding. Dit was de fout in v1. Introduceer ritme:

| Sectie-type | Padding (desktop) |
|---|---|
| Hero | `py-18 px-10` (72px vertical) |
| Page-head (rubric-pagina) | `py-20 px-10` (80px vertical) |
| Content-sectie (standard) | `py-20 px-10` |
| Quote-sectie | `py-15 px-10` met eigen achtergrond (`--canvas-elevated`) — breekt ritme |
| Stats-strip | `py-7 px-10` (28px vertical) — bewust compact |
| Pitch-sectie | `py-20 px-10` met `--canvas-elevated` achtergrond |

Dus: **na elke grote sectie breekt een compacte sectie het ritme** (stats-strip, quote, status-bar). Dat voorkomt de "gelijkmatige soep"-fout.

### Horizontale padding

- Mobile: `px-6` (24px)
- Tablet: `px-8` (32px)  
- Desktop: `px-10` (40px)

Geen `max-width` container op de pagina — de site is full-width. Content wordt beperkt door grid-kolommen binnen secties, niet door een centraal max-width.

### Grid gaps

- Tussen cards: `gap-0.5` (dus 0.5px border-gap, achtergrond zichtbaar = geeft "divider-grid" effect)
- Tussen kolommen in heading-secties: `gap-12` tot `gap-16`
- Tussen categorieën (pills): `gap-2` (8px)

---

## 4. Componenten

### Navigatie

Sticky top. `backdrop-filter: blur(12px)`, `background: rgba(22,22,19,0.88)`. Border-bottom 0.5px.

- Logo links (Instrument Serif, 20px, label "Challenge Cube")
- 7 nav-links rechts, spacing `gap-8` (32px), font-size 13px, letter-spacing 0.02em
- Inactief: `--text-muted`. Actief: `--text-primary` + border-bottom 1px mint.
- Hover: color transition naar `--text-primary`

### Hero (alleen homepage)

Grid `1.3fr 1fr`, `gap-12`. Links typografie, rechts beeld-collage.

**Links:**
- Eyebrow (11px uppercase)
- Mega display title met mint-highlight op één woord
- Lead (18px, max-width 520px)
- Twee buttons: primary (wit bg, donker text) + ghost (border only)

**Rechts: beeld-collage (440px hoog)**
- Grid `1.4fr 1fr`, gap 12px
- Groot hoofdbeeld (links): aspect portrait, ruimte voor video van Cube
- Twee kleine beelden gestapeld (rechts): gap 12px

**Placeholder-fallback (tot beeld er is):**
- Hoofdbeeld: gradient `linear-gradient(135deg, #E8B84F 0%, #D95A3C 55%, #8B2E4C 100%)` met label "VIDEO VAN CUBE"
- Small A: gradient mint → donker-mint
- Small B: gradient marine → diep-marine

### Stats-strip

Compact, `py-7`. Grid van 4 kolommen.
- Nummer in Instrument Serif 36px mint
- Label 11px uppercase `--text-muted`
- Border-top én border-bottom (`--border`)

### Rubric-index (op homepage)

Typografische lijst, niet kaartjes.

```
Grid template: 80px 220px 1fr 180px 40px
              [num] [naam] [desc] [meta] [arrow]
```

- Border tussen rijen: `--border`
- Hover: padding-left transition naar 16px + subtiele mint-gradient background (`linear-gradient(90deg, rgba(94,227,211,0.05) 0%, transparent 80%)`)
- Nummer: Instrument Serif 56px mint
- Naam: Instrument Serif 28px
- Desc: 14px `--text-secondary`
- Meta: rechts uitgelijnd, "AMBITIE — 8+" in amber, "X bewijsstukken" onder in muted
- Pijl rechts, verspringt naar mint + 6px bij hover

### Page-head (elke rubric-pagina)

Grid `0.6fr 1.4fr`, `gap-15`.

**Links:**
- Crumbs (11px, current criterium in mint)
- Mega nummer: Instrument Serif 120px mint
- Page label onder nummer (11px uppercase)

**Rechts:**
- Page-title: Instrument Serif 64px
- Lead: 18px max-width 640px
- Meta-strip onderaan: 3 kolommen (methoden / respondenten / periode), border-top

### EvidenceCard

Padding 40px. Achtergrond `--canvas` (valt binnen grid met 0.5px borders). 

- RubricBadge (bovenaan, 10px uppercase, mint met border)
- Titel: Instrument Serif 28px
- Drie subsecties: label (10px uppercase dim) + text (14px body)
- Source-link onderaan met border-top: mint 12px

### Triangulation block (rubric 2)

Drie kolommen met 0.5px divider-grid, daaronder één convergence-block.

- Elk tri-item: type-label (mint, uppercase 10px), methode-naam (Instrument Serif 24px), count (12px muted), finding (13px body)
- Convergence: `rgba(94,227,211,0.06)` achtergrond + `rgba(94,227,211,0.3)` border, padding 24x32, label + Instrument Serif 22px

### QuoteBlock

Eigen sectie met `--canvas-elevated` achtergrond.
- Groot openings-aanhalingsteken (Instrument Serif 72px mint, line-height 0.5)
- Quote: Instrument Serif 36px, line-height 1.2, max-width 900px
- Attributie: 12px uppercase muted

### ReflectionGrid

Twee kolommen met 0.5px divider.
- Linker (goed): dot + label in mint
- Rechter (beter): dot + label in amber
- Text: 15px body

### Categories-pills (6 stuks)

Grid 6-koloms, gap 8px.
- Padding 12x10
- Font 12px medium, letter-spacing 0.05em
- Elke pill eigen kleur uit category colors, met soft-background en border in diezelfde tint
- Border-radius 3px (niet pill-round)

### Page navigation (onderaan rubric-pagina's)

Flex row, vorige links + volgende rechts.
- Dir-label (11px uppercase muted)
- Naam: Instrument Serif 28px met mint-nummer ervoor
- Hover: `transform: translateY(-2px)`

### Status-bar footer

Compacte row, 20x40 padding, border-top.
- Links: status ("IN ONTWIKKELING")
- Rechts: links naar bronnen/reflectie/cv
- 11px uppercase dim

---

## 5. Motion

Subtiel en spaarzaam. De site is primair typografisch — animatie is ondersteunend, geen hoofdrol.

| Pattern | Duration | Easing | Gebruik |
|---|---|---|---|
| `fadeInUp` | 500ms | ease-out | Cards, secties bij scroll-into-view |
| `slideIn` | 300ms | ease-out | Nav-items hover |
| `colorShift` | 200ms | ease | Link hovers, text-color changes |
| `translateX` | 300ms | ease-out | Rubric-row pijlen bij hover |

Regels:
- `@media (prefers-reduced-motion: reduce)` → alle animaties disabled
- `viewport: { once: true, margin: "-50px" }` → elementen animeren één keer
- Geen parallax. Geen autoplay video met sound. Geen scroll-jacking.

---

## 6. Responsive

Breakpoints (Tailwind defaults aanhouden):
- `sm` 640px
- `md` 768px
- `lg` 1024px
- `xl` 1280px

### Mobile aanpassingen

**Hero:**
- Grid wordt stacked: typografie boven, beeld-collage onder
- Mega display schaalt naar 56px
- Lead behoudt max-width

**Rubric-index:**
- Typografische lijst blijft lijst, maar grid wordt `1fr` (alle info gestapeld per item)
- Hover-effect vervangen door tap-feedback

**Page-head:**
- Grid wordt stacked: nummer-blok boven, titel+lead onder
- Page-nummer schaalt naar 72px

**Stats-strip:**
- Grid wordt 2x2 op mobile

**Triangulation:**
- Drie kolommen worden gestapeld (1fr). Convergence-block blijft onder.

**Evidence-grid:**
- Wordt 1-koloms (elke card full-width)

**Categories-pills:**
- Grid wordt 3x2 op mobile

---

## 7. Accessibility (WCAG 2.2 AA)

- Contrastcheck: `--text-primary` (#F5F5F2) op `--canvas` (#161613) = 14.2:1 ✓ AAA
- Contrastcheck: `--text-secondary` (#C8C8BE) op `--canvas` = 9.8:1 ✓ AAA
- Contrastcheck: `--accent-mint` (#5EE3D3) op `--canvas` = 8.1:1 ✓ AAA
- Focus states: `outline: 2px solid var(--accent-mint); outline-offset: 2px` op alle interactieve elementen
- Skip-to-content link bovenaan
- `lang="nl"` op html-tag
- Alle beeld krijgt alt-tekst
- Heading-hiërarchie strikt (h1 > h2 > h3)
- `prefers-reduced-motion` gerespecteerd
- Keyboard-nav werkt op alle interactieve elementen
- `aria-current="page"` op actieve nav-link

---

## 8. Beelden & media

Zolang echte foto's ontbreken: **gradient-placeholders** in de hero. Drie varianten (zie hero-specs).

Wanneer echte foto's komen:
- Foto's krijgen lichte duotone-behandeling: iets hogere contrast, iets warmere schaduwen
- `border-radius: 4px` op alle foto-frames (niet 12px of meer — te zacht voor deze stijl)
- Geen drop-shadows op foto's
- Caption onder in 12px `--text-muted`

Video in hero: autoplay (zonder sound), loop, muted. Fallback-poster voor als video niet laadt.

---

## 9. Iconografie

Lucide React. Gebruiken voor:
- Arrow-icons (ArrowRight, ArrowLeft) in nav en CTA's
- Plus-icon voor expand-states
- ExternalLink voor source-links
- Check / X voor criteria-tabel

Geen Lucide voor decoratie — alleen functioneel. Stroke-width 1.5.

---

## 10. Tone of voice (copy-richtlijnen)

Het designsysteem werkt alleen als de copy erop aansluit.

- **Persoonlijk maar niet casual.** "Ik" waar passend, geen "wij/team".
- **Kort en concreet.** Liever "21 interviews" dan "we hebben veel respondenten gesproken".
- **Onderzoeksretoriek, niet marketing.** "Wat ik vond" i.p.v. "Onze inzichten".
- **Reflectie is nuchter.** "Wat kan beter" zonder over-excuses of over-claims.
- **Eyebrows zijn statements.** "VIJF CRITERIA · ÉÉN PORTFOLIO" — geen "WELKOM BIJ".