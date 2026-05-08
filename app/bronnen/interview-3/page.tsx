import Link from 'next/link'
import { ArrowLeft, FileText } from 'lucide-react'
import PageHead from '@/components/rubric/PageHead'
import SectionHeading from '@/components/rubric/SectionHeading'

export const metadata = {
  title: 'Interview 3 — 4 HAVO leerling, Stad & Esch · Challenge Cube',
}

const paragraphStyle: React.CSSProperties = {
  lineHeight: 1.75,
  color: 'var(--text-secondary)',
}

type QA = {
  speaker: 'Thijs' | 'Leerling'
  text: string
  isNote?: boolean
}

const transcript: QA[] = [
  { speaker: 'Thijs', text: 'Kun je jezelf kort voorstellen? Welke klas zit je in?' },
  { speaker: 'Leerling', text: 'Zit in 4 havo. Al drie jaar hier op Stad & Esch, dus ik ken de school wel.' },
  { speaker: 'Thijs', text: 'Hoe beleef je de pauzes hier op school?' },
  {
    speaker: 'Leerling',
    text: 'Ja, wel oké. Hang altijd met dezelfde groep jongens in de aula. Soms even naar buiten, maar eigenlijk blijven we gewoon zitten. Elke dag hetzelfde, eigenlijk.',
  },
  { speaker: 'Thijs', text: 'En wat doen jullie dan precies?' },
  {
    speaker: 'Leerling',
    text: 'Kletsen, op je telefoon zitten. En dan gaat er altijd wel iemand wat halen bij de automaat — dan ga je gewoon vanzelf mee.',
  },
  { speaker: 'Thijs', text: 'Haal jij zelf ook weleens iets?' },
  {
    speaker: 'Leerling',
    text: 'Ja, bijna elke dag. Chips of een reep ofzo. Gewoon omdat iedereen het doet, snap je. Je hebt niet eens altijd echt honger.',
  },
  { speaker: 'Thijs', text: 'Is het meer een gewoonte dan echte behoefte?' },
  {
    speaker: 'Leerling',
    text: 'Ja, wel eigenlijk. Als mijn vrienden niet zouden gaan, zou ik het zelf ook veel minder snel doen. Het hoort er een beetje bij.',
  },
  { speaker: 'Thijs', text: 'Hebben je vrienden dan invloed op wat jij eet?' },
  {
    speaker: 'Leerling',
    text: 'Zeker. Als iemand zegt "gaan we even wat halen?" sta je al op voor je er erg in hebt.',
  },
  {
    speaker: 'Thijs',
    text: 'Snackgedrag sterk sociaal gedreven — niet bepaald door honger of bewuste keuze.',
    isNote: true,
  },
  { speaker: 'Thijs', text: 'Vind je de pauze soms een beetje saai?' },
  {
    speaker: 'Leerling',
    text: 'Ja, eerlijk gezegd wel. Zeker als je al weken hetzelfde doet. Telefoon wordt ook op een gegeven moment saai. Zou wel meer willen doen, maar er is hier gewoon niet veel.',
  },
  { speaker: 'Thijs', text: 'Wat zou je dan leuk vinden?' },
  {
    speaker: 'Leerling',
    text: 'Iets met de groep. Geen sport per se, maar zoiets als een spel of uitdaging. Iets waarover je kan lachen met je vrienden. Dat mis je hier wel.',
  },
  { speaker: 'Thijs', text: 'Houd je van competitie en spelletjes in groepsverband?' },
  {
    speaker: 'Leerling',
    text: 'Ja, absoluut. Ik hou van winnen, haha. Maar ook gewoon van meedoen. Als het er gezellig bij is, maakt het eigenlijk niet uit wat je doet.',
  },
  {
    speaker: 'Thijs',
    text: 'Toont afbeelding van de Challenge Table en legt het concept uit: een speeltafel in de aula met challenges als quizvragen, actieopdrachten, puzzels en breinkrakers, als sociaal alternatief voor de pauze.',
    isNote: true,
  },
  { speaker: 'Thijs', text: 'Wat is jouw eerste indruk?' },
  {
    speaker: 'Leerling',
    text: 'Wauw, dat ziet er echt gaaf uit. Zoiets zou ik hier wel willen hebben. De kleuren zijn ook cool — het trekt meteen je aandacht. En het is gewoon anders dan de rest van de aula.',
  },
  { speaker: 'Thijs', text: 'Wat spreekt je het meeste aan?' },
  {
    speaker: 'Leerling',
    text: 'Dat er verschillende soorten challenges zijn. Niet alleen quiz, maar ook actie en puzzels. Ik ben niet zo van de moeilijke vragen, maar die actie-opdrachten lijken me echt leuk. Dan kan je ook gewoon lachen met je vrienden.',
  },
  { speaker: 'Thijs', text: 'Kun je je voorstellen dat je hieraan meedoet met je vrienden?' },
  {
    speaker: 'Leerling',
    text: 'Ja, zeker. Mijn groep zou hier denk ik meteen aan willen meedoen. We zijn al competitief op andere vlakken, dus dit past er wel bij.',
  },
  { speaker: 'Thijs', text: 'Als de Challenge Table in de aula zou staan — zou jij er dan naartoe gaan?' },
  {
    speaker: 'Leerling',
    text: 'Ja, ik denk het wel. Zeker in het begin, want het is nieuw. Maar ik denk ook dat het blijft hangen als de challenges goed zijn. Als er steeds nieuwe dingen bijkomen, kom je steeds terug.',
  },
  { speaker: 'Thijs', text: 'Onder welke omstandigheden zou jij de tafel zeker gebruiken?' },
  {
    speaker: 'Leerling',
    text: 'Als mijn vrienden er ook bij zijn. Dat is wel de voorwaarde, eigenlijk. Ik zou er ook wel naartoe gaan om even te kijken, maar echt meedoen doe ik liever met mensen die ik ken.',
  },
  { speaker: 'Thijs', text: 'Zou je er ook naartoe gaan als er nog niemand van je vrienden zit?' },
  {
    speaker: 'Leerling',
    text: 'Waarschijnlijk wel als er anderen aan het spelen zijn die ik een beetje ken. Want als het er gezellig uitziet, sluit je je er gewoon bij aan. Dan leer je misschien ook nog nieuwe mensen kennen.',
  },
  { speaker: 'Thijs', text: 'Wat zou jou ervan weerhouden?' },
  {
    speaker: 'Leerling',
    text: 'Als het er verlaten bij staat en niemand het gebruikt. Dan voel je je raar als je er alleen naartoe gaat. Het moet wel duidelijk leven in de aula.',
  },
  {
    speaker: 'Thijs',
    text: 'Drempel voor gebruik laag zodra de tafel sociaal actief is. Sociale omgeving is bepalend voor de keuze.',
    isNote: true,
  },
  {
    speaker: 'Thijs',
    text: 'Denk je dat je minder snel naar de automaat zou gaan als de Challenge Table er stond?',
  },
  {
    speaker: 'Leerling',
    text: 'Ja, eerlijk gezegd wel. Als je bezig bent met een challenge, denk je niet meer aan eten. Nu ga je naar de automaat omdat er niets anders is — als er wel iets te doen is, verandert dat gewoon.',
  },
  { speaker: 'Thijs', text: 'Of zou je het combineren?' },
  {
    speaker: 'Leerling',
    text: 'Misschien in het begin nog. Maar op een gegeven moment kies je toch. Ik denk dat de tafel wint als hij echt leuk is.',
  },
  { speaker: 'Thijs', text: 'Heb je nog suggesties om de tafel aantrekkelijker te maken?' },
  {
    speaker: 'Leerling',
    text: 'Misschien een scorebord erbij? Dan zie je wie er die week het beste scoort. Maakt het competitiever. En misschien beloningen, zoals een gratis drankje als je een challenge wint. Dan is er nog meer reden om mee te doen.',
  },
  { speaker: 'Thijs', text: 'Nog iets wat je wil toevoegen?' },
  {
    speaker: 'Leerling',
    text: 'Niet echt. Alleen dat ik het echt een goed plan vind. Er is nu gewoon te weinig te doen in de pauze. Dit zou echt iets toevoegen. Ik hoop dat ze het echt gaan doen.',
  },
]

