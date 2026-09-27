import {
  siCss,
  siDocker,
  siGit,
  siHtml5,
  siJavascript,
  siPhp,
  siPostgresql,
  siSymfony,
  type SimpleIcon,
} from 'simple-icons';
import type { Localized } from '../i18n/ui';

export interface Tech {
  name: string;
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
    title: { es: 'Backend', en: 'Backend' },
    items: [
      { name: 'PHP', icon: siPhp, brandDark: '#8993BE' },
      { name: 'Symfony', icon: siSymfony, brandDark: '#FFFFFF' },
    ],
  },
  {
    title: { es: 'Frontend', en: 'Frontend' },
    items: [
      { name: 'JavaScript', icon: siJavascript, brandLight: '#B89A00' },
      { name: 'HTML', icon: siHtml5 },
      { name: 'CSS', icon: siCss, brandDark: '#9B6AD6' },
    ],
  },
  {
    title: { es: 'Bases de datos', en: 'Databases' },
    items: [{ name: 'PostgreSQL', icon: siPostgresql, brandDark: '#6B8CFF' }],
  },
  {
    title: { es: 'DevOps y herramientas', en: 'DevOps & Tools' },
    items: [
      { name: 'Docker', icon: siDocker },
      { name: 'Git', icon: siGit },
    ],
  },
];
