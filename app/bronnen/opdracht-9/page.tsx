import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import PageHead from '@/components/rubric/PageHead'
import SectionHeading from '@/components/rubric/SectionHeading'

export const metadata = {
  title: 'Opdracht 9 — Concurrentieanalyse · Challenge Cube',
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

type Bron = { id: string; content: React.ReactNode }

const paragraphStyle: React.CSSProperties = {
  lineHeight: 1.75,
  color: 'var(--text-secondary)',
}

// ---- Table shared styles ----
const tableCaptionStyle: React.CSSProperties = {
  marginTop: '12px',
  fontSize: '12px',
  letterSpacing: '0.1em',
  color: 'var(--text-dim)',
}

type ConcurrentRow = {
  concurrent: React.ReactNode
  aanbod: React.ReactNode
  sterk: string
  zwak: string
}

const directeConcurrenten: ConcurrentRow[] = [
  {
    concurrent: 'Beschrijfbare dobbelstenen',
    aanbod: (
      <>
        Fysieke dobbelstenen met zelfgeschreven opdrachten; gericht op les en groepsvorming.{' '}
        <Cite id="bron-educadora">(Educadora, z.d.)</Cite>
      </>
    ),
    sterk: 'Laagdrempelig, goedkoop, aanpasbaar.',
    zwak: 'Niet specifiek voor pauze; vereist voorbereiding; weinig sociale aantrekkingskracht voor tieners.',
  },
  {
    concurrent: 'Bewegingsdobbelstenen (Educadora)',
    aanbod: (
      <>
        Dobbelsets voor bewegen of speelse groepsopdrachten tussendoor.{' '}
        <Cite id="bron-educadora">(Educadora, z.d.)</Cite>
      </>
    ),
    sterk: 'Gericht op beweging; breed inzetbaar; betaalbaar.',
    zwak: 'Geen vaste plek; afhankelijk van begeleiding; minder zichtbaar als pauzeaanbieding.',
  },
  {
    concurrent: 'Gespreks- en kennismakingsdobbelspellen',
    aanbod: (
      <>
        Dobbelspellen voor gespreksactivering en kennismaking in groepsverband.{' '}
        <Cite id="bron-onderwijswereld-2020">(Onderwijswereld, 2020)</Cite>
      </>
    ),
    sterk: 'Sociaal activerend; lage drempel; geschikt voor groepen.',
    zwak: 'Primair voor begeleide situaties; minder aantrekkelijk als vrij pauzespel.',
  },
]

const bredeConcurrenten: ConcurrentRow[] = [
  {
    concurrent: 'Energizerkaarten (Earthgames)',
    aanbod: (
      <>
        Spelkaarten voor beweeg- en groepsactiviteiten op school en BSO.{' '}
        <Cite id="bron-earthgames">(Earthgames, z.d.)</Cite>
      </>
    ),
    sterk: 'Laagdrempelig, goedkoop, breed inzetbaar.',
    zwak: 'Geen vaste plek of structuur; minder zichtbaar als structureel pauzeaanbod.',
  },
  {
    concurrent: 'Spelkarren / spelpakketten (Nijha)',
    aanbod: (
      <>
        Complete spelpakketten voor de pauze.{' '}
        <Cite id="bron-nijha-2026">(Nijha, 2026)</Cite>
      </>
    ),
    sterk: 'Breed aanbod; aanwezig op veel scholen.',
    zwak: 'Hoge kosten; vereist beheer en opbergruimte; geen eigen identiteit als activatiepunt.',
  },
  {
    concurrent: 'Tafeltennis / voetbaltafel',
    aanbod: 'Vaste speelinfrastructuur gericht op competitie en beweging.',
    sterk: 'Hoge sociale aantrekkingskracht; beproefd concept; stimuleert beweging.',
    zwak: 'Hoge kosten; veel ruimte; beperkt tot specifieke activiteit; niet voor iedereen.',
  },
  {
    concurrent: 'Picoo (interactief bewegingssysteem)',
    aanbod: (
      <>
        Digitaal-fysiek systeem met tientallen spellen voor school.{' '}
        <Cite id="bron-picoo-2026">(Picoo, 2026)</Cite>
      </>
    ),
    sterk: 'Technologische aantrekkingskracht; breed spelrepertoire; meetbaar.',
    zwak: 'Hoge aanschafkosten; technische installatie vereist; afhankelijk van stroom.',
  },
  {
    concurrent: 'Kaartspellen / simpele groepsspelletjes',
    aanbod: 'Spontane, laagdrempelige groepsactiviteiten.',
    sterk: 'Gratis of goedkoop; hoge sociale waarde; vertrouwd bij jongeren.',
    zwak: 'Geen vaste structuur; afhankelijk van initiatief leerlingen; minder zichtbaar.',
  },
]

const indirecteConcurrenten: ConcurrentRow[] = [
  {
    concurrent: 'Supermarkten rond school',
    aanbod: (
      <>
        Compleet pauzemoment: weggaan, vrijheid, samen kiezen, routine en snacks.{' '}
        <Cite id="bron-pointer-2022">(Pointer, 2022)</Cite>
      </>
    ),
    sterk: 'Sterke sociale routine; gevoel van vrijheid; breed aanbod.',
    zwak: 'Bevordert ongezond eetgedrag; scholieren verlaten terrein; tijdrovend.',
  },
  {
    concurrent: 'Fastfood / snackbars rond school',
    aanbod: (
      <>
        Vergelijkbaar pauzealternatief buiten school.{' '}
        <Cite id="bron-pointer-2022">(Pointer, 2022)</Cite>
      </>
    ),
    sterk: 'Sterke aantrekkingskracht; gevoel van vrijheid.',
    zwak: 'Ongezond; buiten schoolterrein; niet controleerbaar.',
  },
  {
    concurrent: 'Schoolkantine / vendingmachines',
    aanbod: (
      <>
        Plek op school om te kopen, rondhangen en socialiseren.{' '}
        <Cite id="bron-voedingscentrum">(Voedingscentrum, z.d.)</Cite>
      </>
    ),
    sterk: 'Aanwezig op school; laagdrempelig; gecombineerd eten en socialiseren.',
    zwak: 'Niet altijd gezond; concurreert ook met Challenge Table als hangplek.',
  },
  {
    concurrent: 'Vrij rondhangen / scrollen / bellen',
    aanbod: (
      <>
        Gratis gedrag: hangen, praten, bellen, rondlopen.{' '}
        <Cite id="bron-rijksoverheid-2024b">(Rijksoverheid, 2024b)</Cite>
      </>
    ),
    sterk: 'Gratis; geen organisatie nodig; aansluit bij bestaande routine.',
    zwak: 'Passief; geen bijdrage aan gezondheid of actief sociaal spel.',
  },
]

function ConcurrentenTabel({
  rows,
  caption,
}: {
  rows: ConcurrentRow[]
  caption: string
}) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '15px',
        }}
      >
        <thead>
          <tr>
            {['Concurrent', 'Aanbod / focus', 'Sterke punten', 'Zwakke punten'].map((col, i) => (
              <th
                key={col}
                style={{
                  padding: '12px 16px',
                  textAlign: 'left',
                  fontWeight: 400,
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  borderBottom: '0.5px solid var(--border-strong)',
                  backgroundColor: 'var(--surface)',
                  color: i === 2
                    ? 'var(--accent-mint)'
                    : i === 3
                    ? 'var(--accent-amber)'
                    : 'var(--text-muted)',
                  whiteSpace: 'nowrap',
                }}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              style={{
                backgroundColor: i % 2 === 0 ? 'transparent' : 'var(--canvas-elevated)',
              }}
            >
              <td
                style={{
                  padding: '14px 16px',
                  color: 'var(--text-primary)',
                  lineHeight: 1.5,
                  borderBottom: '0.5px solid var(--border)',
                  verticalAlign: 'top',
                  fontWeight: 500,
                  minWidth: '160px',
                }}
              >
                {row.concurrent}
              </td>
              <td
                style={{
                  padding: '14px 16px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  borderBottom: '0.5px solid var(--border)',
                  verticalAlign: 'top',
                  minWidth: '200px',
                }}
              >
                {row.aanbod}
              </td>
              <td
                style={{
                  padding: '14px 16px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  borderBottom: '0.5px solid var(--border)',
                  verticalAlign: 'top',
                  minWidth: '180px',
                }}
              >
                {row.sterk}
              </td>
              <td
                style={{
                  padding: '14px 16px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  borderBottom: '0.5px solid var(--border)',
                  verticalAlign: 'top',
                  minWidth: '180px',
                }}
              >
                {row.zwak}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={tableCaptionStyle}>{caption}</p>
    </div>
  )
}

const bronnen: Bron[] = [
  {
    id: 'bron-earthgames',
    content: (
      <>
        Earthgames. (z.d.). <em>Energizerkaarten</em>. Geraadpleegd op 2 mei 2026, van{' '}
        <a
          href="https://www.earthgames.nl"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.earthgames.nl
        </a>
      </>
    ),
  },
  {
    id: 'bron-educadora',
    content: (
      <>
        Educadora. (z.d.). <em>Opdracht- en bewegingsdobbelstenen</em>. Geraadpleegd op 2 mei 2026, van{' '}
        <a
          href="https://educadora-webshop.nl/product-tag/dobbelstenen/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://educadora-webshop.nl/product-tag/dobbelstenen/
        </a>
      </>
    ),
  },
  {
    id: 'bron-gezondeschool',
    content: (
      <>
        Gezonde School. (z.d.). <em>Vignet en themacertificaten Gezonde School</em>. Geraadpleegd op 2 mei 2026, van{' '}
        <a
          href="https://www.gezondeschool.nl/vignet-en-themacertificaten-gezonde-school"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.gezondeschool.nl/vignet-en-themacertificaten-gezonde-school
        </a>
      </>
    ),
  },
  {
    id: 'bron-glos-2021',
    content: (
      <>
        GLOS. (2021). <em>Aantal scholen met vignet Gezonde School gestegen</em>. Gezonde Leefstijl op School. Geraadpleegd op 2 mei 2026, van{' '}
        <a
          href="https://www.gezondeleefstijlopschool.nl/algemeen/aantal-scholen-met-vignet-gezond-school-gestegen/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.gezondeleefstijlopschool.nl/algemeen/aantal-scholen-met-vignet-gezond-school-gestegen/
        </a>
      </>
    ),
  },
  {
    id: 'bron-nijha-2026',
    content: (
      <>
        Nijha. (2026). <em>Spelkarren en spelpakketten voor school</em>. Geraadpleegd op 2 mei 2026, van{' '}
        <a
          href="https://www.nijha.nl"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.nijha.nl
        </a>
      </>
    ),
  },
  {
    id: 'bron-ocw-2026',
    content: (
      <>
        OCW in Cijfers. (2026, 8 april). <em>Aantal vo-scholen</em>. Ministerie van Onderwijs, Cultuur en Wetenschap.{' '}
        <a
          href="https://www.ocwincijfers.nl/sectoren/voortgezet-onderwijs/instellingen/aantal-vo-scholen"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.ocwincijfers.nl/sectoren/voortgezet-onderwijs/instellingen/aantal-vo-scholen
        </a>
      </>
    ),
  },
  {
    id: 'bron-onderwijsvanmorgen-2024',
    content: (
      <>
        Onderwijsvanmorgen. (2024, februari). <em>Een maand na het smartphoneverbod: wat is het effect?</em>{' '}
        <a
          href="https://www.onderwijsvanmorgen.nl/een-maand-na-het-smartphoneverbod-wat-is-het-effect/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.onderwijsvanmorgen.nl/een-maand-na-het-smartphoneverbod-wat-is-het-effect/
        </a>
      </>
    ),
  },
  {
    id: 'bron-onderwijswereld-2020',
    content: (
      <>
        Onderwijswereld. (2020). <em>Gespreks- en kennismakingsspellen voor school</em>. Geraadpleegd op 2 mei 2026, van{' '}
        <a
          href="https://www.onderwijswereld.nl"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.onderwijswereld.nl
        </a>
      </>
    ),
  },
  {
    id: 'bron-picoo-2026',
    content: (
      <>
        Picoo. (2026). <em>Picoo: interactief bewegingssysteem voor onderwijs</em>. Geraadpleegd op 2 mei 2026, van{' '}
        <a
          href="https://www.picoo.nl"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.picoo.nl
        </a>
      </>
    ),
  },
  {
    id: 'bron-pointer-2022',
    content: (
      <>
        Pointer. (2022, 15 juni). <em>Fastfood rondom scholen neemt sterk toe</em>. KRO-NCRV Pointer.{' '}
        <a
          href="https://pointer.kro-ncrv.nl/fastfood-rondom-scholen-neemt-sterk-toe"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://pointer.kro-ncrv.nl/fastfood-rondom-scholen-neemt-sterk-toe
        </a>
      </>
    ),
  },
  {
    id: 'bron-rijksoverheid-2024a',
    content: (
      <>
        Rijksoverheid. (2024a). <em>Nationaal Preventieakkoord: gezonde school</em>.{' '}
        <a
          href="https://www.rijksoverheid.nl/onderwerpen/gezonde-school"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.rijksoverheid.nl/onderwerpen/gezonde-school
        </a>
      </>
    ),
  },
  {
    id: 'bron-rijksoverheid-2024b',
    content: (
      <>
        Rijksoverheid. (2024b, 12 juli). <em>OCW-onderzoek: leerlingen socialer en geconcentreerder door mobieltjesafspraak</em>.{' '}
        <a
          href="https://www.rijksoverheid.nl/actueel/nieuws/2024/07/12/ocw-onderzoek-leerlingen-socialer-en-geconcentreerder-door-mobieltjesafspraak"
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
    id: 'bron-rijksoverheid-2024c',
    content: (
      <>
        Rijksoverheid. (2024c). <em>Gebruik van mobiele telefoons niet toegestaan in de klas</em>.{' '}
        <a
          href="https://www.rijksoverheid.nl/onderwerpen/voortgezet-onderwijs/mobiele-apparaten-in-de-klas"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.rijksoverheid.nl/onderwerpen/voortgezet-onderwijs/mobiele-apparaten-in-de-klas
        </a>
      </>
    ),
  },
  {
    id: 'bron-voedingscentrum',
    content: (
      <>
        Voedingscentrum. (z.d.). <em>De Gezonde Schoolkantine</em>. Geraadpleegd op 2 mei 2026, van{' '}
        <a
          href="https://www.voedingscentrum.nl/professionals/gezonde-eetomgeving/de-gezonde-schoolkantine.aspx"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.voedingscentrum.nl/professionals/gezonde-eetomgeving/de-gezonde-schoolkantine.aspx
        </a>
      </>
    ),
  },
]

export default function Opdracht9Page() {
  return (
    <>
      <PageHead
        number="09"
        label="Portfolio · Opdracht"
        title="Concurrentieanalyse."
        lead="Tweede iteratie van de concurrentieanalyse voor de Challenge Table. Marktanalyse met trechtermodel, systematische analyse van twaalf concurrenten verdeeld over drie lagen, en een positioneringsmatrix op twee strategische assen."
        meta={[
          { key: 'Type', value: 'Groepsopdracht' },
          { key: 'Iteratie', value: '2 (op basis van docentfeedback)' },
          { key: 'Concurrenten', value: '12 geïdentificeerd' },
        ]}
      />

      {/* INTRO */}
      <section className="px-6 md:px-10 py-20">
        <SectionHeading eyebrow="Context" heading="De Challenge Table als pauze-alternatief." />
        <div className="grid gap-6 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            De Challenge Table is een robuuste, fysieke speeltafel voor middelbare scholen die een sociaal aantrekkelijk
            alternatief biedt voor het standaardritueel van samen ongezonde snacks halen tijdens de pauze. De tafel
            richt zich op de onderliggende behoefte aan gezelligheid, afleiding en groepsgevoel in plaats van op eten
            zelf, en wil daarmee indirect ongezond snackgedrag terugdringen. Deze focus sluit aan bij wetenschappelijke
            inzichten dat de schoolomgeving en peers een sterke invloed hebben op het eetgedrag van adolescenten{' '}
            <Cite id="bron-voedingscentrum">(Voedingscentrum, z.d.)</Cite>.
          </p>
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            Dit is de tweede iteratie van Opdracht 9. Op basis van docentfeedback zijn ten opzichte van iteratie 1 de
            volgende aanpassingen doorgevoerd: een positioneringsmatrix als grafische weergave op twee assen,
            uitgewerkte marktanalyse met bronnen, een trechtermodel voor de marktaandeelschatting, en een systematische
            uitwerking van sterke en zwakke punten per concurrent in overzichtstabellen.
          </p>
        </div>
      </section>

      {/* 1. MARKTANALYSE */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading eyebrow="Onderdeel 1 · Marktanalyse" heading="Marktanalyse." />

        <div className="grid gap-12 max-w-[820px]">
          {/* 1.1 */}
          <div className="grid gap-4">
            <h3
              className="text-[22px] md:text-[24px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              1.1 Marktontwikkeling (afgelopen jaren)
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              De markt voor schoolgezondheidsinterventies en pauze-alternatieven op middelbare scholen in Nederland is
              de afgelopen jaren gegroeid. Het Gezonde School-programma heeft scholen gestimuleerd om gezondheid
              structureel in te bedden. Meer dan 1.700 scholen in het primair en voortgezet onderwijs en het mbo hebben
              inmiddels het Gezonde School-vignet behaald, en eind 2024 werkte minimaal een derde van alle Nederlandse
              scholen met de Gezonde School-aanpak{' '}
              <Cite id="bron-gezondeschool">(Gezonde School, z.d.)</Cite>.
            </p>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Tegelijkertijd is de druk vanuit de voedselomgeving rond scholen toegenomen. Pointer rapporteerde op basis
              van data-onderzoek dat het aantal fastfoodlocaties binnen vijf minuten lopen van middelbare scholen in het
              afgelopen decennium met veertig procent is gestegen{' '}
              <Cite id="bron-pointer-2022">(Pointer, 2022)</Cite>. Dit vergroot de urgentie van aantrekkelijke
              pauze-alternatieven op het schoolterrein zelf.
            </p>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              De markt voor schoolspelmaterialen en pauze-infrastructuur is eveneens gegroeid. Leveranciers als Nijha
              en Earthgames bieden uitgebreide assortimenten voor de schoolpauze aan, en nieuwe concepten zoals Picoo
              zijn op de markt gekomen{' '}
              <Cite id="bron-picoo-2026">(Picoo, 2026)</Cite>{' '}
              <Cite id="bron-nijha-2026">(Nijha, 2026)</Cite>.
            </p>
          </div>

          {/* 1.2 */}
          <div className="grid gap-4">
            <h3
              className="text-[22px] md:text-[24px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              1.2 Marktgroei (komende jaren)
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              De verwachte groei is positief. In Nederland stimuleert het Nationaal Preventieakkoord scholen actief om
              een gezondere omgeving te creëren{' '}
              <Cite id="bron-rijksoverheid-2024a">(Rijksoverheid, 2024a)</Cite>.
            </p>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Een additionele marktkans ontstaat door het smartphoneverbod. Vanaf 1 januari 2024 zijn mobiele telefoons
              niet meer toegestaan in de klas op middelbare scholen, en 48% van de scholen verbiedt het gebruik
              gedurende de hele schooldag{' '}
              <Cite id="bron-onderwijsvanmorgen-2024">(Onderwijsvanmorgen, 2024)</Cite>. OCW-onderzoek laat zien dat
              leerlingen zonder telefoon onderling socialer zijn en pauzes levendiger aanvoelen{' '}
              <Cite id="bron-rijksoverheid-2024b">(Rijksoverheid, 2024b)</Cite>. Dit creëert een directe vraag naar
              fysieke pauze-alternatieven.
            </p>
          </div>

          {/* 1.3 */}
          <div className="grid gap-4">
            <h3
              className="text-[22px] md:text-[24px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              1.3 Aantal concurrenten en concurrentiedruk
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              De concurrentiedruk is matig tot hoog. Er zijn geen exact identieke concurrenten voor de Challenge Table
              als compleet speeltafelconcept voor de schoolpauze, maar er zijn veel substituten die hetzelfde
              pauzemoment invullen. In totaal zijn twaalf relevante concurrenten geïdentificeerd, verdeeld over drie
              lagen (direct, breed direct en indirect). De sterkste druk komt niet van een directe productconcurrent,
              maar van ingesleten gedragspatronen als de supermarktrit en vrij rondhangen.
            </p>
          </div>

          {/* 1.4 Marktaandeelschatting */}
          <div className="grid gap-6">
            <h3
              className="text-[22px] md:text-[24px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              1.4 Marktaandeelschatting
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Op basis van beschikbare data wordt de markt via een trechtermodel in kaart gebracht:
            </p>

            {/* Trechtermodel tabel */}
            <div style={{ overflowX: 'auto' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '15px',
                }}
              >
                <thead>
                  <tr>
                    {['Trechterstap', 'Omvang', 'Toelichting / bron'].map((col) => (
                      <th
                        key={col}
                        style={{
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
                        }}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      stap: 'Totale VO-markt (vestigingen)',
                      omvang: '1.453 vestigingen (2025)',
                      bron: <Cite id="bron-ocw-2026">(OCW in Cijfers, 2026)</Cite>,
                      highlight: false,
                    },
                    {
                      stap: 'Doelgroep: Gezonde School-scholen',
                      omvang: '~33% = ca. 480 VO-vestigingen',
                      bron: <Cite id="bron-glos-2021">(GLOS, 2021)</Cite>,
                      highlight: false,
                    },
                    {
                      stap: 'Realistisch koopbereid (budget + ruimte)',
                      omvang: '~20% van doelgroep = ca. 96 vestigingen',
                      bron: 'Aanname op basis van besluitvormingscyclus scholen',
                      highlight: false,
                    },
                    {
                      stap: 'Verwacht marktaandeel jaar 1–2 (5%)',
                      omvang: '~5 vestigingen · ~€50.000–€75.000',
                      bron: 'Vraagprijs: €10.000–€15.000 p/tafel',
                      highlight: true,
                    },
                    {
                      stap: 'Verwacht marktaandeel jaar 5 (15%)',
                      omvang: '~14 vestigingen · ~€140.000–€210.000',
                      bron: 'Vraagprijs: €10.000–€15.000 p/tafel',
                      highlight: true,
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        backgroundColor: row.highlight
                          ? 'rgba(94,227,211,0.05)'
                          : i % 2 === 0
                          ? 'transparent'
                          : 'var(--canvas-elevated)',
                      }}
                    >
                      <td
                        style={{
                          padding: '14px 16px',
                          color: row.highlight ? 'var(--accent-mint)' : 'var(--text-primary)',
                          lineHeight: 1.5,
                          borderBottom: '0.5px solid var(--border)',
                          verticalAlign: 'top',
                          fontWeight: row.highlight ? 500 : 400,
                        }}
                      >
                        {row.stap}
                      </td>
                      <td
                        style={{
                          padding: '14px 16px',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.6,
                          borderBottom: '0.5px solid var(--border)',
                          verticalAlign: 'top',
                        }}
                      >
                        {row.omvang}
                      </td>
                      <td
                        style={{
                          padding: '14px 16px',
                          color: 'var(--text-muted)',
                          lineHeight: 1.6,
                          borderBottom: '0.5px solid var(--border)',
                          verticalAlign: 'top',
                          fontSize: '14px',
                        }}
                      >
                        {row.bron}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={tableCaptionStyle}>
                Tabel 3 — Marktaandeelschatting via trechtermodel
              </p>
            </div>

            <p className="text-[15px] md:text-[16px]" style={{ ...paragraphStyle, color: 'var(--text-muted)' }}>
              Toelichting: De 20%-koopbereidheid is een aanname op grond van ervaringen met aanschafcycli van
              schoolmeubilair en -infrastructuur. Verder marktonderzoek bij scholen is noodzakelijk voor verfijning.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONCURRENTENANALYSE */}
      <section
        className="px-6 md:px-10 py-20"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <SectionHeading
          eyebrow="Onderdeel 2 · Concurrentenanalyse"
          heading="Identificatie en analyse van concurrenten."
        />

        <div className="grid gap-16 max-w-[1100px]">
          <p className="text-[17px] md:text-[18px] max-w-[820px]" style={paragraphStyle}>
            De concurrentie is verdeeld in drie lagen op basis van de mate waarin zij hetzelfde pauzemoment van
            middelbare scholieren invullen. Per laag worden de concurrenten systematisch geanalyseerd.
          </p>

          {/* 2.1 Directe concurrenten */}
          <div className="grid gap-6">
            <h3
              className="text-[22px] md:text-[24px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              2.1 Directe concurrenten
            </h3>
            <p className="text-[17px] md:text-[18px] max-w-[820px]" style={paragraphStyle}>
              Directe concurrenten zijn producten die lijken op het mechanisme van de Challenge Table: fysiek,
              laagdrempelig, gericht op groepsactivering in schoolverband.
            </p>
            <ConcurrentenTabel
              rows={directeConcurrenten}
              caption="Tabel 4 — Directe concurrenten"
            />
          </div>

          {/* 2.2 Brede directe concurrenten */}
          <div className="grid gap-6">
            <h3
              className="text-[22px] md:text-[24px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              2.2 Brede directe concurrenten
            </h3>
            <p className="text-[17px] md:text-[18px] max-w-[820px]" style={paragraphStyle}>
              Alle fysieke spellen en speeloplossingen die scholieren in pauzes kunnen gebruiken en hetzelfde beloven:
              gezelligheid, afleiding en samen iets doen.
            </p>
            <ConcurrentenTabel
              rows={bredeConcurrenten}
              caption="Tabel 5 — Brede directe concurrenten"
            />
          </div>

          {/* 2.3 Indirecte concurrenten */}
          <div className="grid gap-6">
            <h3
              className="text-[22px] md:text-[24px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              2.3 Indirecte concurrenten
            </h3>
            <p className="text-[17px] md:text-[18px] max-w-[820px]" style={paragraphStyle}>
              Alternatieven die niet primair als spel zijn ontworpen, maar hetzelfde pauzemoment van scholieren invullen
              en daarmee indirect concurreren met de Challenge Table.
            </p>
            <ConcurrentenTabel
              rows={indirecteConcurrenten}
              caption="Tabel 6 — Indirecte concurrenten"
            />
          </div>
        </div>
      </section>

      {/* 3. POSITIONERINGSMATRIX */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="Onderdeel 3 · Positioneringsmatrix"
          heading="Positioneringsmatrix."
        />

        <div className="grid gap-10 max-w-[1100px]">
          <p className="text-[17px] md:text-[18px] max-w-[820px]" style={paragraphStyle}>
            Om de positie van de Challenge Table ten opzichte van de concurrenten inzichtelijk te maken, is een
            positioneringsmatrix opgesteld op twee assen:
          </p>

          <div className="grid gap-4 max-w-[820px]">
            <div
              className="flex gap-4 items-start"
              style={{
                padding: '16px 20px',
                border: '0.5px solid var(--border)',
                backgroundColor: 'var(--surface)',
              }}
            >
              <span
                className="text-[11px] uppercase shrink-0"
                style={{ letterSpacing: '0.15em', color: 'var(--accent-mint)', marginTop: '2px' }}
              >
                As X
              </span>
              <p className="text-[16px]" style={paragraphStyle}>
                <strong style={{ color: 'var(--text-primary)' }}>Drempel voor gebruik</strong> — van hoge drempel
                (duur, veel installatie, grote ruimte, voorbereiding vereist) naar lage drempel (direct beschikbaar,
                eenvoudig, geen installatie nodig).
              </p>
            </div>
            <div
              className="flex gap-4 items-start"
              style={{
                padding: '16px 20px',
                border: '0.5px solid var(--border)',
                backgroundColor: 'var(--surface)',
              }}
            >
              <span
                className="text-[11px] uppercase shrink-0"
                style={{ letterSpacing: '0.15em', color: 'var(--accent-amber)', marginTop: '2px' }}
              >
                As Y
              </span>
              <p className="text-[16px]" style={paragraphStyle}>
                <strong style={{ color: 'var(--text-primary)' }}>Sociale activatiewaarde</strong> — van lage sociale
                activatiewaarde (passief, individueel, geen zichtbare groepsinteractie) naar hoge sociale
                activatiewaarde (activeert groep actief, creëert een gezamenlijk zichtbaar moment, nodigt uit tot
                deelname).
              </p>
            </div>
          </div>

          {/* Matrix afbeelding */}
          <a href="/Poitioineringsmatrix_challenge_table.png" target="_blank" rel="noopener noreferrer" style={{ display: 'block', cursor: 'zoom-in' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                border: '0.5px solid var(--border)',
                backgroundColor: 'var(--surface)',
                padding: '4px',
              }}
            >
              <Image
                src="/Poitioineringsmatrix_challenge_table.png"
                alt="Positioneringsmatrix Challenge Table — As X: drempel voor gebruik | As Y: sociale activatiewaarde"
                width={1090}
                height={888}
                unoptimized
                style={{ width: '100%', height: 'auto', display: 'block' }}
                priority
              />
            </div>
          </a>
          <p style={tableCaptionStyle}>
            Tabel 7 — Positioneringsmatrix Challenge Table · As X: drempel voor gebruik | As Y: sociale activatiewaarde
          </p>

          {/* 3.1 Onderbouwing */}
          <div className="grid gap-4 max-w-[820px]">
            <h3
              className="text-[22px] md:text-[24px]"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              3.1 Onderbouwing positionering Challenge Table
            </h3>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              De Challenge Table is gepositioneerd in het kwadrant{' '}
              <em>hoge sociale activatiewaarde / lage drempel voor gebruik</em> — het aantrekkelijkste kwadrant. Dit is
              als volgt onderbouwd:
            </p>
            <ul
              className="grid gap-3 list-disc"
              style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}
            >
              <li className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
                <strong style={{ color: 'var(--text-primary)' }}>Lage drempel:</strong> De tafel staat permanent
                opgesteld in de aula of hal en vereist geen voorbereiding, installatie of extra materialen. Scholieren
                kunnen er direct gebruik van maken zonder begeleiding.
              </li>
              <li className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
                <strong style={{ color: 'var(--text-primary)' }}>Hoge sociale activatiewaarde:</strong> De tafel is
                ontworpen als groepstafel met visueel aantrekkelijk scherm en challenges. Dit activeert zichtbaar
                sociale interactie en creëert een gezamenlijk moment, vergelijkbaar met de sociale functie van de
                supermarktrit, maar op het schoolterrein zelf.
              </li>
            </ul>
            <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              Ter vergelijking: kaartspellen scoren ook laag op drempel, maar lager op sociale activatiewaarde omdat
              zij minder structureel aanwezig en zichtbaar zijn. Tafeltennis en voetbaltafel scoren hoog op sociale
              aantrekkingskracht maar hebben een hogere drempel door aanschafkosten, ruimtegebruik en
              activiteitsbeperking. Picoo scoort technologisch aantrekkelijk maar heeft een hoge drempel door kosten en
              installatie.
            </p>
          </div>
        </div>
      </section>

      {/* 4. STRATEGISCHE CONCLUSIE */}
      <section
        className="px-6 md:px-10 py-20"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <SectionHeading eyebrow="Onderdeel 4 · Conclusie" heading="Strategische conclusie." />

        <div className="grid gap-8 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            De Challenge Table heeft in Nederland weinig exact identieke concurrenten, maar heeft veel functionele
            substituten die hetzelfde pauzemoment invullen. De sterkste concurrentiedruk komt van:
          </p>

          <ol
            className="grid gap-3 list-decimal"
            style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}
          >
            {[
              'De supermarkt en snackbar als sociaal pauzemoment buiten school — het primaire gedragspatroon dat de Challenge Table wil vervangen.',
              'Bestaande speelinfrastructuur op school (tafeltennis, voetbaltafel, spelkar), reeds aanwezig op veel scholen.',
              'Gratis passief gedrag (hangen, bellen, scrollen) — de standaard zonder investering.',
            ].map((punt, i) => (
              <li key={i} className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
                {punt}
              </li>
            ))}
          </ol>

          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            De Challenge Table betreedt een unieke positie: hoge sociale activatiewaarde gecombineerd met een lage
            gebruiksdrempel. Geen van de geïdentificeerde concurrenten combineert deze twee eigenschappen volledig. Om
            dit marktvoordeel te verzilveren, is het van belang dat de tafel:
          </p>

          <ul
            className="grid gap-3 list-disc"
            style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}
          >
            {[
              'Eenvoudiger in gebruik is dan spelkarren en spelpakketten.',
              'Goedkoper en ruimtelijk minder belastend is dan tafeltennis of voetbaltafel.',
              'Sociaal zichtbaarder is dan kaartspellen en passief rondhangen.',
              'Het schoolterrein versterkt als sociale plek, waardoor de supermarkt als pauzedoel minder aantrekkelijk wordt.',
            ].map((punt, i) => (
              <li key={i} className="text-[17px] md:text-[18px]" style={{ lineHeight: 1.75 }}>
                {punt}
              </li>
            ))}
          </ul>

          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            De gunstige beleidscontext — telefoonverbod, Gezonde School-programma en Nationaal Preventieakkoord —
            vergroot de kans dat scholen actief investeren in pauze-alternatieven. De Challenge Table kan hierop
            inspelen als aansprekend, betaalbaar en direct inzetbaar concept.
          </p>
        </div>
      </section>

      {/* BRONNENLIJST */}
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

      {/* TERUG-NAVIGATIE */}
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
