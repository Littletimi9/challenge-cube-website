import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import PageHead from '@/components/rubric/PageHead'
import SectionHeading from '@/components/rubric/SectionHeading'

export const metadata = {
  title: 'Interview 2 — Twee VMBO-leerlingen, jaar 3 · Challenge Cube',
}

const paragraphStyle: React.CSSProperties = {
  lineHeight: 1.75,
  color: 'var(--text-secondary)',
}

type QA = {
  speaker: 'Thijs' | 'VMBO leerling 1' | 'VMBO leerling 2'
  text: string
}

const transcript: QA[] = [
  {
    speaker: 'Thijs',
    text: 'Ik ben hier met twee jongens, we zitten in de derde klas. En welk niveau?',
  },
  { speaker: 'VMBO leerling 2', text: 'Vmbo.' },
  {
    speaker: 'Thijs',
    text: 'Vmbo, oké. Zou je kunnen beschrijven hoe een gemiddelde schooldag eruit ziet qua eten?',
  },
  { speaker: 'VMBO leerling 2', text: 'Studiedag?' },
  { speaker: 'Thijs', text: 'Ja, of schooldag.' },
  {
    speaker: 'VMBO leerling 1',
    text: 'Geen idee. Eigenlijk denk ik wel gewoon een beetje normaal gewoon. Een broodje op de middag, misschien een chocofast of hagelslag. In de ochtend eet ik altijd een bakje yoghurt.',
  },
  { speaker: 'VMBO leerling 2', text: 'Ik ook zoiets.' },
  { speaker: 'VMBO leerling 1', text: 'Avondeten is altijd afwisselend.' },
  {
    speaker: 'Thijs',
    text: 'Oké, oké. En haal je op zo\'n dag ook wel eens een tussendoortje of een snack?',
  },
  { speaker: 'VMBO leerling 2', text: 'Ja.' },
  {
    speaker: 'VMBO leerling 1',
    text: 'Ik haal het niet echt, maar wel gewoon van thuis ofzo, een snoepje ofzo.',
  },
  {
    speaker: 'Thijs',
    text: 'Oké. Dat is wel altijd lekker natuurlijk. En hoe vaak doen jullie dat ongeveer per week?',
  },
  { speaker: 'VMBO leerling 2', text: 'Eh... ook gewoon een tussendoortje?' },
  { speaker: 'Thijs', text: 'Ja, een tussendoortje, ja.' },
  {
    speaker: 'VMBO leerling 2',
    text: 'Ik niet. Nee, dan haal ik het niet echt bij, dat weet ik niet. Vijf keer zoiets. Ja? Als ik het van thuis meeneem, dan wel gewoon vijf keer.',
  },
  {
    speaker: 'Thijs',
    text: 'Oké. Maar als je het niet van huis meeneemt, dan haal je het...',
  },
  { speaker: 'VMBO leerling 1', text: 'Eén keer in de week, twee keer per week.' },
  {
    speaker: 'Thijs',
    text: 'Oké, oké. En op welke momenten kies je er meestal voor om iets ongezonds te eten?',
  },
  { speaker: 'VMBO leerling 2', text: 'Als ik er zin in heb.' },
  { speaker: 'Thijs', text: 'Als je er zin in hebt. Dus eigenlijk impuls?' },
  {
    speaker: 'VMBO leerling 1',
    text: 'Als je er zin in hebt in iets lekkers ofzo. En vaak is lekker wel ongezond. Of in het weekend eet je vaak wel wat...',
  },
  { speaker: 'VMBO leerling 2', text: 'Ja. Door de week. Ja.' },
  {
    speaker: 'Thijs',
    text: 'En houden jullie ook wel eens gezonde snacks? Snacktomaatjes, om het even wat te noemen?',
  },
  { speaker: 'VMBO leerling 1', text: 'Ik haal soms frambozen bij de Spar.' },
  { speaker: 'VMBO leerling 2', text: 'Frambozen.' },
  { speaker: 'Thijs', text: 'Oh, frambozen. Ja, die zijn wel lekker. Ja. En jij ook?' },
  { speaker: 'VMBO leerling 2', text: 'Nee, niet zo.' },
  {
    speaker: 'Thijs',
    text: 'Oké. En waar ben je op dat moment meestal? In de schoolkantine? Of de supermarkt? Of de snackbar?',
  },
  { speaker: 'VMBO leerling 2', text: 'Bij de Spar.' },
  {
    speaker: 'VMBO leerling 1',
    text: 'Ja, hier. Vaak buiten of binnen, ligt aan het weer.',
  },
  {
    speaker: 'Thijs',
    text: 'Oké. En denk je dat de plek waar je naartoe gaat ook invloed heeft op wat voor snack je haalt? Dus stel, je komt hier bij de Spar, dan kies je misschien voor frambozen. Maar als je dan bij de Albert Heijn hier een stukje verder gaat, dat je dan toch voor...',
  },
  {
    speaker: 'VMBO leerling 1',
    text: 'Nee, dat denk ik niet. Ik denk wel als je hier met de hele vriendengroep bent, dat je dan wel meestal vaak de neiging hebt om ook wel wat te halen.',
  },
  {
    speaker: 'VMBO leerling 1',
    text: 'Het ligt voor mij aan de prijs. De Spar is vaak wel een stuk duurder.',
  },
  { speaker: 'VMBO leerling 2', text: 'Ja, dat is ook zo.' },
  {
    speaker: 'Thijs',
    text: 'Hm. Oké. En hoeveel geven jullie gemiddeld uit per keer aan zo\'n snack?',
  },
  { speaker: 'VMBO leerling 2', text: 'Een euro. Zoiets.' },
  { speaker: 'VMBO leerling 1', text: 'Een euro, twee euro. Maar ook niet heel veel meer.' },
  { speaker: 'Thijs', text: 'Oké. Bewust?' },
  { speaker: 'VMBO leerling 2', text: 'Ja.' },
  {
    speaker: 'Thijs',
    text: 'Jullie staan dan ook wel stil bij de prijs. Het mag niet al te duur zijn. Jullie doen dat dus denk ik meestal samen en minder alleen.',
  },
  {
    speaker: 'VMBO leerling 1',
    text: 'Ik denk niet ofzo als ik naar schooltijd als de ene tot het zevende uur heeft en ik tot het vierde, dat ik even hier langs ga om even wat te halen. Het is wel gezelliger met elkaar.',
  },
  { speaker: 'Thijs', text: 'Ja. En hoe groot is de groep dan ongeveer?' },
  { speaker: 'VMBO leerling 1', text: 'Ik denk dat wij met negen of tien man zijn.' },
  { speaker: 'VMBO leerling 2', text: 'Ik denk rond negen.' },
  {
    speaker: 'Thijs',
    text: 'Oké. Het is wel een grote groep. Heb je ook wel eens meegemaakt dat je meeging voor de gezelligheid en eigenlijk niets wilde, maar dan toch even wat lekkers haalt omdat anderen dat ook doen?',
  },
  {
    speaker: 'VMBO leerling 2',
    text: 'Het is best vaak dat anderen ook niets halen.',
  },
  { speaker: 'VMBO leerling 1', text: 'Vaak ook gewoon voor de gezelligheid.' },
  {
    speaker: 'Thijs',
    text: 'Ja. Oké. Dus het is geen sprake van groepsdruk. Hoe kijk je zelf tegen het feit aan dat je regelmatig een snack haalt?',
  },
  {
    speaker: 'VMBO leerling 1',
    text: 'Niet per se voor het feit ongezond, want thuis eet je ook gewoon gezond. Maar wel dat ik de laatste tijd wat minder haal omdat je eigenlijk al best goed geld kunt besparen daarmee en dat dan voor andere dingen beter kan uitgeven.',
  },
  { speaker: 'Thijs', text: 'Ja. En hoe zit dat bij jou?' },
  { speaker: 'VMBO leerling 2', text: 'Ja. Ik heb eigenlijk geen idee.' },
  {
    speaker: 'Thijs',
    text: 'Zijn er ook weleens momenten dat je liever toch iets anders zou kiezen?',
  },
  {
    speaker: 'VMBO leerling 2',
    text: 'Nee, niet zo. Als ik honger heb en ik ben mijn eten vergeten, dan koop ik liever iets, want anders heb ik de hele dag honger.',
  },
  { speaker: 'Thijs', text: 'Ja, snap ik. Nou, dankjewel heren.' },
]

