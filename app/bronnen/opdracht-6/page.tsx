import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import PageHead from '@/components/rubric/PageHead'
import SectionHeading from '@/components/rubric/SectionHeading'

export const metadata = {
  title: 'Opdracht 6 — Scorecard Challenge Table · Challenge Cube',
}

const citeStyle: React.CSSProperties = {
  color: 'var(--accent-mint)',
  textDecoration: 'underline',
  textDecorationThickness: '0.5px',
  textUnderlineOffset: '2px',
}

function Cite({
  id,
  href,
  children,
}: {
  id?: string
  href?: string
  children: React.ReactNode
}) {
  const targetHref = href ?? (id ? `#${id}` : '#')

  return (
    <a href={targetHref} style={citeStyle}>
      {children}
    </a>
  )
}

type Bron = {
  id: string
  content: React.ReactNode
}

const paragraphStyle: React.CSSProperties = {
  lineHeight: 1.75,
  color: 'var(--text-secondary)',
}

const bulletStyle: React.CSSProperties = {
  lineHeight: 1.75,
  color: 'var(--text-secondary)',
}

const h3Style: React.CSSProperties = {
  fontFamily: 'var(--font-instrument-serif)',
  color: 'var(--text-primary)',
  lineHeight: 1.3,
}

// ─── SITUERING ───────────────────────────────────────────────────────────────

const situeringParagraph = (
  <>
    De Challenge Table is een robuuste, fysieke speeltafel voor middelbare scholen die een
    sociaal aantrekkelijk alternatief biedt voor het standaardritueel van samen ongezonde
    snacks halen tijdens de pauze. De tafel richt zich op de onderliggende behoefte aan
    gezelligheid, afleiding en groepsgevoel in plaats van op eten zelf, en wil daarmee indirect
    ongezond snackgedrag terugdringen. Deze focus sluit aan bij wetenschappelijke inzichten dat
    de schoolomgeving en peers een sterke invloed hebben op eetgedrag van adolescenten.{' '}
    <Cite id="bron-voedingscentrum-nd">(Voedingscentrum, z.d.)</Cite>{' '}
    <Cite id="bron-who-2006">(WHO Regional Office for Europe, 2006)</Cite>
  </>
)

// ─── ECOLOGISCHE ASPECTEN ────────────────────────────────────────────────────

const ecologischeAspecten = [
  {
    nummer: '1.',
    titel: 'Materiaalkeuze en levensduur',
    body: (
      <>
        Materiaalkeuze en levensduur zijn een kern-ecologisch thema, omdat de milieubelasting
        van de Challenge Table sterk afhangt van hoe lang het product meegaat en hoe goed het
        te repareren en demonteren is. De Ellen MacArthur Foundation stelt dat materiaalkeuze
        en de wijze waarop onderdelen verbonden zijn (schroeven versus lijm) op de tekentafel
        worden bepaald en daarmee bepalen of een product later hergebruikt, gerepareerd of
        gerecycled kan worden. Voor de Challenge Table betekent dit dat een stevig stalen frame
        en een slijtvast tafelblad bijdragen aan een lange gebruiksduur; staal behoort daarnaast
        tot de materialen die in een technische cyclus op hoge waarde kunnen blijven circuleren.{' '}
        <Cite id="bron-ema-nd">(Ellen MacArthur Foundation, z.d.)</Cite>
      </>
    ),
  },
  {
    nummer: '2.',
    titel: 'Elektronica en e-waste',
    body: (
      <>
        De Challenge Table bevat een scherm, knoppen en printplaten, waardoor elektronica-impact
        en e-waste een belangrijk ecologisch aandachtspunt vormen. Volgens de Global E-waste
        Monitor 2024 groeide de wereldwijde e-waste tussen 2010 en 2022 van 34 naar 62 miljard
        kg, terwijl slechts 22,3% formeel werd ingezameld en gerecycled; e-waste neemt daarmee
        bijna vijf keer sneller toe dan de formele recyclingcapaciteit. De auteurs benoemen
        kortere productlevensduur, beperkte reparatiemogelijkheden en ontwerpgebreken expliciet
        als oorzaken van deze groei. Voor een schoolproduct met elektronica is een modulair
        ontwerp met vervangbare onderdelen daarom een prioritair aandachtspunt.{' '}
        <Cite id="bron-ewaste-2024">(Baldé et al., 2024)</Cite>
      </>
    ),
  },
  {
    nummer: '3.',
    titel: 'Verpakking, transport en assemblage',
    body: (
      <>
        Omdat de tafel groot en relatief zwaar is, hebben verpakking en transport invloed op
        materiaalgebruik en uitstoot. De Europese Commissie heeft de Verpakkingsverordening
        (EU) 2025/40 aangenomen, die strengere eisen stelt aan recycleerbaarheid en het beperken
        van verpakkingsafval, en daarmee een directe randvoorwaarde vormt voor productverpakking
        en distributie binnen de EU. Lokale assemblage en compacte, recyclebare verpakking zijn
        daarmee niet alleen ecologisch zinvol, maar ook reguleringstechnisch relevant.{' '}
        <Cite id="bron-ppwr-2025">(Europees Parlement &amp; Raad van de Europese Unie, 2025)</Cite>
      </>
    ),
  },
]

