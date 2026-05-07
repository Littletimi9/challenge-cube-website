import type { ReactNode } from 'react'

export interface RubricBadgeProps {
  number: string
  label: string
}

export interface SourceLinkProps {
  id: string
  label?: string
}

export interface ReflectionCalloutProps {
  type?: 'positive' | 'improvement' | 'general'
  title?: string
  children: ReactNode
}

export interface EvidenceCardProps {
  rubric: { number: string; label: string }
  title: string
  action: string
  finding: string
  meaning: string
  sourceId?: string
  sourceLabel?: string
}

export interface TimelineItem {
  version: string
  date: string
  title: string
  feedback: string
  change: string
  image?: { src: string; alt: string }
}

export interface TimelineProps {
  items: TimelineItem[]
}

export interface QuoteBlockProps {
  quote: string
  author: string
  source?: string
}

export interface PainGainMapProps {
  pains: { label: string; severity: 'low' | 'medium' | 'high' }[]
  gains: { label: string; importance: 'low' | 'medium' | 'high' }[]
  jobs: { label: string; type: 'functional' | 'social' | 'emotional' }[]
}

export interface MethodCardProps {
  name: string
  icon?: string
  description: string
  rationale: string
  application: string
  reliability: string
  sourceId?: string
}

export interface Criterion {
  criterion: string
  target: string
  result: string
  met: boolean
  evidence?: string
}

export interface CriteriaTableProps {
  criteria: Criterion[]
}

export type PerspectiveType =
  | 'gebruiker'
  | 'maatschappij'
  | 'opdrachtgever'
  | 'duurzaamheid'
  | 'technologie'

export interface ValuePerspectiveProps {
  perspective: PerspectiveType
  icon?: string
  insight: string
  evidence: string
}

export interface PerspectiveShift {
  label: 'begin' | 'tijdens' | 'nu'
  text: string
}

export interface OriginStoryProps {
  heroImage: { src: string; alt: string }
  anecdote: ReactNode
  perspectiveShift: [PerspectiveShift, PerspectiveShift, PerspectiveShift]
}

export interface TriangulationMethod {
  type: string
  name: string
  count: string
  finding: string
}

export interface TriangulationDiagramProps {
  methods: TriangulationMethod[]
  convergence: string
}

export interface ValuePerspectiveGridItem extends ValuePerspectiveProps {
  score: 1 | 2 | 3 | 4 | 5
}

export interface ValuePerspectiveGridProps {
  perspectives: ValuePerspectiveGridItem[]
  synthesis: string
}
