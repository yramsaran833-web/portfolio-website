import { MetadataRoute } from 'next'
import { createClient } from '@/lib/supabase/server'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.ramsaranyadav.com.np'
  const supabase = await createClient()

  // Base routes
  const routes = [
    '',
    '/about',
    '/gallery',
    '/awards',
    '/blog',
    '/resources',
    '/creator',
    '/printing',
    '/teaching',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic Blog Posts
  const { data: posts } = await supabase.from('blog_posts').select('slug, updated_at').eq('status', 'published')
  const blogRoutes = (posts || []).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated_at),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...blogRoutes]
}
