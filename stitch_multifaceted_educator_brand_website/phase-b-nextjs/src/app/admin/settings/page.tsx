import { createClient } from '@/lib/supabase/server'
import { SettingsForm } from './SettingsForm'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default async function SettingsPage() {
  const supabase = await createClient()
  const { data: user } = await supabase.auth.getUser()
  if (!user?.user) redirect('/login')

  // Removed role restriction so Ram Saran Yadav can access settings

  // Get or create settings
  let { data: settings } = await supabase.from('site_settings').select('*').limit(1).single()
  
  if (!settings) {
    const { data: newSet } = await supabase.from('site_settings').insert({ site_name: 'Ram Saran Yadav' }).select('*').single()
    settings = newSet
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Site Settings</h2>
      <SettingsForm initialData={settings} />
    </div>
  )
}
