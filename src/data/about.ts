import type { Localized } from '../i18n/ui';

export type PillarIcon = 'flow' | 'cloud' | 'chip' | 'check';

export interface Pillar {
  icon: PillarIcon;
  title: Localized;
  text: Localized;
}

/** Tarjetas que acompañan la bio en "Sobre mí". */
export const aboutPillars: Pillar[] = [
  {
    icon: 'flow',
    title: { es: 'End-to-end', en: 'End-to-end' },
    text: {
      es: 'De la propuesta técnica a la operación en producción.',
      en: 'From technical proposal to running in production.',
    },
  },
  {
    icon: 'cloud',
    title: { es: 'Web cloud', en: 'Cloud web' },
    text: {
      es: 'Python/Django, PHP/Symfony, APIs REST, CI/CD y Docker.',
      en: 'Python/Django, PHP/Symfony, REST APIs, CI/CD and Docker.',
    },
  },
  {
    icon: 'chip',
    title: { es: 'Software + hardware', en: 'Software + hardware' },
    text: {
      es: 'Integración con PLC, RFID, Modbus y edge computing.',
      en: 'Integration with PLCs, RFID, Modbus and edge computing.',
    },
  },
  {
    icon: 'check',
    title: { es: 'Gestión y calidad', en: 'Management & quality' },
    text: {
      es: 'Proyectos, licitaciones y continuidad operacional.',
      en: 'Projects, tenders and operational continuity.',
    },
  },
];
