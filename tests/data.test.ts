import { describe, expect, it } from 'vitest';
import { formatDateRange, formatYearMonth } from '../src/lib/dates';
import { profile } from '../src/data/profile';
import { education } from '../src/data/education';
import { experience } from '../src/data/experience';
import { skillCategories } from '../src/data/skills';
import { terminalLines } from '../src/data/terminal';

/** Busca recursivamente objetos { es, en } (textos bilingües). */
function collectLocalized(
  value: unknown,
  path: string,
  out: Array<{ path: string; value: Record<string, unknown> }> = [],
) {
  if (Array.isArray(value)) {
    value.forEach((item, i) => collectLocalized(item, `${path}[${i}]`, out));
  } else if (value !== null && typeof value === 'object') {
    const keys = Object.keys(value);
    if (keys.length === 2 && keys.includes('es') && keys.includes('en')) {
      out.push({ path, value: value as Record<string, unknown> });
    } else {
      for (const [key, child] of Object.entries(value))
        collectLocalized(child, `${path}.${key}`, out);
    }
  }
  return out;
}

describe('formatYearMonth', () => {
  it('formats per language', () => {
    expect(formatYearMonth('2024-06', 'es')).toBe('jun 2024');
    expect(formatYearMonth('2024-06', 'en')).toBe('Jun 2024');
  });

  it('rejects invalid values', () => {
    expect(() => formatYearMonth('2024/06', 'es')).toThrow('AAAA-MM');
  });
});

describe('formatDateRange', () => {
  it('uses the present label for ongoing jobs', () => {
    expect(formatDateRange('2024-06', null, 'es')).toBe('jun 2024 — actualidad');
    expect(formatDateRange('2024-06', null, 'en')).toBe('Jun 2024 — Present');
  });

  it('formats closed ranges', () => {
    expect(formatDateRange('2022-03', '2024-05', 'en')).toBe('Mar 2022 — May 2024');
  });
});

describe('bilingual data', () => {
  const entries = collectLocalized({ profile, experience, education, skillCategories }, 'data');

  it('finds bilingual fields', () => {
    expect(entries.length).toBeGreaterThan(5);
  });

  it.each(entries.map((e) => [e.path, e.value] as const))('%s has es and en', (_path, value) => {
    expect(typeof value.es === 'string' && value.es.trim().length > 0).toBe(true);
    expect(typeof value.en === 'string' && value.en.trim().length > 0).toBe(true);
  });
});

describe('experience', () => {
  it('is sorted from most recent to oldest', () => {
    const starts = experience.map((job) => job.start);
    expect(starts).toEqual([...starts].sort().reverse());
  });

  it('includes the current job', () => {
    expect(experience[0]).toMatchObject({ company: 'Ninja Excel', end: null });
  });

  it('has a bilingual role for every job', () => {
    for (const job of experience) {
      expect(job.role.es.trim(), job.company).not.toBe('');
      expect(job.role.en.trim(), job.company).not.toBe('');
    }
  });
});

describe('education', () => {
  it('is sorted from most recent to oldest', () => {
    const years = education.map((item) => item.year);
    expect(years).toEqual([...years].sort((a, b) => b - a));
  });
});

describe('skills', () => {
  it('every icon has an SVG path', () => {
    for (const tech of skillCategories.flatMap((c) => c.items)) {
      if (tech.icon) expect(tech.icon.path.length, tech.icon.title).toBeGreaterThan(0);
    }
  });
});

describe('terminal', () => {
  it('starts with a command', () => {
    expect(terminalLines[0]?.kind).toBe('cmd');
  });
});
