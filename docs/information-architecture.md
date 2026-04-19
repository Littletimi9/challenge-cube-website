# Informatiearchitectuur — Portfolio Challenge Cube

## Sitemap

```
/                          Homepage (hero + bewijslast-index)
├── /nieuwsgierigheid      Rubric 1: Eigen nieuwsgierigheid als vertrekpunt
├── /onderzoek             Rubric 2: Gebruikersgericht onderzoek
├── /concept               Rubric 3: Concept ontwikkeling
├── /methoden              Rubric 4: Inzet van modellen en methodieken
├── /validatie             Rubric 5: Aansluiting eindgebruiker
├── /reflectie             Eindreflectie op het hele proces
└── /bronnen               Bronnenlijst (APA-stijl)
```

## Rubric → Pagina mapping

| # | Rubric-criterium | Route | Kernvraag | Primaire componenten |
|---|---|---|---|---|
| 1 | Eigen nieuwsgierigheid als vertrekpunt | `/nieuwsgierigheid` | Waarom dit onderwerp? Welke anekdote? Hoe ontwikkelde mijn blik zich? | **OriginStory**, EvidenceCard, ReflectionCallout |
| 2 | Gebruikersgericht onderzoek | `/onderzoek` | Welke methoden (triangulatie)? Welke bronnen? Welke pains/gains/JTBD? | EvidenceCard, QuoteBlock, PainGainMap, **TriangulationDiagram**, SourceLink |
| 3 | Concept ontwikkeling | `/concept` | Chronologische iteraties — wat veranderde wanneer en waarom? | Timeline, EvidenceCard, ReflectionCallout |
| 4 | Inzet van modellen en methodieken | `/methoden` | Welke modellen? Waarom deze? Hoe betrouwbaar/valide? | MethodCard, EvidenceCard, ReflectionCallout |
| 5 | Aansluiting eindgebruiker | `/validatie` | Welke testcriteria vooraf? Welke waardeperspectieven? Welk bewijs? | CriteriaTable, **ValuePerspectiveGrid**, EvidenceCard |

## Navigatiestructuur

### Hoofdnavigatie (sticky top bar)

```
[Logo] Nieuwsgierigheid | Onderzoek | Concept | Methoden | Validatie [Meer ▾]
                                                                      ├── Reflectie
                                                                      └── Bronnen
```

- De 5 rubric-pagina's zijn direct zichtbaar in de navigatie
- Reflectie en Bronnen zitten in een "Meer"-dropdown (of altijd zichtbaar op desktop)
- Actieve pagina krijgt `aria-current="page"` + visuele indicator (underline of bold)
- Op mobile: hamburger-menu met alle 7 links

### Pagina-opbouw (elke rubric-pagina)

```
┌─────────────────────────────────┐
│ [RubricBadge: Criterium X]      │
│ Paginatitel (h1)                │
│ Korte introductie               │
├─────────────────────────────────┤
│ § Bewijslast                    │
│   [EvidenceCard]                │
│   [EvidenceCard]                │
│   [specifieke componenten...]   │
├─────────────────────────────────┤
│ § Reflectie                     │
│   [ReflectionCallout: positief] │
│   [ReflectionCallout: beter]    │
├─────────────────────────────────┤
│ § Vooruitblik                   │
│   Korte paragraaf               │
├─────────────────────────────────┤
│ ← Vorige pagina | Volgende →   │
└─────────────────────────────────┘
```

### Homepage — Bewijslast-index

De homepage bevat een "10-seconden-scan" sectie:

```
┌─────────────────────────────────────────────────────────┐
│                    BEWIJSLAST-OVERZICHT                  │
├───────────┬───────────┬───────────┬───────────┬─────────┤
│ 1. Nieuws-│ 2. Onder- │ 3. Concept│ 4. Metho- │ 5. Vali-│
│ gierigheid│ zoek      │           │ den       │ datie   │
│           │           │           │           │         │
│ Ambitie:8+│ Ambitie:8+│ Ambitie:8+│ Ambitie:8+│Ambitie:8│
│           │           │           │           │         │
│ • Bewijs 1│ • Bewijs 1│ • Bewijs 1│ • Bewijs 1│• Bew. 1 │
│ • Bewijs 2│ • Bewijs 2│ • Bewijs 2│ • Bewijs 2│• Bew. 2 │
│ • Bewijs 3│ • Bewijs 3│ • Bewijs 3│ • Bewijs 3│• Bew. 3 │
│           │           │           │           │         │
│ [Bekijk →]│ [Bekijk →]│ [Bekijk →]│ [Bekijk →]│[Bekijk→]│
└───────────┴───────────┴───────────┴───────────┴─────────┘
```

## Cross-linking strategie

- **SourceLink**: elke bron in de tekst linkt naar `/bronnen#[id]`
- **RubricBadge**: maakt expliciet welk criterium wordt bewezen
- **Vorige/Volgende navigatie**: onderaan elke rubric-pagina, in volgorde 1→5
- **Homepage mini-cards**: direct-links naar specifieke secties op rubric-pagina's
