# To-do Challenge Table portfolio

Laatst bijgewerkt: 10 mei 2026.

Deze lijst bewaakt de resterende acties voor de portfolio-site. De huidige inleverversie gebruikt alleen Interview 1 en Interview 2 als interviewbewijs: 2 interviewpagina's met in totaal 3 middelbare scholieren.

## Huidige status

- [x] Interview 3 verwijderd omdat de inhoud niet op echte data was gebaseerd.
- [x] Interview 4 en 5 ontkoppeld zolang daar nog geen echte data in staat.
- [x] Lege opdracht-routes `/bronnen/opdracht-12`, `/bronnen/opdracht-14` en `/bronnen/opdracht-15` verwijderd zodat beoordelaars geen lege pagina's tegenkomen.
- [x] Bronoverzicht, APA-lijst, onderzoekspagina en validatiepagina opgeschoond naar echte bewijslast.
- [x] `npm run lint` afgerond zonder errors op 10 mei 2026.
- [x] `npm run build` afgerond zonder errors op 10 mei 2026.

## Hoogste prioriteit

- [ ] Aanvullende gebruiksvalidatie uitvoeren.
  - Interview 3, 4 en 5 later met echte leerlingen uitvoeren en verwerken.
  - Leerlingen spreken die de Challenge Table hebben gezien of gebruikt.
  - Een aula-pilot of simulatie uitvoeren waarin starttijd, groepsgrootte, spontaan gebruik, herhaalgebruik en snackalternatief worden gemeten.
  - Resultaten verwerken op `/validatie` per testcriterium: onderbouwd, deels onderbouwd of nog te testen.

- [ ] Nieuwe bewijslast toevoegen aan de bronnen.
  - Nieuwe interviewnotities, transcripties of audiobestanden toevoegen als bronpagina.
  - Eventuele extra focusgroepresultaten alleen toevoegen als er echt transcript- of notitiemateriaal is.
  - Pilot- of simulatie-uitkomsten toevoegen als aparte bronpagina met methode, observaties, conclusies en beperkingen.
  - APA-verwijzingen voor deze nieuwe bronnen opnemen op `/bronnen`.

- [ ] B2B-validatie aanvullen.
  - Naast PSM en prijsstrategie nog een gesprek of toets met schoolleiding, facilitair medewerker of docent toevoegen.
  - Vragen richten op budget, plaatsing, onderhoud, veiligheid, verantwoordelijkheid en verwachte schoolwaarde.

## Inhoudelijk versterken

- [ ] Conceptontwikkeling sterker koppelen aan feedback.
  - Per iteratie expliciet maken welke feedback of data leidde tot de volgende versie.
  - Bij de stap Cube -> scherm -> Table duidelijker benoemen welke keuze is gemaakt, waarom, en welk bewijs daarbij hoort.
  - Waar mogelijk korte quotes of concrete feedback uit echte interviews, focusgroep of pilot toevoegen.

- [ ] Meervoudige waardecreatie verder onderbouwen.
  - De hoofdpagina benoemt dit nu kort; de onderbouwing moet sterker terugkomen in `/validatie` en eventueel `/reflectie`.
  - Koppeling expliciet maken met `/bronnen/opdracht-6` en `/bronnen/opdracht-4`.
  - Per perspectief bewijslast aanvullen: leerling, school, economisch en ecologisch.

- [ ] Ecologische claim concreter maken.
  - Nu is ecologische waarde vooral beredeneerd via robuustheid, reparatie en materiaalkeuze.
  - Sterker maken met een korte materiaal-/levensduuronderbouwing of een eenvoudige vergelijking met een minder duurzaam alternatief.

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
