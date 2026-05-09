import Link from 'next/link'
import HeroLanding from '@/components/hero/HeroLanding'
import RubricIndex from '@/components/home/RubricIndex'
import FigureBlock from '@/components/rubric/FigureBlock'
import SectionHeading from '@/components/rubric/SectionHeading'
import ValuePerspectives from '@/components/rubric/ValuePerspectives'
import { rubrics } from '@/content/rubrics'

const conceptCards = [
  {
    label: 'Voor leerlingen',
    title: 'Samen iets doen in de pauze',
    text: 'Leerlingen starten korte challenges aan een vaste tafel. Het concept maakt samendoen makkelijker dan gedachteloos naar snacks of telefoon grijpen.',
  },
  {
    label: 'Voor school',
    title: 'Een zichtbare pauzevoorziening',
    text: 'De Table geeft scholen een concrete plek om sociaal, actief en bewuster pauzegedrag te stimuleren zonder dat een docent steeds hoeft te begeleiden.',
  },
  {
    label: 'In gebruik',
    title: 'Laagdrempelig en direct bruikbaar',
    text: 'De tafel is robuust, staat vast in aula of kantine en werkt met korte opdrachten die weinig uitleg vragen en geen telefoon nodig hebben.',
  },
]

export default function HomePage() {
  return (
    <>
      <HeroLanding
        eyebrow="Portfolio Waardecreatie · Challenge Table"
        title={{
          before: 'Challenge',
          highlight: 'Table',
          after: 'maakt de pauze sociaal.',
        }}
        lead="Een vaste interactieve pauzetafel voor middelbare scholen. Leerlingen doen er korte challenges samen, waardoor de pauze minder draait om automatisch snackgedrag en meer om directe sociale activiteit."
        primary={{ label: 'Bekijk hoe het werkt', href: '#hoe-het-werkt' }}
        secondary={{ label: 'Start de beoordelaarsroute', href: '/nieuwsgierigheid' }}
      />

      <section
        id="hoe-het-werkt"
        className="px-6 md:px-10 py-16 md:py-20"
        style={{ borderBottom: '0.5px solid var(--border)' }}
        aria-label="Wat is de Challenge Table?"
      >
        <SectionHeading
          eyebrow="Concept in het kort"
          heading="De Challenge Table maakt van de pauze een sociaal startmoment."
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,460px)] lg:items-start">
          <div className="grid gap-4 md:grid-cols-3">
            {conceptCards.map((card) => (
              <article
                key={card.label}
                className="p-6"
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '0.5px solid var(--border)',
                  borderRadius: '3px',
                }}
              >
                <span
                  className="mb-4 block text-[10px] uppercase"
                  style={{ letterSpacing: '0.2em', color: 'var(--accent-mint)' }}
                >
                  {card.label}
                </span>
                <h3
                  className="font-serif mb-4"
                  style={{
                    fontSize: '24px',
                    lineHeight: 1.15,
                    color: 'var(--text-primary)',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-[15px]"
                  style={{ lineHeight: 1.65, color: 'var(--text-secondary)' }}
                >
                  {card.text}
                </p>
              </article>
            ))}
          </div>

          <FigureBlock
            src="/Afbeelding-challenge-tafel-v1.png"
            alt="Visualisatie van de Challenge Table als interactieve pauzetafel"
            width={1024}
            height={1024}
            caption="Figuur 1. Visualisatie van de Challenge Table als vaste pauzetafel voor korte sociale challenges."
            insight="De afbeelding laat zien dat het concept geen losse game of campagne is, maar een fysieke plek in de schoolomgeving."
            sourceHref="/concept"
            sourceLabel="Bekijk conceptontwikkeling"
            fit="contain"
          />
        </div>
      </section>

      <section
        className="px-6 md:px-10 py-16 md:py-20"
        style={{
          borderBottom: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
        aria-label="Meervoudige waardecreatie"
      >
        <SectionHeading
          eyebrow="Meervoudige waardecreatie"
          heading="Het concept levert niet één soort waarde, maar verbindt gebruik, schoolcontext, businesscase en omgeving."
        />

        <div className="grid gap-8">
          <p
            className="max-w-[760px] text-[17px] md:text-[18px]"
            style={{ lineHeight: 1.7, color: 'var(--text-secondary)' }}
          >
            De Challenge Table is ontworpen vanuit meervoudige waardecreatie:
            een oplossing moet aantrekkelijk zijn voor leerlingen, uitvoerbaar
            voor scholen, economisch verdedigbaar en ecologisch verantwoord
            genoeg om langer mee te gaan.
          </p>

          <ValuePerspectives
            perspectives={[
              {
                label: 'Leerling',
                value: 'Sociale, actieve pauze',
                evidence: 'Korte challenges maken samen starten makkelijker dan individueel snack- of telefoongedrag.',
              },
              {
                label: 'School',
                value: 'Beter pauzeklimaat',
                evidence: 'Een vaste tafel maakt de interventie zichtbaar, beheerbaar en passend bij aula of kantine.',
              },
              {
                label: 'Economisch',
                value: 'Onderbouwde B2B-waarde',
                evidence: 'Prijsstrategie en PSM verbinden de gebruikswaarde aan een realistische schoolinvestering.',
              },
              {
                label: 'Ecologisch',
                value: 'Langlevend product',
                evidence: 'Scorecard en impactbepaling sturen op robuustheid, reparatie en bewuste materiaalkeuze.',
              },
            ]}
          />

          <Link
            href="/bronnen/opdracht-6"
            className="inline-flex self-start text-[12px] uppercase hover:opacity-80"
            style={{
              letterSpacing: '0.15em',
              color: 'var(--accent-mint)',
              textDecoration: 'none',
            }}
          >
            Bekijk onderbouwing in opdracht 6
          </Link>
        </div>
      </section>

      <RubricIndex
        eyebrow="Beoordelaarsroute"
        heading="Lees hierna hoe onderzoek, conceptontwikkeling, methoden en validatie zijn onderbouwd."
        items={rubrics}
      />
    </>
  )
}
