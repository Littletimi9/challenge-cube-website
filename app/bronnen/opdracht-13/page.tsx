import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import PageHead from '@/components/rubric/PageHead'
import SectionHeading from '@/components/rubric/SectionHeading'

export const metadata = {
  title: 'Opdracht 13 — Prijsgevoeligheidsanalyse (resultaten) · Challenge Cube',
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

const figCaptionStyle: React.CSSProperties = {
  marginTop: '10px',
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
    id: 'bron-enquete-b2c-2025',
    content: (
      <>
        Groep Challenge Cube. (2025).{' '}
        <em>
          Enquêteresultaten B2C prijsgevoeligheidsonderzoek — Challenge Cube [Primaire data]
        </em>
        . Hogeschool Windesheim.
      </>
    ),
  },
  {
    id: 'bron-enquete-b2b-2026',
    content: (
      <>
        Groep Challenge Cube. (2026).{' '}
        <em>
          Enquêteresultaten B2B prijsgevoeligheidsonderzoek — Challenge Table [Primaire data]
        </em>
        . Hogeschool Windesheim.
      </>
    ),
  },
  {
    id: 'bron-westendorp-1976',
    content: (
      <>
        Van Westendorp, P. H. (1976). NSS Price Sensitivity Meter (PSM) — A new approach to study
        consumer perception of prices.{' '}
        <em>Proceedings of the 29th ESOMAR Congress</em>, 139–167.
      </>
    ),
  },
]

