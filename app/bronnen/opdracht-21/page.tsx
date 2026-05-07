import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import PageHead from '@/components/rubric/PageHead'
import SectionHeading from '@/components/rubric/SectionHeading'

export const metadata = {
  title: 'Opdracht 21 — Customer Journey SOLL · Challenge Cube',
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

export default function Opdracht21Page() {
  return (
    <>
      <PageHead
        number="21"
        label="Portfolio · Opdracht"
        title="Customer Journey SOLL."
        lead="Groepsopdracht. De SOLL Customer Journey beschrijft de gewenste situatie van het eetgedrag van scholieren, waarbij interventies zoals gamification, sociale invloed en betere keuze-architectuur gezonde en bewuste keuzes stimuleren."
        meta={[
          { key: 'Type', value: 'Groepsopdracht' },
          { key: 'Tool', value: 'Customer Journey Map' },
          { key: 'Situatie', value: 'SOLL (gewenste situatie)' },
        ]}
      />

      {/* Inleiding */}
      <section className="px-6 md:px-10 py-20">
        <SectionHeading
          eyebrow="Inleiding"
          heading="Customer Journey SOLL."
        />
        <div className="grid gap-8 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            De SOLL Customer Journey beschrijft de gewenste situatie van het eetgedrag van scholieren. In deze versie is gekeken hoe de klantreis kan worden verbeterd door middel van interventies zoals gamification, sociale invloed en betere keuze-architectuur. Het doel is om gezondere en bewustere keuzes te stimuleren binnen dezelfde klantreis.
          </p>
        </div>
      </section>

      {/* Canvas — SOLL afbeelding */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="Customer Journey SOLL · Canvas"
          heading="SOLL-canvas."
        />
        <div className="grid gap-8 max-w-[820px]">
          <figure style={{ margin: '0', padding: '0', maxWidth: '505px' }}>
            <a href="/Customer_journey_SOLL.png" target="_blank" rel="noopener noreferrer" style={{ display: 'block', cursor: 'zoom-in' }}>
              <Image
                src="/Customer_journey_SOLL.png"
                alt="Customer Journey Map SOLL — gewenste situatie met interventies per fase"
                width={505}
                height={285}
                unoptimized
                style={imgStyle}
              />
            </a>
            <figcaption style={captionStyle}>
              Figuur 6 — Customer Journey SOLL: Gewenste klantreis met interventies per fase.
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
            De Customer Journey (SOLL-situatie) laat de gewenste situatie zien waarin het eetgedrag van scholieren positiever en bewuster wordt beïnvloed. De journey is opgebouwd volgens de fases awareness, consideration, decision, service en loyalty, met bijbehorende touchpoints, acties en verbeterpunten.
          </p>

          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            <strong style={phaseHeadingStyle}>Awareness: </strong>
            In de awareness fase begint de reis thuis en via externe prikkels zoals social media en ouders. Leerlingen worden hier meer bewust gemaakt van gezonde snackmomenten en het belang van eten plannen. Door reminders en visuele prikkels ontstaat er meer motivatie om vooraf na te denken over wat ze gaan eten, in plaats van alles op het moment zelf te beslissen.
          </p>

          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            <strong style={phaseHeadingStyle}>Consideration: </strong>
            In de consideration fase vindt de afweging plaats op school, bijvoorbeeld in de gangen, klas of via posters en vrienden. Leerlingen bespreken met elkaar gezondere opties en worden gestimuleerd om bewust te kiezen. De sociale omgeving speelt hier nog steeds een rol, maar wordt meer richting positief gedrag gestuurd.
          </p>

          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            <strong style={phaseHeadingStyle}>Decision: </strong>
            In de decision fase vindt de keuze plaats in de kantine, eventueel ondersteund door een Challenge Table en visuele displays. Leerlingen kiezen vaker voor gezondere opties doordat deze aantrekkelijker worden gepresenteerd en gekoppeld zijn aan een beloning of challenge. De beslissing wordt hierdoor minder impulsief en iets bewuster.
          </p>

          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            <strong style={phaseHeadingStyle}>Service: </strong>
            In de service fase eten leerlingen samen in de aula of tijdens groepsmomenten. Gezond eten wordt gecombineerd met sociale interactie en eventueel spelelementen van de challenge table. Hierdoor wordt het eetmoment positiever ervaren en ontstaat er een groepsgevoel rondom gezonde keuzes.
          </p>

          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            <strong style={phaseHeadingStyle}>Loyalty: </strong>
            In de loyalty fase wordt er kort gereflecteerd op de keuze tijdens de les of na de pauze. Door kleine herinneringen of sociale bevestiging wordt het positieve gedrag versterkt, waardoor de kans groter is dat dit patroon zich herhaalt.
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
            Samengevat zorgt deze SOLL-situatie ervoor dat het eetgedrag van scholieren minder automatisch en meer bewust wordt. Door sociale invloed, gamification en visuele ondersteuning worden gezonde keuzes aantrekkelijker en wordt het gedrag stap voor stap positiever beïnvloed.
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
