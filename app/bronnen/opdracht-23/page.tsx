import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import PageHead from '@/components/rubric/PageHead'
import SectionHeading from '@/components/rubric/SectionHeading'

export const metadata = {
  title: 'Opdracht 23 — Brandkey · Challenge Cube',
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
  id: string
  children: React.ReactNode
}) {
  return (
    <a href={`#${id}`} style={citeStyle}>
      {children}
    </a>
  )
}

type Bron = {
  id: string
  content: React.ReactNode
}

type BrandKeyItem = {
  nummer: number
  label: string
  body: React.ReactNode
}

type BrandKey = {
  id: string
  naam: string
  subtitle: string
  items: BrandKeyItem[]
}

const paragraphStyle: React.CSSProperties = {
  lineHeight: 1.75,
  color: 'var(--text-secondary)',
}

const brandKeys: BrandKey[] = [
  {
    id: 'picoo',
    naam: 'Picoo',
    subtitle: 'Concurrent 1',
    items: [
      {
        nummer: 1,
        label: 'Historische kracht',
        body: (
          <>
            Picoo bestaat sinds circa 2010 en is ontwikkeld als sensor-gebaseerd speelplatform voor het onderwijs, met focus op binnensport en beweegstimulatie zonder traditionele attributen zoals ballen. Het begon als innovatie voor basisscholen om motoriek en samenwerking te bevorderen, en groeide uit tot een standaard in Nederlandse gymlessen en pauzes{' '}
            <Cite id="bron-picoo-2026">(Picoo, 2026)</Cite>.
          </>
        ),
      },
      {
        nummer: 2,
        label: 'Concurrentieomgeving',
        body: (
          <>
            Picoo concurreert met muursystemen zoals Interactive X-Wall en traditionele sporttoestellen (tafeltennis, voetbaltafels), maar domineert in de niche van digitale projectie-spellen die geen extra ruimte eisen. Zwakte: afhankelijk van gymdocenten, minder geschikt voor informele pauzes{' '}
            <Cite id="bron-derolfgroep">(Derolfgroep, z.d.)</Cite>.
          </>
        ),
      },
      {
        nummer: 3,
        label: 'Doelgroep',
        body: (
          <>
            Primair basisonderwijs en onderbouw VO (6–14 jaar), gymdocenten en schoolleiders die aan Richtlijn Bewegen (minimaal 60 min beweging/dag) moeten voldoen. Secundair: ouders en zorginstellingen voor actieve recreatie{' '}
            <Cite id="bron-picoo-nd">(Picoo, z.d.)</Cite>.
          </>
        ),
      },
      {
        nummer: 4,
        label: 'Inzicht',
        body: (
          <>
            Kinderen en jongeren hunkeren naar snelle, fysieke groepsvreugde in beperkte ruimtes, maar traditionele sport faalt door rommel, blessures en ongelijke deelname. Een digitaal muursysteem lost dit op met veilige, inclusieve beweging{' '}
            <Cite id="bron-picoo-2026">(Picoo, 2026)</Cite>.
          </>
        ),
      },
      {
        nummer: 5,
        label: 'Voordelen',
        body: (
          <>
            Onmiddellijke calorieverbranding via multi-spellen (voetbal, dans), versterkt teamgevoel en motoriekontwikkeling, eenvoudig op te zetten zonder onderhoud{' '}
            <Cite id="bron-heutink">(Heutink, z.d.)</Cite>.
          </>
        ),
      },
      {
        nummer: 6,
        label: 'Waarden & persoonlijkheid',
        body: (
          <>
            Energiek, inclusief en uitdagend: als een enthousiaste gymleraar die iedereen meekrijgt, met een speelse, actieve vibe die beweging verslavend maakt{' '}
            <Cite id="bron-picoo-2026">(Picoo, 2026)</Cite>.
          </>
        ),
      },
      {
        nummer: 7,
        label: 'Geloofwaardigheid',
        body: (
          <>
            Bewijs via 1000+ geïnstalleerde systemen in NL-scholen, positieve evaluaties op motorische vooruitgang (bijv. via Mulier Instituut) en integratie in lesmethodes{' '}
            <Cite id="bron-primaonderwijs-2024">(Primaonderwijs, 2024)</Cite>.
          </>
        ),
      },
      {
        nummer: 8,
        label: 'Onderscheidende kracht',
        body: (
          <>
            Sensor-projectie op muren voor veilige multiplayer zonder fysieke objecten, schaalbaar van 2 tot 20 spelers — uniek in non-contact beweegsport{' '}
            <Cite id="bron-heutink">(Heutink, z.d.)</Cite>{' '}
            <Cite id="bron-picoo-2026">(Picoo, 2026)</Cite>.
          </>
        ),
      },
      {
        nummer: 9,
        label: 'Merkessentie',
        body: (
          <>
            Bewegend groepsplezier zonder grenzen{' '}
            <Cite id="bron-picoo-2026">(Picoo, 2026)</Cite>.
          </>
        ),
      },
    ],
  },
  {
    id: 'belevenistafel',
    naam: 'BelevenisTafel',
    subtitle: 'Concurrent 2',
    items: [
      {
        nummer: 1,
        label: 'Historische kracht',
        body: (
          <>
            De BelevenisTafel ontstond in de jaren 2010 als touchscreen-platform voor zorg en onderwijs, geïnspireerd op serious gaming om sociale isolatie te doorbreken. Het groeide van seniorenzorg naar breed educatief gebruik met zelf te bouwen apps{' '}
            <Cite id="bron-belevenistafel-nd">(BelevenisTafel, z.d.)</Cite>{' '}
            <Cite id="bron-visio-2024">(Visio, 2024)</Cite>.
          </>
        ),
      },
      {
        nummer: 2,
        label: 'Concurrentieomgeving',
        body: (
          <>
            Rivalen zoals Tovertafel en TouchTable bieden vergelijkbare multi-touch games, maar BelevenisTafel blinkt uit in gebruiksvriendelijkheid en zorg-educatie-overlap. Zwakte: schermafhankelijk, minder focus op fysieke beweging.
          </>
        ),
      },
      {
        nummer: 3,
        label: 'Doelgroep',
        body: (
          <>
            Brede range: kinderen met beperkingen, senioren in zorg, basisscholen/VO voor groepsleren; beslissers zijn zorgcoördinatoren, IB'ers en schoolleiders{' '}
            <Cite id="bron-belevenistafel-nd">(BelevenisTafel, z.d.)</Cite>.
          </>
        ),
      },
      {
        nummer: 4,
        label: 'Inzicht',
        body: (
          <>
            Mensen (van jong tot oud) verbinden beter via gedeelde, intuïtieve touch-ervaringen die verhalen en ontdekking stimuleren, zonder taalbarrières of hoge drempels{' '}
            <Cite id="bron-belevenistafel-2025">(BelevenisTafel, 2025)</Cite>.
          </>
        ),
      },
      {
        nummer: 5,
        label: 'Voordelen',
        body: (
          <>
            Honderden aanpasbare games voor cognitie, motoriek en sociaal-emotioneel welzijn; eenvoudig te bedienen, meetbare impact op interactie via observaties{' '}
            <Cite id="bron-belevenistafel-nd">(BelevenisTafel, z.d.)</Cite>.
          </>
        ),
      },
      {
        nummer: 6,
        label: 'Waarden & persoonlijkheid',
        body: (
          <>
            Verbindend, warm en ervaringsgericht; als een wijze grootouder die verhalen deelt aan tafel, met een uitnodigende, niet-oordelende sfeer{' '}
            <Cite id="bron-linkedin-belevenistafel">(LinkedIn BelevenisTafel, 2026)</Cite>.
          </>
        ),
      },
      {
        nummer: 7,
        label: 'Geloofwaardigheid',
        body: (
          <>
            Jarenlange toepassing in 100+ instellingen, gevalideerd door zorgonderzoeken (bijv. Visio-rapport) en optie voor eigen content-creatie{' '}
            <Cite id="bron-belevenistafel-2025">(BelevenisTafel, 2025)</Cite>{' '}
            <Cite id="bron-linkedin-belevenistafel">(LinkedIn BelevenisTafel, 2026)</Cite>.
          </>
        ),
      },
      {
        nummer: 8,
        label: 'Onderscheidende kracht',
        body: (
          <>
            Multi-touch tafel met community-apps voor gepersonaliseerde beleving, ideaal voor diverse groepen zonder fysieke inspanning{' '}
            <Cite id="bron-belevenistafel-2025">(BelevenisTafel, 2025)</Cite>.
          </>
        ),
      },
      {
        nummer: 9,
        label: 'Merkessentie',
        body: (
          <>
            Samen ontdekken en verbinden via touch{' '}
            <Cite id="bron-belevenistafel-nd">(BelevenisTafel, z.d.)</Cite>.
          </>
        ),
      },
    ],
  },
  {
    id: 'challenge-table',
    naam: 'Challenge Table',
    subtitle: 'Eigen merk',
    items: [
      {
        nummer: 1,
        label: 'Historische kracht',
        body: 'Voortgekomen uit groepsresearch (sprint 1) naar pauzegedrag bij VO-scholieren, als iteratie op de Challenge Cube; geworteld in duurzaamheidsopdrachten en observaties bij Spar/AH (73% groepsaankopen).',
      },
      {
        nummer: 2,
        label: 'Concurrentieomgeving',
        body: 'Directe rivalen: Picoo (beweegsport), BelevenisTafel (touch-games) bieden interactie maar missen snack-alternatieve focus en non-digitale toegankelijkheid; indirect: dobbelstenen, snackautomaten, tafeltennis.',
      },
      {
        nummer: 3,
        label: 'Doelgroep',
        body: 'VO-scholieren (12–18 jr) voor informele pauzes, schoolleiders/mentoren voor Gezonde School-integratie; pijnpunt: groepsdruk en routine.',
      },
      {
        nummer: 4,
        label: 'Inzicht',
        body: 'Pauzes draaien om gezelligheid en status, niet honger. Ongezonde snacks winnen door impuls/groepsnorm, maar een vaste tafel met challenges breekt dit ritueel met gelijkwaardige fun.',
      },
      {
        nummer: 5,
        label: 'Voordelen',
        body: 'Instant sociale binding zonder consumptie, betere energie/concentratie post-pauze, modulair onderhoud voor lage TCO en minder afval versus snacks.',
      },
      {
        nummer: 6,
        label: 'Waarden & persoonlijkheid',
        body: 'Inclusief, speels en verbindend. Als een vriendengroep aan tafel, met een enthousiaste, non-moraliserende energie die iedereen betrekt.',
      },
      {
        nummer: 7,
        label: 'Geloofwaardigheid',
        body: 'Gebaseerd op eigen observaties/interviews, ambitieniveau "hoort/loont", aansluiting bij GGD/Vignet Gezonde School en B-Corp principes (zoals Pley/Mepal).',
      },
      {
        nummer: 8,
        label: 'Onderscheidende kracht',
        body: 'Fysieke cube/knoppen voor screenvrije groepschallenges, specifiek gepositioneerd als snack-routinebreker in vaste schoolplek.',
      },
      {
        nummer: 9,
        label: 'Merkessentie',
        body: 'Gezellig, gezond op school.',
      },
    ],
  },
]

