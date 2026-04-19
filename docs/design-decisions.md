# 5 Concrete Designbeslissingen

## 1. Navigatie mapt 1-op-1 op rubric-criteria

**Beslissing**: De 5 hoofdnavigatie-items zijn exact de 5 rubric-criteria, niet thematische groepen of creatieve namen.

**Waarom**: De eindgebruiker is een docent die scoort op een rubric. Elke seconde die zij besteedt aan het zoeken naar bewijs is verloren. Door de navigatie letterlijk te laten overeenkomen met de rubric-criteria, kan de docent binnen 2 klikken bij elk bewijsstuk zijn. Creativiteit in naamgeving zou hier ten koste gaan van vindbaarheid.

## 2. Instrument Serif voor headings, Inter voor body

**Beslissing**: Twee-font systeem met een expressieve serif (Instrument Serif) en een neutrale sans-serif (Inter).

**Waarom**: Instrument Serif geeft de site een academisch, onderzoekend karakter zonder stuffy te zijn. Het onderscheidt de site van standaard Tailwind/Next.js projecten die bijna altijd Inter of Geist als enige font gebruiken. Inter voor body tekst garandeert leesbaarheid op alle schermformaten. De combinatie zegt: "dit is serieus onderzoekswerk, gepresenteerd op een moderne manier."

## 3. ReflectionCallout als eersteklas UI-element

**Beslissing**: Reflectie krijgt een eigen visueel component met opvallende amber-styling, niet een gewone paragraaf onderaan de pagina.

**Waarom**: In de rubric wordt reflectie bij elk criterium gewaardeerd. Door reflectie visueel te onderscheiden (amber achtergrond, border-left, icoon) springt het eruit bij het scannen van de pagina. De docent ziet direct dat er gereflecteerd is, zonder te hoeven zoeken. Het onderscheid tussen "wat ging goed" en "wat kan beter" toont zelfinzicht.

## 4. MDX voor content, TSX voor componenten — strikte scheiding

**Beslissing**: Alle rubric-pagina's zijn MDX-bestanden. Alle interactieve/visuele logica zit in TSX-componenten. Content en presentatie zijn volledig gescheiden.

**Waarom**: Thijs heeft deels content klaar en gaat iteratief werken over 4+ weken. Door MDX te gebruiken kan hij tekst bewerken alsof het een Word-document is, zonder JSX-kennis nodig te hebben. De `[INVULLEN: ...]` markers maken duidelijk wat nog moet. Als het ontwerp later verandert, hoeft alleen de component-code aangepast te worden — de content blijft intact.

## 5. Navy-blauw kleurenpalet in plaats van trendy gradienten

**Beslissing**: Kleurenpalet gebaseerd op het bestaande portfolio-logo (navy blauw + lichtblauw), geen paarse/roze gradienten of neon-accenten.

**Waarom**: Het logo is al gemaakt en bepaalt de visuele identiteit. Navy blauw straalt professionaliteit en betrouwbaarheid uit — passend voor een academisch portfolio. Door het kleurenpalet af te leiden van het logo ontstaat er visuele samenhang zonder extra ontwerpwerk. Belangrijk: het vermijdt de "AI-gegenereerde website"-look die docenten inmiddels herkennen (paarse gradienten, glassmorphism, overdreven animaties).
