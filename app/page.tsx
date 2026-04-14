import Image from "next/image";

type Project = {
  title: string;
  context: string;
  problem: string;
  role: string;
  impact: string;
  href: string;
  accent: string;
};

type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

type Skill = {
  title: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "Social Snack Moments",
    context:
      "Schoolproject over snackgedrag van scholieren in sociale pauzemomenten.",
    problem:
      "De keuze voor snacks bleek niet alleen functioneel. Gezelligheid, prijs en meegaan in het moment bepaalden sterk wat jongeren kozen en waarom.",
    role:
      "Onderzoeker en conceptontwikkelaar: interviews vertaald naar een onderbouwd concept rond sociale pauzebeleving.",
    impact:
      "Laat zien hoe gedragsinzichten leiden tot een relevanter concept dan een productfocus alleen.",
    href: "#contact",
    accent: "from-amber-200 via-orange-100 to-white",
  },
  {
    title: "AI Content Flow voor een lokale retailer",
    context:
      "Conceptcase voor een onderneming die sneller consistente marketingcontent wilde ontwikkelen.",
    problem:
      "Campagnes kostten te veel tijd en misten een vaste lijn in boodschap, kanaalkeuze en opvolging.",
    role:
      "Strategie, prompt-architectuur en customer journey-vertaling naar een werkbaar contentproces.",
    impact:
      "Van losse output naar een schaalbare workflow met meer snelheid en merkconsistentie.",
    href: "#contact",
    accent: "from-sky-200 via-cyan-100 to-white",
  },
  {
    title: "Positionering voor een nieuw dienstenconcept",
    context:
      "Merk- en propositieoefening voor een startup in de oriëntatiefase.",
    problem:
      "De waardepropositie was te breed, waardoor doelgroep, boodschap en aanbod niet scherp genoeg samenkwamen.",
    role:
      "Analyse, doelgroepsegmentatie en conceptontwikkeling met focus op positionering en waardecreatie.",
    impact:
      "Een duidelijker verhaal, beter onderscheidend vermogen en sterkere basis voor communicatie.",
    href: "#contact",
    accent: "from-emerald-200 via-teal-100 to-white",
  },
];

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Onderzoek",
    description:
      "Ik start met context, doelgroep en gedrag. Via deskresearch, observatie of interviews breng ik het echte vraagstuk in kaart.",
  },
  {
    step: "02",
    title: "Inzichten",
    description:
      "Ik vertaal data naar betekenisvolle inzichten: waar zit spanning, motivatie, frictie of onbenutte waarde voor de gebruiker?",
  },
  {
    step: "03",
    title: "Concept",
    description:
      "Vanuit die inzichten ontwikkel ik een concept of strategische richting die inhoudelijk klopt en onderscheidend is.",
  },
  {
    step: "04",
    title: "Uitwerking",
    description:
      "Ik werk het voorstel uit tot een overtuigende oplossing: helder gepresenteerd, toetsbaar en klaar voor verdere ontwikkeling.",
  },
];

const skills: Skill[] = [
  {
    title: "Marketingstrategie",
    description:
      "Heldere keuzes in doelgroep, proposities, kanalen en merkverhaal.",
  },
  {
    title: "AI-toepassingen",
    description:
      "AI slim inzetten voor content, analyse, workflows en conceptversterking.",
  },
  {
    title: "Doelgroeponderzoek",
    description:
      "Gedrag, behoeften en context begrijpen via interviews, analyse en observatie.",
  },
  {
    title: "Conceptontwikkeling",
    description:
      "Van inzicht naar een sterk idee dat relevant voelt en uitvoerbaar blijft.",
  },
  {
    title: "Positionering",
    description:
      "Scherpe keuzes maken in waarde, onderscheid en geloofwaardige marktpositie.",
  },
  {
    title: "Content & communicatie",
    description:
      "Boodschappen vertalen naar consistente content die richting en resultaat ondersteunt.",
  },
];

