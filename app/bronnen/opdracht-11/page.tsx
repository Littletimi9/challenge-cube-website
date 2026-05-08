import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import PageHead from '@/components/rubric/PageHead'
import SectionHeading from '@/components/rubric/SectionHeading'

export const metadata = {
  title: 'Opdracht 11 — Prijsgevoeligheidsanalyse (onderzoeksopzet) · Challenge Cube',
}

const citeStyle: React.CSSProperties = {
  color: 'var(--accent-mint)',
  textDecoration: 'underline',
  textDecorationThickness: '0.5px',
  textUnderlineOffset: '2px',
}

function Cite({ id, href, children }: { id?: string; href?: string; children: React.ReactNode }) {
  const targetHref = href ?? (id ? `#${id}` : '#')
  return (
    <a href={targetHref} style={citeStyle}>
      {children}
    </a>
  )
}

type Bron = { id: string; content: React.ReactNode }

const paragraphStyle: React.CSSProperties = {
  lineHeight: 1.75,
  color: 'var(--text-secondary)',
}

const tableCaptionStyle: React.CSSProperties = {
  marginTop: '12px',
  fontSize: '12px',
  letterSpacing: '0.1em',
  color: 'var(--text-dim)',
}

const thStyle = (): React.CSSProperties => ({
  padding: '12px 16px',
  textAlign: 'left',
  fontWeight: 400,
  fontSize: '11px',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  borderBottom: '0.5px solid var(--border-strong)',
  backgroundColor: 'var(--surface)',
  color: 'var(--text-muted)',
  whiteSpace: 'nowrap',
})

const tdStyle = (): React.CSSProperties => ({
  padding: '12px 16px',
  fontSize: '15px',
  borderBottom: '0.5px solid var(--border)',
  color: 'var(--text-secondary)',
  verticalAlign: 'top',
  lineHeight: 1.6,
})

const bronnen: Bron[] = [
  {
    id: 'bron-green-1978',
    content: (
      <>
        Green, P. E. (1978). Conjoint analysis in consumer research: Issues and outlook.{' '}
        <em>Journal of Consumer Research, 5</em>(2), 103–123.{' '}
        <a
          href="https://doi.org/10.1086/208721"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://doi.org/10.1086/208721
        </a>
      </>
    ),
  },
  {
    id: 'bron-westendorp-1976',
    content: (
      <>
        Van Westendorp, P. H. (1976). NSS Price Sensitivity Meter (PSM) — A new approach to study
        consumer perception of prices. <em>Proceedings of the 29th ESOMAR Congress</em>, 139–167.
      </>
    ),
  },
]

