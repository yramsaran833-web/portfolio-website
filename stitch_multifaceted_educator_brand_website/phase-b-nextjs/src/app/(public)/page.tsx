import Link from "next/link";
import Image from "next/image";
import CounterAnimation from "@/components/ui/CounterAnimation";
import HeroAnimation from "@/components/home/HeroAnimation";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Ram Saran Yadav | Educator, Entrepreneur & Digital Creator",
  description:
    "Official website of Ram Saran Yadav. Government Teacher at Shree Janta Secondary School and Founder of United Digital Printing Press.",
};

export default async function Home() {
  const supabase = await createClient();

  // Fetch featured testimonials
  const { data: testimonials } = await supabase
    .from("testimonials")
    .select("*")
    .eq("is_featured", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  return (
    <>
      {/* MODULE: Premium Hero (Scroll Jacking) */}
      <section className="relative h-[500vh] bg-black">
        <HeroAnimation />
      </section>

      {/* MODULE: The 3 Pillars (Bento Grid) */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading text-sm text-primary uppercase tracking-widest font-bold mb-4">
            Multifaceted Career
          </h2>
          <h3 className="font-heading text-4xl md:text-4xl font-bold text-white">
            The Three Pillars
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <Link
            href="/teaching"
            className="group relative aspect-square md:aspect-auto md:h-[400px] rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-primary/50 transition-colors animate-on-scroll"
          >
            <Image
              src="/assets/img/Teaching_Hero.jpg"
              alt="Teaching"
              fill
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full z-10">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 block">
                school
              </span>
              <h4 className="font-heading text-3xl font-bold text-white mb-2">
                Educator
              </h4>
              <p className="font-body text-white-variant text-sm group-hover:text-white transition-colors">
                Shaping the future through quality education and discipline.
              </p>
            </div>
          </Link>
          
          {/* Pillar 2 */}
          <Link
            href="/printing"
            className="group relative aspect-square md:aspect-auto md:h-[400px] rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-primary/50 transition-colors animate-on-scroll"
            style={{ transitionDelay: "100ms" }}
          >
            <Image
              src="/assets/img/gallery/gallery_2.jpg"
              alt="Printing Press"
              fill
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full z-10">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 block">
                print
              </span>
              <h4 className="font-heading text-3xl font-bold text-white mb-2">
                Entrepreneur
              </h4>
              <p className="font-body text-white-variant text-sm group-hover:text-white transition-colors">
                Founder of United Digital Printing Press. Enterprise solutions.
              </p>
            </div>
          </Link>
          
          {/* Pillar 3 */}
          <Link
            href="/creator"
            className="group relative aspect-square md:aspect-auto md:h-[400px] rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-primary/50 transition-colors animate-on-scroll"
            style={{ transitionDelay: "200ms" }}
          >
            <Image
              src="/assets/img/gallery/gallery_5.jpg"
              alt="Creator"
              fill
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full z-10">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 block">
                videocam
              </span>
              <h4 className="font-heading text-3xl font-bold text-white mb-2">
                Creator
              </h4>
              <p className="font-body text-white-variant text-sm group-hover:text-white transition-colors">
                Digital content creation, inspiring audiences across platforms.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* MODULE: Premium Statistics */}
      <section className="py-20 relative overflow-hidden border-y border-white/5 bg-surface/50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10 text-center">
          <div className="animate-on-scroll">
            <div className="font-heading font-bold text-4xl md:text-7xl text-white drop-shadow-[0_0_15px_rgba(255,122,0,0.5)]">
              <CounterAnimation target={10} suffix="+" />
            </div>
            <div className="font-heading text-sm text-white-variant uppercase tracking-widest mt-2 font-bold">
              Years Experience
            </div>
          </div>
          <div
            className="animate-on-scroll"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="font-heading font-bold text-4xl md:text-7xl text-white drop-shadow-[0_0_15px_rgba(255,122,0,0.5)]">
              <CounterAnimation target={5} suffix="k+" />
            </div>
            <div className="font-heading text-sm text-white-variant uppercase tracking-widest mt-2 font-bold">
              Students Guided
            </div>
          </div>
          <div
            className="animate-on-scroll"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="font-heading font-bold text-4xl md:text-7xl text-white drop-shadow-[0_0_15px_rgba(255,122,0,0.5)]">
              <CounterAnimation target={10} suffix="k+" />
            </div>
            <div className="font-heading text-sm text-white-variant uppercase tracking-widest mt-2 font-bold">
              Print Orders
            </div>
          </div>
          <div
            className="animate-on-scroll"
            style={{ transitionDelay: "300ms" }}
          >
            <div className="font-heading font-bold text-4xl md:text-7xl text-white drop-shadow-[0_0_15px_rgba(255,122,0,0.5)]">
              <CounterAnimation target={100} suffix="k+" />
            </div>
            <div className="font-heading text-sm text-white-variant uppercase tracking-widest mt-2 font-bold">
              Digital Reach
            </div>
          </div>
        </div>
      </section>

      {/* MODULE: Featured Biography Video */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="font-heading text-sm text-primary uppercase tracking-widest font-bold mb-4">
            Biography
          </h2>
          <h3 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Watch the Journey Unfold.
          </h3>
          <p className="font-body text-white-variant text-lg mb-8">
            Follow my story from a passionate educator to a digital content
            creator and entrepreneur. Learn more about the vision that drives my
            daily life.
          </p>
          <a
            href="https://youtube.com/@ramsaranyadav-r7v"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-heading font-bold transition-all shadow-[0_0_15px_rgba(255,122,0,0.2)]"
          >
            Subscribe to YouTube{" "}
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </a>
        </div>

        <div
          className="w-full max-w-6xl mx-auto animate-on-scroll"
          style={{ transitionDelay: "200ms" }}
        >
          {/* Note: In React, we usually use state to load an iframe onClick instead of innerHTML.
              For simplicity and exact matching of Phase A functionality, we use a simple approach. */}
          <div className="relative w-full aspect-video bg-surface rounded-[2rem] border border-white/10 overflow-hidden shadow-[0_0_60px_rgba(255,122,0,0.15)] group cursor-pointer">
            <Image
              src="/assets/img/bio-thumbnail.png"
              alt="Ram Saran Yadav Biography"
              fill
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-primary/90 backdrop-blur-sm text-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,122,0,0.6)] group-hover:scale-110 group-hover:bg-primary transition-all duration-500 ring-4 ring-white/20">
                <span className="material-symbols-outlined text-6xl md:text-8xl ml-2 md:ml-4">
                  play_arrow
                </span>
              </div>
            </div>
            
            <a
              href="https://drive.google.com/file/d/1Tg1as0_ld3r7OVJ4IFMbGXFjo4U3s9Bl/view"
              target="_blank"
              rel="noreferrer"
              className="absolute inset-0 z-10"
              aria-label="Play biography video"
            ></a>
          </div>
        </div>
      </section>

      {/* MODULE: Personal Gallery Preview */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex justify-between items-end mb-12 animate-on-scroll">
          <div>
            <h2 className="font-heading text-sm text-primary uppercase tracking-widest font-bold mb-2">
              Life & Work
            </h2>
            <h3 className="font-heading text-4xl font-bold text-white">
              Moments & Memories
            </h3>
          </div>
          <Link
            href="/gallery"
            className="hidden md:inline-flex items-center gap-2 text-white hover:text-primary transition-colors font-heading font-bold"
          >
            View Full Gallery{" "}
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-on-scroll">
          <div className="aspect-square rounded-2xl overflow-hidden group border border-white/10 shadow-lg relative">
            <Image
              src="/assets/img/gallery/gallery_1.jpg"
              alt="Gallery Image 1"
              fill
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden group border border-white/10 shadow-lg relative">
            <Image
              src="/assets/img/gallery/gallery_2.jpg"
              alt="Gallery Image 2"
              fill
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden group border border-white/10 shadow-lg relative md:-translate-y-6">
            <Image
              src="/assets/img/gallery/gallery_3.jpg"
              alt="Gallery Image 3"
              fill
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden group border border-white/10 shadow-lg relative md:translate-y-6">
            <Image
              src="/assets/img/gallery/gallery_4.jpg"
              alt="Gallery Image 4"
              fill
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
      </section>

      {/* MODULE: Latest Updates (Blog & Resources) */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto bg-surface/30 rounded-3xl border border-white/5 mb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="text-center mb-16 animate-on-scroll">
          <h3 className="font-heading text-4xl font-bold text-white">
            Latest Updates & Resources
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 animate-on-scroll">
          {/* Blog Preview Card */}
          <Link
            href="/blog"
            className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors group flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Latest Article
                </span>
                <span className="material-symbols-outlined text-white/30 group-hover:text-primary transition-colors text-3xl">
                  article
                </span>
              </div>
              <h4 className="font-heading text-2xl font-bold text-white mb-4">
                The Evolution of Modern Teaching Methods
              </h4>
              <p className="font-body text-white-variant mb-8 line-clamp-2">
                How technology is reshaping the classroom and why determination remains the key to student success.
              </p>
            </div>
            <span className="font-heading font-bold text-primary flex items-center gap-2 text-sm uppercase tracking-wider">
              Read Full Article{" "}
              <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-2">
                arrow_forward
              </span>
            </span>
          </Link>

          {/* Resources Preview Card */}
          <Link
            href="/resources"
            className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors group flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Student Material
                </span>
                <span className="material-symbols-outlined text-white/30 group-hover:text-primary transition-colors text-3xl">
                  download
                </span>
              </div>
              <h4 className="font-heading text-2xl font-bold text-white mb-4">
                Essential English Grammar Handbook
              </h4>
              <p className="font-body text-white-variant mb-8 line-clamp-2">
                Download the comprehensive guide designed specifically for secondary level students preparing for board exams.
              </p>
            </div>
            <span className="font-heading font-bold text-primary flex items-center gap-2 text-sm uppercase tracking-wider">
              Access Resource{" "}
              <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-2">
                arrow_forward
              </span>
            </span>
          </Link>
        </div>
      </section>

        {/* MODULE: Testimonials */}
        {testimonials && testimonials.length > 0 && (
          <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="font-heading text-sm text-[#d4af37] uppercase tracking-widest font-bold mb-4">
                What People Say
              </h2>
              <h3 className="font-heading text-4xl md:text-5xl font-bold text-white">
                Testimonials
              </h3>
            </div>

            <div className="animate-on-scroll relative z-10">
              <TestimonialSlider testimonials={testimonials} />
            </div>
          </section>
        )}

      {/* MODULE: Final CTA */}
      <section className="py-32 relative text-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="absolute inset-0 backdrop-blur-3xl"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 animate-on-scroll">
          <h2 className="font-heading font-bold text-4xl md:text-7xl text-white mb-8 tracking-tighter">
            Let&apos;s Create<br />Something Great.
          </h2>
          <p className="font-body text-xl text-white/80 mb-12">
            Whether for education, enterprise printing, or content collaboration, I am always open to new opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-background px-12 py-5 rounded-full font-heading font-bold text-lg uppercase tracking-wider hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
