import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Teaching Journey | Ram Saran Yadav",
  description:
    "Explore the teaching journey of Ram Saran Yadav, a Government Teacher dedicated to empowering students through discipline, determination, and dedication.",
};

export default function TeachingPage() {
  return (
    <>
      {/* Header Section */}
      <section
        className="py-24 px-6 md:px-16 max-w-7xl mx-auto text-center relative overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/assets/img/Teaching_Hero.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/85 z-0"></div>
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="relative z-10 animate-on-scroll">
          <span className="material-symbols-outlined text-6xl text-primary mb-6">
            school
          </span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6">
            Teaching Journey
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-2xl mx-auto">
            Guiding minds, shaping futures, and fostering a culture of excellence
            in education.
          </p>
        </div>
      </section>

      {/* Detailed Timeline */}
      <section className="py-16 px-6 md:px-16 max-w-5xl mx-auto">
        <div className="relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-primary before:via-secondary before:to-black">
          {/* Timeline Item 1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-16 animate-on-scroll">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <span className="material-symbols-outlined text-white text-[20px]">
                menu_book
              </span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-panel p-8 rounded-2xl hover:border-primary/50 transition-colors">
              <span className="font-body text-sm font-bold text-primary mb-2 block tracking-widest uppercase">
                2010
              </span>
              <h4 className="font-heading text-2xl font-bold text-white mb-3">
                Academic Foundation
              </h4>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                Began the foundational years of my educational career at Butwal
                Multiple Campus (BMC). This period was marked by intensive
                learning, pedagogical training, and developing a profound
                understanding of student psychology and curriculum development.
              </p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-16 animate-on-scroll">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-secondary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <span className="material-symbols-outlined text-background text-[20px]">
                workspace_premium
              </span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-panel p-8 rounded-2xl hover:border-secondary/50 transition-colors">
              <span className="font-body text-sm font-bold text-secondary mb-2 block tracking-widest uppercase">
                2020
              </span>
              <h4 className="font-heading text-2xl font-bold text-white mb-3">
                Government Appointment
              </h4>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                Achieved a significant career milestone by being officially
                appointed as a Government Teacher at Shree Janta Secondary
                School, Odwaliya. Trusted with shaping the academic framework for
                hundreds of students annually.
              </p>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-16 animate-on-scroll">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <span className="material-symbols-outlined text-background text-[20px]">
                cast_for_education
              </span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-panel p-8 rounded-2xl hover:border-white/50 transition-colors">
              <span className="font-body text-sm font-bold text-white mb-2 block tracking-widest uppercase">
                2021 - Present
              </span>
              <h4 className="font-heading text-2xl font-bold text-white mb-3">
                Digital Education Expansion
              </h4>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                Launched comprehensive digital education initiatives. By
                integrating modern technology, video lectures, and interactive
                resources, I expanded my classroom beyond physical walls to reach
                over 100K students globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy & Approach */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="font-heading text-sm text-secondary uppercase tracking-widest font-bold mb-4">
            Methodology
          </h2>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-white">
            The 3D Teaching Philosophy
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel p-10 rounded-2xl border-t border-white/10 animate-on-scroll">
            <h4 className="font-heading text-xl font-bold text-white mb-4">
              Determination
            </h4>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Fostering a relentless pursuit of knowledge. I teach students to
              set clear goals and persistently work towards them, overcoming
              academic challenges with a growth mindset.
            </p>
          </div>
          <div
            className="glass-panel p-10 rounded-2xl border-t border-white/10 animate-on-scroll"
            style={{ transitionDelay: "150ms" }}
          >
            <h4 className="font-heading text-xl font-bold text-white mb-4">
              Discipline
            </h4>
            <p className="font-body text-on-surface-variant leading-relaxed">
              The foundation of all success. I maintain a structured, respectful
              classroom environment that encourages focus, time management, and
              ethical behavior.
            </p>
          </div>
          <div
            className="glass-panel p-10 rounded-2xl border-t border-white/10 animate-on-scroll"
            style={{ transitionDelay: "300ms" }}
          >
            <h4 className="font-heading text-xl font-bold text-white mb-4">
              Dedication
            </h4>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Leading by example. My commitment to my students extends beyond
              school hours, providing continuous mentorship, resources, and
              unwavering support.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action: Student Resources */}
      <section className="py-24 px-6 md:px-16 max-w-5xl mx-auto text-center animate-on-scroll">
        <div className="glass-panel p-16 rounded-[3rem] border border-primary/20 bg-primary/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-5xl text-primary mb-6">
              library_books
            </span>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Access Study Materials
            </h3>
            <p className="font-body text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
              Empower your learning journey with my comprehensive collection of
              grammar notes, past question papers, and interactive assignments.
            </p>
            <Link
              href="/resources"
              className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-heading font-bold text-lg hover:brightness-110 transition-all shadow-lg shadow-primary/30"
            >
              View Student Resources{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
