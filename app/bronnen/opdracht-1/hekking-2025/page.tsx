import Link from 'next/link'
import { ArrowLeft, Download } from 'lucide-react'
import PageHead from '@/components/rubric/PageHead'
import SectionHeading from '@/components/rubric/SectionHeading'

const reportPath = '/business-innovation-individueel-rapport-thijs-hekking.docx'

export const metadata = {
  title: 'Bron — Hekking (2025) · Challenge Cube',
}

export default function Hekking2025Page() {
  return (
    <>
      <PageHead
        number="01A"
        label="Bron · Opdracht 1"
        title="Hekking (2025)."
        lead="Bronpagina voor het individuele verantwoordingsdossier van Thijs Hekking, inclusief download van het document."
        meta={[
          { key: 'Type', value: 'Ongepubliceerd essay' },
          { key: 'Bestand', value: 'DOCX' },
          { key: 'Auteur', value: 'Thijs Hekking' },
        ]}
      />

      <section className="px-6 md:px-10 py-20">
        <SectionHeading eyebrow="APA-bron" heading="Download het rapport." />

        <div
          className="max-w-[820px] p-8 md:p-10 flex flex-col gap-6"
          style={{
            backgroundColor: 'var(--surface)',
            border: '0.5px solid var(--border)',
          }}
        >
          <p
            className="text-[17px] md:text-[18px]"
            style={{ lineHeight: 1.75, color: 'var(--text-secondary)' }}
          >
            Hekking, T. (2025). <em>Individueel verantwoordingsdossier Toekomstige Business Innovatie</em> [Ongepubliceerd essay]. Hogeschool Windesheim.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={reportPath}
              download
              className="inline-flex items-center gap-2 text-[12px] uppercase transition-opacity hover:opacity-80"
              style={{
                letterSpacing: '0.2em',
                color: 'var(--accent-mint)',
              }}
            >
              <Download size={14} strokeWidth={1.5} />
              Download rapport
            </a>

            <a
              href={reportPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[12px] uppercase transition-opacity hover:opacity-80"
              style={{
                letterSpacing: '0.2em',
                color: 'var(--text-muted)',
              }}
            >
              Open bestand
            </a>
          </div>
        </div>
      </section>

      <section
        className="px-6 md:px-10 py-16"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <Link
          href="/bronnen/opdracht-1"
          className="inline-flex items-center gap-2 text-[12px] uppercase hover:opacity-80 transition-opacity"
          style={{
            letterSpacing: '0.2em',
            color: 'var(--accent-mint)',
          }}
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          Terug naar opdracht 1
        </Link>
      </section>
    </>
  )
}