// ─── SOCIALE ASPECTEN ────────────────────────────────────────────────────────

const socialeAspecten = [
  {
    nummer: '1.',
    titel: 'Sociale interactie en aantrekkelijk pauzegedrag',
    body: (
      <>
        Het belangrijkste sociale thema is of de Challenge Table daadwerkelijk meer sociale
        interactie en een aantrekkelijker pauzemoment creëert voor leerlingen. PISA 2022 laat
        zien dat een sterk gevoel van verbondenheid op school positief samenhangt met
        levenstevredenheid en welzijn van leerlingen, en dat een veilige sociale omgeving op
        school in het bijzonder verbonden is met dit gevoel van verbondenheid.{' '}
        <Cite id="bron-pisa-2022">(OECD, 2023)</Cite> Een ondersteunende pauze-omgeving die
        positieve interactie stimuleert, kan daarmee bijdragen aan een sterker schoolklimaat.
      </>
    ),
  },
  {
    nummer: '2.',
    titel: 'Invloed op snack- en pauzeroutine',
    body: (
      <>
        De tafel richt zich expliciet op het doorbreken van het automatische ritueel van "even
        wat halen" door een alternatief sociaal ritueel aan te bieden. Het Voedingscentrum stelt
        dat de schoolomgeving een van de krachtigste middelen is om eetkeuzes van jongeren te
        beïnvloeden, en dat scholieren vaker snacken wanneer leeftijdgenoten dit ook doen en
        wanneer ongezonde producten ruim beschikbaar zijn.{' '}
        <Cite id="bron-voedingscentrum-nd">(Voedingscentrum, z.d.)</Cite> De WHO Regional
        Office for Europe onderbouwt dat een evenwichtig schoolvoedingsbeleid bijdraagt aan het
        voorkomen van overgewicht.{' '}
        <Cite id="bron-who-2006">(WHO Regional Office for Europe, 2006)</Cite> Wij benadrukken
        hierbij dat de Challenge Table dit gedrag niet vervangt, maar er een aantrekkelijk
        alternatief naast plaatst; wij zullen dit effect moeten meten in plaats van
        veronderstellen.
      </>
    ),
  },
  {
    nummer: '3.',
    titel: 'Veiligheid, toezicht en schoolklimaat',
    body: (
      <>
        Een derde sociaal thema is veiligheid in brede zin: fysieke veiligheid,
        toezichtbaarheid en inpasbaarheid in het schoolklimaat. PISA 2022 wijst uit dat het
        gevoel veilig te zijn op school sterk samenhangt met een gevoel van verbondenheid en
        levenstevredenheid.{' '}
        <Cite id="bron-pisa-2022">(OECD, 2023)</Cite> Een product dat onveilig is of onrust
        veroorzaakt, zal in de praktijk niet structureel worden toegestaan; een veilig en
        overzichtelijk ontwerp draagt juist bij aan welzijn en betrokkenheid van leerlingen.
      </>
    ),
  },
]

// ─── ACTIVITEITEN ECOLOGISCH ─────────────────────────────────────────────────

