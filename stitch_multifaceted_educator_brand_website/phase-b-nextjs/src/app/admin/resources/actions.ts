'use server'

import { createClient } from '@/lib/supabase/server'
import { resourceSchema, type ResourceFormValues } from '@/lib/validations/resources'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createResource(data: ResourceFormValues) {
  const supabase = await createClient()
  const parsed = resourceSchema.safeParse(data)
  if (!parsed.success) return { error: 'Invalid form data' }

  const { data: user, error: authError } = await supabase.auth.getUser()
  if (authError || !user?.user) return { error: 'Unauthorized' }

  const { error } = await supabase.from('resources').insert(parsed.data)
  if (error) {
    if (error.code === '23505') return { error: 'Slug must be unique' }
    return { error: error.message }
  }

  revalidatePath('/admin/resources')
  redirect('/admin/resources')
}

export async function updateResource(id: string, data: ResourceFormValues) {
  const supabase = await createClient()
  const parsed = resourceSchema.safeParse(data)
  if (!parsed.success) return { error: 'Invalid form data' }

  const { error } = await supabase.from('resources').update(parsed.data).eq('id', id)
  if (error) {
    if (error.code === '23505') return { error: 'Slug must be unique' }
    return { error: error.message }
  }

  revalidatePath('/admin/resources')
  redirect('/admin/resources')
}

export async function deleteResource(id: string) {
  const supabase = await createClient()
  const { data: item } = await supabase.from('resources').select('file_url').eq('id', id).single()

  const { error } = await supabase.from('resources').delete().eq('id', id)
  if (error) return { error: error.message }

  if (item?.file_url && item.file_url.includes('/storage/v1/object/public/resources/')) {
    const filename = item.file_url.split('/').pop()
    if (filename) await supabase.storage.from('resources').remove([filename])
  }

  revalidatePath('/admin/resources')
  return { success: true }
}

export async function uploadResourceFile(formData: FormData) {
  const file = formData.get('file') as File
  if (!file) return { error: 'No file provided' }

  const supabase = await createClient()
  
  const fileExt = file.name.split('.').pop()
  const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`

  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  const { data, error } = await supabase.storage.from('resources').upload(fileName, buffer, {
    cacheControl: '3600',
    upsert: false,
    contentType: file.type
  })

  if (error) return { error: error.message }
  const { data: publicUrlData } = supabase.storage.from('resources').getPublicUrl(data.path)
  
  return { url: publicUrlData.publicUrl }
}
