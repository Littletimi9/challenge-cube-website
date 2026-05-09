export type SourceType =
  | 'interview'
  | 'observatie'
  | 'artikel'
  | 'boek'
  | 'website'

export interface Source {
  id: string
  title: string
  authors: string
  year: number
  type: SourceType
  reference: string
  link?: string
}

export const sources: Source[] = [
  {
    id: 'osterwalder-2014',
    title: 'Value proposition design',
    authors: 'Osterwalder, A., Pigneur, Y., Bernarda, G., & Smith, A.',
    year: 2014,
    type: 'boek',
    reference:
      'Osterwalder, A., Pigneur, Y., Bernarda, G., & Smith, A. (2014). Value proposition design: How to create products and services customers want. Wiley.',
  },
  {
    id: 'interview-isa-2025',
    title: 'Interview met Isa, 6 VWO over snackgedrag op school',
    authors: 'Eigen onderzoek',
    year: 2025,
    type: 'interview',
    reference:
      'Hekking, T. (2025). Interview met Isa, 6 VWO over snackgedrag op school [Audio-opname en transcript]. Challenge Table.',
  },
]

export const typeLabels: Record<SourceType, string> = {
  interview: 'Interviews',
  observatie: 'Observaties',
  artikel: 'Artikelen',
  boek: 'Boeken',
  website: 'Websites',
}
