import { BlogForm } from '../../BlogForm'
import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  
  const { data: post, error } = await supabase.from('blog_posts').select('*').eq('id', id).single()
  const { data: categories } = await supabase.from('blog_categories').select('id, name').order('name')

  if (error || !post) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Edit Post: {post.title}</h2>
      </div>
      <BlogForm initialData={post} categories={categories || []} />
    </div>
  )
}
