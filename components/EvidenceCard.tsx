import Image from 'next/image'
import RubricBadge from './RubricBadge'
import SourceLink from './SourceLink'
import type { EvidenceCardProps } from '@/lib/types'

const SECTIONS = [
  { key: 'action', label: 'Wat ik deed' },
  { key: 'finding', label: 'Wat ik vond' },
  { key: 'meaning', label: 'Betekenis' },
] as const

export default function EvidenceCard({
  title,
  summary,
  action,
  finding,
  meaning,
  sourceId,
  image,
  rubric,
}: EvidenceCardProps) {
  const values = { action, finding, meaning }

  return (
    <article className="bg-[--surface] border border-[--border] rounded-xl p-6 my-6 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-serif text-xl text-[--text-primary] leading-snug">{title}</h3>
          <p className="text-[--text-secondary] text-sm mt-1">{summary}</p>
        </div>
        {rubric && <RubricBadge criterium={rubric} />}
      </div>

      {image && (
        <div className="relative w-full h-48 rounded-lg overflow-hidden">
          <Image src={image.src} alt={image.alt} fill className="object-cover" />
        </div>
      )}

      <dl className="grid gap-3 text-sm">
        {SECTIONS.map(({ key, label }) => (
          <div key={key}>
            <dt className="text-[--text-secondary] font-medium mb-0.5">{label}</dt>
            <dd className="text-[--text-primary]">{values[key]}</dd>
          </div>
        ))}
      </dl>

      {sourceId && (
        <div className="pt-2 border-t border-[--border]">
          <SourceLink id={sourceId} />
        </div>
      )}
    </article>
  )
}
