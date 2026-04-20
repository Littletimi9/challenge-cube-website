import type { MDXComponents } from 'mdx/types'

import PageHead from '@/components/rubric/PageHead'
import SectionHeading from '@/components/rubric/SectionHeading'
import RubricBadge from '@/components/rubric/RubricBadge'
import SourceLink from '@/components/rubric/SourceLink'
import EvidenceCard from '@/components/rubric/EvidenceCard'
import EvidenceGrid from '@/components/rubric/EvidenceGrid'
import Triangulation from '@/components/rubric/Triangulation'
import QuoteBlock from '@/components/rubric/QuoteBlock'
import ReflectionGrid from '@/components/rubric/ReflectionGrid'
import MethodCard from '@/components/rubric/MethodCard'
import Timeline from '@/components/rubric/Timeline'
import CriteriaTable from '@/components/rubric/CriteriaTable'
import PageNav from '@/components/rubric/PageNav'
import ValuePerspectives from '@/components/rubric/ValuePerspectives'

export function useMDXComponents(): MDXComponents {
  return {
    PageHead,
    SectionHeading,
    RubricBadge,
    SourceLink,
    EvidenceCard,
    EvidenceGrid,
    Triangulation,
    QuoteBlock,
    ReflectionGrid,
    MethodCard,
    Timeline,
    CriteriaTable,
    PageNav,
    ValuePerspectives,
  }
}
