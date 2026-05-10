type Props = {
  label: string
  title: string
  evidence: string
  meaning: string
  href?: string
  sourceLabel?: string
  sources?: { href: string; label: string }[]
}

export default function ChapterProof({
  label,
  title,
  evidence,
  meaning,
  href,
  sourceLabel = 'Bewijs bekijken',
  sources,
}: Props) {
  const sourceLinks = sources ?? (href ? [{ href, label: sourceLabel }] : [])

  return (
    <article
      className="flex flex-col gap-5 p-6 md:p-7"
      style={{
        backgroundColor: 'var(--surface)',
        border: '0.5px solid var(--border)',
        borderRadius: '3px',
      }}
    >
      <span
        className="text-[10px] uppercase"
        style={{ letterSpacing: '0.2em', color: 'var(--accent-mint)' }}
      >
        {label}
      </span>
      <h3
        className="font-serif"
        style={{
          fontSize: 'clamp(22px, 2.2vw, 28px)',
          lineHeight: 1.15,
          color: 'var(--text-primary)',
        }}
      >
        {title}
      </h3>
      <div className="grid gap-4">
        <TextBlock label="Bewijs" text={evidence} />
        <TextBlock label="Ontwerpbeslissing" text={meaning} />
      </div>
      {sourceLinks.length > 0 && (
        <div
          className="pt-4 flex flex-wrap gap-x-4 gap-y-2"
          style={{ borderTop: '0.5px solid var(--border)' }}
        >
          {sourceLinks.map((source) => (
            <a
              key={`${label}-${source.href}`}
              href={source.href}
              className="inline-flex text-[12px] uppercase hover:opacity-80"
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
    </article>
  )
}

function TextBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span
        className="text-[10px] uppercase"
        style={{ letterSpacing: '0.2em', color: 'var(--text-dim)' }}
      >
        {label}
      </span>
      <p
        className="text-[14px]"
        style={{ lineHeight: 1.6, color: 'var(--text-secondary)' }}
      >
        {text}
      </p>
    </div>
  )
}
