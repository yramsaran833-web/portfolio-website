import { z } from 'zod';

export const testimonialSchema = z.object({
  client_name: z.string().min(2, 'Name is required'),
  client_role: z.string().optional().nullable(),
  content: z.string().min(5, 'Content is required'),
  avatar_url: z.string().url('Must be a valid URL').optional().nullable().or(z.literal('')),
  rating: z.coerce.number().min(1).max(5),
  is_featured: z.boolean(),
  sort_order: z.coerce.number(),
});

export type TestimonialFormValues = z.infer<typeof testimonialSchema>;
