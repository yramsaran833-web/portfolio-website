import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Blog & Articles | Ram Saran Yadav",
  description:
    "Read insights, educational tips, and business strategies from Ram Saran Yadav.",
};

export default async function BlogPage() {
  const supabase = await createClient();
  
  // Fetch published blog posts
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("*, blog_categories(name)")
    .eq("published", true)
    .order("created_at", { ascending: false });

  // Fetch categories with counts
  const { data: categories } = await supabase
    .from("blog_categories")
    .select("*");

  return (
    <>
      {/* Header Section */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 animate-on-scroll">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6">
            Insights & <span className="text-primary">Articles</span>
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-2xl mx-auto">
            Thoughts on education, business growth, and digital creation.
          </p>
        </div>
      </section>

      {/* Main Blog Layout */}
      <section className="py-12 px-6 md:px-16 max-w-7xl mx-auto relative z-20 min-h-[50vh]">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content (Latest Posts) */}
          <div className="lg:w-2/3">
            <div className="space-y-12">
              {/* Latest Posts Grid */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="font-heading font-bold text-2xl text-white">
                  Latest Articles
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts && posts.length > 0 ? (
                  posts.map((post) => (
                    <article key={post.id} className="glass-panel rounded-2xl overflow-hidden group flex flex-col h-full border border-white/5 hover:border-white/20 transition-colors relative">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="absolute inset-0 z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                      ></Link>
                      <div className="aspect-video relative overflow-hidden shrink-0 bg-white/5 flex items-center justify-center">
                        {post.cover_image_url ? (
                          <img
                            src={post.cover_image_url}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            alt={post.title}
                            loading="lazy"
                          />
                        ) : (
                          <span className="material-symbols-outlined text-4xl text-white/20">article</span>
                        )}
                      </div>
                      <div className="p-6 flex flex-col flex-grow relative z-20">
                        <div className="flex items-center gap-3 text-xs font-body text-primary mb-3 uppercase tracking-wider font-bold">
                          <span>{new Date(post.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <h4 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h4>
                        <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6 line-clamp-3 flex-grow">
                          {post.summary || post.content.substring(0, 150) + "..."}
                        </p>
                        {post.blog_categories && (
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-1 bg-surface rounded text-xs text-white">
                              {/* @ts-ignore - Supabase nested join type */}
                              {post.blog_categories.name}
                            </span>
                          </div>
                        )}
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="col-span-1 md:col-span-2 py-12 text-center border border-dashed border-white/10 rounded-2xl">
                    <span className="material-symbols-outlined text-4xl text-white/20 mb-2">article</span>
                    <h4 className="font-heading text-xl text-white">No articles yet</h4>
                    <p className="font-body text-on-surface-variant mt-2">Check back soon for new insights.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-10">
            {/* Search */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5">
              <h3 className="font-heading font-bold text-white text-lg mb-4">
                Search Articles
              </h3>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                  search
                </span>
                <input
                  type="text"
                  placeholder="Keywords..."
                  className="w-full bg-black border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary transition-all placeholder:text-white-variant/50 text-sm"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5">
              <h3 className="font-heading font-bold text-white text-lg mb-4">
                Categories
              </h3>
              <ul className="space-y-3 font-body text-sm">
                {categories && categories.length > 0 ? (
                  categories.map((category) => (
                    <li key={category.id}>
                      <Link
                        href={`/blog?category=${category.slug}`}
                        className="flex items-center justify-between text-on-surface-variant hover:text-primary transition-colors"
                      >
                        <span>{category.name}</span>
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="text-white/40 text-sm">No categories found.</li>
                )}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
