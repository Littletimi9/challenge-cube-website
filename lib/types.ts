import type { ReactNode } from 'react'

export interface RubricBadgeProps {
  criterium: 1 | 2 | 3 | 4 | 5
  label?: string
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
  title: string
  summary: string
  action: string
  finding: string
  meaning: string
  sourceId?: string
  image?: { src: string; alt: string }
  rubric?: 1 | 2 | 3 | 4 | 5
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
  context?: string
  sourceId?: string
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
  name: string
  type: 'primair' | 'secundair'
  finding: string
}

export interface TriangulationDiagramProps {
  methods: [TriangulationMethod, TriangulationMethod, TriangulationMethod]
  convergentInsight: string
}

export interface ValuePerspectiveGridItem extends ValuePerspectiveProps {
  score: 1 | 2 | 3 | 4 | 5
}

export interface ValuePerspectiveGridProps {
  perspectives: ValuePerspectiveGridItem[]
  synthesis: string
}
