import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import PageHead from '@/components/rubric/PageHead'
import SectionHeading from '@/components/rubric/SectionHeading'

export const metadata = {
  title: 'Bronnen — Challenge Cube',
}

type OpdrachtCard = {
  href: string
  title: string
  description: string
}

type InterviewCard = {
  href: string
  title: string
  description: string
  meta: string
}

type ApaSource = {
  id: string
  label: string
  reference: string
  link?: string
}

const interviews: InterviewCard[] = [
  {
    href: '/bronnen/interview-1',
    title: 'Interview 1 — Isa, 6 VWO',
    description: 'Kwalitatief interview over snackgedrag op school: sociale context, prijsgevoeligheid en zelfperceptie rondom ongezonde keuzes tijdens pauzes.',
    meta: 'Sprint 1 · Probleemverkenning',
  },
  {
    href: '/bronnen/interview-2',
    title: 'Interview 2 — Twee VMBO-leerlingen, jaar 3',
    description: 'Kwalitatief groepsinterview over snackgedrag op school: impulsaankopen, prijsgrenzen, groepsgezelligheid en financieel bewustzijn bij VMBO-leerlingen.',
    meta: 'Sprint 1 · Probleemverkenning',
  },
]

const opdrachten: OpdrachtCard[] = [
  {
    href: '/bronnen/opdracht-1',
    title: 'Opdracht 1 — Ambitieniveau duurzaamheid',
    description: 'APA-bronnenlijst met gekoppelde bronverwijzingen in de lopende tekst.',
  },
  {
    href: '/bronnen/opdracht-2',
    title: 'Opdracht 2 — Ambitieniveau duurzaamheid (groep)',
    description: 'Vijf individuele ambitieniveaus, groepskeuze en onderbouwing op basis van Sprint 1.',
  },
  {
    href: '/bronnen/opdracht-3',
    title: 'Opdracht 3 — Ecolabels',
    description: 'Analyse van Fairtrade en FSC bij Ben & Jerry\'s via het Triple Bottom Line-model.',
  },
  {
    href: '/bronnen/opdracht-4',
    title: 'Opdracht 4 — Impactbepaling',
    description: 'Duurzaamheidsimpact van de Challenge Table langs sociaal, ecologisch en financieel — stakeholdermap en impactmatrix.',
  },
  {
    href: '/bronnen/opdracht-5',
    title: 'Opdracht 5 — B Corp',
    description: 'Analyse van B Corp-certificering en drie gecertificeerde bedrijven (Pley School, LunchBox Solutions, Mepal) als inspiratiekader voor de Challenge Table.',
  },
  {
    href: '/bronnen/opdracht-6',
    title: 'Opdracht 6 — Scorecard Challenge Table',
    description: 'Ecologische en sociale scorecard voor de Challenge Table: relevante aspecten, concrete activiteiten en meervoudige waardecreatie onderbouwd met externe bronnen.',
  },
  {
    href: '/bronnen/opdracht-7',
    title: 'Opdracht 7 — Pressure cooker: financieel dashboard',
    description: 'Tijdgebonden opdracht waarbij in kort bestek een financieel dashboard is ontworpen en opgeleverd.',
  },
  {
    href: '/bronnen/opdracht-8',
    title: 'Opdracht 8 — Value Proposition Canvas',
    description: 'Twee iteraties van de Value Proposition Canvas: klantprofiel van scholieren in de pauze en uitwerking van de value map met voordeelverschaffers en pijnverzachters.',
  },
  {
    href: '/bronnen/opdracht-9',
    title: 'Opdracht 9 — Concurrentieanalyse',
    description: 'Tweede iteratie: marktanalyse met trechtermodel, systematische analyse van twaalf concurrenten in drie lagen, en positioneringsmatrix op twee strategische assen.',
  },
  {
    href: '/bronnen/opdracht-10',
    title: 'Opdracht 10 — Prijsstrategie',
    description: 'Waarde-gebaseerde prijsstrategie voor de Challenge Table: concurrentiepositie, penetratiestrategie, segmentdifferentiatie en vijf businesscase-scenario\'s.',
  },
  {
    href: '/bronnen/opdracht-19',
    title: 'Opdracht 19 — Value Proposition Canvas',
    description: 'Twee iteraties van de Value Proposition Canvas: klantprofiel van scholieren in de pauze en uitwerking van de value map met voordeelverschaffers en pijnverzachters.',
  },
  {
    href: '/bronnen/opdracht-20',
    title: 'Opdracht 20 — Customer Journey IST',
    description: 'IST Customer Journey Map van scholieren rondom eetgedrag tijdens een schooldag, uitgewerkt per fase: awareness, consideration, decision, service en loyalty.',
  },
  {
    href: '/bronnen/opdracht-21',
    title: 'Opdracht 21 — Customer Journey SOLL',
    description: 'SOLL Customer Journey Map met de gewenste situatie: interventies via gamification, sociale invloed en keuze-architectuur om gezonder eetgedrag te stimuleren.',
  },
]

