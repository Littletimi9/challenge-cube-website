import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[--border] bg-[--surface]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[--text-secondary]">
        <p>Portfolio Challenge Cube — Thijs Hekking</p>
        <nav aria-label="Footer navigatie">
          <ul className="flex gap-6" role="list">
            <li>
              <Link
                href="/reflectie"
                className="hover:text-[--accent] transition-colors focus-visible:ring-2 ring-[--accent] ring-offset-2 rounded"
              >
                Reflectie
              </Link>
            </li>
            <li>
              <Link
                href="/bronnen"
                className="hover:text-[--accent] transition-colors focus-visible:ring-2 ring-[--accent] ring-offset-2 rounded"
              >
                Bronnen
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