const ecologischeActiviteiten = [
  {
    nummer: '1.',
    titel: 'Ontwerp voor lange levensduur en repareerbaarheid',
    body: (
      <>
        Wij ontwerpen de Challenge Table volgens circulaire ontwerpprincipes: een robuust stalen
        frame, een krasbestendig blad en vervangbare onderdelen zoals knoppen, printplaten en
        scherm. De Ellen MacArthur Foundation beschrijft dat producten in de technische cyclus
        baat hebben bij eenvoudige reparatie, demonteerbaarheid en modulaire onderdelen.{' '}
        <Cite id="bron-ema-nd">(Ellen MacArthur Foundation, z.d.)</Cite> Concrete activiteit:
        vóór productie wordt een Bill of Materials opgesteld waarin per onderdeel een verwachte
        levensduur, vervangingsprocedure en demontage-instructie wordt vastgelegd. Daarnaast
        streven wij ernaar om bij oplevering reparatiehandleidingen mee te leveren aan scholen,
        in lijn met de Europese Right-to-Repair Richtlijn.{' '}
        <Cite id="bron-rtr-2024">(Europees Parlement &amp; Raad van de Europese Unie, 2024)</Cite>
      </>
    ),
  },
  {
    nummer: '2.',
    titel: 'Verantwoorde materiaalkeuze en ketenpartners',
    body: (
      <>
        Wij selecteren leveranciers op basis van verifieerbare herkomst en erkende keurmerken.
        Concrete activiteit: voor het stalen frame vragen wij ResponsibleSteel-certificering op
        bij leveranciers; voor houten elementen hanteren wij FSC-certificering als minimumeis;
        voor coatings en lijmen vragen wij om EU Ecolabel of een gelijkwaardig erkend keurmerk.
        Deze keurmerken zijn opgenomen in de Keurmerkwijzer van Milieu Centraal als betrouwbare
        keurmerken die door onafhankelijke partijen worden gecontroleerd — wat in lijn is met
        de ACM-leidraad voor duurzaamheidsclaims, die externe verificatie als kenmerk van
        betrouwbare claims beschouwt.{' '}
        <Cite id="bron-acm-2023">(Autoriteit Consument &amp; Markt, 2023)</Cite>
      </>
    ),
  },
  {
    nummer: '3.',
    titel: 'Beperken elektronica-impact en e-waste',
    body: (
      <>
        Voor de elektronica kiezen wij voor een modulaire opbouw waarbij scherm, printplaat en
        knoppen afzonderlijk en zonder specialistisch gereedschap te vervangen zijn. Concrete
        activiteit: tijdens de prototypefase wordt een demontagetest uitgevoerd waarbij elke
        elektronische module binnen 10 minuten zonder schade vervangbaar moet zijn. Dit sluit
        aan op de aanbevelingen van de Global E-waste Monitor 2024 om reparatie en hergebruik
        van elektronische componenten te bevorderen.{' '}
        <Cite id="bron-ewaste-2024">(Baldé et al., 2024)</Cite> Geïnspireerd op het modulaire
        ontwerp van Fairphone, waarbij gebruikers onderdelen zelf kunnen vervangen, onderzoeken
        wij of belangrijke modules door schoolconciërges zelf vervangen kunnen worden.{' '}
        <Cite id="bron-fairphone-nd">(Fairphone, z.d.)</Cite>
      </>
    ),
  },
  {
    nummer: '4.',
    titel: 'Optimaliseren verpakking, transport en lokale assemblage',
    body: (
      <>
        Bij de uitrol sturen wij op compact transport, recyclebare verpakkingsmaterialen en
        lokale assemblage. Concrete activiteit: wij onderzoeken de samenwerking met een
        Nederlandse productiepartner die werkt met sociale werkplaatsen, geïnspireerd op het
        businessmodel van Mepal.{' '}
        <Cite id="bron-ikl-2024">(Industriële Kring Lochem, 2024)</Cite> De keuze voor
        recyclebaar verpakkingsmateriaal sluit aan op de eisen van de Verpakkingsverordening.{' '}
        <Cite id="bron-ppwr-2025">(Europees Parlement &amp; Raad van de Europese Unie, 2025)</Cite>
      </>
    ),
  },
]

// ─── ACTIVITEITEN SOCIAAL ────────────────────────────────────────────────────