const inzichten: { label: string; text: string }[] = [
  {
    label: 'Impuls als primaire trigger',
    text: 'Beide leerlingen benoemen "als ik er zin in heb" als voornaamste reden voor een snack. Er is geen bewuste afweging vooraf — de keuze ontstaat in het moment, aangestuurd door zin en beschikbaarheid.',
  },
  {
    label: 'Prijs als harde grens',
    text: 'Het maximale bedrag per snack ligt consequent rond €1 tot €2. De Spar wordt expliciet als te duur benoemd. Prijs is geen bijzaak maar een actieve filter: wat te duur voelt, wordt overgeslagen.',
  },
  {
    label: 'Gezelligheid stuurt gedrag, niet groepsdruk',
    text: 'Met een vriendengroep van negen à tien man gaan ze regelmatig samen langs de Spar. Niet omdat er druk is, maar omdat het erbij hoort. De leerlingen benoemen het zelf als "gezelliger met elkaar" — de sociale context verhoogt de kans op aankoop, ook als anderen niets kopen.',
  },
  {
    label: 'Gezonde optie bestaat, maar is contextafhankelijk',
    text: 'Leerling 1 haalt soms frambozen — dat is geen uitzondering op de regel, maar een pragmatische keuze op basis van prijs en beschikbaarheid. Gezond snacken is niet afwezig; het vraagt wel een concreet alternatief dat past bij het moment.',
  },
  {
    label: 'Bewustwording door geld, niet door gezondheid',
    text: 'Leerling 1 geeft aan minder snacks te kopen vanwege kosten, niet vanwege gezondheidsoverwegingen. De motivatie om te veranderen zit bij deze doelgroep eerder in financieel bewustzijn dan in gezondheidsbewustzijn.',
  },
]

