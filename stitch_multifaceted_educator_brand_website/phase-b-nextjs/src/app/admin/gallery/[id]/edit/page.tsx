import { GalleryForm } from '../../GalleryForm'
import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'

export default async function EditGalleryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  
  const { data: item, error } = await supabase.from('gallery_items').select('*').eq('id', id).single()
  const { data: albums } = await supabase.from('gallery_albums').select('id, title').order('title')

  if (error || !item) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Edit Image</h2>
      </div>
      <GalleryForm initialData={item} albums={albums || []} />
    </div>
  )
}
