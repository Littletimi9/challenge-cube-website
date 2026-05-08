import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import PageHead from '@/components/rubric/PageHead'
import SectionHeading from '@/components/rubric/SectionHeading'

export const metadata = {
  title: 'Observaties — Challenge Cube',
}

const thStyle: React.CSSProperties = {
  padding: '10px 16px',
  textAlign: 'left',
  fontSize: '12px',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  borderBottom: '0.5px solid var(--border)',
  fontWeight: 400,
}

const tdStyle: React.CSSProperties = {
  padding: '12px 16px',
  fontSize: '15px',
  lineHeight: 1.65,
  color: 'var(--text-secondary)',
  borderBottom: '0.5px solid var(--border)',
  verticalAlign: 'top',
}

const paragraphStyle: React.CSSProperties = {
  lineHeight: 1.75,
  color: 'var(--text-secondary)',
}

type ObservatiePunt = {
  tijdstip: string
  wat: string
  wie: string
}

type Observatie = {
  id: string
  label: string
  locatie: string
  datum: string
  doelgroep: string
  doel: string
  context: string
  punten: ObservatiePunt[]
  interpretatie: string
  reflectie: string
  vervolgvragen: string[]
}

const observaties: Observatie[] = [
  {
    id: 'spar-windesheim',
    label: 'Observatie A',
    locatie: 'Spar University Windesheim',
    datum: '05-02-2026',
    doelgroep: '16–25 jarige HBO studenten',
    doel: 'Koopgedrag achterhalen van groepen. En hoeveel aankopen groepen doen.',
    context:
      'Studenten kopen lekker en rekenen af. Doen ze dat gezamenlijk of apart? Bij deze Spar is alleen pinnen een mogelijkheid.',
    punten: [
      {
        tijdstip: '11:33',
        wat: 'Veel groepjes halen eten, meeste halen enkele items.',
        wie: '4 studenten, 3 man, 1 vrouw',
      },
      {
        tijdstip: '11:34',
        wat: 'Twee groepen staan bij het koffieautomaat. Slechts een paar halen ook daadwerkelijk koffie.',
        wie: '1 × 4 studenten en 1 × 3 studenten',
      },
      {
        tijdstip: '11:35',
        wat: 'Groepje van 4 studenten loopt naar binnen.',
        wie: '4 studenten',
      },
      {
        tijdstip: '11:35',
        wat: '2 studenten rekenen samen af. Ook hier ging het om enkele items.',
        wie: '2 studenten',
      },
    ],
    interpretatie:
      'Groepjes studenten steken elkaar aan om producten te kopen. Ook als iemand er misschien eigenlijk geen behoefte voor heeft. Vaak ga je toch even mee voor de gezelligheid.',
    reflectie:
      'Groepsdruk zou een rol kunnen spelen (onbewust) bij het doen van aankopen. Of de winkel is goed ingericht en beïnvloed op die manier de klanten.',
    vervolgvragen: [
      'Zou cash geld een verandering teweeg kunnen brengen?',
      'Zijn er studenten die eigenlijk niks willen, die toch iets hebben gehaald?',
      'Hoe groot is het effect van de winkelinrichting op het koopgedrag van deze studenten/doelgroep?',
    ],
  },
  {
    id: 'ah-forelkolk',
    label: 'Observatie B',
    locatie: 'Albert Heijn Forelkolk Zwolle',
    datum: '05-02-2026',
    doelgroep: '11–18 jarige middelbare scholieren',
    doel: 'Koopgedrag achterhalen van doelgroep middelbare scholieren.',
    context:
      'Jongere doelgroep, komen vaak in groep(jes/en). Op moment van aankomst is er zelfs al een groepje voor de deur. Kopen ze gezond of ongezond?',
    punten: [
      {
        tijdstip: '12:06',
        wat: 'Jongen koopt druiven en een ander product.',
        wie: '1 tiener, jongen',
      },
      {
        tijdstip: '12:07',
        wat: 'Twee jongens halen broodjes op de broodafdeling.',
        wie: '2 tieners, beide jongens',
      },
      {
        tijdstip: '11:35',
        wat: 'Twee jongens kopen snoep en chocola.',
        wie: 'Twee tieners, jongens',
      },
      {
        tijdstip: '11:35',
        wat: 'Op moment van vertrek komt er een groepje van 4 jongens aangefietst.',
        wie: '4 tieners, jongens',
      },
    ],
    interpretatie:
      'Veel komen met kleine groepen en kopen vaker ongezonde producten dan gezonde. Zou kunnen betekenen dat deze vaak jongens behoefte hebben aan suiker.',
    reflectie:
      'De neiging om ongezond te eten is groter dan naar gezond eten. Daarnaast zijn het vaker jongens die naar de supermarkt komen.',
    vervolgvragen: [
      'Door een factor te veranderen zou dat in dit geval ook de output veranderen?',
      'Zou wederom cash geld een verandering teweeg kunnen brengen?',
      'Is er een neiging/verslaving naar suiker?',
      'Waarom is ongezond eten meer in trek dan gezond eten?',
    ],
  },
  {
    id: 'kfc-zwolle',
    label: 'Observatie C',
    locatie: 'KFC Zwolle noord',
    datum: '05-02-2026',
    doelgroep: '11–25 jarige scholieren/studenten',
    doel: 'Koopgedrag van jeugd binnen fastfood ketens.',
    context:
      'We zijn bij de KFC in Zwolle noord. Er zijn best een aantal scholieren die al een tafel hebben, vooral 2 grote groepen. Bij hen staat ook al eten op tafel — in ieder geval een tafel vol met eten en frisdrank.',
    punten: [
      {
        tijdstip: '12:23',
        wat: 'Groepje van 4 jongens zit aan tafel en hebben een tafel vol met eten.',
        wie: '4 jongens, 10–14 jaar',
      },
      {
        tijdstip: '12:24',
        wat: '2 jongens op de fiets eten buiten een softijsje.',
        wie: '2 jongens, 10–14 jaar',
      },
      {
        tijdstip: '12:25',
        wat: '2 studenten lopen de KFC binnen en bestellen beiden een menu.',
        wie: '2 studenten',
      },
      {
        tijdstip: '12:26',
        wat: 'Hetzelfde groepje van 4 is nu bij de Burger King aan het eten. Ook weer een tafel vol.',
        wie: '4 jongens, 10–14 jaar',
      },
    ],
    interpretatie:
      'Gewoon even gezellig een hapje eten en even wat anders dan school. Of is er behoefte aan ongezond eten en suiker?',
    reflectie:
      '2 keer een volle tafel met eten bestellen is meestal niet zo goed voor de bankrekening. Dus er kan gesteld worden dat er inderdaad niet verantwoord met geld om wordt gegaan. Daarnaast zie je ook vaak dat ongezond eten in trek is. In ieder geval bij de supermarkt is er een gezond alternatief.',
    vervolgvragen: [
      'Als het eten gezond en lekker zou zijn — zou er dan nog steeds zoveel jeugd rondlopen?',
      'Als de school een goed alternatief heeft, zouden er dan nog steeds mensen op pad gaan om extern te eten?',
      'Zou er sprake zijn van groepsdruk?',
    ],
  },
  {
    id: 'mcdonalds-zwolle',
    label: 'Observatie D',
    locatie: 'McDonalds Zwolle noord',
    datum: '05-02-2026',
    doelgroep: '11–25 jarige scholieren/studenten',
    doel: 'Koopgedrag van jeugd binnen fastfood ketens.',
    context:
      'We zijn bij de McDonalds in Zwolle noord. Er zit aan 1 tafel binnen scholieren die binnen deze leeftijdsrange passen. En buiten zit ook een drietal jongens die onder de doelgroep zouden passen.',
    punten: [
      {
        tijdstip: '12:41',
        wat: 'Op moment van binnenkomst zien we een groepje meiden aan een tafel zitten met een bescheiden hoeveelheid eten.',
        wie: '5 meisjes, 10–15 jaar',
      },
      {
        tijdstip: '12:43',
        wat: 'Op moment van vertrek zien we een groepje jongens zitten. Het lijkt alsof ze hun eten al ophebben en nog even aan het napraten zijn voor ze vertrekken.',
        wie: '3 jongens, 10–14 jaar',
      },
    ],
    interpretatie:
      'McDonalds minder in trek onder de jeugd gezien de hoeveelheid jongeren die er te vinden zijn. Ook lijkt het alsof er minder is besteld ten opzichte van de observatie bij de KFC. Dat zou kunnen betekenen dat de jeugd die bij de McDonalds komt bewuster leeft.',
    reflectie:
      'De jeugd die bij de McDonalds komt lijkt verantwoorder om te gaan met geld dan bij de KFC.',
    vervolgvragen: [
      'Zou het tijdens een ander tijdstip drukker zijn?',
      'Zou ook hier sprake zijn van groepsdruk?',
    ],
  },
]

