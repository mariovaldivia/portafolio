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
  'nav.skills': 'Habilidades',
  'nav.projects': 'Proyectos',
  'nav.contact': 'Contacto',
  'anchor.about': 'sobre-mi',
  'anchor.experience': 'experiencia',
  'anchor.skills': 'habilidades',
  'anchor.projects': 'proyectos',
  'anchor.contact': 'contacto',
  'a11y.skip': 'Saltar al contenido',
  'theme.toggle': 'Cambiar entre tema claro y oscuro',
  'lang.switch': 'Idioma',
  'meta.description':
    'Portafolio de Mario Valdivia, Software Engineer en Chile: experiencia, habilidades y proyectos destacados.',
  'hero.cta.projects': 'Ver proyectos',
  'hero.cta.cv': 'Descargar CV',
  'about.kicker': '01 — Sobre mí',
  'experience.kicker': '02 — Experiencia',
  'experience.title': 'Carrera',
  'experience.present': 'actualidad',
  'experience.highlight': 'Logro destacado',
  'skills.kicker': '03 — Habilidades',
  'skills.title': 'Stack',
  'projects.kicker': '04 — Proyectos',
  'projects.title': 'Proyectos destacados',
  'projects.more': 'Ver detalle',
  'projects.back': 'Volver a proyectos',
  'projects.repo': 'Repositorio',
  'projects.demo': 'Demo',
  'contact.kicker': '05 — Contacto',
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
  'nav.skills': 'Skills',
  'nav.projects': 'Projects',
  'nav.contact': 'Contact',
  'anchor.about': 'about',
  'anchor.experience': 'experience',
  'anchor.skills': 'skills',
  'anchor.projects': 'projects',
  'anchor.contact': 'contact',
  'a11y.skip': 'Skip to content',
  'theme.toggle': 'Toggle light and dark theme',
  'lang.switch': 'Language',
  'meta.description':
    'Portfolio of Mario Valdivia, Software Engineer based in Chile: experience, skills and featured projects.',
  'hero.cta.projects': 'View projects',
  'hero.cta.cv': 'Download CV',
  'about.kicker': '01 — About',
  'experience.kicker': '02 — Experience',
  'experience.title': 'Career',
  'experience.present': 'Present',
  'experience.highlight': 'Key achievement',
  'skills.kicker': '03 — Skills',
  'skills.title': 'Stack',
  'projects.kicker': '04 — Projects',
  'projects.title': 'Featured projects',
  'projects.more': 'View details',
  'projects.back': 'Back to projects',
  'projects.repo': 'Repository',
  'projects.demo': 'Demo',
  'contact.kicker': '05 — Contact',
  'contact.title': "Let's talk",
  'contact.text': "I'm open to new opportunities and collaborations.",
  'footer.built': 'Built with Astro',
};

export const ui: Record<Lang, Record<UiKey, string>> = { es, en };
