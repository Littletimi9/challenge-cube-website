import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import PageHead from '@/components/rubric/PageHead'
import SectionHeading from '@/components/rubric/SectionHeading'

export const metadata = {
  title: 'Interview 1 — Isa, 6 VWO · Challenge Cube',
}

const paragraphStyle: React.CSSProperties = {
  lineHeight: 1.75,
  color: 'var(--text-secondary)',
}

type QA = {
  speaker: 'Thijs' | 'Isa'
  text: string
}

const transcript: QA[] = [
  { speaker: 'Thijs', text: 'Hallo, ik ben hier met...' },
  { speaker: 'Isa', text: 'Isa.' },
  { speaker: 'Thijs', text: 'En in welke jaarlaag zit je?' },
  { speaker: 'Isa', text: 'Zes VWO.' },
  {
    speaker: 'Thijs',
    text: 'Kun je beschrijven hoe een gemiddelde schooldag eruit ziet qua eten?',
  },
  {
    speaker: 'Isa',
    text: "S'ochtends ontbijten, dan naar school, in de kleine pauze soms een lekker koekje. Dan verder eigenlijk niks. Dan ga je lunchen, dan heb je gewoon brood van jezelf mee. En dan heb je misschien een tussenuur en dan neem je misschien nog een keer wat lekkers. En dan ga je lekker naar huis.",
  },
  { speaker: 'Thijs', text: 'En wat voor lekkers is dat dan?' },
  {
    speaker: 'Isa',
    text: 'Ja, of een koekje, of een snoepje, of een chipje. Maar het kan ook fruit zijn.',
  },
  {
    speaker: 'Thijs',
    text: 'Haal je op zo\'n dag tussendoor wel eens een snack of broodje buiten de deur?',
  },
  {
    speaker: 'Isa',
    text: 'Nee, het is wel altijd in school.',
  },
  { speaker: 'Thijs', text: 'In de schoolkantine?' },
  {
    speaker: 'Isa',
    text: 'Ja, of bij iemand die geheim koekjes handelde.',
  },
  { speaker: 'Thijs', text: 'En hoe vaak gebeurt dat dan, ongeveer per week?' },
  {
    speaker: 'Isa',
    text: 'Nou, eerder per maand — twee, drie keer per maand. Wekelijks eigenlijk.',
  },
  {
    speaker: 'Thijs',
    text: 'Op welke momenten kies je meestal voor iets ongezonds? Tijdens school, na school, thuis of onderweg?',
  },
  {
    speaker: 'Isa',
    text: 'Vaak op school met vrienden. Dan heb je toch gewoon zin in iets lekkers, als je gezellig met elkaar zit.',
  },
  {
    speaker: 'Thijs',
    text: 'En waar ben je dan meestal? In de schoolkantine, de supermarkt, de aula?',
  },
  { speaker: 'Isa', text: 'In de aula.' },
  {
    speaker: 'Thijs',
    text: 'Wat maakt dat je juist op die plek of dat moment ongezond eet?',
  },
  {
    speaker: 'Isa',
    text: 'Omdat het gezellig is met vrienden en het is gewoon een plek waar je lekker kan zitten.',
  },
  {
    speaker: 'Thijs',
    text: 'Je zei al dat je bij een vriendin wat lekkers had gehaald. Hoeveel geld geef je daar ongeveer per keer aan uit?',
  },
  {
    speaker: 'Isa',
    text: 'Zij verkocht het voor €1,60 per koekje.',
  },
  {
    speaker: 'Thijs',
    text: 'Sta je op dat moment stil bij de prijs, of speelt dat nauwelijks een rol?',
  },
  {
    speaker: 'Isa',
    text: 'Soms wel. In de kantine is het altijd wat duur, dus dan ga ik dat niet halen. Want dan denk ik: zonde voor mijn geld. Maar een koekje van €1,60 vind ik niet heel duur. Dus dan maakt het me niet uit.',
  },
  {
    speaker: 'Thijs',
    text: 'Ben je meestal alleen of met anderen als je een snack eet?',
  },
  { speaker: 'Isa', text: 'Met vriendinnen.' },
  { speaker: 'Thijs', text: 'En met hoeveel mensen ben je dan meestal?' },
  {
    speaker: 'Isa',
    text: 'Het kan twee zijn, het kan acht zijn, het kan zes zijn. Het ligt aan de situatie.',
  },
  {
    speaker: 'Thijs',
    text: 'Heb je ook wel eens meegemaakt dat je eigenlijk niets wilde, maar dat je het toch deed omdat anderen het ook namen?',
  },
  {
    speaker: 'Isa',
    text: 'Ja, soms, maar niet vaak.',
  },
  {
    speaker: 'Thijs',
    text: 'Zou je dat omschrijven als groepsdruk, of meer als meegaan in het moment?',
  },
  { speaker: 'Isa', text: 'Meegaan in het moment.' },
  {
    speaker: 'Thijs',
    text: 'Hoe kijk je er zelf tegenaan dat je wel eens een snack eet?',
  },
  {
    speaker: 'Isa',
    text: 'Ja, moet kunnen toch? Als je het maar niet te vaak doet, dan is het goed.',
  },
  {
    speaker: 'Thijs',
    text: 'Zie je dat als iets tijdelijks, alleen op de middelbare school? Of als onderdeel van je leven en leefstijl?',
  },
  {
    speaker: 'Isa',
    text: 'Het gaat het hele leven door. Maar als je ouder wordt, ga je misschien wat gezondere snacks kiezen.',
  },
  {
    speaker: 'Thijs',
    text: 'Zijn er momenten waarop je bewust anders zou willen kiezen, maar dat toch niet doet — en dan toch de gezonde snack kiest?',
  },
  {
    speaker: 'Isa',
    text: 'Als je aan het sporten bent of zo, en je let op je voeding.',
  },
  { speaker: 'Thijs', text: 'Oké. Nou, dankjewel.' },
  { speaker: 'Isa', text: 'Dankjewel.' },
]