const bronnen: Bron[] = [
  {
    id: 'bron-picoo-2026',
    content: (
      <>
        Picoo. (2026). <em>Picoo: interactief bewegingssysteem voor onderwijs</em>. Geraadpleegd op 8 mei 2026, van{' '}
        <a
          href="https://www.picoo.nl"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.picoo.nl
        </a>
      </>
    ),
  },
  {
    id: 'bron-picoo-nd',
    content: (
      <>
        Picoo. (z.d.). <em>Over Picoo</em>. Geraadpleegd op 8 mei 2026, van{' '}
        <a
          href="https://www.picoo.nl"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.picoo.nl
        </a>
      </>
    ),
  },
  {
    id: 'bron-derolfgroep',
    content: (
      <>
        Derolfgroep. (z.d.). <em>Picoo bewegingsspel</em>. Geraadpleegd op 8 mei 2026, van{' '}
        <a
          href="https://www.derolfgroep.nl"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.derolfgroep.nl
        </a>
      </>
    ),
  },
  {
    id: 'bron-heutink',
    content: (
      <>
        Heutink. (z.d.). <em>Picoo interactief bewegingssysteem</em>. Geraadpleegd op 8 mei 2026, van{' '}
        <a
          href="https://www.heutink.nl"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.heutink.nl
        </a>
      </>
    ),
  },
  {
    id: 'bron-primaonderwijs-2024',
    content: (
      <>
        Primaonderwijs. (2024). <em>Picoo in de gymles: ervaringen en resultaten</em>. Primaonderwijs.nl. Geraadpleegd op 8 mei 2026, van{' '}
        <a
          href="https://www.primaonderwijs.nl"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.primaonderwijs.nl
        </a>
      </>
    ),
  },
  {
    id: 'bron-belevenistafel-nd',
    content: (
      <>
        BelevenisTafel. (z.d.). <em>BelevenisTafel: samen ontdekken</em>. Geraadpleegd op 8 mei 2026, van{' '}
        <a
          href="https://www.belevenistafel.nl"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.belevenistafel.nl
        </a>
      </>
    ),
  },
  {
    id: 'bron-belevenistafel-2025',
    content: (
      <>
        BelevenisTafel. (2025). <em>Impact en toepassingen van de BelevenisTafel</em>. BelevenisTafel.{' '}
        <a
          href="https://www.belevenistafel.nl"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.belevenistafel.nl
        </a>
      </>
    ),
  },
  {
    id: 'bron-visio-2024',
    content: (
      <>
        Visio. (2024). <em>Evaluatierapport BelevenisTafel bij visueel beperkte cliënten</em>. Koninklijke Visio.{' '}
        <a
          href="https://www.visio.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.visio.org
        </a>
      </>
    ),
  },
  {
    id: 'bron-linkedin-belevenistafel',
    content: (
      <>
        BelevenisTafel. (2026). <em>BelevenisTafel — bedrijfspagina</em>. LinkedIn. Geraadpleegd op 8 mei 2026, van{' '}
        <a
          href="https://www.linkedin.com/company/belevenistafel"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.linkedin.com/company/belevenistafel
        </a>
      </>
    ),
  },
]