const inzichten: { label: string; text: string }[] = [
  {
    label: 'Sociaal gedrag bepaalt de pauze',
    text: 'Pauzegedrag wordt volledig bepaald door de groep: snacken, stilzitten en bewegen zijn sociale rituelen. De respondent heeft niet eens altijd honger — hij haalt toch iets omdat iedereen het doet. Dit bevestigt dat de pauze een sociaal moment is, geen functionele behoefte.',
  },
  {
    label: 'Lage gebruiksdrempel mits sociale activiteit',
    text: 'De respondent gaat zeker naar de Challenge Table als de tafel "leeft". Een verlaten tafel is de grootste drempel: dan voel je je raar als je er alleen naartoe gaat. Zodra anderen spelen, sluit hij zich gewoon aan. De eerste gebruikers zijn daarmee bepalend voor de bredere adoptie.',
  },
  {
    label: 'Actie boven kennis',
    text: '"Ik ben niet zo van de moeilijke vragen, maar die actie-opdrachten lijken me echt leuk." Prestatie is niet de primaire motivatie — plezier en lachen met vrienden wel. Actieopdrachten verlagen de drempel verder dan quizvragen.',
  },
  {
    label: 'Challenge Table als directe automaat-vervanger',
    text: '"Nu ga je naar de automaat omdat er niets anders is." De respondent verbindt snacken expliciet aan het ontbreken van alternatieven. Als de Challenge Table het vacuüm opvult, verdwijnt ook de automatische reflex om iets te halen.',
  },
  {
    label: 'Competitie en gamification als retentiefactor',
    text: 'Uit eigen beweging stelt de respondent een scorebord en beloningen voor. Competitie is intrinsiek aanwezig; de Challenge Table geeft daar een concreet kanaal voor. Zichtbare scores en kleine rewards verhogen de kans op terugkerend gebruik.',
  },
]

