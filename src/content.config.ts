import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      stack: z.array(z.string()).min(1),
      year: z.number().int(),
      order: z.number().int(),
      repo: z.url().optional(),
      demo: z.url().optional(),
      cover: image().optional(),
      featured: z.boolean().default(true),
    }),
});

export const collections = { projects };
