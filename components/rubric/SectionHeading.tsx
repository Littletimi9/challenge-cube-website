type Props = { eyebrow: string; heading: string }

export default function SectionHeading({ eyebrow, heading }: Props) {
  return (
    <header className="mb-10 md:mb-14">
      <p
        className="flex items-center gap-3 text-[11px] uppercase mb-5"
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
        className="font-serif max-w-[820px]"
        style={{
          fontSize: 'clamp(30px, 4.4vw, 40px)',
          lineHeight: 1.1,
          letterSpacing: '-0.01em',
          color: 'var(--text-primary)',
        }}
      >
        {heading}
      </h2>
    </header>
  )
}
