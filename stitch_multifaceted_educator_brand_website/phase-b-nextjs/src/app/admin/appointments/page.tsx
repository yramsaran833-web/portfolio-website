import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { Edit, Search } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function AppointmentsPage({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const supabase = await createClient()
  const { query } = await searchParams

  let dbQuery = supabase.from('appointments').select('*').order('requested_date', { ascending: true })
  if (query) dbQuery = dbQuery.ilike('name', `%${query}%`)

  const { data: appts } = await dbQuery

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Appointments</h2>

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
                <th className="px-6 py-3">Client</th>
                <th className="px-6 py-3">Date & Time</th>
                <th className="px-6 py-3">Reason</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appts && appts.length > 0 ? appts.map(a => (
                  <tr key={a.id} className="border-b border-gray-800 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">
                      {a.name}<br/>
                      <span className="text-xs text-gray-500 font-normal">{a.email}</span>
                    </td>
                    <td className="px-6 py-4">
                      {new Date(a.requested_date).toLocaleDateString()}<br/>
                      <span className="text-xs text-[#d4af37]">{a.requested_time || 'No time set'}</span>
                    </td>
                    <td className="px-6 py-4 max-w-[200px] truncate" title={a.reason}>{a.reason}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        a.status === 'new' ? 'bg-red-500/10 text-red-500 font-bold' : 
                        a.status === 'confirmed' ? 'bg-blue-500/10 text-blue-500' : 
                        a.status === 'completed' ? 'bg-green-500/10 text-green-500' : 'bg-gray-500/10 text-gray-400'
                      }`}>
                        {a.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link href={`/admin/appointments/${a.id}/edit`} className="text-gray-400 hover:text-white inline-flex"><Edit className="h-4 w-4" /></Link>
                    </td>
                  </tr>
                )) : <tr><td colSpan={5} className="px-6 py-8 text-center text-gray-500">No appointments found.</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
