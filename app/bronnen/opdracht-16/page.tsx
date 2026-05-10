import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import PageHead from '@/components/rubric/PageHead'
import SectionHeading from '@/components/rubric/SectionHeading'

export const metadata = {
  title: 'Opdracht 16 — Schaalbaarheid · Challenge Cube',
}

const citeStyle: React.CSSProperties = {
  color: 'var(--accent-mint)',
  textDecoration: 'underline',
  textDecorationThickness: '0.5px',
  textUnderlineOffset: '2px',
}

const paragraphStyle: React.CSSProperties = {
  lineHeight: 1.75,
  color: 'var(--text-secondary)',
}

type Bron = {
  id: string
  content: React.ReactNode
}

type Section = {
  eyebrow: string
  heading: string
  paragraphs: React.ReactNode[]
  elevated?: boolean
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

const sections: Section[] = [
  {
    eyebrow: 'Onderdeel 1 · Groeifasen',
    heading: 'Doorkijk naar pioniersfase en samenwerkingsfase.',
    paragraphs: [
      <>
        In de pioniersfase is het bedrijf rondom de Challenge Table nog klein, ondernemend en sterk experimenterend. De kern van de organisatie ligt bij ons, het oprichtersteam, dat vrijwel alle rollen combineert: het ontwerpen en testen van het prototype, het benaderen van eerste scholen, het begeleiden van pilots en het verzamelen van data over pauzegedrag en snackkeuzes. In deze periode staat het aantonen van probleem-oplossingsfit centraal: de vraag is of de Table in de praktijk echt gebruikt wordt als aantrekkelijk alternatief pauzeritueel, of leerlingen vaker op school blijven in plaats van naar de supermarkt te gaan en of ongezond snackgedrag daadwerkelijk afneemt. Tegelijkertijd wordt gewerkt aan een sterk, veilig en repareerbaar ontwerp dat tegen intensief dagelijks gebruik in een schoolomgeving kan, waarbij inzichten uit de impactbepaling en supply chain-analyse worden meegenomen. Organisatiemodellen zoals het groeimodel van Greiner en beschrijvingen van groeifasen door partijen als ABN AMRO en nlgroeit plaatsen dit duidelijk in de creatieve start- en pioniersfase, waarin informele structuur, korte lijnen en ondernemerschap dominant zijn <Cite id="bron-growsupport-2025">(Growsupport, 2025)</Cite> <Cite id="bron-abn-amro-2021">(ABN-AMRO, 2021)</Cite>.
      </>,
      <>
        In de samenwerkingsfase verschuift het zwaartepunt van “zelf doen” naar “samendoen” met een ecosysteem van partners. De organisatie gaat dan minder werken met eenmalige pilots en meer met structurele afspraken met schoolbesturen, Gezonde School- en GGD-programma’s, producenten van schoolmeubilair en uitgevers of distributiepartners. De Challenge Table wordt geïntegreerd in bredere programma’s rond gezonde schoolomgeving, pauzecultuur en leefstijl, in plaats van een losstaand experiment. Dit vraagt om formelere structuren, zoals raamcontracten met koepels, modulair ontworpen producten die seriematig geproduceerd en onderhouden kunnen worden, duidelijke service- en onderhoudsconcepten en heldere KPI’s. In termen van groeifasen verschuift het bedrijf dan naar een fase waarin schaalbaarheid, procesinrichting en strategische allianties bepalend zijn voor verdere groei, zoals ook voortkomt uit groeifaseliteratuur over scale-ups <Cite id="bron-bermejo-2026">(Bermejo, 2026)</Cite> <Cite id="bron-abn-amro-2021">(ABN-AMRO, 2021)</Cite>.
      </>,
    ],
  },
  {
    eyebrow: 'Onderdeel 2 · Alliantiepartners',
    heading: 'Mogelijke alliantiepartners en geschiktheid.',
    elevated: true,
    paragraphs: [
      <>
        Voor de ontwikkeling en opschaling van de Challenge Table zijn verschillende typen alliantiepartners logisch en onderbouwd te kiezen. Allereerst zijn er schoolbesturen en koepels in het voortgezet onderwijs, zoals regionale scholengroepen en de VO-raad, die gezamenlijk verantwoordelijk zijn voor onderwijs, welzijn en een gezonde schoolomgeving. In het landelijke programma Gezonde School, een samenwerking van PO-Raad, VO-raad, MBO Raad, GGD GHOR Nederland en het RIVM, laten recente evaluaties zien dat de impact juist groter wordt wanneer scholen structureel samenwerken met GGD-adviseurs en gezondheidsbeleid stevig verankeren in hun organisatie. Dit maakt deze partijen tot sterke alliantiepartners om de Challenge Table niet als los experiment, maar als onderdeel van school- en bestuursbeleid in te bedden <Cite id="bron-rivm-2023">(RIVM, 2023)</Cite> <Cite id="bron-gezondeschool-2026">(Gezonde School, 2026)</Cite>.
      </>,
      <>
        Daarnaast zijn Gezonde School, GGD’en en gemeenten logische partners omdat zij programmatisch werken aan thema’s als voeding, bewegen, mentale gezondheid en kansengelijkheid. In het ondersteuningsaanbod van Gezonde School krijgen scholen bijvoorbeeld advies van een Gezonde School-adviseur en kunnen zij stimuleringsbudget aanvragen voor interventies die bijdragen aan een gezonde leefstijl op school; een omgevingsinterventie als de Challenge Table sluit daar direct op aan doordat deze het pauzeritueel en de fysieke omgeving beïnvloedt in plaats van alleen informatie te geven. Tegelijk stimuleert Erasmus+ in recente calls “Alliances for Innovation”, waarbij onderwijsinstellingen en bedrijven structureel samenwerken aan nieuwe leeromgevingen en innovaties, wat het belang bevestigt van strategische allianties tussen onderwijs en marktpartijen <Cite id="bron-erasmus-2026">(Erasmus+, 2026)</Cite> <Cite id="bron-gezondeschool-2026">(Gezonde School, 2026)</Cite>.
      </>,
      <>
        Aan de aanbodzijde zijn producenten van schoolmeubilair en schoolinrichting belangrijke alliantiepartners, en hier past Koninklijke Ahrend goed bij. Ahrend is al meer dan een eeuw actief in het inrichten van werk- en leeromgevingen en richt zich expliciet op vitale, gezonde en circulaire omgevingen, waaronder onderwijsinstellingen. In het integrated report en in de duurzaamheidsstrategie benadrukt Ahrend dat ecodesign, hergebruik en CO2-reductie kernonderdelen zijn van de bedrijfsvoering en dat serviceconcepten zoals “Furniture as a Service” steeds belangrijker worden. Deze combinatie van onderwijservaring, bestaande relaties met scholen, bewezen circulaire praktijk en sterke service maakt Ahrend tot een logische alliantiepartner om de Challenge Table op schaal te ontwerpen, produceren, installeren en onderhouden, terwijl de projectgroep zich focust op het spelconcept, de inhoud en de gedragsverandering tijdens de pauze <Cite id="bron-ahrend-2025">(Ahrend, 2025)</Cite> <Cite id="bron-ahrend-onderwijs-2026">(Ahrend, onderwijs, 2026)</Cite> <Cite id="bron-ahrend-over">(Ahrend, z.d.)</Cite>.
      </>,
      <>
        Daarnaast zijn uitgevers en leveranciers van sociaal-emotionele spelmaterialen relevante partners. Recente uitgaven zoals <em>De 50 beste spelletjes voor sociaal emotionele vorming</em> en vergelijkbare collecties in bibliotheken en educatieve catalogi laten zien dat er een doorlopende vraag is naar gespreks- en groepsspellen die sociale vaardigheden en empathie in de schoolcontext ondersteunen. Platforms en aanbieders met een breed SEL-assortiment, zoals Educatheek en Earth Games, zijn gewend om met scholen te werken aan klassenklimaat en sociaal-emotionele ontwikkeling en beschikken over distributienetwerken richting basis- en voortgezet onderwijs. Daardoor kunnen zij de Challenge Table positioneren als pauze-gebaseerde aanvulling op bestaande SEL-materialen in plaats van een losstaand spel <Cite id="bron-liebertz-2020">(Liebertz, 2020)</Cite> <Cite id="bron-earthgames">(Earthgames, z.d.)</Cite>.
      </>,
    ],
  },
  {
    eyebrow: 'Onderdeel 3 · Partnerprofielen',
    heading: 'Kenmerken van de beoogde alliantiepartners.',
    paragraphs: [
      <>
        Schoolbesturen en onderwijskoepels hebben als “businessmodel” dat zij publieke middelen vertalen in kwalitatief goed, veilig en inclusief onderwijs, binnen de kaders van wetgeving en inspectie-eisen. Hun waardepropositie is een leeromgeving waarin leerlingen zich kunnen ontwikkelen, zich veilig voelen en gezond blijven. Investeringen in infrastructuur, leermiddelen en pauzevoorzieningen worden afgewogen op basis van impact op onderwijsresultaten, welzijn en uitvoerbaarheid binnen de organisatie. Zij zijn bereid te investeren in interventies zoals de Challenge Table wanneer deze aantoonbaar bijdragen aan doelen rond Gezonde School, leerlingwelzijn en sociale veiligheid en wanneer de totale levensduurkosten beheersbaar zijn, in lijn met de gedachte van life-cycle costing uit Europese richtlijnen voor publieke inkoop <Cite id="bron-sfaa">(SFAA, z.d.)</Cite>.
      </>,
      <>
        Gezonde School, GGD’en en gemeenten werken programmatisch rondom thema’s als voeding, bewegen, mentale gezondheid en sociale veiligheid. Hun waardepropositie richt zich op maatschappelijke impact, zoals minder overgewicht, meer bewegen en betere mentale gezondheid bij jongeren. Zij financieren en ondersteunen interventies die bewezen of veelbelovend zijn, goed in bestaande programma’s passen en uitvoerbaar zijn binnen scholen. Publicaties van Voedingscentrum en RIVM over de Gezonde Schoolkantine en de rol van de schoolomgeving laten zien dat juist omgevingsinterventies, zoals aanpassingen in inrichting en aanbod, belangrijk zijn om gedrag structureel te beïnvloeden. Een tastbare, speelse interventie als de Challenge Table sluit hier direct op aan <Cite id="bron-gezondeschool-2026">(Gezonde School, 2026)</Cite> <Cite id="bron-rivm-2023">(RIVM, 2023)</Cite>.
      </>,
      <>
        Koninklijke Ahrend kenmerkt zich door een circulair en servicegericht businessmodel, waarbij meubilair modulair wordt ontworpen, refurbished en via concepten als “Furniture as a Service” opnieuw wordt ingezet. De waardepropositie bestaat uit duurzame, ergonomische en flexibele werk- en leeromgevingen, met een sterke focus op circulariteit en CO2-reductie. Ahrend investeert in ontwerp, productielijnen en refurbish-capaciteit als er zicht is op langdurige klantrelaties en herhaalorders; onderwijs is daarin een belangrijke markt, zoals blijkt uit recente onderwijsprojecten en cases. Technisch beschikt Ahrend over diepgaande kennis van staal-, hout- en kunststofconstructies, ergonomie en normeringen, en de merkwaarde is sterk: het merk wordt geassocieerd met kwaliteit, design en duurzaamheid, wat goed aansluit bij de positionering van een innovatieve, gezonde pauze-oplossing <Cite id="bron-ahrend-onderwijs-2026">(Ahrend, onderwijs, 2026)</Cite> <Cite id="bron-ahrend-2025">(Ahrend, 2025)</Cite>.
      </>,
    ],
  },
  {
    eyebrow: 'Onderdeel 4 · Waarde-uitwisseling',
    heading: 'Wat deze alliantiepartners kunnen bieden.',
    elevated: true,
    paragraphs: [
      <>
        Aan schoolbesturen bieden we met de Challenge Table een concreet instrument om een gezond en sociaal pauzeritueel te stimuleren dat past binnen Gezonde School-doelen, smartphonebeleid en aandacht voor mentaal welzijn. De interventie maakt het voor scholen mogelijk om niet alleen de kantine aan te passen, maar ook het “gedrag rondom de pauze” zelf te beïnvloeden, door een aantrekkelijk alternatief te bieden voor het standaardrondje supermarkt. Daarbij sluit het product aan bij inzichten uit onder andere OECD-rapporten over schoolwelzijn, waarin sociale verbondenheid en een positief schoolklimaat worden gekoppeld aan beter functioneren van leerlingen. Door middel van KPI’s als gebruiksfrequentie, ervaren gezelligheid en, indien gemeten, veranderingen in snackgedrag, krijgen schoolbesturen bovendien handvatten om hun investeringen te verantwoorden <Cite id="bron-oecd-2025">(OECD, 2025)</Cite>.
      </>,
      <>
        Voor Gezonde School, GGD’en en gemeenten vormt de Challenge Table een zichtbare omgevingsinterventie binnen hun bredere programma’s. De aanpak past bij hun focus op het creëren van een gezonde leefomgeving in plaats van alleen individuele voorlichting, zoals het Voedingscentrum en RIVM ook benadrukken. De Table kan gecombineerd worden met lespakketten, oudercommunicatie en kantine-aanpassingen en biedt bovendien een interessante casus voor monitoring en evaluatie. Producenten van schoolmeubilair krijgen op hun beurt toegang tot een nieuw, onderscheidend productconcept dat inspeelt op actuele thema’s als gezonde school, smartphonevrij beleid en sociale cohesie. De kennis die jullie hebben opgebouwd over pauzerituelen, groepsdruk en snackgedrag vergroot voor hen de kans dat het product in de praktijk aanslaat. Uitgevers en SEL-spelpartners kunnen met de Challenge Table hun portfolio uitbreiden richting de informele momenten van de schooldag, door bijvoorbeeld thematische challenges rond burgerschap, duurzaamheid of mentale gezondheid aan de Table te koppelen <Cite id="bron-rivm-2023">(RIVM, 2023)</Cite> <Cite id="bron-gezondeschool-2026">(Gezonde School, 2026)</Cite>.
      </>,
      'Uitgevers en SEL-partners krijgen via de Challenge Table een game-based concept dat niet in het klaslokaal maar in de pauze plaatsvindt, en daarmee hun bereik binnen de schooldag vergroot. De projectgroep kan content en formats leveren die aansluiten bij thema’s als burgerschap, duurzaamheid en mentale gezondheid, terwijl de uitgever zorgt voor didactische verfijning, distributie en integratie in bestaande methodes. Voor sociale ondernemingen biedt de samenwerking een concrete casus waarin hun duurzame producten en merkwaarden zichtbaar worden in de dagelijkse schoolpraktijk; denk aan co-branding, gezamenlijke campagnes of combinaties van de Table met herbruikbare lunch- en drinkoplossingen. Onderzoeksinstellingen krijgen tenslotte toegang tot een rijk living lab in echte schoolcontexten, waar zij onderzoek kunnen doen naar pauzeroutines, sociale interactie en snackgedrag en waar de projectgroep bereid is het ontwerp aan te passen op basis van onderzoeksbevindingen.',
    ],
  },
  {
    eyebrow: 'Onderdeel 5 · Schaalgrootte',
    heading: 'Impact van schaalgrootte op prototype, businessmodel en businesscase.',
    paragraphs: [
      <>
        Naarmate de schaal groter wordt, verandert de technische en financiële logica van de Challenge Cube en Table. Voor het prototype betekent schaalgrootte dat het huidige, nog vrij handmatig gemaakte ontwerp moet worden doorontwikkeld tot een modulair, industrieel produceerbaar product met gestandaardiseerde onderdelen voor frame, blad, elektronica en foam. Daarbij zijn materiaalkeuzes cruciaal: jullie analyse laat zien dat staal en gecertificeerd hout in de Table bijvoorbeeld goed aansluiten bij principes van circulariteit en levensduur, zoals beschreven door de World Steel Association en de Ellen MacArthur Foundation. Tegelijk vraagt schaalgrootte om expliciete aandacht voor repareerbaarheid en vervangbaarheid van onderdelen, omdat onderhoud en levensduur bij grotere aantallen zwaar meewegen in zowel duurzaamheid als kosten. Certificering en normering rond veiligheid, brandveiligheid en ergonomie worden eveneens belangrijker wanneer de Table in aanbestedingen en landelijke inkooptrajecten terechtkomt.
      </>,
      'In het businessmodel verschuift de nadruk van eenmalige projectmatige verkoop per school naar een combinatie van productverkoop via partners en dienstcomponenten zoals onderhoudscontracten, content-updates en monitoring. Daarbij sluiten concepten als life-cycle costing en green public procurement goed aan: Europese richtlijnen benadrukken dat publieke instellingen, waaronder scholen en gemeenten, steeds meer kijken naar totale levensduurkosten en milieueffecten over de hele keten bij hun inkoopbeslissingen. De businesscase verandert mee: hogere initiële investeringen zijn nodig voor ontwerp, certificering, tooling en service, maar deze vaste kosten worden over meer eenheden uitgesmeerd waardoor de kostprijs per product daalt. In jullie iteratie op de impactbepaling komt al naar voren dat kosten voor scholen, schaalbaarheid en de verhouding tussen kostprijs en gebruikswaarde belangrijke financiële criteria zijn, en dat een product dat alleen als prototype werkt veel minder maatschappelijke waarde creëert dan een schaalbare, onderhoudsvriendelijke oplossing.',
      'De benodigde schaalgrootte kan het kernteam niet alleen realiseren; juist de alliantiepartners zijn nodig om de vraag- en aanbodzijde van het ecosysteem te organiseren. Schoolbesturen, Gezonde School-programma’s en gemeenten creëren de vraag door het concept op te nemen in beleid en programma’s. Producenten en distributiepartners zorgen voor productie, logistiek en service op schaal. Onderzoeksinstellingen leveren de evidence die nodig is om nieuwe financiers en beleidsmakers te overtuigen. Daarmee wordt duidelijk dat de impact van schaalgrootte op prototype, businessmodel en businesscase direct verbonden is met de gekozen alliantiepartners en de manier waarop zij de Challenge Cube/Table integreren in hun eigen systemen en proposities.',
    ],
  },
]

const bronnen: Bron[] = [
  {
    id: 'bron-abn-amro-2021',
    content: <>ABN AMRO. (2021). <em>Groeifasen van ondernemingen en scale-ups</em>.</>,
  },
  {
    id: 'bron-ahrend-2025',
    content: <>Ahrend, K. (2025). <em>Integrated report en duurzaamheidsstrategie</em>. Koninklijke Ahrend.</>,
  },
  {
    id: 'bron-ahrend-onderwijs-2026',
    content: <>Ahrend. (2026). <em>Onderwijs: inrichting van gezonde en vitale leeromgevingen</em>. Koninklijke Ahrend.</>,
  },
  {
    id: 'bron-ahrend-over',
    content: <>Ahrend. (z.d.). <em>Over Ahrend</em>. Koninklijke Ahrend.</>,
  },
  {
    id: 'bron-bermejo-2026',
    content: <>Bermejo. (2026). <em>Scale-up groeifasen en strategische allianties</em>.</>,
  },
  {
    id: 'bron-earthgames',
    content: <>Earthgames. (z.d.). <em>Spelmaterialen voor sociaal-emotionele ontwikkeling</em>.</>,
  },
  {
    id: 'bron-erasmus-2026',
    content: <>Erasmus+. (2026). <em>Alliances for Innovation</em>. Europese Commissie.</>,
  },
  {
    id: 'bron-gezondeschool-2026',
    content: <>Gezonde School. (2026). <em>Jaarrapport Gezonde School 2025</em>.</>,
  },
  {
    id: 'bron-growsupport-2025',
    content: <>Growsupport. (2025). <em>Groeimodel en pioniersfase van ondernemingen</em>.</>,
  },
  {
    id: 'bron-liebertz-2020',
    content: <>Liebertz. (2020). <em>De 50 beste spelletjes voor sociaal emotionele vorming</em>.</>,
  },
  {
    id: 'bron-oecd-2025',
    content: <>OECD. (2025). <em>Students’ well-being and school climate</em>. OECD Publishing.</>,
  },
  {
    id: 'bron-rivm-2023',
    content: <>RIVM. (2023). <em>Evaluatie ondersteuningsaanbod programma Gezonde School</em>. Rijksinstituut voor Volksgezondheid en Milieu.</>,
  },
  {
    id: 'bron-sfaa',
    content: <>SFAA. (z.d.). <em>Life-cycle costing bij publieke inkoop</em>.</>,
  },
]

export default function Opdracht16Page() {
  return (
    <>
      <PageHead
        number="16"
        label="Portfolio · Opdracht"
        title="Schaalbaarheid."
        lead="Analyse van de groeifasen, alliantiepartners en schaalimpact voor de Challenge Cube en Challenge Table."
        meta={[
          { key: 'Type', value: 'Groepsopdracht' },
          { key: 'Module', value: 'Toekomstbestendige Business Innovatie' },
          { key: 'Thema', value: 'Schaalbaarheid & allianties' },
        ]}
      />

      {sections.map((section, index) => (
        <section
          key={section.eyebrow}
          className="px-6 md:px-10 py-20"
          style={{
            borderTop: index === 0 ? undefined : '0.5px solid var(--border)',
            backgroundColor: section.elevated ? 'var(--canvas-elevated)' : undefined,
          }}
        >
          <SectionHeading eyebrow={section.eyebrow} heading={section.heading} />

          <div className="grid gap-8 max-w-[820px]">
            {section.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-[17px] md:text-[18px]" style={paragraphStyle}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}

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
