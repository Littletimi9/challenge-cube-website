'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import type { TimelineProps } from '@/lib/types'

export default function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative pl-8 border-l-2 border-[--accent] my-8 flex flex-col gap-10">
      {items.map((entry, i) => (
        <motion.li
          key={entry.version}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: i * 0.07 }}
          className="relative"
        >
          <span
            className="absolute -left-[2.35rem] top-1.5 w-4 h-4 rounded-full bg-[--accent] border-2 border-[--canvas]"
            aria-hidden="true"
          />
          <div className="bg-[--surface] border border-[--border] rounded-xl p-5 flex flex-col gap-3">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[--accent-light] text-[--accent]">
                {entry.version}
              </span>
              <span className="text-xs text-[--text-secondary]">{entry.date}</span>
            </div>
            <h3 className="font-serif text-lg text-[--text-primary]">{entry.title}</h3>
            <dl className="grid sm:grid-cols-2 gap-3 text-sm">
              <div>
                <dt className="text-[--text-secondary] font-medium mb-1">Feedback</dt>
                <dd className="text-[--text-primary] italic">&ldquo;{entry.feedback}&rdquo;</dd>
              </div>
              <div>
                <dt className="text-[--text-secondary] font-medium mb-1">Wijziging</dt>
                <dd className="text-[--text-primary]">{entry.change}</dd>
              </div>
            </dl>
            {entry.image && (
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image src={entry.image.src} alt={entry.image.alt} fill className="object-cover" />
              </div>
            )}
          </div>
        </motion.li>
      ))}
    </ol>
  )
}
