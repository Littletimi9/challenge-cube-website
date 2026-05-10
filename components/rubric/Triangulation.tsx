type Method = {
  type: string
  name: string
  count: string
  finding: string
  sources?: { href: string; label: string }[]
}

type Props = {
  methods: Method[]
  convergence: string
}

export default function Triangulation({ methods, convergence }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
        style={{
          gap: '0.5px',
          backgroundColor: 'var(--border)',
          border: '0.5px solid var(--border)',
        }}
      >
        {methods.map((m) => (
          <div
            key={m.name}
            className="p-6 md:p-8 flex flex-col gap-3"
            style={{ backgroundColor: 'var(--canvas)' }}
          >
            <span
              className="text-[10px] uppercase"
              style={{
                letterSpacing: '0.2em',
                color: 'var(--accent-mint)',
              }}
            >
              {m.type}
            </span>
            <h3
              className="font-serif"
              style={{
                fontSize: '24px',
                lineHeight: 1.2,
                color: 'var(--text-primary)',
              }}
            >
              {m.name}
            </h3>
            <span
              className="text-[12px]"
              style={{ color: 'var(--text-muted)' }}
            >
              {m.count}
            </span>
            <p
              className="text-[13px] mt-1"
              style={{
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
              }}
            >
              {m.finding}
            </p>
            {m.sources && m.sources.length > 0 && (
              <div
                className="flex flex-wrap gap-x-4 gap-y-2 pt-3 mt-auto"
                style={{ borderTop: '0.5px solid var(--border)' }}
              >
                {m.sources.map((source) => (
                  <a
                    key={`${m.name}-${source.href}`}
                    href={source.href}
                    className="text-[11px] uppercase hover:opacity-80 transition-opacity"
                    style={{
                      letterSpacing: '0.15em',
                      color: 'var(--accent-mint)',
                      textDecoration: 'none',
                    }}
                  >
                    {source.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div
        className="p-6 md:p-8 flex flex-col gap-3"
        style={{
          backgroundColor: 'rgba(94,227,211,0.06)',
          border: '1px solid var(--accent-mint-border)',
          borderRadius: '3px',
        }}
      >
        <span
          className="text-[10px] uppercase"
          style={{
            letterSpacing: '0.2em',
            color: 'var(--accent-mint)',
          }}
        >
          Convergentie
        </span>
        <p
          className="font-serif max-w-[820px]"
          style={{
            fontSize: '22px',
            lineHeight: 1.3,
            color: 'var(--text-primary)',
          }}
        >
          {convergence}
        </p>
      </div>
    </div>
  )
}
