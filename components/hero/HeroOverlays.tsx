export default function HeroOverlays() {
  return (
    <>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 85% 15%, var(--hero-bloom-amber) 0%, transparent 50%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 20% 80%, var(--hero-overlay-dark) 0%, var(--hero-overlay-dark-soft) 40%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, var(--canvas) 0%, transparent 40%)',
        }}
      />
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.035, mixBlendMode: 'overlay' }}
      >
        <filter id="hero-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>
    </>
  )
}
