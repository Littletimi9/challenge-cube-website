import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import PageHead from '@/components/rubric/PageHead'
import SectionHeading from '@/components/rubric/SectionHeading'

export const metadata = {
  title: 'Focusgroep — Challenge Table · Challenge Cube',
}

const paragraphStyle: React.CSSProperties = {
  lineHeight: 1.75,
  color: 'var(--text-secondary)',
}

type Speaker = 'Begeleider 1' | 'Begeleider 2' | 'Leerling 1' | 'Leerling 2' | 'Leerling 3' | 'Leerling 4' | 'Leerling 5' | 'Leerling 6'

type QA = {
  speaker: Speaker
  text: string
}

function speakerColor(speaker: Speaker): string {
  if (speaker === 'Begeleider 1' || speaker === 'Begeleider 2') {
    return 'var(--accent-mint)'
  }
  return 'var(--text-muted)'
}

const transcript: QA[] = [
  {
    speaker: 'Begeleider 1',
    text: 'Hoi allemaal, fijn dat jullie er zijn. Bedankt dat jullie mee willen doen vandaag. Wij gaan het hebben over een idee voor op school. We willen vooral weten wat jullie er echt van vinden, dus er zijn geen goede of foute antwoorden. Zeg vooral gewoon wat je denkt.',
  },
  {
    speaker: 'Begeleider 2',
    text: 'Jullie mogen ook gewoon op elkaar reageren. Als iemand iets zegt en jij denkt: nee, zo zie ik het anders, dan is dat juist goed om te horen. Daar hebben wij veel aan.',
  },
  {
    speaker: 'Begeleider 1',
    text: 'We beginnen rustig. Hoe ziet jullie pauze er meestal uit? Wat doen jullie op een gewone schooldag in de pauze?',
  },
  {
    speaker: 'Leerling 1',
    text: 'Ja meestal gewoon beetje hangen eigenlijk. Beetje praten, niet echt speciaal ofzo.',
  },
  {
    speaker: 'Leerling 4',
    text: 'Ja meestal eerst kijken wie meegaat om iets te halen en daarna zie je wel wat je gaat doen.',
  },
  {
    speaker: 'Leerling 6',
    text: 'Ja snacken gebeurt wel echt veel. Dan zegt iemand van zullen we wat halen en dan loopt eigenlijk iedereen mee.',
  },
  {
    speaker: 'Leerling 3',
    text: 'Ja precies. Soms heb je niet eens echt trek maar dan ga je toch mee ofzo.',
  },
  {
    speaker: 'Leerling 5',
    text: 'Ik zit meestal buiten of in de aula. Gewoon beetje praten en hangen eigenlijk.',
  },
  {
    speaker: 'Begeleider 1',
    text: 'Dus het draait voor jullie vooral om samen zijn?',
  },
  { speaker: 'Leerling 5', text: 'Ja eigenlijk wel.' },
  { speaker: 'Leerling 1', text: 'Ja anders is het ook beetje saai.' },
  {
    speaker: 'Leerling 2',
    text: 'Het maakt ook niet echt uit wat je doet zolang je maar met vrienden bent.',
  },
  {
    speaker: 'Begeleider 2',
    text: 'Dus de sfeer en de groep zijn belangrijker dan de activiteit zelf?',
  },
  {
    speaker: 'Leerling 6',
    text: 'Ja sowieso. Als je met leuke mensen bent maakt het niet zoveel uit wat je doet.',
  },
  { speaker: 'Leerling 4', text: 'Ja denk het wel.' },
  {
    speaker: 'Begeleider 1',
    text: 'Oké, dan willen we jullie iets laten zien wat wij hebben bedacht. Het heet de Challenge Table. Het is een tafel op school waar je met een groepje omheen kunt staan of zitten. Je kunt er kleine challenges of opdrachten mee doen, zodat je in de pauze samen iets hebt om te doen.',
  },
  {
    speaker: 'Begeleider 2',
    text: 'Het idee is dat het een plek is waar leerlingen vanzelf samenkomen. Dus niet alleen maar zitten of op je telefoon kijken, maar iets doen dat de pauze een beetje leuker maakt.',
  },
  {
    speaker: 'Leerling 2',
    text: 'Oke dus niet gewoon een tafel om aan te zitten?',
  },
  {
    speaker: 'Begeleider 1',
    text: 'Precies, het is meer een tafel waar iets mee gebeurt.',
  },
  {
    speaker: 'Leerling 6',
    text: 'Dus soort plek waar je meteen iets kunt doen met vrienden?',
  },
  { speaker: 'Leerling 1', text: 'Klinkt op zich wel anders dan normaal.' },
  {
    speaker: 'Leerling 5',
    text: 'Ja maar ligt er ook wel aan hoe het eruit ziet denk ik. Als het er raar uitziet loopt niemand erheen.',
  },
  {
    speaker: 'Leerling 4',
    text: 'Ja klopt. Als het beetje kinderachtig voelt dan kijkt niemand ernaar denk ik.',
  },
  {
    speaker: 'Begeleider 2',
    text: 'Hoe zouden jullie het je dan voorstellen? Hoe zou zo\'n tafel eruit moeten zien?',
  },
  { speaker: 'Leerling 1', text: 'Gewoon niet te kinderachtig eigenlijk.' },
  {
    speaker: 'Leerling 2',
    text: 'Gewoon beetje simpel denk ik. Niet te druk allemaal.',
  },
  {
    speaker: 'Leerling 6',
    text: 'Ja gewoon duidelijk. Dat je meteen snapt wat je ermee moet.',
  },
  {
    speaker: 'Leerling 5',
    text: 'Ja niet dat je ernaar kijkt en denkt wat moet dit voorstellen.',
  },
  {
    speaker: 'Leerling 3',
    text: 'Misschien wel met scherm of knoppen ofzo. Maar niet ingewikkeld.',
  },
  {
    speaker: 'Begeleider 1',
    text: 'Dus jullie denken aan iets wat simpel, duidelijk en niet kinderachtig is?',
  },
  {
    speaker: 'Leerling 4',
    text: 'En stevig ook. Op school gaat alles snel kapot.',
  },
  {
    speaker: 'Leerling 6',
    text: 'Ja echt. Als iets wiebelt is het meteen klaar.',
  },
  {
    speaker: 'Leerling 2',
    text: 'En niet te groot ook denk ik. Anders staat het alleen maar in de weg.',
  },
  { speaker: 'Begeleider 1', text: 'Goed, dan laten we nu de visual zien.' },
  {
    speaker: 'Leerling 2',
    text: 'O ja oke. Dit ziet er wel anders uit dan ik dacht.',
  },
  {
    speaker: 'Leerling 5',
    text: 'Ja ik dacht eerst iets kleiners eigenlijk.',
  },
  {
    speaker: 'Leerling 1',
    text: 'Het ziet er wel uit alsof het echt op school zou kunnen staan.',
  },
  { speaker: 'Leerling 6', text: 'Het ziet er wel nice uit eigenlijk.' },
  {
    speaker: 'Leerling 4',
    text: 'Ja wel goed dat het opvalt. Anders kijkt niemand ernaar.',
  },
  {
    speaker: 'Leerling 5',
    text: 'Ja en het ziet er niet echt kinderachtig uit dus dat is wel goed.',
  },
  {
    speaker: 'Leerling 3',
    text: 'Ik snap nu ook beter dat het echt om samen doen gaat.',
  },
  {
    speaker: 'Begeleider 2',
    text: 'Wat valt jullie als eerste op aan de visual?',
  },
  { speaker: 'Leerling 4', text: 'Dat hij best groot is.' },
  { speaker: 'Leerling 2', text: 'Ja en hij valt wel op.' },
  {
    speaker: 'Leerling 6',
    text: 'Je ziet ook meteen dat het voor meerdere mensen is.',
  },
  { speaker: 'Leerling 1', text: 'Ja het trekt wel aandacht.' },
  {
    speaker: 'Begeleider 1',
    text: 'Maakt dat het voor jullie interessanter?',
  },
  {
    speaker: 'Leerling 2',
    text: 'Eerst dacht ik beetje van hm weet niet. Maar nu ziet het er wel leuker uit.',
  },
  {
    speaker: 'Leerling 3',
    text: 'Ja ik dacht eerst misschien beetje kinderachtig maar valt eigenlijk wel mee.',
  },
  {
    speaker: 'Leerling 6',
    text: 'Ja ik zou er denk ik wel even gaan kijken als het op school stond.',
  },
  {
    speaker: 'Leerling 5',
    text: 'Ja dan wil je automatisch weten wat daar gebeurt.',
  },
  {
    speaker: 'Begeleider 1',
    text: 'Wat denken jullie dat dit product precies doet?',
  },
  {
    speaker: 'Leerling 5',
    text: 'Gewoon dat je samen iets doet in de pauze.',
  },
  { speaker: 'Leerling 4', text: 'Ja soort challenge of mini spel.' },
  {
    speaker: 'Leerling 1',
    text: 'Meer mensen bij elkaar brengen denk ik.',
  },
  {
    speaker: 'Leerling 2',
    text: 'Meer iets wat je eerst doet voordat je weer verder gaat.',
  },
  {
    speaker: 'Begeleider 2',
    text: 'Dus het voelt voor jullie meer als een startpunt?',
  },
  { speaker: 'Leerling 6', text: 'Ja precies.' },
  {
    speaker: 'Leerling 5',
    text: 'Op school doet iedereen normaal beetje z\'n eigen ding. Dit maakt het meer samen ofzo.',
  },
  {
    speaker: 'Leerling 4',
    text: 'En misschien ga je dan ook minder snel meteen snacks halen.',
  },
  {
    speaker: 'Begeleider 1',
    text: 'Denken jullie dat dit ook kan helpen om minder snel naar snacks te grijpen?',
  },
  { speaker: 'Leerling 3', text: 'Misschien beetje wel ja.' },
  {
    speaker: 'Leerling 6',
    text: 'Ja snacken blijft wel gebeuren denk ik.',
  },
  {
    speaker: 'Leerling 2',
    text: 'Maar misschien ga je niet meteen meer iets halen.',
  },
  {
    speaker: 'Leerling 1',
    text: 'En als je bezig bent vergeet je misschien ook beetje dat je iets wilde halen.',
  },
  {
    speaker: 'Leerling 5',
    text: 'Ja veel mensen gaan ook gewoon mee omdat anderen gaan.',
  },
  {
    speaker: 'Leerling 2',
    text: 'Je loopt gewoon mee omdat de rest ook gaat.',
  },
  {
    speaker: 'Begeleider 2',
    text: 'Dus het kan die gewoonte een beetje onderbreken?',
  },
  { speaker: 'Leerling 2', text: 'Ja denk het wel.' },
  {
    speaker: 'Leerling 6',
    text: 'Het hoeft ook niet alles te veranderen ofzo. Maar gewoon iets anders om eerst te doen.',
  },
  { speaker: 'Leerling 1', text: 'Ja gewoon andere optie eigenlijk.' },
]