export default function ObservatiePage() {
  return (
    <>
      <PageHead
        number="OB"
        label="Portfolio · Primair onderzoek"
        title="Observaties pauzegedrag."
        lead="Vier gestructureerde observatieformulieren uitgevoerd op 05-02-2026 op drie locaties in Zwolle en op de Windesheim-campus. Doel: koopgedrag en groepsdynamiek van jongeren tijdens pauzes in kaart brengen."
        meta={[
          { key: 'Type', value: 'Primair onderzoek' },
          { key: 'Methode', value: 'Gestructureerde observatie' },
          { key: 'Observator', value: 'Thijs Hekking' },
          { key: 'Datum', value: '05-02-2026' },
        ]}
      />

      {observaties.map((obs, index) => (
        <section
          key={obs.id}
          className="px-6 md:px-10 py-20"
          style={{
            borderTop: '0.5px solid var(--border)',
            backgroundColor: index % 2 === 1 ? 'var(--canvas-elevated)' : undefined,
          }}
        >
          <SectionHeading
            eyebrow={`${obs.label} · ${obs.locatie}`}
            heading={`${obs.locatie}.`}
          />

          <div
            className="flex flex-wrap gap-x-10 gap-y-4 max-w-[820px] mb-12"
            style={{ borderLeft: '2px solid var(--accent-mint)', paddingLeft: '1.25rem' }}
          >
            {[
              { key: 'Observator', value: 'Thijs H.' },
              { key: 'Opleiding', value: 'Commerciële economie' },
              { key: 'Datum', value: obs.datum },
              { key: 'Doelgroep', value: obs.doelgroep },
            ].map(({ key, value }) => (
              <div key={key} className="flex flex-col gap-0.5">
                <span
                  className="text-[10px] uppercase"
                  style={{ letterSpacing: '0.2em', color: 'var(--text-dim)' }}
                >
                  {key}
                </span>
                <span className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>
                  {value}
                </span>
              </div>
            ))}
          </div>

          <div className="grid gap-10 max-w-[820px]">
            <div className="grid gap-3">
              <h3
                className="text-[20px] md:text-[22px]"
                style={{
                  fontFamily: 'var(--font-instrument-serif)',
                  color: 'var(--text-primary)',
                  lineHeight: 1.3,
                }}
              >
                1. Doel van de observatie
              </h3>
              <p className="text-[16px] md:text-[17px]" style={paragraphStyle}>
                {obs.doel}
              </p>
            </div>

            <div className="grid gap-3">
              <h3
                className="text-[20px] md:text-[22px]"
                style={{
                  fontFamily: 'var(--font-instrument-serif)',
                  color: 'var(--text-primary)',
                  lineHeight: 1.3,
                }}
              >
                2. Context van observatie
              </h3>
              <p className="text-[16px] md:text-[17px]" style={paragraphStyle}>
                {obs.context}
              </p>
            </div>

            <div className="grid gap-3">
              <h3
                className="text-[20px] md:text-[22px]"
                style={{
                  fontFamily: 'var(--font-instrument-serif)',
                  color: 'var(--text-primary)',
                  lineHeight: 1.3,
                }}
              >
                3. Observatiepunten (feitelijk)
              </h3>
              <div style={{ overflowX: 'auto' }}>
                <table
                  style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    border: '0.5px solid var(--border)',
                  }}
                >
                  <thead>
                    <tr style={{ backgroundColor: 'var(--surface)' }}>
                      <th style={{ ...thStyle, width: '90px' }}>Tijdstip</th>
                      <th style={thStyle}>Wat gebeurt er? (feitelijk)</th>
                      <th style={{ ...thStyle, minWidth: '200px' }}>Wie zijn erbij betrokken?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {obs.punten.map((punt, i) => (
                      <tr
                        key={i}
                        style={{
                          backgroundColor:
                            i % 2 === 0 ? 'transparent' : 'rgba(245,245,242,0.02)',
                        }}
                      >
                        <td
                          style={{
                            ...tdStyle,
                            color: 'var(--accent-mint)',
                            fontVariantNumeric: 'tabular-nums',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {punt.tijdstip}
                        </td>
                        <td style={tdStyle}>{punt.wat}</td>
                        <td style={tdStyle}>{punt.wie}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid gap-3">
              <h3
                className="text-[20px] md:text-[22px]"
                style={{
                  fontFamily: 'var(--font-instrument-serif)',
                  color: 'var(--text-primary)',
                  lineHeight: 1.3,
                }}
              >
                4. Interpretatie en betekenis
              </h3>
              <p className="text-[16px] md:text-[17px]" style={paragraphStyle}>
                {obs.interpretatie}
              </p>
            </div>

            <div className="grid gap-3">
              <h3
                className="text-[20px] md:text-[22px]"
                style={{
                  fontFamily: 'var(--font-instrument-serif)',
                  color: 'var(--text-primary)',
                  lineHeight: 1.3,
                }}
              >
                5. Reflectie
              </h3>
              <p className="text-[16px] md:text-[17px]" style={paragraphStyle}>
                {obs.reflectie}
              </p>
            </div>

            <div className="grid gap-3">
              <h3
                className="text-[20px] md:text-[22px]"
                style={{
                  fontFamily: 'var(--font-instrument-serif)',
                  color: 'var(--text-primary)',
                  lineHeight: 1.3,
                }}
              >
                6. Vervolgvragen
              </h3>
              <ul
                className="grid gap-2 list-disc"
                style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}
              >
                {obs.vervolgvragen.map((vraag, i) => (
                  <li key={i} className="text-[16px] md:text-[17px]" style={{ lineHeight: 1.7 }}>
                    {vraag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section
        className="px-6 md:px-10 py-16"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <Link
          href="/bronnen"
          className="inline-flex items-center gap-2 text-[12px] uppercase hover:opacity-80 transition-opacity"
          style={{ letterSpacing: '0.2em', color: 'var(--accent-mint)' }}
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          Terug naar bronnen
        </Link>
      </section>
    </>
  )
}
