import type { Localized } from '../i18n/ui';

export interface Degree {
  institution: string;
  degree: Localized;
  place: Localized;
  year: number;
}

/** Del más reciente al más antiguo. */
export const education: Degree[] = [
  {
    institution: 'Universidad de Atacama',
    degree: {
      es: 'Ingeniero Civil en Computación e Informática',
      en: 'Computer and Information Engineering (Civil Engineering degree)',
    },
    place: { es: 'Copiapó, Chile', en: 'Copiapó, Chile' },
    year: 2012,
  },
  {
    institution: 'Liceo Tecnológico',
    degree: {
      es: 'Técnico Nivel Medio en Electrónica Industrial',
      en: 'Industrial Electronics Technician (vocational high school)',
    },
    place: { es: 'Copiapó, Chile', en: 'Copiapó, Chile' },
    year: 2005,
  },
];
