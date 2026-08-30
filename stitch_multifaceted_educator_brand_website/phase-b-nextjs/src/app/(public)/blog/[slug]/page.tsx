import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: post } = await supabase
    .from("blog_posts")
    .select("title, excerpt")
    .eq("slug", slug)
    .single();

  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Ram Saran Yadav`,
    description: post.excerpt || "Read this article on Ram Saran Yadav's blog.",
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: post } = await supabase
    .from("blog_posts")
    .select("*, blog_categories(name)")
    .eq("slug", slug)
    .single();

  if (!post) {
    notFound();
  }

  // Format date
  const publishDate = new Date(post.published_at || post.created_at).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <article className="min-h-screen pt-24 pb-16 px-6 md:px-16 max-w-4xl mx-auto relative z-20">
      
      <Link href="/blog" className="inline-flex items-center text-[#d4af37] hover:text-[#d4af37]/80 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to all articles
      </Link>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-6 flex-wrap">
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {publishDate}
          </span>
          {post.blog_categories && (
            <>
              <span>•</span>
              <span className="text-[#d4af37]">{post.blog_categories.name}</span>
            </>
          )}
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight">
          {post.title}
        </h1>

        {post.cover_image && (
          <div className="aspect-[21/9] w-full relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
            <img
              src={post.cover_image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </header>

      {/* Content */}
      <div className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-headings:text-white prose-a:text-[#d4af37] prose-img:rounded-xl">
        <div className="whitespace-pre-wrap text-gray-300 font-body leading-relaxed text-lg">
          {post.content}
        </div>
      </div>

    </article>
  );
}
