import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';
import { sortProjects, splitProjectId } from './project-utils';

export type ProjectEntry = CollectionEntry<'projects'>;

export async function getProjectsByLang(
  lang: Lang,
  { featuredOnly = false }: { featuredOnly?: boolean } = {},
): Promise<ProjectEntry[]> {
  const entries = await getCollection(
    'projects',
    (entry) => splitProjectId(entry.id).lang === lang && (!featuredOnly || entry.data.featured),
  );
  return sortProjects(entries);
}