const inzichten: { label: string; text: string }[] = [
  {
    label: 'Samen zijn is het doel, niet de activiteit',
    text: 'Alle deelnemers geven aan dat de pauze draait om bij vrienden zijn. De activiteit — hangen, snacken, praten — is bijzaak. Dit bevestigt dat een interventie sociaal moet aansluiten, niet functioneel: de Challenge Table moet een sociale plek zijn, geen opdracht.',
  },
  {
    label: 'Snackgedrag is groepsdynamiek, niet honger',
    text: '"Soms heb je niet eens echt trek maar dan ga je toch mee." Snacken wordt herhaaldelijk beschreven als meelopen met de groep, niet als een bewuste keuze. Dit maakt het gedrag vatbaar voor verstoring door een alternatieve sociale activiteit.',
  },
  {
    label: 'Eerste drempel: kinderachtigheid en uitstraling',
    text: 'Vóór het zien van de visual uiten meerdere leerlingen de vrees dat het er kinderachtig of onduidelijk uit zou zien. Na de visual verdwijnt die weerstand grotendeels. De initiële skepsis toont dat visuele geloofwaardigheid een harde adoptiedrempel is.',
  },
  {
    label: 'Ontwerpvereisten: simpel, stevig, opvallend',
    text: 'Leerlingen noemen spontaan vier criteria: niet kinderachtig, simpel en direct begrijpelijk, stevig (want "op school gaat alles snel kapot"), en opvallend genoeg om aandacht te trekken. Deze criteria kwamen zonder sturing naar voren en zijn daarmee betrouwbaar als gebruikerseisen.',
  },
  {
    label: 'Challenge Table als gewoonte-onderbreker',
    text: '"Als je bezig bent vergeet je misschien ook beetje dat je iets wilde halen." Leerlingen zien het product niet als vervanging van snacken, maar als iets wat de automatische prikkel vertraagt. Dat is precies de gewenste werking: geen verbod, maar een alternatief dat de impuls onderbreekt.',
  },
]

