# To-do Challenge Table portfolio

Laatst bijgewerkt: 10 mei 2026.

Deze lijst bewaakt wat nog moet gebeuren na de laatste opschoonronde. De huidige inleverversie gebruikt als interviewbewijs alleen Interview 1 en Interview 2: 2 interviewpagina's met in totaal 3 middelbare scholieren.

## Afgerond in huidige versie

- [x] Bronroutes voor Interview 1, Interview 2 en focusgroep staan correct op lowercase URL's.
- [x] Interview 3, 4 en 5 staan niet meer als huidige bron in de beoordelaarsroute.
- [x] Lege opdracht-routes `/bronnen/opdracht-12`, `/bronnen/opdracht-14` en `/bronnen/opdracht-15` zijn verwijderd.
- [x] Bronoverzicht, APA-lijst, onderzoekspagina en validatiepagina gebruiken alleen huidige bewijslast.
- [x] APA-lijst op `/bronnen` wordt alfabetisch getoond.
- [x] PSM wordt op `/methoden` uitgelegd als Price Sensitivity Meter.
- [x] `/validatie` benoemt aanvullende interviews neutraal als vervolgwerk.
- [x] `npm run lint` afgerond zonder errors op 10 mei 2026.
- [x] `npm run build` afgerond zonder errors op 10 mei 2026.

## Nog doen voor sterkere validatie

- [ ] Aanvullende gebruiksvalidatie uitvoeren.
  - Interview 3, 4 en 5 uitvoeren met leerlingen die de Challenge Table hebben gezien of gebruikt.
  - Per interview notities, transcript of audio bewaren.
  - Bevindingen verwerken op `/validatie` per criterium: onderbouwd, deels onderbouwd of nog te testen.
  - Nieuwe interviews toevoegen aan `/bronnen` en de APA-lijst.

- [ ] Aula-pilot of simulatie uitvoeren.
  - Starttijd meten: hoe snel beginnen leerlingen zonder uitleg?
  - Groepsgrootte meten: hoeveel leerlingen doen mee?
  - Spontaan gebruik en herhaalgebruik observeren.
  - Nagaan of de Table tijdelijk een alternatief vormt voor de snackroute.
  - Resultaten als aparte bronpagina toevoegen.

- [ ] B2B-validatie aanvullen.
  - Gesprek of korte toets doen met schoolleiding, facilitair medewerker of docent.
  - Vragen richten op budget, plaatsing, onderhoud, veiligheid, verantwoordelijkheid en verwachte schoolwaarde.
  - Resultaten koppelen aan PSM, prijsstrategie en scorecard.

## Inhoudelijk versterken

- [ ] Conceptontwikkeling sterker koppelen aan feedback.
  - Per iteratie expliciet maken welke feedback of data leidde tot de volgende versie.
  - Bij de stap Cube -> scherm -> Table duidelijker benoemen welke keuze is gemaakt, waarom, en welk bewijs daarbij hoort.
  - Waar mogelijk korte quotes of concrete feedback uit interviews, focusgroep of pilot toevoegen.

- [ ] Meervoudige waardecreatie verder onderbouwen.
  - Koppeling expliciet maken met `/bronnen/opdracht-6` en `/bronnen/opdracht-4`.
  - Per perspectief bewijslast aanvullen: leerling, school, economisch en ecologisch.
  - Op `/validatie` en eventueel `/reflectie` scherper maken welke waarde al bewezen is en welke nog beredeneerd is.

- [ ] Ecologische claim concreter maken.
  - Materiaalkeuze en verwachte levensduur kort onderbouwen.
  - Eventueel vergelijken met een minder duurzaam alternatief, zoals losse spellen of tijdelijke campagnes.

## Technische en visuele controle

- [ ] Browsercheck uitvoeren op laptopformaat.
  - Hoofdpagina: direct duidelijk wat de Challenge Table is en doet.
  - Beoordelaarsroute: geen lege routes, dode links of dubbele onderdelen.
  - Bronnenpagina: Interview 1, Interview 2, focusgroep en observaties openen correct.
  - Afbeeldingen: scherp, niet uitgerekt, passend bij tekst.

- [ ] Mobiele check uitvoeren.
  - Navigatie opent en sluit goed.
  - Tekst valt niet buiten knoppen, kaarten of tabellen.
  - Figuurcaptions blijven leesbaar.

- [ ] Oude hydration warning controleren.
  - In de devlog stond eerder een waarschuwing over een `<p>` binnen een `<p>` op `/nieuwsgierigheid`.
  - Controleren of die waarschuwing nog actueel is.
  - Als die nog verschijnt: de betreffende MDX/React-structuur aanpassen.

- [ ] Next.js scroll-waarschuwing beoordelen.
  - De devlog noemt `scroll-behavior: smooth` zonder `data-scroll-behavior="smooth"` op `<html>`.
  - Beslissen of dit wordt aangepast in `app/layout.tsx` of genegeerd blijft als lage prioriteit.

- [ ] Na elke inhoudsronde draaien:
  - `npm run lint`
  - `npm run build`
