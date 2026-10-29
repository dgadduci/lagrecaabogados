import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const actualidad = defineCollection({
  loader: glob({ base: './src/content/actualidad', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string().trim().min(3),
        publishedAt: z.coerce.date(),
        author: z.string().trim().min(1).optional(),
        category: z.string().trim().min(1),
        description: z.string().trim().min(40).max(180),
        image: image().optional(),
        imageAlt: z.string().trim().min(1).optional(),
        seoTitle: z.string().trim().min(3).max(70),
        seoDescription: z.string().trim().min(40).max(180),
        reviewStatus: z.enum(['pending', 'approved']).default('pending'),
      })
      .refine((article) => !article.image || Boolean(article.imageAlt), {
        message: 'La imagen requiere un texto alternativo descriptivo.',
        path: ['imageAlt'],
      }),
});

export const collections = { actualidad };
