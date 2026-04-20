import * as LucideIcons from 'lucide-react'
import SourceLink from './SourceLink'

type IconComponent = React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>

type Props = {
  name: string
  icon: string
  description: string
  rationale: string
  application: string
  reliability: string
  sourceId?: string
}

export default function MethodCard({
  name,
  icon,
  description,
  rationale,
  application,
  reliability,
  sourceId,
}: Props) {
  const Icon = (LucideIcons as unknown as Record<string, IconComponent>)[icon]

  return (
    <article
      className="p-6 md:p-8 flex flex-col gap-5"
      style={{
        backgroundColor: 'var(--canvas)',
        border: '0.5px solid var(--border)',
      }}
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <Icon
            size={20}
            strokeWidth={1.5}
            className="text-[var(--accent-mint)]"
          />
        )}
        <h3
          className="font-serif"
          style={{
            fontSize: '24px',
            lineHeight: 1.15,
            color: 'var(--text-primary)',
          }}
        >
          {name}
        </h3>
      </div>

      <p
        className="text-[14px]"
        style={{ lineHeight: 1.6, color: 'var(--text-secondary)' }}
      >
        {description}
      </p>

      <Field label="Rationale" text={rationale} />
      <Field label="Toepassing" text={application} />
      <div
        className="p-4 flex flex-col gap-2"
        style={{
          backgroundColor: 'var(--accent-mint-soft)',
          borderRadius: '3px',
        }}
      >
        <span
          className="text-[10px] uppercase"
          style={{
            letterSpacing: '0.2em',
            color: 'var(--accent-mint)',
          }}
        >
          Betrouwbaarheid
        </span>
        <p
          className="text-[13px]"
          style={{ lineHeight: 1.6, color: 'var(--text-secondary)' }}
        >
          {reliability}
        </p>
      </div>

      {sourceId && (
        <div
          className="pt-4 mt-auto"
          style={{ borderTop: '0.5px solid var(--border)' }}
        >
          <SourceLink id={sourceId} />
        </div>
      )}
    </article>
  )
}

function Field({ label, text }: { label: string; text: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span
        className="text-[10px] uppercase"
        style={{
          letterSpacing: '0.2em',
          color: 'var(--text-dim)',
        }}
      >
        {label}
      </span>
      <p
        className="text-[13px]"
        style={{ lineHeight: 1.6, color: 'var(--text-secondary)' }}
      >
        {text}
      </p>
    </div>
  )
}
