type Props = { number: string; label: string }

export default function RubricBadge({ number, label }: Props) {
  return (
    <span
      className="inline-flex items-center gap-2 px-2.5 py-1 text-[10px] uppercase"
      style={{
        letterSpacing: '0.2em',
        color: 'var(--accent-mint)',
        backgroundColor: 'var(--accent-mint-soft)',
        border: '1px solid var(--accent-mint-border)',
        borderRadius: '3px',
      }}
    >
      <span style={{ opacity: 0.7 }}>{number}</span>
      <span>{label}</span>
    </span>
  )
}
