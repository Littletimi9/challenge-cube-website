import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import PageHead from '@/components/rubric/PageHead'
import SectionHeading from '@/components/rubric/SectionHeading'

export const metadata = {
  title: 'Opdracht 20 — Customer Journey IST · Challenge Cube',
}

type Bron = {
  id: string
  content: React.ReactNode
}

const bronnen: Bron[] = [
  {
    id: 'bron-rosenbaum-2017',
    content: (
      <>
        Rosenbaum, M. S., Otalora, M. L., &amp; Ramírez, G. C. (2017). How to create a realistic customer journey map.{' '}
        <em>Business Horizons, 60</em>(1), 143–150.{' '}
        <a
          href="https://doi.org/10.1016/j.bushor.2016.09.010"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://doi.org/10.1016/j.bushor.2016.09.010
        </a>
      </>
    ),
  },
  {
    id: 'bron-lemon-2016',
    content: (
      <>
        Lemon, K. N., &amp; Verhoef, P. C. (2016). Understanding customer experience throughout the customer journey.{' '}
        <em>Journal of Marketing, 80</em>(6), 69–96.{' '}
        <a
          href="https://doi.org/10.1177/0022242916629048"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://doi.org/10.1177/0022242916629048
        </a>
      </>
    ),
  },
]

const paragraphStyle: React.CSSProperties = {
  lineHeight: 1.75,
  color: 'var(--text-secondary)',
}

const imgStyle: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  borderRadius: '4px',
}

const captionStyle: React.CSSProperties = {
  marginTop: '0.75rem',
  fontSize: '14px',
  color: 'var(--text-muted)',
  lineHeight: 1.5,
}

const phaseHeadingStyle: React.CSSProperties = {
  color: 'var(--text-primary)',
}

