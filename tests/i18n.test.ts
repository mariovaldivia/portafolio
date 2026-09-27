import { describe, expect, it } from 'vitest';
import { ui } from '../src/i18n/ui';
import {
  getAlternatePath,
  getLangFromUrl,
  isLang,
  localizePath,
  useTranslations,
  withBase,
} from '../src/i18n/utils';

const BASE = '/portafolio';
const url = (path: string) => new URL(`https://usuario.github.io${path}`);

describe('ui dictionary', () => {
  it('has the same keys in es and en', () => {
    expect(Object.keys(ui.en).sort()).toEqual(Object.keys(ui.es).sort());
  });

  it('has no empty strings', () => {
    for (const lang of ['es', 'en'] as const) {
      for (const [key, value] of Object.entries(ui[lang])) {
        expect(value.trim(), `${lang}.${key}`).not.toBe('');
      }
    }
  });
});

describe('isLang', () => {
  it('accepts supported languages only', () => {
    expect(isLang('es')).toBe(true);
    expect(isLang('en')).toBe(true);
    expect(isLang('fr')).toBe(false);
    expect(isLang(undefined)).toBe(false);
    expect(isLang('toString')).toBe(false);
  });
});

describe('getLangFromUrl', () => {
  it('reads the language after the base', () => {
    expect(getLangFromUrl(url('/portafolio/es/'), BASE)).toBe('es');
    expect(getLangFromUrl(url('/portafolio/en/proyectos/demo/'), BASE)).toBe('en');
  });

  it('falls back to the default language', () => {
    expect(getLangFromUrl(url('/portafolio/'), BASE)).toBe('es');
    expect(getLangFromUrl(url('/portafolio/fr/'), BASE)).toBe('es');
  });

  it('works with a root base', () => {
    expect(getLangFromUrl(url('/en/'), '/')).toBe('en');
  });
});

describe('useTranslations', () => {
  it('returns the string for the language', () => {
    expect(useTranslations('es')('nav.about')).toBe('Sobre mí');
    expect(useTranslations('en')('nav.about')).toBe('About');
  });
});

describe('localizePath', () => {
  it('builds the home path', () => {
    expect(localizePath('es', '', BASE)).toBe('/portafolio/es/');
    expect(localizePath('en', undefined, '/portafolio/')).toBe('/portafolio/en/');
  });

  it('builds nested paths with a trailing slash', () => {
    expect(localizePath('en', 'proyectos/demo', BASE)).toBe('/portafolio/en/proyectos/demo/');
    expect(localizePath('es', '/proyectos/demo/', BASE)).toBe('/portafolio/es/proyectos/demo/');
  });

  it('works with a root base', () => {
    expect(localizePath('es', '', '/')).toBe('/es/');
  });
});

describe('withBase', () => {
  it('prefixes public files with the base', () => {
    expect(withBase('cv-es.pdf', BASE)).toBe('/portafolio/cv-es.pdf');
    expect(withBase('/favicon.svg', '/portafolio/')).toBe('/portafolio/favicon.svg');
    expect(withBase('cv-en.pdf', '/')).toBe('/cv-en.pdf');
  });
});

describe('getAlternatePath', () => {
  it('switches the language on the home page', () => {
    expect(getAlternatePath(url('/portafolio/en/'), 'es', BASE)).toBe('/portafolio/es/');
  });

  it('keeps the project slug', () => {
    expect(getAlternatePath(url('/portafolio/es/proyectos/demo/'), 'en', BASE)).toBe(
      '/portafolio/en/proyectos/demo/',
    );
  });

  it('handles paths without a language', () => {
    expect(getAlternatePath(url('/portafolio/'), 'en', BASE)).toBe('/portafolio/en/');
  });
});
