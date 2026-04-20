'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Portfolio' },
  { href: '/nieuwsgierigheid', label: 'Nieuwsgierigheid' },
  { href: '/onderzoek', label: 'Onderzoek' },
  { href: '/concept', label: 'Concept' },
  { href: '/methoden', label: 'Methoden' },
  { href: '/validatie', label: 'Validatie' },
  { href: '/reflectie', label: 'Reflectie' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: 'rgba(22,22,19,0.88)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottomColor: 'var(--border)',
        borderBottomWidth: '0.5px',
      }}
    >
      <div className="flex items-center justify-between px-6 md:px-10 h-16">
        <Link
          href="/"
          className="font-serif text-[20px] text-[var(--text-primary)] leading-none tracking-tight"
        >
          Challenge Cube
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Hoofdnavigatie">
          {links.map((l) => {
            const active = isActive(l.href)
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? 'page' : undefined}
                className="text-[13px] tracking-[0.02em] transition-colors pb-1"
                style={{
                  color: active ? 'var(--text-primary)' : 'var(--text-muted)',
                  borderBottom: active ? '1px solid var(--accent-mint)' : '1px solid transparent',
                }}
              >
                {l.label}
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}
          aria-expanded={open}
          className="md:hidden text-[var(--text-primary)]"
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <nav
          className="md:hidden border-t px-6 py-4 flex flex-col gap-3"
          style={{ borderTopColor: 'var(--border)' }}
          aria-label="Mobiele navigatie"
        >
          {links.map((l) => {
            const active = isActive(l.href)
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={active ? 'page' : undefined}
                className="text-[14px] py-1"
                style={{ color: active ? 'var(--accent-mint)' : 'var(--text-secondary)' }}
              >
                {l.label}
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}
