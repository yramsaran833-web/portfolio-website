import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/server'
import { Plus, Search, Edit } from 'lucide-react'
import { DeleteGalleryButton } from './DeleteGalleryButton'

export const dynamic = 'force-dynamic'

export default async function GalleryManagementPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; status?: string }>
}) {
  const supabase = await createClient()
  const { query, status } = await searchParams

  let dbQuery = supabase.from('gallery_items').select('*, gallery_albums(title)').order('created_at', { ascending: false })

  if (query) {
    dbQuery = dbQuery.ilike('title', `%${query}%`)
  }

  const { data: items } = await dbQuery

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-white">Gallery Management</h2>
        <Link 
          href="/admin/gallery/new"
          className="bg-[#d4af37] text-black px-4 py-2 rounded-md font-medium hover:bg-[#d4af37]/90 transition-colors flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Image
        </Link>
      </div>

      <div className="bg-[#050812] border border-gray-800 rounded-lg overflow-hidden">
        
        {/* Filters */}
        <div className="p-4 border-b border-gray-800 flex flex-col sm:flex-row gap-4">
          <form className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input 
              name="query"
              defaultValue={query}
              type="text" 
              placeholder="Search images..." 
              className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-1.5 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-[#d4af37]"
            />
            {status && <input type="hidden" name="status" value={status} />}
          </form>
          <form className="flex items-center gap-2">
            {query && <input type="hidden" name="query" value={query} />}
            <input type="hidden" name="status" value="all" />
            <button type="submit" className="bg-[#d4af37] text-black px-3 py-1.5 rounded-md text-sm font-medium hover:bg-[#d4af37]/90 transition-colors">
              Filter
            </button>
          </form>
        </div>

        {/* Grid/Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-300">
            <thead className="text-xs uppercase bg-gray-800/30 text-gray-400">
              <tr>
                <th className="px-6 py-3">Thumbnail</th>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Album</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items && items.length > 0 ? (
                items.map((item) => (
                  <tr key={item.id} className="border-b border-gray-800 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="h-12 w-16 relative rounded overflow-hidden bg-gray-900 border border-gray-800">
                        <Image src={item.image_url} alt={item.title || 'Gallery image'} fill className="object-cover" sizes="64px" />
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-white">{item.title || 'Untitled'}</td>
                    <td className="px-6 py-4">{item.gallery_albums?.title || 'No Album'}</td>
                    <td className="px-6 py-4">{new Date(item.created_at).toLocaleDateString()}</td>
                    <td className="px-6 py-4 text-right flex justify-end items-center gap-3 pt-6">
                      <Link href={`/admin/gallery/${item.id}/edit`} className="text-gray-400 hover:text-white transition-colors" title="Edit">
                        <Edit className="h-4 w-4" />
                      </Link>
                      <DeleteGalleryButton id={item.id} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                    No images found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}
