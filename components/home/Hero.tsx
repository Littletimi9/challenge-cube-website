import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-8 pb-16 sm:pt-12 sm:pb-24" aria-labelledby="hero-heading">
      <p className="text-xs font-medium text-[--text-secondary] uppercase tracking-widest mb-5">
        Portfolio Waardecreatie — Thijs Hekking
      </p>
      <h1
        id="hero-heading"
        className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[--text-primary] leading-tight mb-6"
      >
        Challenge Cube
      </h1>
      <p className="text-lg text-[--text-secondary] max-w-xl mb-8 leading-relaxed">
        Een dobbelsteen met QR-codes die studenten tijdens pauzes uitdaagt tot korte challenges — ontworpen voor verbinding, beweging en plezier op school.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/nieuwsgierigheid"
          className="inline-flex items-center px-5 py-2.5 rounded-lg bg-[--accent] text-white text-sm font-medium hover:opacity-90 transition-opacity focus-visible:ring-2 ring-[--accent] ring-offset-2"
        >
          Lees het portfolio
        </Link>
        <a
          href="#bewijslast"
          className="inline-flex items-center px-5 py-2.5 rounded-lg border border-[--border] text-[--text-secondary] text-sm font-medium hover:text-[--text-primary] hover:border-[--text-secondary] transition-colors focus-visible:ring-2 ring-[--accent] ring-offset-2"
        >
          Bekijk bewijslast
        </a>
      </div>
    </section>
  )
}