const apaSources: ApaSource[] = [
  {
    id: 'interview-1',
    label: 'Interview 1',
    reference:
      'Hekking, T. (2025). Interview met Isa, 6 VWO over snackgedrag op school [Audio-opname en transcript]. Challenge Cube.',
    link: '/bronnen/interview-1',
  },
  {
    id: 'interview-2',
    label: 'Interview 2',
    reference:
      'Hekking, T. (2025). Groepsinterview met twee VMBO-leerlingen jaar 3 over snackgedrag op school [Audio-opname en transcript]. Challenge Cube.',
    link: '/bronnen/interview-2',
  },
  {
    id: 'opdracht-1-duurzaam-ondernemen-2008',
    label: 'Opdracht 1',
    reference:
      'Duurzaam Ondernemen. (2008, 9 februari). Mvo omdat het hoort, moet of loont. Duurzaam-ondernemen.nl.',
    link: 'https://www.duurzaam-ondernemen.nl/mvo-omdat-het-hoort-moet-of-loont/',
  },
  {
    id: 'opdracht-1-elkington-1997',
    label: 'Opdracht 1',
    reference:
      'Elkington, J. (1997). Cannibals with forks: The triple bottom line of 21st century business. Capstone Publishing.',
    link: 'https://www.proquest.com/openview/804cc9d98196ef6e26d88748e89f8db0/1?pq-origsite=gscholar&cbl=35934',
  },
  {
    id: 'opdracht-1-hekking-2025',
    label: 'Opdracht 1',
    reference:
      'Hekking, T. (2025). Individueel verantwoordingsdossier Toekomstige Business Innovatie [Ongepubliceerd essay]. Hogeschool Windesheim.',
    link: '/bronnen/opdracht-1/hekking-2025',
  },
  {
    id: 'opdracht-1-ser-2000',
    label: 'Opdracht 1',
    reference:
      'Sociaal-Economische Raad. (2000). De winst van waarden: Advies over maatschappelijk verantwoord ondernemen. SER.',
    link: 'https://www.ser.nl/-/media/ser/downloads/adviezen/2000/maatschappelijk-ondernemen.pdf',
  },
  {
    id: 'opdracht-2-cbs-2023',
    label: 'Opdracht 2',
    reference:
      'Centraal Bureau voor de Statistiek. (2023). (On)gezonde leefstijl 2022: Opvattingen, motieven en gedragingen - hoofdstuk 2: (On)gezond eten. CBS.',
    link: 'https://www.cbs.nl/nl-nl/longread/rapportages/2023/on--gezonde-leefstijl-2022-opvattingen-motieven-en-gedragingen/2--on--gezond-eten',
  },
  {
    id: 'opdracht-2-clear-2018',
    label: 'Opdracht 2',
    reference:
      'Clear, J. (2018). Atomic habits: An easy & proven way to build good habits & break bad ones. Avery.',
  },
  {
    id: 'opdracht-2-cramer-2005',
    label: 'Opdracht 2',
    reference:
      'Cramer, J. (2005). Ondernemen met hoofd en hart: Maatschappelijk verantwoord ondernemen in Nederland. Van Gorcum.',
  },
  {
    id: 'opdracht-2-elkington-1997',
    label: 'Opdracht 2',
    reference:
      'Elkington, J. (1997). Cannibals with forks: The triple bottom line of 21st century business. Capstone.',
    link: 'https://www.proquest.com/openview/804cc9d98196ef6e26d88748e89f8db0/1?pq-origsite=gscholar&cbl=35934',
  },
  {
    id: 'opdracht-2-hekking-2025',
    label: 'Opdracht 2',
    reference:
      'Hekking, T. (2025). Individueel verantwoordingsdossier TBI [Ongepubliceerd werkstuk]. Windesheim.',
    link: '/bronnen/opdracht-1/hekking-2025',
  },
  {
    id: 'opdracht-2-michie-2011',
    label: 'Opdracht 2',
    reference:
      'Michie, S., van Stralen, M. M., & West, R. (2011). The behaviour change wheel: A new method for characterising and designing behaviour change interventions. Implementation Science, 6(1), 42.',
    link: 'https://doi.org/10.1186/1748-5908-6-42',
  },
  {
    id: 'opdracht-2-mvo-2008',
    label: 'Opdracht 2',
    reference: 'MVO Nederland. (2008). MVO omdat het hoort, moet of loont.',
    link: 'https://www.mvonederland.nl',
  },
  {
    id: 'opdracht-2-rivm-2025',
    label: 'Opdracht 2',
    reference: 'Rijksinstituut voor Volksgezondheid en Milieu. (2025). Overgewicht: jongeren. VZinfo.',
    link: 'https://www.vzinfo.nl/overgewicht/jongeren',
  },
  {
    id: 'opdracht-2-vermeir-verbeke-2006',
    label: 'Opdracht 2',
    reference:
      'Vermeir, I., & Verbeke, W. (2006). Sustainable food consumption: Exploring the consumer "attitude-behavioral intention" gap. Journal of Agricultural and Environmental Ethics, 19(2), 169-194.',
    link: 'https://doi.org/10.1007/s10806-005-5485-3',
  },
  {
    id: 'opdracht-3-ben-jerry-fairtrade',
    label: 'Opdracht 3',
    reference:
      "Ben & Jerry's. (z.d.-a). Fairtrade. Geraadpleegd op 27 april 2026, van https://www.benjerry.com/values/issues-we-care-about/fairtrade",
    link: 'https://www.benjerry.com/values/issues-we-care-about/fairtrade',
  },
  {
    id: 'opdracht-3-ben-jerry-fairtrade-au',
    label: 'Opdracht 3',
    reference:
      "Ben & Jerry's. (z.d.-b). Dig into our Fairtrade commitments. Geraadpleegd op 27 april 2026, van https://www.benandjerry.com.au/whats-new/2018/02/fairtrade-commitments",
    link: 'https://www.benandjerry.com.au/whats-new/2018/02/fairtrade-commitments',
  },
  {
    id: 'opdracht-3-ben-jerry-packaging-standard',
    label: 'Opdracht 3',
    reference:
      "Ben & Jerry's. (z.d.-c). Paper based packaging standard. Geraadpleegd op 27 april 2026, van https://www.benjerry.com/values/how-we-do-business/paper-based-packaging-standard",
    link: 'https://www.benjerry.com/values/how-we-do-business/paper-based-packaging-standard',
  },
  {
    id: 'opdracht-3-ben-jerry-paper-2023',
    label: 'Opdracht 3',
    reference:
      "Ben & Jerry's. (2023, februari). 3 things you might not know about paper packaging and the environment. Geraadpleegd op 27 april 2026, van https://www.benjerry.com/whats-new/2023/02/paper-packaging-and-environment",
    link: 'https://www.benjerry.com/whats-new/2023/02/paper-packaging-and-environment',
  },
  {
    id: 'opdracht-3-borgen-2025',
    label: 'Opdracht 3',
    reference:
      'Borgen Magazine. (2025, april). Popular brands with ethical sourcing. Geraadpleegd op 27 april 2026, van https://www.borgenmagazine.com/ethical-sourcing/',
    link: 'https://www.borgenmagazine.com/ethical-sourcing/',
  },
  {
    id: 'opdracht-3-cottom-2019',
    label: 'Opdracht 3',
    reference:
      "Cottom, T. (2019). Ben & Jerry's moves toward sustainable products. Recycling Today. Geraadpleegd op 27 april 2026, van https://www.recyclingtoday.com/news/ben-jerrys-plastic-straws-spoons-ice-cream/",
    link: 'https://www.recyclingtoday.com/news/ben-jerrys-plastic-straws-spoons-ice-cream/',
  },
  {
    id: 'opdracht-3-fairtrade-april-2025',
    label: 'Opdracht 3',
    reference:
      'Fairtrade International. (2025, april). Cocoa price announcement April 2025. Geraadpleegd op 27 april 2026, van https://www.fairtrade.net/content/dam/fairtrade/fairtrade-international/standards/standards-and-pricing-work-in-progress/cocoa/2025-04-30_Cocoa-Price-Announcement_EN.pdf',
    link: 'https://www.fairtrade.net/content/dam/fairtrade/fairtrade-international/standards/standards-and-pricing-work-in-progress/cocoa/2025-04-30_Cocoa-Price-Announcement_EN.pdf',
  },
  {
    id: 'opdracht-3-fairtrade-december-2025',
    label: 'Opdracht 3',
    reference:
      'Fairtrade International. (2025, december). Fairtrade boosts support for cocoa farmers amid continuing market uncertainty. Geraadpleegd op 27 april 2026, van https://www.fairtrade.net/us-en/for-media/fairtrade-boosts-support-for-cocoa-farmers-amid-continuing-marke.html',
    link: 'https://www.fairtrade.net/us-en/for-media/fairtrade-boosts-support-for-cocoa-farmers-amid-continuing-marke.html',
  },
  {
    id: 'opdracht-3-fairtrade-minimum-price',
    label: 'Opdracht 3',
    reference:
      'Fairtrade International. (z.d.). Fairtrade minimum price and premium table. Geraadpleegd op 27 april 2026, van https://www.fairtrade.net/content/dam/fairtrade/global/minimum-price-table/Master_To%20do%20PDFs_Fairtrade_Minimum_Price_and_Premium_Table_EN_PUBLIC.pdf',
    link: 'https://www.fairtrade.net/content/dam/fairtrade/global/minimum-price-table/Master_To%20do%20PDFs_Fairtrade_Minimum_Price_and_Premium_Table_EN_PUBLIC.pdf',
  },
  {
    id: 'opdracht-3-fsc-bosbeheer',
    label: 'Opdracht 3',
    reference:
      'FSC Nederland. (z.d.-a). Verantwoord bosbeheer. Geraadpleegd op 27 april 2026, van https://nl.fsc.org/nl-nl/het-belang-van-fsc/verantwoord-bosbeheer',
    link: 'https://nl.fsc.org/nl-nl/het-belang-van-fsc/verantwoord-bosbeheer',
  },
  {
    id: 'opdracht-3-fsc-belang',
    label: 'Opdracht 3',
    reference:
      'FSC Nederland. (z.d.-b). Het belang van FSC. Geraadpleegd op 27 april 2026, van https://nl.fsc.org/nl-nl/kies-voor-fsc/het-belang-van-fsc',
    link: 'https://nl.fsc.org/nl-nl/kies-voor-fsc/het-belang-van-fsc',
  },
  {
    id: 'opdracht-4-ellen-macarthur-detail',
    label: 'Opdracht 4',
    reference:
      'Ellen MacArthur Foundation. (z.d.-a). The circular economy in detail. Geraadpleegd op 29 april 2026, van https://www.ellenmacarthurfoundation.org/the-circular-economy-in-detail-deep-dive',
    link: 'https://www.ellenmacarthurfoundation.org/the-circular-economy-in-detail-deep-dive',
  },
  {
    id: 'opdracht-4-ellen-macarthur-intro',
    label: 'Opdracht 4',
    reference:
      'Ellen MacArthur Foundation. (z.d.-b). The circular economy: Definition & model explained. Geraadpleegd op 29 april 2026, van https://www.ellenmacarthurfoundation.org/topics/circular-economy-introduction/overview',
    link: 'https://www.ellenmacarthurfoundation.org/topics/circular-economy-introduction/overview',
  },
  {
    id: 'opdracht-4-ec-packaging',
    label: 'Opdracht 4',
    reference:
      'Europese Commissie. (2024). Packaging waste. Directorate-General for Environment. Geraadpleegd op 29 april 2026, van https://environment.ec.europa.eu/topics/waste-and-recycling/packaging-waste_en',
    link: 'https://environment.ec.europa.eu/topics/waste-and-recycling/packaging-waste_en',
  },
  {
    id: 'opdracht-4-ec-lcc',
    label: 'Opdracht 4',
    reference:
      'Europese Commissie. (z.d.-a). Life-cycle costing. Green Public Procurement, Green Forum. Geraadpleegd op 29 april 2026, van https://green-forum.ec.europa.eu/green-business/green-public-procurement/life-cycle-costing_en',
    link: 'https://green-forum.ec.europa.eu/green-business/green-public-procurement/life-cycle-costing_en',
  },
  {
    id: 'opdracht-4-ec-gpp',
    label: 'Opdracht 4',
    reference:
      'Europese Commissie. (z.d.-b). Green Public Procurement. Green Forum. Geraadpleegd op 29 april 2026, van https://green-forum.ec.europa.eu/green-business/green-public-procurement_en',
    link: 'https://green-forum.ec.europa.eu/green-business/green-public-procurement_en',
  },
  {
    id: 'opdracht-4-fsc-cert',
    label: 'Opdracht 4',
    reference:
      'FSC International. (z.d.). FSC certification. Geraadpleegd op 29 april 2026, van https://fsc.org/',
    link: 'https://fsc.org/',
  },
  {
    id: 'opdracht-4-ilo',
    label: 'Opdracht 4',
    reference:
      'ILO - International Labour Organization. (z.d.). Safety and health at work. Geraadpleegd op 29 april 2026, van https://www.ilo.org/topics/safety-and-health-work',
    link: 'https://www.ilo.org/topics/safety-and-health-work',
  },
  {
    id: 'opdracht-4-kidv-2023',
    label: 'Opdracht 4',
    reference:
      'KIDV - Kennisinstituut Duurzame Verpakkingen. (2023). Wegwijzer Duurzaam Verpakken. Geraadpleegd op 29 april 2026, van https://kidv.nl/',
    link: 'https://kidv.nl/',
  },
  {
    id: 'opdracht-4-kidv-2024',
    label: 'Opdracht 4',
    reference:
      'KIDV - Kennisinstituut Duurzame Verpakkingen. (2024). Recyclechecks en richtlijnen materialencombinaties. Geraadpleegd op 29 april 2026, van https://kidv.nl/',
    link: 'https://kidv.nl/',
  },
  {
    id: 'opdracht-4-oecd-pisa-2019',
    label: 'Opdracht 4',
    reference:
      "OECD. (2019). PISA 2018 Results (Volume III): What school life means for students' lives. OECD Publishing.",
    link: 'https://doi.org/10.1787/acd78851-en',
  },
  {
    id: 'opdracht-4-oecd-2025',
    label: 'Opdracht 4',
    reference:
      "OECD. (z.d.). Students' well-being. Geraadpleegd op 29 april 2026, van https://www.oecd.org/pisa/",
    link: 'https://www.oecd.org/pisa/',
  },
  {
    id: 'opdracht-4-rivm-2020',
    label: 'Opdracht 4',
    reference:
      'RIVM. (2020). Een gezonde schoollunch en meer bewegen op de basisschool helpen in de aanpak van overgewicht. Rijksinstituut voor Volksgezondheid en Milieu. Geraadpleegd op 29 april 2026, van https://www.rivm.nl/nieuws/gezonde-schoollunch-en-meer-bewegen-op-basisschool-helpen-in-aanpak-van-overgewicht',
    link: 'https://www.rivm.nl/nieuws/gezonde-schoollunch-en-meer-bewegen-op-basisschool-helpen-in-aanpak-van-overgewicht',
  },
  {
    id: 'opdracht-4-rivm-gezond-onderwijs',
    label: 'Opdracht 4',
    reference:
      'RIVM. (2024). Gezond onderwijs - Gezonde School-aanpak. Geraadpleegd op 29 april 2026, van https://www.rivm.nl/gemeente/leefomgeving-en-gezondheid/gezond-onderwijs',
    link: 'https://www.rivm.nl/gemeente/leefomgeving-en-gezondheid/gezond-onderwijs',
  },
  {
    id: 'opdracht-4-ewaste-2024',
    label: 'Opdracht 4',
    reference:
      'UNITAR & ITU. (2024). Global e-waste monitor 2024: Electronic waste rising five times faster than documented e-waste recycling. United Nations Institute for Training and Research / International Telecommunication Union. Geraadpleegd op 29 april 2026, van https://unitar.org/about/news-stories/press/global-e-waste-monitor-2024-electronic-waste-rising-five-times-faster-documented-e-waste-recycling',
    link: 'https://unitar.org/about/news-stories/press/global-e-waste-monitor-2024-electronic-waste-rising-five-times-faster-documented-e-waste-recycling',
  },
  {
    id: 'opdracht-4-voedingscentrum-2024a',
    label: 'Opdracht 4',
    reference:
      'Voedingscentrum. (2024a). Het programma De Gezonde Schoolkantine. Geraadpleegd op 29 april 2026, van https://www.voedingscentrum.nl/professionals/gezonde-eetomgeving/de-gezonde-schoolkantine/het-programma-de-gezonde-schoolkantine.aspx',
    link: 'https://www.voedingscentrum.nl/professionals/gezonde-eetomgeving/de-gezonde-schoolkantine/het-programma-de-gezonde-schoolkantine.aspx',
  },
  {
    id: 'opdracht-4-voedingscentrum-2024b',
    label: 'Opdracht 4',
    reference:
      'Voedingscentrum. (2024b). Waarom een gezonde schoolkantine? Geraadpleegd op 29 april 2026, van https://www.voedingscentrum.nl/professionals/gezonde-eetomgeving/de-gezonde-schoolkantine/het-programma-de-gezonde-schoolkantine/waarom-een-gezonde-schoolkantine.aspx',
    link: 'https://www.voedingscentrum.nl/professionals/gezonde-eetomgeving/de-gezonde-schoolkantine/het-programma-de-gezonde-schoolkantine/waarom-een-gezonde-schoolkantine.aspx',
  },
  {
    id: 'opdracht-4-who-adolescent',
    label: 'Opdracht 4',
    reference:
      'WHO. (z.d.-a). Adolescent health. World Health Organization. Geraadpleegd op 29 april 2026, van https://www.who.int/health-topics/adolescent-health',
    link: 'https://www.who.int/health-topics/adolescent-health',
  },
  {
    id: 'opdracht-4-who-school-nutrition',
    label: 'Opdracht 4',
    reference:
      'WHO. (z.d.-b). Healthy diet - School food and nutrition policy. World Health Organization. Geraadpleegd op 29 april 2026, van https://www.who.int/initiatives/school-nutrition',
    link: 'https://www.who.int/initiatives/school-nutrition',
  },
  {
    id: 'opdracht-4-worldsteel-2022a',
    label: 'Opdracht 4',
    reference:
      'World Steel Association. (2022a). Steel - The permanent material in the circular economy. Geraadpleegd op 29 april 2026, van https://worldsteel.org/about-steel/product-sustainability/',
    link: 'https://worldsteel.org/about-steel/product-sustainability/',
  },
  {
    id: 'opdracht-4-worldsteel-2022b',
    label: 'Opdracht 4',
    reference:
      'World Steel Association. (2022b). Steel and raw materials - Fact sheet. Geraadpleegd op 29 april 2026, van https://worldsteel.org/media/fact-sheets/',
    link: 'https://worldsteel.org/media/fact-sheets/',
  },
  {
    id: 'opdracht-5-advcloudfiles',
    label: 'Opdracht 5',
    reference: 'ADVcloudfiles. (2025). Advantech ESG rapport 2024 - Pley School duurzaam bordspellenproject.',
    link: 'https://advcloudfiles.advantech.com/web/ESGReport/2024/Advantech_ESG_Report_2024_EN.pdf',
  },
  {
    id: 'opdracht-5-bcorp-certification',
    label: 'Opdracht 5',
    reference: 'B Lab. (z.d.). What does B Corp certification mean? B Corporation.',
    link: 'https://www.bcorporation.net/en-us/certification/',
  },
  {
    id: 'opdracht-5-bcorp-lunchbox',
    label: 'Opdracht 5',
    reference: 'B Lab. (2025). LunchBox Solutions - B Corp directory. B Corporation.',
    link: 'https://www.bcorporation.net/en-us/find-a-b-corp/company/lunchbox-solutions/',
  },
  {
    id: 'opdracht-5-bcorp-mepal',
    label: 'Opdracht 5',
    reference: 'B Lab. (2026). Mepal BV - B Corp directory. B Corporation.',
    link: 'https://www.bcorporation.net/en-us/find-a-b-corp/company/mepal-bv/',
  },
  {
    id: 'opdracht-5-bcorp-pley',
    label: 'Opdracht 5',
    reference: 'B Lab. (2026). Pley School International Co. - B Corp directory. B Corporation.',
    link: 'https://www.bcorporation.net/en-us/find-a-b-corp/company/pley-school-international-co/',
  },
  {
    id: 'opdracht-5-danny',
    label: 'Opdracht 5',
    reference: 'Danny. (2023, 14 maart). The benefits of B Corp certification for businesses and society. The Daily Green.',
    link: 'https://thedailygreen.org/benefits-of-b-corp-certification/',
  },
  {
    id: 'opdracht-5-eppi',
    label: 'Opdracht 5',
    reference: 'Eppi Magazine. (2024). Mepal behaalt B Corp-certificering. Eppi.',
    link: 'https://www.eppi.net/nl/nieuws/mepal-behaalt-b-corp-certificering',
  },
  {
    id: 'opdracht-5-ikl',
    label: 'Opdracht 5',
    reference: 'Industriële Kring Lochem (IKL). (2024). Mepal B Corp gecertificeerd met 101,6 punten.',
    link: 'https://www.iklochem.nl/nieuws/mepal-b-corp-gecertificeerd',
  },
  {
    id: 'opdracht-5-keurmerkwijzer',
    label: 'Opdracht 5',
    reference: 'Keurmerkwijzer / Milieu Centraal. (z.d.). Certified B Corporation - keurmerk informatie. Milieu Centraal.',
    link: 'https://keurmerkwijzer.nl/keurmerken/certified-b-corporation/',
  },
  {
    id: 'opdracht-5-keys-tomorrow',
    label: 'Opdracht 5',
    reference: 'Keys for Tomorrow. (z.d.). Pley School: transforming education through play. Keys for Tomorrow.',
    link: 'https://www.keysfortomorrow.com/pley-school',
  },
  {
    id: 'opdracht-5-mepal',
    label: 'Opdracht 5',
    reference: 'Mepal. (2022). Op weg naar een klimaatpositieve toekomst - duurzaamheidsrapport. Mepal.',
    link: 'https://www.mepal.com/nl/duurzaamheid',
  },
  {
    id: 'opdracht-5-pleyschool',
    label: 'Opdracht 5',
    reference: 'PleySchool. (2024). ESG/CSR - impact en activiteiten. PleySchool.',
    link: 'https://www.pleyschool.com/csr',
  },
  {
    id: 'opdracht-6-acm-2023',
    label: 'Opdracht 6',
    reference: 'Autoriteit Consument & Markt. (2023). Leidraad duurzaamheidsclaims.',
    link: 'https://www.acm.nl/nl/publicaties/leidraad-duurzaamheidsclaims',
  },
  {
    id: 'opdracht-6-bcorp-cert',
    label: 'Opdracht 6',
    reference:
      'B Lab. (z.d.). What does B Corp certification mean? B Corporation. Geraadpleegd op 2 mei 2026, van https://www.bcorporation.net/en-us/certification/',
    link: 'https://www.bcorporation.net/en-us/certification/',
  },
  {
    id: 'opdracht-6-lunchbox-2025',
    label: 'Opdracht 6',
    reference: 'B Lab. (2025). LunchBox Solutions - B Corp directory. B Corporation.',
    link: 'https://www.bcorporation.net/en-us/find-a-b-corp/company/lunchbox-solutions/',
  },
  {
    id: 'opdracht-6-ewaste-2024',
    label: 'Opdracht 6',
    reference:
      "Baldé, C. P., Kuehr, R., Yamamoto, T., McDonald, R., D'Angelo, E., Althaf, S., Bel, G., Deubzer, O., Fernandez-Cubillo, E., Forti, V., Gray, V., Herat, S., Honda, S., Iattoni, G., Khetriwal, D. S., Luda di Cortemiglia, V., Lobuntsova, Y., Nnorom, I., Pralat, N., & Wagner, M. (2024). Global e-waste monitor 2024. International Telecommunication Union & United Nations Institute for Training and Research.",
    link: 'https://ewastemonitor.info/the-global-e-waste-monitor-2024/',
  },
  {
    id: 'opdracht-6-ema-nd',
    label: 'Opdracht 6',
    reference:
      'Ellen MacArthur Foundation. (z.d.). Design and the circular economy. Geraadpleegd op 2 mei 2026, van https://www.ellenmacarthurfoundation.org/articles/design-and-the-circular-economy',
    link: 'https://www.ellenmacarthurfoundation.org/articles/design-and-the-circular-economy',
  },
  {
    id: 'opdracht-6-rtr-2024',
    label: 'Opdracht 6',
    reference:
      'Europees Parlement & Raad van de Europese Unie. (2024). Richtlijn (EU) 2024/1799 van het Europees Parlement en de Raad van 13 juni 2024 betreffende gemeenschappelijke regels ter bevordering van de reparatie van goederen (Right-to-Repair-Richtlijn). Publicatieblad van de Europese Unie, L 2024/1799.',
    link: 'https://eur-lex.europa.eu/eli/dir/2024/1799/oj',
  },
  {
    id: 'opdracht-6-ppwr-2025',
    label: 'Opdracht 6',
    reference:
      'Europees Parlement & Raad van de Europese Unie. (2025). Verordening (EU) 2025/40 van het Europees Parlement en de Raad van 19 december 2024 betreffende verpakkingen en verpakkingsafval (PPWR). Publicatieblad van de Europese Unie, L 2025/40.',
    link: 'https://eur-lex.europa.eu/eli/reg/2025/40/oj',
  },
  {
    id: 'opdracht-6-fairphone-nd',
    label: 'Opdracht 6',
    reference: 'Fairphone. (z.d.). Our impact. Geraadpleegd op 2 mei 2026, van https://www.fairphone.com/en/impact/',
    link: 'https://www.fairphone.com/en/impact/',
  },
  {
    id: 'opdracht-6-ikl-2024',
    label: 'Opdracht 6',
    reference: 'Industriële Kring Lochem. (2024). Mepal B Corp gecertificeerd met 101,6 punten.',
    link: 'https://www.iklochem.nl/nieuws/mepal-b-corp-gecertificeerd',
  },
  {
    id: 'opdracht-6-pisa-2022',
    label: 'Opdracht 6',
    reference: 'OECD. (2023). PISA 2022 results (Volume II): Learning during - and from - disruption. OECD Publishing.',
    link: 'https://doi.org/10.1787/a97db61c-en',
  },
  {
    id: 'opdracht-6-voedingscentrum-nd',
    label: 'Opdracht 6',
    reference:
      'Voedingscentrum. (z.d.). Is school een luilekkerland? Geraadpleegd op 2 mei 2026, van https://www.voedingscentrum.nl/nl/service/over-ons/wie-zijn-wij-/de-wereld-eet-door-columns/is-school-een-luilekkerland-.aspx',
    link: 'https://www.voedingscentrum.nl/nl/service/over-ons/wie-zijn-wij-/de-wereld-eet-door-columns/is-school-een-luilekkerland-.aspx',
  },
  {
    id: 'opdracht-6-who-2006',
    label: 'Opdracht 6',
    reference:
      'WHO Regional Office for Europe. (2006). Food and nutrition policy for schools: A tool for the development of school nutrition programmes in the WHO European Region. World Health Organization.',
    link: 'https://iris.who.int/handle/10665/107797',
  },
  {
    id: 'opdracht-9-earthgames',
    label: 'Opdracht 9',
    reference: 'Earthgames. (z.d.). Energizerkaarten. Geraadpleegd op 2 mei 2026, van https://www.earthgames.nl',
    link: 'https://www.earthgames.nl',
  },
  {
    id: 'opdracht-9-educadora',
    label: 'Opdracht 9',
    reference:
      'Educadora. (z.d.). Opdracht- en bewegingsdobbelstenen. Geraadpleegd op 2 mei 2026, van https://educadora-webshop.nl/product-tag/dobbelstenen/',
    link: 'https://educadora-webshop.nl/product-tag/dobbelstenen/',
  },
  {
    id: 'opdracht-9-gezondeschool',
    label: 'Opdracht 9',
    reference:
      'Gezonde School. (z.d.). Vignet en themacertificaten Gezonde School. Geraadpleegd op 2 mei 2026, van https://www.gezondeschool.nl/vignet-en-themacertificaten-gezonde-school',
    link: 'https://www.gezondeschool.nl/vignet-en-themacertificaten-gezonde-school',
  },
  {
    id: 'opdracht-9-glos-2021',
    label: 'Opdracht 9',
    reference:
      'GLOS. (2021). Aantal scholen met vignet Gezonde School gestegen. Gezonde Leefstijl op School. Geraadpleegd op 2 mei 2026, van https://www.gezondeleefstijlopschool.nl/algemeen/aantal-scholen-met-vignet-gezond-school-gestegen/',
    link: 'https://www.gezondeleefstijlopschool.nl/algemeen/aantal-scholen-met-vignet-gezond-school-gestegen/',
  },
  {
    id: 'opdracht-9-nijha-2026',
    label: 'Opdracht 9',
    reference: 'Nijha. (2026). Spelkarren en spelpakketten voor school. Geraadpleegd op 2 mei 2026, van https://www.nijha.nl',
    link: 'https://www.nijha.nl',
  },
  {
    id: 'opdracht-9-ocw-2026',
    label: 'Opdracht 9',
    reference:
      'OCW in Cijfers. (2026, 8 april). Aantal vo-scholen. Ministerie van Onderwijs, Cultuur en Wetenschap. https://www.ocwincijfers.nl/sectoren/voortgezet-onderwijs/instellingen/aantal-vo-scholen',
    link: 'https://www.ocwincijfers.nl/sectoren/voortgezet-onderwijs/instellingen/aantal-vo-scholen',
  },
  {
    id: 'opdracht-9-onderwijsvanmorgen-2024',
    label: 'Opdracht 9',
    reference:
      'Onderwijsvanmorgen. (2024, februari). Een maand na het smartphoneverbod: wat is het effect? https://www.onderwijsvanmorgen.nl/een-maand-na-het-smartphoneverbod-wat-is-het-effect/',
    link: 'https://www.onderwijsvanmorgen.nl/een-maand-na-het-smartphoneverbod-wat-is-het-effect/',
  },
  {
    id: 'opdracht-9-onderwijswereld-2020',
    label: 'Opdracht 9',
    reference:
      'Onderwijswereld. (2020). Gespreks- en kennismakingsspellen voor school. Geraadpleegd op 2 mei 2026, van https://www.onderwijswereld.nl',
    link: 'https://www.onderwijswereld.nl',
  },
  {
    id: 'opdracht-9-picoo-2026',
    label: 'Opdracht 9',
    reference:
      'Picoo. (2026). Picoo: interactief bewegingssysteem voor onderwijs. Geraadpleegd op 2 mei 2026, van https://www.picoo.nl',
    link: 'https://www.picoo.nl',
  },
  {
    id: 'opdracht-9-pointer-2022',
    label: 'Opdracht 9',
    reference:
      'Pointer. (2022, 15 juni). Fastfood rondom scholen neemt sterk toe. KRO-NCRV Pointer. https://pointer.kro-ncrv.nl/fastfood-rondom-scholen-neemt-sterk-toe',
    link: 'https://pointer.kro-ncrv.nl/fastfood-rondom-scholen-neemt-sterk-toe',
  },
  {
    id: 'opdracht-9-rijksoverheid-2024a',
    label: 'Opdracht 9',
    reference:
      'Rijksoverheid. (2024a). Nationaal Preventieakkoord: gezonde school. https://www.rijksoverheid.nl/onderwerpen/gezonde-school',
    link: 'https://www.rijksoverheid.nl/onderwerpen/gezonde-school',
  },
  {
    id: 'opdracht-9-rijksoverheid-2024b',
    label: 'Opdracht 9',
    reference:
      'Rijksoverheid. (2024b, 12 juli). OCW-onderzoek: leerlingen socialer en geconcentreerder door mobieltjesafspraak. https://www.rijksoverheid.nl/actueel/nieuws/2024/07/12/ocw-onderzoek-leerlingen-socialer-en-geconcentreerder-door-mobieltjesafspraak',
    link: 'https://www.rijksoverheid.nl/actueel/nieuws/2024/07/12/ocw-onderzoek-leerlingen-socialer-en-geconcentreerder-door-mobieltjesafspraak',
  },
  {
    id: 'opdracht-9-rijksoverheid-2024c',
    label: 'Opdracht 9',
    reference:
      'Rijksoverheid. (2024c). Gebruik van mobiele telefoons niet toegestaan in de klas. https://www.rijksoverheid.nl/onderwerpen/voortgezet-onderwijs/mobiele-apparaten-in-de-klas',
    link: 'https://www.rijksoverheid.nl/onderwerpen/voortgezet-onderwijs/mobiele-apparaten-in-de-klas',
  },
  {
    id: 'opdracht-9-voedingscentrum',
    label: 'Opdracht 9',
    reference:
      'Voedingscentrum. (z.d.). De Gezonde Schoolkantine. Geraadpleegd op 2 mei 2026, van https://www.voedingscentrum.nl/professionals/gezonde-eetomgeving/de-gezonde-schoolkantine.aspx',
    link: 'https://www.voedingscentrum.nl/professionals/gezonde-eetomgeving/de-gezonde-schoolkantine.aspx',
  },
  {
    id: 'opdracht-10-albrecht-2023',
    label: 'Opdracht 10',
    reference:
      'Albrecht, C., Green, D., & Hoffman, V. (2023). Principles of marketing (2e druk). OpenStax. https://openstax.org/books/principles-marketing/pages/1-introduction',
    link: 'https://openstax.org/books/principles-marketing/pages/1-introduction',
  },
  {
    id: 'opdracht-10-benedettini-2025',
    label: 'Opdracht 10',
    reference:
      'Benedettini, O. (2025). Product-as-a-Service business models: Strategic considerations for manufacturing firms. Journal of Service Management, 36(1), 14–39. https://doi.org/10.1108/JOSM-01-2024-0025',
    link: 'https://doi.org/10.1108/JOSM-01-2024-0025',
  },
  {
    id: 'opdracht-10-gitman-2018',
    label: 'Opdracht 10',
    reference:
      'Gitman, L. J., McDaniel, C., Shah, A., Reece, M., Koffel, L., Talsma, B., & Hyatt, J. C. (2018). Introduction to business. OpenStax. https://openstax.org/books/introduction-business/pages/1-introduction',
    link: 'https://openstax.org/books/introduction-business/pages/1-introduction',
  },
  {
    id: 'opdracht-10-mesch-2025',
    label: 'Opdracht 10',
    reference:
      'Mesch, J., de Boer, M., Ezendam, N., Renders, C., & Temminghoff, M. (2025). Eetgedrag van jongeren in Nederland: Trends, determinanten en interventies [Rapport]. Rijksinstituut voor Volksgezondheid en Milieu (RIVM). https://www.rivm.nl/',
    link: 'https://www.rivm.nl/',
  },
  {
    id: 'opdracht-10-wouters-2010',
    label: 'Opdracht 10',
    reference:
      'Wouters, E. J. M., Larsen, J. K., Kremers, S. P. J., Dagnelie, P. C., & Geenen, R. (2010). Peer influence on snacking behavior in adolescence. Appetite, 55(1), 11–17. https://doi.org/10.1016/j.appet.2010.03.002',
    link: 'https://doi.org/10.1016/j.appet.2010.03.002',
  },
  {
    id: 'opdracht-8-osterwalder-2014',
    label: 'Opdracht 8',
    reference:
      'Osterwalder, A., Pigneur, Y., Bernarda, G., & Smith, A. (2014). Value proposition design: How to create products and services customers want. Wiley.',
  },
  {
    id: 'opdracht-19-osterwalder-2014',
    label: 'Opdracht 19',
    reference:
      'Osterwalder, A., Pigneur, Y., Bernarda, G., & Smith, A. (2014). Value proposition design: How to create products and services customers want. Wiley.',
  },
  {
    id: 'opdracht-20-rosenbaum-2017',
    label: 'Opdracht 20',
    reference:
      'Rosenbaum, M. S., Otalora, M. L., & Ramírez, G. C. (2017). How to create a realistic customer journey map. Business Horizons, 60(1), 143–150. https://doi.org/10.1016/j.bushor.2016.09.010',
    link: 'https://doi.org/10.1016/j.bushor.2016.09.010',
  },
  {
    id: 'opdracht-20-lemon-2016',
    label: 'Opdracht 20',
    reference:
      'Lemon, K. N., & Verhoef, P. C. (2016). Understanding customer experience throughout the customer journey. Journal of Marketing, 80(6), 69–96. https://doi.org/10.1177/0022242916629048',
    link: 'https://doi.org/10.1177/0022242916629048',
  },
  {
    id: 'opdracht-21-rosenbaum-2017',
    label: 'Opdracht 21',
    reference:
      'Rosenbaum, M. S., Otalora, M. L., & Ramírez, G. C. (2017). How to create a realistic customer journey map. Business Horizons, 60(1), 143–150. https://doi.org/10.1016/j.bushor.2016.09.010',
    link: 'https://doi.org/10.1016/j.bushor.2016.09.010',
  },
  {
    id: 'opdracht-21-lemon-2016',
    label: 'Opdracht 21',
    reference:
      'Lemon, K. N., & Verhoef, P. C. (2016). Understanding customer experience throughout the customer journey. Journal of Marketing, 80(6), 69–96. https://doi.org/10.1177/0022242916629048',
    link: 'https://doi.org/10.1177/0022242916629048',
  },
]

