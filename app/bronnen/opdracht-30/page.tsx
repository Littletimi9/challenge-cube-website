import Link from 'next/link'
import { ArrowLeft, Download } from 'lucide-react'
import PageHead from '@/components/rubric/PageHead'
import SectionHeading from '@/components/rubric/SectionHeading'

export const metadata = {
  title: 'Opdracht 30 — Moreel vraagstuk · Challenge Cube',
}

const paragraphStyle: React.CSSProperties = {
  lineHeight: 1.75,
  color: 'var(--text-secondary)',
}

type QA = {
  speaker: 'Jesper' | 'Thijs'
  text: string
}

const transcript: QA[] = [
  {
    speaker: 'Jesper',
    text: 'Nou ja, mijn situatie gaat weer over hetzelfde eigenlijk, als het net ook al een paar keer is genoemd. Maar dan net nog weer iets anders.',
  },
  {
    speaker: 'Jesper',
    text: 'Net als elk team hebben wij ook teamafspraken gemaakt. En daarin is gewoon bekend dat als je twee keer niet traint, dan mag je niet starten. Maar nu was het zo dat we in degradatiestrijd waren.',
  },
  {
    speaker: 'Jesper',
    text: 'En onze trainer die had een speler van een ander team, ons zaalteam. En die spelen best wel hoog. Die kunnen ook best wel wat met een bal.',
  },
  {
    speaker: 'Jesper',
    text: 'Die had hij meegevraagd. En die had hij ook gelijk in de basis gezet. Terwijl hij dus niet twee keer had getraind.',
  },
  {
    speaker: 'Jesper',
    text: 'Dat ging ten koste van iemand die wel twee keer had getraind, die normaal op die positie speelt. Dus ja, toen werd dat tijdens de bespreking gezegd. En ik heb er niks van gezegd.',
  },
  {
    speaker: 'Jesper',
    text: 'Het hele team niet. De aanvoerder niet. Dus ja, daar mag je wat van vinden.',
  },
  {
    speaker: 'Jesper',
    text: 'Is het terecht? We zijn wel een prestatieteam. En het is tegen degradatie. Dat is een beetje de afweging dan.',
  },
  {
    speaker: 'Thijs',
    text: 'Dat leidt tot de centrale vraag. Is het gerechtvaardig dat een trainer afwijkt van teamafspraken over de basisopstelling, als dat ten koste gaat van eerlijkheid en vertrouwen? Dat is natuurlijk een moreel vraagstuk.',
  },
  {
    speaker: 'Thijs',
    text: 'Afspraken moeten voor iedereen gelden. Ook voor de trainer. De trainer handelde oneerlijk en brak eigenlijk zijn eigen regels.',
  },
  {
    speaker: 'Thijs',
    text: 'Daardoor komt de gelijke behandeling onder druk te staan. Teamdynamiek leidt eronder. Vertrouwen in de trainer neemt af.',
  },
  {
    speaker: 'Thijs',
    text: 'Spelers raken minder gemotiveerd. En de stilte van het team betekent niet dat de keuze goed was.',
  },
  {
    speaker: 'Thijs',
    text: 'De conclusie? Een trainer mag keuzes aanpassen. Maar dat moet eerlijk, duidelijk en uitlegbaar gebeuren. Zonder uitleg beschadigt hij het vertrouwen en de teamcultuur.',
  },
  {
    speaker: 'Thijs',
    text: 'Misschien een goede aanvulling. Misschien had hij het kunnen overleggen met het team voordat hij de keuze maakte.',
  },
]

const inzichten: { label: string; text: string }[] = [
  {
    label: 'Regels gelden voor iedereen — ook de trainer',
    text: 'Teamafspraken werken alleen als ze consequent worden gehandhaafd, ongeacht rang of rol. Zodra een leidinggevende afwijkt zonder uitleg, ondermijnt dat de legitimiteit van de afspraken voor de hele groep.',
  },
  {
    label: 'Stilte is geen instemming',
    text: 'Het team zweeg, maar dat betekent niet dat de keuze werd geaccepteerd. Collectieve stilte in hiërarchische situaties is vaak het gevolg van ongemak of machteloosheid — niet van goedkeuring.',
  },
  {
    label: 'Resultaatdruk als rechtvaardiging voor oneerlijkheid',
    text: 'De degradatiedruk maakte de beslissing begrijpelijk, maar ethisch niet per se juist. In prestatiegerichte omgevingen worden resultaten regelmatig boven eerlijkheid gesteld — een klassieke morele spanning.',
  },
  {
    label: 'Transparantie als sleuteloplossing',
    text: 'De kern van het probleem was niet de keuze zelf, maar de manier waarop die werd gemaakt: zonder overleg. Door het team vooraf te betrekken had de trainer draagvlak kunnen creëren en het vertrouwen intact kunnen houden.',
  },
]

