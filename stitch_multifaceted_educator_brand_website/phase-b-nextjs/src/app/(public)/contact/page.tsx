import Link from "next/link";

export const metadata = {
  title: "Contact Ram Saran Yadav | Let's Connect",
  description:
    "Get in touch with Ram Saran Yadav for teaching inquiries, commercial printing services, or content collaborations.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header Section */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 animate-on-scroll">
          <span
            className="material-symbols-outlined text-6xl text-primary mb-6"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            mail
          </span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6">
            Let&apos;s Connect
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-2xl mx-auto">
            Whether you are a student seeking guidance, or a business looking
            for high-quality printing solutions, I am here to help.
          </p>
        </div>
      </section>

      {/* High-Priority Contact Cards */}
      <section className="py-12 px-6 md:px-16 max-w-7xl mx-auto relative z-20 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Direct Inquiry */}
          <div className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-all text-center group animate-on-scroll">
            <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">mail</span>
            </div>
            <h3 className="font-heading font-bold text-white text-xl mb-2">
              Direct Inquiry
            </h3>
            <p className="font-body text-sm text-on-surface-variant mb-4">
              Email me directly for speaking engagements or general queries.
            </p>
            <a
              href="mailto:contact@ramsaran.com"
              className="font-heading font-bold text-primary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              contact@ramsaran.com
            </a>
          </div>

          {/* Office Hours */}
          <div
            className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-secondary/50 transition-all text-center group animate-on-scroll"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="w-16 h-16 rounded-full bg-secondary/20 text-secondary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">
                schedule
              </span>
            </div>
            <h3 className="font-heading font-bold text-white text-xl mb-2">
              Office Hours
            </h3>
            <p className="font-body text-sm text-on-surface-variant mb-4">
              Visit United Digital Printing Press during business hours.
            </p>
            <p className="font-heading font-bold text-white">
              Sun - Fri: 10:00 AM - 6:00 PM
            </p>
          </div>

          {/* Call Support */}
          <div
            className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-all text-center group animate-on-scroll"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">call</span>
            </div>
            <h3 className="font-heading font-bold text-white text-xl mb-2">
              Call Support
            </h3>
            <p className="font-body text-sm text-on-surface-variant mb-4">
              For urgent business printing or educational consultations.
            </p>
            <a
              href="tel:+9779800000000"
              className="font-heading font-bold text-primary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              +977 980 000 0000
            </a>
          </div>
        </div>
      </section>

      {/* Main Contact Section (Form + Map) */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-on-scroll">
            <h2 className="font-heading text-3xl font-black text-white mb-6">
              Send a Message
            </h2>
            <p className="font-body text-on-surface-variant mb-10">
              Fill out the form below and I will get back to you as soon as
              possible.
            </p>

            <form id="contactForm" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-heading text-sm font-bold text-white-variant mb-2"
                  >
                    Your Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-heading text-sm font-bold text-white-variant mb-2"
                  >
                    Your Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block font-heading text-sm font-bold text-white-variant mb-2"
                >
                  Subject <span className="text-primary">*</span>
                </label>
                <select
                  id="subject"
                  required
                  className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
                >
                  <option value="" disabled selected>
                    Select a topic...
                  </option>
                  <option value="teaching">Educational Inquiry</option>
                  <option value="printing">Printing Press Services</option>
                  <option value="content">Content Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-heading text-sm font-bold text-white-variant mb-2"
                >
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-primary text-black font-heading font-bold rounded-xl hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(255,122,0,0.4)] flex items-center justify-center gap-2"
              >
                Send Message
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </form>
          </div>

          {/* Visuals & Socials */}
          <div className="space-y-12 animate-on-scroll">
            <div className="glass-panel p-2 rounded-3xl border border-white/10 relative overflow-hidden group h-[300px]">
              {/* Map Placeholder */}
              <div className="absolute inset-0 bg-surface flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-white/10 group-hover:scale-110 transition-transform duration-500">
                  map
                </span>
                <p className="absolute bottom-6 font-heading font-bold text-white-variant text-sm tracking-widest uppercase">
                  Butwal, Nepal
                </p>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-white/5">
              <h3 className="font-heading text-2xl font-bold text-white mb-6">
                Connect on Socials
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all hover:-translate-y-1"
                  aria-label="Facebook"
                >
                  FB
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all hover:-translate-y-1"
                  aria-label="Twitter"
                >
                  TW
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all hover:-translate-y-1"
                  aria-label="Instagram"
                >
                  IG
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all hover:-translate-y-1"
                  aria-label="YouTube"
                >
                  YT
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  IN
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
