import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Digital Creator | Ram Saran Yadav",
  description:
    "Scaling education and inspiring millions through high-quality video production and engaging social content.",
};

export default function CreatorPage() {
  return (
    <>
      {/* Creator Scroll Canvas Section */}
      <section id="creator-scroll-container" className="relative h-[500vh] bg-black">
        <div className="sticky top-20 h-[calc(100vh-5rem)] w-full overflow-hidden flex items-center justify-center text-left">
          {/* Preloader */}
          <div
            id="hero-loading"
            className="absolute z-50 flex flex-col items-center gap-6"
          >
            <img
              src="/assets/img/Logo.png"
              alt="Ram Saran Yadav Logo"
              className="h-20 w-auto object-contain drop-shadow-2xl animate-pulse"
            />
            <div className="text-white font-heading text-lg md:text-xl font-bold tracking-widest flex items-center gap-4 bg-black/40 px-6 py-3 rounded-full backdrop-blur-md border border-white/10">
              <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              <span id="hero-loading-text">Loading Sequence 0%</span>
            </div>
          </div>

          {/* Canvas Animation Background */}
          <canvas
            id="creator-sequence"
            className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-100"
            aria-hidden="true"
          ></canvas>

          {/* Dark overlays */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/80 via-black/30 to-transparent z-10 pointer-events-none"></div>

          <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-end md:justify-center items-start pb-24 md:pb-32 h-full">
            {/* Left Side Content */}
            <div className="w-full md:w-5/12 lg:w-4/12 flex flex-col items-start animate-on-scroll">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 drop-shadow-lg">
                videocam
              </span>
              <h1 className="font-heading text-4xl md:text-4xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl tracking-tight">
                Digital
                <br />
                Creator
              </h1>
              <p className="font-body text-base md:text-lg text-white/90 mb-8 drop-shadow-md font-medium leading-relaxed">
                Scaling education and inspiring millions through high-quality
                video production and engaging social content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://youtube.com/@ramsaranyadav-r7v?si=uRewHhs0ZvLMsefl"
                  target="_blank"
                  className="bg-[#ff0000] text-white px-6 py-3 rounded-full font-heading text-sm font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-[0_0_20px_rgba(255,0,0,0.4)]"
                >
                  <span className="material-symbols-outlined">play_circle</span>{" "}
                  Subscribe
                </a>
                <a
                  href="https://www.facebook.com/ramsaran.yadav.73"
                  target="_blank"
                  className="bg-[#1877f2] text-white px-6 py-3 rounded-full font-heading text-sm font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-[0_0_20px_rgba(24,119,242,0.4)]"
                >
                  <span className="material-symbols-outlined">thumb_up</span>{" "}
                  Follow
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-70 z-20 flex flex-col items-center">
            <span className="block text-xs font-heading text-primary uppercase tracking-widest mb-1">
              Scroll
            </span>
            <span className="material-symbols-outlined text-3xl text-primary">
              keyboard_arrow_down
            </span>
          </div>
        </div>
      </section>

      {/* Social Statistics */}
      <section className="py-12 px-6 md:px-16 max-w-7xl mx-auto relative z-20 border-t border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Stat 1 */}
          <div className="glass-panel p-6 rounded-2xl text-center animate-on-scroll border-t border-[#ff0000]/50">
            <div className="font-heading text-3xl font-bold text-white mb-1">
              100K+
            </div>
            <div className="font-body text-xs text-on-surface-variant uppercase tracking-wider">
              YouTube Subs
            </div>
          </div>
          {/* Stat 2 */}
          <div
            className="glass-panel p-6 rounded-2xl text-center animate-on-scroll border-t border-[#1877f2]/50"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="font-heading text-3xl font-bold text-white mb-1">
              50K+
            </div>
            <div className="font-body text-xs text-on-surface-variant uppercase tracking-wider">
              FB Followers
            </div>
          </div>
          {/* Stat 3 */}
          <div
            className="glass-panel p-6 rounded-2xl text-center animate-on-scroll border-t border-primary/50"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="font-heading text-3xl font-bold text-white mb-1">
              5M+
            </div>
            <div className="font-body text-xs text-on-surface-variant uppercase tracking-wider">
              Monthly Views
            </div>
          </div>
          {/* Stat 4 */}
          <div
            className="glass-panel p-6 rounded-2xl text-center animate-on-scroll border-t border-white/20"
            style={{ transitionDelay: "300ms" }}
          >
            <div className="font-heading text-3xl font-bold text-white mb-1">
              200+
            </div>
            <div className="font-body text-xs text-on-surface-variant uppercase tracking-wider">
              Videos Created
            </div>
          </div>
        </div>
      </section>

      {/* Content Pillars */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="font-heading text-sm text-primary uppercase tracking-widest font-bold mb-4">
            Content Pillars
          </h2>
          <h3 className="font-heading text-4xl font-black text-white">
            What I Create
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 animate-on-scroll border border-white/5">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <h4 className="font-heading font-bold text-white text-2xl mb-3">
              Educational Tech
            </h4>
            <p className="font-body text-on-surface-variant">
              Simplifying complex technical concepts, English grammar rules, and
              software tutorials for Nepali students.
            </p>
          </div>

          <div
            className="glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 animate-on-scroll border border-white/5"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-6">
              <span className="material-symbols-outlined text-3xl">lightbulb</span>
            </div>
            <h4 className="font-heading font-bold text-white text-2xl mb-3">
              Motivation & Career
            </h4>
            <p className="font-body text-on-surface-variant">
              Guidance for students and young professionals on discipline, goal
              setting, and navigating the modern job market.
            </p>
          </div>

          <div
            className="glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 animate-on-scroll border border-white/5"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white mb-6">
              <span className="material-symbols-outlined text-3xl">movie</span>
            </div>
            <h4 className="font-heading font-bold text-white text-2xl mb-3">
              Vlogs & Lifestyle
            </h4>
            <p className="font-body text-on-surface-variant">
              Behind the scenes of running a printing press, classroom management,
              and balancing a multifaceted career.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
