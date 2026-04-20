import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="border-t mt-24"
      style={{ borderTopColor: 'var(--border)' }}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 px-6 md:px-10 py-5">
        <p
          className="text-[11px] uppercase tracking-[0.15em]"
          style={{ color: 'var(--text-dim)' }}
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full mr-2 align-middle"
            style={{ backgroundColor: 'var(--accent-mint)' }}
            aria-hidden="true"
          />
          In ontwikkeling · v2 · 2026
        </p>

        <nav
          aria-label="Voettekst-navigatie"
          className="flex gap-6 text-[11px] uppercase tracking-[0.15em]"
          style={{ color: 'var(--text-muted)' }}
        >
          <Link href="/bronnen" className="hover:text-[var(--text-primary)] transition-colors">
            Bronnen
          </Link>
          <Link href="/reflectie" className="hover:text-[var(--text-primary)] transition-colors">
            Reflectie
          </Link>
          <a
            href="mailto:jarnokaat@gmail.com"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}
