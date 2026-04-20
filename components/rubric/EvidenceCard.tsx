import RubricBadge from './RubricBadge'
import SourceLink from './SourceLink'
import FadeIn from '@/components/motion/FadeIn'

type Props = {
  rubric: { number: string; label: string }
  title: string
  action: string
  finding: string
  meaning: string
  sourceId?: string
  sourceLabel?: string
}

export default function EvidenceCard({
  rubric,
  title,
  action,
  finding,
  meaning,
  sourceId,
  sourceLabel = 'Bron bekijken',
}: Props) {
  return (
    <FadeIn
      as="article"
      className="p-8 md:p-10 flex flex-col gap-6 bg-[var(--canvas)]"
    >
      <RubricBadge number={rubric.number} label={rubric.label} />

      <h3
        className="font-serif"
        style={{
          fontSize: 'clamp(22px, 2.2vw, 28px)',
          lineHeight: 1.15,
          letterSpacing: '-0.005em',
          color: 'var(--text-primary)',
        }}
      >
        {title}
      </h3>

      <div className="flex flex-col gap-5">
        <Block label="Actie" text={action} />
        <Block label="Bevinding" text={finding} />
        <Block label="Betekenis" text={meaning} />
      </div>

      {sourceId && (
        <div
          className="pt-5 mt-auto"
          style={{ borderTop: '0.5px solid var(--border)' }}
        >
          <SourceLink id={sourceId} label={sourceLabel} />
        </div>
      )}
    </FadeIn>
  )
}

function Block({ label, text }: { label: string; text: string }) {
  return (
    <div className="flex flex-col gap-2">
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
        className="text-[14px]"
        style={{ lineHeight: 1.6, color: 'var(--text-secondary)' }}
      >
        {text}
      </p>
    </div>
  )
}
