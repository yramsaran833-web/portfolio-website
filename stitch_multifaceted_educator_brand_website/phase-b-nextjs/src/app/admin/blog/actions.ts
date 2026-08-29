'use server'

import { createClient } from '@/lib/supabase/server'
import { blogPostSchema, type BlogPostFormValues } from '@/lib/validations/blog'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createBlogPost(data: BlogPostFormValues) {
  const supabase = await createClient()
  
  const parsed = blogPostSchema.safeParse(data)
  if (!parsed.success) {
    return { error: 'Invalid form data' }
  }

  const { data: user, error: authError } = await supabase.auth.getUser()
  if (authError || !user?.user) {
    return { error: 'Unauthorized' }
  }

  const { error } = await supabase.from('blog_posts').insert({
    ...parsed.data,
    author_id: user.user.id,
    published_at: parsed.data.status === 'published' ? new Date().toISOString() : null,
  })

  if (error) {
    if (error.code === '23505') {
      return { error: 'A post with this slug already exists.' }
    }
    return { error: error.message }
  }

  revalidatePath('/admin/blog')
  redirect('/admin/blog')
}

export async function updateBlogPost(id: string, data: BlogPostFormValues) {
  const supabase = await createClient()
  
  const parsed = blogPostSchema.safeParse(data)
  if (!parsed.success) {
    return { error: 'Invalid form data' }
  }

  const { error } = await supabase.from('blog_posts').update({
    ...parsed.data,
    published_at: parsed.data.status === 'published' ? new Date().toISOString() : null,
  }).eq('id', id)

  if (error) {
    if (error.code === '23505') {
      return { error: 'A post with this slug already exists.' }
    }
    return { error: error.message }
  }

  revalidatePath('/admin/blog')
  redirect('/admin/blog')
}

export async function deleteBlogPost(id: string) {
  const supabase = await createClient()

  // First fetch the post to get the featured image URL if it's hosted in our bucket
  const { data: post } = await supabase.from('blog_posts').select('featured_image').eq('id', id).single()

  const { error } = await supabase.from('blog_posts').delete().eq('id', id)

  if (error) {
    return { error: error.message }
  }

  // If there's an image in our storage, try to delete it
  if (post?.featured_image && post.featured_image.includes('/storage/v1/object/public/blog/')) {
    const filename = post.featured_image.split('/').pop()
    if (filename) {
      await supabase.storage.from('blog').remove([filename])
    }
  }

  revalidatePath('/admin/blog')
  return { success: true }
}

export async function uploadBlogImage(formData: FormData) {
  const file = formData.get('image') as File
  if (!file) return { error: 'No file provided' }

  const supabase = await createClient()
  
  const fileExt = file.name.split('.').pop()
  const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`

  const { data, error } = await supabase.storage.from('blog').upload(fileName, file, {
    cacheControl: '3600',
    upsert: false
  })

  if (error) {
    return { error: error.message }
  }

  const { data: publicUrlData } = supabase.storage.from('blog').getPublicUrl(data.path)
  
  return { url: publicUrlData.publicUrl }
}
