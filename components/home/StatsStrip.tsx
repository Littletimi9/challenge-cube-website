type Stat = { value: string; label: string }

export default function StatsStrip({ stats }: { stats: Stat[] }) {
  return (
    <section
      className="px-6 md:px-10 py-7 grid grid-cols-2 md:grid-cols-4 gap-6"
      style={{
        borderTop: '0.5px solid var(--border)',
        borderBottom: '0.5px solid var(--border)',
      }}
      aria-label="Kerncijfers"
    >
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col gap-2">
          <span
            className="font-serif"
            style={{
              fontSize: 'clamp(28px, 4vw, 36px)',
              lineHeight: 1,
              color: 'var(--accent-mint)',
            }}
          >
            {s.value}
          </span>
          <span
            className="text-[11px] uppercase"
            style={{
              letterSpacing: '0.2em',
              color: 'var(--text-muted)',
            }}
          >
            {s.label}
          </span>
        </div>
      ))}
    </section>
  )
}
