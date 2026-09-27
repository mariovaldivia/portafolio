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
  location: { es: 'Chile · Remoto', en: 'Chile · Remote' },
  tagline: {
    es: 'Construyo software backend robusto y productos web pensados para durar.',
    en: 'I build robust backend software and web products designed to last.',
  },
  bio: {
    es: 'Soy ingeniero de software con foco en backend y aplicaciones web. Disfruto diseñar sistemas claros y mantenibles, trabajar con bases de datos relacionales y automatizar entornos para que el equipo avance más rápido.',
    en: "I'm a software engineer focused on backend and web applications. I enjoy designing clear, maintainable systems, working with relational databases and automating environments so the team can move faster.",
  },
  links: { email: '#', linkedin: '#', github: '#' },
  cv: { es: 'cv-es.pdf', en: 'cv-en.pdf' },
};
