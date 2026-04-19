import { CheckCircle, AlertCircle } from 'lucide-react'
import type { CriteriaTableProps } from '@/lib/types'

export default function CriteriaTable({ criteria }: CriteriaTableProps) {
  return (
    <section className="my-8" aria-label="Testcriteria overzicht">
      {/* Desktop table */}
      <table className="hidden sm:table w-full text-sm border-collapse">
        <thead>
          <tr className="border-b-2 border-[--border]">
            {['Criterium', 'Doel', 'Resultaat', 'Status'].map((h) => (
              <th
                key={h}
                scope="col"
                className="py-3 px-4 text-left text-[--text-secondary] font-medium first:pl-0 last:text-center"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {criteria.map((c, i) => (
            <tr
              key={i}
              className={`border-b border-[--border] ${c.met ? 'bg-[--success-light]' : ''}`}
            >
              <td className="py-3 px-4 font-medium text-[--text-primary] first:pl-0">{c.criterion}</td>
              <td className="py-3 px-4 text-[--text-secondary]">{c.target}</td>
              <td className="py-3 px-4 text-[--text-primary]">{c.result}</td>
              <td className="py-3 px-4 text-center">
                {c.met ? (
                  <CheckCircle
                    size={18}
                    className="inline text-[--success]"
                    aria-label="Criterium voldaan"
                  />
                ) : (
                  <AlertCircle
                    size={18}
                    className="inline text-[--improvement]"
                    aria-label="Criterium niet voldaan"
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile cards */}
      <ul className="sm:hidden flex flex-col gap-3" role="list">
        {criteria.map((c, i) => (
          <li
            key={i}
            className={`bg-[--surface] border rounded-xl p-4 ${
              c.met ? 'border-[--success]' : 'border-[--border]'
            }`}
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <span className="font-medium text-[--text-primary] text-sm">{c.criterion}</span>
              {c.met ? (
                <CheckCircle size={18} className="shrink-0 text-[--success]" aria-label="Voldaan" />
              ) : (
                <AlertCircle
                  size={18}
                  className="shrink-0 text-[--improvement]"
                  aria-label="Niet voldaan"
                />
              )}
            </div>
            <dl className="grid gap-1 text-xs">
              <div>
                <dt className="text-[--text-secondary]">Doel</dt>
                <dd className="text-[--text-primary]">{c.target}</dd>
              </div>
              <div>
                <dt className="text-[--text-secondary]">Resultaat</dt>
                <dd className="text-[--text-primary]">{c.result}</dd>
              </div>
              {c.evidence && (
                <div>
                  <dt className="text-[--text-secondary]">Bewijs</dt>
                  <dd className="text-[--text-primary]">{c.evidence}</dd>
                </div>
              )}
            </dl>
          </li>
        ))}
      </ul>
    </section>
  )
}
