import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/server'
import { Plus, Search, Edit } from 'lucide-react'
import { DeleteAwardButton } from './DeleteAwardButton'

export const dynamic = 'force-dynamic'

export default async function AwardsManagementPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>
}) {
  const supabase = await createClient()
  const { query } = await searchParams

  let dbQuery = supabase.from('awards').select('*').order('sort_order', { ascending: true }).order('created_at', { ascending: false })

  if (query) {
    dbQuery = dbQuery.ilike('title', `%${query}%`)
  }

  const { data: awards } = await dbQuery

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-white">Awards Management</h2>
        <Link 
          href="/admin/awards/new"
          className="bg-[#d4af37] text-black px-4 py-2 rounded-md font-medium hover:bg-[#d4af37]/90 transition-colors flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Award
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
              placeholder="Search awards..." 
              className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-1.5 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-[#d4af37]"
            />
          </form>
        </div>

        {/* Grid/Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-300">
            <thead className="text-xs uppercase bg-gray-800/30 text-gray-400">
              <tr>
                <th className="px-6 py-3">Thumbnail</th>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Issuer</th>
                <th className="px-6 py-3">Issue Date</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {awards && awards.length > 0 ? (
                awards.map((award) => (
                  <tr key={award.id} className="border-b border-gray-800 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      {award.image_url ? (
                        <div className="h-12 w-16 relative rounded overflow-hidden bg-gray-900 border border-gray-800">
                          <Image src={award.image_url} alt={award.title || 'Award'} fill className="object-cover" sizes="64px" />
                        </div>
                      ) : (
                        <div className="h-12 w-16 rounded bg-gray-800 flex items-center justify-center text-xs text-gray-500">
                          None
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 font-medium text-white">{award.title}</td>
                    <td className="px-6 py-4">{award.organization || '-'}</td>
                    <td className="px-6 py-4">{award.year || '-'}</td>
                    <td className="px-6 py-4 text-right flex justify-end items-center gap-3 pt-6">
                      <Link href={`/admin/awards/${award.id}/edit`} className="text-gray-400 hover:text-white transition-colors" title="Edit">
                        <Edit className="h-4 w-4" />
                      </Link>
                      <DeleteAwardButton id={award.id} title={award.title} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                    No awards found.
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
