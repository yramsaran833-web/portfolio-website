import { z } from 'zod';

export const reelSchema = z.object({
  title: z.string().min(2, 'Title is required'),
  url: z.string().url('Must be a valid Facebook Reel URL').refine(
    (url) => url.includes('facebook.com') || url.includes('fb.watch'), 
    'Must be a Facebook URL'
  ),
  sort_order: z.coerce.number().default(0),
  status: z.enum(['published', 'draft']).default('published'),
});

export type ReelFormValues = z.infer<typeof reelSchema>;
