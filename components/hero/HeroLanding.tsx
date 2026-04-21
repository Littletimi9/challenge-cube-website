import HeroVideo from './HeroVideo'
import HeroOverlays from './HeroOverlays'
import HeroContent from './HeroContent'

type Props = {
  eyebrow: string
  title: { before: string; highlight: string; after: string }
  lead: string
  primary: { label: string; href: string }
  secondary: { label: string; href: string }
}

export default function HeroLanding(props: Props) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: 'clamp(620px, 88vh, 880px)' }}
      aria-label="Introductie"
    >
      <HeroVideo />
      <HeroOverlays />
      <div className="relative z-10 flex min-h-[inherit] items-end px-6 md:px-10 pt-28 pb-16 md:pt-36 md:pb-24">
        <HeroContent {...props} />
      </div>
    </section>
  )
}
