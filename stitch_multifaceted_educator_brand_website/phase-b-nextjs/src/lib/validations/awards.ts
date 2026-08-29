import { z } from 'zod';

export const awardSchema = z.object({
  title: z.string().min(2, 'Title is required'),
  issuer: z.string().optional().nullable(),
  issue_date: z.string().optional().nullable().or(z.literal('')),
  image_url: z.string().url('Must be a valid URL').optional().nullable().or(z.literal('')),
  description: z.string().optional().nullable(),
  sort_order: z.coerce.number(),
});

export type AwardFormValues = z.infer<typeof awardSchema>;
