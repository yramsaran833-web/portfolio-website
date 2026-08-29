import { GalleryForm } from '../GalleryForm'
import { createClient } from '@/lib/supabase/server'

export default async function NewGalleryPage() {
  const supabase = await createClient()
  const { data: albums } = await supabase.from('gallery_albums').select('id, title').order('title')

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Add New Image</h2>
      </div>
      <GalleryForm albums={albums || []} />
    </div>
  )
}
