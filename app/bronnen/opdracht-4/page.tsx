import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import PageHead from '@/components/rubric/PageHead'
import SectionHeading from '@/components/rubric/SectionHeading'

export const metadata = {
  title: 'Opdracht 4 — Impactbepaling · Challenge Cube',
}

const citeStyle: React.CSSProperties = {
  color: 'var(--accent-mint)',
  textDecoration: 'underline',
  textDecorationThickness: '0.5px',
  textUnderlineOffset: '2px',
}

function Cite({
  id,
  children,
}: {
  id?: string
  children: React.ReactNode
}) {
  return (
    <a href={id ? `#${id}` : '#'} style={citeStyle}>
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

// ─── Tabel helpers ────────────────────────────────────────────────────────────

const thStyle: React.CSSProperties = {
  textAlign: 'left',
  padding: '10px 14px',
  fontSize: '12px',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  borderBottom: '0.5px solid var(--border-strong)',
  fontWeight: 500,
}

const tdStyle: React.CSSProperties = {
  padding: '12px 14px',
  fontSize: '15px',
  lineHeight: 1.65,
  color: 'var(--text-secondary)',
  verticalAlign: 'top',
  borderBottom: '0.5px solid var(--border)',
}

const priorityBadge = (level: 'HOOG' | 'MIDDEL'): React.CSSProperties => ({
  display: 'inline-block',
  padding: '2px 10px',
  borderRadius: '999px',
  fontSize: '11px',
  letterSpacing: '0.1em',
  fontWeight: 500,
  backgroundColor:
    level === 'HOOG' ? 'var(--accent-mint-soft)' : 'var(--accent-amber-soft)',
  color:
    level === 'HOOG' ? 'var(--accent-mint)' : 'var(--accent-amber)',
  border:
    level === 'HOOG'
      ? '0.5px solid var(--accent-mint-border)'
      : '0.5px solid rgba(232,184,79,0.25)',
})

const catBadge = (_cat: 'Sociaal' | 'Ecologisch' | 'Financieel'): React.CSSProperties => ({
  display: 'inline-block',
  padding: '2px 10px',
  borderRadius: '999px',
  fontSize: '11px',
  letterSpacing: '0.1em',
  fontWeight: 400,
  backgroundColor: 'rgba(245,245,242,0.05)',
  color: 'var(--text-muted)',
  border: '0.5px solid var(--border)',
  whiteSpace: 'nowrap' as const,
})

// ─── Prioriteits-tabel data ───────────────────────────────────────────────────

type TabelRij = {
  categorie: 'Sociaal' | 'Ecologisch' | 'Financieel'
  onderwerp: string
  toelichting: React.ReactNode
  partners: string
  prioriteit: 'HOOG' | 'MIDDEL'
}

const tabelRijen: TabelRij[] = [
  {
    categorie: 'Sociaal',
    onderwerp: 'Sociale interactie & aantrekkelijk pauzegedrag',
    toelichting: (
      <>
        Kernfunctie van het concept. De OESO koppelt het gevoel van verbondenheid op school direct aan welzijn en het maken van vrienden{' '}
        <Cite id="bron-oecd-2025">(OECD, z.d.)</Cite>. Eigen interviews bevestigen dat leerlingen pauze vooral &lsquo;gezellig&rsquo; willen.
      </>
    ),
    partners: 'Scholieren, schoolleiding',
    prioriteit: 'HOOG',
  },
  {
    categorie: 'Sociaal',
    onderwerp: 'Invloed op snack- en pauzeroutine',
    toelichting: (
      <>
        Volgens het Voedingscentrum hebben scholen invloed op eetgedrag van leerlingen{' '}
        <Cite id="bron-voedingscentrum-2024a">(Voedingscentrum, 2024a)</Cite>. WHO benadrukt dat peers in de adolescentie een sterke invloed hebben op gewoonten{' '}
        <Cite id="bron-who-adolescent">(WHO, z.d.-a)</Cite>. De tafel moet groepsroutine deels verschuiven.
      </>
    ),
    partners: 'Scholieren, schoolleiding, cateraar',
    prioriteit: 'HOOG',
  },
  {
    categorie: 'Sociaal',
    onderwerp: 'Veiligheid, toezicht & schoolklimaat',
    toelichting: (
      <>
        Randvoorwaarde voor toelating. Een onveilig of verstorend product wordt niet ingezet, ongeacht de overige kwaliteit. Veilige schoolomgeving hangt samen met betrokkenheid{' '}
        <Cite id="bron-oecd-pisa-2019">(OECD, 2019)</Cite>.
      </>
    ),
    partners: 'Schoolleiding, docenten, conciërges',
    prioriteit: 'HOOG',
  },
  {
    categorie: 'Ecologisch',
    onderwerp: 'Materiaalkeuze & levensduur',
    toelichting: (
      <>
        Ellen MacArthur stelt ontwerp centraal in een circulaire economie: afval voorkomen, materialen op hoge waarde houden{' '}
        <Cite id="bron-ellen-macarthur-detail">(Ellen MacArthur Foundation, z.d.-a)</Cite>. Staal is volledig recyclebaar{' '}
        <Cite id="bron-worldsteel-2022b">(World Steel Association, 2022b)</Cite>.
      </>
    ),
    partners: 'Producent, leverancier',
    prioriteit: 'HOOG',
  },
  {
    categorie: 'Ecologisch',
    onderwerp: 'Elektronica & e-waste',
    toelichting: (
      <>
        De Global E-waste Monitor 2024 meldt dat e-waste vijf keer sneller groeit dan gedocumenteerde recycling{' '}
        <Cite id="bron-ewaste-2024">(UNITAR & ITU, 2024)</Cite>. Een klein elektronicadeel weegt zwaar mee in de duurzaamheidsbeoordeling.
      </>
    ),
    partners: 'Elektronica-leverancier, onderhoudspartner',
    prioriteit: 'HOOG',
  },
  {
    categorie: 'Ecologisch',
    onderwerp: 'Verpakking & transport',
    toelichting: (
      <>
        De Europese Verpakkingsverordening stuurt op minder verpakkingsafval en betere recyclebaarheid{' '}
        <Cite id="bron-ec-packaging">(Europese Commissie, 2024)</Cite>. KIDV waarschuwt voor moeilijk scheidbare laminaten{' '}
        <Cite id="bron-kidv-2024">(KIDV, 2024)</Cite>. Voor een omvangrijk product geldt: lokaal assembleren beperkt transportimpact.
      </>
    ),
    partners: 'Logistieke partner, assemblagepartner',
    prioriteit: 'MIDDEL',
  },
  {
    categorie: 'Financieel',
    onderwerp: 'Onderhoud, vervangbaarheid & service',
    toelichting: (
      <>
        Een schoolproduct zonder onderhoudslogica wordt een eenmalige pilot. Modulair ontwerp en losse vervanging verlengen levensduur en verlagen Total Cost of Ownership{' '}
        <Cite id="bron-ellen-macarthur-detail">(Ellen MacArthur Foundation, z.d.-a)</Cite>.
      </>
    ),
    partners: 'Onderhoudspartner, producent',
    prioriteit: 'HOOG',
  },
  {
    categorie: 'Financieel',
    onderwerp: 'Totale levensduurkosten (LCC/TCO)',
    toelichting: (
      <>
        De Europese Commissie definieert life-cycle costing als alle kosten over gebruik, onderhoud en afvoer{' '}
        <Cite id="bron-ec-lcc">(Europese Commissie, z.d.-a)</Cite>. Voor scholen vaak doorslaggevend; aanschafprijs alleen geeft een vertekend beeld.
      </>
    ),
    partners: 'Schoolleiding (inkoop), producent',
    prioriteit: 'HOOG',
  },
  {
    categorie: 'Financieel',
    onderwerp: 'Schaalbaarheid & inkoopgeschiktheid',
    toelichting: (
      <>
        Pas relevant na een werkende pilot. Groene publieke inkoop biedt een logische opschaalroute{' '}
        <Cite id="bron-ec-gpp">(Europese Commissie, z.d.-b)</Cite>, mits het product binnen schoolinkoop past: heldere specs, voorspelbare kosten, beperkte beheerlast.
      </>
    ),
    partners: 'Schoolleiding, distributiepartner',
    prioriteit: 'MIDDEL',
  },
]

// ─── Bronnen ──────────────────────────────────────────────────────────────────

const bronnen: Bron[] = [
  {
    id: 'bron-ellen-macarthur-detail',
    content: (
      <>
        Ellen MacArthur Foundation. (z.d.-a). <em>The circular economy in detail</em>. Geraadpleegd op 29 april 2026, van{' '}
        <a
          href="https://www.ellenmacarthurfoundation.org/the-circular-economy-in-detail-deep-dive"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.ellenmacarthurfoundation.org/the-circular-economy-in-detail-deep-dive
        </a>
      </>
    ),
  },
  {
    id: 'bron-ellen-macarthur-intro',
    content: (
      <>
        Ellen MacArthur Foundation. (z.d.-b). <em>The circular economy: Definition &amp; model explained</em>. Geraadpleegd op 29 april 2026, van{' '}
        <a
          href="https://www.ellenmacarthurfoundation.org/topics/circular-economy-introduction/overview"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.ellenmacarthurfoundation.org/topics/circular-economy-introduction/overview
        </a>
      </>
    ),
  },
  {
    id: 'bron-ec-packaging',
    content: (
      <>
        Europese Commissie. (2024). <em>Packaging waste</em>. Directorate-General for Environment. Geraadpleegd op 29 april 2026, van{' '}
        <a
          href="https://environment.ec.europa.eu/topics/waste-and-recycling/packaging-waste_en"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://environment.ec.europa.eu/topics/waste-and-recycling/packaging-waste_en
        </a>
      </>
    ),
  },
  {
    id: 'bron-ec-lcc',
    content: (
      <>
        Europese Commissie. (z.d.-a). <em>Life-cycle costing</em>. Green Public Procurement, Green Forum. Geraadpleegd op 29 april 2026, van{' '}
        <a
          href="https://green-forum.ec.europa.eu/green-business/green-public-procurement/life-cycle-costing_en"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://green-forum.ec.europa.eu/green-business/green-public-procurement/life-cycle-costing_en
        </a>
      </>
    ),
  },
  {
    id: 'bron-ec-gpp',
    content: (
      <>
        Europese Commissie. (z.d.-b). <em>Green Public Procurement</em>. Green Forum. Geraadpleegd op 29 april 2026, van{' '}
        <a
          href="https://green-forum.ec.europa.eu/green-business/green-public-procurement_en"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://green-forum.ec.europa.eu/green-business/green-public-procurement_en
        </a>
      </>
    ),
  },
  {
    id: 'bron-fsc-cert',
    content: (
      <>
        FSC International. (z.d.). <em>FSC certification</em>. Geraadpleegd op 29 april 2026, van{' '}
        <a
          href="https://fsc.org/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://fsc.org/
        </a>
      </>
    ),
  },
  {
    id: 'bron-ilo',
    content: (
      <>
        ILO — International Labour Organization. (z.d.). <em>Safety and health at work</em>. Geraadpleegd op 29 april 2026, van{' '}
        <a
          href="https://www.ilo.org/topics/safety-and-health-work"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.ilo.org/topics/safety-and-health-work
        </a>
      </>
    ),
  },
  {
    id: 'bron-kidv-2023',
    content: (
      <>
        KIDV — Kennisinstituut Duurzame Verpakkingen. (2023). <em>Wegwijzer Duurzaam Verpakken</em>. Geraadpleegd op 29 april 2026, van{' '}
        <a
          href="https://kidv.nl/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://kidv.nl/
        </a>
      </>
    ),
  },
  {
    id: 'bron-kidv-2024',
    content: (
      <>
        KIDV — Kennisinstituut Duurzame Verpakkingen. (2024). <em>Recyclechecks en richtlijnen materialencombinaties</em>. Geraadpleegd op 29 april 2026, van{' '}
        <a
          href="https://kidv.nl/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://kidv.nl/
        </a>
      </>
    ),
  },
  {
    id: 'bron-oecd-pisa-2019',
    content: (
      <>
        OECD. (2019). <em>PISA 2018 Results (Volume III): What school life means for students&apos; lives</em>. OECD Publishing.{' '}
        <a
          href="https://doi.org/10.1787/acd78851-en"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://doi.org/10.1787/acd78851-en
        </a>
      </>
    ),
  },
  {
    id: 'bron-oecd-2025',
    content: (
      <>
        OECD. (z.d.). <em>Students&apos; well-being</em>. Geraadpleegd op 29 april 2026, van{' '}
        <a
          href="https://www.oecd.org/pisa/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.oecd.org/pisa/
        </a>
      </>
    ),
  },
  {
    id: 'bron-rivm-2020',
    content: (
      <>
        RIVM. (2020). <em>Een gezonde schoollunch en meer bewegen op de basisschool helpen in de aanpak van overgewicht</em>. Rijksinstituut voor Volksgezondheid en Milieu. Geraadpleegd op 29 april 2026, van{' '}
        <a
          href="https://www.rivm.nl/nieuws/gezonde-schoollunch-en-meer-bewegen-op-basisschool-helpen-in-aanpak-van-overgewicht"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.rivm.nl/nieuws/gezonde-schoollunch-en-meer-bewegen-op-basisschool-helpen-in-aanpak-van-overgewicht
        </a>
      </>
    ),
  },
  {
    id: 'bron-rivm-gezond-onderwijs',
    content: (
      <>
        RIVM. (2024). <em>Gezond onderwijs — Gezonde School-aanpak</em>. Geraadpleegd op 29 april 2026, van{' '}
        <a
          href="https://www.rivm.nl/gemeente/leefomgeving-en-gezondheid/gezond-onderwijs"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.rivm.nl/gemeente/leefomgeving-en-gezondheid/gezond-onderwijs
        </a>
      </>
    ),
  },
  {
    id: 'bron-ewaste-2024',
    content: (
      <>
        UNITAR &amp; ITU. (2024). <em>Global e-waste monitor 2024: Electronic waste rising five times faster than documented e-waste recycling</em>. United Nations Institute for Training and Research / International Telecommunication Union. Geraadpleegd op 29 april 2026, van{' '}
        <a
          href="https://unitar.org/about/news-stories/press/global-e-waste-monitor-2024-electronic-waste-rising-five-times-faster-documented-e-waste-recycling"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          Open bron
        </a>
      </>
    ),
  },
  {
    id: 'bron-voedingscentrum-2024a',
    content: (
      <>
        Voedingscentrum. (2024a). <em>Het programma De Gezonde Schoolkantine</em>. Geraadpleegd op 29 april 2026, van{' '}
        <a
          href="https://www.voedingscentrum.nl/professionals/gezonde-eetomgeving/de-gezonde-schoolkantine/het-programma-de-gezonde-schoolkantine.aspx"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.voedingscentrum.nl/professionals/gezonde-eetomgeving/de-gezonde-schoolkantine/het-programma-de-gezonde-schoolkantine.aspx
        </a>
      </>
    ),
  },
  {
    id: 'bron-voedingscentrum-2024b',
    content: (
      <>
        Voedingscentrum. (2024b). <em>Waarom een gezonde schoolkantine?</em> Geraadpleegd op 29 april 2026, van{' '}
        <a
          href="https://www.voedingscentrum.nl/professionals/gezonde-eetomgeving/de-gezonde-schoolkantine/het-programma-de-gezonde-schoolkantine/waarom-een-gezonde-schoolkantine.aspx"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.voedingscentrum.nl/professionals/gezonde-eetomgeving/de-gezonde-schoolkantine/het-programma-de-gezonde-schoolkantine/waarom-een-gezonde-schoolkantine.aspx
        </a>
      </>
    ),
  },
  {
    id: 'bron-who-adolescent',
    content: (
      <>
        WHO. (z.d.-a). <em>Adolescent health</em>. World Health Organization. Geraadpleegd op 29 april 2026, van{' '}
        <a
          href="https://www.who.int/health-topics/adolescent-health"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.who.int/health-topics/adolescent-health
        </a>
      </>
    ),
  },
  {
    id: 'bron-who-school-nutrition',
    content: (
      <>
        WHO. (z.d.-b). <em>Healthy diet — School food and nutrition policy</em>. World Health Organization. Geraadpleegd op 29 april 2026, van{' '}
        <a
          href="https://www.who.int/initiatives/school-nutrition"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.who.int/initiatives/school-nutrition
        </a>
      </>
    ),
  },
  {
    id: 'bron-worldsteel-2022a',
    content: (
      <>
        World Steel Association. (2022a). <em>Steel — The permanent material in the circular economy</em>. Geraadpleegd op 29 april 2026, van{' '}
        <a
          href="https://worldsteel.org/about-steel/product-sustainability/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://worldsteel.org/about-steel/product-sustainability/
        </a>
      </>
    ),
  },
  {
    id: 'bron-worldsteel-2022b',
    content: (
      <>
        World Steel Association. (2022b). <em>Steel and raw materials — Fact sheet</em>. Geraadpleegd op 29 april 2026, van{' '}
        <a
          href="https://worldsteel.org/media/fact-sheets/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://worldsteel.org/media/fact-sheets/
        </a>
      </>
    ),
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Opdracht4Page() {
  return (
    <>
      <PageHead
        number="04"
        label="Portfolio · Opdracht"
        title="Impactbepaling."
        lead="Groepsopdracht uit de module Toekomstbestendige Business Innovatie. Analyse van de duurzaamheidsimpact van de Challenge Table — een interactieve pauzetafel voor het voortgezet onderwijs — langs de assen sociaal, ecologisch en financieel."
        meta={[
          { key: 'Type', value: 'Groepsopdracht' },
          { key: 'Module', value: 'Toekomstbestendige Business Innovatie' },
          { key: 'Product', value: 'Challenge Table' },
          { key: 'Iteratie', value: '2e versie (leidend)' },
        ]}
      />

      {/* ITERATIEMELDING */}
      <section
        className="px-6 md:px-10 py-10"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <div
          className="max-w-[820px] rounded-lg px-6 py-5"
          style={{
            border: '0.5px solid var(--accent-amber-soft)',
            backgroundColor: 'rgba(232,184,79,0.05)',
          }}
        >
          <p
            className="text-[12px] uppercase mb-2"
            style={{ letterSpacing: '0.15em', color: 'var(--accent-amber)' }}
          >
            Iteratiemelding voor de docent
          </p>
          <p className="text-[15px] md:text-[16px]" style={paragraphStyle}>
            Wij hebben de impactbepaling al een keer uitgewerkt. Op basis van feedback en nieuwe inzichten zijn we doorontwikkeld van de Challenge Cube (een schuimkubus) naar de Challenge Table: een robuuste tafel met scherm, fysieke knoppen en een speel-kubus. Dit hoofdstuk bevat de tweede iteratie en is leidend. De eerste iteratie staat in Bijlage A inclusief de redenen voor de pivot.
          </p>
        </div>
      </section>

      {/* 4.1 INLEIDING */}
      <section className="px-6 md:px-10 py-20" style={{ borderTop: '0.5px solid var(--border)' }}>
        <SectionHeading
          eyebrow="4.1 Inleiding"
          heading="Impactbepaling van een nieuw product."
        />
        <div className="grid gap-6 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            De impactbepaling brengt voor onze innovatie in kaart welke duurzaamheidsonderwerpen relevant en significant zijn, welke prioriteit zij krijgen voor actie, en hoe dat aansluit bij het gekozen ambitieniveau. De analyse volgt het stappenplan uit de training: supply chain, relevantie en significantie, key partners, prioritering en visualisatie in een matrix.
          </p>
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Onze focus ligt op het pauzemoment van scholieren in het voortgezet onderwijs. Uit interviews bleek dat snackgedrag op school vooral een sociaal moment is — leerlingen gaan samen iets halen omdat het &ldquo;gezelliger&rdquo; is en omdat prijs een rol speelt. Het probleem achter snackgedrag is daarmee niet voeding alleen, maar groepsgedrag, gewoonte en de fysieke schoolomgeving.
          </p>
        </div>
      </section>

      {/* 4.2.1 WAT IS DE CHALLENGE TABLE */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="4.2.1 Het product"
          heading="Wat is de Challenge Table?"
        />
        <div className="grid gap-6 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            De Challenge Table is een tafel met een verticaal non-touch-scherm, fysieke controleknoppen en een speel-kubus. Leerlingen spelen tijdens de pauze samen mini-uitdagingen: weetjes, reactietests, samenwerkingsspellen. De tafel is bedoeld als sociaal alternatief voor het &ldquo;samen iets halen&rdquo; buiten school.
          </p>
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            In deze iteratie is bewust gekozen voor een non-touch-scherm en fysieke knoppen. Dat verlaagt complexiteit, storingsgevoeligheid en kostprijs; en maakt de tafel beter geschikt voor intensief schoolgebruik. De stoelen vallen buiten de scope: die kunnen scholen zelf koppelen aan bestaande inrichting.
          </p>
        </div>
      </section>

      {/* 4.2.2 AMBITIENIVEAU */}
      <section className="px-6 md:px-10 py-20" style={{ borderTop: '0.5px solid var(--border)' }}>
        <SectionHeading
          eyebrow="4.2.2 Ambitieniveau"
          heading="Hoort & loont."
        />
        <div className="grid gap-6 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Volgens de training kiezen we tussen veranderen omdat het <em>moet</em>, omdat het <em>hoort</em> of omdat het <em>loont</em>. Voor de Challenge Table zijn &ldquo;hoort&rdquo; en &ldquo;loont&rdquo; samen de gekozen positionering.
          </p>
          <div className="grid gap-4">
            <div
              className="rounded-lg px-5 py-4"
              style={{ border: '0.5px solid var(--border)', backgroundColor: 'var(--surface)' }}
            >
              <p
                className="text-[12px] uppercase mb-2"
                style={{ letterSpacing: '0.15em', color: 'var(--accent-mint)' }}
              >
                Hoort
              </p>
              <p className="text-[16px]" style={paragraphStyle}>
                Scholen hebben volgens het Voedingscentrum invloed op het eetgedrag van leerlingen en een voorbeeldfunctie in het creëren van een gezonde schoolomgeving{' '}
                <Cite id="bron-voedingscentrum-2024a">(Voedingscentrum, 2024a)</Cite>. Het RIVM stelt via de Gezonde School-aanpak dat een gezonde leefstijl voor leerlingen vanzelfsprekend zou moeten zijn{' '}
                <Cite id="bron-rivm-gezond-onderwijs">(RIVM, 2024)</Cite>. Een product dat het pauzemoment aantrekkelijker maakt, past bij die verantwoordelijkheid.
              </p>
            </div>
            <div
              className="rounded-lg px-5 py-4"
              style={{ border: '0.5px solid var(--border)', backgroundColor: 'var(--surface)' }}
            >
              <p
                className="text-[12px] uppercase mb-2"
                style={{ letterSpacing: '0.15em', color: 'var(--accent-amber)' }}
              >
                Loont
              </p>
              <p className="text-[16px]" style={paragraphStyle}>
                Een tafel die leerlingen op school houdt en sociale interactie versterkt, levert direct waarde voor scholen en leerlingen. Een product moet ook winstgevend zijn zodat het verder verspreid kan worden, het bedrijf kan groeien en de opbrengsten kunnen worden teruggeïnvesteerd.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4.2.3 SUPPLY CHAIN */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="4.2.3 Stap 1 — Supply chain"
          heading="Kernproblemen per ketenfase."
        />
        <div className="grid gap-6 max-w-[820px]">
          <div>
            <h3
              className="text-[14px] uppercase mb-3"
              style={{ letterSpacing: '0.1em', color: 'var(--text-primary)', fontWeight: 500 }}
            >
              Gebruik op school (probleemdruk: hoog — sociaal)
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Hier ontstaat de bedoelde meervoudige waarde. Leerlingen blijven op school, doen samen iets, en de verleiding om naar de winkel te gaan voor snacks neemt af. Het Voedingscentrum onderbouwt dat de schoolomgeving eetgedrag stuurt{' '}
              <Cite id="bron-voedingscentrum-2024a">(Voedingscentrum, 2024a)</Cite>; de WHO toont dat peers in de adolescentie een sterke invloed hebben op gewoonten{' '}
              <Cite id="bron-who-adolescent">(WHO, z.d.-a)</Cite>. Eigen interviews bevestigen dat leerlingen pauze vooral &ldquo;samen&rdquo; willen invullen. Deze fase is niet een ecologisch probleem, maar de plek waar de innovatie ecologische én sociale schade in andere ketens kan voorkómen.
            </p>
          </div>
          <div>
            <h3
              className="text-[14px] uppercase mb-3"
              style={{ letterSpacing: '0.1em', color: 'var(--text-primary)', fontWeight: 500 }}
            >
              Afval en einde levensduur (probleemdruk: hoog — ecologisch)
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Twee problemen tegelijk. Ten eerste e-waste: de Global E-waste Monitor 2024 meldt dat e-waste vijf keer sneller groeit dan de gedocumenteerde recyclingcapaciteit{' '}
              <Cite id="bron-ewaste-2024">(UNITAR &amp; ITU, 2024)</Cite>. Ook een klein elektronicadeel telt zwaar mee in de afvalbalans. Ten tweede de samengestelde materialen — HPL-laminaat, lijmverbindingen, foamkubus — die hoogwaardige recycling bemoeilijken. Staal is wel eenvoudig te scheiden, maar laminaat en elektronica niet.
            </p>
          </div>
        </div>
      </section>

      {/* 4.2.4 RELEVANTIE & SIGNIFICANTIE */}
      <section className="px-6 md:px-10 py-20" style={{ borderTop: '0.5px solid var(--border)' }}>
        <SectionHeading
          eyebrow="4.2.4 Stap 2 — Relevantie & significantie"
          heading="Welke onderwerpen zijn relevant en significant?"
        />
        <div className="grid gap-10 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Relevantie volgt direct uit de supply chain: een onderwerp is relevant als het verbonden is met een ketenfase waarin de Challenge Table impact heeft of veroorzaakt. Significantie gaat over de mate van impact op meervoudige waardecreatie — sociaal, ecologisch én financieel.
          </p>

          {/* Sociaal */}
          <div>
            <h3
              className="text-[13px] uppercase mb-4"
              style={{ letterSpacing: '0.12em', color: 'var(--accent-mint)', fontWeight: 500 }}
            >
              Sociaal — drie kernthema&apos;s
            </h3>
            <ol className="grid gap-5 list-decimal" style={{ paddingLeft: '1.5rem' }}>
              <li className="text-[16px] md:text-[17px]" style={paragraphStyle}>
                <strong style={{ color: 'var(--text-primary)' }}>Sociale interactie en aantrekkelijk pauzegedrag.</strong>{' '}
                De OESO laat in PISA-data zien dat leerlingen zich minder eenzaam voelen en makkelijker vrienden maken in scholen waar het gevoel van verbondenheid hoger ligt{' '}
                <Cite id="bron-oecd-2025">(OECD, z.d.)</Cite>. Eigen interviews bevestigen dat leerlingen pauze vooral &ldquo;samen&rdquo; willen. Dit maakt het inspelen op dit onderdeel extra significant — zonder sociale aantrekkingskracht heeft het concept geen bestaansrecht.
              </li>
              <li className="text-[16px] md:text-[17px]" style={paragraphStyle}>
                <strong style={{ color: 'var(--text-primary)' }}>Invloed op snack- en pauzeroutine.</strong>{' '}
                Het Voedingscentrum vermeldt dat scholen invloed hebben op eetgedrag{' '}
                <Cite id="bron-voedingscentrum-2024a">(Voedingscentrum, 2024a)</Cite>. Onze interviews tonen dat snackgedrag groepsgedrag is: &ldquo;samen iets halen&rdquo; is gezelliger dan in je eentje, wat aansluit bij WHO-data over peer-invloed in de adolescentie{' '}
                <Cite id="bron-who-adolescent">(WHO, z.d.-a)</Cite>. De tafel verschuift een sociale routine, geen geïsoleerd voedingsgedrag.
              </li>
              <li className="text-[16px] md:text-[17px]" style={paragraphStyle}>
                <strong style={{ color: 'var(--text-primary)' }}>Veiligheid en schoolklimaat.</strong>{' '}
                Een veilige schoolomgeving hangt volgens de OESO samen met betrokkenheid en welzijn{' '}
                <Cite id="bron-oecd-pisa-2019">(OECD, 2019)</Cite>. Een product dat onveiligheid, conflict of toezichtslast veroorzaakt, wordt niet structureel ingezet. Geen veiligheid, geen adoptie.
              </li>
            </ol>
          </div>

          {/* Ecologisch */}
          <div>
            <h3
              className="text-[13px] uppercase mb-4"
              style={{ letterSpacing: '0.12em', color: 'var(--accent-mint)', fontWeight: 500 }}
            >
              Ecologisch — drie kernthema&apos;s
            </h3>
            <ol className="grid gap-5 list-decimal" style={{ paddingLeft: '1.5rem' }}>
              <li className="text-[16px] md:text-[17px]" style={paragraphStyle}>
                <strong style={{ color: 'var(--text-primary)' }}>Materiaalkeuze en levensduur.</strong>{' '}
                Volgens Ellen MacArthur start circulariteit bij ontwerp: voorkom afval, houd materialen op hoge waarde in omloop{' '}
                <Cite id="bron-ellen-macarthur-detail">(Ellen MacArthur Foundation, z.d.-a)</Cite>. Er is gekozen voor staal vanwege robuustheid en oneindige recyclebaarheid{' '}
                <Cite id="bron-worldsteel-2022b">(World Steel Association, 2022b)</Cite>, gecertificeerd hout voor het tafelblad, en bewust beperkte elektronica (scherm + vier knoppen) om de e-waste-impact klein te houden.
              </li>
              <li className="text-[16px] md:text-[17px]" style={paragraphStyle}>
                <strong style={{ color: 'var(--text-primary)' }}>Elektronica en e-waste.</strong>{' '}
                UNITAR/ITU meldt dat de wereldwijde e-waste-stroom snel groeit en recycling achterblijft{' '}
                <Cite id="bron-ewaste-2024">(UNITAR &amp; ITU, 2024)</Cite>. De tafel bevat beperkte elektronica, maar het probleem zit in de combinatie: kwetsbaar onderdeel met hoge milieu-impact en risicovolle keten. Dit vraagt om modulair ontwerp en vervangbare onderdelen.
              </li>
              <li className="text-[16px] md:text-[17px]" style={paragraphStyle}>
                <strong style={{ color: 'var(--text-primary)' }}>Verpakking en transport.</strong>{' '}
                De Europese Verpakkingsverordening stuurt op minder materiaal en betere recyclebaarheid{' '}
                <Cite id="bron-ec-packaging">(Europese Commissie, 2024)</Cite>; KIDV waarschuwt aanvullend voor moeilijk scheidbare laminaten{' '}
                <Cite id="bron-kidv-2024">(KIDV, 2024)</Cite>. Voor een groot product is volume-efficiëntie belangrijker dan voor een klein product. Significantie: middel — relevant maar niet doorslaggevend.
              </li>
            </ol>
          </div>

          {/* Financieel */}
          <div>
            <h3
              className="text-[13px] uppercase mb-4"
              style={{ letterSpacing: '0.12em', color: 'var(--accent-mint)', fontWeight: 500 }}
            >
              Financieel — drie kernthema&apos;s
            </h3>
            <ol className="grid gap-5 list-decimal" style={{ paddingLeft: '1.5rem' }}>
              <li className="text-[16px] md:text-[17px]" style={paragraphStyle}>
                <strong style={{ color: 'var(--text-primary)' }}>Onderhoud, vervangbaarheid en service.</strong>{' '}
                Een schoolproduct dat bij elk defect volledig vervangen moet worden, is financieel onhoudbaar. Modulaire opbouw houdt onderdelen uitwisselbaar en koppelt direct aan circulair ontwerp{' '}
                <Cite id="bron-ellen-macarthur-detail">(Ellen MacArthur Foundation, z.d.-a)</Cite>.
              </li>
              <li className="text-[16px] md:text-[17px]" style={paragraphStyle}>
                <strong style={{ color: 'var(--text-primary)' }}>Totale levensduurkosten (LCC/TCO).</strong>{' '}
                De Europese Commissie definieert life-cycle costing als alle kosten over gebruik, onderhoud en afvoer samen{' '}
                <Cite id="bron-ec-lcc">(Europese Commissie, z.d.-a)</Cite>. Een goedkopere tafel die snel kapotgaat, kan duurder uitpakken dan een duurdere tafel die tien jaar meegaat.
              </li>
              <li className="text-[16px] md:text-[17px]" style={paragraphStyle}>
                <strong style={{ color: 'var(--text-primary)' }}>Schaalbaarheid en inkoopgeschiktheid.</strong>{' '}
                De Europese Commissie koppelt groene publieke inkoop aan levenscyclusimpact{' '}
                <Cite id="bron-ec-gpp">(Europese Commissie, z.d.-b)</Cite>. Voor opschaling naar meerdere scholen moeten specs, kostprijs en service voorspelbaar zijn. Significantie: middel — pas relevant na een werkende pilot.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* 4.2.5 STAKEHOLDERMAP */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="4.2.5 Stap 3 — Key partners"
          heading="Stakeholdermap: invloed × belang."
        />
        <div className="grid gap-8 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Key partners zijn partijen die invloed hebben op het slagen van de Challenge Table én op het gedrag rond het pauzemoment. We brengen ze in kaart op invloed (kan de partij het succes maken of breken?) en belang (heeft de partij een eigen reden om mee te doen?).
          </p>

          <figure>
            <div
              className="rounded-lg overflow-hidden"
              style={{ border: '0.5px solid var(--border)' }}
            >
              <Image
                src="/Opdracht4_stakeholdermap.png"
                alt="Stakeholdermap Challenge Table — invloed × belang"
                width={1000}
                height={700}
                className="w-full h-auto"
                style={{ display: 'block' }}
              />
            </div>
            <figcaption
              className="mt-3 text-[13px]"
              style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}
            >
              Figuur 1 — Stakeholdermap (invloed × belang). Scholieren en schoolleiding staan rechtsboven als sleutelpartners; logistieke partners, ouders, cateraar en afvalverwerker horen vooral geïnformeerd of gemonitord te worden.
            </figcaption>
          </figure>

          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            In het kwadrant <em>Sleutelpartners</em> (rechtsboven) staan scholieren en schoolleiding: zonder hun draagvlak komt er geen pilot. Vlak daaronder zitten docenten/toezichthouders en de producent — onmisbaar voor uitvoering, maar niet de eerste beslissers. Logistieke partners, ouders, cateraar en afvalverwerker zijn relevant in latere fases.
          </p>
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Wat in stap 1 een ecologisch probleem leek (e-waste) krijgt hier een sociaal-organisatorische tegenhanger: zonder de onderhoudspartner is een modulair ontwerp niets waard, want defecte onderdelen worden dan alsnog niet vervangen. Stap 3 koppelt dus direct terug naar stap 2.
          </p>
        </div>
      </section>

      {/* 4.2.6 PRIORITERINGSTABEL */}
      <section className="px-6 md:px-10 py-20" style={{ borderTop: '0.5px solid var(--border)' }}>
        <SectionHeading
          eyebrow="4.2.6 Stap 4 — Prioritering"
          heading="Onderwerpenoverzicht en prioritering."
        />
        <div className="grid gap-8 max-w-[1100px]">
          <p className="text-[17px] md:text-[18px] max-w-[820px]" style={paragraphStyle}>
            De tabel hieronder bundelt alle negen onderwerpen uit stap 2. De prioritering volgt het ambitieniveau &ldquo;hoort + loont&rdquo;: onderwerpen die direct waarde creëren of randvoorwaardelijk zijn voor adoptie krijgen voorrang; onderwerpen die pas bij opschaling spelen krijgen middel.
          </p>

          <div className="overflow-x-auto rounded-lg" style={{ border: '0.5px solid var(--border)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--canvas-elevated)' }}>
                  <th style={thStyle}>Categorie</th>
                  <th style={thStyle}>Onderwerp</th>
                  <th style={{ ...thStyle, minWidth: '260px' }}>Toelichting</th>
                  <th style={thStyle}>Key partners</th>
                  <th style={{ ...thStyle, textAlign: 'center' as const }}>Prioriteit</th>
                </tr>
              </thead>
              <tbody>
                {tabelRijen.map((rij, i) => (
                  <tr
                    key={i}
                    style={{
                      backgroundColor: i % 2 === 1 ? 'var(--canvas-elevated)' : 'transparent',
                    }}
                  >
                    <td style={tdStyle}>
                      <span style={catBadge(rij.categorie)}>{rij.categorie}</span>
                    </td>
                    <td
                      style={{
                        ...tdStyle,
                        color: 'var(--text-primary)',
                        fontWeight: 500,
                        minWidth: '180px',
                      }}
                    >
                      {rij.onderwerp}
                    </td>
                    <td style={{ ...tdStyle, minWidth: '260px' }}>{rij.toelichting}</td>
                    <td style={{ ...tdStyle, minWidth: '160px' }}>{rij.partners}</td>
                    <td style={{ ...tdStyle, textAlign: 'center' as const }}>
                      <span style={priorityBadge(rij.prioriteit)}>{rij.prioriteit}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p
            className="text-[13px]"
            style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}
          >
            Tabel 1 — Onderwerpenoverzicht en prioritering.
          </p>

          <p className="text-[17px] md:text-[18px] max-w-[820px]" style={paragraphStyle}>
            Wat opvalt: de hoogste prioriteit ligt niet eenzijdig op sociaal (zoals in de eerste iteratie), maar verdeeld over alle drie de pijlers. Dat past bij meervoudige waardecreatie — sociaal succes zonder onderhoudbaar product is geen succes, en ecologische winst zonder zakelijke haalbaarheid wordt niet ingevoerd.
          </p>
        </div>
      </section>

      {/* 4.2.7 IMPACTMATRIX */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="4.2.7 Stap 5 — Impactmatrix"
          heading="Visualisatie: business impact × duurzaamheidsimpact."
        />
        <div className="grid gap-8 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            De matrix plaatst alle onderwerpen op twee assen: business impact (hoe sterk werkt het door op adoptie, gebruik en kosten?) en duurzaamheidsimpact (hoe sterk draagt het bij aan sociale, ecologische of financiële waarde op langere termijn?). De scores zijn een beredeneerde inschatting op basis van de bronnen en de eerdere stappen, niet absolute meetwaarden.
          </p>

          <figure>
            <div
              className="rounded-lg overflow-hidden"
              style={{ border: '0.5px solid var(--border)' }}
            >
              <Image
                src="/Opdracht4_impactmatrix.png"
                alt="Impactmatrix Challenge Table — business impact × duurzaamheidsimpact"
                width={1000}
                height={680}
                className="w-full h-auto"
                style={{ display: 'block' }}
              />
            </div>
            <figcaption
              className="mt-3 text-[13px]"
              style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}
            >
              Figuur 2 — Impactmatrix met kleurcodering per pijler (blauw = sociaal, groen = ecologisch, oranje = financieel).
            </figcaption>
          </figure>

          <div className="grid gap-4">
            <h3
              className="text-[13px] uppercase"
              style={{ letterSpacing: '0.12em', color: 'var(--text-muted)', fontWeight: 500 }}
            >
              Toelichting per onderwerp
            </h3>
            <ul className="grid gap-3 list-none p-0 m-0">
              {[
                {
                  nr: '1',
                  label: 'Sociale interactie & pauzegedrag',
                  scores: '10/9',
                  toelichting: (
                    <>
                      Hoogste business impact: zonder sociaal effect geen product. Duurzaamheidsimpact zeer hoog: verbondenheid op school hangt samen met welzijn{' '}
                      <Cite id="bron-oecd-2025">(OECD, z.d.)</Cite>. Topprioriteit, rechtsboven.
                    </>
                  ),
                },
                {
                  nr: '3',
                  label: 'Onderhoud & vervangbaarheid',
                  scores: '9/9',
                  toelichting: (
                    <>
                      Beide assen maximaal: zonder onderhoudslogica stopt het gebruik én verdampt de circulaire winst van een lange levensduur{' '}
                      <Cite id="bron-ellen-macarthur-detail">(Ellen MacArthur Foundation, z.d.-a)</Cite>.
                    </>
                  ),
                },
                {
                  nr: '2',
                  label: 'Veiligheid & schoolklimaat',
                  scores: '9/8',
                  toelichting: 'Hoge business impact (toelating); hoge duurzaamheidsimpact.',
                },
                {
                  nr: '4',
                  label: 'Materiaalkeuze & levensduur',
                  scores: '8/9',
                  toelichting: 'Duurzaamheidsimpact iets hoger dan business: bepaalt de circulaire claim van het product.',
                },
                {
                  nr: '5',
                  label: 'Invloed op snack-/pauzeroutine',
                  scores: '8/8',
                  toelichting: (
                    <>
                      Direct gekoppeld aan het maatschappelijke doel; iets onder &ldquo;sociale interactie&rdquo; omdat de tafel ook werkt zonder volledige gedragsverschuiving.
                    </>
                  ),
                },
                {
                  nr: '6',
                  label: 'Totale levensduurkosten LCC/TCO',
                  scores: '8/7,5',
                  toelichting: (
                    <>
                      Doorslaggevend voor schoolinkoop{' '}
                      <Cite id="bron-ec-lcc">(Europese Commissie, z.d.-a)</Cite>, minder direct verbonden met sociale waarde.
                    </>
                  ),
                },
                {
                  nr: '7',
                  label: 'Elektronica & e-waste',
                  scores: '7/9',
                  toelichting: (
                    <>
                      Klein in volume, groot in milieu-impact{' '}
                      <Cite id="bron-ewaste-2024">(UNITAR &amp; ITU, 2024)</Cite>. Hoog op duurzaamheid, middel op business.
                    </>
                  ),
                },
                {
                  nr: '8',
                  label: 'Schaalbaarheid & inkoop',
                  scores: '7/7',
                  toelichting: (
                    <>
                      Pas relevant na een werkende pilot; groene publieke inkoop biedt opschaalroute{' '}
                      <Cite id="bron-ec-gpp">(Europese Commissie, z.d.-b)</Cite>. Centraal in de matrix.
                    </>
                  ),
                },
                {
                  nr: '9',
                  label: 'Verpakking & transport',
                  scores: '5/6',
                  toelichting: (
                    <>
                      Optimalisatiepunt, niet hoofdthema{' '}
                      <Cite id="bron-kidv-2023">(KIDV, 2023)</Cite>. Midden-links in de matrix.
                    </>
                  ),
                },
              ].map((item) => (
                <li
                  key={item.nr}
                  className="text-[15px] md:text-[16px]"
                  style={{
                    ...paragraphStyle,
                    borderLeft: '2px solid var(--border-strong)',
                    paddingLeft: '16px',
                  }}
                >
                  <strong style={{ color: 'var(--text-primary)' }}>
                    {item.nr}. {item.label}
                  </strong>{' '}
                  <span
                    className="text-[12px]"
                    style={{
                      color: 'var(--accent-mint)',
                      fontWeight: 500,
                      marginRight: '6px',
                    }}
                  >
                    ({item.scores})
                  </span>
                  — {item.toelichting}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4.2.8 CONCLUSIE */}
      <section className="px-6 md:px-10 py-20" style={{ borderTop: '0.5px solid var(--border)' }}>
        <SectionHeading
          eyebrow="4.2.8 Conclusie"
          heading="Verbinding met het ambitieniveau."
        />
        <div className="grid gap-6 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            De zwaartepunten van de Challenge Table liggen in de kruising van sociaal gebruik, schooltoelaatbaarheid en technische levensduur. De drie zwaarste onderwerpen — sociale interactie, onderhoud/vervangbaarheid, veiligheid — vangen samen het bestaansrecht én de duurzaamheid van het concept. Materiaalkeuze, e-waste en TCO volgen direct daarna; verpakking, transport en schaalbaarheid zijn relevant maar niet doorslaggevend in deze fase.
          </p>
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Dat past bij het ambitieniveau &ldquo;hoort + loont&rdquo;. We kiezen niet voor minimale naleving (<em>moet</em>), want we voegen actief sociale waarde toe waar de wet niets verplicht. We kiezen ook niet voor sectorleiderschap, omdat we niet pretenderen circulariteit op het hoogste niveau te realiseren — staal en hout zijn sterke keuzes, maar de elektronica blijft een open kwetsbaarheid.
          </p>
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Wat we wél doen: een product ontwerpen dat lang meegaat, repareerbaar is, en de schoolverantwoordelijkheid voor een gezonde leefomgeving concreet ondersteunt. De volgende stap is een prototype testen op de drie topprioriteiten: werkt de tafel sociaal voor leerlingen, accepteert de schoolleiding hem qua veiligheid en kosten, en is het onderhoud uitvoerbaar? Pas als die drie kloppen, heeft optimalisatie van verpakking, transport en bredere uitrol zin.
          </p>
        </div>
      </section>

      {/* BRONNENLIJST */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
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
