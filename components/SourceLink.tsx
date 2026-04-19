import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import type { SourceLinkProps } from '@/lib/types'

export default function SourceLink({ id, label }: SourceLinkProps) {
  return (
    <Link
      href={`/bronnen#${id}`}
      className="inline-flex items-center gap-1 text-sm text-[--accent] hover:underline focus-visible:ring-2 ring-[--accent] ring-offset-2 rounded"
    >
      {label ?? '(Bron)'}
      <ExternalLink size={13} aria-hidden="true" />
    </Link>
  )
}
