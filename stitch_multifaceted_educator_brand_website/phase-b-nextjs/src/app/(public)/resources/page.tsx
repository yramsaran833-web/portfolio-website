import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Student Resources | Ram Saran Yadav",
  description:
    "Download study materials, grammar notes, assignments, and past question papers provided by Ram Saran Yadav.",
};

export default function ResourcesPage() {
  return (
    <>
      {/* Header Section */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 animate-on-scroll">
          <span className="material-symbols-outlined text-6xl text-secondary mb-6">
            folder_open
          </span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6">
            Study Materials
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-2xl mx-auto mb-10">
            Comprehensive notes, assignments, and exam preparation resources
            tailored for academic success.
          </p>

          {/* Search Bar UI */}
          <div className="max-w-xl mx-auto relative shadow-2xl">
            <input
              type="text"
              placeholder="Search for notes, chapters, or topics..."
              className="w-full bg-surface border border-white/20 rounded-full py-4 pl-12 pr-6 text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
            />
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
              search
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 px-6 md:px-16 max-w-7xl mx-auto relative z-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar: Subject Filters */}
          <aside className="lg:w-1/4 shrink-0 animate-on-scroll">
            <div className="glass-panel p-6 rounded-2xl sticky top-28">
              <h3 className="font-heading font-bold text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  filter_list
                </span>{" "}
                Subjects
              </h3>
              <ul className="space-y-2">
                <li>
                  <button className="w-full text-left bg-primary/20 text-white font-bold px-4 py-2.5 rounded-lg transition-colors flex justify-between items-center">
                    English Grammar{" "}
                    <span className="text-xs bg-primary px-2 py-0.5 rounded">
                      12
                    </span>
                  </button>
                </li>
                <li>
                  <button className="w-full text-left hover:bg-white/5 text-on-surface-variant hover:text-white px-4 py-2.5 rounded-lg transition-colors flex justify-between items-center">
                    Literature Summaries{" "}
                    <span className="text-xs bg-white/10 px-2 py-0.5 rounded">
                      8
                    </span>
                  </button>
                </li>
                <li>
                  <button className="w-full text-left hover:bg-white/5 text-on-surface-variant hover:text-white px-4 py-2.5 rounded-lg transition-colors flex justify-between items-center">
                    Past Exam Papers{" "}
                    <span className="text-xs bg-white/10 px-2 py-0.5 rounded">
                      15
                    </span>
                  </button>
                </li>
                <li>
                  <button className="w-full text-left hover:bg-white/5 text-on-surface-variant hover:text-white px-4 py-2.5 rounded-lg transition-colors flex justify-between items-center">
                    Assignments{" "}
                    <span className="text-xs bg-white/10 px-2 py-0.5 rounded">
                      4
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </aside>

          {/* Grid of Download Cards */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Resource Card 1 */}
              <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-secondary/50 transition-colors group animate-on-scroll">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#f40f02]/10 text-[#f40f02] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-2xl">
                      picture_as_pdf
                    </span>
                  </div>
                  <span className="text-xs font-bold bg-white/5 px-2 py-1 rounded text-on-surface-variant">
                    356 KB
                  </span>
                </div>
                <h4 className="font-heading font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                  Active & Passive Voice
                </h4>
                <p className="font-body text-xs text-on-surface-variant mb-6 line-clamp-2">
                  Complete guide to Active and Passive Voice conversions.
                </p>
                <div className="flex gap-2">
                  <a
                    href="/assets/resources/Active-and-passive-voice.pdf"
                    target="_blank"
                    className="flex-1 text-center bg-white/5 hover:bg-white/10 text-white py-2 rounded-lg font-heading text-xs font-bold transition-colors"
                  >
                    Preview
                  </a>
                  <a
                    href="/assets/resources/Active-and-passive-voice.pdf"
                    download
                    className="flex-1 bg-secondary text-[#0a0a0a] py-2 rounded-lg font-heading text-xs font-bold transition-colors shadow-lg hover:brightness-110 flex items-center justify-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      download
                    </span>{" "}
                    Download
                  </a>
                </div>
              </div>

              {/* Resource Card 2 */}
              <div
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-secondary/50 transition-colors group animate-on-scroll"
                style={{ transitionDelay: "100ms" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#f40f02]/10 text-[#f40f02] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-2xl">
                      picture_as_pdf
                    </span>
                  </div>
                  <span className="text-xs font-bold bg-white/5 px-2 py-1 rounded text-on-surface-variant">
                    1.4 MB
                  </span>
                </div>
                <h4 className="font-heading font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                  Course 8: Voice Notes
                </h4>
                <p className="font-body text-xs text-on-surface-variant mb-6 line-clamp-2">
                  In-depth Course 8 notes on Active and Passive voice.
                </p>
                <div className="flex gap-2">
                  <a
                    href="/assets/resources/Course 8 Active and Passive Voice.pdf"
                    target="_blank"
                    className="flex-1 text-center bg-white/5 hover:bg-white/10 text-white py-2 rounded-lg font-heading text-xs font-bold transition-colors"
                  >
                    Preview
                  </a>
                  <a
                    href="/assets/resources/Course 8 Active and Passive Voice.pdf"
                    download
                    className="flex-1 bg-secondary text-[#0a0a0a] py-2 rounded-lg font-heading text-xs font-bold transition-colors shadow-lg hover:brightness-110 flex items-center justify-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      download
                    </span>{" "}
                    Download
                  </a>
                </div>
              </div>

              {/* Resource Card 3 */}
              <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-secondary/50 transition-colors group animate-on-scroll">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#f40f02]/10 text-[#f40f02] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-2xl">
                      picture_as_pdf
                    </span>
                  </div>
                  <span className="text-xs font-bold bg-white/5 px-2 py-1 rounded text-on-surface-variant">
                    280 KB
                  </span>
                </div>
                <h4 className="font-heading font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                  Prepositions Note
                </h4>
                <p className="font-body text-xs text-on-surface-variant mb-6 line-clamp-2">
                  Complete guide to correct preposition usage in English.
                </p>
                <div className="flex gap-2">
                  <a
                    href="/assets/resources/Preposition.pdf"
                    target="_blank"
                    className="flex-1 text-center bg-white/5 hover:bg-white/10 text-white py-2 rounded-lg font-heading text-xs font-bold transition-colors"
                  >
                    Preview
                  </a>
                  <a
                    href="/assets/resources/Preposition.pdf"
                    download
                    className="flex-1 bg-secondary text-[#0a0a0a] py-2 rounded-lg font-heading text-xs font-bold transition-colors shadow-lg hover:brightness-110 flex items-center justify-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      download
                    </span>{" "}
                    Download
                  </a>
                </div>
              </div>

              {/* Resource Card 4 */}
              <div
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-secondary/50 transition-colors group animate-on-scroll"
                style={{ transitionDelay: "100ms" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#f40f02]/10 text-[#f40f02] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-2xl">
                      picture_as_pdf
                    </span>
                  </div>
                  <span className="text-xs font-bold bg-white/5 px-2 py-1 rounded text-on-surface-variant">
                    410 KB
                  </span>
                </div>
                <h4 className="font-heading font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                  Causative Verbs
                </h4>
                <p className="font-body text-xs text-on-surface-variant mb-6 line-clamp-2">
                  Detailed examples and structures for causative verbs.
                </p>
                <div className="flex gap-2">
                  <a
                    href="/assets/resources/Causative verb.pdf"
                    target="_blank"
                    className="flex-1 text-center bg-white/5 hover:bg-white/10 text-white py-2 rounded-lg font-heading text-xs font-bold transition-colors"
                  >
                    Preview
                  </a>
                  <a
                    href="/assets/resources/Causative verb.pdf"
                    download
                    className="flex-1 bg-secondary text-[#0a0a0a] py-2 rounded-lg font-heading text-xs font-bold transition-colors shadow-lg hover:brightness-110 flex items-center justify-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      download
                    </span>{" "}
                    Download
                  </a>
                </div>
              </div>
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-heading font-bold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background">
                Load More Resources
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
