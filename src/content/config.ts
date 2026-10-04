import { defineCollection, z } from 'astro:content';

const lessons = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        when: z.string(),
        area: z.enum(['work', 'personal']),
        project: z.string(),
        summary: z.string(),
        rule: z.string(),
    }),
});

export const collections = { lessons };
