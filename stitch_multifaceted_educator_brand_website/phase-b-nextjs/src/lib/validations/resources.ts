import { z } from 'zod';

export const resourceSchema = z.object({
  title: z.string().min(2, 'Title is required'),
  description: z.string().optional().nullable(),
  category_id: z.string().uuid('Invalid category').or(z.literal('')).optional().nullable(),
  file_url: z.string().url('Must be a valid URL'),
  resource_type: z.enum(['pdf', 'youtube']).default('pdf'),
});

export type ResourceFormValues = z.infer<typeof resourceSchema>;
