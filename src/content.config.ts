import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        summary: z.string(),
        stack: z.array(z.string()).min(1),
        company: z.string().optional(),
        year: z.number().int().optional(),
        order: z.number().int(),
        repo: z.url().optional(),
        demo: z.url().optional(),
        cover: image().optional(),
        coverAlt: z.string().optional(),
        gallery: z
          .array(
            z.object({
              src: image(),
              alt: z.string().min(1),
              caption: z.string().optional(),
            }),
          )
          .optional(),
        featured: z.boolean().default(true),
      })
      .refine((data) => !data.cover || Boolean(data.coverAlt?.trim()), {
        message: 'Si el proyecto tiene `cover`, agrega también `coverAlt` (texto alternativo).',
        path: ['coverAlt'],
      }),
});

export const collections = { projects };
