import type { RubricBadgeProps } from '@/lib/types'

const LABELS: Record<1 | 2 | 3 | 4 | 5, string> = {
  1: 'Nieuwsgierigheid',
  2: 'Onderzoek',
  3: 'Concept',
  4: 'Methoden',
  5: 'Validatie',
}

export default function RubricBadge({ criterium, label }: RubricBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[--accent-light] text-[--accent]">
      <span className="font-bold">{criterium}</span>
      {label ?? LABELS[criterium]}
    </span>
  )
}
