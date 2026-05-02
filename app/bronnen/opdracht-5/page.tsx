import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import PageHead from '@/components/rubric/PageHead'
import SectionHeading from '@/components/rubric/SectionHeading'

export const metadata = {
  title: 'Opdracht 5 — B Corp · Challenge Cube',
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

const h3Style: React.CSSProperties = {
  fontFamily: 'var(--font-instrument-serif)',
  color: 'var(--text-primary)',
  lineHeight: 1.3,
}

const h4Style: React.CSSProperties = {
  fontFamily: 'var(--font-instrument-serif)',
  color: 'var(--accent-mint)',
  lineHeight: 1.3,
}

const bronnen: Bron[] = [
  {
    id: 'bron-advcloudfiles',
    content: (
      <>
        ADVcloudfiles. (2025). <em>Advantech ESG rapport 2024 – Pley School duurzaam bordspellenproject</em>.{' '}
        <a
          href="https://advcloudfiles.advantech.com/web/ESGReport/2024/Advantech_ESG_Report_2024_EN.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://advcloudfiles.advantech.com/web/ESGReport/2024/Advantech_ESG_Report_2024_EN.pdf
        </a>
      </>
    ),
  },
  {
    id: 'bron-bcorp-certification',
    content: (
      <>
        B Lab. (z.d.). <em>What does B Corp certification mean?</em> B Corporation.{' '}
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
    id: 'bron-bcorp-lunchbox',
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
    id: 'bron-bcorp-mepal',
    content: (
      <>
        B Lab. (2026). <em>Mepal BV – B Corp directory</em>. B Corporation.{' '}
        <a
          href="https://www.bcorporation.net/en-us/find-a-b-corp/company/mepal-bv/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.bcorporation.net/en-us/find-a-b-corp/company/mepal-bv/
        </a>
      </>
    ),
  },
  {
    id: 'bron-bcorp-pley',
    content: (
      <>
        B Lab. (2026). <em>Pley School International Co. – B Corp directory</em>. B Corporation.{' '}
        <a
          href="https://www.bcorporation.net/en-us/find-a-b-corp/company/pley-school-international-co/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.bcorporation.net/en-us/find-a-b-corp/company/pley-school-international-co/
        </a>
      </>
    ),
  },
  {
    id: 'bron-danny',
    content: (
      <>
        Danny. (2023, 14 maart). The benefits of B Corp certification for businesses and society. <em>The Daily Green</em>.{' '}
        <a
          href="https://thedailygreen.org/benefits-of-b-corp-certification/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://thedailygreen.org/benefits-of-b-corp-certification/
        </a>
      </>
    ),
  },
  {
    id: 'bron-eppi',
    content: (
      <>
        Eppi Magazine. (2024). <em>Mepal behaalt B Corp-certificering</em>. Eppi.{' '}
        <a
          href="https://www.eppi.net/nl/nieuws/mepal-behaalt-b-corp-certificering"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.eppi.net/nl/nieuws/mepal-behaalt-b-corp-certificering
        </a>
      </>
    ),
  },
  {
    id: 'bron-ikl',
    content: (
      <>
        Industriële Kring Lochem (IKL). (2024). <em>Mepal B Corp gecertificeerd met 101,6 punten</em>.{' '}
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
    id: 'bron-keurmerkwijzer',
    content: (
      <>
        Keurmerkwijzer / Milieu Centraal. (z.d.). <em>Certified B Corporation – keurmerk informatie</em>. Milieu Centraal.{' '}
        <a
          href="https://keurmerkwijzer.nl/keurmerken/certified-b-corporation/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://keurmerkwijzer.nl/keurmerken/certified-b-corporation/
        </a>
      </>
    ),
  },
  {
    id: 'bron-keys-tomorrow',
    content: (
      <>
        Keys for Tomorrow. (z.d.). <em>Pley School: transforming education through play</em>. Keys for Tomorrow.{' '}
        <a
          href="https://www.keysfortomorrow.com/pley-school"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.keysfortomorrow.com/pley-school
        </a>
      </>
    ),
  },
  {
    id: 'bron-mepal',
    content: (
      <>
        Mepal. (2022). <em>Op weg naar een klimaatpositieve toekomst – duurzaamheidsrapport</em>. Mepal.{' '}
        <a
          href="https://www.mepal.com/nl/duurzaamheid"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.mepal.com/nl/duurzaamheid
        </a>
      </>
    ),
  },
  {
    id: 'bron-pleyschool',
    content: (
      <>
        PleySchool. (2024). <em>ESG/CSR – impact en activiteiten</em>. PleySchool.{' '}
        <a
          href="https://www.pleyschool.com/csr"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.pleyschool.com/csr
        </a>
      </>
    ),
  },
]

const tableRows = [
  {
    name: 'Pley School',
    eco: 'Minor footprint (lage eigen uitstoot); geen grootschalige productie',
    social: "Game-based leren over SDG's; 32.500+ jongeren bereikt; NGO/CSR-samenwerking",
    relevance: 'Speelontwerp als gedragsinterventie; uitdagingen gekoppeld aan betekenisvolle inhoud',
  },
  {
    name: 'LunchBox Solutions',
    eco: 'Minor footprint; consultant-model zonder fysiek product; duurzame inkoop advisering',
    social: 'Equity, access en student well-being; 1% omzetdonatie aan hongerhulp',
    relevance: "Schoolomgeving als systeem; integratie in Gezonde School-programma's",
  },
  {
    name: 'Mepal',
    eco: 'Score 101,6/200 B Corp; herbruikbare producten; CO₂-reductie; lokale NL-productie',
    social: '400+ mensen met arbeidsbeperking via sociale werkplaatsen; lokale werkgelegenheid',
    relevance: 'Modulair productontwerp; lange levensduur; koppeling sociaal ondernemen in keten',
  },
]

export default function Opdracht5Page() {
  return (
    <>
      <PageHead
        number="05"
        label="Portfolio · Opdracht"
        title="B Corp."
        lead="Groepsopdracht uit de module Toekomstbestendige Business Innovatie. Analyse van B Corp-certificering als referentiekader voor de Challenge Table, met een vergelijking van drie gecertificeerde bedrijven: Pley School, LunchBox Solutions en Mepal."
        meta={[
          { key: 'Type', value: 'Groepsopdracht' },
          { key: 'Module', value: 'Toekomstbestendige Business Innovatie' },
          { key: 'Groep', value: 'Thijs H., Romeon S., Jesper v/d H., Thijs K., Twan V.' },
        ]}
      />

      {/* ONDERDEEL 1 — Wat betekent B Corp voor ons? */}
      <section className="px-6 md:px-10 py-20">
        <SectionHeading
          eyebrow="Onderdeel 1 · B Corp-kader"
          heading="Wat betekent B Corp voor ons?"
        />
        <div className="grid gap-8 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            B Corp (Certified B Corporation) is een internationaal keurmerk voor bedrijven die aantoonbaar goed presteren op zowel sociale als ecologische criteria. Om gecertificeerd te worden, moet een bedrijf minimaal 80 van de 200 beschikbare punten halen in de B Impact Assessment (BIA). In deze assessment worden vijf pijlers beoordeeld: bestuur (Governance), werknemers (Workers), gemeenschap (Community), milieu (Environment) en klanten (Customers). <Cite id="bron-keurmerkwijzer">(Keurmerkwijzer, z.d.)</Cite>
          </p>
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Naast de score vereist B Lab, de internationale organisatie achter het keurmerk, dat bedrijven hun maatschappelijke doelstelling juridisch vastleggen in hun statuten. Bovendien worden gecertificeerde bedrijven elke drie jaar opnieuw beoordeeld. Dit voorkomt dat certificering een eenmalige prestatie is; het verplicht bedrijven tot structurele verbetering. <Cite id="bron-bcorp-certification">(B Lab, z.d.)</Cite>
          </p>
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Voor de Challenge Table is B Corp een relevant referentiekader om twee redenen. Ten eerste sluit het aan bij ons gekozen ambitieniveau "omdat het hoort": de morele verantwoordelijkheid om positieve impact te realiseren op mensen en milieu is voor ons een vertrekpunt, niet een bijkomend voordeel. Ten tweede biedt B Corp ook "omdat het loont"-waarde: gecertificeerde bedrijven bouwen aantoonbaar aan reputatie, geloofwaardigheid en langetermijnwaarde, wat aansluit op onze randvoorwaarde dat de Challenge Table ook zakelijk haalbaar moet zijn.
          </p>
        </div>
      </section>

      {/* ONDERDEEL 2 — Analyse drie B Corp-gecertificeerde bedrijven */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="Onderdeel 2 · Bedrijfsanalyse"
          heading="Analyse: drie B Corp-gecertificeerde bedrijven."
        />

        <div className="grid gap-16 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Wij hebben drie B Corp-gecertificeerde bedrijven gekozen die elk een andere invalshoek vertegenwoordigen die relevant is voor de Challenge Table: een pedagogische aanpak (Pley School), een systemische kijk op de schoolomgeving (LunchBox Solutions) en duurzaam productontwerp (Mepal). Hieronder analyseren wij elk bedrijf op de vijf BIA-pijlers, met nadruk op de ecologische en sociale dimensies die voor ons het meest relevant zijn.
          </p>

          {/* Bedrijf 1: Pley School */}
          <div className="grid gap-8">
            <h3 className="text-[24px] md:text-[28px]" style={h3Style}>
              Bedrijf 1: Pley School
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Pley School International Co. is een gecertificeerd B Corp in de categorie "Service with Minor Environmental Footprint", actief in onderwijs en educatieve diensten. De organisatie is opgericht vanuit de overtuiging dat spel een serieus pedagogisch instrument is: via game-based learning helpen zij tieners complexe sociale kwesties te begrijpen, zoals klimaatverandering, ongelijkheid en besluitvorming. Dit doen zij via kampen, workshops, studentenprogramma's en samenwerkingen met NGO's en CSR-afdelingen van bedrijven. <Cite id="bron-bcorp-certification">(B Lab, z.d.)</Cite>
            </p>

            <div className="grid gap-4">
              <h4 className="text-[19px] md:text-[21px]" style={h4Style}>
                Ecologische impact
              </h4>
              <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
                De ecologische voetafdruk van Pley School is bewust klein gehouden. Als dienstverlenende organisatie zonder grootschalige productie of logistiek heeft Pley School een relatief lage directe CO₂-uitstoot. De BIA-categorie "Service with Minor Environmental Footprint" weerspiegelt dit: het bedrijfsmodel is zo ingericht dat materiaalgebruik en transport minimaal zijn. Dit is een bewuste keuze: door te werken met bordspellen en workshops in plaats van fysieke producten of digitale hardware beperken zij hun ecologische impact structureel. <Cite id="bron-bcorp-certification">(B Lab, z.d.)</Cite>
              </p>
              <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
                Dit betekent niet dat ecologie irrelevant is voor Pley School. In hun ESG-aanpak koppelen zij inhoud over duurzaamheid en SDG's aan hun spellen, waardoor zij leerlingen bewuster maken van ecologische vraagstukken – ook al blijft de directe milieu-impact van hun eigen activiteiten beperkt. <Cite id="bron-bcorp-pley">(B Lab, 2026)</Cite>
              </p>
            </div>

            <div className="grid gap-4">
              <h4 className="text-[19px] md:text-[21px]" style={h4Style}>
                Sociale impact
              </h4>
              <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
                Op sociaal vlak is Pley School sterk. Zij hebben meer dan 30 duurzame spellen ontwikkeld en tot op heden meer dan 800 activiteiten uitgevoerd met ruim 32.500 kinderen en jongeren. Via rollenspel en simulaties leren jongeren over thema's als klimaat, ongelijkheid en samenwerking. Daarmee raken zij de BIA-pijlers Community (maatschappelijke impact) en Customers (bijdrage aan de ontwikkeling van jonge gebruikers) op een directe manier. <Cite id="bron-bcorp-pley">(B Lab, 2026)</Cite>
              </p>
              <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
                Een blogartikel van Keys for Tomorrow beschrijft Pley School als een "educational social enterprise" met een expliciete missie om onderwijs in Taiwan te transformeren richting zelfvertrouwen, samenwerking en maatschappelijke betrokkenheid. Daarnaast wordt Pley School ingezet door zakelijke partners zoals Advantech, die het gebruiken voor SDG-trainingen voor docenten. <Cite id="bron-keys-tomorrow">(Keys for Tomorrow, z.d.)</Cite> <Cite id="bron-advcloudfiles">(ADVcloudfiles, 2025)</Cite>
              </p>
            </div>
          </div>

          {/* Bedrijf 2: LunchBox Solutions */}
          <div className="grid gap-8">
            <h3 className="text-[24px] md:text-[28px]" style={h3Style}>
              Bedrijf 2: LunchBox Solutions
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              LunchBox Solutions LLC is een gecertificeerd B Corp in de categorie "Service with Minor Environmental Footprint", gespecialiseerd in consulting voor K-12 school nutrition programs in de Verenigde Staten. Hun missie is om nieuwe schoolvoedingsdirecteuren te ondersteunen bij het bouwen van sterke, conforme en duurzame voedingssystemen. Het bedrijf is opgericht door een geregistreerd diëtist met directe ervaring in schoolvoeding. <Cite id="bron-bcorp-lunchbox">(B Lab, 2025)</Cite>
            </p>

            <div className="grid gap-4">
              <h4 className="text-[19px] md:text-[21px]" style={h4Style}>
                Ecologische impact
              </h4>
              <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
                De ecologische voetafdruk van LunchBox Solutions is bewust klein gehouden. Als dienstverlenende organisatie zonder grootschalige productie of logistiek heeft LunchBox Solutions een relatief lage directe CO₂-uitstoot. De BIA-categorie "Service with Minor Environmental Footprint" weerspiegelt dit: het bedrijfsmodel is zo ingericht dat materiaalgebruik en transport minimaal zijn. <Cite id="bron-bcorp-lunchbox">(B Lab, 2025)</Cite>
              </p>
              <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
                Dit betekent niet dat ecologie irrelevant is voor LunchBox Solutions. In hun aanpak koppelen zij advies over duurzame inkoop aan hun consultancy, waardoor zij schooldirecteuren bewuster maken van ecologische vraagstukken binnen schoolvoeding. <Cite id="bron-pleyschool">(PleySchool, 2024)</Cite>
              </p>
            </div>

            <div className="grid gap-4">
              <h4 className="text-[19px] md:text-[21px]" style={h4Style}>
                Sociale impact
              </h4>
              <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
                Op sociaal gebied is LunchBox Solutions sterk in de BIA-pijlers Workers, Community en Customers. Zij ondersteunen nieuwe nutrition directors gedurende een heel jaar via coaching, regelgevingstraining en hun online cursus "Compliance Confidence". Daarmee versterken zij de capaciteit van professionals die direct invloed hebben op de gezondheid en voeding van duizenden leerlingen. Bovendien doneren zij 1% van hun omzet aan organisaties die kinderhonger bestrijden. Zij benadrukken expliciet dat hun werk draait om equity, access en student well-being – gelijke toegang tot gezond voedsel als sociaal recht. <Cite id="bron-bcorp-lunchbox">(B Lab, 2025)</Cite>
              </p>
              <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
                Hun LinkedIn-profiel en communicatie laten zien dat zij actief zijn met workshops en keynotes over school nutrition leadership, en dat zij met scholen samenwerken aan verbeteringen in schoolmaaltijden en apparatuur. Daarmee zien wij LunchBox Solutions vooral als een B Corp die de schoolomgeving structureel gezonder probeert te maken via beleid, training en systemen, in plaats van via een fysiek product (LinkedIn, z.d.).
              </p>
            </div>
          </div>

          {/* Bedrijf 3: Mepal */}
          <div className="grid gap-8">
            <h3 className="text-[24px] md:text-[28px]" style={h3Style}>
              Bedrijf 3: Mepal
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Mepal BV is een Nederlandse B Corp-gecertificeerde producent van herbruikbare producten voor het bewaren, meenemen en serveren van eten en drinken, ingedeeld in de BIA-categorie "Household &amp; Personal Products". In 2024 behaalde Mepal een score van 101,6 punten – ruim boven de minimumdrempel van 80. <Cite id="bron-bcorp-mepal">(B Lab, 2026)</Cite> <Cite id="bron-ikl">(IKL, 2024)</Cite>
            </p>

            <div className="grid gap-4">
              <h4 className="text-[19px] md:text-[21px]" style={h4Style}>
                Ecologische impact
              </h4>
              <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
                Mepal scoort sterk op de ecologische pijler van de BIA. In hun duurzaamheidsdocument "Op weg naar een klimaatpositieve toekomst" werken zij drie kernprincipes uit: lokale productie in Nederland (minder transportuitstoot), lange levensduur van producten en het reduceren van wegwerpplastic. Een herbruikbare lunchbox van Mepal kan honderden wegwerpverpakkingen vervangen over zijn levensduur. Producten zijn zo ontworpen dat onderdelen afzonderlijk vervangbaar zijn, zodat het gehele product niet vervangen hoeft te worden bij beschadiging of slijtage. <Cite id="bron-mepal">(Mepal, 2022)</Cite> <Cite id="bron-eppi">(Eppi Magazine, 2024)</Cite>
              </p>
            </div>

            <div className="grid gap-4">
              <h4 className="text-[19px] md:text-[21px]" style={h4Style}>
                Sociale impact
              </h4>
              <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
                Op sociaal vlak onderscheidt Mepal zich op de pijler Workers en Community. Zij werken structureel samen met sociale werkplaatsen, waarbij meer dan 400 mensen met een afstand tot de arbeidsmarkt betrokken zijn in hun productieproces. Daarnaast investeert Mepal in lokale werkgelegenheid in Nederland. De IKL benadrukt in haar publicatie uit 2024 dat dit een belangrijke reden was voor de hoge B Corp-score van Mepal: de combinatie van inclusieve arbeid en duurzame productie maakt het bedrijf tot een goed voorbeeld van meervoudige waardecreatie. <Cite id="bron-ikl">(IKL, 2024)</Cite>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ONDERDEEL 3 — Vergelijkend overzicht */}
      <section
        className="px-6 md:px-10 py-20"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <SectionHeading
          eyebrow="Onderdeel 3 · Vergelijking"
          heading="Vergelijkend overzicht."
        />

        <div className="max-w-[820px] overflow-x-auto">
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              color: 'var(--text-secondary)',
              fontSize: '15px',
              lineHeight: 1.6,
            }}
          >
            <thead>
              <tr style={{ borderBottom: '0.5px solid var(--border-strong)' }}>
                {['Bedrijf', 'Ecologische impact', 'Sociale impact', 'Relevantie voor Challenge Table'].map((h) => (
                  <th
                    key={h}
                    style={{
                      textAlign: 'left',
                      padding: '10px 16px 10px 0',
                      color: 'var(--text-primary)',
                      fontWeight: 500,
                      fontFamily: 'var(--font-inter)',
                      fontSize: '13px',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, i) => (
                <tr
                  key={row.name}
                  style={{
                    borderBottom: '0.5px solid var(--border)',
                    backgroundColor: i % 2 === 1 ? 'var(--surface)' : 'transparent',
                  }}
                >
                  <td
                    style={{
                      padding: '12px 16px 12px 0',
                      color: 'var(--text-primary)',
                      fontWeight: 500,
                      verticalAlign: 'top',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {row.name}
                  </td>
                  <td style={{ padding: '12px 16px 12px 0', verticalAlign: 'top' }}>{row.eco}</td>
                  <td style={{ padding: '12px 16px 12px 0', verticalAlign: 'top' }}>{row.social}</td>
                  <td style={{ padding: '12px 0 12px 0', verticalAlign: 'top' }}>{row.relevance}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p
            className="text-[13px] mt-4"
            style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}
          >
            Tabel 2 — Overzicht B-corporations
          </p>
        </div>
      </section>

      {/* ONDERDEEL 4 — Wat wij hiervan gebruiken */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="Onderdeel 4 · Ontwerpprincipes"
          heading="Wat wij hiervan gebruiken voor de Challenge Table."
        />

        <div className="grid gap-12 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Elk van de drie B Corps levert een concreet ontwerpprincipe of strategische les op voor de Challenge Table. Wij beschrijven hieronder per B Corp welk principe wij overnemen en hoe dit vertaald wordt naar een concrete ontwerp- of positioneringskeuze.
          </p>

          <div className="grid gap-5">
            <h3 className="text-[22px] md:text-[24px]" style={h3Style}>
              Van Pley School: spel als serieuze gedragsinterventie
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Pley School laat zien dat spel veel meer kan zijn dan vermaak: het is een bewezen methode om jongeren complexe sociale kwesties te laten begrijpen, keuzes te laten doorleven en vervolgens te reflecteren op hun gedrag. Hun "issue-based games" en SDG-bordspellen zijn doelgericht ontworpen – de inhoud van het spel is nooit willekeurig, maar altijd gekoppeld aan een leeruitkomst of bewustwording. <Cite id="bron-bcorp-pley">(B Lab, 2026)</Cite> <Cite id="bron-pleyschool">(PleySchool, 2024)</Cite>
            </p>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Voor de Challenge Table betekent dit dat wij de challenges niet willekeurig samenstellen. Elke mini-uitdaging wordt bewust ontworpen rond sociale interactie, keuzebewustzijn en alternatief gedrag. Concreet: challenges die leerlingen laten ervaren dat een pauze leuk kan zijn zonder iets te kopen (alternatief voor snackgedrag), samenwerkingsopdrachten die sociaal contact stimuleren boven consumptie, en opdrachten die aansluiten bij thema's als gezondheid, samenwerking en duurzame keuzes, herkenbaar en betekenisvol voor de doelgroep.
            </p>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              De keuze voor fysieke knoppen en een non-touch-scherm versterkt dit principe: de interactie is bewust, tastbaar en sociaal gedeeld, niet passief of individueel zoals bij een touchscreen op een eigen telefoon.
            </p>
          </div>

          <div className="grid gap-5">
            <h3 className="text-[22px] md:text-[24px]" style={h3Style}>
              Van LunchBox Solutions: de schoolomgeving als systeem
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              LunchBox Solutions laat zien dat de schoolomgeving zelf het krachtigste aangrijpingspunt is voor gedragsverandering. Zij richten zich niet op individuele leerlingen, maar op het systeem: beleid, verantwoord inkoopgedrag, regelgeving en leiderschap van professionals die beslissen over de schoolomgeving. <Cite id="bron-bcorp-lunchbox">(B Lab, 2025)</Cite>
            </p>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Voor de Challenge Table vertaalt dit zich naar drie concrete keuzes. Ten eerste positioneren wij de Challenge Table niet als een op zichzelf staand product, maar als onderdeel van een breder school-ecosysteem: de table sluit aan op bestaande Gezonde School-programma's, GGD-richtlijnen en mentorprogramma's. Ten tweede ontwerpen wij de table zo dat docenten, mentoren en kantinemedewerkers hem kunnen inzetten als startpunt voor een gesprek of activiteit; de table is een middel, geen doel. Ten derde borgen wij gebruik: door de table fysiek te verankeren in de pauzecultuur en te integreren in schoolbeleid voorkomen wij dat hij in een kast verdwijnt.
            </p>
          </div>

          <div className="grid gap-5">
            <h3 className="text-[22px] md:text-[24px]" style={h3Style}>
              Van Mepal: modulair en duurzaam productontwerp
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Mepal laat zien dat een fysiek product duurzaam is als je vanaf het ontwerp denkt in termen van lange levensduur, herbruikbaarheid en vervangbare onderdelen. Lokale productie en samenwerking met sociale werkplaatsen versterken dit: de duurzame impact zit niet alleen bij de gebruiker, maar ook in de keten. <Cite id="bron-mepal">(Mepal, 2022)</Cite> <Cite id="bron-ikl">(IKL, 2024)</Cite>
            </p>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Voor de Challenge Table nemen wij drie concrete ontwerpprincipes over. Ten eerste kiezen wij voor een robuust en storingsgevoelig-arm ontwerp (non-touch-scherm, fysieke knoppen) dat geschikt is voor intensief schoolgebruik en een lange levensduur garandeert. Ten tweede ontwerpen wij de table modulair: de QR-codes en kaartensets zijn vervangbaar zonder dat de hardware aangepast hoeft te worden, zodat content geüpdatet kan worden zonder vervangingskosten voor de table zelf. Ten derde verkennen wij voor een latere fase de mogelijkheid om samen te werken met sociale werkplaatsen voor productie of assemblage, zodat ook de sociale impact in de keten geborgd is, geïnspireerd op het Mepal-model.
            </p>
          </div>
        </div>
      </section>

      {/* ONDERDEEL 5 — Koppeling met ambitieniveau */}
      <section
        className="px-6 md:px-10 py-20"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <SectionHeading
          eyebrow="Onderdeel 5 · Ambitieniveau"
          heading="Koppeling met ons ambitieniveau."
        />

        <div className="grid gap-12 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            In onze eerdere analyse hebben wij als groep gekozen voor het ambitieniveau "omdat het hoort" (offensief), met "omdat het loont" als strategische randvoorwaarde. People is leidend, Planet is ondersteunend en Profit is faciliterend. Hieronder analyseren wij hoe de drie B Corps dit ambitieniveau weerspiegelen en welke positie de Challenge Table daarin inneemt.
          </p>

          <div className="grid gap-5">
            <h3 className="text-[22px] md:text-[24px]" style={h3Style}>
              Omdat het hoort: morele verantwoordelijkheid als vertrekpunt
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              B Lab maakt duidelijk dat B Corp-certificering verder gaat dan een vrijwillig duurzaamheidslabel: bedrijven verankeren hun maatschappelijke verantwoordelijkheid juridisch in hun statuten. Dit is een expliciete keuze voor het "omdat het hoort"-ambitieniveau: de morele verantwoordelijkheid richting werknemers, gemeenschap, milieu en klanten is geen bijzaak, maar een constitutief onderdeel van de organisatie. <Cite id="bron-bcorp-certification">(B Lab, z.d.)</Cite>
            </p>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Pley School en LunchBox Solutions incarneren dit principe in hun businessmodel. Pley School stelt het welzijn en de ontwikkeling van jongeren centraal, ook als dat het businessmodel complexer maakt dan strikt nodig voor winst. LunchBox Solutions werkt aan equity en toegang tot gezond voedsel voor kinderen als primaire missie, waarbij commercieel succes een middel is, geen doel. Mepal laat zien dat ook een productiebedrijf inclusieve arbeid en CO₂-reductie kan inbedden als structurele bedrijfsprincipes, niet als marketingcampagne.
            </p>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Voor de Challenge Table betekent dit dat gezondheid, sociale interactie en gelijke kansen in de pauze het vertrekpunt zijn van het ontwerp. De table is er niet om omzet te genereren door meer gebruik, maar om leerlingen een betekenisvol en sociaal alternatief te bieden, ongeacht hun achtergrond of koopkracht.
            </p>
          </div>

          <div className="grid gap-5">
            <h3 className="text-[22px] md:text-[24px]" style={h3Style}>
              Omdat het loont: langetermijnwaarde en geloofwaardigheid
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Tegelijkertijd laten alle drie de B Corps zien dat morele ambitie en strategische voordelen samengaan. Mepal bevestigt dat B Corp-certificering voor hen een strategische stap is: het verbindt hen met andere impactvolle merken, maakt hun duurzaamheidsverhaal toetsbaar en onderscheidt hen in een markt vol zelfverklaarde duurzame producenten. LunchBox Solutions gebruikt B Corp expliciet in hun positionering als missiegedreven bedrijf in een sector waar vertrouwen en geloofwaardigheid bepalend zijn voor het succes. <Cite id="bron-ikl">(IKL, 2024)</Cite>
            </p>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Onderzoek naar de effecten van B Corp-certificering laat zien dat gecertificeerde bedrijven gemiddeld beter scoren op klantvertrouwen, werknemerstevredenheid en partnerschap met andere impactvolle organisaties. <Cite id="bron-danny">(Danny, 2023)</Cite>
            </p>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Voor de Challenge Table vertaalt "omdat het loont" zich naar drie randvoorwaarden: de table moet intrinsiek aantrekkelijk zijn voor leerlingen (fun, status, gemak), zodat gebruik niet gedwongen hoeft te worden; scholen moeten er mee kunnen scoren op doelstellingen zoals Gezonde School-certificering of GGD-richtlijnen, zonder dat dit grote extra inspanning kost; en het concept moet geloofwaardig aansluiten bij partijen als GGD, Gezonde School-programma's of maatschappelijke investeerders die waarde hechten aan meetbare impact.
            </p>
          </div>

          <div className="grid gap-5">
            <h3 className="text-[22px] md:text-[24px]" style={h3Style}>
              Kritische positionering: B Corp als inspiratiekader, niet als directe doelstelling
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Een relevante vraag is of B Corp-certificering een realistisch doel is voor de Challenge Table, of dat wij het gebruiken als inspiratiekader. Wij kiezen bewust voor het laatste. B Corp-certificering is een intensief en kostbaar proces dat minimaal 80 van de 200 BIA-punten vereist, inclusief juridische verankering in statuten en herbeoordelingen elke drie jaar. Voor een vroegefase-innovatieconcept als de Challenge Table is dit op dit moment een te hoge lat.
            </p>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Wat wij wel doen, is de BIA gebruiken als ontwerp- en reflectiekader. De vijf pijlers – Governance, Workers, Community, Environment en Customers – helpen ons bij elke ontwerpkeuze na te denken over meervoudige waardecreatie. Dit past bij ons ambitieniveau "omdat het hoort" en sluit aan op de leerdoelen van de module, zonder dat wij een belofte doen die wij in deze fase niet kunnen waarmaken.
            </p>
          </div>
        </div>
      </section>

      {/* CONCLUSIE */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading eyebrow="Conclusie" heading="Conclusie." />

        <div className="grid gap-8 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Op basis van de analyse van Pley School, LunchBox Solutions en Mepal, gecombineerd met ons gekozen ambitieniveau, komen wij tot de volgende positiebepaling voor de Challenge Table: wij ontwerpen de Challenge Table als een offensieve, sociale en ecologisch doordachte interventie in de schoolpauze. De sociale impact staat centraal (gezondheid, gelijkheid, sociale interactie), de ecologische impact wordt geborgd via modulair en duurzaam productontwerp, en de financiële haalbaarheid wordt geborgd door aan te sluiten op bestaande schoolprogramma's en geloofwaardige partners. B Corp vormt onze morele en strategische inspiratiebron; de vijf BIA-pijlers vormen ons ontwerpkader.
          </p>
        </div>
      </section>

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

      {/* Terug-navigatie */}
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
