import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import PageHead from '@/components/rubric/PageHead'
import SectionHeading from '@/components/rubric/SectionHeading'

export const metadata = {
  title: 'Opdracht 10 — Prijsstrategie · Challenge Cube',
}

const citeStyle: React.CSSProperties = {
  color: 'var(--accent-mint)',
  textDecoration: 'underline',
  textDecorationThickness: '0.5px',
  textUnderlineOffset: '2px',
}

function Cite({ id, href, children }: { id?: string; href?: string; children: React.ReactNode }) {
  const targetHref = href ?? (id ? `#${id}` : '#')
  return (
    <a href={targetHref} style={citeStyle}>
      {children}
    </a>
  )
}

type Bron = { id: string; content: React.ReactNode }

const paragraphStyle: React.CSSProperties = {
  lineHeight: 1.75,
  color: 'var(--text-secondary)',
}

const tableCaptionStyle: React.CSSProperties = {
  marginTop: '12px',
  fontSize: '12px',
  letterSpacing: '0.1em',
  color: 'var(--text-dim)',
}

const thStyle = (color?: string): React.CSSProperties => ({
  padding: '12px 16px',
  textAlign: 'left',
  fontWeight: 400,
  fontSize: '11px',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  borderBottom: '0.5px solid var(--border-strong)',
  backgroundColor: 'var(--surface)',
  color: color ?? 'var(--text-muted)',
  whiteSpace: 'nowrap',
})

const tdStyle = (overrides?: React.CSSProperties): React.CSSProperties => ({
  padding: '14px 16px',
  color: 'var(--text-secondary)',
  lineHeight: 1.6,
  borderBottom: '0.5px solid var(--border)',
  verticalAlign: 'top',
  ...overrides,
})

// ─── Table 8: Concurrentie/substituten ───────────────────────────────────────

type PrijsRow = {
  concurrent: string
  sociaal: string
  drempel: string
  relevantie: string
  highlight?: boolean
}

const prijsRows: PrijsRow[] = [
  {
    concurrent: 'Supermarkt / snackbar buiten school',
    sociaal: 'Hoog (groepsritueel)',
    drempel: 'Laag (kosten snack)',
    relevantie: 'Primaire gedragscompetitor; prijs moet drempel niet verhogen',
  },
  {
    concurrent: 'Tafeltennis / voetbaltafel op school',
    sociaal: 'Hoog',
    drempel: 'Laag (al aanwezig)',
    relevantie: 'Is al gratis aanwezig; Challenge Table moet zich onderscheiden op variatie en activering',
  },
  {
    concurrent: 'Spelkar / spelpakket',
    sociaal: 'Matig',
    drempel: 'Matig (opstart nodig)',
    relevantie: 'Challenge Table moet gebruiksvriendelijker zijn; prijs vergelijkbaar of lager',
  },
  {
    concurrent: 'Passief gedrag (scrollen, hangen)',
    sociaal: 'Laag',
    drempel: 'Geen (gratis)',
    relevantie: 'Gratis alternatief; activerende waarde is doorslaggevend, niet prijs',
  },
  {
    concurrent: 'Challenge Table',
    sociaal: 'Hoog',
    drempel: 'Laag (direct inzetbaar)',
    relevantie: 'Unieke combinatie; prijs verantwoord via interventiewaarde voor school',
    highlight: true,
  },
]

// ─── Table 9: Segmenten ───────────────────────────────────────────────────────

type SegmentRow = {
  segment: string
  klantgroep: string
  variant: string
}

