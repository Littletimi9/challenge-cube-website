import type { MDXComponents } from 'mdx/types'

import RubricBadge from '@/components/RubricBadge'
import SourceLink from '@/components/SourceLink'
import ReflectionCallout from '@/components/ReflectionCallout'
import EvidenceCard from '@/components/EvidenceCard'
import QuoteBlock from '@/components/QuoteBlock'
import MethodCard from '@/components/MethodCard'
import Timeline from '@/components/Timeline'
import PainGainMap from '@/components/PainGainMap'
import CriteriaTable from '@/components/CriteriaTable'
import ValuePerspective from '@/components/ValuePerspective'
import OriginStory from '@/components/OriginStory'
import TriangulationDiagram from '@/components/TriangulationDiagram'
import ValuePerspectiveGrid from '@/components/ValuePerspectiveGrid'

export function useMDXComponents(): MDXComponents {
  return {
    RubricBadge,
    SourceLink,
    ReflectionCallout,
    EvidenceCard,
    QuoteBlock,
    MethodCard,
    Timeline,
    PainGainMap,
    CriteriaTable,
    ValuePerspective,
    OriginStory,
    TriangulationDiagram,
    ValuePerspectiveGrid,
  }
}
