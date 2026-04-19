import Link from 'next/link'

interface EvidenceItem {
  label: string
}

interface CriterionCard {
  number: 1 | 2 | 3 | 4 | 5
  name: string
  href: string
  ambition: string
  evidence: [EvidenceItem, EvidenceItem, EvidenceItem]
}

const CRITERIA: CriterionCard[] = [
  {
    number: 1,
    name: 'Nieuwsgierigheid',
    href: '/nieuwsgierigheid',
    ambition: '[INVULLEN: ambitiescore]',
    evidence: [
      { label: '[INVULLEN: bewijsstuk 1]' },
      { label: '[INVULLEN: bewijsstuk 2]' },
      { label: '[INVULLEN: bewijsstuk 3]' },
    ],
  },
  {
    number: 2,
    name: 'Onderzoek',
    href: '/onderzoek',
    ambition: '[INVULLEN: ambitiescore]',
    evidence: [
      { label: '[INVULLEN: bewijsstuk 1]' },
      { label: '[INVULLEN: bewijsstuk 2]' },
      { label: '[INVULLEN: bewijsstuk 3]' },
    ],
  },
  {
    number: 3,
    name: 'Concept',
    href: '/concept',
    ambition: '[INVULLEN: ambitiescore]',
    evidence: [
      { label: '[INVULLEN: bewijsstuk 1]' },
      { label: '[INVULLEN: bewijsstuk 2]' },
      { label: '[INVULLEN: bewijsstuk 3]' },
    ],
  },
  {
    number: 4,
    name: 'Methoden',
    href: '/methoden',
    ambition: '[INVULLEN: ambitiescore]',
    evidence: [
      { label: '[INVULLEN: bewijsstuk 1]' },
      { label: '[INVULLEN: bewijsstuk 2]' },
      { label: '[INVULLEN: bewijsstuk 3]' },
    ],
  },
  {
    number: 5,
    name: 'Validatie',
    href: '/validatie',
    ambition: '[INVULLEN: ambitiescore]',
    evidence: [
      { label: '[INVULLEN: bewijsstuk 1]' },
      { label: '[INVULLEN: bewijsstuk 2]' },
      { label: '[INVULLEN: bewijsstuk 3]' },
    ],
  },
]

export default function EvidenceIndex() {
  return (
    <section id="bewijslast" aria-labelledby="evidence-heading" className="py-12 border-t border-[--border]">
      <h2
        id="evidence-heading"
        className="font-serif text-2xl sm:text-3xl text-[--text-primary] mb-2"
      >
        Bewijslast per criterium
      </h2>
      <p className="text-[--text-secondary] text-sm mb-8">
        Vijf rubric-criteria — klik op een criterium om het volledige bewijs te lezen.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {CRITERIA.map((c) => (
          <Link
            key={c.number}
            href={c.href}
            className="group block bg-[--surface] border border-[--border] rounded-xl p-5 hover:border-[--accent] transition-colors focus-visible:ring-2 ring-[--accent] ring-offset-2"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-[--accent-light] text-[--accent] text-xs font-bold flex items-center justify-center flex-shrink-0">
                {c.number}
              </span>
              <span className="text-sm font-medium text-[--text-primary] group-hover:text-[--accent] transition-colors leading-snug">
                {c.name}
              </span>
            </div>

            <p className="text-xs text-[--text-secondary] mb-4">
              <span className="font-medium">Ambitie:</span> {c.ambition}
            </p>

            <ul className="space-y-2" aria-label={`Bewijsstukken ${c.name}`}>
              {c.evidence.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-[--text-secondary]">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-[--border] flex-shrink-0" aria-hidden="true" />
                  {item.label}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </section>
  )
}