const socialeActiviteiten = [
  {
    nummer: '1.',
    titel: 'Co-design en testen met scholieren',
    body: (
      <>
        Wij betrekken scholieren in een vroege fase via observaties, korte tests en pilots om
        te toetsen of de tafel daadwerkelijk een aantrekkelijk sociaal alternatief vormt in de
        pauze. Concrete activiteit: in de pilotfase voeren wij twee testrondes uit op minimaal
        twee verschillende VO-scholen, waarbij wij gebruiksintensiteit, ervaren gezelligheid en
        spontane interacties observeren en registreren. Deze aanpak is geïnspireerd op het werk
        van Pley School, een B-Corp die spel als pedagogisch instrument inzet en de doelgroep
        nauw betrekt bij het ontwerp.{' '}
        <Cite id="bron-bcorp-cert">(B Lab, z.d.)</Cite>
      </>
    ),
  },
  {
    nummer: '2.',
    titel: 'Integratie in schoolbeleid en lessen over gezonde keuzes',
    body: (
      <>
        De Challenge Table positioneren wij niet als losstaand product, maar als onderdeel van
        bestaande schoolprogramma's rond gezonde voeding en welzijn. Concrete activiteit: wij
        ontwikkelen een handleiding voor schoolleiding waarin de tafel wordt gekoppeld aan het
        Vignet Gezonde School en aan het Akkoord Gezonde Voeding op Scholen. Deze koppeling is
        geïnspireerd op het systeemperspectief van LunchBox Solutions, dat schoolomgeving en
        beleid als primair aangrijpingspunt voor gedragsverandering ziet.{' '}
        <Cite id="bron-lunchbox-2025">(B Lab, 2025)</Cite>
      </>
    ),
  },
  {
    nummer: '3.',
    titel: 'Borging van veiligheid en toezicht',
    body: (
      <>
        Samen met schoolleiding, docenten en conciërges maken wij afspraken over plaatsing,
        gebruiksregels en toezicht. Concrete activiteit: per pilotschool sluiten wij een korte
        gebruiksovereenkomst af waarin plaatsing, dagelijks toezicht, schoonmaak en
        aansprakelijkheid bij schade zijn vastgelegd. Een fysiek veilig en overzichtelijk
        ontwerp draagt bij aan het gevoel van veiligheid op school, dat volgens PISA 2022 sterk
        samenhangt met welzijn en verbondenheid.{' '}
        <Cite id="bron-pisa-2022">(OECD, 2023)</Cite>
      </>
    ),
  },
  {
    nummer: '4.',
    titel: 'Monitoring van sociale impact en snackgedrag',
    body: (
      <>
        Wij werken met meetbare KPI's om de sociale en gedragsimpact te volgen. Concrete
        activiteit: per pilotschool meten wij gedurende minimaal acht weken (1) het aandeel
        leerlingen dat de tafel gebruikt per pauze, (2) ervaren gezelligheid via een korte
        vragenlijst, en (3) het aantal verkochte (on)gezonde snacks in de kantine als proxy
        voor verandering in pauzegedrag. Wij benadrukken dat deze metingen een indicatie geven
        en geen causaal bewijs leveren; daarvoor is grootschaliger onderzoek nodig.
      </>
    ),
  },
]

// ─── MEERVOUDIGE WAARDE ───────────────────────────────────────────────────────

const ecologischeWaardeParagraphs: React.ReactNode[] = [
  <>
    De impactbepaling concludeert dat levensduur, repareerbaarheid, elektronica-impact en
    verifieerbare materiaalherkomst de meest significante ecologische thema's zijn voor de
    Challenge Table. Door te ontwerpen voor een lange gebruiksduur, modulair onderhoud en
    verantwoorde materiaalkeuze sluit het concept aan bij de drie principes van de circulaire
    economie zoals geformuleerd door de Ellen MacArthur Foundation: afval en vervuiling
    elimineren, producten en materialen op hoge waarde laten circuleren, en natuur
    regenereren.{' '}
    <Cite id="bron-ema-nd">(Ellen MacArthur Foundation, z.d.)</Cite>
  </>,
  <>
    Daarnaast benadrukt de Global E-waste Monitor 2024 dat e-waste structureel sneller groeit
    dan de formele recyclingcapaciteit.{' '}
    <Cite id="bron-ewaste-2024">(Baldé et al., 2024)</Cite> Door volume en complexiteit van
    elektronica beperkt te houden en componenten vervangbaar te maken, beperkt het concept de
    verwachte milieubelasting per gebruiksjaar. De koppeling met de EU Verpakkingsverordening{' '}
    <Cite id="bron-ppwr-2025">(Europees Parlement &amp; Raad van de Europese Unie, 2025)</Cite>{' '}
    en de Right-to-Repair Richtlijn{' '}
    <Cite id="bron-rtr-2024">(Europees Parlement &amp; Raad van de Europese Unie, 2024)</Cite>{' '}
    laat zien dat een onderhoudsvriendelijk ontwerp niet alleen ecologisch maar ook
    reguleringstechnisch toekomstbestendig is.
  </>,
]

