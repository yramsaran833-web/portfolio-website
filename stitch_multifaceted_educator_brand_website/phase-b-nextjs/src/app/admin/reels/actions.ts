'use server'

import { createClient } from '@/lib/supabase/server'
import { reelSchema, type ReelFormValues } from '@/lib/validations/reels'
import { revalidatePath } from 'next/cache'

export async function createReel(data: ReelFormValues) {
  const supabase = await createClient()
  
  const parsed = reelSchema.safeParse(data)
  if (!parsed.success) {
    return { error: 'Invalid form data' }
  }

  const { data: user, error: authError } = await supabase.auth.getUser()
  if (authError || !user?.user) {
    return { error: 'Unauthorized' }
  }

  const { error } = await supabase.from('facebook_reels').insert(parsed.data)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/reels')
  revalidatePath('/creator')
  return { success: true }
}

export async function updateReel(id: string, data: ReelFormValues) {
  const supabase = await createClient()
  
  const parsed = reelSchema.safeParse(data)
  if (!parsed.success) {
    return { error: 'Invalid form data' }
  }

  const { error } = await supabase.from('facebook_reels').update(parsed.data).eq('id', id)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/reels')
  revalidatePath('/creator')
  return { success: true }
}

export async function deleteReel(id: string) {
  const supabase = await createClient()
  
  const { error } = await supabase.from('facebook_reels').delete().eq('id', id)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/reels')
  revalidatePath('/creator')
  return { success: true }
}
