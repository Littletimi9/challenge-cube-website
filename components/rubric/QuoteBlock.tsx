type Props = {
  quote: string
  author: string
  source?: string
}

export default function QuoteBlock({ quote, author, source }: Props) {
  return (
    <section
      className="px-6 md:px-10 py-14 md:py-16 my-10"
      style={{ backgroundColor: 'var(--canvas-elevated)' }}
    >
      <div className="relative max-w-[900px]">
        <span
          className="font-serif absolute -top-4 -left-2 select-none"
          style={{
            fontSize: '72px',
            lineHeight: 0.5,
            color: 'var(--accent-mint)',
            opacity: 0.6,
          }}
          aria-hidden="true"
        >
          “
        </span>

        <blockquote
          className="font-serif pl-8 md:pl-10"
          style={{
            fontSize: 'clamp(24px, 3.2vw, 36px)',
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
            color: 'var(--text-primary)',
          }}
        >
          {quote}
        </blockquote>

        <figcaption
          className="mt-6 pl-8 md:pl-10 text-[12px] uppercase"
          style={{
            letterSpacing: '0.15em',
            color: 'var(--text-muted)',
          }}
        >
          {author}
          {source && <span style={{ color: 'var(--text-dim)' }}> · {source}</span>}
        </figcaption>
      </div>
    </section>
  )
}
