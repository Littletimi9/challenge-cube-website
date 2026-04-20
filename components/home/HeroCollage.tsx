type CollageProps = {
  mainLabel?: string
}

export default function HeroCollage({ mainLabel = 'VIDEO VAN CUBE' }: CollageProps) {
  return (
    <div
      className="grid gap-3 h-[360px] md:h-[440px]"
      style={{ gridTemplateColumns: '1.4fr 1fr' }}
    >
      <div
        className="relative flex items-end p-5"
        style={{
          background:
            'linear-gradient(135deg, #E8B84F 0%, #D95A3C 55%, #8B2E4C 100%)',
          borderRadius: '4px',
        }}
      >
        <span
          className="text-[10px] uppercase tracking-[0.2em]"
          style={{ color: 'rgba(22,22,19,0.7)' }}
        >
          {mainLabel}
        </span>
      </div>

      <div className="grid grid-rows-2 gap-3">
        <div
          style={{
            background: 'linear-gradient(135deg, #5EE3D3 0%, #1B4B47 100%)',
            borderRadius: '4px',
          }}
          aria-hidden="true"
        />
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
