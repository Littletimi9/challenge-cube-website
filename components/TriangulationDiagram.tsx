'use client'

import type { TriangulationDiagramProps } from '@/lib/types'

export default function TriangulationDiagram({
  methods,
  convergentInsight,
}: TriangulationDiagramProps) {
  return (
    <section className="my-8" aria-label="Triangulatie-diagram">
      <div className="grid sm:grid-cols-3 gap-4 mb-4">
        {methods.map((m) => (
          <div
            key={m.name}
            className={`bg-[--surface] rounded-xl p-4 ${
              m.type === 'primair'
                ? 'border-2 border-[--accent]'
                : 'border border-dashed border-[--border]'
            }`}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <span className="font-medium text-[--text-primary] text-sm">{m.name}</span>
              <span
                className={`shrink-0 text-xs px-2 py-0.5 rounded-full ${
                  m.type === 'primair'
                    ? 'bg-[--accent-light] text-[--accent]'
                    : 'bg-[--canvas] text-[--text-secondary] border border-[--border]'
                }`}
              >
                {m.type}
              </span>
            </div>
            <p className="text-sm text-[--text-secondary]">{m.finding}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 mb-4 px-4 justify-center" aria-hidden="true">
        {methods.map((_, i) => (
          <span key={i} className="flex-1 h-px bg-[--accent] opacity-40" />
        ))}
      </div>

      <div className="bg-[--accent-light] border-2 border-[--accent] rounded-xl p-5 text-center">
        <p className="text-xs font-semibold text-[--accent] uppercase tracking-wide mb-2">
          Convergent inzicht
        </p>
        <p className="text-[--text-primary] font-medium text-sm leading-relaxed">
          {convergentInsight}
        </p>
      </div>
    </section>
  )
}
