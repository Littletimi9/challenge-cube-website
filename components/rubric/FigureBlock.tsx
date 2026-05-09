import Image from 'next/image'

type Props = {
  src: string
  alt: string
  width: number
  height: number
  caption: string
  insight: string
  sourceHref?: string
  sourceLabel?: string
  fit?: 'cover' | 'contain'
}

export default function FigureBlock({
  src,
  alt,
  width,
  height,
  caption,
  insight,
  sourceHref,
  sourceLabel = 'Bron bekijken',
  fit = 'cover',
}: Props) {
  return (
    <figure
      className="overflow-hidden"
      style={{
        backgroundColor: 'var(--surface)',
        border: '0.5px solid var(--border)',
        borderRadius: '3px',
      }}
    >
      <div
        className="relative"
        style={{
          backgroundColor: 'var(--canvas-elevated)',
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="h-auto w-full"
          style={{
            aspectRatio: `${width} / ${height}`,
            objectFit: fit,
          }}
        />
      </div>

      <figcaption className="flex flex-col gap-4 p-5 md:p-6">
        <p
          className="text-[13px]"
          style={{ lineHeight: 1.6, color: 'var(--text-muted)' }}
        >
          {caption}
        </p>
        <div
          className="pt-4"
          style={{ borderTop: '0.5px solid var(--border)' }}
        >
          <span
            className="mb-2 block text-[10px] uppercase"
            style={{ letterSpacing: '0.2em', color: 'var(--accent-mint)' }}
          >
            Betekenis voor ontwerp
          </span>
          <p
            className="text-[14px]"
            style={{ lineHeight: 1.6, color: 'var(--text-secondary)' }}
          >
            {insight}
          </p>
        </div>
        {sourceHref && (
          <a
            href={sourceHref}
            className="inline-flex self-start text-[12px] uppercase hover:opacity-80"
            style={{
              letterSpacing: '0.15em',
              color: 'var(--accent-mint)',
              textDecoration: 'none',
            }}
          >
            {sourceLabel}
          </a>
        )}
      </figcaption>
    </figure>
  )
}
