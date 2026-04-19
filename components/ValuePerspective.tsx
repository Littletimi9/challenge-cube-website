import * as LucideIcons from 'lucide-react'
import type { ValuePerspectiveProps } from '@/lib/types'

type IconComponent = React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>

const PERSPECTIVE_LABELS: Record<string, string> = {
  gebruiker: 'Gebruiker',
  maatschappij: 'Maatschappij',
  opdrachtgever: 'Opdrachtgever',
  duurzaamheid: 'Duurzaamheid',
  technologie: 'Technologie',
}

const DEFAULT_ICONS: Record<string, string> = {
  gebruiker: 'User',
  maatschappij: 'Globe',
  opdrachtgever: 'Briefcase',
  duurzaamheid: 'Leaf',
  technologie: 'Cpu',
}

export default function ValuePerspective({
  perspective,
  icon,
  insight,
  evidence,
}: ValuePerspectiveProps) {
  const iconName = icon ?? DEFAULT_ICONS[perspective]
  const Icon = iconName
    ? ((LucideIcons as unknown as Record<string, IconComponent>)[iconName] ?? null)
    : null

  return (
    <article className="bg-[--surface] border border-[--border] rounded-xl p-5 flex flex-col gap-3">
      <div className="flex items-center gap-2">
        {Icon && <Icon size={16} className="text-[--accent] shrink-0" aria-hidden="true" />}
        <span className="text-xs font-semibold text-[--accent] uppercase tracking-wide">
          {PERSPECTIVE_LABELS[perspective]}
        </span>
      </div>
      <p className="text-[--text-primary] font-medium text-sm leading-snug">{insight}</p>
      <p className="text-[--text-secondary] text-sm">{evidence}</p>
    </article>
  )
}
