import { BlogForm } from '../BlogForm'
import { createClient } from '@/lib/supabase/server'

export default async function NewBlogPage() {
  const supabase = await createClient()
  const { data: categories } = await supabase.from('blog_categories').select('id, name').order('name')

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Create New Post</h2>
      </div>
      <BlogForm categories={categories || []} />
    </div>
  )
}
