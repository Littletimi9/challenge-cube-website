export default function HeroCollage() {
  return (
    <div
      className="grid gap-3 h-[360px] md:h-[440px]"
      style={{ gridTemplateColumns: '1.4fr 1fr' }}
    >
      <div
        className="relative overflow-hidden"
        style={{ borderRadius: '4px' }}
      >
        <video
          src="/Video-challenge-table.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Challenge Cube in gebruik aan de challenge-tafel"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-rows-2 gap-3">
        <div
          className="relative overflow-hidden"
          style={{ borderRadius: '4px' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Afbeelding-challenge-tafel-v1.png"
            alt="Eerste versie van de challenge-tafel met Challenge Cube"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          style={{
            background: 'linear-gradient(135deg, #8BA8DB 0%, #1E2A44 100%)',
            borderRadius: '4px',
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
