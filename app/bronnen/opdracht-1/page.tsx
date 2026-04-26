import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import PageHead from '@/components/rubric/PageHead'
import SectionHeading from '@/components/rubric/SectionHeading'

export const metadata = {
  title: 'Opdracht 1 — Ambitieniveau duurzaamheid · Challenge Cube',
}

const onderdeel1Paragraphs = [
  'In het kader van de module Toekomstbestendige Business Innovatie heb ik een individueel verantwoordingsdossier samengesteld waarin ik mij heb verdiept in duurzaamheid vanuit de drie pijlers: people, planet en profit. Het doel van het essay was om bewustwording te creëren over mijn eigen gedrag en de impact daarvan op duurzaamheid (Hekking, 2025).',
  'Op het gebied van planet heb ik mijn ecologische voetafdruk berekend. Met een score van 2,6 scoor ik lager dan de gemiddelde Nederlander (3,3). Dit verschil is grotendeels te verklaren doordat mijn ouderlijk huis recentelijk is verduurzaamd met een warmtepomp, zonnepanelen en betere isolatie. Tegelijkertijd kwamen voeding en vervoer als verbeterpunten naar voren: thuis wordt vier tot vijf keer per week vlees gegeten en voor korte afstanden pak ik vaak de benzineauto. Uit mijn mobiliteitsanalyse bleek dat ik in één week 202,6 kilometer reed, waarvan het merendeel korte ritten betrof die ook per fiets afgelegd hadden kunnen worden. Bij de opdracht duurzaam inkopen onderzocht ik biologische en fairtrade alternatieven voor dagelijkse producten. Deze bleken vaak wel beschikbaar maar aanzienlijk duurder, waardoor de overstap niet altijd realistisch is.',
  'Op het gebied van people heb ik mij gericht op inclusieve communicatie, bewustzijn van privileges en het versterken van mijn sociale netwerk. Door bewust duidelijker taalgebruik en langzamer praten toe te passen, merkte ik dat mensen mij sneller begrepen. Bij de opdracht over privileges werd ik mij ervan bewust dat toegang tot onderwijs, gezondheidszorg en financiële stabiliteit geen vanzelfsprekendheden zijn. Als concrete actie heb ik oude kleding ingeleverd bij een textielbak voor hergebruik. Daarnaast voerde ik een digitale detox uit waarbij ik mijn schermtijd bewust verminderde, wat positief bijdroeg aan mijn welzijn.',
  'Op het gebied van profit analyseerde ik Philips en ASML op rendement en duurzaamheid. Mijn keuze viel op Philips vanwege hun verdergaande duurzaamheidsbeleid en hoger dividendrendement. Daarnaast onderzocht ik Tony’s Chocolonely als sociale onderneming: dit bedrijf laat zien dat winstgevend ondernemen en een sociale missie samen kunnen gaan. Het MKB-interview met MBI Steenmeesters gaf inzicht in hoe een middelgroot productiebedrijf duurzaamheid integreert via windmolens, zonnepanelen en circulaire processen. Samenvattend heeft het essay mij bewust gemaakt dat duurzaamheid direct raakt aan mijn dagelijkse keuzes, van voeding en vervoer tot communicatie en investeringen.',
]