export default function Opdracht13Page() {
  return (
    <>
      <PageHead
        number="13"
        label="Portfolio · Opdracht"
        title="Prijsgevoeligheidsanalyse — resultaten."
        lead="Uitwerking van de Van Westendorp-resultaten voor de Challenge Cube (B2C, 120 respondenten) en de Challenge Table (B2B, 29 respondenten): prijspunten, grafische analyse, kwalitatieve inzichten en vertaling naar de introductieprijs in de businesscase."
        meta={[
          { key: 'Type', value: 'Groepsopdracht' },
          { key: 'Module', value: 'Waardecreatie' },
          { key: 'Respondenten', value: 'B2C aantal respondenten: 120 · B2B aantal respondenten: 29' },
        ]}
      />

      {/* B2C RESULTATEN */}
      <section className="px-6 md:px-10 py-20">
        <SectionHeading
          eyebrow="Onderdeel 1 · B2C — Challenge Cube"
          heading="B2C-resultaten."
        />
        <div className="grid gap-10 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Het B2C-onderzoek voor de Challenge Cube is voor 9 april afgerond. Het leverde
            120 bruikbare respondenten op, ruimschoots boven de streefomvang van 90. Er zijn een
            aantal respondenten geweest die de enquête niet serieus invulden; hun antwoorden zijn
            verwijderd om de betrouwbaarheid te waarborgen{' '}
            <Cite id="bron-enquete-b2c-2025">(Groep Challenge Cube, 2025)</Cite>.
          </p>

          {/* Tabel 14 */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
              <thead>
                <tr>
                  <th style={thStyle()}>Kenmerk</th>
                  <th style={thStyle()}>Waarde</th>
                  <th style={thStyle()}>Toelichting</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Respondenten', '120', 'Na uitsluiting 2 outliers'],
                  ['Geslacht', '52% man / 48% vrouw', 'Representatieve verdeling'],
                  ['Gemiddelde leeftijd', '28,2 jaar', ''],
                  ['Leeftijdsbereik', '12 – 75 jaar', 'Inclusief leerlingen, docenten, ouders'],
                  ['Koopt bij €14,95', '76% (91/120)', 'Sterke aankoopintentie op testprijs'],
                  [
                    'School moet aanbieden',
                    '85% (102/120)',
                    'Breed draagvlak voor schoolimplementatie',
                  ],
                ].map(([kenmerk, waarde, toelichting], i) => (
                  <tr key={i}>
                    <td style={{ ...tdStyle(), color: 'var(--text-primary)', fontWeight: 500 }}>
                      {kenmerk}
                    </td>
                    <td style={{ ...tdStyle(), color: 'var(--accent-mint)' }}>{waarde}</td>
                    <td style={tdStyle()}>{toelichting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={tableCaptionStyle}>Tabel 14 — B2C steekproefresultaten</p>
          </div>

          {/* Tabel 15 */}
          <div>
            <p className="text-[17px] md:text-[18px]" style={{ ...paragraphStyle, marginBottom: '20px' }}>
              Op basis van de cumulatieve kruispunten in de Van Westendorp-grafiek (Figuur 3) zijn
              de volgende prijspunten berekend uit de antwoorden van 120 respondenten{' '}
              <Cite id="bron-westendorp-1976">(Van Westendorp, 1976)</Cite>:
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
                <thead>
                  <tr>
                    <th style={thStyle()}>Prijspunt</th>
                    <th style={thStyle()}>Waarde</th>
                    <th style={thStyle()}>Betekenis</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      'Marginaal Goedkooptepunt (MGP)',
                      '~€14,50',
                      'Ondergrens: hieronder twijfelen respondenten aan de kwaliteit.',
                    ],
                    [
                      'Optimale Prijsstelling (OPS)',
                      '~€15,00',
                      'Laagste koopweerstand — aanbevolen introductieprijs.',
                    ],
                    [
                      'Indifferentiepunt (IDP)',
                      '~€15,50',
                      "'Normale' prijs; hogere marge, iets lagere afzet.",
                    ],
                    [
                      'Marginaal Duurtepunt (MDP)',
                      '~€17,50',
                      'Bovengrens: boven dit bedrag haakt de doelgroep af.',
                    ],
                    [
                      'Acceptabele prijsrange',
                      '€14,50 – €17,50',
                      'Bandbreedte waarbinnen de prijs als marktacceptabel wordt ervaren.',
                    ],
                  ].map(([prijspunt, waarde, betekenis], i) => (
                    <tr key={i}>
                      <td style={{ ...tdStyle(), color: 'var(--text-primary)', fontWeight: 500 }}>
                        {prijspunt}
                      </td>
                      <td style={{ ...tdStyle(), color: 'var(--accent-mint)', whiteSpace: 'nowrap' }}>
                        {waarde}
                      </td>
                      <td style={tdStyle()}>{betekenis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={tableCaptionStyle}>Tabel 15 — B2C prijsonderzoekresultaten</p>
            </div>
          </div>

          {/* Figuur 3 */}
          <figure>
            <Image
              src="/V_Westenberg_B2C.png"
              alt="Van Westendorp prijsgrafiek B2C — Challenge Cube. Vier cumulatieve curves: Te goedkoop, Goedkoop, Duur, Te duur."
              width={1360}
              height={768}
              style={{
                width: '100%',
                height: 'auto',
                border: '0.5px solid var(--border)',
                backgroundColor: '#fff',
              }}
            />
            <figcaption style={figCaptionStyle}>
              Figuur 3 — B2C prijsonderzoek Van Westendorp
            </figcaption>
          </figure>

          {/* Kwalitatieve inzichten */}
          <div className="grid gap-4">
            <h3
              className="text-[20px] md:text-[22px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              Kwalitatieve inzichten
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Naast de prijsvragen gaf het B2C-onderzoek ook kwalitatieve inzichten. De meest
              genoemde verbeterpunten waren de afhankelijkheid van QR-codes (onbruikbaar bij
              telefoonverbod op school), de behoefte aan meer variatie in challenges en de wens
              voor een aantrekkelijker design. Bijna alle respondenten zouden het product gebruiken
              met een groep van vier of meer personen, wat de sociale positionering van het concept
              bevestigt. De gemiddelde aantrekkelijkheidsscore bedroeg 7,5 op een schaal van 1–10.
            </p>
          </div>
        </div>
      </section>

      {/* B2B RESULTATEN */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="Onderdeel 2 · B2B — Challenge Table"
          heading="B2B-resultaten."
        />
        <div className="grid gap-10 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Het B2B-onderzoek was later afgerond omdat de iteratie naar de Challenge Table pas later
            in het project plaatsvond. Het leverde 29 respondenten op, gericht op B2B-beslissers
            bij middelbare scholen{' '}
            <Cite id="bron-enquete-b2b-2026">(Groep Challenge Cube, 2026)</Cite>.
          </p>

          {/* Tabel 16 */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
              <thead>
                <tr>
                  <th style={thStyle()}>Kenmerk</th>
                  <th style={thStyle()}>Waarde</th>
                  <th style={thStyle()}>Toelichting</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Respondenten', '29', 'Gericht op B2B-beslissers middelbare scholen'],
                  [
                    'Doelgroep',
                    'Schooldirecties & inkopers',
                    'Ook leraren hebben de enquête ingevuld.',
                  ],
                  [
                    'Kanalen',
                    'LinkedIn, e-mail, directe contacten',
                    'Gericht op beslissers; ook scholen direct benaderd',
                  ],
                ].map(([kenmerk, waarde, toelichting], i) => (
                  <tr key={i}>
                    <td style={{ ...tdStyle(), color: 'var(--text-primary)', fontWeight: 500 }}>
                      {kenmerk}
                    </td>
                    <td style={{ ...tdStyle(), color: 'var(--accent-mint)' }}>{waarde}</td>
                    <td style={tdStyle()}>{toelichting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={tableCaptionStyle}>Tabel 16 — B2B steekproefresultaten</p>
          </div>

          {/* Tabel 17 */}
          <div>
            <p className="text-[17px] md:text-[18px]" style={{ ...paragraphStyle, marginBottom: '20px' }}>
              Op basis van de Van Westendorp-grafiek (Figuur 4) zijn de volgende prijspunten
              afgeleid voor de eenmalige aanschafprijs van de Challenge Table:
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
                <thead>
                  <tr>
                    <th style={thStyle()}>Prijspunt</th>
                    <th style={thStyle()}>Waarde</th>
                    <th style={thStyle()}>Betekenis</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      'Marginaal Goedkooptepunt (MGP)',
                      '~€8.000',
                      'Ondergrens aanschafprijs — onder dit bedrag twijfelen beslissers aan kwaliteit.',
                    ],
                    [
                      'Optimale Prijsstelling (OPS)',
                      '€8.000 – €9.000',
                      'Laagste gecombineerde weerstand. TG=0%, TD=0% — zone met minste prijsbezwaren. Aanbevolen introductieprijs.',
                    ],
                    [
                      'Indifferentiepunt (IDP)',
                      '€7.750',
                      "Snijpunt Goedkoop ↓ en Duur ↑. Respondenten ervaren dit als de 'normale' marktprijs voor dit type product.",
                    ],
                    [
                      'Marginaal Duurtepunt (MDP)',
                      '€11.500 – €12.000',
                      'Bovengrens: Goedkoop-curve bereikt 0%, Te duur begint te stijgen. Boven dit bedrag haakt de doelgroep af.',
                    ],
                    [
                      'Acceptabele prijsrange',
                      '€4.500 – €11.500',
                      'Bandbreedte waarbinnen de aanschafprijs als marktacceptabel wordt beschouwd door B2B-beslissers.',
                    ],
                  ].map(([prijspunt, waarde, betekenis], i) => (
                    <tr key={i}>
                      <td style={{ ...tdStyle(), color: 'var(--text-primary)', fontWeight: 500 }}>
                        {prijspunt}
                      </td>
                      <td style={{ ...tdStyle(), color: 'var(--accent-mint)', whiteSpace: 'nowrap' }}>
                        {waarde}
                      </td>
                      <td style={tdStyle()}>{betekenis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={tableCaptionStyle}>Tabel 17 — B2B prijsonderzoekresultaten</p>
            </div>
          </div>

          {/* Figuur 4 */}
          <figure>
            <Image
              src="/V_Westendorp_B2B.jpeg"
              alt="Van Westendorp prijsgrafiek B2B — Challenge Table. Vier cumulatieve curves: Te goedkoop, Goedkoop, Duur, Te duur."
              width={1360}
              height={768}
              style={{
                width: '100%',
                height: 'auto',
                border: '0.5px solid var(--border)',
                backgroundColor: '#fff',
              }}
            />
            <figcaption style={figCaptionStyle}>
              Figuur 4 — B2B prijsonderzoek Van Westendorp
            </figcaption>
          </figure>
        </div>
      </section>

      {/* VERGELIJKING B2C VS B2B */}
      <section
        className="px-6 md:px-10 py-20"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <SectionHeading
          eyebrow="Onderdeel 3 · Vergelijking"
          heading="Vergelijking B2C vs. B2B."
        />
        <div className="grid gap-10 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            De twee onderzoeken vullen elkaar aan en bevestigen samen de tweesporige
            go-to-market-strategie van het concept: de eindgebruiker (leerling) wordt via de
            B2C-Cube warm gemaakt voor het concept, terwijl de school als beslisser via de
            B2B-Table wordt overtuigd van de aanschaf. De prijsschalen zijn fundamenteel
            verschillend omdat de referentiekaders en budgetsystematiek van leerlingen en
            schoolbestuurders niet vergelijkbaar zijn.
          </p>

          {/* Tabel 18 */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
              <thead>
                <tr>
                  <th style={thStyle()}>Prijspunt</th>
                  <th style={thStyle()}>B2C — Challenge Cube</th>
                  <th style={thStyle()}>B2B — Challenge Table</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['MGP (ondergrens)', '~€14,50', '~€8.000'],
                  ['OPS (introductieprijs)', '~€15,00', '€8.000 – €8.500'],
                  ['IDP (normaalprijs)', '~€15,50', '€8.500 – €9.000'],
                  ['MDP (bovengrens)', '~€17,50', '€13.500 – €14.000'],
                  ['Aantal respondenten', '120 respondenten', '29 respondenten'],
                ].map(([prijspunt, b2c, b2b], i) => (
                  <tr key={i}>
                    <td style={{ ...tdStyle(), color: 'var(--text-primary)', fontWeight: 500 }}>
                      {prijspunt}
                    </td>
                    <td style={tdStyle()}>{b2c}</td>
                    <td style={tdStyle()}>{b2b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={tableCaptionStyle}>Tabel 18 — Resultaten prijsonderzoek B2C vs. B2B</p>
          </div>
        </div>
      </section>

      {/* CONCLUSIE */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="Conclusie · Vertaling naar businesscase"
          heading="Conclusie en vertaling naar businesscase."
        />
        <div className="grid gap-8 max-w-[820px]">
          <div className="grid gap-4">
            <h3
              className="text-[20px] md:text-[22px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              Challenge Cube (B2C)
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              De introductieprijs wordt vastgesteld op <strong style={{ color: 'var(--text-primary)' }}>€14,95</strong>, dit
              ligt op de OPS (~€15,00) en is in lijn met de penetratiestrategie{' '}
              <Cite href="/bronnen/opdracht-10">(Opdracht 10)</Cite>. Bij deze prijs heeft 76%
              van de respondenten een positieve aankoopintentie en steunt 85% het concept voor
              schoolimplementatie. Na de introductiefase is een verhoging naar ~€15,50 (IDP)
              mogelijk om de marge te verbeteren.
            </p>
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
              Challenge Table (B2B)
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              De introductieprijs voor de eenmalige aanschaf wordt vastgesteld op{' '}
              <strong style={{ color: 'var(--text-primary)' }}>€8.000 – €9.000</strong> — dit is
              de zone waar zowel TG als TD op 0% staan en de koopweerstand minimaal is (OPS).
              Het MGP ligt op ~€4.500: daarboven verdwijnt kwaliteitstwijfel volledig. Het IDP
              ligt op ~€7.750 ('normale' prijs), terwijl het MDP op ~€11.500 de bovengrens
              markeert. De acceptabele prijsrange (€4.500–€11.500) biedt ook ruimte voor
              schaalbaarheidsscenario's. Het maandelijkse onderhoudsabonnement wordt op basis
              van de kostprijsberekening (Opdracht 12) apart bepaald.
            </p>
          </div>

          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            De prijspunten uit beide onderzoeken vormen de directe input voor de
            omzetprognoses in de financiële businesscase (Opdracht 12, Excel).
          </p>
        </div>
      </section>

      {/* Bronnenlijst */}
      <section
        className="px-6 md:px-10 py-20"
        style={{ borderTop: '0.5px solid var(--border)' }}
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