const socialeWaardeParagraphs: React.ReactNode[] = [
  <>
    PISA 2022 laat zien dat een sterk gevoel van verbondenheid samenhangt met welzijn en
    levenstevredenheid van leerlingen, en dat een veilige sociale omgeving daarvoor een
    belangrijke voorwaarde is.{' '}
    <Cite id="bron-pisa-2022">(OECD, 2023)</Cite> De Challenge Table speelt hierop in door
    een gedeelde activiteit te bieden die groepsgevoel en positieve interactie stimuleert, in
    plaats van een focus op consumptie.
  </>,
  <>
    Het Voedingscentrum{' '}
    <Cite id="bron-voedingscentrum-nd">(Voedingscentrum, z.d.)</Cite>{' '}
    en de WHO Regional Office for Europe{' '}
    <Cite id="bron-who-2006">(WHO Regional Office for Europe, 2006)</Cite>{' '}
    benadrukken dat schoolomgeving en peers bepalend zijn voor eetgedrag van jongeren. Een
    aantrekkelijk alternatief ritueel in de pauze kan daarmee ondersteunend werken aan beleid
    rond gezonde keuzes; wij meten dit effect via de KPI's uit de monitoringsactiviteit.
    Voorbeelden van sociale ondernemingen zoals Pley School{' '}
    <Cite id="bron-bcorp-cert">(B Lab, z.d.)</Cite> en LunchBox Solutions{' '}
    <Cite id="bron-lunchbox-2025">(B Lab, 2025)</Cite> laten zien dat spelvormen en
    systeeminterventies in de schoolcontext kunnen bijdragen aan bewustwording en
    gedragsverandering. Wij baseren ons werkingsmechanisme op deze inzichten, maar
    pretenderen niet dat een vergelijkbaar effect bij de Challenge Table al is aangetoond.
  </>,
]

const aansluitingParagraphs: React.ReactNode[] = [
  <>In de impactbepaling van onze groep zijn sociale interactie en aantrekkelijk pauzegedrag, onderhoud en repareerbaarheid, en veiligheid en schoolklimaat benoemd als onderwerpen met de hoogste gecombineerde business- en duurzaamheidsimpact. De ecologische en sociale aspecten in deze scorecard sluiten hier direct op aan en vertalen die thema&apos;s naar concrete ontwerpkeuzes en activiteiten.</>,
  <>
    De groep heeft als ambitieniveau "omdat het hoort" gekozen, met een offensieve benadering
    waarbij People leidend is, Planet ondersteunend en Profit faciliterend, met economische
    haalbaarheid als randvoorwaarde. Dit ambitieniveau gaat verder dan minimale naleving van
    wet- en regelgeving en past bij wat in de literatuur en in de B-Corp-beweging wordt
    aangeduid als maatschappelijk verantwoord ondernemen waarbij maatschappelijke
    verantwoordelijkheid juridisch en strategisch wordt verankerd.{' '}
    <Cite id="bron-bcorp-cert">(B Lab, z.d.)</Cite> De activiteiten rond co-design, gezonde
    pauzeroutines, veilige schoolomgeving, lange levensduur en circulaire materiaalkeuzes
    passen bij dit ambitieniveau.
  </>,
  <>
    Tot slot benadrukken wij dat ontwerpbeslissingen steeds worden getoetst aan de vraag of
    zij bijdragen aan gezondere keuzevorming en meervoudige waardecreatie. Deze scorecard
    operationaliseert dat uitgangspunt door de prioriteiten uit de impactbepaling te vertalen
    naar concrete ecologische en sociale activiteiten, ondersteund door externe bronnen over
    schoolomgeving, circulariteit, e-waste en sociale ondernemingen, en gestaafd met erkende
    keurmerken in lijn met de ACM-leidraad voor betrouwbare duurzaamheidsclaims.{' '}
    <Cite id="bron-acm-2023">(Autoriteit Consument &amp; Markt, 2023)</Cite>
  </>,
]

