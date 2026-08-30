import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { Plus, Edit, Trash2 } from 'lucide-react'
import { deleteReel } from './actions'

export const metadata = {
  title: 'Facebook Reels | Admin Dashboard',
}

export default async function ReelsAdminPage() {
  const supabase = await createClient()

  const { data: reels } = await supabase
    .from('facebook_reels')
    .select('*')
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Facebook Reels</h1>
          <p className="text-white-variant mt-1">Manage video links for the Digital Creator page</p>
        </div>
        <Link
          href="/admin/reels/new"
          className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Reel
        </Link>
      </div>

      <div className="bg-surface border border-white/5 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-white-variant">
              <tr>
                <th className="px-6 py-4 font-medium">Reel Details</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Order</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {reels?.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-white/40">
                    No reels found. Add one to get started.
                  </td>
                </tr>
              )}
              {reels?.map((reel) => (
                <tr key={reel.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-medium text-white">{reel.title}</p>
                    <a href={reel.url} target="_blank" rel="noreferrer" className="text-primary hover:underline text-xs mt-1 truncate max-w-[300px] block">
                      {reel.url}
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      reel.status === 'published' ? 'bg-green-500/10 text-green-400' :
                      'bg-yellow-500/10 text-yellow-400'
                    }`}>
                      {reel.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-white-variant">
                    {reel.sort_order}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/reels/${reel.id}/edit`}
                        className="p-2 text-white-variant hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </Link>
                      <form action={async () => {
                        'use server'
                        await deleteReel(reel.id)
                      }}>
                        <button
                          type="submit"
                          className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-colors"
                          onClick={(e) => {
                            if(!confirm('Are you sure you want to delete this reel?')) e.preventDefault()
                          }}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
