import SourceLink from './SourceLink'
import type { QuoteBlockProps } from '@/lib/types'

export default function QuoteBlock({ quote, author, context, sourceId }: QuoteBlockProps) {
  return (
    <figure className="border-l-4 border-[--accent] pl-6 my-6">
      <span className="block text-4xl text-[--accent] leading-none mb-2 select-none" aria-hidden="true">
        &ldquo;
      </span>
      <blockquote className="text-lg italic text-[--text-primary] leading-relaxed">{quote}</blockquote>
      <figcaption className="mt-3 flex flex-col gap-1">
        <span className="text-sm text-[--text-secondary]">— {author}</span>
        {context && <span className="text-sm text-[--text-secondary]">{context}</span>}
        {sourceId && <SourceLink id={sourceId} />}
      </figcaption>
    </figure>
  )
}