export default function Opdracht23Page() {
  return (
    <>
      <PageHead
        number="23"
        label="Portfolio · Opdracht"
        title="Brandkey."
        lead="Brand Key-analyse voor twee concurrenten (Picoo en BelevenisTafel) en de Challenge Table zelf. Per merk worden negen elementen uitgewerkt: van historische kracht tot merkessentie."
        meta={[
          { key: 'Type', value: 'Groepsopdracht' },
          { key: 'Model', value: 'Brand Key (9 elementen)' },
          { key: 'Merken', value: 'Picoo · BelevenisTafel · Challenge Table' },
        ]}
      />

      {brandKeys.map((brand, index) => (
        <section
          key={brand.id}
          className="px-6 md:px-10 py-20"
          style={{
            borderTop: index === 0 ? undefined : '0.5px solid var(--border)',
            backgroundColor: index % 2 === 1 ? 'var(--canvas-elevated)' : undefined,
          }}
        >
          <SectionHeading
            eyebrow={`${brand.subtitle} · Brand Key`}
            heading={`Brand Key ${brand.naam}.`}
          />

          <div className="grid gap-0 max-w-[820px]" style={{ border: '0.5px solid var(--border)' }}>
            {brand.items.map((item, i) => (
              <div
                key={item.nummer}
                className="grid gap-2 px-6 py-6"
                style={{
                  borderBottom:
                    i < brand.items.length - 1 ? '0.5px solid var(--border)' : undefined,
                  backgroundColor:
                    item.nummer === 9
                      ? 'rgba(94,227,211,0.04)'
                      : i % 2 === 0
                      ? 'transparent'
                      : 'rgba(245,245,242,0.02)',
                }}
              >
                <div className="flex items-baseline gap-3">
                  <span
                    className="text-[11px] uppercase shrink-0"
                    style={{
                      letterSpacing: '0.15em',
                      color: 'var(--accent-mint)',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {String(item.nummer).padStart(2, '0')}
                  </span>
                  <h3
                    className="text-[16px] md:text-[17px]"
                    style={{
                      fontFamily: 'var(--font-instrument-serif)',
                      color:
                        item.nummer === 9 ? 'var(--accent-mint)' : 'var(--text-primary)',
                      lineHeight: 1.3,
                    }}
                  >
                    {item.label}
                  </h3>
                </div>
                <p
                  className="text-[15px] md:text-[16px]"
                  style={{
                    ...paragraphStyle,
                    paddingLeft: '2.25rem',
                    lineHeight: 1.7,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Bronnenlijst */}
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
              style={{ lineHeight: 1.7, paddingLeft: '2.5rem', textIndent: '-2.5rem' }}
            >
              {bron.content}
            </li>
          ))}
        </ol>
      </section>

      {/* Terug-navigatie */}
      <section
        className="px-6 md:px-10 py-16"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <Link
          href="/bronnen"
          className="inline-flex items-center gap-2 text-[12px] uppercase hover:opacity-80 transition-opacity"
          style={{ letterSpacing: '0.2em', color: 'var(--accent-mint)' }}
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          Terug naar bronnen
        </Link>
      </section>
    </>
  )
}
