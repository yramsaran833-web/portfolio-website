import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { Eye, Search } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function MessagesPage({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const supabase = await createClient()
  const { query } = await searchParams

  let dbQuery = supabase.from('contact_messages').select('*').order('created_at', { ascending: false })
  if (query) dbQuery = dbQuery.ilike('name', `%${query}%`)

  const { data: messages } = await dbQuery

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-white">Contact Messages</h2>
      </div>

      <div className="bg-[#050812] border border-gray-800 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-gray-800 flex flex-col sm:flex-row gap-4">
          <form className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input name="query" defaultValue={query} type="text" placeholder="Search by name..." className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-1.5 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-[#d4af37]" />
          </form>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-300">
            <thead className="text-xs uppercase bg-gray-800/30 text-gray-400">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Subject</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3 text-right">View</th>
              </tr>
            </thead>
            <tbody>
              {messages && messages.length > 0 ? messages.map(m => (
                  <tr key={m.id} className="border-b border-gray-800 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">{m.name}</td>
                    <td className="px-6 py-4">{m.subject || 'No Subject'}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        !m.is_read ? 'bg-red-500/10 text-red-500 font-bold' : 'bg-gray-500/10 text-gray-400'
                      }`}>
                        {m.is_read ? 'READ' : 'NEW'}
                      </span>
                    </td>
                    <td className="px-6 py-4">{new Date(m.created_at).toLocaleDateString()}</td>
                    <td className="px-6 py-4 text-right">
                      <Link href={`/admin/messages/${m.id}`} className="text-[#d4af37] hover:text-[#d4af37]/80 inline-flex" title="View">
                        <Eye className="h-5 w-5" />
                      </Link>
                    </td>
                  </tr>
                )) : <tr><td colSpan={5} className="px-6 py-8 text-center text-gray-500">No messages found.</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
