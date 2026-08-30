'use server'

import { createClient } from '@/lib/supabase/server'
import { awardSchema, type AwardFormValues } from '@/lib/validations/awards'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createAward(data: AwardFormValues) {
  const supabase = await createClient()
  
  const parsed = awardSchema.safeParse(data)
  if (!parsed.success) {
    return { error: 'Invalid form data' }
  }

  const { data: user, error: authError } = await supabase.auth.getUser()
  if (authError || !user?.user) {
    return { error: 'Unauthorized' }
  }

  const { error } = await supabase.from('awards').insert({
    ...parsed.data,
    issue_date: parsed.data.issue_date || null
  })

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/awards')
  redirect('/admin/awards')
}

export async function updateAward(id: string, data: AwardFormValues) {
  const supabase = await createClient()
  
  const parsed = awardSchema.safeParse(data)
  if (!parsed.success) {
    return { error: 'Invalid form data' }
  }

  const { error } = await supabase.from('awards').update({
    ...parsed.data,
    issue_date: parsed.data.issue_date || null
  }).eq('id', id)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/awards')
  redirect('/admin/awards')
}

export async function deleteAward(id: string) {
  const supabase = await createClient()

  const { data: item } = await supabase.from('awards').select('image_url').eq('id', id).single()

  const { error } = await supabase.from('awards').delete().eq('id', id)

  if (error) {
    return { error: error.message }
  }

  if (item?.image_url && item.image_url.includes('/storage/v1/object/public/awards/')) {
    const filename = item.image_url.split('/').pop()
    if (filename) {
      await supabase.storage.from('awards').remove([filename])
    }
  }

  revalidatePath('/admin/awards')
  return { success: true }
}

export async function uploadAwardImage(formData: FormData) {
  const file = formData.get('image') as File
  if (!file) return { error: 'No file provided' }

  const supabase = await createClient()
  
  const fileExt = file.name.split('.').pop()
  const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`

  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  const { data, error } = await supabase.storage.from('awards').upload(fileName, buffer, {
    cacheControl: '3600',
    upsert: false,
    contentType: file.type
  })

  if (error) {
    return { error: error.message }
  }

  const { data: publicUrlData } = supabase.storage.from('awards').getPublicUrl(data.path)
  
  return { url: publicUrlData.publicUrl }
}
