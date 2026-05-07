type Meta = { key: string; value: string }

type Props = {
  number: string
  label: string
  title: string
  lead: string
  meta?: Meta[]
}

const rubricColors: Record<string, string> = {
  '01': 'var(--cat-speed)',
  '02': 'var(--cat-1v1)',
  '03': 'var(--cat-group)',
  '04': 'var(--cat-tiktok)',
  '05': 'var(--cat-quiz)',
}

export default function PageHead({ number, label, title, lead, meta = [] }: Props) {
  const color = rubricColors[number] ?? 'var(--accent-mint)'

  return (
    <header
      className="px-6 md:px-10 py-16 md:py-20"
      style={{ borderBottom: '0.5px solid var(--border)' }}
    >
      <div
        className="grid gap-10 md:gap-12"
        style={{ gridTemplateColumns: 'minmax(0, 0.6fr) minmax(0, 1.4fr)' }}
      >
        <div className="col-span-2 md:col-auto">
          <span
            className="font-serif block leading-none"
            style={{
              fontSize: 'clamp(72px, 12vw, 120px)',
              color,
              letterSpacing: '-0.02em',
            }}
          >
            {number}
          </span>
          <p
            className="mt-4 text-[11px] uppercase"
            style={{
              letterSpacing: '0.2em',
              color: 'var(--text-muted)',
            }}
          >
            {label}
          </p>
        </div>

        <div className="col-span-2 md:col-auto">
          <h1
            className="font-serif mb-6"
            style={{
              fontSize: 'clamp(40px, 6vw, 64px)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}
          >
            {title}
          </h1>
          <p
            className="text-[17px] md:text-[18px] max-w-[640px]"
            style={{
              lineHeight: 1.55,
              color: 'var(--text-secondary)',
            }}
          >
            {lead}
          </p>

          {meta.length > 0 && (
            <dl
              className="mt-10 pt-6 grid grid-cols-2 md:grid-cols-3 gap-6"
              style={{ borderTop: '0.5px solid var(--border)' }}
            >
              {meta.map((m) => (
                <div key={m.key} className="flex flex-col gap-1.5">
                  <dt
                    className="text-[10px] uppercase"
                    style={{
                      letterSpacing: '0.2em',
                      color: 'var(--text-dim)',
                    }}
                  >
                    {m.key}
                  </dt>
                  <dd
                    className="text-[14px]"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </header>
  )
}
