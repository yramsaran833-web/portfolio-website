import { z } from 'zod';

export const galleryItemSchema = z.object({
  title: z.string().optional().nullable(),
  image_url: z.string().url('Must be a valid URL'),
  album_id: z.string().uuid('Invalid album').optional().nullable(),
});

export type GalleryItemFormValues = z.infer<typeof galleryItemSchema>;