export default function Opdracht30Page() {
  return (
    <>
      <PageHead
        number="30"
        label="Portfolio · Opdracht"
        title="Moreel vraagstuk: afwijken van teamafspraken."
        lead="Mondelinge presentatie en analyse van een moreel dilemma rondom eerlijkheid, vertrouwen en leiderschap in een sportteam. Jesper presenteert de casus; Thijs Hekking analyseert de ethische dimensies."
        meta={[
          { key: 'Type', value: 'Mondelinge presentatie' },
          { key: 'Casus', value: 'Jesper' },
          { key: 'Analyse', value: 'Thijs Hekking' },
          { key: 'Opdracht', value: 'Opdracht 30' },
        ]}
      />

      {/* PRESENTATIE */}
      <section className="px-6 md:px-10 py-20">
        <SectionHeading
          eyebrow="Presentatie"
          heading="Presentatieslides."
        />

        <div
          className="max-w-[820px] rounded-sm p-6 grid gap-4"
          style={{
            border: '0.5px solid var(--border)',
            backgroundColor: 'var(--canvas-elevated)',
          }}
        >
          <p
            className="text-[13px] uppercase"
            style={{
              letterSpacing: '0.15em',
              color: 'var(--text-muted)',
            }}
          >
            Opdracht 30 — presentatieslides (.pptx)
          </p>
          <p className="text-[15px]" style={paragraphStyle}>
            De slides zijn gebruikt tijdens de mondelinge presentatie van het morele vraagstuk. Download het bestand om de presentatie volledig te bekijken.
          </p>
          <a
            href="/Opdracht_30_presentatie.pptx"
            download
            className="inline-flex items-center gap-2 text-[13px] uppercase hover:opacity-80 transition-opacity"
            style={{
              letterSpacing: '0.15em',
              color: 'var(--accent-mint)',
              width: 'fit-content',
            }}
          >
            <Download size={14} strokeWidth={1.5} />
            Download presentatie
          </a>
        </div>
      </section>

      {/* OPNAME */}
      <section
        className="px-6 md:px-10 py-20"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <SectionHeading
          eyebrow="Opname"
          heading="Audio-opname."
        />

        <div
          className="max-w-[820px] rounded-sm p-6 grid gap-3"
          style={{
            border: '0.5px solid var(--border)',
            backgroundColor: 'var(--canvas-elevated)',
          }}
        >
          <p
            className="text-[13px] uppercase"
            style={{
              letterSpacing: '0.15em',
              color: 'var(--text-muted)',
            }}
          >
            Opdracht 30 — volledige audio-opname
          </p>
          <audio
            controls
            style={{ width: '100%', accentColor: 'var(--accent-mint)' }}
          >
            <source src="/Opdracht 30.m4a" type="audio/mp4" />
            Je browser ondersteunt geen audio-element.
          </audio>
        </div>
      </section>

      {/* CONTEXT */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="Context"
          heading="Aanleiding en methode."
        />

        <div className="grid gap-6 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Deze opdracht betreft een mondelinge presentatie over een moreel dilemma. Jesper presenteert een situatie uit zijn voetbalteam: een trainer zette een speler in de basis die niet aan de gestelde trainingseis had voldaan, ten koste van een speler die dat wél deed. Dit gebeurde tijdens een degradatiestrijd, waarbij het resultaat zwaarder woog dan de gemaakte afspraken.
          </p>
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Als reactie analyseerde Thijs Hekking de ethische dimensies van het vraagstuk: gelijke behandeling, vertrouwen in leiderschap, teamdynamiek en de spanning tussen prestatiegerichtheid en eerlijkheid. De respons is onderbouwd met een conclusie en aanbeveling gericht op transparant overleg als alternatief voor eenzijdige besluitvorming.
          </p>
        </div>
      </section>

      {/* TRANSCRIPT */}
      <section
        className="px-6 md:px-10 py-20"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <SectionHeading
          eyebrow="Transcript"
          heading="Volledig transcript."
        />

        <div className="grid gap-0 max-w-[820px]">
          {transcript.map((qa, i) => (
            <div
              key={i}
              className="grid gap-1 py-4"
              style={{
                borderBottom: '0.5px solid var(--border)',
                gridTemplateColumns: '5rem 1fr',
                alignItems: 'start',
              }}
            >
              <span
                className="text-[12px] uppercase pt-[3px]"
                style={{
                  letterSpacing: '0.15em',
                  color:
                    qa.speaker === 'Thijs'
                      ? 'var(--accent-mint)'
                      : 'var(--text-muted)',
                  fontFamily: 'var(--font-inter)',
                }}
              >
                {qa.speaker}
              </span>
              <p
                className="text-[16px] md:text-[17px]"
                style={paragraphStyle}
              >
                {qa.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INZICHTEN */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="Analyse"
          heading="Belangrijkste inzichten."
        />

        <div className="grid gap-8 max-w-[820px]">
          {inzichten.map((inzicht, i) => (
            <div key={i} className="grid gap-2">
              <h3
                className="text-[18px] md:text-[20px]"
                style={{
                  fontFamily: 'var(--font-instrument-serif)',
                  color: 'var(--text-primary)',
                  lineHeight: 1.3,
                }}
              >
                {inzicht.label}
              </h3>
              <p className="text-[16px] md:text-[17px]" style={paragraphStyle}>
                {inzicht.text}
              </p>
            </div>
          ))}
        </div>
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
