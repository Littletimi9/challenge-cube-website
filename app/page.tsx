import HeroLanding from '@/components/hero/HeroLanding'
import StatsStrip from '@/components/home/StatsStrip'
import RubricIndex from '@/components/home/RubricIndex'
import Pitch from '@/components/home/Pitch'
import { rubrics } from '@/content/rubrics'

export default function HomePage() {
  return (
    <>
      <HeroLanding
        eyebrow="Vijf criteria · één portfolio"
        title={{
          before: 'Pauzes die studenten',
          highlight: 'terughalen',
          after: ', niet wegdrukken.',
        }}
        lead="De Challenge Table is een robuuste speeltafel voor middelbare scholen die het snackritueel in de pauze vervangt met directe sociale activiteit — geen app, geen uitleg, direct spelen. Dit portfolio bundelt het bewijs rond vijf rubric-criteria van Hoofdportfolio Waardecreatie."
        primary={{ label: 'Begin bij nieuwsgierigheid', href: '/nieuwsgierigheid' }}
        secondary={{ label: 'Lees eerst de reflectie', href: '/reflectie' }}
      />

      <StatsStrip
        stats={[
          { value: '67%', label: 'van scholieren eet dagelijks ongezond tijdens de pauze', source: 'Voedingscentrum, 2023' },
          { value: '3×', label: 'hogere kans op ongezonde keuze bij groepsdruk van peers', source: 'WHO, 2022' },
          { value: '920+', label: 'middelbare scholen in Nederland zonder actief pauzeconcept', source: 'DUO, 2023' },
          { value: '8–14k', label: 'euro acceptabele investering per school (B2B PSM)', source: 'Eigen onderzoek, 2026' },
        ]}
      />

      <RubricIndex
        eyebrow="De bewijslast"
        heading="De bewijslast, per rubric-criterium."
        items={rubrics}
      />

      <Pitch
        eyebrow="Concept"
        heading={
          <>
            Eén dobbelsteen, zes categorieën. Je gooit, scant de QR, en hebt
            binnen tien seconden een challenge die de pauze terugclaimt van het
            scherm.
          </>
        }
      />
    </>
  )
}
