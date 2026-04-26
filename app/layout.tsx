import type { Metadata } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import SourcePageLinkHandler from '@/components/layout/SourcePageLinkHandler'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-instrument-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Challenge Cube — Portfolio Waardecreatie',
  description:
    'Visueel portfolio rond de Challenge Cube: een dobbelsteen met QR-codes voor pauze-challenges. Opgebouwd rond vijf rubric-criteria.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body>
        <SourcePageLinkHandler />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:bg-[var(--accent-mint)] focus:text-[var(--canvas)] focus:rounded"
        >
          Naar hoofdinhoud
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
