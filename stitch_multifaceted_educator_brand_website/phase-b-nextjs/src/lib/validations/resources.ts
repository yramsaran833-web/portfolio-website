import { z } from 'zod';

export const resourceSchema = z.object({
  title: z.string().min(2, 'Title is required'),
  description: z.string().optional().nullable(),
  category_id: z.string().uuid('Invalid category').optional().nullable(),
  file_url: z.string().url('Must be a valid URL').or(z.literal('')),
});

export type ResourceFormValues = z.infer<typeof resourceSchema>;
