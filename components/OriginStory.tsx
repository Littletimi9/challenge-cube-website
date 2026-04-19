import Image from 'next/image'
import RubricBadge from './RubricBadge'
import type { OriginStoryProps } from '@/lib/types'

const PHASE_LABELS = { begin: 'Begin', tijdens: 'Tijdens', nu: 'Nu' }

export default function OriginStory({ heroImage, anecdote, perspectiveShift }: OriginStoryProps) {
  return (
    <article>
      <div className="relative mb-8 h-64 sm:h-80 rounded-xl overflow-hidden">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 896px"
        />
        <div className="absolute top-4 right-4">
          <RubricBadge criterium={1} />
        </div>
      </div>

      <div className="font-serif text-lg text-[--text-primary] leading-relaxed [&>p]:mb-4 [&>p:last-child]:mb-0">
        {anecdote}
      </div>

      <section className="mt-10" aria-label="Perspectief-verschuiving">
        <h3 className="text-xs font-semibold text-[--text-secondary] uppercase tracking-wide mb-4">
          Mijn blik veranderde
        </h3>
        <ol className="grid sm:grid-cols-3 gap-4" role="list">
          {perspectiveShift.map((phase, i) => (
            <li
              key={phase.label}
              className="bg-[--surface] border border-[--border] rounded-xl p-4 flex flex-col gap-2"
            >
              <div className="flex items-center gap-2">
                <span
                  className="text-xs font-bold bg-[--accent-light] text-[--accent] rounded-full w-5 h-5 flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <span className="text-xs font-semibold text-[--text-secondary] uppercase tracking-wide">
                  {PHASE_LABELS[phase.label]}
                </span>
              </div>
              <p className="text-sm text-[--text-primary]">{phase.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </article>
  )
}