export default function Opdracht11Page() {
  return (
    <>
      <PageHead
        number="11"
        label="Portfolio · Opdracht"
        title="Prijsgevoeligheidsanalyse — onderzoeksopzet."
        lead="Onderbouwing van de methodekeuze (Van Westendorp), iteratiemelding over de overgang van B2C naar B2B, doelgroep en steekproefgrootte, enquêtevragen per blok en de planning van de afname."
        meta={[
          { key: 'Type', value: 'Groepsopdracht' },
          { key: 'Module', value: 'Waardecreatie' },
          { key: 'Product', value: 'Challenge Cube (B2C) & Challenge Table (B2B)' },
        ]}
      />

      {/* METHODE */}
      <section className="px-6 md:px-10 py-20">
        <SectionHeading
          eyebrow="Onderdeel 1 · Methodekeuze"
          heading="Prijsgevoeligheidsanalyse — Van Westendorp."
        />
        <div className="grid gap-8 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Voor het prijsonderzoek van de Challenge Table is gekozen voor de
            Prijsgevoeligheidsanalyse volgens de Van Westendorp-methode (ook wel: de Prijsmeter).
            Deze methode is bij uitstek geschikt voor innovatieve producten zonder directe
            marktprijsreferentie, waarbij de perceptiewaarde van de doelgroep richting een bepaald
            product of dienst al leidraad dient voor het vaststellen van de juiste prijs{' '}
            <Cite id="bron-westendorp-1976">(Van Westendorp, 1976)</Cite>.
          </p>
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            De keuze sluit direct aan op de gekozen penetratiestrategie{' '}
            <Cite href="/bronnen/opdracht-10">(Opdracht 10)</Cite>. Bij een penetratiestrategie
            wordt gestart met een bewust lage introductieprijs om adoptiedrempels bij scholen te
            verlagen en snel referentieklanten te verwerven. Het Marginaal Goedkooptepunt (MGP) —
            het snijpunt waarbij respondenten beginnen te twijfelen aan de kwaliteit bij een te
            lage prijs — fungeert als de absolute ondergrens voor de introductieprijs. Door dit
            punt te kennen, kan de penetratieprijs zo scherp mogelijk worden vastgesteld zonder
            kwaliteitsschade aan het merk.
          </p>
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Een Conjointanalyse is een valide alternatief wanneer meerdere productconfiguraties of
            losstaande kenmerken tegen elkaar worden afgewogen{' '}
            <Cite id="bron-green-1978">(Green, 1978)</Cite>. Omdat beide concepten in één
            standaardversie worden aangeboden, biedt Van Westendorp meer directe inzichten voor
            de prijsstelling.
          </p>
        </div>
      </section>

      {/* ITERATIEMELDING */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="Iteratiemelding"
          heading="Van B2C naar B2B — twee enquêtes."
        />
        <div className="grid gap-8 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Om het onderzoek netjes uit te voeren zijn er twee enquêtes verspreid. Een gericht op
            B2C — dit was voor de iteratie omtrent de Challenge Cube (eerste concept). Na iteratie
            te hebben gedaan en tot het concept de Challenge Table te zijn gekomen, is de
            doelgroep en uitwerking aanzienlijk veranderd. Om nog steeds de nodige onderbouwing te
            kunnen doen is besloten om een tweede enquête te verspreiden, enkel gericht op B2B.
            Hiermee worden scholen, besturen en schooldirecties bedoeld. In de onderzoeksopzet
            zijn beide concepten meegenomen.
          </p>
        </div>
      </section>

      {/* DOELGROEP EN OMVANG */}
      <section
        className="px-6 md:px-10 py-20"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <SectionHeading
          eyebrow="Onderdeel 2 · Onderzoeksopzet"
          heading="Doelgroep en omvang."
        />
        <div className="grid gap-8 max-w-[820px]">
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
              <thead>
                <tr>
                  <th style={thStyle()}>Parameter</th>
                  <th style={thStyle()}>Onderzoek 1 — Cube (B2C)</th>
                  <th style={thStyle()}>Onderzoek 2 — Table (B2B)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Doelgroep', 'Leerlingen, docenten & ouders', 'Schooldirecties & inkopers'],
                  ['Beoogde steekproef', 'Min. 90 respondenten', 'Min. 20 respondenten (B2B-niche)'],
                  ['Kanalen', 'Sociale media, schoolnetwerk', 'LinkedIn, e-mail schoolbesturen'],
                  [
                    'Instrument',
                    'Online enquête (Microsoft Forms)',
                    'Online enquête (Microsoft Forms)',
                  ],
                  [
                    'Bias-risico',
                    'Zelfelectie, sociale wenselijkheid',
                    'Zelfelectie, steekproef, framing',
                  ],
                ].map(([param, b2c, b2b], i) => (
                  <tr key={i}>
                    <td
                      style={{
                        ...tdStyle(),
                        color: 'var(--text-primary)',
                        fontWeight: 500,
                      }}
                    >
                      {param}
                    </td>
                    <td style={tdStyle()}>{b2c}</td>
                    <td style={tdStyle()}>{b2b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={tableCaptionStyle}>Tabel 12 — Doelgroep en omvang onderzoek</p>
          </div>
        </div>
      </section>

      {/* ENQUÊTEVRAGEN */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="Onderdeel 3 · Instrument"
          heading="Enquêtevragen."
        />
        <div className="grid gap-10 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            De enquêtevragen zijn grotendeels gelijk voor B2B en B2C. Voor de volledige
            uitwerking, zie Bijlage 4.
          </p>

          <div className="grid gap-4">
            <h3
              className="text-[20px] md:text-[22px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              Blok A — Context
            </h3>
            <ol
              className="grid gap-2 list-decimal"
              style={{ paddingLeft: '1.5rem', lineHeight: 1.75, color: 'var(--text-secondary)' }}
            >
              <li className="text-[17px] md:text-[18px]">
                Wat is uw functie / leeftijd / geslacht?
              </li>
              <li className="text-[17px] md:text-[18px]">
                In hoeverre sluit het product aan bij een behoefte? (Schaal 1–5)
              </li>
            </ol>
          </div>

          <div className="grid gap-4">
            <h3
              className="text-[20px] md:text-[22px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              Blok B — Van Westendorp (vier standaardvragen)
            </h3>
            <ol
              className="grid gap-2 list-decimal"
              style={{ paddingLeft: '1.5rem', lineHeight: 1.75, color: 'var(--text-secondary)' }}
            >
              <li className="text-[17px] md:text-[18px]">
                Vanaf welke prijs vindt u het product zó goedkoop dat u twijfelt aan de kwaliteit?
              </li>
              <li className="text-[17px] md:text-[18px]">
                Vanaf welke prijs vindt u het product een goede deal / goedkoop?
              </li>
              <li className="text-[17px] md:text-[18px]">
                Vanaf welke prijs vindt u het product duur, maar nog acceptabel?
              </li>
              <li className="text-[17px] md:text-[18px]">
                Vanaf welke prijs vindt u het product te duur om te kopen?
              </li>
            </ol>
          </div>

          <div className="grid gap-4">
            <h3
              className="text-[20px] md:text-[22px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              Blok C — Aanvullend
            </h3>
            <ol
              className="grid gap-2 list-decimal"
              style={{ paddingLeft: '1.5rem', lineHeight: 1.75, color: 'var(--text-secondary)' }}
            >
              <li className="text-[17px] md:text-[18px]">
                Zou u het product kopen bij een testprijs van €14,95? (Cube) / Zou uw school dit
                product moeten aanbieden?
              </li>
              <li className="text-[17px] md:text-[18px]">
                B2B aanvullend: Welk maandelijks bedrag voor onderhoud acht u acceptabel?
              </li>
              <li className="text-[17px] md:text-[18px]">Wat zou u verbeteren aan dit product?</li>
            </ol>
          </div>
        </div>
      </section>

      {/* PLANNING */}
      <section
        className="px-6 md:px-10 py-20"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <SectionHeading
          eyebrow="Onderdeel 4 · Planning"
          heading="Planning enquête-afname."
        />
        <div className="grid gap-8 max-w-[820px]">
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
              <thead>
                <tr>
                  <th style={thStyle()}>Week</th>
                  <th style={thStyle()}>Activiteit</th>
                  <th style={thStyle()}>Toelichting</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'Week 6 · B2B week 12',
                    'Enquête definitief maken',
                    'Intern testen en aanpassen',
                  ],
                  [
                    'Week 7 · B2B week 13',
                    'Uitzetten enquête',
                    'Via sociale media (B2C) en LinkedIn',
                  ],
                  [
                    'Week 8 · B2B week 14',
                    'Respons monitoren',
                    'Bij tegenvallende respons: extra uitnodigingsronde',
                  ],
                  [
                    'Week 9 (9 april) · B2B week 15',
                    'Sluitingsdatum',
                    'Resultaten gereed voor verwerking in les',
                  ],
                ].map(([week, activiteit, toelichting], i) => (
                  <tr key={i}>
                    <td
                      style={{
                        ...tdStyle(),
                        color: 'var(--text-primary)',
                        fontWeight: 500,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {week}
                    </td>
                    <td style={tdStyle()}>{activiteit}</td>
                    <td style={tdStyle()}>{toelichting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={tableCaptionStyle}>Tabel 13 — Planning enquête-afname</p>
          </div>
        </div>
      </section>

      {/* Bronnenlijst */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading eyebrow="Bronnenlijst" heading="Bronnenlijst." />
        <ol
          className="grid gap-5 max-w-[820px] list-none p-0 m-0"
          style={{ color: 'var(--text-secondary)' }}
        >
          {bronnen.map((bron) => (
            <li
              key={bron.id}
              id={bron.id}
              className="scroll-mt-24 text-[15px] md:text-[16px]"
              style={{ lineHeight: 1.7, paddingLeft: '2.5rem', textIndent: '-2.5rem' }}
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
          style={{ letterSpacing: '0.2em', color: 'var(--accent-mint)' }}
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          Terug naar bronnen
        </Link>
      </section>
    </>
  )
}
