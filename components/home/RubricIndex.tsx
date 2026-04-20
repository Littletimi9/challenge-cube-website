import RubricRow, { type RubricRowData } from './RubricRow'

type Props = {
  eyebrow: string
  heading: string
  items: RubricRowData[]
}

export default function RubricIndex({ eyebrow, heading, items }: Props) {
  return (
    <section className="px-6 md:px-10 py-20">
      <div className="mb-12 md:mb-16">
        <p
          className="flex items-center gap-3 text-[11px] uppercase mb-6"
          style={{
            letterSpacing: '0.2em',
            color: 'var(--text-muted)',
          }}
        >
          <span
            className="inline-block h-px w-10"
            style={{ backgroundColor: 'var(--accent-mint)' }}
            aria-hidden="true"
          />
          {eyebrow}
        </p>
        <h2
          className="font-serif max-w-[780px]"
          style={{
            fontSize: 'clamp(32px, 5vw, 40px)',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            color: 'var(--text-primary)',
          }}
        >
          {heading}
        </h2>
      </div>

      <div
        style={{
          borderTop: '0.5px solid var(--border)',
        }}
      >
        {items.map((item) => (
          <RubricRow key={item.slug} item={item} />
        ))}
      </div>
    </section>
  )
}
