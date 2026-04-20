import Hero from '@/components/home/Hero'
import StatsStrip from '@/components/home/StatsStrip'
import RubricIndex from '@/components/home/RubricIndex'
import Pitch from '@/components/home/Pitch'
import { rubrics } from '@/content/rubrics'

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Vijf criteria · één portfolio"
        title={
          <>
            Pauzes die studenten <span className="hl">terughalen</span>, niet wegdrukken.
          </>
        }
        lead="De Challenge Cube is een dobbelsteen met QR-codes voor pauze-challenges: zes categorieën, één worp, geen telefoon. Dit portfolio bundelt het bewijs rond vijf rubric-criteria van Hoofdportfolio Waardecreatie."
        primary={{ label: 'Begin bij nieuwsgierigheid', href: '/nieuwsgierigheid' }}
        secondary={{ label: 'Lees eerst de reflectie', href: '/reflectie' }}
      />

      <StatsStrip
        stats={[
          { value: '21', label: 'Respondenten' },
          { value: '13', label: 'Observaties' },
          { value: '04', label: 'Prototype-iteraties' },
          { value: '06', label: 'Challenge-categorieën' },
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
