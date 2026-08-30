'use server'
import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function updateSiteSettings(data: any) {
  const supabase = await createClient()
  const { data: user, error: authError } = await supabase.auth.getUser()
  if (authError || !user?.user) return { error: 'Unauthorized' }

  // Check if super_admin
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.user.id).single()
  if (profile?.role !== 'super_admin') return { error: 'Forbidden: Super Admin only' }

  const { id, ...updateData } = data
  const { error } = await supabase.from('site_settings').update(updateData).eq('id', id)
  
  if (error) return { error: error.message }
  revalidatePath('/admin/settings')
  return { success: true }
}

export async function uploadSettingImage(formData: FormData, field: string) {
  const file = formData.get('file') as File
  if (!file) return { error: 'No file' }

  const supabase = await createClient()
  const { data: user } = await supabase.auth.getUser()
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.user?.id!).single()
  if (profile?.role !== 'super_admin') return { error: 'Forbidden' }

  const fileExt = file.name.split('.').pop()
  const fileName = `${field}-${Date.now()}.${fileExt}`

  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)
  
  const { data, error } = await supabase.storage.from('site_settings').upload(fileName, buffer, { 
    upsert: false,
    contentType: file.type 
  })
  if (error) return { error: error.message }
  
  const { data: p } = supabase.storage.from('site_settings').getPublicUrl(data.path)
  return { url: p.publicUrl }
}
