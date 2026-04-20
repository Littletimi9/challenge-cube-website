type Category = {
  name: string
  color: string
  soft: string
  border: string
}

const categories: Category[] = [
  { name: 'Speed games', color: 'var(--cat-speed)', soft: 'rgba(232,184,79,0.12)', border: 'rgba(232,184,79,0.35)' },
  { name: '1v1',         color: 'var(--cat-1v1)',   soft: 'rgba(232,139,108,0.12)', border: 'rgba(232,139,108,0.35)' },
  { name: 'Group games', color: 'var(--cat-group)', soft: 'rgba(212,122,149,0.12)', border: 'rgba(212,122,149,0.35)' },
  { name: 'TikTok',      color: 'var(--cat-tiktok)', soft: 'rgba(94,227,211,0.12)',  border: 'rgba(94,227,211,0.35)' },
  { name: 'Quizmaster',  color: 'var(--cat-quiz)',  soft: 'rgba(139,168,219,0.12)', border: 'rgba(139,168,219,0.35)' },
  { name: 'Random',      color: 'var(--cat-random)', soft: 'rgba(200,200,190,0.08)', border: 'rgba(200,200,190,0.3)' },
]

export default function Categories() {
  return (
    <ul className="grid grid-cols-3 md:grid-cols-6 gap-2">
      {categories.map((c) => (
        <li
          key={c.name}
          className="px-3 py-2.5 text-[12px] font-medium text-center"
          style={{
            letterSpacing: '0.05em',
            color: c.color,
            backgroundColor: c.soft,
            border: `1px solid ${c.border}`,
            borderRadius: '3px',
          }}
        >
          {c.name}
        </li>
      ))}
    </ul>
  )
}
