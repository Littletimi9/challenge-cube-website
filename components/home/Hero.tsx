import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import HeroCollage from './HeroCollage'

type HeroProps = {
  eyebrow: string
  title: React.ReactNode
  lead: string
  primary: { label: string; href: string }
  secondary: { label: string; href: string }
}

export default function Hero({ eyebrow, title, lead, primary, secondary }: HeroProps) {
  return (
    <section className="px-6 md:px-10 py-14 md:py-18">
      <div
        className="grid gap-10 md:gap-12 items-center"
        style={{ gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)' }}
      >
        <div className="col-span-2 md:col-auto">
          <p
            className="text-[11px] uppercase mb-8"
            style={{
              letterSpacing: '0.2em',
              color: 'var(--text-muted)',
            }}
          >
            {eyebrow}
          </p>

          <h1
            className="font-serif mb-8"
            style={{
              fontSize: 'clamp(56px, 8vw, 96px)',
              lineHeight: 0.98,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
            }}
          >
            {title}
          </h1>

          <p
            className="text-[17px] md:text-[19px] max-w-[520px] mb-10"
            style={{
              lineHeight: 1.55,
              color: 'var(--text-secondary)',
            }}
          >
            {lead}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href={primary.href}
              className="inline-flex items-center gap-2 px-5 py-3 text-[13px] tracking-[0.02em] rounded transition-colors"
              style={{
                backgroundColor: 'var(--text-primary)',
                color: 'var(--canvas)',
              }}
            >
              {primary.label}
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
            <Link
              href={secondary.href}
              className="inline-flex items-center gap-2 px-5 py-3 text-[13px] tracking-[0.02em] rounded transition-colors hover:text-[var(--text-primary)]"
              style={{
                border: '1px solid var(--border-strong)',
                color: 'var(--text-secondary)',
              }}
            >
              {secondary.label}
            </Link>
          </div>
        </div>

        <div className="col-span-2 md:col-auto">
          <HeroCollage />
        </div>
      </div>
    </section>
  )
}
