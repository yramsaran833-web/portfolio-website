import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Blog & Articles | Ram Saran Yadav",
  description:
    "Read insights, educational tips, and business strategies from Ram Saran Yadav.",
};

export default function BlogPage() {
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
                {/* Article Card 1 */}
                <article className="glass-panel rounded-2xl overflow-hidden group flex flex-col h-full border border-white/5 hover:border-white/20 transition-colors relative">
                  <Link
                    href="/blog/starting-digital-printing-press"
                    className="absolute inset-0 z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                  ></Link>
                  <div className="aspect-video relative overflow-hidden shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      alt="Printing Press"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow relative z-20">
                    <div className="flex items-center gap-3 text-xs font-body text-primary mb-3 uppercase tracking-wider font-bold">
                      <span>Sep 28, 2023</span>
                      <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                      <span>5 Min Read</span>
                    </div>
                    <h4 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      Starting a Digital Printing Press in 2023
                    </h4>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6 line-clamp-3 flex-grow">
                      From securing the right industrial equipment to
                      understanding the local market demands for flex and offset
                      printing, here is a behind-the-scenes look at United
                      Digital.
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-surface rounded text-xs text-white">
                        Entrepreneurship
                      </span>
                      <span className="px-2 py-1 bg-surface rounded text-xs text-white">
                        Business
                      </span>
                    </div>
                  </div>
                </article>

                {/* Article Card 2 */}
                <article className="glass-panel rounded-2xl overflow-hidden group flex flex-col h-full border border-white/5 hover:border-white/20 transition-colors relative">
                  <Link
                    href="/blog/scaling-education-youtube"
                    className="absolute inset-0 z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                  ></Link>
                  <div className="aspect-video relative overflow-hidden shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1974&auto=format&fit=crop"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      alt="Video Setup"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow relative z-20">
                    <div className="flex items-center gap-3 text-xs font-body text-primary mb-3 uppercase tracking-wider font-bold">
                      <span>Sep 15, 2023</span>
                      <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                      <span>10 Min Read</span>
                    </div>
                    <h4 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      Scaling Education Through YouTube
                    </h4>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6 line-clamp-3 flex-grow">
                      The traditional classroom has limits. Digital platforms do
                      not. Discover the workflow, equipment, and mindset
                      required to transition from a physical classroom to a
                      digital educator.
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-surface rounded text-xs text-white">
                        Creation
                      </span>
                      <span className="px-2 py-1 bg-surface rounded text-xs text-white">
                        Tech
                      </span>
                    </div>
                  </div>
                </article>

                {/* Article Card 3 */}
                <article className="glass-panel rounded-2xl overflow-hidden group flex flex-col h-full border border-white/5 hover:border-white/20 transition-colors relative">
                  <Link
                    href="/blog/effective-teaching-strategies"
                    className="absolute inset-0 z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                  ></Link>
                  <div className="aspect-video relative overflow-hidden shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      alt="Teaching"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow relative z-20">
                    <div className="flex items-center gap-3 text-xs font-body text-primary mb-3 uppercase tracking-wider font-bold">
                      <span>Aug 22, 2023</span>
                      <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                      <span>7 Min Read</span>
                    </div>
                    <h4 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      The 3 Ds: My Core Teaching Philosophy
                    </h4>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6 line-clamp-3 flex-grow">
                      Determination, Discipline, and Dedication. How these three
                      pillars have shaped my decade-long career in government
                      schools.
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-surface rounded text-xs text-white">
                        Education
                      </span>
                      <span className="px-2 py-1 bg-surface rounded text-xs text-white">
                        Mentorship
                      </span>
                    </div>
                  </div>
                </article>
              </div>

              {/* Load More Button */}
              <div className="text-center pt-8">
                <button className="px-8 py-3 glass-panel border border-white/10 text-white font-heading font-bold rounded-full hover:border-primary/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
                  Load Older Posts
                </button>
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
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-between text-on-surface-variant hover:text-primary transition-colors"
                  >
                    <span>Education & Mentorship</span>
                    <span className="bg-white/5 px-2 py-0.5 rounded text-xs">
                      12
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-between text-on-surface-variant hover:text-primary transition-colors"
                  >
                    <span>Business & Printing</span>
                    <span className="bg-white/5 px-2 py-0.5 rounded text-xs">
                      8
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-between text-on-surface-variant hover:text-primary transition-colors"
                  >
                    <span>Content Creation</span>
                    <span className="bg-white/5 px-2 py-0.5 rounded text-xs">
                      15
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-between text-on-surface-variant hover:text-primary transition-colors"
                  >
                    <span>Personal Development</span>
                    <span className="bg-white/5 px-2 py-0.5 rounded text-xs">
                      5
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
