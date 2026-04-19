# Component Specificaties

Elk component lost een specifiek rubric-beoordelingspunt op. Alle componenten zijn React Server Components tenzij anders aangegeven.

---

## 1. `<EvidenceCard />`

**Doel**: Herbruikbaar bewijsblok dat op elke rubric-pagina wordt gebruikt.

**Props**:
```ts
interface EvidenceCardProps {
  title: string                    // Wat is het bewijs
  summary: string                  // Korte samenvatting (1-2 zinnen)
  action: string                   // Wat ik deed
  finding: string                  // Wat ik vond
  meaning: string                  // Wat het betekent voor het concept
  sourceId?: string                // Link naar /bronnen#id
  image?: { src: string; alt: string }  // Optioneel visueel bewijs
  rubric?: 1 | 2 | 3 | 4 | 5      // Rubric-criterium nummer
}
```

**Visuele beschrijving**: Card met `--surface` achtergrond. Bovenaan een `RubricBadge` (indien `rubric` prop). Titel in `text-xl` Instrument Serif. Daaronder 3 secties met subtiele labels ("Wat ik deed", "Wat ik vond", "Betekenis") in `text-sm text-secondary`. Onderaan een `SourceLink` indien `sourceId` aanwezig. Optionele afbeelding rechts of bovenaan.

**Gebruik**:
```mdx
<EvidenceCard
  title="Interviews met 8 studenten"
  summary="Diepte-interviews over pauzegedrag"
  action="Semi-gestructureerde interviews afgenomen op de campus"
  finding="6/8 studenten geven aan 'niks te doen' in pauzes"
  meaning="Er is een latente behoefte aan laagdrempelig tijdverdrijf"
  sourceId="interview-analyse-2024"
  rubric={2}
/>
```

---

## 2. `<Timeline />`

**Doel**: Chronologische weergave van prototype-iteraties (rubric 3).

**Props**:
```ts
interface TimelineItem {
  version: string                  // "v1.0", "v2.0"
  date: string                     // "Maart 2024"
  title: string                    // Korte beschrijving
  feedback: string                 // Sleutel-feedback die leidde tot deze versie
  change: string                   // Wat er veranderde
  image?: { src: string; alt: string }
}

interface TimelineProps {
  items: TimelineItem[]
}
```

**Visuele beschrijving**: Verticale tijdlijn met een lijn links (`border-l-2 border-[--accent]`). Per item een cirkel-marker op de lijn, rechts daarvan een card met versienummer (badge-stijl), datum, beschrijving, feedback-citaat en wijziging. Optioneel een klein screenshot. Items zijn verbonden door de verticale lijn.

**Client component**: Ja — gebruikt Framer Motion voor stagger-animatie.

---

## 3. `<QuoteBlock />`

**Doel**: Citaten uit gebruikersinterviews met attributie (rubric 2).

**Props**:
```ts
interface QuoteBlockProps {
  quote: string                    // Het citaat
  author: string                   // "Student, 21 jaar, HBO-ICT"
  context?: string                 // Optionele context: wanneer/waarom gezegd
  sourceId?: string                // Link naar transcript
}
```

