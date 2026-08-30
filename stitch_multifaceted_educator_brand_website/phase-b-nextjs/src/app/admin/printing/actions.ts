'use server'

import { createClient } from '@/lib/supabase/server'
import { printingProjectSchema, type PrintingProjectFormValues } from '@/lib/validations/printing'
import { revalidatePath } from 'next/cache'

export async function uploadPrintingImage(formData: FormData) {
  const supabase = await createClient()
  const file = formData.get('file') as File
  
  if (!file) {
    return { error: 'No file provided' }
  }

  const { data: user, error: authError } = await supabase.auth.getUser()
  if (authError || !user?.user) {
    return { error: 'Unauthorized' }
  }

  const fileExt = file.name.split('.').pop()
  const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`
  const filePath = `printing/${fileName}`

  const { error: uploadError } = await supabase.storage
    .from('media')
    .upload(filePath, file)

  if (uploadError) {
    return { error: uploadError.message }
  }

  const { data: { publicUrl } } = supabase.storage
    .from('media')
    .getPublicUrl(filePath)

  return { url: publicUrl }
}

export async function createPrintingProject(data: PrintingProjectFormValues) {
  const supabase = await createClient()
  
  const parsed = printingProjectSchema.safeParse(data)
  if (!parsed.success) {
    return { error: 'Invalid form data' }
  }

  const { data: user, error: authError } = await supabase.auth.getUser()
  if (authError || !user?.user) {
    return { error: 'Unauthorized' }
  }

  const { error } = await supabase.from('printing_projects').insert(parsed.data)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/printing')
  revalidatePath('/printing')
  return { success: true }
}

export async function updatePrintingProject(id: string, data: PrintingProjectFormValues) {
  const supabase = await createClient()
  
  const parsed = printingProjectSchema.safeParse(data)
  if (!parsed.success) {
    return { error: 'Invalid form data' }
  }

  const { error } = await supabase.from('printing_projects').update(parsed.data).eq('id', id)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/printing')
  revalidatePath('/printing')
  return { success: true }
}

export async function deletePrintingProject(id: string) {
  const supabase = await createClient()
  
  const { error } = await supabase.from('printing_projects').delete().eq('id', id)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/printing')
  revalidatePath('/printing')
  return { success: true }
}
