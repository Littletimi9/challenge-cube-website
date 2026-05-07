type Props = { good: string; better: string }

export default function ReflectionGrid({ good, better }: Props) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2"
      style={{
        gap: '0.5px',
        backgroundColor: 'var(--border)',
        border: '0.5px solid var(--border)',
      }}
    >
      <Cell
        dotColor="var(--accent-mint)"
        bgColor="rgba(94, 227, 211, 0.05)"
        label="Wat ging goed"
        text={good}
      />
      <Cell
        dotColor="var(--accent-amber)"
        bgColor="rgba(232, 184, 79, 0.05)"
        label="Wat kan beter"
        text={better}
      />
    </div>
  )
}

function Cell({
  dotColor,
  bgColor,
  label,
  text,
}: {
  dotColor: string
  bgColor: string
  label: string
  text: string
}) {
  return (
    <div
      className="p-6 md:p-8 flex flex-col gap-4"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex items-center gap-2.5">
        <span
          className="inline-block w-2 h-2 rounded-full"
          style={{ backgroundColor: dotColor }}
          aria-hidden="true"
        />
        <span
          className="text-[10px] uppercase"
          style={{
            letterSpacing: '0.2em',
            color: 'var(--text-muted)',
          }}
        >
          {label}
        </span>
      </div>
      <p
        className="text-[15px]"
        style={{ lineHeight: 1.6, color: 'var(--text-secondary)' }}
      >
        {text}
      </p>
    </div>
  )
}
