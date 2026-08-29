import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { Plus, Search, Edit } from 'lucide-react'
import { DeleteResourceButton } from './DeleteResourceButton'

export const dynamic = 'force-dynamic'

export default async function ResourcesPage({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const supabase = await createClient()
  const { query } = await searchParams

  let dbQuery = supabase.from('resources').select('*, resource_categories(name)').order('created_at', { ascending: false })
  if (query) dbQuery = dbQuery.ilike('title', `%${query}%`)

  const { data: resources } = await dbQuery

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-white">Resources Management</h2>
        <Link href="/admin/resources/new" className="bg-[#d4af37] text-black px-4 py-2 rounded-md font-medium hover:bg-[#d4af37]/90 transition-colors flex items-center">
          <Plus className="h-4 w-4 mr-2" /> Add Resource
        </Link>
      </div>

      <div className="bg-[#050812] border border-gray-800 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-gray-800 flex flex-col sm:flex-row gap-4">
          <form className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input name="query" defaultValue={query} type="text" placeholder="Search resources..." className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-1.5 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-[#d4af37]" />
          </form>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-300">
            <thead className="text-xs uppercase bg-gray-800/30 text-gray-400">
              <tr>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Public</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {resources && resources.length > 0 ? resources.map(r => (
                  <tr key={r.id} className="border-b border-gray-800 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">{r.title}</td>
                    <td className="px-6 py-4">{r.resource_categories?.name || '-'}</td>
                    <td className="px-6 py-4">{r.is_public ? 'Yes' : 'No'}</td>
                    <td className="px-6 py-4">{new Date(r.created_at).toLocaleDateString()}</td>
                    <td className="px-6 py-4 text-right flex justify-end gap-3">
                      <a href={r.file_url} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors text-xs">View</a>
                      <Link href={`/admin/resources/${r.id}/edit`} className="text-gray-400 hover:text-white transition-colors"><Edit className="h-4 w-4" /></Link>
                      <DeleteResourceButton id={r.id} />
                    </td>
                  </tr>
                )) : <tr><td colSpan={5} className="px-6 py-8 text-center text-gray-500">No resources found.</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
