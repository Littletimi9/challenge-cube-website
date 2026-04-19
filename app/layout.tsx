import type { Metadata } from 'next'
import { Instrument_Serif, Inter, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: '400',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Portfolio | Challenge Cube',
  description:
    'Portfolio van Thijs Hekking — visuele verantwoording van het project Challenge Cube voor het vak Waardecreatie.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="nl"
      className={`${instrumentSerif.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main id="main-content" className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
