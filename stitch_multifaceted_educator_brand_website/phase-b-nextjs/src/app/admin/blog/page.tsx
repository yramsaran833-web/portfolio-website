import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { Plus, Search, Edit } from 'lucide-react'
import { DeletePostButton } from './DeletePostButton'

export const dynamic = 'force-dynamic' // Ensure fresh data

export default async function BlogManagementPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; status?: string }>
}) {
  const supabase = await createClient()
  const { query, status } = await searchParams

  let dbQuery = supabase.from('blog_posts').select('*, blog_categories(name)').order('created_at', { ascending: false })

  if (query) {
    dbQuery = dbQuery.ilike('title', `%${query}%`)
  }
  if (status && status !== 'all') {
    dbQuery = dbQuery.eq('status', status)
  }

  const { data: posts } = await dbQuery

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-white">Blog Management</h2>
        <Link 
          href="/admin/blog/new"
          className="bg-[#d4af37] text-black px-4 py-2 rounded-md font-medium hover:bg-[#d4af37]/90 transition-colors flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Post
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
              placeholder="Search posts..." 
              className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-1.5 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-[#d4af37]"
            />
            {status && <input type="hidden" name="status" value={status} />}
          </form>
          <form className="flex items-center gap-2">
            {query && <input type="hidden" name="query" value={query} />}
            <select 
              name="status" 
              defaultValue={status || 'all'}
              className="bg-[#0a0f1d] border border-gray-800 rounded-md py-1.5 px-3 text-sm text-white focus:outline-none focus:border-[#d4af37]"
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
            <button type="submit" className="bg-[#d4af37] text-black px-3 py-1.5 rounded-md text-sm font-medium hover:bg-[#d4af37]/90 transition-colors">
              Filter
            </button>
          </form>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-300">
            <thead className="text-xs uppercase bg-gray-800/30 text-gray-400">
              <tr>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts && posts.length > 0 ? (
                posts.map((post) => (
                  <tr key={post.id} className="border-b border-gray-800 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-medium text-white truncate max-w-xs">{post.title}</td>
                    <td className="px-6 py-4">{post.blog_categories?.name || 'Uncategorized'}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        post.status === 'published' ? 'bg-green-500/10 text-green-500' :
                        post.status === 'draft' ? 'bg-gray-500/10 text-gray-400' :
                        'bg-blue-500/10 text-blue-500'
                      }`}>
                        {post.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4">{new Date(post.created_at).toLocaleDateString()}</td>
                    <td className="px-6 py-4 text-right flex justify-end gap-2">
                      <Link href={`/admin/blog/${post.id}/edit`} className="text-gray-400 hover:text-white transition-colors" title="Edit">
                        <Edit className="h-4 w-4" />
                      </Link>
                      <DeletePostButton id={post.id} title={post.title} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                    No posts found.
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
