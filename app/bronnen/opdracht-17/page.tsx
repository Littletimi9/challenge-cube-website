import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import PageHead from '@/components/rubric/PageHead'
import SectionHeading from '@/components/rubric/SectionHeading'

export const metadata = {
  title: 'Opdracht 17 — Circulaire economie · Challenge Cube',
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

const bulletStyle: React.CSSProperties = {
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

type PBlock = {
  title: string
  paragraphs: React.ReactNode[]
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
    eyebrow: 'Onderdeel 1 · UPV',
    heading: 'Producentenverantwoordelijkheid.',
    paragraphs: [
      <>
        Voor de Challenge Table zijn er in Nederland in elk geval twee duidelijke vormen van uitgebreide producentenverantwoordelijkheid van toepassing: verpakkingen en elektrische en elektronische apparatuur. UPV betekent dat de producent of importeur niet stopt bij verkoop, maar ook verantwoordelijk blijft voor de afvalfase van het product, bijvoorbeeld via inzameling, recycling, hergebruik of financiering daarvan <Cite id="bron-business-2025">(business.gov.nl, 2025)</Cite>.
      </>,
      <>
        Voor verpakkingsmateriaal geldt dat producenten en importeurs wettelijk verantwoordelijk zijn voor preventie, inzameling en hergebruik van gebruikte verpakkingen. De uitvoerende organisatie hiervoor is Verpact, voorheen Afvalfonds Verpakkingen, die namens het verpakkende bedrijfsleven de regeling uitvoert en onder meer de inzameling, monitoring en financiering organiseert <Cite id="bron-verpact-2026">(Verpact, 2026)</Cite>.
      </>,
      <>
        Als de Challenge Table elektronica bevat, zoals een scherm, knoppen, bekabeling of een besturingssysteem, dan valt dat ook onder UPV voor elektrische en elektronische apparatuur. De uitvoerende organisatie in Nederland is Stichting OPEN, die verantwoordelijk is voor de inzameling en verwerking van e-waste via onder andere Wecycle <Cite id="bron-nederland-2026">(Nederland, 2026)</Cite>.
      </>,
    ],
  },
  {
    eyebrow: 'Onderdeel 2 · Logistieke keten',
    heading: 'Klassieke logistieke keten.',
    elevated: true,
    paragraphs: [
      <>
        De klassieke logistieke keten van de Challenge Table is een lineaire keten: grondstoffen, productie, assemblage, distributie, gebruik en afval. In zo’n traditionele keten worden materialen eerst gewonnen en verwerkt, daarna worden onderdelen geproduceerd, vervolgens geassembleerd en via logistiek naar de afnemer gebracht, waarna het product na gebruik meestal als afval eindigt <Cite id="bron-business-2025">(business.gov.nl, 2025)</Cite>.
      </>,
      'Voor de Challenge Table betekent dit concreet dat materialen zoals staal, houtachtige plaatmaterialen, elektronica, kunststof onderdelen en foam eerst uit verschillende productieketens komen. Daarna worden de onderdelen samengesteld tot één eindproduct, vervoerd naar scholen en daar gebruikt totdat er storingen, slijtage of veroudering optreden. In de klassieke keten eindigt het product daarna vaak als gemengd afval, terwijl de verschillende materiaalstromen dan juist nog gescheiden hadden kunnen worden.',
    ],
  },
  {
    eyebrow: 'Onderdeel 3 · Recycling',
    heading: 'Recyclingmogelijkheden.',
    paragraphs: [
      'De recyclingmogelijkheden van de Challenge Table verschillen sterk per onderdeel. Staal is technisch gezien zeer goed recyclebaar en kan zonder kwaliteitsverlies opnieuw worden omgesmolten, waardoor dit materiaal circulair gezien sterk is. Hout of plaatmateriaal kan soms worden hergebruikt of verwerkt tot nieuwe plaatstromen, maar dat hangt sterk af van lijm, coatings en de mate van demontage.',
      <>
        Elektronica is technisch recyclebaar, maar economisch vaak lastiger. Kleine onderdelen zoals printplaten, voedingen, kabels en displays bevatten waardevolle metalen, maar de inzameling, demontage en scheiding kosten relatief veel geld en arbeid. Daarom is de economische haalbaarheid beter wanneer onderdelen modulair en gemakkelijk los te halen zijn. Dat sluit ook aan bij het probleem dat e-waste in de praktijk lastig voldoende hoogwaardig wordt ingezameld en verwerkt <Cite id="bron-nederland-2026">(Nederland, 2026)</Cite>.
      </>,
      'Kunststoffen, foam en samengestelde delen zijn meestal het minst aantrekkelijk voor hoogwaardige recycling. Technisch kan er soms materiaalherwinning plaatsvinden, maar door verlijming, coatings en mengmaterialen is de kwaliteit vaak beperkt. Economisch is dit vooral haalbaar wanneer het om schone, uniforme stromen gaat. Voor de Challenge Table betekent dit dat onderdelen zo veel mogelijk demontabel en monomateriaal moeten worden ontworpen, zodat recycling later eenvoudiger en goedkoper wordt.',
    ],
  },
]

const pBlocks: PBlock[] = [
  {
    title: 'Prijs',
    paragraphs: [
      'Op prijsniveau kan de Challenge Table in de toekomst beter circulair worden gemaakt via een Product-as-a-Service-model. Daarbij verkoopt het bedrijf niet alleen het product, maar bijvoorbeeld ook gebruik, onderhoud en vervanging als dienst. Daardoor blijft de producent eigenaar van waardevolle onderdelen en wordt het financieel aantrekkelijk om het product langer mee te laten gaan en terug te nemen aan het einde van de levensduur.',
      'Een andere optie is een verwijderingsbijdrage of retourmodel, waarbij scholen of afnemers bij aanschaf al bijdragen aan inzameling en recycling. Ook true pricing kan helpen: dan worden verborgen milieukosten, zoals materiaalimpact, transport en afvalverwerking, beter zichtbaar in de prijs. Daardoor wordt een goedkope maar vervuilende oplossing minder aantrekkelijk dan een duurzamere variant.',
    ],
  },
  {
    title: 'Product',
    paragraphs: [
      'Bij het product zelf ligt de grootste kans in ecodesign. De Challenge Table kan circulair sterker worden door hem modulair, repareerbaar en demontabel te maken. Dat betekent bijvoorbeeld: losse schermen, vervangbare knoppen, standaard schroeven in plaats van permanente lijm, en onderdelen die eenvoudig uit elkaar te halen zijn.',
      'Ook de verpakking kan beter. Denk aan recyclebare kartonnen verpakkingen, minder folie en herbruikbare transportbescherming. Voor de kubus zelf en andere slijtende onderdelen is het slim om materialen te kiezen die lang meegaan en zo weinig mogelijk samengestelde lagen bevatten. Hoe eenvoudiger het ontwerp, hoe groter de kans dat onderdelen later opnieuw gebruikt of goed gerecycled kunnen worden.',
    ],
  },
  {
    title: 'Plaats',
    paragraphs: [
      'Bij plaats gaat het vooral om retourinzameling en logistiek. De Challenge Table kan worden aangesloten op een terugnameproces waarbij onderdelen of het hele product teruggaan naar de producent of een verwerkingspartner. Dat maakt het mogelijk om bruikbare onderdelen opnieuw in te zetten en waardevolle materiaalstromen niet te verliezen.',
      'Ook logistiek kan slimmer door lokaal of regionaal te werken. Als de eindassemblage dichter bij de afnemer plaatsvindt, zijn de transportafstanden kleiner en wordt de keten overzichtelijker. Voor scholen is het ook praktisch als onderhoud en vervanging van onderdelen regionaal geregeld kunnen worden, zodat defecten niet direct leiden tot volledige vervanging van het product.',
    ],
  },
  {
    title: 'Promotie',
    paragraphs: [
      'Bij promotie draait het om het sturen van consumentengedrag. Voor de Challenge Table kan dat door duidelijk te communiceren dat het product lang meegaat, repareerbaar is en teruggenomen wordt na gebruik. Daarmee wordt circulair gedrag normaal gemaakt en niet gepresenteerd als extra gedoe.',
      'Daarnaast kun je gedrag beïnvloeden met eenvoudige prikkels, zoals een retoursticker, uitleg over recycling, een zichtbaar onderhoudslabel of een beloningssysteem voor inlevering van oude onderdelen. Voor scholen werkt ook educatieve communicatie goed: laat zien dat circulair gebruik past bij duurzaamheid, kostenbesparing en verantwoordelijkheid. Zo wordt het product niet alleen gekocht, maar ook bewust gebruikt en teruggebracht.',
    ],
  },
]

const bronnen: Bron[] = [
  {
    id: 'bron-business-2025',
    content: <>Business.gov.nl. (2025). <em>Extended producer responsibility and circular product chains</em>.</>,
  },
  {
    id: 'bron-nederland-2026',
    content: <>Nederland. (2026). <em>Uitgebreide producentenverantwoordelijkheid voor elektrische en elektronische apparatuur</em>.</>,
  },
  {
    id: 'bron-verpact-2026',
    content: <>Verpact. (2026). <em>Producentenverantwoordelijkheid voor verpakkingen</em>.</>,
  },
]

export default function Opdracht17Page() {
  return (
    <>
      <PageHead
        number="17"
        label="Portfolio · Opdracht"
        title="Circulaire economie."
        lead="Uitwerking van producentenverantwoordelijkheid, de klassieke logistieke keten, recyclingmogelijkheden en manieren om de keten van de Challenge Table beter te sluiten."
        meta={[
          { key: 'Type', value: 'Groepsopdracht' },
          { key: 'Module', value: 'Toekomstbestendige Business Innovatie' },
          { key: 'Thema', value: 'Circulariteit & ketenontwerp' },
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
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading eyebrow="Onderdeel 4 · Ketensluiting" heading="Keten beter sluiten." />

        <div className="grid gap-10 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            De keten van de Challenge Table kan beter gesloten worden via de vier P’s: prijs, product, plaats en promotie. Samen maken deze keuzes circulariteit niet alleen technisch mogelijk, maar ook organisatorisch en gedragsmatig uitvoerbaar.
          </p>

          <div
            className="grid gap-6 md:grid-cols-2"
            style={{ alignItems: 'stretch' }}
          >
            {pBlocks.map((block) => (
              <article
                key={block.title}
                className="p-6 grid gap-4"
                style={{
                  border: '0.5px solid var(--border)',
                  backgroundColor: 'var(--surface)',
                }}
              >
                <h3
                  className="text-[24px]"
                  style={{
                    fontFamily: 'var(--font-instrument-serif)',
                    color: 'var(--text-primary)',
                    lineHeight: 1.2,
                  }}
                >
                  {block.title}
                </h3>
                <ul
                  className="grid gap-3 list-disc"
                  style={{
                    paddingLeft: '1.25rem',
                    ...bulletStyle,
                  }}
                >
                  {block.paragraphs.map((paragraph, i) => (
                    <li key={i} className="text-[15px] md:text-[16px]">
                      {paragraph}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

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