const segmentRows: SegmentRow[] = [
  {
    segment: 'B2B – School (primair)',
    klantgroep: 'School, schoolbestuur, kantine-exploitant',
    variant: 'Complete Challenge Table (inclusief plaatsing, optioneel servicecontract)',
  },
  {
    segment: 'B2B – Meervoudig',
    klantgroep: 'Scholengemeenschappen, gemeenten, GGD',
    variant: 'Volumekorting bij afname van meerdere tafels; projectprijs',
  },
  {
    segment: 'B2B – Gesubsidieerd',
    klantgroep: 'Gezonde School, Nationaal Preventieakkoord, lokaal gezondheidsbeleid',
    variant: 'Aanvraag via subsidiekanalen; Challenge Table als beleidsinterventie',
  },
  {
    segment: 'B2C – Aanvullend',
    klantgroep: 'Leerlingenraad, individuele leerling',
    variant: 'Losse uitbreidingschallenges of thema-accessoires (indien ontwikkeld)',
  },
]

// ─── Table 10: Businesscase ───────────────────────────────────────────────────

type BusinessRow = {
  post: string
  aanname: string
  bedrag: string
  highlight?: boolean
}

const businessRows: BusinessRow[] = [
  {
    post: 'Kostprijs per tafel (midpunt bandbreedte)',
    aanname: 'Productie, materiaal, afwerking',
    bedrag: '€ 6.500',
    highlight: true,
  },
  {
    post: 'Verkoopprijs standaard (B2B enkelvoudig)',
    aanname: 'Waardebepaling o.b.v. sociale interventiewaarde',
    bedrag: 'Nader te bepalen via prijsonderzoek',
  },
  {
    post: 'Verkoopprijs penetratiefase',
    aanname: 'Introductieprijs om adoptie te stimuleren',
    bedrag: 'Nader te bepalen via prijsonderzoek',
  },
  {
    post: 'Brutowinst per eenheid',
    aanname: 'VP – kostprijs (€ 6.500)',
    bedrag: 'Afhankelijk van vastgestelde VP',
  },
  {
    post: 'Break-even afzet',
    aanname: 'Vaste kosten / brutowinst per eenheid',
    bedrag: 'In te vullen na kostprijsanalyse totale vaste kosten',
  },
]

// ─── Table 11: Scenario's ─────────────────────────────────────────────────────

type ScenarioRow = {
  scenario: string
  omschrijving: string
  excel: string
}

const scenarioRows: ScenarioRow[] = [
  {
    scenario: '1. Standaard B2B-verkoop',
    omschrijving: 'Enkelvoudige verkoop aan school; standaard verkoopprijs',
    excel: 'VP − €6.500 = brutowinst; break-even afzet',
  },
  {
    scenario: '2. Penetratiefase',
    omschrijving: 'Verlaagde introductieprijs; effect op afzet en terugverdientijd',
    excel: 'Vergelijk marge en break-even t.o.v. scenario 1',
  },
  {
    scenario: '3. Volumekorting (B2B meervoudig)',
    omschrijving: 'Lagere prijs per tafel bij afname van 3+ tafels',
    excel: 'Totaalomzet vs. marge per eenheid',
  },
  {
    scenario: '4. Gesubsidieerde verkoop',
    omschrijving: 'School ontvangt subsidie; effect op netto verkoopprijs en adoptie',
    excel: 'Netto-opbrengst na aftrek subsidiedeel',
  },
  {
    scenario: '5. Hybride PaaS',
    omschrijving: 'Lagere aanschafprijs + jaarlijks serviceabonnement',
    excel: 'Lifetime value vs. eenmalige marge',
  },
]

// ─── Bronnen ──────────────────────────────────────────────────────────────────

