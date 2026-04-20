'use client'

import { motion, useReducedMotion } from 'framer-motion'

export type TimelineItem = {
  version: string
  date: string
  title: string
  feedback: string
  change: string
}

type Props = { items: TimelineItem[] }

export default function Timeline({ items }: Props) {
  const reduce = useReducedMotion()

  return (
    <ol className="relative flex flex-col gap-12 pl-8 md:pl-10">
      <span
        aria-hidden="true"
        className="absolute top-2 bottom-2 w-px"
        style={{
          left: '10px',
          backgroundColor: 'var(--border-strong)',
        }}
      />
      {items.map((item, i) => (
        <motion.li
          key={item.version}
          className="relative"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
        >
          <span
            aria-hidden="true"
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: '-28px',
              top: '6px',
              backgroundColor: 'var(--canvas)',
              border: '1.5px solid var(--accent-mint)',
            }}
          />
          <div className="flex items-baseline gap-3 mb-2">
            <span
              className="font-serif"
              style={{
                fontSize: '22px',
                color: 'var(--accent-mint)',
                lineHeight: 1,
              }}
            >
              {item.version}
            </span>
            <span
              className="text-[11px] uppercase"
              style={{
                letterSpacing: '0.15em',
                color: 'var(--text-muted)',
              }}
            >
              {item.date}
            </span>
          </div>
          <h3
            className="font-serif mb-3"
            style={{
              fontSize: '22px',
              lineHeight: 1.2,
              color: 'var(--text-primary)',
            }}
          >
            {item.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <Line label="Feedback" text={item.feedback} />
            <Line label="Verandering" text={item.change} />
          </div>
        </motion.li>
      ))}
    </ol>
  )
}

function Line({ label, text }: { label: string; text: string }) {
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
        className="text-[14px]"
        style={{ lineHeight: 1.55, color: 'var(--text-secondary)' }}
      >
        {text}
      </p>
    </div>
  )
}
