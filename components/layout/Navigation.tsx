'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const NAV_LINKS = [
  { href: '/nieuwsgierigheid', label: 'Nieuwsgierigheid' },
  { href: '/onderzoek', label: 'Onderzoek' },
  { href: '/concept', label: 'Concept' },
  { href: '/methoden', label: 'Methoden' },
  { href: '/validatie', label: 'Validatie' },
]

const MORE_LINKS = [
  { href: '/reflectie', label: 'Reflectie' },
  { href: '/bronnen', label: 'Bronnen' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-[--surface] border-b border-[--border]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 bg-[--accent] text-white px-3 py-1.5 rounded text-sm font-medium z-50"
      >
        Spring naar inhoud
      </a>
      <nav
        className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14"
        aria-label="Hoofdnavigatie"
      >
        <Link
          href="/"
          className="font-serif text-lg text-[--text-primary] hover:text-[--accent] transition-colors focus-visible:ring-2 ring-[--accent] ring-offset-2 rounded"
        >
          Challenge Cube
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-0.5" role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={pathname === href ? 'page' : undefined}
                className={`px-3 py-1.5 rounded text-sm transition-colors focus-visible:ring-2 ring-[--accent] ring-offset-2 ${
                  pathname === href
                    ? 'text-[--accent] font-medium underline underline-offset-4 decoration-[--accent]'
                    : 'text-[--text-secondary] hover:text-[--text-primary]'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}

          {/* Meer dropdown */}
          <li className="relative">
            <button
              onClick={() => setMoreOpen((o) => !o)}
              aria-expanded={moreOpen}
              aria-haspopup="true"
              className="flex items-center gap-1 px-3 py-1.5 rounded text-sm text-[--text-secondary] hover:text-[--text-primary] transition-colors focus-visible:ring-2 ring-[--accent] ring-offset-2"
            >
              Meer
              <ChevronDown
                size={14}
                aria-hidden="true"
                className={`transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {moreOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  aria-hidden="true"
                  onClick={() => setMoreOpen(false)}
                />
                <ul
                  role="menu"
                  className="absolute right-0 top-full mt-1 bg-[--surface] border border-[--border] rounded-xl shadow-lg py-1 min-w-36 z-50"
                >
                  {MORE_LINKS.map(({ href, label }) => (
                    <li key={href} role="none">
                      <Link
                        href={href}
                        role="menuitem"
                        aria-current={pathname === href ? 'page' : undefined}
                        onClick={() => setMoreOpen(false)}
                        className="block px-4 py-2 text-sm text-[--text-secondary] hover:text-[--text-primary] hover:bg-[--canvas] transition-colors focus-visible:ring-2 ring-[--accent] ring-offset-2"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded text-[--text-secondary] hover:text-[--text-primary] transition-colors focus-visible:ring-2 ring-[--accent] ring-offset-2"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Sluit menu' : 'Open menu'}
        >
          {mobileOpen ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-[--border] bg-[--surface]">
          <ul className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-1" role="list">
            {[...NAV_LINKS, ...MORE_LINKS].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={pathname === href ? 'page' : undefined}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2 rounded text-sm transition-colors focus-visible:ring-2 ring-[--accent] ring-offset-2 ${
                    pathname === href
                      ? 'text-[--accent] font-medium bg-[--accent-light]'
                      : 'text-[--text-secondary] hover:text-[--text-primary] hover:bg-[--canvas]'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
