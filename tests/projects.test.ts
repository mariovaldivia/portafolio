import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { sortProjects, splitProjectId } from '../src/lib/project-utils';

const DIR = join(process.cwd(), 'src/content/projects');

function slugs(lang: string): string[] {
  return readdirSync(join(DIR, lang))
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''))
    .sort();
}

function frontmatterValue(lang: string, slug: string, key: string): string | undefined {
  const source = readFileSync(join(DIR, lang, `${slug}.md`), 'utf8');
  return new RegExp(`^${key}:\\s*(.+)$`, 'm').exec(source)?.[1]?.trim();
}

describe('splitProjectId', () => {
  it('splits language and slug', () => {
    expect(splitProjectId('es/sicam')).toEqual({ lang: 'es', slug: 'sicam' });
    expect(splitProjectId('en/intranet-corporativa')).toEqual({
      lang: 'en',
      slug: 'intranet-corporativa',
    });
  });

  it('rejects ids outside a language folder', () => {
    expect(() => splitProjectId('sicam')).toThrow();
    expect(() => splitProjectId('fr/sicam')).toThrow();
  });
});

describe('sortProjects', () => {
  it('sorts by order without mutating the input', () => {
    const input = [{ data: { order: 3 } }, { data: { order: 1 } }, { data: { order: 2 } }];
    expect(sortProjects(input).map((p) => p.data.order)).toEqual([1, 2, 3]);
    expect(input.map((p) => p.data.order)).toEqual([3, 1, 2]);
  });
});

describe('project content', () => {
  it('has the same slugs in es and en', () => {
    expect(slugs('en')).toEqual(slugs('es'));
  });

  it('has at least 3 projects', () => {
    expect(slugs('es').length).toBeGreaterThanOrEqual(3);
  });

  it.each(slugs('es'))('%s shares order, year and company across languages', (slug) => {
    for (const key of ['order', 'year', 'company']) {
      expect(frontmatterValue('en', slug, key), key).toBe(frontmatterValue('es', slug, key));
    }
  });
});
