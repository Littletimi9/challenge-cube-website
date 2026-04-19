import { Lightbulb } from 'lucide-react'
import type { ReflectionCalloutProps } from '@/lib/types'

const TYPE_CONFIG = {
  general: { label: 'Reflectie', colorClass: 'text-[--reflection-border]' },
  positive: { label: 'Wat ging goed', colorClass: 'text-[--success]' },
  improvement: { label: 'Wat kan beter', colorClass: 'text-[--improvement]' },
}

export default function ReflectionCallout({
  type = 'general',
  title,
  children,
}: ReflectionCalloutProps) {
  const config = TYPE_CONFIG[type]
  return (
    <aside className="border-l-4 border-[--reflection-border] bg-[--reflection-bg] px-5 py-4 my-6 rounded-r-lg">
      <div className={`flex items-center gap-2 mb-2 font-medium text-sm ${config.colorClass}`}>
        <Lightbulb size={16} aria-hidden="true" />
        <span>{title ?? config.label}</span>
      </div>
      <div className="text-[--text-primary] text-sm leading-relaxed">{children}</div>
    </aside>
  )
}