// ─── BRONNENLIJST ─────────────────────────────────────────────────────────────

const bronnen: Bron[] = [
  {
    id: 'bron-acm-2023',
    content: (
      <>
        Autoriteit Consument &amp; Markt. (2023). <em>Leidraad duurzaamheidsclaims</em>.{' '}
        <a
          href="https://www.acm.nl/nl/publicaties/leidraad-duurzaamheidsclaims"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.acm.nl/nl/publicaties/leidraad-duurzaamheidsclaims
        </a>
      </>
    ),
  },
  {
    id: 'bron-bcorp-cert',
    content: (
      <>
        B Lab. (z.d.). <em>What does B Corp certification mean?</em> B Corporation.
        Geraadpleegd op 2 mei 2026, van{' '}
        <a
          href="https://www.bcorporation.net/en-us/certification/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.bcorporation.net/en-us/certification/
        </a>
      </>
    ),
  },
  {
    id: 'bron-lunchbox-2025',
    content: (
      <>
        B Lab. (2025). <em>LunchBox Solutions – B Corp directory</em>. B Corporation.{' '}
        <a
          href="https://www.bcorporation.net/en-us/find-a-b-corp/company/lunchbox-solutions/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.bcorporation.net/en-us/find-a-b-corp/company/lunchbox-solutions/
        </a>
      </>
    ),
  },
  {
    id: 'bron-ewaste-2024',
    content: (
      <>
        Baldé, C. P., Kuehr, R., Yamamoto, T., McDonald, R., D&apos;Angelo, E., Althaf, S.,
        Bel, G., Deubzer, O., Fernandez-Cubillo, E., Forti, V., Gray, V., Herat, S., Honda, S.,
        Iattoni, G., Khetriwal, D. S., Luda di Cortemiglia, V., Lobuntsova, Y., Nnorom, I.,
        Pralat, N., &amp; Wagner, M. (2024). <em>Global e-waste monitor 2024</em>. International
        Telecommunication Union &amp; United Nations Institute for Training and Research.{' '}
        <a
          href="https://ewastemonitor.info/the-global-e-waste-monitor-2024/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://ewastemonitor.info/the-global-e-waste-monitor-2024/
        </a>
      </>
    ),
  },
  {
    id: 'bron-ema-nd',
    content: (
      <>
        Ellen MacArthur Foundation. (z.d.). <em>Design and the circular economy</em>.
        Geraadpleegd op 2 mei 2026, van{' '}
        <a
          href="https://www.ellenmacarthurfoundation.org/articles/design-and-the-circular-economy"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.ellenmacarthurfoundation.org/articles/design-and-the-circular-economy
        </a>
      </>
    ),
  },
  {
    id: 'bron-rtr-2024',
    content: (
      <>
        Europees Parlement &amp; Raad van de Europese Unie. (2024).{' '}
        <em>
          Richtlijn (EU) 2024/1799 van het Europees Parlement en de Raad van 13 juni 2024
          betreffende gemeenschappelijke regels ter bevordering van de reparatie van goederen
          (Right-to-Repair-Richtlijn)
        </em>
        . Publicatieblad van de Europese Unie, L 2024/1799.{' '}
        <a
          href="https://eur-lex.europa.eu/eli/dir/2024/1799/oj"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://eur-lex.europa.eu/eli/dir/2024/1799/oj
        </a>
      </>
    ),
  },
  {
    id: 'bron-ppwr-2025',
    content: (
      <>
        Europees Parlement &amp; Raad van de Europese Unie. (2025).{' '}
        <em>
          Verordening (EU) 2025/40 van het Europees Parlement en de Raad van 19 december 2024
          betreffende verpakkingen en verpakkingsafval (PPWR)
        </em>
        . Publicatieblad van de Europese Unie, L 2025/40.{' '}
        <a
          href="https://eur-lex.europa.eu/eli/reg/2025/40/oj"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://eur-lex.europa.eu/eli/reg/2025/40/oj
        </a>
      </>
    ),
  },
  {
    id: 'bron-fairphone-nd',
    content: (
      <>
        Fairphone. (z.d.). <em>Our impact</em>. Geraadpleegd op 2 mei 2026, van{' '}
        <a
          href="https://www.fairphone.com/en/impact/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.fairphone.com/en/impact/
        </a>
      </>
    ),
  },
  {
    id: 'bron-ikl-2024',
    content: (
      <>
        Industriële Kring Lochem. (2024). <em>Mepal B Corp gecertificeerd met 101,6 punten</em>.{' '}
        <a
          href="https://www.iklochem.nl/nieuws/mepal-b-corp-gecertificeerd"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.iklochem.nl/nieuws/mepal-b-corp-gecertificeerd
        </a>
      </>
    ),
  },
  {
    id: 'bron-pisa-2022',
    content: (
      <>
        OECD. (2023).{' '}
        <em>
          PISA 2022 results (Volume II): Learning during – and from – disruption
        </em>
        . OECD Publishing.{' '}
        <a
          href="https://doi.org/10.1787/a97db61c-en"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://doi.org/10.1787/a97db61c-en
        </a>
      </>
    ),
  },
  {
    id: 'bron-voedingscentrum-nd',
    content: (
      <>
        Voedingscentrum. (z.d.). <em>Is school een luilekkerland?</em> Geraadpleegd op
        2 mei 2026, van{' '}
        <a
          href="https://www.voedingscentrum.nl/nl/service/over-ons/wie-zijn-wij-/de-wereld-eet-door-columns/is-school-een-luilekkerland-.aspx"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.voedingscentrum.nl/nl/service/over-ons/…
        </a>
      </>
    ),
  },
  {
    id: 'bron-who-2006',
    content: (
      <>
        WHO Regional Office for Europe. (2006).{' '}
        <em>
          Food and nutrition policy for schools: A tool for the development of school nutrition
          programmes in the WHO European Region
        </em>
        . World Health Organization.{' '}
        <a
          href="https://iris.who.int/handle/10665/107797"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://iris.who.int/handle/10665/107797
        </a>
      </>
    ),
  },
]

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function Opdracht6Page() {
  return (
    <>
      <PageHead
        number="06"
        label="Portfolio · Opdracht"
        title="Scorecard Challenge Table."
        lead="Groepsopdracht uit de module Toekomstbestendige Business Innovatie. Ecologische en sociale scorecard voor de Challenge Table: relevante aspecten, concrete activiteiten en meervoudige waardecreatie onderbouwd met externe bronnen."
        meta={[
          { key: 'Type', value: 'Groepsopdracht' },
          { key: 'Module', value: 'Toekomstbestendige Business Innovatie' },
          { key: 'Concept', value: 'Challenge Table' },
        ]}
      />

      {/* SITUERING */}
      <section className="px-6 md:px-10 py-20">
        <SectionHeading
          eyebrow="Situering · Challenge Table"
          heading="Korte situering van het concept."
        />

        <div className="grid gap-8 max-w-[820px]">
          <p
            className="text-[17px] md:text-[18px]"
            style={paragraphStyle}
          >
            {situeringParagraph}
          </p>
        </div>
      </section>

      {/* ECOLOGISCHE ASPECTEN */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="Onderdeel 1 · Ecologische aspecten"
          heading="Relevante ecologische aspecten."
        />

        <div className="grid gap-10 max-w-[820px]">
          {ecologischeAspecten.map((aspect) => (
            <div key={aspect.nummer} className="grid gap-3">
              <h3
                className="text-[20px] md:text-[22px]"
                style={h3Style}
              >
                <span style={{ color: 'var(--accent-mint)' }}>{aspect.nummer}</span>{' '}
                {aspect.titel}
              </h3>
              <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
                {aspect.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SOCIALE ASPECTEN */}
      <section
        className="px-6 md:px-10 py-20"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <SectionHeading
          eyebrow="Onderdeel 2 · Sociale aspecten"
          heading="Relevante sociale aspecten."
        />

        <div className="grid gap-10 max-w-[820px]">
          {socialeAspecten.map((aspect) => (
            <div key={aspect.nummer} className="grid gap-3">
              <h3
                className="text-[20px] md:text-[22px]"
                style={h3Style}
              >
                <span style={{ color: 'var(--accent-mint)' }}>{aspect.nummer}</span>{' '}
                {aspect.titel}
              </h3>
              <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
                {aspect.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ACTIVITEITEN ECOLOGISCH */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="Onderdeel 3 · Ecologische activiteiten"
          heading="Activiteiten voor ecologische waardecreatie."
        />

        <div className="grid gap-10 max-w-[820px]">
          {ecologischeActiviteiten.map((act) => (
            <div key={act.nummer} className="grid gap-3">
              <h3
                className="text-[20px] md:text-[22px]"
                style={h3Style}
              >
                <span style={{ color: 'var(--accent-mint)' }}>{act.nummer}</span>{' '}
                {act.titel}
              </h3>
              <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
                {act.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ACTIVITEITEN SOCIAAL */}
      <section
        className="px-6 md:px-10 py-20"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <SectionHeading
          eyebrow="Onderdeel 4 · Sociale activiteiten"
          heading="Activiteiten voor sociale waardecreatie."
        />

        <div className="grid gap-10 max-w-[820px]">
          {socialeActiviteiten.map((act) => (
            <div key={act.nummer} className="grid gap-3">
              <h3
                className="text-[20px] md:text-[22px]"
                style={h3Style}
              >
                <span style={{ color: 'var(--accent-mint)' }}>{act.nummer}</span>{' '}
                {act.titel}
              </h3>
              <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
                {act.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MEERVOUDIGE WAARDE */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="Onderdeel 5 · Meervoudige waarde"
          heading="Meervoudige waarde onderbouwd met bronnen."
        />

        <div className="grid gap-12 max-w-[820px]">
          {/* Ecologische waarde */}
          <div className="grid gap-4">
            <h3
              className="text-[22px] md:text-[24px]"
              style={h3Style}
            >
              Ecologische waarde
            </h3>
            {ecologischeWaardeParagraphs.map((paragraph, i) => (
              <p key={i} className="text-[17px] md:text-[18px]" style={paragraphStyle}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Sociale waarde */}
          <div className="grid gap-4">
            <h3
              className="text-[22px] md:text-[24px]"
              style={h3Style}
            >
              Sociale waarde
            </h3>
            {socialeWaardeParagraphs.map((paragraph, i) => (
              <p key={i} className="text-[17px] md:text-[18px]" style={paragraphStyle}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Aansluiting bij impactbepaling */}
          <div className="grid gap-4">
            <h3
              className="text-[22px] md:text-[24px]"
              style={h3Style}
            >
              Aansluiting bij impactbepaling en ambitieniveau
            </h3>
            {aansluitingParagraphs.map((paragraph, i) => (
              <p key={i} className="text-[17px] md:text-[18px]" style={paragraphStyle}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* BRONNENLIJST */}
      <section
        className="px-6 md:px-10 py-20"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <SectionHeading eyebrow="Bronnenlijst" heading="Bronnenlijst." />

        <ol
          className="grid gap-5 max-w-[820px] list-none p-0 m-0"
          style={{ color: 'var(--text-secondary)' }}
        >
          {bronnen.map((bron) => (
            <li
              key={bron.id}
              id={bron.id}
              className="scroll-mt-24 text-[15px] md:text-[16px]"
              style={{
                lineHeight: 1.7,
                paddingLeft: '2.5rem',
                textIndent: '-2.5rem',
              }}
            >
              {bron.content}
            </li>
          ))}
        </ol>
      </section>

      {/* TERUG-NAVIGATIE */}
      <section
        className="px-6 md:px-10 py-16"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <Link
          href="/bronnen"
          className="inline-flex items-center gap-2 text-[12px] uppercase hover:opacity-80 transition-opacity"
          style={{
            letterSpacing: '0.2em',
            color: 'var(--accent-mint)',
          }}
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          Terug naar bronnen
        </Link>
      </section>
    </>
  )
}
