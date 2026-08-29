import { z } from 'zod';

export const galleryItemSchema = z.object({
  title: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  image_url: z.string().url('Must be a valid URL'),
  album_id: z.string().uuid('Invalid album').optional().nullable(),
  alt_text: z.string().optional().nullable(),
  is_featured: z.boolean(),
  sort_order: z.coerce.number(),
  status: z.enum(['published', 'unpublished']),
});

export type GalleryItemFormValues = z.infer<typeof galleryItemSchema>;