export default function Opdracht20Page() {
  return (
    <>
      <PageHead
        number="20"
        label="Portfolio · Opdracht"
        title="Customer Journey IST."
        lead="Groepsopdracht. De IST Customer Journey beschrijft het huidige gedrag van scholieren rondom eten tijdens een schooldag, opgebouwd per fase met bijbehorende touchpoints, pijnpunten en kansen."
        meta={[
          { key: 'Type', value: 'Groepsopdracht' },
          { key: 'Tool', value: 'Customer Journey Map' },
          { key: 'Situatie', value: 'IST (huidige situatie)' },
        ]}
      />

      {/* Inleiding */}
      <section className="px-6 md:px-10 py-20">
        <SectionHeading
          eyebrow="Inleiding"
          heading="Customer Journey IST."
        />
        <div className="grid gap-8 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            De IST Customer Journey beschrijft het huidige gedrag van scholieren rondom eten tijdens een schooldag. Hierbij is gekeken naar de verschillende fases van de klantreis, de belangrijkste touchpoints en het gedrag dat op deze momenten plaatsvindt. De focus ligt op hoe leerlingen nu keuzes maken en welke factoren daar invloed op hebben.
          </p>
        </div>
      </section>

      {/* Canvas — drie afbeeldingen */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="Customer Journey IST · Canvas"
          heading="IST-canvas per fase."
        />
        <div className="grid gap-12 max-w-[820px]">
          <figure style={{ margin: '0', padding: '0', maxWidth: '1008px' }}>
            <a href="/Customer_journey_13.png" target="_blank" rel="noopener noreferrer" style={{ display: 'block', cursor: 'zoom-in' }}>
              <Image
                src="/Customer_journey_13.png"
                alt="Customer Journey Map IST — deel 1 van 3: awareness en consideration fases"
                width={1008}
                height={565}
                unoptimized
                style={imgStyle}
              />
            </a>
            <figcaption style={captionStyle}>
              Figuur 3 — Customer Journey IST (1/3): Awareness en consideration fases.
            </figcaption>
          </figure>

          <figure style={{ margin: '0', padding: '0', maxWidth: '1002px' }}>
            <a href="/Customer_journey_23.png" target="_blank" rel="noopener noreferrer" style={{ display: 'block', cursor: 'zoom-in' }}>
              <Image
                src="/Customer_journey_23.png"
                alt="Customer Journey Map IST — deel 2 van 3: decision en service fases"
                width={1002}
                height={562}
                unoptimized
                style={imgStyle}
              />
            </a>
            <figcaption style={captionStyle}>
              Figuur 4 — Customer Journey IST (2/3): Decision en service fases.
            </figcaption>
          </figure>

          <figure style={{ margin: '0', padding: '0', maxWidth: '543px' }}>
            <a href="/Customer_journey_33.png" target="_blank" rel="noopener noreferrer" style={{ display: 'block', cursor: 'zoom-in' }}>
              <Image
                src="/Customer_journey_33.png"
                alt="Customer Journey Map IST — deel 3 van 3: loyalty fase"
                width={543}
                height={365}
                unoptimized
                style={imgStyle}
              />
            </a>
            <figcaption style={captionStyle}>
              Figuur 5 — Customer Journey IST (3/3): Service en loyalty fases.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Analyse per fase */}
      <section
        className="px-6 md:px-10 py-20"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <SectionHeading
          eyebrow="Analyse · Fases"
          heading="Analyse per fase."
        />
        <div className="grid gap-8 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            De Customer Journey (IST-situatie) laat het huidige gedrag van scholieren zien rondom eten tijdens een schooldag. De journey is opgebouwd volgens de fases awareness, consideration, decision, service en loyalty, met bijbehorende touchpoints en gedragingen.
          </p>

          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            <strong style={phaseHeadingStyle}>Awareness: </strong>
            In de awareness fase zijn leerlingen vooral thuis en tijdens de les. Ze denken weinig bewust na over eten; ontbijt wordt soms overgeslagen en eten meenemen gebeurt niet altijd. Tijdens de les speelt eten geen rol en wordt er automatisch gedrag vertoond. Pas in de pauze ontstaat er een behoefte om iets te gaan halen samen in groepen.
          </p>

          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            <strong style={phaseHeadingStyle}>Consideration: </strong>
            In de consideration fase wordt kort overwogen wat ze gaan doen: naar de supermarkt of kantine, of niks kopen. Deze keuze wordt vooral bepaald door de groepsdynamiek en niet altijd honger en het feit dat ze even pauze hebben. Er is weinig sprake van een bewuste afweging.
          </p>

          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            <strong style={phaseHeadingStyle}>Decision: </strong>
            In de decision fase spelen drie situaties een rol: de supermarkt, het groepsgedrag en de kantine. In de supermarkt gaan leerlingen vaak met vrienden en kiezen ze snel iets, waarbij groepsinvloed en impulsaankopen belangrijk zijn. In de kantine is de keuze iets overzichtelijker, maar nog steeds snel en weinig bewust.
          </p>

          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            <strong style={phaseHeadingStyle}>Service: </strong>
            In de service fase wordt het eten gekocht en genuttigd. Bij de kassa worden soms nog extra dingen gepakt zonder nadenken. In de aula eten leerlingen vooral samen met vrienden, waardoor het een sociaal moment is.
          </p>

          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            <strong style={phaseHeadingStyle}>Loyalty: </strong>
            In de loyalty fase gaan leerlingen na de pauze terug naar de les zonder echt na te denken over hun keuze. Het gedrag wordt niet geëvalueerd en herhaalt zich daardoor dagelijks op dezelfde manier.
          </p>
        </div>
      </section>

      {/* Conclusie */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="Conclusie"
          heading="Samenvatting."
        />
        <div className="grid gap-8 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Samengevat is het eetgedrag van scholieren vooral automatisch en sociaal bepaald, met weinig bewuste keuzes.
          </p>
        </div>
      </section>

      {/* Bronnenlijst */}
      <section
        className="px-6 md:px-10 py-20"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <SectionHeading
          eyebrow="Bronnenlijst"
          heading="Bronnenlijst."
        />
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
