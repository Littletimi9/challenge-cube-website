import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import PageHead from '@/components/rubric/PageHead'
import SectionHeading from '@/components/rubric/SectionHeading'

export const metadata = {
  title: 'Opdracht 3 — Ecolabels · Challenge Cube',
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

const bulletStyle: React.CSSProperties = {
  lineHeight: 1.75,
  color: 'var(--text-secondary)',
}

const relevantieParagraphs: React.ReactNode[] = [
  'Ben & Jerry\'s is een typisch snack- en impulsaankoopproduct. In de bedrijfskundige context wordt duurzaamheid vaak uitgewerkt via het People-Planet-Profit-model (ook wel Triple Bottom Line). Een duurzaam product is dan een product waarbij bewust rekening wordt gehouden met de sociale impact op mensen in de keten (People), de ecologische voetafdruk en het gebruik van natuurlijke hulpbronnen (Planet), én de economische levensvatbaarheid (Profit). Ecolabels en keurmerken zijn extern gevalideerde instrumenten die consumenten helpen te beoordelen of een product op één of meerdere van deze dimensies aan bepaalde minimumeisen voldoet.',
  'Bij impulsproducten zoals ijs nemen consumenten beslissingen in een fractie van een seconde. Een herkenbaar keurmerk fungeert daardoor als een snelle herkenning: het logo draagt in één oogopslag betekenis over zonder dat de consument de onderliggende standaard hoeft te kennen. Dit maakt de keuze van ecolabels bij merken als Ben & Jerry\'s des te relevanter.',
  'Ben & Jerry\'s onderscheidt zich van de meeste concurrenten door een expliciet geformuleerde sociale en ecologische missie, die via ecolabels zichtbaar wordt gemaakt op de verpakking. Hierbij wordt onderzocht hoe consumenten beslissingen nemen bij impulsaankopen: ijs is bij uitstek een categorie waarbij de keuze aan het schap snel en emotioneel verloopt. Keurmerken spelen dan een sleutelrol als vertrouwenssignaal.',
]

const welkeEcolabels: React.ReactNode[] = [
  <>
    Ben & Jerry's communiceert twee extern gevalideerde keurmerken op haar producten en in haar beleidsdocumenten:
  </>,
]

const welkeBullets: React.ReactNode[] = [
  <>
    <strong style={{ color: 'var(--text-primary)' }}>Fairtrade</strong> (sociaal keurmerk) – gecertificeerd voor vijf kerningrediënten: suiker, cacao, vanille, koffie en bananen. Ben & Jerry's was in 2005 de eerste ijsfabrikant ter wereld die Fairtrade-gecertificeerde ingrediënten gebruikte; in 2010 werd dit uitgebreid naar alle smaken en alle landen{' '}
    <Cite id="bron-ben-jerry-fairtrade">(Ben &amp; Jerry's, z.d.-a)</Cite>.
  </>,
  <>
    <strong style={{ color: 'var(--text-primary)' }}>FSC – Forest Stewardship Council</strong> (ecologisch keurmerk) – van toepassing op het papieren kartonnen verpakkingsmateriaal (de 'pints'). Sinds 2009 zijn alle pints gemaakt van FSC-gecertificeerd papierboard{' '}
    <Cite id="bron-ben-jerry-paper-2023">(Ben &amp; Jerry's, 2023)</Cite>.
  </>,
]

const fairtradeIntro: React.ReactNode[] = [
  <>
    Fairtrade is een certificering die zich richt op eerlijkere handelsvoorwaarden en betere positie voor producenten. Belangrijke onderdelen zijn een Fairtrade Minimum Price als vangnet bij lage marktprijzen, en een Fairtrade Premium die boven op de prijs wordt betaald en bedoeld is voor investeringen in organisatie en gemeenschap{' '}
    <Cite id="bron-fairtrade-minimum-price">(Fairtrade International, z.d.)</Cite>.
  </>,
  <>
    Ben & Jerry's koopt al haar cacao, suiker, vanille, koffie en bananen op Fairtrade-voorwaarden{' '}
    <Cite id="bron-ben-jerry-fairtrade">(Ben &amp; Jerry's, z.d.-a)</Cite>. De concrete impact op de People-dimensie is meetbaar: tussen 2014 en 2023 verdienden cacaoboeren via Ben & Jerry's Fairtrade-aankopen meer dan USD 15 miljoen aan Fairtrade Premium{' '}
    <Cite id="bron-borgen-2025">(Borgen Magazine, 2025)</Cite>. Twee Ivoriaanse coöperaties waarmee Ben & Jerry's samenwerkt, zijn in dezelfde periode gegroeid van 1.539 naar 5.000 leden{' '}
    <Cite id="bron-borgen-2025">(Borgen Magazine, 2025)</Cite>.
  </>,
  <>
    Bovendien betaalt Ben & Jerry's, naast de Fairtrade-minimumprijs, ook een zogenaamde Living Income Reference Price voor cacao – een prijs boven de Fairtrade-vloer, gericht op het verzekeren van een leefbaar inkomen voor cacaoboeren wanneer gecombineerd met hogere oogstopbrengsten. Ben & Jerry's was in 2020 de eerste ijsfabrikant die deze aanpak invoerde{' '}
    <Cite id="bron-borgen-2025">(Borgen Magazine, 2025)</Cite>.
  </>,
  <>
    De context van de cacaomarkt maakt Fairtrade extra relevant: cacaoprijzen pieken en dalen sterk (van circa USD 12.000 per ton in 2024 naar minder dan USD 6.000 eind 2025), terwijl boeren vaak niet profiteren van hoge marktprijzen door extreme weersomstandigheden, ziektes en inflatie{' '}
    <Cite id="bron-fairtrade-december-2025">(Fairtrade International, 2025)</Cite>. De minimumprijs fungeert dan als bescherming.
  </>,
  'Fairtrade versterkt primair de People-dimensie: inkomensstabiliteit en betere handelsposities voor producenten. De Planet-kant (CO2-uitstoot, verpakking) valt buiten het Fairtrade-systeem.',
  <>
    Fairtrade is gekozen boven alternatieven zoals Rainforest Alliance omdat Fairtrade als enige systeem een bindende minimumprijs en premie vastlegt in extern gepubliceerde standaarddocumenten. Dit maakt het systeem verificeerbaar: kopers, producenten en externe partijen kunnen de geldstromen controleren. Rainforest Alliance richt zich primair op ecologische en arbeidsomstandigheden, maar kent geen gegarandeerde minimumprijs. Voor ingrediënten met hoge keten-machtsongelijkheid – zoals cacao en vanille – is de inkomensgarantie de meest directe interventie aan de People-kant. Ben & Jerry's eigen beleidsdocumenten bevestigen dat Fairtrade inhoudelijk aansluit op hun linked prosperity-missie{' '}
    <Cite id="bron-fairtrade-minimum-price">(Fairtrade International, z.d.)</Cite>.
  </>,
]

const fscLabelTypes: React.ReactNode[] = [
  <><strong style={{ color: 'var(--text-primary)' }}>FSC 100%</strong> = volledig FSC-gecertificeerde bossen.</>,
  <><strong style={{ color: 'var(--text-primary)' }}>FSC Recycled</strong> = volledig gerecycled.</>,
  <><strong style={{ color: 'var(--text-primary)' }}>FSC Mix</strong> = mix van FSC-gecertificeerd, gerecycled en/of FSC beheerd bos.</>,
]

const fscParagraphs: React.ReactNode[] = [
  <>
    FSC is een internationale non-profitorganisatie opgericht in 1993, na het mislukken van VN-onderhandelingen over het stoppen van ontbossing in Rio (1992). FSC certificeert bossen die voldoen aan ecologische, sociale en economische criteria voor verantwoord bosbeheer. Er zijn drie labeltypen:
  </>,
  <>
    Ben & Jerry's stelt dat hun standaard is dat papieren verpakkingen uit verantwoord beheerde bossen komen, met virgin wood, en met voorkeur voor FSC-certificering{' '}
    <Cite id="bron-ben-jerry-packaging-standard">(Ben &amp; Jerry's, z.d.-c)</Cite>.
  </>,
  <>
    Verpakking is voor een ijsmerk als Ben & Jerry's een relevante impact-categorie: bij elk afzonderlijk verkocht pint wordt een eenmalige kartonnen beker gebruikt en weggegooid. FSC adresseert de herkomst van de papiervezel en waarborgt dat bossen beheerd worden op een manier die biodiversiteit, waterbronnen en ecosystemen in stand houdt.
  </>,
  <>
    Tegelijkertijd is er een belangrijke nuance: FSC zegt iets over de herkomst van de papiervezel, maar niet over de volledige recycleerbaarheid van het eindproduct. De pints zijn gecoat met polyethyleen als vochtbarrière, waardoor ze in veel regio's, waaronder de VS, moeilijk te recyclen zijn{' '}
    <Cite id="bron-cottom-2019">(Cottom, 2019)</Cite>. Ben & Jerry's erkent dit zelf: het merk stelt dat de meeste verpakkingen in de VS niet worden gerecycled, maar als afval worden afgevoerd. Het bedrijf werkt via het Pack4Good-initiatief van Canopy aan alternatieven op basis van post-consumer vezels en landbouwresidu{' '}
    <Cite id="bron-ben-jerry-paper-2023">(Ben &amp; Jerry's, 2023)</Cite>.
  </>,
  'FSC versterkt dus de Planet-dimensie, maar is een deeloplossing: de keten rondom recyclage van het eindproduct valt buiten het FSC-systeem.',
  'FSC is als ecologisch keurmerk gekozen vanwege drie redenen. Ten eerste is het extern gevalideerd: jaarlijkse audits door onafhankelijke certificeerders garanderen naleving. Ten tweede is FSC specifiek relevant voor verpakkingsmateriaal: Ben & Jerry\'s gebruikt als ijsmerk grote volumes eenmalig papierboard, de FSC-certificering dekt precies dit materiaalsegment. Ten derde heeft Ben & Jerry\'s de FSC-standaard als formeel bedrijfsbeleid vastgelegd: alle papieren verpakkingen met virgin houtvezel moeten FSC-gecertificeerd zijn. Een alternatief als PEFC zou een vergelijkbaar bereik hebben, maar FSC is wereldwijd het meest vertrouwde en herkende systeem; 86% van de Nederlanders herkent het FSC-keurmerk.',
]

const conclusieParagraphs: React.ReactNode[] = [
  'Een duurzaam product voldoet, in lijn met het Triple Bottom Line-model, aan eisen op de drie pijlers People, Planet en Profit, zonder toekomstige generaties te benadelen. De ecolabels van Ben & Jerry\'s raken elk een andere dimensie:',
]

const conclusieBullets: React.ReactNode[] = [
  <>
    <strong style={{ color: 'var(--text-primary)' }}>Fairtrade (sociaal) → People:</strong> via bindende minimumprijzen, premies en het Living Income Reference Price-model worden inkomensstabiliteit en betere marktposities voor boeren en arbeiders geborgd. De aantoonbare impact maakt dit meer dan een marketingclaim{' '}
    <Cite id="bron-fairtrade-minimum-price">(Fairtrade International, z.d.)</Cite>.
  </>,
  <>
    <strong style={{ color: 'var(--text-primary)' }}>FSC (ecologisch) → Planet:</strong> via verantwoord bosbeheer worden biodiversiteit, waterbronnen en ecosystemen beschermd. De beperking is dat FSC alleen de vezelherkomst certificeert, niet de recycleerbaarheid van de verpakking als eindproduct.
  </>,
]

const conclusieSlot: React.ReactNode[] = [
  'De combinatie van beide labels laat zien dat Ben & Jerry\'s bewust meerdere impactdimensies aanpakt. Toch zijn labels per definitie deeloplossingen: ze dekken specifieke onderdelen van de keten. Dat Ben & Jerry\'s de beperkingen van de huidige FSC-aanpak erkent en werkt aan alternatieven past bij een serieuze duurzaamheidsstrategie en niet enkel bij labeling als marketinginstrument.',
  'Voor het begrijpen van consumentengedrag bij snackproducten is de conclusie dat ecolabels werken als visuele vertrouwensshortcuts: een herkenbaar logo vertaalt een complex kwaliteits- en duurzaamheidsoordeel naar één herkenbaar symbool. De effectiviteit van dat signaal hangt echter af van de mate waarin consumenten de betekenis van het label kennen, wat vraagt om merkonderbouwde communicatie naast het keurmerk zelf.',
]

const bronnen: Bron[] = [
  {
    id: 'bron-ben-jerry-fairtrade',
    content: (
      <>
        Ben &amp; Jerry's. (z.d.-a). <em>Fairtrade</em>. Geraadpleegd op 27 april 2026, van{' '}
        <a
          href="https://www.benjerry.com/values/issues-we-care-about/fairtrade"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.benjerry.com/values/issues-we-care-about/fairtrade
        </a>
      </>
    ),
  },
  {
    id: 'bron-ben-jerry-fairtrade-au',
    content: (
      <>
        Ben &amp; Jerry's. (z.d.-b). <em>Dig into our Fairtrade commitments</em>. Geraadpleegd op 27 april 2026, van{' '}
        <a
          href="https://www.benandjerry.com.au/whats-new/2018/02/fairtrade-commitments"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.benandjerry.com.au/whats-new/2018/02/fairtrade-commitments
        </a>
      </>
    ),
  },
  {
    id: 'bron-ben-jerry-packaging-standard',
    content: (
      <>
        Ben &amp; Jerry's. (z.d.-c). <em>Paper based packaging standard</em>. Geraadpleegd op 27 april 2026, van{' '}
        <a
          href="https://www.benjerry.com/values/how-we-do-business/paper-based-packaging-standard"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.benjerry.com/values/how-we-do-business/paper-based-packaging-standard
        </a>
      </>
    ),
  },
  {
    id: 'bron-ben-jerry-paper-2023',
    content: (
      <>
        Ben &amp; Jerry's. (2023, februari). <em>3 things you might not know about paper packaging and the environment</em>. Geraadpleegd op 27 april 2026, van{' '}
        <a
          href="https://www.benjerry.com/whats-new/2023/02/paper-packaging-and-environment"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.benjerry.com/whats-new/2023/02/paper-packaging-and-environment
        </a>
      </>
    ),
  },
  {
    id: 'bron-borgen-2025',
    content: (
      <>
        Borgen Magazine. (2025, april). <em>Popular brands with ethical sourcing</em>. Geraadpleegd op 27 april 2026, van{' '}
        <a
          href="https://www.borgenmagazine.com/ethical-sourcing/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.borgenmagazine.com/ethical-sourcing/
        </a>
      </>
    ),
  },
  {
    id: 'bron-cottom-2019',
    content: (
      <>
        Cottom, T. (2019). Ben &amp; Jerry's moves toward sustainable products. <em>Recycling Today</em>. Geraadpleegd op 27 april 2026, van{' '}
        <a
          href="https://www.recyclingtoday.com/news/ben-jerrys-plastic-straws-spoons-ice-cream/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://www.recyclingtoday.com/news/ben-jerrys-plastic-straws-spoons-ice-cream/
        </a>
      </>
    ),
  },
  {
    id: 'bron-fairtrade-april-2025',
    content: (
      <>
        Fairtrade International. (2025, april). <em>Cocoa price announcement April 2025</em>. Geraadpleegd op 27 april 2026, van{' '}
        <a
          href="https://www.fairtrade.net/content/dam/fairtrade/fairtrade-international/standards/standards-and-pricing-work-in-progress/cocoa/2025-04-30_Cocoa-Price-Announcement_EN.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          Open pdf
        </a>
      </>
    ),
  },
  {
    id: 'bron-fairtrade-december-2025',
    content: (
      <>
        Fairtrade International. (2025, december). <em>Fairtrade boosts support for cocoa farmers amid continuing market uncertainty</em>. Geraadpleegd op 27 april 2026, van{' '}
        <a
          href="https://www.fairtrade.net/us-en/for-media/fairtrade-boosts-support-for-cocoa-farmers-amid-continuing-marke.html"
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
    id: 'bron-fairtrade-minimum-price',
    content: (
      <>
        Fairtrade International. (z.d.). <em>Fairtrade minimum price and premium table</em>. Geraadpleegd op 27 april 2026, van{' '}
        <a
          href="https://www.fairtrade.net/content/dam/fairtrade/global/minimum-price-table/Master_To%20do%20PDFs_Fairtrade_Minimum_Price_and_Premium_Table_EN_PUBLIC.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          Open pdf
        </a>
      </>
    ),
  },
  {
    id: 'bron-fsc-bosbeheer',
    content: (
      <>
        FSC Nederland. (z.d.-a). <em>Verantwoord bosbeheer</em>. Geraadpleegd op 27 april 2026, van{' '}
        <a
          href="https://nl.fsc.org/nl-nl/het-belang-van-fsc/verantwoord-bosbeheer"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://nl.fsc.org/nl-nl/het-belang-van-fsc/verantwoord-bosbeheer
        </a>
      </>
    ),
  },
  {
    id: 'bron-fsc-belang',
    content: (
      <>
        FSC Nederland. (z.d.-b). <em>Het belang van FSC</em>. Geraadpleegd op 27 april 2026, van{' '}
        <a
          href="https://nl.fsc.org/nl-nl/kies-voor-fsc/het-belang-van-fsc"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-mint)', textDecoration: 'underline' }}
        >
          https://nl.fsc.org/nl-nl/kies-voor-fsc/het-belang-van-fsc
        </a>
      </>
    ),
  },
]

export default function Opdracht3Page() {
  return (
    <>
      <PageHead
        number="03"
        label="Portfolio · Opdracht"
        title="Ecolabels."
        lead="Individuele opdracht uit de module Toekomstbestendige Business Innovatie. Analyse van de ecolabels van Ben & Jerry's — Fairtrade en FSC — in het kader van het Triple Bottom Line-model en consumentengedrag bij impulsaankopen."
        meta={[
          { key: 'Type', value: 'Individuele opdracht' },
          { key: 'Module', value: 'Toekomstbestendige Business Innovatie' },
          { key: 'Merk', value: 'Ben & Jerry\'s' },
        ]}
      />

      {/* RELEVANTIE */}
      <section className="px-6 md:px-10 py-20">
        <SectionHeading
          eyebrow="Relevantie voor Sprint 1"
          heading="Ben & Jerry's als impulsproduct."
        />

        <div className="grid gap-8 max-w-[820px]">
          {relevantieParagraphs.map((paragraph, i) => (
            <p
              key={i}
              className="text-[17px] md:text-[18px]"
              style={paragraphStyle}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* WELKE ECOLABELS */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="Onderdeel 1 · Overzicht"
          heading="Welke ecolabels gebruikt Ben & Jerry's?"
        />

        <div className="grid gap-6 max-w-[820px]">
          {welkeEcolabels.map((paragraph, i) => (
            <p key={i} className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              {paragraph}
            </p>
          ))}
          <ul
            className="grid gap-3 list-disc"
            style={{ paddingLeft: '1.5rem', ...bulletStyle }}
          >
            {welkeBullets.map((bullet, i) => (
              <li key={i} className="text-[17px] md:text-[18px]">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ECOLABEL 1: FAIRTRADE */}
      <section
        className="px-6 md:px-10 py-20"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <SectionHeading
          eyebrow="Onderdeel 2 · Sociaal keurmerk"
          heading="Ecolabel 1: Fairtrade."
        />

        <div className="grid gap-8 max-w-[820px]">
          {fairtradeIntro.map((paragraph, i) => (
            <p key={i} className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* ECOLABEL 2: FSC */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="Onderdeel 3 · Ecologisch keurmerk"
          heading="Ecolabel 2: FSC."
        />

        <div className="grid gap-8 max-w-[820px]">
          <p className="text-[17px] md:text-[18px]" style={paragraphStyle}>
            {fscParagraphs[0]}
          </p>
          <ul
            className="grid gap-2 list-disc"
            style={{ paddingLeft: '1.5rem', ...bulletStyle }}
          >
            {fscLabelTypes.map((item, i) => (
              <li key={i} className="text-[17px] md:text-[18px]">
                {item}
              </li>
            ))}
          </ul>
          {fscParagraphs.slice(1).map((paragraph, i) => (
            <p key={i} className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* CONCLUSIE */}
      <section
        className="px-6 md:px-10 py-20"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <SectionHeading
          eyebrow="Onderdeel 4 · Meervoudige waardecreatie"
          heading="Conclusie en koppeling aan meervoudige waardecreatie."
        />

        <div className="grid gap-6 max-w-[820px]">
          {conclusieParagraphs.map((paragraph, i) => (
            <p key={i} className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              {paragraph}
            </p>
          ))}
          <ul
            className="grid gap-3 list-disc"
            style={{ paddingLeft: '1.5rem', ...bulletStyle }}
          >
            {conclusieBullets.map((bullet, i) => (
              <li key={i} className="text-[17px] md:text-[18px]">
                {bullet}
              </li>
            ))}
          </ul>
          {conclusieSlot.map((paragraph, i) => (
            <p key={i} className="text-[17px] md:text-[18px]" style={paragraphStyle}>
              {paragraph}
            </p>
          ))}
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
