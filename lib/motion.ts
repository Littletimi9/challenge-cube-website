import type { Variants, Transition } from 'framer-motion'

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

export const transition: Transition = {
  duration: 0.5,
  ease: 'easeOut',
}

export const viewport = {
  once: true,
  margin: '-50px',
} as const
