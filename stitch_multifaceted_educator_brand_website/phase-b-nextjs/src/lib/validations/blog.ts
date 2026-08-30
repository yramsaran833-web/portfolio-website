import { z } from 'zod';

export const blogPostSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters long'),
  slug: z
    .string()
    .min(3, 'Slug must be at least 3 characters long')
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug can only contain lowercase letters, numbers, and hyphens'),
  content: z.string().min(10, 'Content is required (min 10 chars)'),
  summary: z.string().optional(),
  cover_image_url: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  category_id: z.string().uuid('Invalid category').optional().nullable(),
  published: z.boolean().default(false),
});

export type BlogPostFormValues = z.infer<typeof blogPostSchema>;
