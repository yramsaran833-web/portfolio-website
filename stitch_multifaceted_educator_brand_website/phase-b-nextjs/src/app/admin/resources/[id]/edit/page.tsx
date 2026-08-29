import { ResourceForm } from '../../ResourceForm'
import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'

export default async function EditResourcePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const { data: item } = await supabase.from('resources').select('*').eq('id', id).single()
  const { data: categories } = await supabase.from('resource_categories').select('id, name')

  if (!item) notFound()

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Edit Resource</h2>
      <ResourceForm initialData={item} categories={categories || []} />
    </div>
  )
}