const proofPoints = [
  "Geen losse ideeen, maar onderbouwde keuzes",
  "Van inzicht naar concept",
  "Gebouwd op gebruikersbehoeften",
];

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_-36px_rgba(15,23,42,0.45)] sm:p-7">
      <div
        className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-r ${project.accent} opacity-80 blur-2xl transition duration-300 group-hover:opacity-100`}
      />
      <div className="relative">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-slate-500">Project</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
              {project.title}
            </h3>
          </div>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
            Case preview
          </span>
        </div>

        <dl className="space-y-4 text-sm leading-7 text-slate-600">
          <div>
            <dt className="font-semibold text-slate-900">Context</dt>
            <dd>{project.context}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">Vraagstuk</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">Mijn rol</dt>
            <dd>{project.role}</dd>
          </div>
        </dl>

        <p className="mt-6 rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3 text-sm leading-7 text-slate-700">
          {project.impact}
        </p>

        <a
          href={project.href}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white"
        >
          Bekijk case
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}

function ProcessCard({ item }: { item: ProcessStep }) {
  return (
    <article className="relative rounded-[1.75rem] border border-slate-200/70 bg-white p-6 shadow-[0_18px_60px_-42px_rgba(15,23,42,0.4)] transition duration-300 hover:-translate-y-1">
      <div className="mb-6 flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
          {item.step}
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-slate-300 to-transparent" />
      </div>
      <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
    </article>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <article className="rounded-[1.5rem] border border-slate-200/70 bg-white p-5 shadow-[0_18px_50px_-38px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:border-slate-300">
      <h3 className="text-lg font-semibold text-slate-950">{skill.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{skill.description}</p>
    </article>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#f4f6f3] text-slate-950">
      <div className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top_left,_rgba(168,190,176,0.24),_transparent_42%),radial-gradient(circle_at_top_right,_rgba(182,205,255,0.28),_transparent_34%),linear-gradient(180deg,_#fbfcfa_0%,_#f4f6f3_72%)]" />
      <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-white/60 blur-3xl" />

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-8 sm:px-8 lg:px-12 lg:pb-24 lg:pt-10">
        <header className="mb-16 flex flex-col gap-6 rounded-full border border-slate-200/70 bg-white/75 px-5 py-3 shadow-[0_16px_40px_-34px_rgba(15,23,42,0.4)] backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_-18px_rgba(15,23,42,0.45)] ring-1 ring-slate-200/70">
              <Image
                src="/logo-zonder-achtergrond.png"
                alt="Logo van Challenge Cube"
                width={1920}
                height={1080}
                className="h-9 w-auto object-contain"
                priority
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Portfolio
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Commerciele economie, marketingstrategie en AI
              </p>
            </div>
          </div>
          <nav aria-label="Hoofdnavigatie" className="flex flex-wrap gap-2 text-sm text-slate-600">
            <a className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-950" href="#projecten">
              Projecten
            </a>
            <a className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-950" href="#werkwijze">
              Werkwijze
            </a>
            <a className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-950" href="#expertise">
              Expertise
            </a>
            <a className="rounded-full bg-slate-950 px-4 py-2 font-semibold text-white transition hover:bg-slate-800" href="#contact">
              Contact
            </a>
          </nav>
        </header>

        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-sm backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Strategisch portfolio met focus op onderzoek, marketing en AI
            </div>
            <h1 className="mt-8 text-5xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
              Van gebruikersinzicht naar concepten die inhoudelijk kloppen en overtuigen.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Ik ben een student commerciële economie en ondernemer in marketing
              en AI. Ik combineer strategie, onderzoek en technologie tot
              concrete concepten, proposities en oplossingen die zijn gebouwd op
              echt gedrag, echte behoeften en duidelijke keuzes.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projecten"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Bekijk mijn projecten
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-950 hover:bg-slate-50"
              >
                Neem contact op
              </a>
            </div>

            <dl className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-slate-200/70 bg-white/80 p-5 shadow-[0_16px_50px_-42px_rgba(15,23,42,0.45)] backdrop-blur">
                <dt className="text-sm text-slate-500">Focus</dt>
                <dd className="mt-2 text-lg font-semibold text-slate-950">
                  Marketing, AI en waardecreatie
                </dd>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200/70 bg-white/80 p-5 shadow-[0_16px_50px_-42px_rgba(15,23,42,0.45)] backdrop-blur">
                <dt className="text-sm text-slate-500">Werkwijze</dt>
                <dd className="mt-2 text-lg font-semibold text-slate-950">
                  Analyse eerst, uitwerking daarna
                </dd>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200/70 bg-white/80 p-5 shadow-[0_16px_50px_-42px_rgba(15,23,42,0.45)] backdrop-blur">
                <dt className="text-sm text-slate-500">Doel</dt>
                <dd className="mt-2 text-lg font-semibold text-slate-950">
                  Relevante oplossingen met scherp verhaal
                </dd>
              </div>
            </dl>
          </div>

          <aside className="relative">
            <div className="absolute -left-8 top-8 h-32 w-32 rounded-full bg-amber-200/70 blur-3xl" />
            <div className="absolute -right-6 bottom-6 h-36 w-36 rounded-full bg-sky-200/70 blur-3xl" />

            <div className="relative grid gap-4 rounded-[2rem] border border-slate-200/80 bg-white/80 p-4 shadow-[0_28px_90px_-48px_rgba(15,23,42,0.55)] backdrop-blur sm:grid-cols-2">
              <div className="rounded-[1.6rem] bg-slate-950 p-6 text-white sm:col-span-2">
                <p className="text-sm text-slate-300">Strategische preview</p>
                <h2 className="mt-3 text-2xl font-semibold">
                  Onderzoek als basis voor keuzes
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
                  Niet starten vanuit stijl, maar vanuit gedrag, context en
                  waarde. Dat levert sterkere concepten en geloofwaardiger
                  communicatie op.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-white/10 p-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                      Onderzoek
                    </p>
                    <p className="mt-2 text-sm font-medium">
                      Interviews en observaties
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                      Inzicht
                    </p>
                    <p className="mt-2 text-sm font-medium">
                      Motivaties en fricties
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                      Resultaat
                    </p>
                    <p className="mt-2 text-sm font-medium">
                      Concepten met richting
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Voorbeeldinzicht</p>
                <p className="mt-3 text-lg font-semibold text-slate-950">
                  Snackkeuzes draaien vaak om samen een leuke pauze beleven.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Gezelligheid is een trigger, prijs speelt mee en het moment met
                  vrienden weegt zwaarder dan alleen de snack zelf.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#ecfeff_100%)] p-5">
                <p className="text-sm text-slate-500">Strategische vertaling</p>
                <p className="mt-3 text-lg font-semibold text-slate-950">
                  Van productfocus naar sociale waardepropositie.
                </p>
                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <p>• behoefte begrijpen</p>
                  <p>• context meenemen</p>
                  <p>• concept toetsen op relevantie</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="over-mij" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionIntro
            eyebrow="Over mij"
            title="Ik werk op het snijvlak van commerciële economie, marketing en AI."
            description="Mijn kracht zit in het verbinden van analyse en creatie. Ik onderzoek eerst wat mensen beweegt, waar de echte behoefte zit en welke keuze strategisch klopt. Pas daarna vertaal ik dat naar een concept, propositie of communicatie-oplossing."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-[1.75rem] border border-slate-200/70 bg-white p-6 shadow-[0_18px_60px_-42px_rgba(15,23,42,0.35)]">
              <p className="text-sm font-medium text-slate-500">Strategisch denken</p>
              <p className="mt-3 text-base leading-8 text-slate-700">
                Ik kijk verder dan de uitvoering en zoek eerst naar de logica
                achter een keuze: doelgroep, context, probleem en gewenste
                waarde.
              </p>
            </article>
            <article className="rounded-[1.75rem] border border-slate-200/70 bg-white p-6 shadow-[0_18px_60px_-42px_rgba(15,23,42,0.35)]">
              <p className="text-sm font-medium text-slate-500">Onderbouwde aanpak</p>
              <p className="mt-3 text-base leading-8 text-slate-700">
                Interviews, deskresearch en observaties helpen mij om keuzes te
                onderbouwen in plaats van te vertrouwen op aannames.
              </p>
            </article>
            <article className="rounded-[1.75rem] border border-slate-200/70 bg-white p-6 shadow-[0_18px_60px_-42px_rgba(15,23,42,0.35)]">
              <p className="text-sm font-medium text-slate-500">Marketing x AI</p>
              <p className="mt-3 text-base leading-8 text-slate-700">
                Ik gebruik AI niet als gimmick, maar als middel om processen te
                versterken, analyses te versnellen en betere output te maken.
              </p>
            </article>
            <article className="rounded-[1.75rem] border border-slate-200/70 bg-slate-950 p-6 text-white shadow-[0_18px_60px_-42px_rgba(15,23,42,0.55)]">
              <p className="text-sm font-medium text-slate-300">Waar ik op stuur</p>
              <p className="mt-3 text-base leading-8 text-slate-100">
                Heldere positionering, relevante concepten en oplossingen die
                niet alleen mooi ogen, maar echt ergens op gebaseerd zijn.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="projecten" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <SectionIntro
          eyebrow="Uitgelichte projecten"
          title="Projecten waarin onderzoek, doelgroepinzicht en conceptontwikkeling samenkomen."
          description="Elke case laat zien hoe ik een vraagstuk benader: van probleemdefinitie en gedragsanalyse tot een concreet voorstel. De inhoud is realistisch ingevuld, zodat meteen zichtbaar wordt hoe ik strategisch werk."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="werkwijze" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <SectionIntro
          eyebrow="Mijn werkwijze"
          title="Van onderzoek naar uitwerking, met inhoudelijke logica in elke stap."
          description="Mijn proces is opgebouwd om snel tot richting te komen zonder de kwaliteit van denken te verliezen. Zo blijft elk concept onderbouwd, overtuigend en uitvoerbaar."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {processSteps.map((item) => (
            <ProcessCard key={item.step} item={item} />
          ))}
        </div>
      </section>

      <section id="expertise" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro
            eyebrow="Vaardigheden"
            title="Expertise die strategie en uitvoering met elkaar verbindt."
            description="Ik werk graag aan vraagstukken waarin marktdenken, menselijk gedrag en technologische mogelijkheden samenkomen. Dat maakt het mogelijk om niet alleen ideeën te ontwikkelen, maar ook richting te geven."
          />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard key={skill.title} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-[0_30px_80px_-48px_rgba(15,23,42,0.45)]">
          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                Resultaat en bewijs
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Werk dat rust op analyse, interviews, inzichten en toetsing.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Ik wil laten zien dat sterke concepten niet ontstaan uit toeval.
                Ze groeien uit goed luisteren, scherp formuleren en bewust
                kiezen. Daarom staan gebruikersbehoeften, gedragsinzichten en
                waardecreatie centraal in hoe ik werk.
              </p>
            </div>

            <div className="grid gap-4">
              {proofPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-4 text-base font-semibold text-slate-900"
                >
                  {point}
                </div>
              ))}
              <div className="rounded-[1.5rem] bg-slate-950 px-5 py-5 text-sm leading-7 text-slate-300">
                Voor mij is een goed portfolio niet alleen een verzameling
                projecten, maar bewijs van hoe je denkt, onderzoekt en keuzes
                maakt.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 pt-12 sm:px-8 lg:px-12 lg:pb-28">
        <div className="rounded-[2.25rem] bg-slate-950 px-8 py-10 text-white shadow-[0_34px_100px_-52px_rgba(15,23,42,0.75)] sm:px-10 lg:px-12 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Op zoek naar iemand die strategie, marketing en AI inhoudelijk
                samenbrengt?
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                Ik denk graag mee over een project, case of samenwerking. Of het
                nu gaat om onderzoek, positionering, conceptontwikkeling of een
                slimme AI-toepassing: ik help graag om richting en kwaliteit aan
                te brengen.
              </p>
            </div>

            <a
              href="mailto:hello@jouwportfolio.nl"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-200"
            >
              Neem contact op
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
            <a className="rounded-full border border-white/15 px-4 py-2 transition hover:border-white/40 hover:text-white" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="rounded-full border border-white/15 px-4 py-2 transition hover:border-white/40 hover:text-white" href="mailto:hello@jouwportfolio.nl">
              E-mail
            </a>
            <a className="rounded-full border border-white/15 px-4 py-2 transition hover:border-white/40 hover:text-white" href="/cv.pdf">
              CV
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
