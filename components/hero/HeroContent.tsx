'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'

type Props = {
  eyebrow: string
  title: { before: string; highlight: string; after: string }
  lead: string
  primary: { label: string; href: string }
  secondary: { label: string; href: string }
}

const ease = [0.22, 1, 0.36, 1] as const

const wordVariant: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease, delay: 0.3 + i * 0.06 },
  }),
}

const fadeVariant: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease, delay: d },
  }),
}

const ctaVariant: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: (d: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease, delay: d },
  }),
}

export default function HeroContent({
  eyebrow,
  title,
  lead,
  primary,
  secondary,
}: Props) {
  const reduce = useReducedMotion()
  const beforeWords = title.before.trim().split(/\s+/)
  const afterWords = title.after.trim().split(/\s+/).filter(Boolean)

  if (reduce) {
    return (
      <div className="relative z-10 max-w-[820px]">
        <p
          className="text-[11px] uppercase mb-8"
          style={{ letterSpacing: '0.2em', color: 'var(--text-muted)' }}
        >
          {eyebrow}
        </p>
        <h1
          className="font-serif mb-8"
          style={{
            fontSize: 'clamp(56px, 8vw, 96px)',
            lineHeight: 1.02,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
          }}
        >
          {title.before}{' '}
          <span className="hero-hl">{title.highlight}</span>
          {title.after}
        </h1>
        <p
          className="text-[17px] md:text-[19px] max-w-[560px] mb-10"
          style={{ lineHeight: 1.55, color: 'var(--text-secondary)' }}
        >
          {lead}
        </p>
        <div className="flex flex-wrap gap-3">
          <PrimaryCTA {...primary} />
          <SecondaryCTA {...secondary} />
        </div>
      </div>
    )
  }

  let i = 0
  return (
    <div className="relative z-10 max-w-[820px]">
      <motion.p
        initial="hidden"
        animate="show"
        custom={0.2}
        variants={fadeVariant}
        className="text-[11px] uppercase mb-8"
        style={{ letterSpacing: '0.2em', color: 'var(--text-muted)' }}
      >
        {eyebrow}
      </motion.p>

      <h1
        className="font-serif mb-8"
        style={{
          fontSize: 'clamp(56px, 8vw, 96px)',
          lineHeight: 1.02,
          letterSpacing: '-0.03em',
          color: 'var(--text-primary)',
        }}
      >
        {beforeWords.map((w, k) => (
          <motion.span
            key={`b-${k}`}
            initial="hidden"
            animate="show"
            custom={i++}
            variants={wordVariant}
            style={{ display: 'inline-block', marginRight: '0.25em' }}
          >
            {w}
          </motion.span>
        ))}
        <motion.span
          initial="hidden"
          animate="show"
          custom={i++}
          variants={wordVariant}
          className="hero-hl"
          style={{ display: 'inline-block' }}
        >
          {title.highlight}
        </motion.span>
        {afterWords.map((w, k) => {
          const punctOnly = /^[\p{P}\p{S}]+$/u.test(w)
          return (
            <motion.span
              key={`a-${k}`}
              initial="hidden"
              animate="show"
              custom={i++}
              variants={wordVariant}
              style={{
                display: 'inline-block',
                marginLeft: punctOnly && k === 0 ? '0' : '0.25em',
              }}
            >
              {w}
            </motion.span>
          )
        })}
      </h1>

      <motion.p
        initial="hidden"
        animate="show"
        custom={0.6}
        variants={fadeVariant}
        className="text-[17px] md:text-[19px] max-w-[560px] mb-10"
        style={{ lineHeight: 1.55, color: 'var(--text-secondary)' }}
      >
        {lead}
      </motion.p>

      <div className="flex flex-wrap gap-3">
        <motion.span
          initial="hidden"
          animate="show"
          custom={0.9}
          variants={ctaVariant}
          style={{ display: 'inline-flex' }}
        >
          <PrimaryCTA {...primary} />
        </motion.span>
        <motion.span
          initial="hidden"
          animate="show"
          custom={1.0}
          variants={ctaVariant}
          style={{ display: 'inline-flex' }}
        >
          <SecondaryCTA {...secondary} />
        </motion.span>
      </div>
    </div>
  )
}

function PrimaryCTA({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-6 py-[14px] text-[13px] tracking-[0.02em] transition-all duration-300 hero-cta-primary"
      style={{
        backgroundColor: 'var(--accent-mint)',
        color: 'var(--canvas)',
        borderRadius: '2px',
      }}
    >
      {label}
      <ArrowRight size={14} strokeWidth={1.5} />
    </Link>
  )
}

function SecondaryCTA({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-6 py-[14px] text-[13px] tracking-[0.02em] transition-all duration-300 hero-cta-secondary"
      style={{
        border: '1px solid var(--border-strong)',
        color: 'var(--text-secondary)',
        borderRadius: '2px',
        backgroundColor: 'transparent',
      }}
    >
      {label}
    </Link>
  )
}
