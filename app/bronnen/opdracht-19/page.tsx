import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import PageHead from '@/components/rubric/PageHead'
import SectionHeading from '@/components/rubric/SectionHeading'

export const metadata = {
  title: 'Opdracht 19 — Value Proposition Canvas · Challenge Cube',
}

type Bron = {
  id: string
  content: React.ReactNode
}

const bronnen: Bron[] = [
  {
    id: 'bron-osterwalder-2014',
    content: (
      <>
        Osterwalder, A., Pigneur, Y., Bernarda, G., &amp; Smith, A. (2014).{' '}
        <em>Value proposition design: How to create products and services customers want</em>. Wiley.
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

export default function Opdracht19Page() {
  return (
    <>
      <PageHead
        number="19"
        label="Portfolio · Opdracht"
        title="Value Proposition Canvas."
        lead="Groepsopdracht. Systematische koppeling van het pauze‑ en snackgedrag van scholieren aan de eisen voor ons nieuwe pauze‑concept, via twee iteraties van de Value Proposition Canvas."
        meta={[
          { key: 'Type', value: 'Groepsopdracht' },
          { key: 'Tool', value: 'Value Proposition Canvas' },
          { key: 'Groep', value: 'Thijs H., Romeon S., Jesper v/d H., Thijs K., Twan V.' },
        ]}
      />

      {/* Inleiding */}
      <section className="px-6 md:px-10 py-20">
        <SectionHeading
          eyebrow="Inleiding"
          heading="Value Proposition Canvas."
        />
        <div className="grid gap-8 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            In Opdracht 19 gebruiken wij de Value Proposition Canvas om het pauze‑ en snackgedrag van scholieren systematisch te koppelen aan wat onze toekomstige oplossing moet bieden. Het canvas helpt ons om eerst scherp te krijgen wat leerlingen nu doen, willen en lastig vinden in hun pauzes, en pas daarna te formuleren welke functies, ervaringen en effecten ons pauze‑concept straks nodig heeft.
          </p>
        </div>
      </section>

      {/* Deel 1 — Klantprofiel IST */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="Deel 1 · Klantprofiel"
          heading="Klanttaken in de pauze."
        />
        <div className="grid gap-8 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            In de eerste versie van het canvas hebben wij vooral de rechterkant uitgewerkt: het klantprofiel van scholieren in de pauze. Daaruit blijkt dat leerlingen meerdere taken tegelijk proberen te vervullen: honger stillen tussen lesmomenten, zichzelf belonen met iets lekkers, gezellig samen zijn met vrienden en even ontsnappen aan het gevoel "op school te zijn".
          </p>
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Daarnaast zien we dat "iets te doen hebben" een grote rol speelt; het rondje naar supermarkt of kantine is niet alleen bedoeld om eten te halen, maar ook om verveling tegen te gaan en om erbij te horen. Het huidige pauzeritueel — bestaande uit lopen, kopen, samen eten — is daardoor uitgegroeid tot een vast sociaal patroon waarin voeding, gezelligheid en status nauw met elkaar verbonden zijn.
          </p>

          <figure style={{ margin: '0', padding: '0', maxWidth: '502px' }}>
            <a href="/VPC_afbeelding1.png" target="_blank" rel="noopener noreferrer" style={{ display: 'block', cursor: 'zoom-in' }}>
              <Image
                src="/VPC_afbeelding1.png"
                alt="Value Proposition Canvas 1 — eerste iteratie van klantprofiel en value map"
                width={502}
                height={280}
                unoptimized
                style={imgStyle}
              />
            </a>
            <figcaption style={captionStyle}>
              Figuur 1 — Value Proposition Canvas 1: Eerste iteratie met klantprofiel (rechts) en value map (links).
            </figcaption>
          </figure>

          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Met dezelfde canvas brengen wij ook de pijnpunten van dit ritueel in kaart. Leerlingen ervaren dat gezonde opties duurder of minder lekker zijn, dat het aanbod in schoolkantines beperkt is en dat impulsaankopen snel geld kosten, terwijl Nutri‑score en de Schijf van 5 als ingewikkeld en "saai" worden gezien.
          </p>
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            We zien bovendien veel sociale invloed: wie met de groep meegaat, koopt vaak automatisch iets, ook als er eigenlijk geen honger is. Verveling en gemak zorgen er zo voor dat ongezonde snacks de standaard zijn geworden, met negatieve effecten op gezondheid, concentratie en de hoeveelheid verpakkingsafval.
          </p>
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Aan de gain‑kant beschrijven wij wat leerlingen juist wél uit hun pauze willen halen. Ze willen geen honger hebben, even niet met school bezig zijn, samen iets leuks doen en een kort moment van plezier en voldoening ervaren voordat de volgende les begint. Voor hen staat het sociale aspect centraal: erbij horen, samen lachen en opladen zijn belangrijker dan de exacte voedingswaarde van wat ze eten.
          </p>
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Dat inzicht is voor ons cruciaal, omdat het betekent dat onze latere oplossing minstens dezelfde sociale en emotionele voordelen moet bieden als een rondje supermarkt of kantine.
          </p>
        </div>
      </section>

      {/* Canvas 2 — Aangescherpt klantprofiel */}
      <section
        className="px-6 md:px-10 py-20"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <SectionHeading
          eyebrow="Canvas 2 · Aangescherpt klantprofiel"
          heading="Verfijnd klantprofiel en value map."
        />
        <div className="grid gap-8 max-w-[820px]">
          <figure style={{ margin: '0', padding: '0', maxWidth: '520px' }}>
            <a href="/VPC_afbeelding2.png" target="_blank" rel="noopener noreferrer" style={{ display: 'block', cursor: 'zoom-in' }}>
              <Image
                src="/VPC_afbeelding2.png"
                alt="Value Proposition Canvas 2 — aangescherpt klantprofiel en verfijnde value map"
                width={520}
                height={292}
                unoptimized
                style={imgStyle}
              />
            </a>
            <figcaption style={captionStyle}>
              Figuur 2 — Value Proposition Canvas 2: Aangescherpt klantprofiel (rechts) en uitgewerkte value map (links).
            </figcaption>
          </figure>

          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            In de tweede versie van het canvas scherpen wij het klantprofiel aan tot één centrale klanttaak: samen de pauze leuk en gezellig invullen. Honger stillen en iets lekkers eten blijven onderdeel van dit plaatje, maar zijn nu ondergeschikt aan het gezamenlijke, gezellige pauzemoment.
          </p>
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            We reduceren de belangrijkste pijnpunten tot een compacte set: er is vaak weinig beters te doen dan snacks halen, snacks kosten geld, "lekkers wint van gezond" en er is weinig variatie in schoolkantines. De gewenste voordelen vatten we samen als een gezellige pauze, samen iets doen, geen hongergevoel en een kort moment van plezier en voldoening.
          </p>
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Aan de linkerkant van Canvas 2 werken wij vervolgens uit wat een nieuw pauze‑concept minimaal moet bevatten om op dit klantprofiel aan te sluiten. We denken aan een fysiek object of spelvorm die direct in de pauze kan worden ingezet, aangevuld met korte pauze‑ en tussenuuropdrachten en sociale groepschallenges die weinig uitleg vragen. Onze bedoeling is dat leerlingen dit spontaan kunnen oppakken in aula, kantine of op het schoolplein, zonder docent en zonder dat het voelt als extra lesstof. Daarom leggen we de nadruk op snelheid, toegankelijkheid en samendoen, zodat dit nieuwe ritueel net zo vanzelfsprekend kan worden als "even wat halen".
          </p>
        </div>
      </section>

      {/* Voordeelverschaffers */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="Value Map · Voordeelverschaffers"
          heading="Voordeelverschaffers."
        />
        <div className="grid gap-8 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Bij de voordeelverschaffers beschrijven wij hoe ons pauze‑concept de gewenste gains versterkt. Het moet pauzes gezelliger maken, leerlingen meteen iets te doen geven, het groepsgevoel versterken en de vaste routine van naar de supermarkt lopen doorbreken. Tegelijkertijd vinden we het belangrijk dat het concept makkelijk en snel te gebruiken is. Er moeten geen ingewikkelde regels zijn, het moet nauwelijks voorbereiding eisen en direct toepasbaar zijn binnen de beperkte pauzetijd. Zo verlagen we de drempel om voor het nieuwe gedrag te kiezen en maken we de concurrentie met de bestaande, supergemakkelijke snackroutine realistischer.
          </p>
        </div>
      </section>

      {/* Pijnverzachters */}
      <section
        className="px-6 md:px-10 py-20"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <SectionHeading
          eyebrow="Value Map · Pijnverzachters"
          heading="Pijnverzachters."
        />
        <div className="grid gap-8 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Bij de pijnverzachters richten wij ons expliciet op de problemen rond vervelingssnacken en impulsaankopen. Doordat ons concept een aantrekkelijk alternatief biedt om de pauze in te vullen, verschuift de aandacht van eten naar activiteit, waardoor er minder uit verveling wordt gesnackt en minder impulsieve uitgaven plaatsvinden. Ons nieuwe ritueel helpt bovendien om de ingesleten "snackroutine" te doorbreken: leerlingen hoeven niet meer automatisch naar supermarkt of kantine te lopen om samen iets te doen. Op die manier ondersteunen we gezondheid, portemonnee en variatie, zonder moraliserende toon en zonder leerlingen een schuldgevoel aan te praten over hun huidige gedrag.
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
          heading="Kortom."
        />
        <div className="grid gap-8 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Door klantprofiel en value map zo met elkaar te verbinden laten we zien dat de kern van onze propositie niet de productnaam is, maar het ontwerpen van een nieuw pauzeritueel.
          </p>
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Het uitgewerkte canvas maakt duidelijk dat onze latere, concrete oplossing vooral succesvol zal zijn als zij hetzelfde sociale en emotionele plezier biedt als het huidige snackrondje, maar dan met minder verleiding, minder impulsieve aankopen en meer ruimte voor gezonde keuzes tijdens de pauze.
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
