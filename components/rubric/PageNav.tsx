import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

type Link = { number: string; name: string; href: string }

type Props = { prev?: Link; next?: Link }

export default function PageNav({ prev, next }: Props) {
  return (
    <nav
      className="flex flex-col md:flex-row justify-between gap-8 px-6 md:px-10 py-14"
      style={{ borderTop: '0.5px solid var(--border)' }}
      aria-label="Pagina-navigatie"
    >
      <div className="flex-1">
        {prev && <NavLink dir="prev" item={prev} />}
      </div>
      <div className="flex-1 md:text-right">
        {next && <NavLink dir="next" item={next} />}
      </div>
    </nav>
  )
}

function NavLink({ dir, item }: { dir: 'prev' | 'next'; item: Link }) {
  const isPrev = dir === 'prev'
  return (
    <Link
      href={item.href}
      className="group inline-flex flex-col gap-2 transition-transform hover:-translate-y-0.5"
    >
      <span
        className={`inline-flex items-center gap-2 text-[11px] uppercase ${isPrev ? '' : 'md:justify-end'}`}
        style={{
          letterSpacing: '0.2em',
          color: 'var(--text-muted)',
        }}
      >
        {isPrev && <ArrowLeft size={12} strokeWidth={1.5} />}
        {isPrev ? 'Vorige' : 'Volgende'}
        {!isPrev && <ArrowRight size={12} strokeWidth={1.5} />}
      </span>
      <span
        className="font-serif inline-flex items-baseline gap-3"
        style={{
          fontSize: '28px',
          lineHeight: 1.1,
          color: 'var(--text-primary)',
        }}
      >
        <span style={{ color: 'var(--accent-mint)' }}>{item.number}</span>
        {item.name}
      </span>
    </Link>
  )
}
