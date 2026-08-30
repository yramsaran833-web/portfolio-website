'use server'
import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function updateMessageStatus(id: string, is_read: boolean) {
  const supabase = await createClient()
  const { data: user, error: authError } = await supabase.auth.getUser()
  if (authError || !user?.user) return { error: 'Unauthorized' }

  const { error } = await supabase.from('contact_messages').update({ is_read }).eq('id', id)
  if (error) return { error: error.message }

  revalidatePath('/admin/messages')
  revalidatePath(`/admin/messages/${id}`)
  return { success: true }
}

export async function deleteMessage(id: string) {
  const supabase = await createClient()
  const { error } = await supabase.from('contact_messages').delete().eq('id', id)
  if (error) return { error: error.message }
  
  revalidatePath('/admin/messages')
  redirect('/admin/messages')
}
