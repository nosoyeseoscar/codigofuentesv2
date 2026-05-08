import { defineCollection } from "astro:content";
import { z } from 'astro/zod'
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({
        pattern: '**/[^_]*.{md,mdx}',
        base: './src/content/blog'
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        categories: z.array(z.string()).default(['others']),
        tags: z.array(z.string()).default(['others']),
        authors: z.array(z.string()).default(['Oscar Fuentes']),
    }),
});

export const collections = { blog };