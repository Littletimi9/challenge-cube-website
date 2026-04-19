'use client'

import ValuePerspective from './ValuePerspective'
import ReflectionCallout from './ReflectionCallout'
import type { ValuePerspectiveGridProps } from '@/lib/types'

const N = 5
const R = 72
const CX = 100
const CY = 100

function axisAngle(i: number) {
  return -Math.PI / 2 + (2 * Math.PI * i) / N
}

function axisPoint(i: number, score: number): [number, number] {
  const r = (score / 5) * R
  const a = axisAngle(i)
  return [CX + r * Math.cos(a), CY + r * Math.sin(a)]
}

function gridPolygon(score: number) {
  return Array.from({ length: N }, (_, i) => axisPoint(i, score))
    .map(([x, y]) => `${x},${y}`)
    .join(' ')
}

const AXIS_LABELS: Record<string, string> = {
  gebruiker: 'Gebruiker',
  maatschappij: 'Maatschappij',
  opdrachtgever: 'Opdrachtgever',
  duurzaamheid: 'Duurzaamheid',
  technologie: 'Technologie',
}

export default function ValuePerspectiveGrid({
  perspectives,
  synthesis,
}: ValuePerspectiveGridProps) {
  const scores = Array.from({ length: N }, (_, i) => perspectives[i]?.score ?? 3)

  return (
    <section className="my-8 flex flex-col gap-8">
      <div className="flex justify-center" aria-hidden="true">
        <svg
          viewBox="0 0 200 200"
          width="260"
          height="260"
          role="img"
          aria-label="Radar chart waardeperspectieven"
        >
          {/* Grid pentagons */}
          {[1, 2, 3, 4, 5].map((s) => (
            <polygon
              key={s}
              points={gridPolygon(s)}
              fill="none"
              stroke="var(--border)"
              strokeWidth="0.75"
            />
          ))}
          {/* Axis lines */}
          {Array.from({ length: N }, (_, i) => {
            const [x, y] = axisPoint(i, 5)
            return (
              <line
                key={i}
                x1={CX}
                y1={CY}
                x2={x}
                y2={y}
                stroke="var(--border)"
                strokeWidth="0.75"
              />
            )
          })}
          {/* Score polygon */}
          <polygon
            points={scores
              .map((s, i) => {
                const [x, y] = axisPoint(i, s)
                return `${x},${y}`
              })
              .join(' ')}
            fill="var(--accent)"
            fillOpacity="0.15"
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Score dots */}
          {scores.map((s, i) => {
            const [x, y] = axisPoint(i, s)
            return (
              <circle key={i} cx={x} cy={y} r="3" fill="var(--accent)" />
            )
          })}
          {/* Axis labels */}
          {perspectives.map((p, i) => {
            const [x, y] = axisPoint(i, 6.2)
            return (
              <text
                key={i}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="7.5"
                fill="var(--text-secondary)"
              >
                {AXIS_LABELS[p.perspective]}
              </text>
            )
          })}
        </svg>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {perspectives.map((p) => (
          <ValuePerspective key={p.perspective} {...p} />
        ))}
      </div>

      <ReflectionCallout title="Samenhang perspectieven">
        <p>{synthesis}</p>
      </ReflectionCallout>
    </section>
  )
}
