'use server'

import { createClient } from '@/lib/supabase/server'
import { testimonialSchema, type TestimonialFormValues } from '@/lib/validations/testimonials'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createTestimonial(data: TestimonialFormValues) {
  const supabase = await createClient()
  
  const parsed = testimonialSchema.safeParse(data)
  if (!parsed.success) {
    return { error: 'Invalid form data' }
  }

  const { data: user, error: authError } = await supabase.auth.getUser()
  if (authError || !user?.user) {
    return { error: 'Unauthorized' }
  }

  const { error } = await supabase.from('testimonials').insert(parsed.data)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/testimonials')
  redirect('/admin/testimonials')
}

export async function updateTestimonial(id: string, data: TestimonialFormValues) {
  const supabase = await createClient()
  
  const parsed = testimonialSchema.safeParse(data)
  if (!parsed.success) {
    return { error: 'Invalid form data' }
  }

  const { error } = await supabase.from('testimonials').update(parsed.data).eq('id', id)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/testimonials')
  redirect('/admin/testimonials')
}

export async function deleteTestimonial(id: string) {
  const supabase = await createClient()

  const { data: item } = await supabase.from('testimonials').select('avatar_url').eq('id', id).single()

  const { error } = await supabase.from('testimonials').delete().eq('id', id)

  if (error) {
    return { error: error.message }
  }

  if (item?.avatar_url && item.avatar_url.includes('/storage/v1/object/public/testimonials/')) {
    const filename = item.avatar_url.split('/').pop()
    if (filename) {
      await supabase.storage.from('testimonials').remove([filename])
    }
  }

  revalidatePath('/admin/testimonials')
  return { success: true }
}

export async function uploadTestimonialImage(formData: FormData) {
  const file = formData.get('image') as File
  if (!file) return { error: 'No file provided' }

  const supabase = await createClient()
  
  const fileExt = file.name.split('.').pop()
  const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`

  const arrayBuffer = await file.arrayBuffer()
  
  const { data, error } = await supabase.storage.from('testimonials').upload(fileName, arrayBuffer, {
    cacheControl: '3600',
    upsert: false,
    contentType: file.type
  })

  if (error) {
    return { error: error.message }
  }

  const { data: publicUrlData } = supabase.storage.from('testimonials').getPublicUrl(data.path)
  
  return { url: publicUrlData.publicUrl }
}
