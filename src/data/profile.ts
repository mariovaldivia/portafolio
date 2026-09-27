import type { Localized } from '../i18n/ui';

export interface Profile {
  name: string;
  title: string;
  location: Localized;
  tagline: Localized;
  bio: Localized;
  /** Usa 'mailto:tu@correo.com' y URLs completas. '#' = pendiente. */
  links: { email: string; linkedin: string; github: string };
  /** Archivos dentro de public/. */
  cv: Localized;
}

export const profile: Profile = {
  name: 'Mario Valdivia',
  title: 'Software Engineer',
  location: { es: 'Copiapó, Chile · Remoto', en: 'Copiapó, Chile · Remote' },
  tagline: {
    es: 'Más de 12 años construyendo soluciones end-to-end: desde plataformas web en la nube hasta integraciones con hardware industrial.',
    en: 'Over 12 years building end-to-end solutions: from cloud web platforms to industrial hardware integrations.',
  },
  bio: {
    es: 'Ingeniero de Software con más de 12 años de experiencia desarrollando soluciones tecnológicas end-to-end, en entornos de desarrollo web cloud con tecnologías y prácticas modernas (Python/Django, PHP/Symfony, APIs REST, CI/CD, Docker). Tengo experiencia en gestión de proyectos de ingeniería, formulación de propuestas técnicas, licitaciones y entrega de soluciones críticas, con foco en eficiencia, calidad y continuidad operacional.',
    en: 'Software Engineer with over 12 years of experience building end-to-end technology solutions in cloud web environments with modern tools and practices (Python/Django, PHP/Symfony, REST APIs, CI/CD, Docker). I have experience managing engineering projects, preparing technical proposals and tenders, and delivering mission-critical solutions, with a focus on efficiency, quality and operational continuity.',
  },
  links: {
    email: 'mailto:mario.valdivia.dev@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mario-valdivia',
    github: 'https://github.com/mariovaldivia',
  },
  cv: { es: 'cv-es.pdf', en: 'cv-en.pdf' },
};
