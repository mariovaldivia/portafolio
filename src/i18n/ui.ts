export const languages = { es: 'Español', en: 'English' } as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

/** Texto disponible en todos los idiomas del sitio. */
export type Localized = Record<Lang, string>;

const es = {
  'nav.label': 'Navegación principal',
  'nav.menu': 'Menú',
  'nav.about': 'Sobre mí',
  'nav.experience': 'Experiencia',
  'nav.education': 'Educación',
  'nav.skills': 'Habilidades',
  'nav.projects': 'Proyectos',
  'nav.contact': 'Contacto',
  'anchor.about': 'sobre-mi',
  'anchor.experience': 'experiencia',
  'anchor.education': 'educacion',
  'anchor.skills': 'habilidades',
  'anchor.projects': 'proyectos',
  'anchor.contact': 'contacto',
  'a11y.skip': 'Saltar al contenido',
  'theme.toggle': 'Cambiar entre tema claro y oscuro',
  'lang.switch': 'Idioma',
  'meta.description':
    'Mario Valdivia, Software Engineer en Chile con más de 12 años de experiencia en PHP/Symfony, Python/Django y sistemas integrados con hardware.',
  'hero.cta.projects': 'Ver proyectos',
  'hero.cta.cv': 'Descargar CV',
  'about.kicker': '01 — Sobre mí',
  'experience.kicker': '02 — Experiencia',
  'experience.title': 'Carrera',
  'experience.present': 'actualidad',
  'experience.highlight': 'Logro destacado',
  'education.kicker': '03 — Educación',
  'education.title': 'Formación',
  'skills.kicker': '04 — Habilidades',
  'skills.title': 'Stack',
  'projects.kicker': '05 — Proyectos',
  'projects.title': 'Proyectos destacados',
  'projects.more': 'Ver detalle',
  'projects.back': 'Volver a proyectos',
  'projects.repo': 'Repositorio',
  'projects.demo': 'Demo',
  'contact.kicker': '06 — Contacto',
  'contact.title': '¿Conversamos?',
  'contact.text': 'Estoy abierto a nuevas oportunidades y colaboraciones.',
  'footer.built': 'Hecho con Astro',
} as const;

export type UiKey = keyof typeof es;

const en: Record<UiKey, string> = {
  'nav.label': 'Main navigation',
  'nav.menu': 'Menu',
  'nav.about': 'About',
  'nav.experience': 'Experience',
  'nav.education': 'Education',
  'nav.skills': 'Skills',
  'nav.projects': 'Projects',
  'nav.contact': 'Contact',
  'anchor.about': 'about',
  'anchor.experience': 'experience',
  'anchor.education': 'education',
  'anchor.skills': 'skills',
  'anchor.projects': 'projects',
  'anchor.contact': 'contact',
  'a11y.skip': 'Skip to content',
  'theme.toggle': 'Toggle light and dark theme',
  'lang.switch': 'Language',
  'meta.description':
    'Mario Valdivia, Chile-based Software Engineer with over 12 years of experience in PHP/Symfony, Python/Django and hardware-integrated systems.',
  'hero.cta.projects': 'View projects',
  'hero.cta.cv': 'Download CV',
  'about.kicker': '01 — About',
  'experience.kicker': '02 — Experience',
  'experience.title': 'Career',
  'experience.present': 'Present',
  'experience.highlight': 'Key achievement',
  'education.kicker': '03 — Education',
  'education.title': 'Education',
  'skills.kicker': '04 — Skills',
  'skills.title': 'Stack',
  'projects.kicker': '05 — Projects',
  'projects.title': 'Featured projects',
  'projects.more': 'View details',
  'projects.back': 'Back to projects',
  'projects.repo': 'Repository',
  'projects.demo': 'Demo',
  'contact.kicker': '06 — Contact',
  'contact.title': "Let's talk",
  'contact.text': "I'm open to new opportunities and collaborations.",
  'footer.built': 'Built with Astro',
};

export const ui: Record<Lang, Record<UiKey, string>> = { es, en };
