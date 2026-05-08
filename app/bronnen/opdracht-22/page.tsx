import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import PageHead from '@/components/rubric/PageHead'
import SectionHeading from '@/components/rubric/SectionHeading'

export const metadata = {
  title: 'Opdracht 22 — Doelmarkt en segmentatie · Challenge Cube',
}

const citeStyle: React.CSSProperties = {
  color: 'var(--accent-mint)',
  textDecoration: 'underline',
  textDecorationThickness: '0.5px',
  textUnderlineOffset: '2px',
}

function Cite({
  id,
  href,
  children,
}: {
  id?: string
  href?: string
  children: React.ReactNode
}) {
  const targetHref = href ?? (id ? `#${id}` : '#')
  return (
    <a href={targetHref} style={citeStyle}>
      {children}
    </a>
  )
}

type Bron = {
  id: string
  content: React.ReactNode
}

const paragraphStyle: React.CSSProperties = {
  lineHeight: 1.75,
  color: 'var(--text-secondary)',
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

type Segment = {
  naam: string
  aandeel: string
  probleem: string
  budget: string
  aansluiting: string
  prioriteit: string
  prioriteitColor: string
}

const segmentScores: Segment[] = [
  {
    naam: 'Beleidsgedreven',
    aandeel: '20–30%',
    probleem: 'Hoog',
    budget: 'Toegankelijk',
    aansluiting: 'Uitstekend',
    prioriteit: '1e keuze',
    prioriteitColor: 'var(--accent-mint)',
  },
  {
    naam: 'Budgetbeperkt',
    aandeel: '40–50%',
    probleem: 'Hoog',
    budget: 'Minimaal',
    aansluiting: 'Laag',
    prioriteit: '4e keuze',
    prioriteitColor: 'var(--text-dim)',
  },
  {
    naam: 'Sportgericht',
    aandeel: '20%',
    probleem: 'Middelgroot',
    budget: 'Sportgericht',
    aansluiting: 'Matig',
    prioriteit: '3e keuze',
    prioriteitColor: 'var(--text-muted)',
  },
  {
    naam: 'Traditioneel',
    aandeel: '10–15%',
    probleem: 'Laag',
    budget: 'Kerntaken',
    aansluiting: 'Laag',
    prioriteit: '4e keuze',
    prioriteitColor: 'var(--text-dim)',
  },
]

const bronnen: Bron[] = [
  {
    id: 'bron-klooster-2024',
    content: (
      <>
        Klooster, E. (2024). <em>Marketing: van strategie naar uitvoering</em>. Noordhoff Uitgevers.
      </>
    ),
  },
  {
    id: 'bron-marketresponse-2024',
    content: (
      <>
        Marketresponse. (2024). <em>STP-model toegepast in de Nederlandse markt</em>. Marketresponse Nederland.{' '}
        <a
          href="https://www.marketresponse.nl"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.marketresponse.nl
        </a>
      </>
    ),
  },
  {
    id: 'bron-kvlo-2025',
    content: (
      <>
        KVLO. (2025). <em>Bewegen en gezondheid op school: stand van zaken en aanbevelingen</em>. Koninklijke Vereniging voor Lichamelijke Opvoeding.{' '}
        <a
          href="https://www.kvlo.nl"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.kvlo.nl
        </a>
      </>
    ),
  },
  {
    id: 'bron-gezondeschool-2026',
    content: (
      <>
        Gezonde School. (2026, januari). <em>Nieuwe gezonde schoolactiviteiten</em>. Gezonde School.{' '}
        <a
          href="https://www.gezondeschool.nl"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.gezondeschool.nl
        </a>
      </>
    ),
  },
  {
    id: 'bron-rivm-2020',
    content: (
      <>
        RIVM. (2020). <em>Gezonder op de basisschool: schoollunches en meer bewegen</em>. Rijksinstituut voor Volksgezondheid en Milieu.{' '}
        <a
          href="https://www.rivm.nl/nieuws/gezonde-schoollunch-en-meer-bewegen-op-basisschool-helpen-in-aanpak-van-overgewicht"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          Open bron
        </a>
      </>
    ),
  },
  {
    id: 'bron-eck-2019',
    content: (
      <>
        Eck, E. van. (2019). <em>Buitensport en bewegen op school: effecten op welzijn en leerresultaten</em>. Mulier Instituut.{' '}
        <a
          href="https://www.mulierinstituut.nl"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.mulierinstituut.nl
        </a>
      </>
    ),
  },
  {
    id: 'bron-arboportaal-2024',
    content: (
      <>
        Arboportaal. (2024). <em>Gezond en veilig werken en leren op school</em>. Ministerie van Sociale Zaken en Werkgelegenheid.{' '}
        <a
          href="https://www.arboportaal.nl"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.arboportaal.nl
        </a>
      </>
    ),
  },
]

export default function Opdracht22Page() {
  return (
    <>
      <PageHead
        number="22"
        label="Portfolio · Opdracht"
        title="Doelmarkt en segmentatie."
        lead="Toepassing van het STP-model op de Challenge Table: systematische marktindeling, segmentbeoordeling op drie criteria en onderbouwde keuze voor de primaire doelgroep."
        meta={[
          { key: 'Type', value: 'Groepsopdracht' },
          { key: 'Model', value: 'STP — Segmentation, Targeting, Positioning' },
          { key: 'Product', value: 'Challenge Table' },
        ]}
      />

      {/* ONDERDEEL 1 — Methode en markt */}
      <section className="px-6 md:px-10 py-20">
        <SectionHeading
          eyebrow="Onderdeel 1 · Methode en marktomschrijving"
          heading="STP-model en marktbeschrijving."
        />

        <div className="grid gap-8 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Voor het bepalen van een effectieve doelgroep voor de Challenge Cube is gebruikgemaakt van het STP-model (Segmentation, Targeting, Positioning). Dit model maakt het mogelijk om de markt systematisch op te delen in homogene groepen op basis van relevante kenmerken. In dit onderzoek is gekozen voor een combinatie van demografische, gedragsmatige, psychografische en situationele variabelen (schooltype, budget, beleid), aangezien de Challenge Table een B2B-infrastructuurproduct is voor middelbare scholen{' '}
            <Cite id="bron-klooster-2024">(Klooster, 2024)</Cite>{' '}
            <Cite id="bron-marketresponse-2024">(Marketresponse, 2024)</Cite>.
          </p>
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            De markt bestaat uit middelbare scholieren tussen de 12 en 18 jaar. Binnen deze groep is onderscheid gemaakt op basis van snackgedrag, motivatie en context. Hierbij wordt zichtbaar dat snackgedrag niet uitsluitend functioneel is, maar sterk sociaal gedreven. Jongeren consumeren snacks voornamelijk tijdens pauzes en sociale momenten, waarbij gezelligheid en groepsinteractie een belangrijke rol spelen{' '}
            <Cite id="bron-kvlo-2025">(KVLO, 2025)</Cite>.
          </p>
        </div>
      </section>

      {/* ONDERDEEL 2 — Vier segmenten */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="Onderdeel 2 · Segmentatie"
          heading="Vier marktsegmenten."
        />

        <div className="grid gap-10 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Op basis van schooltype, budget en beleid zijn vier segmenten te onderscheiden:
          </p>

          {/* Segment 1 */}
          <div className="grid gap-4">
            <h3
              className="text-[22px] md:text-[24px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              1. Beleidsgedreven scholen{' '}
              <span style={{ color: 'var(--accent-mint)' }}>(Gezonde School)</span>
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Beleidsgedreven scholen (Gezonde School, GGD/JOGG-partnerschappen) investeren actief in welzijnsactiviteiten zoals Brain Boost-programma's. Ze hebben vaak playground equipment; de Challenge Table past als vaste aanvulling{' '}
              <Cite id="bron-gezondeschool-2026">(Gezonde School, 2026)</Cite>.
            </p>
          </div>

          {/* Segment 2 */}
          <div className="grid gap-4">
            <h3
              className="text-[22px] md:text-[24px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              2. Budgetbeperkte scholen{' '}
              <span style={{ color: 'var(--text-muted)' }}>(40–50%)</span>
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Budgetbeperkte scholen zijn vaak kleinere VMBO/HAVO-locaties in sociaaleconomisch zwakkere gebieden. Ze prioriteren kerndiensten (lessen, onderhoud) boven niet-essentiële infrastructuur. Pauzes worden traditioneel ingevuld met vrij spel of kantinebezoek; dure semi-permanente oplossingen (€500–1000) zijn onhaalbaar. Budgetten gaan naar acute behoeften, niet naar preventieve welzijnsinvesteringen{' '}
              <Cite id="bron-rivm-2020">(RIVM, 2020)</Cite>.
            </p>
          </div>

          {/* Segment 3 */}
          <div className="grid gap-4">
            <h3
              className="text-[22px] md:text-[24px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              3. Sportgerichte scholen{' '}
              <span style={{ color: 'var(--text-muted)' }}>(20%)</span>
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Sportgerichte scholen hebben uitgebreide buitensportfaciliteiten (voetbalkooien, basketbalvelden, atletiekbanen) en focussen op fysieke activiteit tijdens pauzes. Sociale interactie vindt primair buiten plaats; binnentafels in aula's zijn minder relevant omdat leerlingen naar buiten worden gestuurd. Deze scholen hebben vaak LO-ambities en beweegprogramma's, maar minder focus op sociale pauze-infrastructuur{' '}
              <Cite id="bron-eck-2019">(Eck, 2019)</Cite>.
            </p>
          </div>

          {/* Segment 4 */}
          <div className="grid gap-4">
            <h3
              className="text-[22px] md:text-[24px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              4. Traditionele scholen{' '}
              <span style={{ color: 'var(--text-muted)' }}>(10–15%)</span>
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Traditionele scholen handhaven conventionele pauze-indelingen zonder expliciet welzijnsbeleid. Budgetten gaan naar kerntaken; innovatieve interventies worden ad hoc ingevoerd. Pauzes zijn vrij, ongestructureerd en zonder meetbare doelen. Deze groep heeft lage prioriteit voor infrastructurele veranderingen{' '}
              <Cite id="bron-arboportaal-2024">(Arboportaal, 2024)</Cite>.
            </p>
          </div>
        </div>
      </section>

      {/* ONDERDEEL 3 — Segmentbeoordeling */}
      <section
        className="px-6 md:px-10 py-20"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <SectionHeading
          eyebrow="Onderdeel 3 · Segmentbeoordeling"
          heading="Beoordeling op drie criteria."
        />

        <div className="grid gap-8 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            De segmenten zijn beoordeeld op probleemomvang (snackrituelen), segmentgrootte (budget) en productaansluiting (infrastructuur), volgens standaardcriteria.
          </p>

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
                  <th style={thStyle}>Segment</th>
                  <th style={thStyle}>Aandeel VO</th>
                  <th style={thStyle}>Probleemomvang</th>
                  <th style={thStyle}>Budget</th>
                  <th style={thStyle}>Productaansluiting</th>
                  <th style={thStyle}>Prioriteit</th>
                </tr>
              </thead>
              <tbody>
                {segmentScores.map((seg, i) => (
                  <tr
                    key={seg.naam}
                    style={{
                      backgroundColor: i % 2 === 0 ? 'transparent' : 'rgba(245,245,242,0.02)',
                    }}
                  >
                    <td style={{ ...tdStyle, color: 'var(--text-primary)', fontWeight: 400 }}>
                      {seg.naam}
                    </td>
                    <td style={tdStyle}>{seg.aandeel}</td>
                    <td style={tdStyle}>{seg.probleem}</td>
                    <td style={tdStyle}>{seg.budget}</td>
                    <td style={tdStyle}>{seg.aansluiting}</td>
                    <td style={{ ...tdStyle, color: seg.prioriteitColor, fontWeight: 400 }}>
                      {seg.prioriteit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid gap-6">
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Beleidsgedreven scholen scoren het hoogst. Het probleem (snackrituelen tijdens pauzes) is hier het meest urgent vanwege expliciete Gezonde School-doelen. Het segment is middel-groot (20–30% van VO-scholen) met toegang tot stimuleringsregelingen. De productaansluiting is uitstekend omdat deze scholen al investeren in pauze-infrastructuur zoals playground equipment{' '}
              <Cite id="bron-gezondeschool-2026">(Gezonde School, 2026)</Cite>.
            </p>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Budgetbeperkte scholen hebben een hoog probleem (snackgedrag), maar vormen het grootste segment (40–50%) met minimale budgetten voor niet-essentiële investeringen. De productaansluiting is laag door gebrek aan financiële slagkracht{' '}
              <Cite id="bron-rivm-2020">(RIVM, 2020)</Cite>.
            </p>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Sportgerichte scholen hebben een middelgroot probleem omdat sociale interactie vooral buiten plaatsvindt. Ze vormen een middelgroot segment (20%) met focus op sportfaciliteiten, waardoor binnentafels matig aansluiten{' '}
              <Cite id="bron-eck-2019">(Eck, 2019)</Cite>.
            </p>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Traditionele scholen hebben een laag probleem omdat pauzes ongestructureerd zijn zonder welzijnsbeleid. Ze vormen het kleinste segment (10–15%) met lage prioriteit voor innovatie{' '}
              <Cite id="bron-arboportaal-2024">(Arboportaal, 2024)</Cite>.
            </p>
          </div>
        </div>
      </section>

      {/* ONDERDEEL 4 — Doelgroepkeuze */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="Onderdeel 4 · Targeting"
          heading="Keuze voor de primaire doelgroep."
        />

        <div className="grid gap-8 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Het beleidsgedreven segment scoort duidelijk het hoogst door de combinatie van urgent probleem, toegankelijk budget en perfecte productfit. Op basis van onze analyse is gekozen voor <strong style={{ color: 'var(--text-primary)' }}>beleidsgedreven middelbare scholen</strong> als primaire doelgroep. Deze keuze is logisch om drie redenen.
          </p>

          <div className="grid gap-4">
            <h3
              className="text-[22px] md:text-[24px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              Reden 1 — Probleemfit
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Deze scholen hebben een expliciet probleem dat de Challenge Table oplost: het gebrek aan vaste sociale alternatieven voor snackrituelen in aula's en kantines. Ze willen precies dit aanpakken via hun Gezonde School-programma's en welzijnsdoelen.
            </p>
          </div>

          <div className="grid gap-4">
            <h3
              className="text-[22px] md:text-[24px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              Reden 2 — Financiële slagkracht
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Deze scholen hebben de financiële slagkracht en de juiste budgetlijnen. Met welzijnsbudgetten van €5.000–€50.000 per jaar en ervaring met playground equipment-investeringen is een Challenge Table van tussen de 5 en 10 duizend euro een haalbare investering die past binnen bestaande inkoopcycli van 3–5 jaar.
            </p>
          </div>

          <div className="grid gap-4">
            <h3
              className="text-[22px] md:text-[24px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              Reden 3 — Infrastructuurmatch
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              De productaansluiting is perfect. De meeste scholen hebben al 1–3 aula's/kantines als centrale pauzelocaties en zoeken continu naar manieren om hun welzijnsprofiel te versterken. De Challenge Table sluit aan bij hun bestaande infrastructuur en beleidsambities zonder dat ze nieuwe routines hoeven te implementeren.
            </p>
          </div>
        </div>
      </section>

      {/* ONDERDEEL 5 — Positionering */}
      <section
        className="px-6 md:px-10 py-20"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <SectionHeading
          eyebrow="Onderdeel 5 · Positioning"
          heading="Positionering en conclusie."
        />

        <div className="grid gap-8 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            De positionering richt zich op de Challenge Table als <em>vaste sociale pauze-infrastructuur voor Gezonde School-certificering</em>. Door te focussen op meetbare beleidsresultaten in plaats van losse productvoordelen, wordt de Table een logische keuze binnen de budgetten van deze scholen.
          </p>
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Deze doelgroepkeuze maximaliseert zowel de probleem-passendheid als de haalbaarheid van adoptie en legt de basis voor schaalbare uitrol via Gezonde School-netwerken en stimuleringsregelingen.
          </p>
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
