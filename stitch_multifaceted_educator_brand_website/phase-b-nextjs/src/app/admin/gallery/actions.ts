'use server'

import { createClient } from '@/lib/supabase/server'
import { galleryItemSchema, type GalleryItemFormValues } from '@/lib/validations/gallery'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createGalleryItem(data: GalleryItemFormValues) {
  const supabase = await createClient()
  
  const parsed = galleryItemSchema.safeParse(data)
  if (!parsed.success) {
    return { error: 'Invalid form data' }
  }

  const { data: user, error: authError } = await supabase.auth.getUser()
  if (authError || !user?.user) {
    return { error: 'Unauthorized' }
  }

  const { error } = await supabase.from('gallery_items').insert(parsed.data)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/gallery')
  redirect('/admin/gallery')
}

export async function createMultipleGalleryItems(dataArray: GalleryItemFormValues[]) {
  const supabase = await createClient()
  
  const { data: user, error: authError } = await supabase.auth.getUser()
  if (authError || !user?.user) {
    return { error: 'Unauthorized' }
  }

  // Validate all
  const parsedArray = []
  for (const data of dataArray) {
    const parsed = galleryItemSchema.safeParse(data)
    if (!parsed.success) return { error: 'Invalid form data in one of the items' }
    parsedArray.push(parsed.data)
  }

  const { error } = await supabase.from('gallery_items').insert(parsedArray)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/gallery')
  redirect('/admin/gallery')
}

export async function updateGalleryItem(id: string, data: GalleryItemFormValues) {
  const supabase = await createClient()
  
  const parsed = galleryItemSchema.safeParse(data)
  if (!parsed.success) {
    return { error: 'Invalid form data' }
  }

  const { error } = await supabase.from('gallery_items').update(parsed.data).eq('id', id)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/gallery')
  redirect('/admin/gallery')
}

export async function deleteGalleryItem(id: string) {
  const supabase = await createClient()

  const { data: item } = await supabase.from('gallery_items').select('image_url').eq('id', id).single()

  const { error } = await supabase.from('gallery_items').delete().eq('id', id)

  if (error) {
    return { error: error.message }
  }

  if (item?.image_url && item.image_url.includes('/storage/v1/object/public/gallery/')) {
    const filename = item.image_url.split('/').pop()
    if (filename) {
      await supabase.storage.from('gallery').remove([filename])
    }
  }

  revalidatePath('/admin/gallery')
  return { success: true }
}

export async function uploadGalleryImage(formData: FormData) {
  const file = formData.get('image') as File
  if (!file) return { error: 'No file provided' }

  const supabase = await createClient()
  
  const fileExt = file.name.split('.').pop()
  const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`

  const { data, error } = await supabase.storage.from('gallery').upload(fileName, file, {
    cacheControl: '3600',
    upsert: false
  })

  if (error) {
    return { error: error.message }
  }

  const { data: publicUrlData } = supabase.storage.from('gallery').getPublicUrl(data.path)
  
  return { url: publicUrlData.publicUrl }
}
