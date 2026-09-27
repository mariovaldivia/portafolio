import type { Lang } from '../i18n/ui';
import { isLang } from '../i18n/utils';

/** 'es/api-facturacion' → { lang: 'es', slug: 'api-facturacion' } */
export function splitProjectId(id: string): { lang: Lang; slug: string } {
  const [lang, ...rest] = id.split('/');
  if (!isLang(lang) || rest.length === 0) {
    throw new Error(`El proyecto "${id}" debe estar dentro de una carpeta de idioma (es/ o en/)`);
  }
  return { lang, slug: rest.join('/') };
}

export function sortProjects<T extends { data: { order: number } }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.data.order - b.data.order);
}