const bronnen: Bron[] = [
  {
    id: 'bron-albrecht-2023',
    content: (
      <>
        Albrecht, C., Green, D., & Hoffman, V. (2023). <em>Principles of marketing</em> (2e druk). OpenStax.{' '}
        <a
          href="https://openstax.org/books/principles-marketing/pages/1-introduction"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://openstax.org/books/principles-marketing/pages/1-introduction
        </a>
      </>
    ),
  },
  {
    id: 'bron-benedettini-2025',
    content: (
      <>
        Benedettini, O. (2025). Product-as-a-Service business models: Strategic considerations for manufacturing
        firms. <em>Journal of Service Management, 36</em>(1), 14–39.{' '}
        <a
          href="https://doi.org/10.1108/JOSM-01-2024-0025"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://doi.org/10.1108/JOSM-01-2024-0025
        </a>
      </>
    ),
  },
  {
    id: 'bron-gitman-2018',
    content: (
      <>
        Gitman, L. J., McDaniel, C., Shah, A., Reece, M., Koffel, L., Talsma, B., & Hyatt, J. C. (2018).{' '}
        <em>Introduction to business</em>. OpenStax.{' '}
        <a
          href="https://openstax.org/books/introduction-business/pages/1-introduction"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://openstax.org/books/introduction-business/pages/1-introduction
        </a>
      </>
    ),
  },
  {
    id: 'bron-mesch-2025',
    content: (
      <>
        Mesch, J., de Boer, M., Ezendam, N., Renders, C., & Temminghoff, M. (2025).{' '}
        <em>Eetgedrag van jongeren in Nederland: Trends, determinanten en interventies</em> [Rapport]. Rijksinstituut
        voor Volksgezondheid en Milieu (RIVM).{' '}
        <a
          href="https://www.rivm.nl/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.rivm.nl/
        </a>
      </>
    ),
  },
  {
    id: 'bron-wouters-2010',
    content: (
      <>
        Wouters, E. J. M., Larsen, J. K., Kremers, S. P. J., Dagnelie, P. C., & Geenen, R. (2010). Peer influence
        on snacking behavior in adolescence. <em>Appetite, 55</em>(1), 11–17.{' '}
        <a
          href="https://doi.org/10.1016/j.appet.2010.03.002"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://doi.org/10.1016/j.appet.2010.03.002
        </a>
      </>
    ),
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Opdracht10Page() {
  return (
    <>
      <PageHead
        number="10"
        label="Portfolio · Opdracht"
        title="Prijsstrategie."
        lead="Onderbouwing van de waarde-gebaseerde prijsstrategie voor de Challenge Table: concurrentiepositie, penetratiestrategie, segmentdifferentiatie en vijf businesscase-scenario's."
        meta={[
          { key: 'Type', value: 'Groepsopdracht' },
          { key: 'Strategie', value: 'Waarde-gebaseerd + penetratieprijs' },
          { key: 'Segmenten', value: '4 geïdentificeerd' },
        ]}
      />

      {/* 1. CONTEXT */}
      <section className="px-6 md:px-10 py-20">
        <SectionHeading eyebrow="Context" heading="Waarde-gebaseerde prijsstrategie." />

        <div className="grid gap-6 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Op basis van de marktomvang en concurrentieanalyse past voor de Challenge Cube voorlopig het best een
            waarde-gebaseerde prijsstrategie, gecombineerd met een penetratieprijs in de introductiefase. De Challenge
            Cube is namelijk geen standaard snack of regulier spelproduct, maar een product dat inspeelt op het sociale
            pauzemoment van scholieren{' '}
            <Cite id="bron-mesch-2025">(Mesch et al., 2025)</Cite>. De waarde zit daardoor niet alleen in het fysieke
            product, maar vooral in de functie die het vervult{' '}
            <Cite id="bron-albrecht-2023">(Albrecht, Green, & Hoffman, 2023)</Cite>.
          </p>

          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            De Challenge Table biedt waarde doordat het:
          </p>

          <ul
            className="grid gap-3 list-disc"
            style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}
          >
            <li className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
              Een sociaal en activerend alternatief biedt voor het standaard pauzeritueel van samen iets halen buiten
              school;
            </li>
            <li className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
              Inspeelt op de behoefte aan gezelligheid, groepsgedrag en impulsmomenten tijdens de pauze{' '}
              <Cite id="bron-wouters-2010">(Wouters, Larsen, Kremers, Dagnelie, & Geenen, 2010)</Cite>;
            </li>
            <li className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
              Scholen een instrument biedt om ongezond snackgedrag indirect te beïnvloeden, passend binnen het Gezonde
              School-kader en het Nationaal Preventieakkoord{' '}
              <Cite href="#">(Voedingscentrum, z.d.; WHO, 2026)</Cite>;
            </li>
            <li className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
              Een schoolbreed inzetbaar product is dat aansluit bij actueel gezondheidsbeleid, waaronder het
              telefoonverbod op scholen dat de vraag naar pauze-alternatieven vergroot.
            </li>
          </ul>
        </div>
      </section>

      {/* 2. CONCURRENTIEPOSITIE */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="Onderdeel 1 · Concurrentiepositie"
          heading="Concurrentiepositie en prijsstrategische implicaties."
        />

        <div className="grid gap-10 max-w-[1100px]">
          <div className="grid gap-6 max-w-[820px]">
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Uit de concurrentieanalyse blijkt dat de Challenge Table in Nederland weinig exact identieke concurrenten
              kent, maar wel meerdere functionele substituten die hetzelfde pauzemoment invullen. De sterkste
              concurrentiedruk komt van drie richtingen:
            </p>

            <ul
              className="grid gap-3 list-disc"
              style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}
            >
              <li className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
                De supermarkt en snackbar buiten school als primair sociaal pauzemoment – het gedragspatroon dat de
                Challenge Table wil vervangen.
              </li>
              <li className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
                Bestaande speelinfrastructuur op school (tafeltennis, voetbaltafel, spelkar), is in sommige gevallen al
                aanwezig en daarmee gratis voor de gebruiker.
              </li>
              <li className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
                Passief gedrag (hangen, bellen, scrollen) – de standaard zonder enige investering.
              </li>
            </ul>

            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              De Challenge Table bezet een unieke positie: hoge sociale activatiewaarde gecombineerd met een lage
              gebruiksdrempel. Geen van de geïdentificeerde concurrenten combineert deze twee eigenschappen volledig.
              Om dit marktvoordeel zo goed mogelijk te gebruiken moet de tafel eenvoudiger in gebruik zijn dan
              spelkarren, goedkoper en ruimtelijk minder belastend dan tafeltennis, en sociaal zichtbaarder dan
              kaartspellen.
            </p>
          </div>

          {/* Table 8 */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
              <thead>
                <tr>
                  {[
                    { label: 'Concurrent / substituut', color: undefined },
                    { label: 'Sociale activatiewaarde', color: 'var(--accent-mint)' },
                    { label: 'Gebruiksdrempel', color: 'var(--accent-amber)' },
                    { label: 'Relevantie voor prijsstrategie', color: undefined },
                  ].map(({ label, color }) => (
                    <th key={label} style={thStyle(color)}>
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {prijsRows.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      backgroundColor: row.highlight
                        ? 'rgba(94,227,211,0.05)'
                        : i % 2 === 0
                        ? 'transparent'
                        : 'var(--canvas-elevated)',
                    }}
                  >
                    <td
                      style={tdStyle({
                        color: row.highlight ? 'var(--accent-mint)' : 'var(--text-primary)',
                        fontWeight: row.highlight ? 500 : 400,
                        minWidth: '180px',
                      })}
                    >
                      {row.concurrent}
                    </td>
                    <td style={tdStyle({ minWidth: '140px' })}>{row.sociaal}</td>
                    <td style={tdStyle({ minWidth: '140px' })}>{row.drempel}</td>
                    <td style={tdStyle({ minWidth: '220px' })}>{row.relevantie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={tableCaptionStyle}>Tabel 8 — Concurrentie/substituten tabel</p>
          </div>

          <p className="text-[17px] md:text-[18px] max-w-[820px]" style={paragraphStyle}>
            Deze positie rechtvaardigt een waarde-gebaseerde strategie: de prijs mag hoger liggen dan bij een spelkar
            of spelpakket, maar moet voor scholen aanvaardbaar zijn als beleids- en gezondheidsinterventie.
            Concurrentie dient als referentiepunt, niet als hoofdstrategie{' '}
            <Cite id="bron-albrecht-2023">(Albrecht, Green, & Hoffman, 2023)</Cite>.
          </p>
        </div>
      </section>

      {/* 3. STRATEGISCHE AFWEGINGEN */}
      <section
        className="px-6 md:px-10 py-20"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <SectionHeading
          eyebrow="Onderdeel 2 · Strategische afwegingen"
          heading="Waarom niet kostengebaseerd of concurrentiegebaseerd."
        />

        <div className="grid gap-12 max-w-[820px]">
          {/* Kostengebaseerd */}
          <div className="grid gap-4">
            <h3
              className="text-[22px] md:text-[24px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              Waarom niet kostengebaseerd
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Een puur kostengebaseerde strategie – kostprijs plus opslag is verkoopprijs – is voor de Challenge Table
              te beperkt. Bij een kostprijs van €6.000–€7.000 per tafel zou een standaardopslag leiden tot een prijs
              die de maatschappelijke en gedragsmatige waarde van het product onderschat. Nadelen zijn:
            </p>
            <ul
              className="grid gap-3 list-disc"
              style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}
            >
              <li className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
                De prijs wordt te laag vastgesteld als de opslag alleen gebaseerd is op productiekosten, waardoor de
                interventiewaarde niet wordt verdisconteerd{' '}
                <Cite id="bron-albrecht-2023">(Albrecht et al., 2023)</Cite>.
              </li>
              <li className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
                Er wordt geen rekening gehouden met de bereidheid van scholen en besturen om te betalen voor een
                gezondheidsinterventie in het kader van gezondheidsbeleid.
              </li>
              <li className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
                De bredere concurrentiecontext – waaronder het gedragspatroon van snacken buiten school – wordt
                genegeerd.
              </li>
            </ul>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              De kostprijs van €6.000–€7.000 blijft wel de absolute ondergrens van de prijs. Geen enkele verkoopprijs
              mag hieronder liggen zonder aanvullende subsidie of subsidieconstructie die het verschil dekt.
            </p>
          </div>

          {/* Concurrentiegebaseerd */}
          <div className="grid gap-4">
            <h3
              className="text-[22px] md:text-[24px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              Waarom niet puur concurrentiegebaseerd
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              De Challenge Table heeft geen directe concurrent die exact hetzelfde aanbiedt. De indirecte concurrentie
              – bestaande schoolinfrastructuur en gratis gedragsalternatieven – heeft geen aankoopprijs en is daarmee
              geen bruikbare prijsreferentie. Wanneer de prijs uitsluitend op concurrentie wordt gebaseerd, wordt de
              Challenge Table behandeld als speeltoestel of gadget in plaats van als gedragsinterventie. Dit
              onderwaardeert het product structureel. Concurrentieprijzen dienen als plafondcontrole, niet als
              vertrekpunt{' '}
              <Cite id="bron-mesch-2025">(Mesch et al., 2025)</Cite>.
            </p>
          </div>
        </div>
      </section>

      {/* 4. UITVOERING */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="Onderdeel 3 · Uitvoering"
          heading="Uitvoering van de prijsstrategie."
        />

        <div className="grid gap-12 max-w-[1100px]">
          {/* Penetratiestrategie */}
          <div className="grid gap-4 max-w-[820px]">
            <h3
              className="text-[22px] md:text-[24px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              Penetratiestrategie
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              De Challenge Table is onbekend bij de doelgroep en moet nog bewezen worden. Een bewust lage
              introductieprijs verlaagt de drempel voor scholen om te investeren. Dit past omdat:
            </p>
            <ul
              className="grid gap-3 list-disc"
              style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}
            >
              <li className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
                Schoolbesturen doorgaans risicomijdend zijn en liever een product uitproberen tegen een overzichtelijke
                prijs;
              </li>
              <li className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
                De betalingsbereidheid nog niet is vastgesteld – een lage startprijs vermindert het aankooprisico voor
                de school;
              </li>
              <li className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
                Snelle zichtbaarheid op school cruciaal is: één tafel op een centrale locatie genereert
                mond-tot-mondreclame{' '}
                <Cite id="bron-mesch-2025">(Mesch et al., 2025)</Cite>;
              </li>
              <li className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
                Het telefoonverbod en de Gezonde School-context zorgen voor urgentie bij scholen om snel te handelen.
              </li>
            </ul>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Na de introductiefase kan de prijs worden verhoogd zodra het product bewezen waarde heeft geleverd en
              referentiecases beschikbaar zijn. Een penetratieprijs is geen permanente strategie, maar een bewuste
              startpositie.
            </p>
          </div>

          {/* Prijsdifferentiatie */}
          <div className="grid gap-6">
            <div className="grid gap-4 max-w-[820px]">
              <h3
                className="text-[22px] md:text-[24px]"
                style={{
                  fontFamily: 'var(--font-instrument-serif)',
                  color: 'var(--text-primary)',
                  lineHeight: 1.3,
                }}
              >
                Prijsdifferentiatie naar segment
              </h3>
              <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
                Niet elke klantgroep heeft dezelfde aankoopkracht of hetzelfde belang. Vier segmenten zijn relevant{' '}
                <Cite id="bron-albrecht-2023">(Albrecht, Green, & Hoffman, 2023)</Cite>:
              </p>
            </div>

            {/* Table 9 */}
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
                <thead>
                  <tr>
                    {['Segment', 'Klantgroep', 'Productvariant'].map((col) => (
                      <th key={col} style={thStyle()}>
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {segmentRows.map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        backgroundColor: i % 2 === 0 ? 'transparent' : 'var(--canvas-elevated)',
                      }}
                    >
                      <td
                        style={tdStyle({
                          color: 'var(--text-primary)',
                          fontWeight: 500,
                          minWidth: '180px',
                        })}
                      >
                        {row.segment}
                      </td>
                      <td style={tdStyle({ minWidth: '200px' })}>{row.klantgroep}</td>
                      <td style={tdStyle({ minWidth: '220px' })}>{row.variant}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={tableCaptionStyle}>Tabel 9 — Prijsdifferentiatie naar segment</p>
            </div>

            <p className="text-[17px] md:text-[18px] max-w-[820px]" style={paragraphStyle}>
              De beleidscontext versterkt het B2B-gesubsidieerde segment: het telefoonverbod, het Gezonde
              Schoolprogramma en het Nationaal Preventieakkoord creëren een context waarin scholen actief gestimuleerd
              worden te investeren in pauze-alternatieven. Dit vergroot de kans dat een deel van de aankoopprijs via
              subsidie of een gemeentelijk gezondheidsbudget wordt gedekt, wat de feitelijke drempel voor de school
              verlaagt.
            </p>
          </div>
        </div>
      </section>

      {/* 5. OVERIGE STRATEGIEËN */}
      <section
        className="px-6 md:px-10 py-20"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <SectionHeading
          eyebrow="Onderdeel 4 · Overige strategieën"
          heading="Afroomstrategie, dynamische prijszetting en PaaS."
        />

        <div className="grid gap-12 max-w-[820px]">
          {/* Geen afroomstrategie */}
          <div className="grid gap-4">
            <h3
              className="text-[22px] md:text-[24px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              Waarom geen afroomstrategie
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Een afroomstrategie is voorlopig niet passend, omdat:
            </p>
            <ul
              className="grid gap-3 list-disc"
              style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}
            >
              <li className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
                De betalingsbereidheid van scholen nog niet is aangetoond – een hoge startprijs verhoogt het risico op
                afwijzing{' '}
                <Cite href="#">(Salvy, de la Haye, Bowker, & Hermans, 2012)</Cite>;
              </li>
              <li className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
                Het product nieuw en onbekend is: er zijn nog geen referentiecases die de waarde voor scholen bewijzen;
              </li>
              <li className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
                De doelgroep (schoolbesturen, kantines) budgetgericht opereert en niet aankoopt op basis van
                exclusiviteit.
              </li>
            </ul>
          </div>

          {/* Geen dynamische prijszetting */}
          <div className="grid gap-4">
            <h3
              className="text-[22px] md:text-[24px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              Waarom geen dynamische prijszetting
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Dynamische prijszetting is niet logisch voor de Challenge Table, omdat:
            </p>
            <ul
              className="grid gap-3 list-disc"
              style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}
            >
              <li className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
                Dit model het beste past bij markten met sterk fluctuerende vraag, zoals transport of hotels{' '}
                <Cite id="bron-gitman-2018">(Gitman et al., 2018)</Cite>;
              </li>
              <li className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
                Het voor een fysiek schoolproduct onnodig complex is om te implementeren;
              </li>
              <li className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
                Transparantie over prijs juist cruciaal is bij B2B-verkoop aan scholen en besturen{' '}
                <Cite id="bron-gitman-2018">(Gitman et al., 2018)</Cite>.
              </li>
            </ul>
          </div>

          {/* Product-as-a-Service */}
          <div className="grid gap-4">
            <h3
              className="text-[22px] md:text-[24px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              Product-as-a-Service
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Een zuiver Product-as-a-Service (PaaS)-model is voor de Challenge Table in de huidige fase niet
              realistisch als hoofdkeuze{' '}
              <Cite id="bron-benedettini-2025">(Benedettini, 2025)</Cite>. De kostprijs van €6.000–€7.000 per tafel is
              relatief hoog voor een abonnementsconstructie zonder bewezen terugkerende waarde. Een hybride model is
              realistischer:
            </p>
            <ul
              className="grid gap-3 list-disc"
              style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}
            >
              <li className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
                Eenmalige verkoop van de Challenge Table als basisproduct;
              </li>
              <li className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
                Optionele servicecontracten (onderhoud, vervangingsonderdelen bij slijtage of vandalisme);
              </li>
              <li className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
                Optionele content-abonnementen: periodieke challenge-updates, seizoensedities of
                schoolvak-gerelateerde opdrachtenkaarten;
              </li>
              <li className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
                Begeleiding voor docenten of begeleiders als aanvullende service (didactisch materiaal,
                activatieprogramma).
              </li>
            </ul>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Dit hybride model biedt scholen een lage instapdrempel via de eenmalige aanschaf, terwijl het voor de
              onderneming een basis legt voor terugkerende omzet op langere termijn{' '}
              <Cite id="bron-benedettini-2025">(Benedettini, 2025)</Cite>.
            </p>
          </div>
        </div>
      </section>

      {/* 6. BUSINESSCASE */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="Onderdeel 5 · Businesscase"
          heading="Betekenis voor de businesscase."
        />

        <div className="grid gap-12 max-w-[1100px]">
          <div className="grid gap-4 max-w-[820px]">
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              De kostprijs van €6.000–€7.000 per tafel vormt het vertrekpunt van alle businesscase-berekeningen. Op
              basis van de gekozen strategie worden minimaal de volgende varianten doorgerekend in Excel:
            </p>
          </div>

          {/* Table 10 */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
              <thead>
                <tr>
                  {['Post', 'Aanname', 'Bedrag (excl. btw)'].map((col) => (
                    <th key={col} style={thStyle()}>
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {businessRows.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      backgroundColor: row.highlight
                        ? 'rgba(94,227,211,0.05)'
                        : i % 2 === 0
                        ? 'transparent'
                        : 'var(--canvas-elevated)',
                    }}
                  >
                    <td
                      style={tdStyle({
                        color: row.highlight ? 'var(--accent-mint)' : 'var(--text-primary)',
                        fontWeight: row.highlight ? 500 : 400,
                        minWidth: '220px',
                      })}
                    >
                      {row.post}
                    </td>
                    <td style={tdStyle({ minWidth: '220px' })}>{row.aanname}</td>
                    <td
                      style={tdStyle({
                        color: row.highlight ? 'var(--accent-mint)' : 'var(--text-secondary)',
                        fontWeight: row.highlight ? 500 : 400,
                        minWidth: '200px',
                      })}
                    >
                      {row.bedrag}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={tableCaptionStyle}>Tabel 10 — Betekenis voor businesscase</p>
          </div>

          <div className="grid gap-4 max-w-[820px]">
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Gebruikte formules in de businesscase{' '}
              <Cite href="#">(OpenStax, 2019)</Cite>:
            </p>
            <ul
              className="grid gap-3 list-disc"
              style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}
            >
              <li className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
                Brutowinst per eenheid = verkoopprijs – variabele kosten per eenheid (kostprijs tafel)
              </li>
              <li className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
                Break-even afzet = totale vaste kosten / brutowinst per eenheid
              </li>
            </ul>
            <p className="text-[15px] md:text-[16px]" style={{ ...paragraphStyle, color: 'var(--text-muted)' }}>
              Opmerking: de verkoopprijs wordt vastgesteld na het prijsonderzoek (volgende training). Totdat die
              gegevens beschikbaar zijn, bevat de businesscase scenario's met bandbreedtes op basis van de kostprijs
              van €6.000–€7.000 als ondergrens.
            </p>
          </div>

          {/* Table 11 */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
              <thead>
                <tr>
                  {['Scenario', 'Omschrijving', 'Te berekenen in Excel'].map((col) => (
                    <th key={col} style={thStyle()}>
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {scenarioRows.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      backgroundColor: i % 2 === 0 ? 'transparent' : 'var(--canvas-elevated)',
                    }}
                  >
                    <td
                      style={tdStyle({
                        color: 'var(--text-primary)',
                        fontWeight: 500,
                        minWidth: '200px',
                      })}
                    >
                      {row.scenario}
                    </td>
                    <td style={tdStyle({ minWidth: '220px' })}>{row.omschrijving}</td>
                    <td style={tdStyle({ minWidth: '220px' })}>{row.excel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={tableCaptionStyle}>Tabel 11 — Scenario's businesscase</p>
          </div>
        </div>
      </section>

      {/* 7. CONCLUSIE */}
      <section
        className="px-6 md:px-10 py-20"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <SectionHeading eyebrow="Onderdeel 6 · Conclusie" heading="Conclusie." />

        <div className="grid gap-6 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Voor de Challenge Table is een waarde-gebaseerde prijsstrategie de meest logische keuze. De sociale en
            gedragsmatige waarde van het product – het doorbreken van het ongezonde snackpatroon via een groep
            activerende interventie – rechtvaardigt een prijs die boven de kostprijs van €6.000–€7.000 ligt en die de
            interventiewaarde voor scholen weerspiegelt.
          </p>
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            De concurrentieanalyse bevestigt dat de Challenge Table een unieke positie inneemt: hoge sociale
            activatiewaarde gecombineerd met een lage gebruiksdrempel, een combinatie die geen van de geïdentificeerde
            substituten volledig biedt. De gunstige beleidscontext (telefoonverbod, Gezonde School, Nationaal
            Preventieakkoord) vergroot de kans dat scholen actief investeren in pauze-alternatieven, wat de
            waarde-gebaseerde strategie verder ondersteunt.
          </p>
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            In de introductiefase wordt de strategie uitgevoerd via een penetratieprijs om adoptie te stimuleren,
            gecombineerd met prijsdifferentiatie naar segment (enkelvoudige school, scholengemeenschap, gesubsidieerde
            afname). Een afroomstrategie en dynamische prijszetting zijn niet passend. Product-as-a-Service is
            interessant als hybride aanvulling, maar niet als basismodel. De businesscase dient de vijf benoemde
            scenario's door te rekenen in Excel, met de kostprijs van €6.000–€7.000 als ondergrens.
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

        <ol className="grid gap-5 max-w-[820px] list-none p-0 m-0" style={{ color: 'var(--text-secondary)' }}>
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
