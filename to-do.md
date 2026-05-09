# To-do Challenge Table portfolio

Laatst geinventariseerd: 9 mei 2026.

Deze lijst benoemt wat nog mist of nog afgerond moet worden om de site sterker op de beoordeling aan te laten sluiten.

## Hoogste prioriteit

- [ ] Aanvullende gebruiksvalidatie uitvoeren.
  - Minimaal drie aanvullende diepte-interviews met leerlingen die de Challenge Table hebben gezien of gebruikt.
  - Minimaal een focusgroep met leerlingen na conceptpresentatie of prototypegebruik.
  - Een aula-pilot of simulatie uitvoeren waarin starttijd, groepsgrootte, spontaan gebruik, herhaalgebruik en snackalternatief worden gemeten.
  - Resultaten verwerken op `/validatie` per testcriterium: gehaald, deels gehaald of niet gehaald.

- [ ] Nieuwe bewijslast toevoegen aan de bronnen.
  - Nieuwe interviewnotities, transcripties of audiobestanden toevoegen als bronpagina.
  - Focusgroepresultaten toevoegen als aparte bronpagina.
  - Pilot- of simulatie-uitkomsten toevoegen als aparte bronpagina met methode, observaties, conclusies en beperkingen.
  - APA-verwijzingen voor deze nieuwe bronnen opnemen op `/bronnen`.

- [ ] Lege bronroutes opruimen of vullen.
  - `/bronnen/opdracht-12` is nu leeg.
  - `/bronnen/opdracht-14` is nu leeg.
  - `/bronnen/opdracht-15` is nu leeg.
  - Beslissen: routes vullen met echte opdrachtinhoud of verwijderen/uitsluiten zodat beoordelaars geen lege pagina kunnen tegenkomen.

## Inhoudelijk versterken

- [ ] Conceptontwikkeling sterker koppelen aan feedback.
  - Per iteratie expliciet maken welke feedback of data leidde tot de volgende versie.
  - Bij de stap Cube -> scherm -> Table duidelijker benoemen welke keuze is gemaakt, waarom, en welk bewijs daarbij hoort.
  - Waar mogelijk korte quotes of concrete feedback uit interviews/focusgroep toevoegen.

- [ ] Meervoudige waardecreatie verder onderbouwen.
  - De hoofdpagina benoemt dit nu kort; de onderbouwing moet sterker terugkomen in `/validatie` en eventueel `/reflectie`.
  - Koppeling expliciet maken met `/bronnen/opdracht-6` en `/bronnen/opdracht-4`.
  - Per perspectief bewijslast aanvullen: leerling, school, economisch en ecologisch.

- [ ] Ecologische claim concreter maken.
  - Nu is ecologische waarde vooral beredeneerd via robuustheid, reparatie en materiaalkeuze.
  - Sterker maken met een korte materiaal-/levensduuronderbouwing of een eenvoudige vergelijking met een minder duurzame alternatiefoplossing.

- [ ] B2B-validatie aanvullen.
  - Naast PSM en prijsstrategie nog een gesprek of toets met schoolleiding, facilitair medewerker of docent toevoegen.
  - Vragen richten op budget, plaatsing, onderhoud, veiligheid, verantwoordelijkheid en verwachte schoolwaarde.

## Structuur en leesbaarheid

- [ ] Leesduur opnieuw controleren na nieuwe inhoud.
  - Doel blijft: hoofdroute volledig te bekijken binnen ongeveer 15 minuten.
  - Nieuwe detailbewijslast vooral onder `/bronnen` plaatsen, niet in de hoofdhoofdstukken.

- [ ] Koppen en inhoud nalopen na de volgende inhoudsronde.
  - Elke kop moet direct de inhoud eronder dragen.
  - Geen dubbele uitleg over hetzelfde onderdeel op de hoofdpagina.
  - Afbeeldingen moeten steeds een inhoudelijke functie hebben: bewijs, iteratie, model of ontwerpbeslissing.

- [ ] APA en figuurverwijzingen nalopen.
  - Alle figuren moeten een heldere caption hebben.
  - Bronverwijzingen in lopende tekst en bronnenlijst moeten consistent zijn.
  - Nieuwe bronnen uit interviews, focusgroep en pilot moeten als eigen APA-item terugkomen.

## Technische en visuele controle

- [ ] Browsercheck uitvoeren op laptopformaat.
  - Hoofdpagina: direct duidelijk wat de Challenge Table is en doet.
  - Route: geen dubbele onderdelen, nummers alleen waar ze functioneel zijn.
  - Afbeeldingen: scherp, niet uitgerekt, passend bij tekst.

- [ ] Mobiele check uitvoeren.
  - Navigatie opent en sluit goed.
  - Tekst valt niet buiten knoppen, kaarten of tabellen.
  - Figuurcaptions blijven leesbaar.

- [ ] Oude hydration warning controleren.
  - In de devlog stond eerder een waarschuwing over een `<p>` binnen een `<p>` op `/nieuwsgierigheid`.
  - Controleren of die waarschuwing nog actueel is na de recente MDX-aanpassingen.
  - Als die nog verschijnt: de betreffende MDX/React-structuur aanpassen.

- [ ] Next.js scroll-waarschuwing beoordelen.
  - De devlog noemt `scroll-behavior: smooth` zonder `data-scroll-behavior="smooth"` op `<html>`.
  - Beslissen of dit wordt aangepast in `app/layout.tsx` of genegeerd blijft als lage prioriteit.

- [ ] Na elke inhoudsronde draaien:
  - `npm run lint`
  - `npm run build`