export default function Interview3Page() {
  return (
    <>
      <PageHead
        number="I–3"
        label="Portfolio · Interview"
        title="Interview: 4 HAVO leerling, Stad & Esch."
        lead="Semigestructureerd interview over gebruiksintentie van de Challenge Table. Afgenomen in Sprint 2 — conceptvalidatie rondom de Challenge Table als sociaal pauze-alternatief voor VO-scholieren."
        meta={[
          { key: 'Type', value: 'Semigestructureerd interview' },
          { key: 'Geïnterviewde', value: '4 HAVO leerling, anoniem' },
          { key: 'School', value: 'Stad & Esch, Meppel' },
          { key: 'Interviewer', value: 'Thijs Hekking' },
          { key: 'Sprint', value: 'Sprint 2 — Conceptvalidatie' },
        ]}
      />

      {/* GEEN OPNAME */}
      <section className="px-6 md:px-10 py-20">
        <SectionHeading eyebrow="Opname" heading="Geen audio-opname." />
        <div
          className="max-w-[820px] rounded-sm p-6 flex items-start gap-4"
          style={{
            border: '0.5px solid var(--border)',
            backgroundColor: 'var(--canvas-elevated)',
          }}
        >
          <FileText
            size={20}
            strokeWidth={1.5}
            style={{ color: 'var(--accent-mint)', flexShrink: 0, marginTop: 2 }}
          />
          <div className="grid gap-1">
            <p
              className="text-[13px] uppercase"
              style={{ letterSpacing: '0.15em', color: 'var(--text-muted)' }}
            >
              Schriftelijke notities
            </p>
            <p className="text-[15px]" style={{ lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              Stad & Esch stond geen audio-opname toe. Het interview is volledig meegeschreven tijdens het gesprek. De notities hieronder vormen de primaire bron.
            </p>
          </div>
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
        <SectionHeading eyebrow="Context" heading="Aanleiding en methode." />
        <div className="grid gap-6 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Dit interview is afgenomen als onderdeel van de conceptvalidatie in Sprint 2. Het doel: onderzoeken of een VO-scholier de Challenge Table in de aula zou gebruiken, en welke factoren zijn keuze bepalen. Bijzondere aandacht gaat uit naar de relatie tussen sociale context, gebruiksdrempel en het potentiële effect op snackgedrag.
          </p>
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            De respondent is een anonieme leerling in 4 HAVO op Stad & Esch in Meppel. Het interview is semigestructureerd afgenomen in de aula — de locatie waar de Challenge Table zou worden geplaatst. Thema's: achtergrond en pauzegedrag, snackgedrag, behoefte aan activiteit, eerste indruk van het concept, gebruiksintentie en effect op snackgedrag.
          </p>
        </div>
      </section>

      {/* NOTITIES */}
      <section
        className="px-6 md:px-10 py-20"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <SectionHeading eyebrow="Notities" heading="Gespreksnotities." />
        <div className="grid gap-0 max-w-[820px]">
          {transcript.map((qa, i) => (
            <div
              key={i}
              className="grid gap-1 py-4"
              style={{
                borderBottom: '0.5px solid var(--border)',
                gridTemplateColumns: '6rem 1fr',
                alignItems: 'start',
              }}
            >
              <span
                className="text-[12px] uppercase pt-[3px]"
                style={{
                  letterSpacing: '0.15em',
                  color: qa.isNote
                    ? 'var(--text-dim)'
                    : qa.speaker === 'Thijs'
                    ? 'var(--accent-mint)'
                    : 'var(--text-muted)',
                  fontFamily: 'var(--font-inter)',
                }}
              >
                {qa.isNote ? 'notitie' : qa.speaker}
              </span>
              <p
                className="text-[16px] md:text-[17px]"
                style={{
                  lineHeight: 1.75,
                  fontStyle: qa.isNote ? 'italic' : 'normal',
                  color: qa.isNote ? 'var(--text-dim)' : 'var(--text-secondary)',
                }}
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
        <SectionHeading eyebrow="Analyse" heading="Belangrijkste inzichten." />
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
