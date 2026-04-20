'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { fadeInUp, transition, viewport } from '@/lib/motion'

type Props = {
  children: React.ReactNode
  as?: 'div' | 'section' | 'article' | 'li'
  delay?: number
  className?: string
}

export default function FadeIn({ children, as = 'div', delay = 0, className }: Props) {
  const reduce = useReducedMotion()
  const Comp = motion[as]

  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <Comp
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={{ ...transition, delay }}
      className={className}
    >
      {children}
    </Comp>
  )
}
