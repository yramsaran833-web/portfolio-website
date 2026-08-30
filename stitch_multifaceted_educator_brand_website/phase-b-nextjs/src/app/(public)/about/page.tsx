import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Ram Saran Yadav | Journey & Vision",
  description:
    "Read the professional biography and career journey of Ram Saran Yadav, spanning education, digital printing, and content creation.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Ambient Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Faint Outline Background Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden pointer-events-none z-0 opacity-10">
          <div
            className="font-heading font-black text-[10rem] md:text-[18rem] text-transparent leading-[0.85] select-none"
            style={{
              WebkitTextStroke: "2px #ffffff",
              whiteSpace: "nowrap",
            }}
          >
            ABOUT
            <br />
            ABOUT
          </div>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center h-[400px] flex items-center justify-center animate-on-scroll">
          {/* Back SVG Wire (Goes behind text) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1000 400"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <filter
                id="neon-glow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Background loops */}
            <path
              d="M-50,300 C150,350 200,50 350,150 C450,220 300,380 400,320 C550,230 550,50 650,80 C750,110 600,280 750,320 C900,360 950,150 1050,200"
              fill="none"
              stroke="#FF7A00"
              strokeWidth="5"
              filter="url(#neon-glow)"
            />
          </svg>

          {/* Foreground Text */}
          <h1
            className="font-heading font-black text-7xl md:text-9xl text-white tracking-tighter relative z-20 select-none flex items-center justify-center"
            style={{ filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.5))" }}
          >
            Ab
            <img
              src="/assets/img/Logo.png"
              alt="O"
              className="inline-block h-[1.1em] w-auto ml-3 mr-1 -translate-y-[5%] drop-shadow-[0_1px_1px_rgba(255,255,255,1)] drop-shadow-[0_-1px_1px_rgba(255,255,255,1)] drop-shadow-[1px_0_1px_rgba(255,255,255,1)] drop-shadow-[-1px_0_1px_rgba(255,255,255,1)]"
            />
            ut Me
          </h1>

          {/* Arched text on the left */}
          <div className="absolute left-[5%] md:left-[15%] top-[15%] md:top-[25%] -rotate-12 z-30 hidden md:block">
            <svg viewBox="0 0 200 200" width="150" height="150">
              <path
                id="curve"
                d="M 20,100 A 80,80 0 0,1 180,100"
                fill="transparent"
              />
              <text
                className="font-heading font-bold text-[10px] uppercase"
                fill="#FF7A00"
                letterSpacing="6"
              >
                <textPath href="#curve" startOffset="50%" textAnchor="middle">
                  Educator & Creator
                </textPath>
              </text>
            </svg>
          </div>

          {/* Front SVG Wire (Goes in front of text) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-30 opacity-90"
            viewBox="0 0 1000 400"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Overlapping foreground loops (gives the illusion of weaving) */}
            <path
              d="M220,180 C250,320 350,300 320,200"
              fill="none"
              stroke="#FF7A00"
              strokeWidth="5"
              filter="url(#neon-glow)"
            />
            <path
              d="M620,120 C680,250 780,200 700,300"
              fill="none"
              stroke="#FF7A00"
              strokeWidth="5"
              filter="url(#neon-glow)"
            />
          </svg>
        </div>

        <div className="absolute bottom-8 w-full text-center z-40 px-6 animate-on-scroll">
          <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
            A dedication to lifelong learning and community empowerment.
          </p>
        </div>
      </section>

      {/* Editorial Biography Section */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Portrait Image */}
          <div className="lg:w-5/12 w-full animate-on-scroll relative">
            <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full z-0"></div>
            <div className="glass-panel p-2 rounded-3xl relative z-10 border border-white/10 shadow-2xl">
              <img
                src="/RAm.jpg"
                alt="Ram Saran Yadav"
                className="w-full h-auto rounded-2xl object-cover aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
          {/* Editorial Text */}
          <div
            className="lg:w-7/12 w-full animate-on-scroll"
            style={{ transitionDelay: "200ms" }}
          >
            <h2 className="font-heading text-sm text-primary uppercase tracking-widest font-bold mb-4">
              The Journey
            </h2>
            <h3 className="font-heading text-4xl md:text-5xl font-black text-white mb-8">
              From Butwal to Building Futures.
            </h3>

            <div className="space-y-6 font-body text-lg text-on-surface-variant leading-relaxed">
              <p>
                <strong className="text-white">Ram Saran Yadav</strong> is not
                just an educator; he is a community builder, a visionary
                entrepreneur, and a digital creator committed to transforming
                lives.
              </p>
              <p>
                Beginning his academic journey at Butwal Multiple Campus, Ram
                Saran discovered early on that true education goes beyond the
                confines of a textbook. With over a decade of experience serving
                as a Government English Teacher, he has mentored thousands of
                students, equipping them with both linguistic proficiency and the
                vital life skills necessary for modern success.
              </p>
              <p>
                Never one to settle, his drive to create tangible impact led him
                to co-found the{" "}
                <strong className="text-secondary">
                  United Digital Printing Press
                </strong>
                , merging enterprise with creativity. Today, he seamlessly
                balances his roles in the classroom, the boardroom, and behind
                the camera, sharing his journey with a growing global audience on
                YouTube.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy (Mission, Vision, Values, Philosophy) */}
      <section className="py-24 relative overflow-hidden bg-surface/30 border-y border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-heading text-sm text-primary uppercase tracking-widest font-bold mb-4">
              Core Philosophy
            </h2>
            <h3 className="font-heading text-4xl font-black text-white">
              What Drives Me
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {/* Mission */}
            <div className="glass-panel p-10 rounded-3xl border border-white/10 hover:border-primary/40 transition-colors animate-on-scroll">
              <span className="material-symbols-outlined text-4xl text-primary mb-6">
                rocket_launch
              </span>
              <h4 className="font-heading text-2xl font-bold text-white mb-4">
                My Mission
              </h4>
              <p className="font-body text-on-surface-variant leading-relaxed">
                To continuously inspire minds and empower local communities by
                providing accessible, high-quality education and building
                enterprises that create real opportunities.
              </p>
            </div>
            {/* Vision */}
            <div
              className="glass-panel p-10 rounded-3xl border border-white/10 hover:border-primary/40 transition-colors animate-on-scroll"
              style={{ transitionDelay: "100ms" }}
            >
              <span className="material-symbols-outlined text-4xl text-primary mb-6">
                visibility
              </span>
              <h4 className="font-heading text-2xl font-bold text-white mb-4">
                My Vision
              </h4>
              <p className="font-body text-on-surface-variant leading-relaxed">
                To cultivate a society where every individual possesses the
                skills, discipline, and resources required to architect their own
                successful future.
              </p>
            </div>
            {/* Teaching Philosophy */}
            <div className="glass-panel p-10 rounded-3xl border border-white/10 hover:border-primary/40 transition-colors animate-on-scroll md:col-span-2">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-8">
                  <span className="material-symbols-outlined text-5xl text-secondary mb-4 block">
                    menu_book
                  </span>
                  <h4 className="font-heading text-2xl font-bold text-white mb-2">
                    Teaching
                    <br />
                    Philosophy
                  </h4>
                </div>
                <div className="md:w-2/3">
                  <p className="font-body text-xl text-white/90 italic mb-6 leading-relaxed">
                    &quot;Education is not the filling of a pail, but the
                    lighting of a fire.&quot;
                  </p>
                  <p className="font-body text-on-surface-variant">
                    I firmly believe in the power of the{" "}
                    <strong>3 Ds: Determination, Discipline, and Dedication</strong>. A great teacher doesn&apos;t just deliver
                    facts; they foster resilience, critical thinking, and a
                    lifelong passion for continuous learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Timeline */}
      <section className="py-32 px-6 md:px-16 max-w-4xl mx-auto">
        <div className="text-center mb-24 animate-on-scroll">
          <h2 className="font-heading text-sm text-primary uppercase tracking-widest font-bold mb-4">
            Milestones
          </h2>
          <h3 className="font-heading text-4xl font-black text-white">
            Professional Timeline
          </h3>
        </div>

        <div className="relative before:content-[''] before:absolute before:inset-y-0 before:left-[28px] md:before:left-1/2 before:w-[2px] before:bg-gradient-to-b before:from-primary/0 before:via-primary/50 before:to-primary/0 before:-translate-x-1/2">
          {/* 2014 */}
          <div className="relative flex md:justify-between items-center mb-16 group animate-on-scroll">
            <div className="hidden md:block w-5/12 text-right pr-12">
              <div className="font-heading font-black text-5xl text-white/20 group-hover:text-primary/40 transition-colors">
                2014
              </div>
            </div>
            <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-primary group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(255,122,0,0.8)] transition-all z-10"></div>
            <div className="pl-16 md:pl-0 w-full md:w-5/12 md:pl-12">
              <div className="md:hidden font-heading font-black text-3xl text-primary/40 mb-2">
                2014
              </div>
              <h4 className="font-heading text-xl font-bold text-white mb-2">
                Academic Foundation
              </h4>
              <p className="font-body text-on-surface-variant text-sm">
                Graduated from Butwal Multiple Campus, laying the groundwork for a
                lifelong career in education and leadership.
              </p>
            </div>
          </div>

          {/* 2016 */}
          <div className="relative flex md:justify-between items-center mb-16 group animate-on-scroll">
            <div className="pl-16 md:pl-0 w-full md:w-5/12 text-left md:text-right md:pr-12 order-2 md:order-1">
              <div className="md:hidden font-heading font-black text-3xl text-primary/40 mb-2">
                2016
              </div>
              <h4 className="font-heading text-xl font-bold text-white mb-2">
                The Educator Journey Begins
              </h4>
              <p className="font-body text-on-surface-variant text-sm">
                Officially began service as a Government English Teacher,
                dedicating myself to shaping the minds of secondary students.
              </p>
            </div>
            <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-primary group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(255,122,0,0.8)] transition-all z-10 order-1 md:order-2"></div>
            <div className="hidden md:block w-5/12 pl-12 order-3">
              <div className="font-heading font-black text-5xl text-white/20 group-hover:text-primary/40 transition-colors">
                2016
              </div>
            </div>
          </div>

          {/* 2019 */}
          <div className="relative flex md:justify-between items-center mb-16 group animate-on-scroll">
            <div className="hidden md:block w-5/12 text-right pr-12">
              <div className="font-heading font-black text-5xl text-white/20 group-hover:text-primary/40 transition-colors">
                2019
              </div>
            </div>
            <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-primary group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(255,122,0,0.8)] transition-all z-10"></div>
            <div className="pl-16 md:pl-0 w-full md:w-5/12 md:pl-12">
              <div className="md:hidden font-heading font-black text-3xl text-primary/40 mb-2">
                2019
              </div>
              <h4 className="font-heading text-xl font-bold text-white mb-2">
                Entrepreneurial Leap
              </h4>
              <p className="font-body text-on-surface-variant text-sm">
                Co-founded United Digital Printing Press alongside Ramesh Harijan,
                scaling it to handle enterprise-level commercial orders.
              </p>
            </div>
          </div>

          {/* 2023 */}
          <div className="relative flex md:justify-between items-center group animate-on-scroll">
            <div className="pl-16 md:pl-0 w-full md:w-5/12 text-left md:text-right md:pr-12 order-2 md:order-1">
              <div className="md:hidden font-heading font-black text-3xl text-primary/40 mb-2">
                2023
              </div>
              <h4 className="font-heading text-xl font-bold text-white mb-2">
                Digital Expansion
              </h4>
              <p className="font-body text-on-surface-variant text-sm">
                Launched as a Digital Content Creator, sharing educational vlogs,
                teaching insights, and lifestyle content to a global audience.
              </p>
            </div>
            <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(255,122,0,0.8)] z-10 order-1 md:order-2"></div>
            <div className="hidden md:block w-5/12 pl-12 order-3">
              <div className="font-heading font-black text-5xl text-primary/40 transition-colors">
                2023
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience, Qualifications, Awards, Skills */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column (Experience & Ed) */}
          <div className="space-y-12">
            <div className="animate-on-scroll">
              <h3 className="font-heading text-2xl font-bold text-white flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">
                  work
                </span>{" "}
                Experience
              </h3>
              <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-primary mb-4">
                <h4 className="font-heading font-bold text-white text-lg">
                  Government English Teacher
                </h4>
                <p className="text-secondary text-sm font-bold mb-2">
                  Shree Janta Secondary School | 10+ Years
                </p>
                <p className="font-body text-on-surface-variant text-sm">
                  Spearheading English language curriculum and mentoring secondary
                  students for board examinations.
                </p>
              </div>
              <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-secondary">
                <h4 className="font-heading font-bold text-white text-lg">
                  Co-Founder & Director
                </h4>
                <p className="text-secondary text-sm font-bold mb-2">
                  United Digital Printing Press | 5+ Years
                </p>
                <p className="font-body text-on-surface-variant text-sm">
                  Overseeing enterprise operations, client relations, and massive
                  scale commercial print production.
                </p>
              </div>
            </div>

            <div className="animate-on-scroll">
              <h3 className="font-heading text-2xl font-bold text-white flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">
                  school
                </span>{" "}
                Qualifications
              </h3>
              <div className="glass-panel p-6 rounded-2xl">
                <h4 className="font-heading font-bold text-white text-lg">
                  Bachelor of Education (B.Ed)
                </h4>
                <p className="text-secondary text-sm font-bold mb-1">
                  English Specialization
                </p>
                <p className="font-body text-on-surface-variant text-sm">
                  Butwal Multiple Campus
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (Awards & Skills) */}
          <div className="space-y-12">
            <div
              className="animate-on-scroll"
              style={{ transitionDelay: "100ms" }}
            >
              <h3 className="font-heading text-2xl font-bold text-white flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">
                  emoji_events
                </span>{" "}
                Awards & Recognition
              </h3>
              <div className="glass-panel p-6 rounded-2xl mb-4 group hover:border-primary/50 transition-colors">
                <h4 className="font-heading font-bold text-white text-lg">
                  Letter of Appreciation
                </h4>
                <p className="font-body text-on-surface-variant text-sm mt-2">
                  Awarded for outstanding contribution to educational excellence
                  and community service.
                </p>
                <Link
                  href="/awards"
                  className="inline-flex items-center gap-2 mt-4 text-primary text-sm font-bold group-hover:translate-x-2 transition-transform"
                >
                  View Details
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            <div
              className="animate-on-scroll"
              style={{ transitionDelay: "100ms" }}
            >
              <h3 className="font-heading text-2xl font-bold text-white flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">
                  psychology
                </span>{" "}
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 glass-panel border border-white/10 rounded-full text-sm font-body text-white">
                  Curriculum Design
                </span>
                <span className="px-4 py-2 glass-panel border border-white/10 rounded-full text-sm font-body text-white">
                  Public Speaking
                </span>
                <span className="px-4 py-2 glass-panel border border-white/10 rounded-full text-sm font-body text-white">
                  Commercial Printing
                </span>
                <span className="px-4 py-2 glass-panel border border-white/10 rounded-full text-sm font-body text-white">
                  Video Editing
                </span>
                <span className="px-4 py-2 glass-panel border border-white/10 rounded-full text-sm font-body text-white">
                  Content Strategy
                </span>
                <span className="px-4 py-2 glass-panel border border-white/10 rounded-full text-sm font-body text-white">
                  Leadership & Mentorship
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 relative text-center overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-black to-black z-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 animate-on-scroll">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
            Ready to collaborate?
          </h2>
          <p className="font-body text-lg text-on-surface-variant mb-10">
            Whether it&apos;s educational consulting, printing solutions, or
            content creation, I&apos;m always open to discussing new opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-heading font-bold rounded-full hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(255,122,0,0.4)] shimmer-btn"
          >
            Get In Touch
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
    </>
  );
}
