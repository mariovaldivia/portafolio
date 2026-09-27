import { ui, type Lang } from '../i18n/ui';

const LOCALES: Record<Lang, string> = { es: 'es-CL', en: 'en-US' };

/** '2024-06' → 'jun 2024' (es) / 'Jun 2024' (en). */
export function formatYearMonth(value: string, lang: Lang): string {
  const match = /^(\d{4})-(\d{2})$/.exec(value);
  if (!match) throw new Error(`Fecha inválida "${value}": se esperaba el formato AAAA-MM`);
  const date = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, 1));
  return new Intl.DateTimeFormat(LOCALES[lang], {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function formatDateRange(start: string, end: string | null, lang: Lang): string {
  const to = end === null ? ui[lang]['experience.present'] : formatYearMonth(end, lang);
  return `${formatYearMonth(start, lang)} — ${to}`;
}
