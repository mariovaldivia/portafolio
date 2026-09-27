import { defaultLang, languages, ui, type Lang, type UiKey } from './ui';

const BASE_URL: string = import.meta.env.BASE_URL;

function withTrailingSlash(path: string): string {
  return path.endsWith('/') ? path : `${path}/`;
}

function trimSlashes(path: string): string {
  return path.replace(/^\/+|\/+$/g, '');
}

/** Segmentos de la ruta después de `base`, por ejemplo ['es', 'proyectos', 'demo']. */
function pathSegments(url: URL, base: string): string[] {
  const prefix = withTrailingSlash(base);
  const pathname = withTrailingSlash(url.pathname);
  const relative = pathname.startsWith(prefix) ? pathname.slice(prefix.length) : pathname;
  return trimSlashes(relative).split('/').filter(Boolean);
}

export function isLang(value: string | undefined): value is Lang {
  return value !== undefined && Object.hasOwn(languages, value);
}

export function getLangFromUrl(url: URL, base: string = BASE_URL): Lang {
  const [first] = pathSegments(url, base);
  return isLang(first) ? first : defaultLang;
}

export function useTranslations(lang: Lang): (key: UiKey) => string {
  return (key) => ui[lang][key];
}

/** Ruta a una página del sitio en `lang`. Siempre termina en '/'. */
export function localizePath(lang: Lang, path: string = '', base: string = BASE_URL): string {
  const rest = trimSlashes(path);
  return `${withTrailingSlash(base)}${lang}/${rest ? `${rest}/` : ''}`;
}

/** Ruta a un archivo de `public/` (CV, favicon…). */
export function withBase(file: string, base: string = BASE_URL): string {
  return `${withTrailingSlash(base)}${trimSlashes(file)}`;
}

/** La misma página en otro idioma. */
export function getAlternatePath(url: URL, target: Lang, base: string = BASE_URL): string {
  const segments = pathSegments(url, base);
  if (isLang(segments[0])) segments.shift();
  return localizePath(target, segments.join('/'), base);
}
