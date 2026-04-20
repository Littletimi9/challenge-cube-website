import type { RubricRowData } from '@/components/home/RubricRow'

export const rubrics: RubricRowData[] = [
  {
    number: '01',
    name: 'Nieuwsgierigheid',
    slug: 'nieuwsgierigheid',
    description:
      'Waarom dit onderwerp? De anekdote achter het project en hoe mijn blik zich ontwikkelde.',
    ambition: '8+',
    evidenceCount: '3 bewijsstukken',
  },
  {
    number: '02',
    name: 'Onderzoek',
    slug: 'onderzoek',
    description:
      'Interviews, observaties en deskresearch. Pains, gains en wat studenten écht missen in pauzes.',
    ambition: '8+',
    evidenceCount: '5 bewijsstukken',
  },
  {
    number: '03',
    name: 'Concept',
    slug: 'concept',
    description:
      'Van eerste schets tot werkend prototype. De iteraties en de feedback die alles veranderden.',
    ambition: '8+',
    evidenceCount: '4 iteraties',
  },
  {
    number: '04',
    name: 'Methoden',
    slug: 'methoden',
    description:
      "Double Diamond, Value Proposition Canvas, 5 Why's. Waarom deze modellen en wat ze opleverden.",
    ambition: '8+',
    evidenceCount: '3 modellen',
  },
  {
    number: '05',
    name: 'Validatie',
    slug: 'validatie',
    description:
      'Testcriteria, meervoudige waardeperspectieven en het bewijs dat het concept werkt.',
    ambition: '8+',
    evidenceCount: '6 criteria',
  },
]
