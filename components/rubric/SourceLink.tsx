import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

type Props = { id: string; label?: string }

export default function SourceLink({ id, label = 'Bron' }: Props) {
  return (
    <Link
      href={`/bronnen#${id}`}
      className="inline-flex items-center gap-1.5 text-[12px] uppercase transition-colors hover:opacity-80"
      style={{
        letterSpacing: '0.15em',
        color: 'var(--accent-mint)',
      }}
    >
      {label}
      <ExternalLink size={12} strokeWidth={1.5} />
    </Link>
  )
}
