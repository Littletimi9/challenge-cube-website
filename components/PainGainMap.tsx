import type { PainGainMapProps } from '@/lib/types'

const SEVERITY_OPACITY: Record<string, string> = {
  low: 'opacity-50',
  medium: 'opacity-75',
  high: 'opacity-100',
}

export default function PainGainMap({ pains, gains, jobs }: PainGainMapProps) {
  return (
    <section className="my-8 grid gap-4 sm:grid-cols-3" aria-label="Pain Gain Map">
      <div className="bg-[--surface] border border-[--border] rounded-xl p-5">
        <h3 className="text-xs font-semibold text-[--accent] mb-3 uppercase tracking-wide">Pains</h3>
        <ul className="flex flex-wrap gap-2" role="list">
          {pains.map((p) => (
            <li
              key={p.label}
              className={`text-xs px-3 py-1 rounded-full bg-[--accent-light] text-[--accent] ${SEVERITY_OPACITY[p.severity]}`}
            >
              {p.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[--surface] border border-[--border] rounded-xl p-5">
        <h3 className="text-xs font-semibold text-[--text-secondary] mb-3 uppercase tracking-wide">
          Jobs to be done
        </h3>
        <ul className="flex flex-wrap gap-2" role="list">
          {jobs.map((j) => (
            <li
              key={j.label}
              className="text-xs px-3 py-1 rounded-full bg-[--canvas] border border-[--border] text-[--text-primary]"
            >
              {j.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[--surface] border border-[--border] rounded-xl p-5">
        <h3 className="text-xs font-semibold text-[--success] mb-3 uppercase tracking-wide">Gains</h3>
        <ul className="flex flex-wrap gap-2" role="list">
          {gains.map((g) => (
            <li
              key={g.label}
              className={`text-xs px-3 py-1 rounded-full bg-[--success-light] text-[--success] ${SEVERITY_OPACITY[g.importance]}`}
            >
              {g.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
