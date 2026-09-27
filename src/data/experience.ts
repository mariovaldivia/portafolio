import type { Localized } from '../i18n/ui';

export interface Highlight {
  text: Localized;
  /** Muestra la píldora "★" de logro destacado. */
  badge?: boolean;
}

export interface Job {
  company: string;
  url?: string;
  role: string;
  /** 'AAAA-MM' */
  start: string;
  /** 'AAAA-MM' o null si es el puesto actual. */
  end: string | null;
  mode: Localized;
  highlights: Highlight[];
  stack: string[];
}

/** Del más reciente al más antiguo. */
export const experience: Job[] = [
  {
    company: 'Ninja Excel',
    role: 'Software Engineer L2',
    start: '2024-06',
    end: null,
    mode: { es: 'Remoto', en: 'Remote' },
    highlights: [{ text: { es: 'Top Performer 2025', en: 'Top Performer 2025' }, badge: true }],
    stack: ['PHP', 'Symfony', 'JavaScript', 'HTML', 'Docker', 'PostgreSQL'],
  },
];