export default function BronnenPage() {
  return (
    <>
      <PageHead
        number="07"
        label="Portfolio · Bronnen"
        title="Alle bronnen, in één overzicht."
        lead="Interviews, opdrachtpagina's en de volledige APA-lijst op één plek."
        meta={[
          { key: 'Totaal', value: `${apaSources.length} bronnen` },
          { key: 'Stijl', value: 'APA 7' },
        ]}
      />

      <section className="px-6 md:px-10 py-16 md:py-20">
        <SectionHeading eyebrow="Interviews" heading="Interviews." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-[1280px]">
          {interviews.map((iv) => (
            <Link
              key={iv.href}
              href={iv.href}
              target="_blank"
              rel="noopener noreferrer"
              className="opdracht-card group p-6 md:p-8 flex items-center justify-between gap-6 no-underline"
              style={{
                border: '0.5px solid var(--border)',
                backgroundColor: 'var(--surface)',
                transition:
                  'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease, background-color 220ms ease',
              }}
            >
              <div className="flex flex-col gap-2">
                <p
                  className="text-[10px] uppercase"
                  style={{ letterSpacing: '0.2em', color: 'var(--text-dim)' }}
                >
                  {iv.meta}
                </p>
                <h3
                  className="font-serif text-[22px]"
                  style={{ lineHeight: 1.2, color: 'var(--text-primary)' }}
                >
                  {iv.title}
                </h3>
                <p className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>
                  {iv.description}
                </p>
              </div>
              <span
                className="inline-flex items-center gap-1.5 text-[12px] uppercase shrink-0 opdracht-card__cta"
                style={{
                  letterSpacing: '0.15em',
                  color: 'var(--accent-mint)',
                  transition: 'transform 220ms ease',
                }}
              >
                Open
                <ExternalLink size={12} strokeWidth={1.5} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section
        className="px-6 md:px-10 py-16 md:py-20"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <SectionHeading eyebrow="Opdrachten" heading="Bronnen per opdracht." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-[1280px]">
          {opdrachten.map((o) => (
            <Link
              key={o.href}
              href={o.href}
              target="_blank"
              rel="noopener noreferrer"
              className="opdracht-card group p-6 md:p-8 flex items-center justify-between gap-6 no-underline"
              style={{
                border: '0.5px solid var(--border)',
                backgroundColor: 'var(--surface)',
                transition:
                  'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease, background-color 220ms ease',
              }}
            >
              <div className="flex flex-col gap-2">
                <h3
                  className="font-serif text-[22px]"
                  style={{ lineHeight: 1.2, color: 'var(--text-primary)' }}
                >
                  {o.title}
                </h3>
                <p className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>
                  {o.description}
                </p>
              </div>
              <span
                className="inline-flex items-center gap-1.5 text-[12px] uppercase shrink-0 opdracht-card__cta"
                style={{
                  letterSpacing: '0.15em',
                  color: 'var(--accent-mint)',
                  transition: 'transform 220ms ease',
                }}
              >
                Open
                <ExternalLink size={12} strokeWidth={1.5} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section
        className="px-6 md:px-10 py-16 md:py-20"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <SectionHeading eyebrow={`${apaSources.length} · APA 7`} heading="Totale APA-lijst." />
        <ol className="flex flex-col list-none p-0 m-0" style={{ borderTop: '0.5px solid var(--border)' }}>
          {apaSources.map((source, index) => (
            <ApaSourceItem key={source.id} source={source} index={index} />
          ))}
        </ol>
      </section>
    </>
  )
}

function ApaSourceItem({ source, index }: { source: ApaSource; index: number }) {
  return (
    <li
      id={source.id}
      className="py-6 scroll-mt-24"
      style={{ borderBottom: '0.5px solid var(--border)' }}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex flex-col gap-2">
          <span
            className="text-[10px] uppercase"
            style={{
              letterSpacing: '0.2em',
              color: 'var(--text-dim)',
            }}
          >
            #{String(index + 1).padStart(2, '0')} · {source.label}
          </span>
          <p
            className="text-[15px] md:text-[16px] max-w-[980px]"
            style={{
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              paddingLeft: '2.5rem',
              textIndent: '-2.5rem',
            }}
          >
            {source.reference}
          </p>
        </div>
        {source.link && (
          <a
            href={source.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[12px] uppercase shrink-0 hover:opacity-80"
            style={{
              letterSpacing: '0.15em',
              color: 'var(--accent-mint)',
            }}
          >
            Open
            <ExternalLink size={12} strokeWidth={1.5} />
          </a>
        )}
      </div>
    </li>
  )
}
