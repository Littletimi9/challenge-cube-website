import Categories from './Categories'

type Props = {
  eyebrow: string
  heading: React.ReactNode
}

export default function Pitch({ eyebrow, heading }: Props) {
  return (
    <section
      className="px-6 md:px-10 py-20"
      style={{ backgroundColor: 'var(--canvas-elevated)' }}
    >
      <div
        className="grid gap-10 md:gap-16"
        style={{ gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.5fr)' }}
      >
        <div className="col-span-2 md:col-auto">
          <p
            className="flex items-center gap-3 text-[11px] uppercase"
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
        </div>

        <div className="col-span-2 md:col-auto flex flex-col gap-10">
          <p
            className="font-serif max-w-[720px]"
            style={{
              fontSize: 'clamp(24px, 3.2vw, 36px)',
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
              color: 'var(--text-primary)',
            }}
          >
            {heading}
          </p>
          <Categories />
        </div>
      </div>
    </section>
  )
}