const onderdeel2Paragraphs = [
  'Als ik kijk naar mijn persoonlijke ambitieniveau rondom het probleem – scholieren die tijdens school ongezonde snacks kiezen door gemak, verleiding en sociale invloed – kies ik duidelijk voor “omdat het hoort”, met daarnaast een ondersteunende rol voor “omdat het loont”. MVO Nederland benadrukt dat ondernemers om verschillende motieven aan MVO doen: omdat het hoort, omdat het moet, of omdat het loont (Mvo omdat het hoort, moet of loont, 2008). Mijn keuze voor “hoort” als hoofdmotief sluit aan bij de morele verantwoordelijkheid die ik voel als toekomstig professional.',
  'De reden dat “hoort” voor mij centraal staat, komt voort uit mijn eigen ontwikkeling tijdens de opdrachten. Ik heb gemerkt dat veel van mijn eigen gedrag lange tijd gestuurd werd door routine en gemak, bijvoorbeeld bij voeding en vervoer (Hekking, 2025). Pas toen ik dit concreet ging meten en analyseren, werd ik me bewust van de impact. Dat zie ik direct terug bij scholieren: ook zij maken keuzes zonder daar echt bij stil te staan. Vanuit dat perspectief vind ik dat je als toekomstig marketeer een verantwoordelijkheid hebt om niet alleen producten te verkopen, maar ook gedrag positief te beïnvloeden.',
  'Wat mij hierin vooral heeft gevormd, is dat kleine veranderingen daadwerkelijk effect hebben. In mijn eigen gedrag zag ik dat al: minder verspilling, bewuster omgaan met spullen en kleine sociale acties zorgen voor een merkbaar verschil. Dat sluit aan bij wat we ook terugzien in ons onderzoek: jongeren eten vaak ongezond niet omdat ze dat per se willen, maar omdat het gezellig is, makkelijk is en past bij het moment. Daardoor geloof ik dat je geen grote, ingewikkelde oplossing nodig hebt, maar juist iets dat naadloos aansluit op hun gedrag.',
  'Vanuit People betekent mijn ambitieniveau dat gezondheid en welzijn voorop staan. Het probleem gaat niet alleen over voeding, maar ook over energie, concentratie en hoe jongeren zich voelen op school. Vanuit Planet zie ik dat dit ook breder doorwerkt, bijvoorbeeld in verpakkingen en consumptiegedrag, maar dat is voor mij minder leidend dan de sociale impact. Vanuit Profit ben ik realistischer geworden: een oplossing moet ook werken in de praktijk. Als iets niet aantrekkelijk, betaalbaar of makkelijk is, gaan mensen het simpelweg niet gebruiken. De Sociaal-Economische Raad beschrijft MVO dan ook als het bewust richten van ondernemingsactiviteiten op waardecreatie in drie dimensies — people, planet en profit — gericht op maatschappelijke welvaart op lange termijn (Cramer, 2005).',
  'Daarom voeg ik bewust een deel “omdat het loont” toe. Niet als hoofdreden, maar als voorwaarde. Een oplossing moet voor scholieren aantrekkelijk zijn (smaak, prijs, gemak), voor scholen waarde toevoegen (bijvoorbeeld betere focus of imago) en voor aanbieders interessant zijn om aan te bieden. Alleen dan ontstaat er echt verandering. Dit sluit aan bij de Triple Bottom Line van Elkington (1997), die stelt dat economische, sociale en ecologische waarde gelijktijdig en in balans moeten worden nagestreefd.',
  'Mijn ambitie is dus om duurzaamheid niet alleen vanuit overtuiging toe te passen, maar ook slim te vertalen naar gedrag en waarde. De combinatie van “hoort” als morele basis en “loont” als praktische uitvoering zorgt ervoor dat ik niet alleen idealistisch denk, maar ook effectief kan handelen. Dat past bij het type professional dat ik wil worden: iemand die impact maakt, maar wel op een manier die werkt in de echte wereld.',
]

export default function Opdracht1Page() {
  return (
    <>
      <PageHead
        number="01"
        label="Portfolio · Opdracht"
        title="Ambitieniveau duurzaamheid."
        lead="Individuele opdracht uit de module Toekomstbestendige Business Innovatie. Twee onderdelen: een samenvatting van het TBI-essay en een uitwerking van mijn persoonlijke ambitieniveau rondom het probleem."
        meta={[
          { key: 'Type', value: 'Individuele opdracht' },
          { key: 'Module', value: 'Toekomstbestendige Business Innovatie' },
          { key: 'Auteur', value: 'Thijs Hekking' },
        ]}
      />

      {/* ONDERDEEL 1 — Samenvatting essay TBI */}
      <section className="px-6 md:px-10 py-20">
        <SectionHeading
          eyebrow="Onderdeel 1 · Samenvatting essay TBI"
          heading="Thijs Hekking onderdeel 1 (Samenvatting essay TBI)."
        />

        <div className="grid gap-8 max-w-[820px]">
          {onderdeel1Paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="text-[17px] md:text-[18px]"
              style={{
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* ONDERDEEL 2 — Persoonlijk ambitieniveau */}
      <section
        className="px-6 md:px-10 py-20"
        style={{
          borderTop: '0.5px solid var(--border)',
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <SectionHeading
          eyebrow="Onderdeel 2 · Persoonlijk ambitieniveau"
          heading="Onderdeel 2."
        />

        <div className="grid gap-8 max-w-[820px]">
          {onderdeel2Paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="text-[17px] md:text-[18px]"
              style={{
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
              }}
            >
              {paragraph}
            </p>
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
