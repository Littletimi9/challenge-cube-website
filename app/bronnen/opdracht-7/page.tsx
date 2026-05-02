import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import PageHead from '@/components/rubric/PageHead'
import SectionHeading from '@/components/rubric/SectionHeading'

export const metadata = {
  title: 'Opdracht 7 — Pressure cooker: financieel dashboard · Challenge Cube',
}

const paragraphs: React.ReactNode[] = [
  'In het kader van de pressure cooker-opdracht heb ik in een kort tijdsbestek een functioneel financieel dashboard ontwikkeld.',
  'De pressure cooker is succesvol afgerond en behaald. Verdere inhoudelijke onderbouwing is voor deze opdracht niet nodig.',
]

export default function Opdracht7Page() {
  return (
    <>
      <PageHead
        number="07"
        label="Portfolio · Opdracht"
        title="Pressure cooker: financieel dashboard."
        lead="Tijdgebonden opdracht waarbij in kort bestek een financieel dashboard is ontworpen en opgeleverd."
        meta={[
          { key: 'Type', value: 'Pressure cooker' },
          { key: 'Resultaat', value: 'Behaald' },
          { key: 'Auteur', value: 'Thijs Hekking' },
        ]}
      />

      <section className="px-6 md:px-10 py-20">
        <SectionHeading
          eyebrow="Toelichting"
          heading="Pressure cooker afgerond."
        />

        <div className="grid gap-8 max-w-[820px]">
          {paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="text-[17px] md:text-[18px]"
              style={{
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section
        className="px-6 md:px-10 py-16"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <Link
          href="/bronnen"
          className="inline-flex items-center gap-2 text-[12px] uppercase hover:opacity-80 transition-opacity"
          style={{
            letterSpacing: '0.2em',
            color: 'var(--accent-mint)',
          }}
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          Terug naar bronnen
        </Link>
      </section>
    </>
  )
}
