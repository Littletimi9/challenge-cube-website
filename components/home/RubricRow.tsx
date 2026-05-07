import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export type RubricRowData = {
  number: string
  name: string
  slug: string
  description: string
  ambition: string
  evidenceCount: string
}

const rubricColors: Record<string, string> = {
  '01': 'var(--cat-speed)',
  '02': 'var(--cat-1v1)',
  '03': 'var(--cat-group)',
  '04': 'var(--cat-tiktok)',
  '05': 'var(--cat-quiz)',
}

export default function RubricRow({ item }: { item: RubricRowData }) {
  const color = rubricColors[item.number] ?? 'var(--accent-mint)'

  return (
    <Link
      href={`/${item.slug}`}
      className="group block transition-[padding,background] duration-300 py-8 hover:pl-2"
      style={{
        borderBottom: '0.5px solid var(--border)',
      }}
    >
      <div
        className="grid gap-6 md:gap-8 items-baseline"
        style={{
          gridTemplateColumns:
            'minmax(0,80px) minmax(0,220px) minmax(0,1fr) minmax(0,180px) 40px',
        }}
      >
        <span
          className="font-serif hidden md:block"
          style={{
            fontSize: '56px',
            lineHeight: 1,
            color,
          }}
        >
          {item.number}
        </span>

        <div className="md:hidden col-span-5 flex items-baseline gap-3">
          <span
            className="font-serif"
            style={{ fontSize: '32px', color, lineHeight: 1 }}
          >
            {item.number}
          </span>
          <h3
            className="font-serif"
            style={{ fontSize: '22px', color: 'var(--text-primary)' }}
          >
            {item.name}
          </h3>
        </div>

        <h3
          className="font-serif hidden md:block"
          style={{
            fontSize: '28px',
            lineHeight: 1.15,
            color: 'var(--text-primary)',
          }}
        >
          {item.name}
        </h3>

        <p
          className="text-[14px] col-span-5 md:col-auto"
          style={{
            lineHeight: 1.55,
            color: 'var(--text-secondary)',
          }}
        >
          {item.description}
        </p>

        <div className="col-span-5 md:col-auto md:text-right flex md:flex-col gap-3 md:gap-2">
          <span
            className="inline-flex items-center px-2 py-0.5 text-[10px] uppercase"
            style={{
              letterSpacing: '0.12em',
              color: 'var(--accent-amber)',
              backgroundColor: 'var(--accent-amber-soft)',
              border: '1px solid rgba(232,184,79,0.25)',
              borderRadius: '3px',
            }}
          >
            {item.ambition}
          </span>
          <span
            className="text-[11px] uppercase"
            style={{
              letterSpacing: '0.15em',
              color: 'var(--text-muted)',
            }}
          >
            {item.evidenceCount}
          </span>
        </div>

        <span
          className="hidden md:flex items-center justify-end transition-transform duration-300 group-hover:translate-x-1.5"
          style={{ color: 'var(--text-muted)' }}
          aria-hidden="true"
        >
          <ArrowRight
            size={20}
            strokeWidth={1.5}
            className="rubric-row-arrow"
          />
        </span>
      </div>
    </Link>
  )
}
