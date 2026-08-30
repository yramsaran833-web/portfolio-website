import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/server'
import { Plus, Search, Edit } from 'lucide-react'
import { DeleteTestimonialButton } from './DeleteTestimonialButton'

export const dynamic = 'force-dynamic'

export default async function TestimonialsManagementPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>
}) {
  const supabase = await createClient()
  const { query } = await searchParams

  let dbQuery = supabase.from('testimonials').select('*').order('sort_order', { ascending: true }).order('created_at', { ascending: false })

  if (query) {
    dbQuery = dbQuery.ilike('author_name', `%${query}%`)
  }

  const { data: testimonials } = await dbQuery

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-white">Testimonials Management</h2>
        <Link 
          href="/admin/testimonials/new"
          className="bg-[#d4af37] text-black px-4 py-2 rounded-md font-medium hover:bg-[#d4af37]/90 transition-colors flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Testimonial
        </Link>
      </div>

      <div className="bg-[#050812] border border-gray-800 rounded-lg overflow-hidden">
        
        <div className="p-4 border-b border-gray-800 flex flex-col sm:flex-row gap-4">
          <form className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input 
              name="query"
              defaultValue={query}
              type="text" 
              placeholder="Search by name..." 
              className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-1.5 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-[#d4af37]"
            />
          </form>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-300">
            <thead className="text-xs uppercase bg-gray-800/30 text-gray-400">
              <tr>
                <th className="px-6 py-3">Client</th>
                <th className="px-6 py-3">Role</th>
                <th className="px-6 py-3">Rating</th>
                <th className="px-6 py-3">Featured</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {testimonials && testimonials.length > 0 ? (
                testimonials.map((t) => (
                  <tr key={t.id} className="border-b border-gray-800 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 flex items-center gap-3">
                      {t.avatar_url ? (
                        <div className="h-10 w-10 relative rounded-full overflow-hidden bg-gray-900 border border-gray-800 flex-shrink-0">
                          <Image src={t.avatar_url} alt={t.author_name} fill className="object-cover" sizes="40px" />
                        </div>
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-xs text-gray-500 flex-shrink-0">
                          {t.author_name?.charAt(0) || '?'}
                        </div>
                      )}
                      <span className="font-medium text-white">{t.author_name}</span>
                    </td>
                    <td className="px-6 py-4">{t.author_role || '-'}</td>
                    <td className="px-6 py-4">
                      <div className="flex text-[#d4af37]">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {t.is_featured ? (
                        <span className="inline-flex items-center rounded-full bg-[#d4af37]/10 px-2 py-1 text-xs font-medium text-[#d4af37]">
                          Featured
                        </span>
                      ) : (
                        <span className="text-gray-500">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4">{t.sort_order}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end items-center gap-3">
                        <Link href={`/admin/testimonials/${t.id}/edit`} className="text-gray-400 hover:text-white transition-colors" title="Edit">
                          <Edit className="h-4 w-4" />
                        </Link>
                        <DeleteTestimonialButton id={t.id} name={t.author_name} />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                    No testimonials found.
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
