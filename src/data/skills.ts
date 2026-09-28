import {
  siClaude,
  siBootstrap,
  siCss,
  siDjango,
  siDocker,
  siGit,
  siGithubactions,
  siGnubash,
  siJira,
  siHtml5,
  siJavascript,
  siJquery,
  siLaravel,
  siMysql,
  siPhp,
  siPostgresql,
  siPython,
  siRedis,
  siSentry,
  siSonarqubeserver,
  siSymfony,
  siTailwindcss,
  siVuedotjs,
  type SimpleIcon,
} from 'simple-icons';
import type { Localized } from '../i18n/ui';

export interface Tech {
  /** Texto fijo, o uno por idioma cuando cambia la traducción. */
  name: string | Localized;
  /** Ícono de simple-icons. Si falta, el chip muestra solo texto. */
  icon?: SimpleIcon;
  /** Color en hover (tema claro). Por defecto, el color oficial del ícono. */
  brandLight?: string;
  /** Color en hover (tema oscuro). Por defecto, brandLight o el color oficial. */
  brandDark?: string;
}

export interface SkillCategory {
  title: Localized;
  items: Tech[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: { es: 'Lenguajes', en: 'Languages' },
    items: [
      { name: 'Python', icon: siPython, brandDark: '#5A9FD4' },
      { name: 'PHP', icon: siPhp, brandDark: '#8993BE' },
      { name: 'JavaScript', icon: siJavascript, brandLight: '#B89A00' },
      { name: 'C#' },
    ],
  },
  {
    title: { es: 'Frameworks y librerías', en: 'Frameworks & Libraries' },
    items: [
      { name: 'Django', icon: siDjango, brandDark: '#44B78B' },
      { name: 'Symfony', icon: siSymfony, brandDark: '#FFFFFF' },
      { name: 'Laravel', icon: siLaravel },
      { name: 'Vue.js', icon: siVuedotjs },
    ],
  },
  {
    title: { es: 'Bases de datos', en: 'Databases' },
    items: [
      { name: 'PostgreSQL', icon: siPostgresql, brandDark: '#6B8CFF' },
      { name: 'MySQL', icon: siMysql, brandDark: '#5D9BD6' },
      { name: 'SQL Server' },
      { name: 'Redis', icon: siRedis },
    ],
  },
  {
    title: { es: 'DevOps y herramientas', en: 'DevOps & Tools' },
    items: [
      { name: 'Docker', icon: siDocker },
      { name: 'CI/CD' },
      { name: 'AWS' },
      { name: 'GitHub Actions', icon: siGithubactions },
      { name: 'Git', icon: siGit },
      { name: 'Bash', icon: siGnubash },
      { name: 'Testing' },
      { name: 'Jira', icon: siJira, brandDark: '#4C9AFF' },
      { name: 'SonarQube', icon: siSonarqubeserver, brandDark: '#4E9BEF' },
      { name: 'Sentry', icon: siSentry, brandDark: '#A99BD6' },
    ],
  },
  {
    title: { es: 'Tecnologías web', en: 'Web' },
    items: [
      { name: 'HTML', icon: siHtml5 },
      { name: 'CSS', icon: siCss, brandDark: '#9B6AD6' },
      { name: 'Tailwind CSS', icon: siTailwindcss },
      { name: 'Bootstrap', icon: siBootstrap, brandDark: '#A07CF0' },
      { name: 'jQuery', icon: siJquery, brandDark: '#4DA3E0' },
    ],
  },
  {
    title: { es: 'Prácticas', en: 'Practices' },
    items: [
      { name: { es: 'APIs REST', en: 'REST APIs' } },
      { name: { es: 'Diseño de sistemas', en: 'System design' } },
      { name: 'Scrum' },
      { name: 'Claude Code', icon: siClaude },
    ],
  },
  {
    title: { es: 'Idiomas', en: 'Spoken languages' },
    items: [
      { name: { es: 'Español · nativo', en: 'Spanish · native' } },
      { name: { es: 'Inglés · B1 intermedio', en: 'English · B1 intermediate' } },
    ],
  },
];
