import { ResourceForm } from '../ResourceForm'
import { createClient } from '@/lib/supabase/server'

export default async function NewResourcePage() {
  const supabase = await createClient()
  const { data: categories } = await supabase.from('resource_categories').select('id, name')
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Add Resource</h2>
      <ResourceForm categories={categories || []} />
    </div>
  )
}
