import { z } from 'zod';

export const printingProjectSchema = z.object({
  title: z.string().min(2, 'Title is required'),
  description: z.string().optional().nullable(),
  image_url: z.string().url('Must be a valid URL'),
  sort_order: z.coerce.number().default(0),
  status: z.enum(['draft', 'published', 'archived']).default('published'),
});

export type PrintingProjectFormValues = z.infer<typeof printingProjectSchema>;
