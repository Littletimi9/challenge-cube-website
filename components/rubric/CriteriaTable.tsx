import { CheckCircle2, AlertCircle } from 'lucide-react'

export type Criterion = {
  criterion: string
  target: string
  result: string
  met: boolean
  evidence?: string
}

type Props = { criteria: Criterion[] }

export default function CriteriaTable({ criteria }: Props) {
  return (
    <>
      <table
        className="hidden md:table w-full border-collapse"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <thead>
          <tr style={{ borderBottom: '0.5px solid var(--border)' }}>
            <Th>Criterium</Th>
            <Th>Doel</Th>
            <Th>Resultaat</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody>
          {criteria.map((c) => (
            <tr
              key={c.criterion}
              style={{ borderBottom: '0.5px solid var(--border)' }}
            >
              <Td>
                <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                  {c.criterion}
                </span>
                {c.evidence && (
                  <div
                    className="mt-1 text-[12px]"
                    style={{ color: 'var(--text-dim)' }}
                  >
                    {c.evidence}
                  </div>
                )}
              </Td>
              <Td>{c.target}</Td>
              <Td>{c.result}</Td>
              <Td>
                <StatusIcon met={c.met} />
              </Td>
            </tr>
          ))}
        </tbody>
      </table>

      <ul className="md:hidden flex flex-col gap-2">
        {criteria.map((c) => (
          <li
            key={c.criterion}
            className="p-5 flex flex-col gap-3"
            style={{
              backgroundColor: 'var(--canvas-elevated)',
              border: '0.5px solid var(--border)',
            }}
          >
            <div className="flex items-start justify-between gap-3">
              <span
                className="text-[15px]"
                style={{ color: 'var(--text-primary)', fontWeight: 500 }}
              >
                {c.criterion}
              </span>
              <StatusIcon met={c.met} />
            </div>
            <div className="grid grid-cols-2 gap-3 text-[13px]">
              <Cell label="Doel" text={c.target} />
              <Cell label="Resultaat" text={c.result} />
            </div>
            {c.evidence && (
              <p className="text-[12px]" style={{ color: 'var(--text-dim)' }}>
                {c.evidence}
              </p>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th
      className="text-left py-4 pr-6 text-[10px] uppercase font-normal"
      style={{
        letterSpacing: '0.2em',
        color: 'var(--text-dim)',
      }}
    >
      {children}
    </th>
  )
}

function Td({ children }: { children: React.ReactNode }) {
  return (
    <td
      className="py-5 pr-6 text-[14px] align-top"
      style={{ lineHeight: 1.55, color: 'var(--text-secondary)' }}
    >
      {children}
    </td>
  )
}

function Cell({ label, text }: { label: string; text: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span
        className="text-[10px] uppercase"
        style={{
          letterSpacing: '0.2em',
          color: 'var(--text-dim)',
        }}
      >
        {label}
      </span>
      <span style={{ color: 'var(--text-secondary)' }}>{text}</span>
    </div>
  )
}

function StatusIcon({ met }: { met: boolean }) {
  return met ? (
    <CheckCircle2
      size={18}
      strokeWidth={1.5}
      className="text-[var(--accent-mint)]"
      aria-label="Behaald"
    />
  ) : (
    <AlertCircle
      size={18}
      strokeWidth={1.5}
      className="text-[var(--accent-amber)]"
      aria-label="Aandachtspunt"
    />
  )
}