export default function FocusgroepPage() {
  return (
    <>
      <PageHead
        number="FG"
        label="Portfolio · Focusgroep"
        title="Focusgroep: Challenge Table."
        lead="Kwalitatieve focusgroep met zes leerlingen over de Challenge Table als alternatieve pauzeplek. Afgenomen in het kader van Sprint 2 — conceptvalidatie en gebruikersreactie op de eerste visual."
        meta={[
          { key: 'Type', value: 'Focusgroep' },
          { key: 'Deelnemers', value: '6 leerlingen (anoniem)' },
          { key: 'Begeleiders', value: 'Thijs Hekking & medestudent' },
          { key: 'Sprint', value: 'Sprint 2 — Conceptvalidatie' },
        ]}
      />

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
            Deze focusgroep is afgenomen als onderdeel van de conceptvalidatie in Sprint 2. Het doel was om kwalitatief inzicht te krijgen in hoe leerlingen reageren op de Challenge Table: begrijpen ze het concept, voelt het relevant voor hun pauze, en zien ze het als een geloofwaardig alternatief voor het huidige pauzegedrag?
          </p>
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Zes leerlingen namen deel aan de sessie. De focusgroep bestond uit drie fasen: een openingsronde over huidig pauzegedrag, een introductiemoment van het concept (mondeling), en een reactieronde na het tonen van de eerste visual. Deelnemers werden aangemoedigd op elkaar te reageren om groepsdynamiek zichtbaar te maken.
          </p>
        </div>
      </section>

      {/* LEGENDE */}
      <section
        className="px-6 md:px-10 py-10"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <div className="max-w-[820px] flex flex-wrap gap-6">
          <div className="flex items-center gap-2">
            <span
              className="text-[11px] uppercase"
              style={{ letterSpacing: '0.15em', color: 'var(--accent-mint)' }}
            >
              Begeleider
            </span>
            <span className="text-[13px]" style={{ color: 'var(--text-muted)' }}>
              — interviewer / gespreksleider
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="text-[11px] uppercase"
              style={{ letterSpacing: '0.15em', color: 'var(--text-muted)' }}
            >
              Leerling
            </span>
            <span className="text-[13px]" style={{ color: 'var(--text-muted)' }}>
              — anonieme deelnemer
            </span>
          </div>
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
                gridTemplateColumns: '7rem 1fr',
                alignItems: 'start',
              }}
            >
              <span
                className="text-[11px] uppercase pt-[3px]"
                style={{
                  letterSpacing: '0.12em',
                  color: speakerColor(qa.speaker),
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