const inzichten: { label: string; text: string }[] = [
  {
    label: 'Sociale context als hoofdtrigger',
    text: 'Isa eet ongezonde snacks vrijwel uitsluitend in sociale situaties — in de aula, met vriendinnen. De plek en het gezelschap bepalen het gedrag, niet een bewuste keuze voor het product zelf.',
  },
  {
    label: 'Geen groepsdruk, wel groepsinvloed',
    text: 'Ze omschrijft het zelf als "meegaan in het moment", niet als groepsdruk. Dit bevestigt dat impulsgedrag in sociale context subtiel werkt: het gaat om aansluiting bij de sfeer, niet om directe sociale druk.',
  },
  {
    label: 'Prijsgevoeligheid als filter',
    text: 'De kantine vindt ze te duur. Een informeel aanbod van €1,60 per koekje voelt acceptabel. Prijs fungeert dus als drempel, maar een relatief lage prijs neemt die drempel weg — ook voor ongezonde opties.',
  },
  {
    label: 'Zelfregulering door normalisering',
    text: '"Moet kunnen toch?" — Isa normaliseert incidenteel ongezond eten als een gezond evenwicht. Ze verwacht als ze ouder wordt vanzelf gezondere keuzes te maken, zonder dat daar nu actief aan gewerkt hoeft te worden.',
  },
  {
    label: 'Gezonde keuze gekoppeld aan doel',
    text: 'Gezond kiezen koppelt ze alleen aan sporten of actief letten op voeding. Buiten dat kader is er geen intrinsieke motivatie voor gezonde snacks op school.',
  },
]

export default function Interview1Page() {
  return (
    <>
      <PageHead
        number="I–1"
        label="Portfolio · Interview"
        title="Interview: Isa, 6 VWO."
        lead="Kwalitatief interview over snackgedrag op school. Afgenomen in het kader van Sprint 1 — probleemverkenning rondom ongezonde voedingskeuzes bij scholieren tijdens schoolpauzes."
        meta={[
          { key: 'Type', value: 'Kwalitatief interview' },
          { key: 'Geïnterviewde', value: 'Isa, 6 VWO' },
          { key: 'Interviewer', value: 'Thijs Hekking' },
          { key: 'Sprint', value: 'Sprint 1 — Probleemverkenning' },
        ]}
      />

      {/* OPNAME */}
      <section className="px-6 md:px-10 py-20">
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
            Isa, 6 VWO — volledige audio-opname
          </p>
          <audio
            controls
            style={{ width: '100%', accentColor: 'var(--accent-mint)' }}
          >
            <source src="/Isa vwo 6 leerling.m4a" type="audio/mp4" />
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
            Dit interview is afgenomen als onderdeel van de probleemverkenning in Sprint 1. Het doel was om kwalitatief inzicht te krijgen in het snackgedrag van scholieren op school: wanneer kiezen ze voor ongezonds, wat drijft die keuze en welke rol spelen sociale context, prijs en eigen motivatie?
          </p>
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Isa is een leerling in 6 VWO. Het interview is semi-gestructureerd afgenomen — met een vaste vragenlijst als leidraad, maar met ruimte voor doorvragen op relevante antwoorden. De vragen zijn ingedeeld rond vier thema's: dagelijks eetpatroon, aankoopgedrag, sociale invloed en zelfperceptie.
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