export default function Interview2Page() {
  return (
    <>
      <PageHead
        number="I–2"
        label="Portfolio · Interview"
        title="Interview: twee VMBO-leerlingen, jaar 3."
        lead="Kwalitatief groepsinterview over snackgedrag op school. Afgenomen in het kader van Sprint 1 — probleemverkenning rondom ongezonde voedingskeuzes bij scholieren tijdens schoolpauzes."
        meta={[
          { key: 'Type', value: 'Kwalitatief interview' },
          { key: 'Geïnterviewden', value: 'Twee leerlingen, VMBO jaar 3' },
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
            Twee VMBO-leerlingen, jaar 3 — volledige audio-opname
          </p>
          <audio
            controls
            style={{ width: '100%', accentColor: 'var(--accent-mint)' }}
          >
            <source src="/Twee vmbo leerlingen jaar 3.m4a" type="audio/mp4" />
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
            De geïnterviewden zijn twee leerlingen in het derde jaar van het VMBO. Het interview is semi-gestructureerd afgenomen in groepsverband — met een vaste vragenlijst als leidraad, maar met ruimte voor doorvragen en onderlinge uitwisseling tussen de leerlingen. De vragen zijn ingedeeld rond vier thema's: dagelijks eetpatroon, aankoopgedrag, sociale invloed en zelfperceptie.
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
                gridTemplateColumns: '8rem 1fr',
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
                      : qa.speaker === 'VMBO leerling 1'
                      ? 'var(--text-secondary)'
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
