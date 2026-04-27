import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import PageHead from '@/components/rubric/PageHead'
import SectionHeading from '@/components/rubric/SectionHeading'

export const metadata = {
  title: 'Opdracht 2 — Ambitieniveau duurzaamheid (groep) · Challenge Cube',
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

type StudentBlock = {
  name: string
  ambitie: string
  body: React.ReactNode
}

const studentBlocks: StudentBlock[] = [
  {
    name: 'Thijs H.',
    ambitie: '“Omdat het hoort”',
    body: (
      <>
        Ik benadert duurzaamheid als een morele verantwoordelijkheid die direct raakt aan dagelijkse keuzes. Uit mijn ecologische voetafdruk (score 2,6 ten opzichte van het Nederlandse gemiddelde van 3,3) bleek dat mijn thuis dankzij een warmtepomp, zonnepanelen en betere isolatie relatief duurzaam is, maar dat voeding en vervoer duidelijke verbeterpunten zijn <Cite href="/bronnen/opdracht-1/hekking-2025">(Hekking, 2025)</Cite>. Mijn mobiliteitsanalyse wees uit dat ik in één week 202,6 km reed, waarbij korte ritten ook per fiets hadden gekund. In mijn analyse van Tony’s Chocolonely en Philips erkende ik dat winstgevendheid en sociale missie samen kunnen gaan <Cite href="/bronnen/opdracht-1/hekking-2025">(Hekking, 2025)</Cite>. Mijn ambitieniveau is primair “omdat het hoort”, aangevuld met “omdat het loont” als praktische randvoorwaarde: een oplossing moet aantrekkelijk, betaalbaar en toepasbaar zijn om daadwerkelijk gedragsverandering te bewerkstelligen.
      </>
    ),
  },
  {
    name: 'Romeon S.',
    ambitie: '“Omdat het hoort en loont” (met morele basis)',
    body: (
      <>
        Romeon ziet duurzaamheid als iets dat pas schaal krijgt wanneer het economisch aantrekkelijk en transparant is. Zijn frustratie over prijsverschillen en onduidelijke keurmerken laat zien dat duurzame keuzes concurrerend moeten zijn. Duurzaamheid moet dus ook financieel kloppen om brede gedragsverandering te realiseren.
      </>
    ),
  },
  {
    name: 'Jesper v/d H.',
    ambitie: '“Omdat het hoort”',
    body: (
      <>
        Jesper ziet duurzaamheid als onderdeel van professioneel handelen. Kleine, haalbare gedragsstappen (minder verspilling, circulair denken, vrijwilligerswerk) maken structureel verschil. Duurzaamheid is volgens hem geen marketingmiddel, maar een houding.
      </>
    ),
  },
  {
    name: 'Thijs K.',
    ambitie: '“Omdat het hoort”',
    body: (
      <>
        Thijs K. benadrukt dat duurzame keuzes op lange termijn verschil maken. Zijn focus ligt op gedragsverandering (minder vlees, minder plastic, tweedehands aankopen). Voor hem is duurzaamheid een kwestie van verantwoordelijkheid nemen in dagelijkse keuzes.
      </>
    ),
  },
  {
    name: 'Twan V.',
    ambitie: '“Omdat het loont” (met economische bewustwording)',
    body: (
      <>
        Twan ziet duurzaamheid als geïntegreerde mindset. Purpose, ketentransparantie en winst kunnen samengaan, maar vragen bewuste keuzes. Veel winst is belangrijk, maar er moet ook gezorgd worden voor maatschappelijke impact.
      </>
    ),
  },
]

const groepskeuzeParagraphs: React.ReactNode[] = [
  <>
    Op basis van de individuele reflecties kiest de groep primair voor het ambitieniveau “omdat het hoort”. De meerderheid – vier van de vijf studenten – positioneert duurzaamheid als morele verantwoordelijkheid en als fundament voor professioneel handelen. MVO Nederland benadrukt dat ondernemers om verschillende motieven aan MVO doen: omdat het hoort, omdat het moet, of omdat het loont <Cite id="bron-mvo-2008">(Mvo omdat het hoort, moet of loont, 2008)</Cite>. De groepskeuze valt op “omdat het hoort” als primaire drijfveer, waarbij “omdat het loont” bewust is geïntegreerd als noodzakelijke randvoorwaarde voor realiseerbare impact.
  </>,
]

const beschrijvingParagraphs: React.ReactNode[] = [
  <>
    Ons Sprint 1-probleem richt zich op scholieren die tijdens pauzes ongezonde snacks kopen door groepsdruk, impuls en omgevingsprikkels. Dit raakt direct aan People (gezondheid, energie, concentratie). Observaties bij Spar Windesheim toonden aan dat 73% van jongeren in groepsverband iets koopt, wat groepsdruk als structurele factor bevestigt <Cite id="bron-cbs-2023">(Kloosterman, Akkermans, Reep, &amp; Aa, 2023)</Cite>. Wij kiezen daarom voor een offensieve benadering: wij ontwerpen een oplossing die het makkelijker maakt om een gezondere keuze te maken, zonder moraliserend of betuttelend te zijn.
  </>,
]

const hoortPunten: string[] = [
  'Gezondheid staat centraal in ontwerpkeuzes.',
  'Transparantie en eerlijkheid in communicatie.',
  'Geen concessies aan maatschappelijke impact puur voor winstoptimalisatie.',
]

const toewijdingParagraphs: React.ReactNode[] = [
  <>
    Wij kiezen offensief. We wachten niet op regelgeving of externe druk. Vanuit Sprint 1 blijkt dat het probleem structureel is: groepsinvloed en impulsgedrag zorgen voor herhaald ongezond gedrag. Gedragsverandering vraagt om proactief ontwerpen van een betere standaard, waarbij de omgeving de gezonde keuze vanzelfsprekend maakt; een principe dat aansluit bij het boek <em>Atomic Habits</em> van James Clear <Cite id="bron-clear-2018">(Clear, 2018)</Cite>.
  </>,
]

const balansIntro: React.ReactNode = (
  <>
    People is leidend, Planet ondersteunend, Profit faciliterend. Dit sluit aan bij het Triple Bottom Line-model <Cite id="bron-elkington-1997">(Elkington &amp; Rowlands, 1999)</Cite> en de definitie van MVO als het bewust richten van ondernemingsactiviteiten op waardecreatie in drie dimensies, gericht op maatschappelijke welvaart op lange termijn <Cite id="bron-cramer-2005">(Cramer, 2005)</Cite>:
  </>
)

const balansBullets: React.ReactNode[] = [
  <>
    <strong style={{ color: 'var(--text-primary)' }}>People:</strong> gezondere keuzes bevorderen bij scholieren.
  </>,
  <>
    <strong style={{ color: 'var(--text-primary)' }}>Planet:</strong> aandacht voor verpakkingsverspilling en milieu-impact van sterk bewerkte snacks.
  </>,
  <>
    <strong style={{ color: 'var(--text-primary)' }}>Profit:</strong> betaalbaarheid voor scholieren en financiële haalbaarheid voor aanbieders.
  </>,
]

const balansSlot: React.ReactNode = (
  <>
    Het door Romeon benoemde punt over prijsgevoeligheid onderstreept dat economische haalbaarheid cruciaal is. Onderzoek naar duurzaam consumentengedrag toont aan dat prijs en gemak de belangrijkste factoren zijn die het attitude–gedragsgat verklaren <Cite id="bron-michie-2011">(Michie, 2011)</Cite>. Daarom zien wij “omdat het loont” niet als primaire drijfveer, maar als randvoorwaarde.
  </>
)

const termijnIntro: React.ReactNode = 'Wij hanteren een dubbele tijdshorizon:'

const termijnBullets: React.ReactNode[] = [
  <>
    <strong style={{ color: 'var(--text-primary)' }}>Korte termijn:</strong> beïnvloeden van pauzegedrag en impulsaankopen via slimme omgevingsontwerpen.
  </>,
  <>
    <strong style={{ color: 'var(--text-primary)' }}>Lange termijn:</strong> bijdragen aan structureel gezondere routines bij jongeren.
  </>,
]

const termijnSlot: React.ReactNode = (
  <>
    Gezien de maatschappelijke cijfers rondom overgewicht bij jongeren is dit probleem geen incident maar een trend <Cite id="bron-rivm-2025">(CBS-statline, 2025)</Cite>. Onze oplossing moet daarom schaalbaar en duurzaam inzetbaar zijn.
  </>
)

const draagvlakIntro: React.ReactNode =
  'De groepskeuze is tot stand gekomen via gezamenlijke bespreking van de individuele ambitieniveaus. Vier van de vijf studenten positioneren zich primair bij “omdat het hoort”. Eén student benadrukt sterk het economische perspectief, wat is meegenomen als randvoorwaarde en breed gedragen wordt door de groep.'

const draagvlakSubintro: React.ReactNode = 'Commitment borgen wij als volgt:'

const commitmentBullets: React.ReactNode[] = [
  'We leggen onze ambitiekeuze vast als uitgangspunt voor alle volgende sprints.',
  'Elk ontwerpbesluit wordt getoetst aan de vraag: draagt dit bij aan gezondere keuzevorming voor scholieren?',
  'We formuleren concrete KPI’s, waaronder keuzepercentage gezond versus ongezond, betaalbaarheid en waargenomen groepsdruk.',
]

const draagvlakSlot: React.ReactNode =
  'Iedere student heeft expliciet ingestemd met deze richting. De economische invalshoek is geïntegreerd als randvoorwaarde, waardoor er breed draagvlak bestaat. De keuze is niet alleen inhoudelijk onderbouwd, maar ook intern gedragen.'

const onderzoeksvragenIntro: React.ReactNode =
  'Vanuit ons ambitieniveau formuleren wij de volgende centrale onderzoeksvragen voor de vervolgsprints:'

const onderzoeksvragen: React.ReactNode[] = [
  'Welke omgevingsfactoren (choice architecture, sociale norm, prijs, verpakking) beïnvloeden het snackgedrag van scholieren het sterkst tijdens pauzes?',
  'Op welke manier kan een nudge-interventie gezonde snackkeuzes aantrekkelijker maken zonder de keuzevrijheid van scholieren te beperken?',
  'Hoe kan een gezond snackalternatief zo worden geprijsd en gepresenteerd dat het concurrerend is met impulsaankopen in termen van smaak, gemak en sociale aantrekkelijkheid?',
  'In welke mate draagt een bewuste snackomgeving op school bij aan langetermijngedragsverandering bij jongeren op het gebied van gezondheid en duurzame consumptie?',
]

const onderzoeksvragenSlot: React.ReactNode = (
  <>
    Deze vragen sluiten direct aan bij het gedragspsychologische kader van <Cite id="bron-michie-2011">Michie (2011)</Cite>, die stelt dat effectieve gedragsverandering vraagt om het gelijktijdig aanpakken van capaciteit, motivatie en omgeving. Ze bieden tevens richting voor het ontwerp van onze oplossing in de volgende sprints.
  </>
)

const conclusieParagraphs: React.ReactNode[] = [
  <>
    De groep kiest bewust voor een offensieve duurzaamheidsstrategie: “omdat het hoort”. Gezondheid en maatschappelijke verantwoordelijkheid zijn leidend, met economische haalbaarheid als noodzakelijke randvoorwaarde. Deze keuze sluit logisch aan bij zowel de individuele reflecties als het probleem uit Sprint 1 en wordt onderbouwd door het Triple Bottom Line-model, MVO-theorie en inzichten uit gedragspsychologie.
  </>,
]

const bronnen: Bron[] = [
  {
    id: 'bron-cbs-2023',
    content: (
      <>
        Centraal Bureau voor de Statistiek. (2023). <em>(On)gezonde leefstijl 2022: Opvattingen, motieven en gedragingen — hoofdstuk 2: (On)gezond eten</em>. CBS.{' '}
        <a
          href="https://www.cbs.nl/nl-nl/longread/rapportages/2023/on--gezonde-leefstijl-2022-opvattingen-motieven-en-gedragingen/2--on--gezond-eten"
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
    id: 'bron-clear-2018',
    content: (
      <>
        Clear, J. (2018). <em>Atomic habits: An easy &amp; proven way to build good habits &amp; break bad ones</em>. Avery.
      </>
    ),
  },
  {
    id: 'bron-cramer-2005',
    content: (
      <>
        Cramer, J. (2005). <em>Ondernemen met hoofd en hart: Maatschappelijk verantwoord ondernemen in Nederland</em>. Van Gorcum.
      </>
    ),
  },
  {
    id: 'bron-elkington-1997',
    content: (
      <>
        Elkington, J. (1997). <em>Cannibals with forks: The triple bottom line of 21st century business</em>. Capstone.{' '}
        <a
          href="https://www.proquest.com/openview/804cc9d98196ef6e26d88748e89f8db0/1?pq-origsite=gscholar&cbl=35934"
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
    id: 'bron-hekking-2025',
    content: (
      <>
        Hekking, T. (2025). <em>Individueel verantwoordingsdossier TBI</em> [Ongepubliceerd werkstuk]. Windesheim.{' '}
        <Link
          href="/bronnen/opdracht-1/hekking-2025"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          Open bronpagina
        </Link>
      </>
    ),
  },
  {
    id: 'bron-michie-2011',
    content: (
      <>
        Michie, S., van Stralen, M. M., &amp; West, R. (2011). The behaviour change wheel: A new method for characterising and designing behaviour change interventions. <em>Implementation Science, 6</em>(1), 42.{' '}
        <a
          href="https://doi.org/10.1186/1748-5908-6-42"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://doi.org/10.1186/1748-5908-6-42
        </a>
      </>
    ),
  },
  {
    id: 'bron-mvo-2008',
    content: (
      <>
        MVO Nederland. (2008). <em>MVO omdat het hoort, moet of loont</em>.{' '}
        <a
          href="https://www.mvonederland.nl"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.mvonederland.nl
        </a>
      </>
    ),
  },
  {
    id: 'bron-rivm-2025',
    content: (
      <>
        Rijksinstituut voor Volksgezondheid en Milieu. (2025). <em>Overgewicht: jongeren</em>. VZinfo.{' '}
        <a
          href="https://www.vzinfo.nl/overgewicht/jongeren"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.vzinfo.nl/overgewicht/jongeren
        </a>
      </>
    ),
  },
  {
    id: 'bron-vermeir-verbeke-2006',
    content: (
      <>
        Vermeir, I., &amp; Verbeke, W. (2006). Sustainable food consumption: Exploring the consumer “attitude–behavioral intention” gap. <em>Journal of Agricultural and Environmental Ethics, 19</em>(2), 169–194.{' '}
        <a
          href="https://doi.org/10.1007/s10806-005-5485-3"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://doi.org/10.1007/s10806-005-5485-3
        </a>
      </>
    ),
  },
]

const paragraphStyle: React.CSSProperties = {
  lineHeight: 1.75,
  color: 'var(--text-secondary)',
}

const bulletStyle: React.CSSProperties = {
  lineHeight: 1.75,
  color: 'var(--text-secondary)',
}

export default function Opdracht2Page() {
  return (
    <>
      <PageHead
        number="02"
        label="Portfolio · Opdracht"
        title="Ambitieniveau duurzaamheid (groep)."
        lead="Groepsopdracht uit de module Toekomstbestendige Business Innovatie. Vijf samenvattingen van individuele ambitieniveaus, een gezamenlijke groepskeuze, onderbouwing op basis van Sprint 1, draagvlakborging en de centrale onderzoeksvragen voor de vervolgsprints."
        meta={[
          { key: 'Type', value: 'Groepsopdracht' },
          { key: 'Module', value: 'Toekomstbestendige Business Innovatie' },
          { key: 'Groep', value: 'Thijs H., Romeon S., Jesper v/d H., Thijs K., Twan V.' },
        ]}
      />

      {/* ONDERDEEL 1 — Samenvatting individueel ambitieniveau per student */}
      <section className="px-6 md:px-10 py-20">
        <SectionHeading
          eyebrow="Onderdeel 1 · Individuele ambitieniveaus"
          heading="Samenvatting individueel ambitieniveau (per student)."
        />

        <div className="grid gap-10 max-w-[820px]">
          {studentBlocks.map((student) => (
            <div key={student.name} className="grid gap-3">
              <h3
                className="text-[20px] md:text-[22px]"
                style={{
                  fontFamily: 'var(--font-instrument-serif)',
                  color: 'var(--text-primary)',
                  lineHeight: 1.3,
                }}
              >
                {student.name} — <span style={{ color: 'var(--accent-mint)' }}>{student.ambitie}</span>
              </h3>
              <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
                {student.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ONDERDEEL 2 — Groepskeuze ambitieniveau */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="Onderdeel 2 · Groepskeuze"
          heading="Groepskeuze ambitieniveau duurzaamheid."
        />

        <div className="grid gap-8 max-w-[820px]">
          {groepskeuzeParagraphs.map((paragraph, i) => (
            <p key={i} className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* ONDERDEEL 3 — Beschrijven, analyseren, onderbouwen */}
      <section
        className="px-6 md:px-10 py-20"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <SectionHeading
          eyebrow="Onderdeel 3 · Onderbouwing"
          heading="Beschrijven, analyseren en onderbouwen van de groepskeuze."
        />

        <div className="grid gap-10 max-w-[820px]">
          {/* Beschrijving */}
          <div className="grid gap-4">
            <h3
              className="text-[22px] md:text-[24px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              Beschrijving van het ambitieniveau
            </h3>
            {beschrijvingParagraphs.map((paragraph, i) => (
              <p key={i} className="text-[17px] md:text-[18px]" style={paragraphStyle}>
                {paragraph}
              </p>
            ))}
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              “Hoort” betekent voor ons:
            </p>
            <ul
              className="grid gap-2 list-disc"
              style={{
                paddingLeft: '1.5rem',
                ...bulletStyle,
              }}
            >
              {hoortPunten.map((punt, i) => (
                <li key={i} className="text-[17px] md:text-[18px]">
                  {punt}
                </li>
              ))}
            </ul>
          </div>

          {/* Analyse — Mate van toewijding */}
          <div className="grid gap-4">
            <h3
              className="text-[22px] md:text-[24px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              Analyse — Mate van toewijding
            </h3>
            {toewijdingParagraphs.map((paragraph, i) => (
              <p key={i} className="text-[17px] md:text-[18px]" style={paragraphStyle}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Analyse — Balans economische en maatschappelijke doelen */}
          <div className="grid gap-4">
            <h3
              className="text-[22px] md:text-[24px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              Analyse — Balans economische en maatschappelijke doelen
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              {balansIntro}
            </p>
            <ul
              className="grid gap-2 list-disc"
              style={{
                paddingLeft: '1.5rem',
                ...bulletStyle,
              }}
            >
              {balansBullets.map((bullet, i) => (
                <li key={i} className="text-[17px] md:text-[18px]">
                  {bullet}
                </li>
              ))}
            </ul>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              {balansSlot}
            </p>
          </div>

          {/* Analyse — Korte vs lange termijn */}
          <div className="grid gap-4">
            <h3
              className="text-[22px] md:text-[24px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              Analyse — Korte vs. lange termijn focus
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              {termijnIntro}
            </p>
            <ul
              className="grid gap-2 list-disc"
              style={{
                paddingLeft: '1.5rem',
                ...bulletStyle,
              }}
            >
              {termijnBullets.map((bullet, i) => (
                <li key={i} className="text-[17px] md:text-[18px]">
                  {bullet}
                </li>
              ))}
            </ul>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              {termijnSlot}
            </p>
          </div>
        </div>
      </section>

      {/* ONDERDEEL 4 — Draagvlak en commitment */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="Onderdeel 4 · Draagvlak"
          heading="Draagvlak en commitment binnen de groep."
        />

        <div className="grid gap-6 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            {draagvlakIntro}
          </p>
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            {draagvlakSubintro}
          </p>
          <ol
            className="grid gap-2 list-decimal"
            style={{
              paddingLeft: '1.5rem',
              ...bulletStyle,
            }}
          >
            {commitmentBullets.map((bullet, i) => (
              <li key={i} className="text-[17px] md:text-[18px]">
                {bullet}
              </li>
            ))}
          </ol>
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            {draagvlakSlot}
          </p>
        </div>
      </section>

      {/* ONDERDEEL 5 — Onderzoeksvragen */}
      <section
        className="px-6 md:px-10 py-20"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <SectionHeading
          eyebrow="Onderdeel 5 · Onderzoeksvragen"
          heading="Belangrijkste onderzoeksvragen."
        />

        <div className="grid gap-6 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            {onderzoeksvragenIntro}
          </p>
          <ol
            className="grid gap-3 list-decimal"
            style={{
              paddingLeft: '1.5rem',
              ...bulletStyle,
            }}
          >
            {onderzoeksvragen.map((vraag, i) => (
              <li key={i} className="text-[17px] md:text-[18px]">
                {vraag}
              </li>
            ))}
          </ol>
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            {onderzoeksvragenSlot}
          </p>
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
          {conclusieParagraphs.map((paragraph, i) => (
            <p key={i} className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              {paragraph}
            </p>
          ))}
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
          style={{
            color: 'var(--text-secondary)',
          }}
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
