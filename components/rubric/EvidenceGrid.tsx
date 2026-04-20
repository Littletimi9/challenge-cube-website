export default function EvidenceGrid({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2"
      style={{
        gap: '0.5px',
        backgroundColor: 'var(--border)',
        border: '0.5px solid var(--border)',
      }}
    >
      {children}
    </div>
  )
}
