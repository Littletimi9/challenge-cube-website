import * as LucideIcons from 'lucide-react'
import SourceLink from './SourceLink'
import type { MethodCardProps } from '@/lib/types'

type IconComponent = React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>

const BODY_SECTIONS = [
  { key: 'description', label: 'Wat' },
  { key: 'rationale', label: 'Waarom' },
  { key: 'application', label: 'Toepassing' },
] as const

export default function MethodCard({
  name,
  icon,
  description,
  rationale,
  application,
  reliability,
  sourceId,
}: MethodCardProps) {
  const Icon = icon
    ? ((LucideIcons as unknown as Record<string, IconComponent>)[icon] ?? null)
    : null

  const values = { description, rationale, application }

  return (
    <article className="bg-[--surface] border border-[--border] rounded-xl overflow-hidden my-6">
      <header className="flex items-center gap-3 px-6 py-4 border-b border-[--border]">
        {Icon && <Icon size={20} className="text-[--accent] shrink-0" aria-hidden="true" />}
        <h3 className="font-serif text-xl text-[--text-primary]">{name}</h3>
      </header>

      <dl className="p-6 grid gap-4 text-sm">
        {BODY_SECTIONS.map(({ key, label }) => (
          <div key={key}>
            <dt className="text-[--text-secondary] font-medium mb-1">{label}</dt>
            <dd className="text-[--text-primary]">{values[key]}</dd>
          </div>
        ))}

        <div className="bg-[--reflection-bg] border border-[--reflection-border] rounded-lg p-3">
          <dt className="text-[--reflection-border] font-medium mb-1 text-xs uppercase tracking-wide">
            Betrouwbaarheid
          </dt>
          <dd className="text-[--text-primary]">{reliability}</dd>
        </div>

        {sourceId && <SourceLink id={sourceId} />}
      </dl>
    </article>
  )
}
