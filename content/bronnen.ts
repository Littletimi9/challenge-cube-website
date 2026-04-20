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
    id: 'placeholder-1',
    title: '[INVULLEN: titel]',
    authors: '[INVULLEN: auteur(s)]',
    year: 2025,
    type: 'artikel',
    reference:
      '[INVULLEN: APA-referentie. Auteur, A. (2025). Titel. Tijdschrift, 1(1), 1–10.]',
    link: 'https://example.com',
  },
  {
    id: 'placeholder-2',
    title: '[INVULLEN: interviewronde 1]',
    authors: 'Eigen onderzoek',
    year: 2025,
    type: 'interview',
    reference:
      '[INVULLEN: APA-referentie voor primair onderzoek. Kaat, J. (2025). Interviews pauzegedrag studenten.]',
  },
]

export const typeLabels: Record<SourceType, string> = {
  interview: 'Interviews',
  observatie: 'Observaties',
  artikel: 'Artikelen',
  boek: 'Boeken',
  website: 'Websites',
}
