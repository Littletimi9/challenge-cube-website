import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import PageHead from '@/components/rubric/PageHead'
import SectionHeading from '@/components/rubric/SectionHeading'
import { sources, typeLabels, type Source, type SourceType } from '@/content/bronnen'

export const metadata = {
  title: 'Bronnen — Challenge Cube',
}

const order: SourceType[] = ['interview', 'observatie', 'boek', 'website']

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

const interviews: InterviewCard[] = [
  {
    href: '/bronnen/Interview-1',
    title: 'Interview 1 — Isa, 6 VWO',
    description: 'Kwalitatief interview over snackgedrag op school: sociale context, prijsgevoeligheid en zelfperceptie rondom ongezonde keuzes tijdens pauzes.',
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
]

export default function BronnenPage() {
  const grouped = order
    .map((type) => ({ type, items: sources.filter((s) => s.type === type) }))
    .filter((g) => g.items.length > 0)

  return (
    <>
      <PageHead
        number="07"
        label="Portfolio · Bronnen"
        title="Alle bronnen, in één overzicht."
        lead="Gegroepeerd per type. Elke bron heeft een eigen anker dat vanuit de rubric-pagina's linkt."
        meta={[
          { key: 'Totaal', value: `${sources.length} bronnen` },
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

      {grouped.map(({ type, items }) => (
        <section key={type} className="px-6 md:px-10 py-16 md:py-20">
          <SectionHeading eyebrow={`${items.length} · ${typeLabels[type]}`} heading={typeLabels[type]} />
          <ul className="flex flex-col" style={{ borderTop: '0.5px solid var(--border)' }}>
            {items.map((s) => (
              <SourceItem key={s.id} source={s} />
            ))}
          </ul>
        </section>
      ))}
    </>
  )
}

function SourceItem({ source }: { source: Source }) {
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
            #{source.id}
          </span>
          <h3
            className="font-serif"
            style={{
              fontSize: '22px',
              lineHeight: 1.2,
              color: 'var(--text-primary)',
            }}
          >
            {source.title}
          </h3>
          <p className="text-[13px]" style={{ color: 'var(--text-muted)' }}>
            {source.authors} · {source.year}
          </p>
          <p
            className="text-[13px] max-w-[820px] mt-2"
            style={{ lineHeight: 1.6, color: 'var(--text-secondary)' }}
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