**Visuele beschrijving**: Groot openingsaanhalingsteken (") in `text-4xl text-[--accent]` als visueel element. Citaat in `text-lg` italic. Daaronder een streepje + auteur in `text-sm text-secondary`. Context als kleine paragraaf eronder. Border-left in accent-kleur.

---

## 4. `<PainGainMap />`

**Doel**: Visuele weergave van pains, gains en jobs-to-be-done (rubric 2).

**Props**:
```ts
interface PainGainMapProps {
  pains: { label: string; severity: 'low' | 'medium' | 'high' }[]
  gains: { label: string; importance: 'low' | 'medium' | 'high' }[]
  jobs: { label: string; type: 'functional' | 'social' | 'emotional' }[]
}
```

**Visuele beschrijving**: Drieluik-layout (responsive: kolommen op desktop, gestapeld op mobile). Linkerkolom "Pains" met rode accent, middenkolom "Jobs-to-be-done" neutraal, rechterkolom "Gains" met groene accent. Items als pill-badges met severity/importance als opacity-variatie. Gebaseerd op het Value Proposition Canvas formaat.

---

## 5. `<MethodCard />`

**Doel**: Beschrijving van een gebruikt model/methode (rubric 4).

**Props**:
```ts
interface MethodCardProps {
  name: string                     // "Double Diamond", "5 Why's"
  icon?: string                    // Lucide icon naam
  description: string              // Wat is het model
  rationale: string                // Waarom gekozen
  application: string              // Hoe toegepast in dit project
  reliability: string              // Reflectie op betrouwbaarheid/validiteit
  sourceId?: string
}
```

**Visuele beschrijving**: Card met icon + naam als header. Vier secties met labels: "Wat", "Waarom", "Toepassing", "Betrouwbaarheid". Elke sectie is een korte paragraaf. De "Betrouwbaarheid"-sectie heeft een subtiel andere achtergrondkleur om reflectie te benadrukken.

---

## 6. `<CriteriaTable />`

**Doel**: Testcriteria vs. behaald resultaat (rubric 5).

**Props**:
```ts
interface Criterion {
  criterion: string                // Wat werd getest
  target: string                   // Vooraf geformuleerd doel
  result: string                   // Behaald resultaat
  met: boolean                     // Voldaan ja/nee
  evidence?: string                // Kort bewijs
}

interface CriteriaTableProps {
  criteria: Criterion[]
}
```

**Visuele beschrijving**: Responsieve tabel met 4 kolommen: Criterium, Doel, Resultaat, Status. Status-kolom toont een groen vinkje of oranje uitroepteken (Lucide icons). Op mobile: card-layout in plaats van tabel. Rij-achtergrond subtiel groen bij `met: true`.

---

## 7. `<ValuePerspective />`

**Doel**: Inzicht vanuit verschillende waardeperspectieven (rubric 5).

**Props**:
```ts
interface ValuePerspectiveProps {
  perspective: 'gebruiker' | 'maatschappij' | 'opdrachtgever' | 'duurzaamheid' | 'technologie'
  icon?: string
  insight: string                  // Het inzicht
  evidence: string                 // Onderbouwing
}
```

**Visuele beschrijving**: Compacte card met een gekleurd icoon-label bovenaan dat het perspectief aanduidt. Daaronder het inzicht als lead-tekst en de onderbouwing als body. Elk perspectief heeft een subtiel eigen accentkleur.

---

## 8. `<SourceLink />`

**Doel**: Inline citatie-component (alle pagina's).

**Props**:
```ts
interface SourceLinkProps {
  id: string                       // Correspondeert met bronnen.ts ID
  label?: string                   // Optioneel custom label, anders "(Bron)"
}
```

**Visuele beschrijving**: Inline link in accent-kleur, `text-sm`, met een klein extern-link-icoon (Lucide `ExternalLink`, 14px). Linkt naar `/bronnen#{id}`. Hover: underline.

---

## 9. `<ReflectionCallout />`

**Doel**: Visueel onderscheiden reflectieblok (alle rubric-pagina's).

**Props**:
```ts
interface ReflectionCalloutProps {
  type?: 'positive' | 'improvement' | 'general'  // Default: 'general'
  title?: string                   // Optionele titel, default: "Reflectie"
  children: React.ReactNode        // MDX content
}
```

**Visuele beschrijving**: Geel/amber callout-blok met `border-l-4` in `--reflection-border`. Achtergrond `--reflection-bg`. Bovenaan een label met Lucide `Lightbulb`-icoon + titel. Type `positive` toont "Wat ging goed" met groen accent; `improvement` toont "Wat kan beter" met oranje accent.

---

## 10. `<RubricBadge />`

**Doel**: Toont op elke sectie welk rubric-criterium wordt bewezen.

**Props**:
```ts
interface RubricBadgeProps {
  criterium: 1 | 2 | 3 | 4 | 5
  label?: string                   // Optioneel, default uit mapping
}
```

**Label-mapping**:
1. "Nieuwsgierigheid"
2. "Onderzoek"
3. "Concept"
4. "Methoden"
5. "Validatie"

**Visuele beschrijving**: Pill-badge (`rounded-full`) in `--accent-light` achtergrond met `--accent` tekst. Klein nummer + label. Altijd rechtsboven in een sectie of card geplaatst. Maakt het voor de docent visueel expliciet welk criterium hier wordt aangetoond.

---

## 11. `<OriginStory />`

**Doel**: Pakkende openingsvertelling voor `/nieuwsgierigheid` (rubric 1). EvidenceCard is te licht voor de "uitmuntend"-drempel die een anekdote met beeldmateriaal + perspectief-shift vraagt.

**Props**:
```ts
interface PerspectiveShift {
  label: 'begin' | 'tijdens' | 'nu'
  text: string                     // Korte tekst (1-2 zinnen) per fase
}

interface OriginStoryProps {
  heroImage: { src: string; alt: string }
  anecdote: React.ReactNode        // MDX content — vrije tekst
  perspectiveShift: [PerspectiveShift, PerspectiveShift, PerspectiveShift]
}
```

**Visuele beschrijving**: Full-bleed hero-afbeelding bovenaan (volledige breedte van het content-blok, niet de gehele viewport). Daarna de anekdote-tekst in editorial typografie: grote Instrument Serif, royale regelafstand, geen kolommen. Onderaan een horizontale 3-staps tijdlijn "Mijn blik veranderde" — drie blokken naast elkaar ("Begin → Tijdens → Nu"), elk met een kort label en tekst. Op mobile: gestapeld. `RubricBadge criterium={1}` rechtsboven.

**Client component**: Nee (tenzij animaties worden toegevoegd).

**Gebruik**:
```mdx
<OriginStory
  heroImage={{ src: "/images/challenge-cube-aanleiding.jpg", alt: "..." }}
  anecdote={
    <>
      <p>[INVULLEN: De anekdote die dit project startte]</p>
    </>
  }
  perspectiveShift={[
    { label: "begin", text: "[INVULLEN: Hoe keek ik er eerst tegenaan?]" },
    { label: "tijdens", text: "[INVULLEN: Wat veranderde er gedurende het onderzoek?]" },
    { label: "nu", text: "[INVULLEN: Hoe kijk ik er nu naar?]" },
  ]}
/>
```

---

## 12. `<TriangulationDiagram />`

**Doel**: Visueel bewijs van triangulatie op `/onderzoek` (rubric 2). Triangulatie is expliciet een "uitmuntend"-criterium — het moet zichtbaar zijn, niet alleen beschreven.

**Props**:
```ts
interface TriangulationMethod {
  name: string                     // "Interviews", "Deskresearch", "Observatie"
  type: 'primair' | 'secundair'
  finding: string                  // Kernbevinding van deze methode (1-2 zinnen)
}

interface TriangulationDiagramProps {
  methods: [TriangulationMethod, TriangulationMethod, TriangulationMethod]
  convergentInsight: string        // Het inzicht dat alle 3 methoden bevestigen
}
```

**Visuele beschrijving**: SVG-layout als driehoek. Drie methode-cards op de hoeken van de driehoek, verbonden door lijnen die naar het midden lopen. In het midden een gekleurde "convergentie-kaart" met het gedeelde inzicht. Type `primair` krijgt een volle rand, `secundair` een gestippelde rand. Op mobile: verticale stack van 3 methode-cards met een pijl-icoon die naar een centrale convergentie-kaart wijst. **Client component** (SVG-positionering vereist clientside rendering of CSS-grid trucje).

**Gebruik**:
```mdx
<TriangulationDiagram
  methods={[
    { name: "Interviews (n=8)", type: "primair", finding: "Studenten vervelen zich in pauzes" },
    { name: "Observatie campus", type: "primair", finding: "Groepen zitten passief op telefoon" },
    { name: "Literatuuronderzoek", type: "secundair", finding: "Sociale challenges verhogen betrokkenheid" },
  ]}
  convergentInsight="Er is een concrete, onvervulde behoefte aan laagdrempelig sociaal tijdverdrijf op de campus."
/>
```

---

## 13. `<ValuePerspectiveGrid />`

**Doel**: Samenhangende weergave van meervoudige waardeperspectieven op `/validatie` (rubric 5). Losse cards tonen de perspectieven niet als samenhangend geheel — de rubric vraagt expliciet om "samenhangende" presentatie.

**Props**:
```ts
interface ValuePerspectiveGridItem {
  perspective: 'gebruiker' | 'maatschappij' | 'opdrachtgever' | 'duurzaamheid' | 'technologie'
  icon?: string
  insight: string
  evidence: string
  score: 1 | 2 | 3 | 4 | 5        // Score op dit perspectief (1=laag, 5=hoog)
}

interface ValuePerspectiveGridProps {
  perspectives: ValuePerspectiveGridItem[]
  synthesis: string                // Paragraaf die de samenhang duidt
}
```

**Visuele beschrijving**: Bovenaan een **radar/spider-chart** (SVG of Recharts) met de scores per perspectief als assen — toont in één oogopslag de balans of focus. Kies SVG voor server-rendering, of Recharts als client component. Daaronder een grid van `ValuePerspective`-cards (bestaand component, uitgebreid met `score`-prop). Onderaan een `synthesis`-paragraaf in `ReflectionCallout`-stijl die de samenhang en eventuele spanningen tussen perspectieven beschrijft.

**Relatie**: `ValuePerspective` (component #7) blijft bestaan als zelfstandig sub-component. `ValuePerspectiveGrid` wrapt het voor de `/validatie`-pagina.

**Client component**: Ja — radar-chart vereist clientside rendering (tenzij pure SVG met vaste waarden).

**Afhankelijkheid**: Voeg `recharts` toe aan dependencies bij gebruik van Recharts, of bouw een lichtgewicht SVG-radardiagram zonder externe library.
