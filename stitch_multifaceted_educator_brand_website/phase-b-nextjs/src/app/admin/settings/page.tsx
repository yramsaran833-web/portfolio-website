import { createClient } from '@/lib/supabase/server'
import { SettingsForm } from './SettingsForm'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default async function SettingsPage() {
  const supabase = await createClient()
  const { data: user } = await supabase.auth.getUser()
  if (!user?.user) redirect('/login')

  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.user.id).single()
  if (profile?.role !== 'super_admin') {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-white">Access Denied</h2>
          <p className="text-gray-400">Only Super Admins can access site settings.</p>
        </div>
      </div>
    )
  }

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
