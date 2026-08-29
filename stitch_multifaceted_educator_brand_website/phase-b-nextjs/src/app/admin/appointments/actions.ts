'use server'
import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function updateAppointment(id: string, status: 'new'|'confirmed'|'completed'|'cancelled', admin_notes: string) {
  const supabase = await createClient()
  const { data: user, error: authError } = await supabase.auth.getUser()
  if (authError || !user?.user) return { error: 'Unauthorized' }

  const { error } = await supabase.from('appointments').update({ status, admin_notes }).eq('id', id)
  if (error) return { error: error.message }

  revalidatePath('/admin/appointments')
  redirect('/admin/appointments')
}

export async function deleteAppointment(id: string) {
  const supabase = await createClient()
  const { error } = await supabase.from('appointments').delete().eq('id', id)
  if (error) return { error: error.message }
  
  revalidatePath('/admin/appointments')
  return { success: true }
}
