export type Perspective = {
  label: string
  value: string
  evidence: string
}

type Props = { perspectives: Perspective[] }

export default function ValuePerspectives({ perspectives }: Props) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      style={{
        gap: '0.5px',
        backgroundColor: 'var(--border)',
        border: '0.5px solid var(--border)',
      }}
    >
      {perspectives.map((p) => (
        <article
          key={p.label}
          className="p-6 flex flex-col gap-3"
          style={{ backgroundColor: 'var(--canvas)' }}
        >
          <span
            className="text-[10px] uppercase"
            style={{
              letterSpacing: '0.2em',
              color: 'var(--accent-mint)',
            }}
          >
            {p.label}
          </span>
          <h3
            className="font-serif"
            style={{
              fontSize: '22px',
              lineHeight: 1.2,
              color: 'var(--text-primary)',
            }}
          >
            {p.value}
          </h3>
          <p
            className="text-[13px]"
            style={{ lineHeight: 1.6, color: 'var(--text-secondary)' }}
          >
            {p.evidence}
          </p>
        </article>
      ))}
    </div>
  )
}
