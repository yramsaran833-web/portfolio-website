import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "United Digital Printing Press | Ram Saran Yadav",
  description:
    "Delivering commercial printing and enterprise design solutions at scale. Over 10,000+ orders successfully completed.",
};

export default function PrintingPage() {
  return (
    <>
      {/* Premium Hero & Company Introduction */}
      <section className="relative min-h-[85vh] flex items-center py-20 bg-surface overflow-hidden">
        {/* Static Background Image instead of scroll canvas */}
        <img
          src="https://images.unsplash.com/photo-1598425237654-4c05001a1bd3?q=80&w=2070&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-overlay"
          alt="Printing Press Background"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-0 pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-panel rounded-full mb-6 border border-white/10 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-xs font-heading text-secondary uppercase tracking-widest font-semibold">
                United Digital Printing Press
              </span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight drop-shadow-2xl mb-6 text-white">
              Precision in <span className="text-primary">Print.</span>
              <br />
              Excellence in <span className="text-secondary">Design.</span>
            </h1>
            <p className="font-body text-lg text-on-surface-variant max-w-lg mb-8 leading-relaxed">
              Delivering commercial printing and enterprise design solutions at
              scale. Over 10,000+ orders successfully completed.
            </p>
          </div>

          <div
            className="flex flex-col items-start lg:items-end text-left lg:text-right animate-on-scroll"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="glass-panel p-8 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-md max-w-lg w-full text-left">
              <h3 className="font-heading text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">
                  handshake
                </span>{" "}
                Leadership & Partners
              </h3>

              <div className="flex flex-col gap-6 mb-6">
                {/* Partner 1 */}
                <div className="flex items-center gap-4">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-primary shrink-0 bg-black flex items-center justify-center p-1 shadow-lg">
                    <img
                      src="/assets/img/Logo.png"
                      alt="Ram Saran Yadav"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-lg leading-tight">
                      Ram Saran Yadav
                    </h4>
                    <div className="flex items-center gap-1 text-sm text-on-surface-variant mt-1">
                      <span className="material-symbols-outlined text-sm">
                        call
                      </span>
                      <a
                        href="tel:9807514000"
                        className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                      >
                        9807514000
                      </a>
                    </div>
                  </div>
                </div>

                {/* Partner 2 */}
                <div className="flex items-center gap-4">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-secondary shrink-0 bg-surface flex items-center justify-center shadow-lg">
                    <img
                      src="/assets/img/ramesh-harjan.png"
                      alt="Ramesh Harijan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-lg leading-tight">
                      Ramesh Harijan
                    </h4>
                    <div className="flex items-center gap-1 text-sm text-on-surface-variant mt-1">
                      <span className="material-symbols-outlined text-sm">
                        call
                      </span>
                      <a
                        href="tel:9812992600"
                        className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                      >
                        9812992600
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary">
                  mail
                </span>
                <a
                  href="mailto:uniteddigitalprintingpress@gmail.com"
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                >
                  uniteddigitalprintingpress@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services Grid */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-white/5 relative z-20">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <h2 className="font-heading text-sm text-secondary uppercase tracking-widest font-bold mb-4">
            What We Do
          </h2>
          <h3 className="font-heading text-4xl md:text-5xl font-black text-white mb-4">
            Commercial Printing Solutions
          </h3>
          <p className="font-body text-on-surface-variant">
            From high-impact outdoor marketing to precision corporate identity
            materials, we deliver unmatched quality at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-colors group animate-on-scroll">
            <span className="material-symbols-outlined text-5xl text-primary mb-6 block group-hover:scale-110 transition-transform">
              panorama
            </span>
            <h4 className="font-heading font-bold text-white text-2xl mb-3">
              Flex & Banner Printing
            </h4>
            <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-6">
              High-resolution outdoor and indoor banners built to withstand the
              elements while maintaining vibrant colors.
            </p>
            <ul className="space-y-2 text-sm font-bold text-white/80">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[16px]">
                  check
                </span>{" "}
                Hoardings
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[16px]">
                  check
                </span>{" "}
                Roll-up Standees
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[16px]">
                  check
                </span>{" "}
                Backlit Boards
              </li>
            </ul>
          </div>

          {/* Service 2 */}
          <div
            className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-secondary/50 transition-colors group animate-on-scroll"
            style={{ transitionDelay: "100ms" }}
          >
            <span className="material-symbols-outlined text-5xl text-secondary mb-6 block group-hover:scale-110 transition-transform">
              badge
            </span>
            <h4 className="font-heading font-bold text-white text-2xl mb-3">
              Corporate Identity
            </h4>
            <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-6">
              Premium stationery that represents your brand&apos;s
              professionalism, including ID cards and business cards.
            </p>
            <ul className="space-y-2 text-sm font-bold text-white/80">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[16px]">
                  check
                </span>{" "}
                PVC ID Cards
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[16px]">
                  check
                </span>{" "}
                Lanyards & Badges
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[16px]">
                  check
                </span>{" "}
                Matte/Glossy Business Cards
              </li>
            </ul>
          </div>

          {/* Service 3 */}
          <div
            className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-colors group animate-on-scroll"
            style={{ transitionDelay: "200ms" }}
          >
            <span className="material-symbols-outlined text-5xl text-primary mb-6 block group-hover:scale-110 transition-transform">
              apparel
            </span>
            <h4 className="font-heading font-bold text-white text-2xl mb-3">
              Custom Merchandising
            </h4>
            <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-6">
              High-quality fabric printing for school uniforms, corporate events,
              and personalized gifts.
            </p>
            <ul className="space-y-2 text-sm font-bold text-white/80">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[16px]">
                  check
                </span>{" "}
                T-Shirt Sublimation
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[16px]">
                  check
                </span>{" "}
                Cap Printing
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[16px]">
                  check
                </span>{" "}
                Mug Customization
              </li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-secondary/50 transition-colors group animate-on-scroll">
            <span className="material-symbols-outlined text-5xl text-secondary mb-6 block group-hover:scale-110 transition-transform">
              menu_book
            </span>
            <h4 className="font-heading font-bold text-white text-2xl mb-3">
              Offset & Book Printing
            </h4>
            <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-6">
              Mass scale production for brochures, magazines, school diaries, and
              comprehensive corporate reports.
            </p>
            <ul className="space-y-2 text-sm font-bold text-white/80">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[16px]">
                  check
                </span>{" "}
                School Diaries
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[16px]">
                  check
                </span>{" "}
                Multi-page Brochures
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[16px]">
                  check
                </span>{" "}
                Leaflets & Pamphlets
              </li>
            </ul>
          </div>

          {/* Service 5 */}
          <div
            className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-colors group animate-on-scroll"
            style={{ transitionDelay: "100ms" }}
          >
            <span className="material-symbols-outlined text-5xl text-primary mb-6 block group-hover:scale-110 transition-transform">
              design_services
            </span>
            <h4 className="font-heading font-bold text-white text-2xl mb-3">
              Graphic Design Studio
            </h4>
            <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-6">
              Don&apos;t have a design? Our in-house creative team will architect
              the perfect visual identity for your campaign.
            </p>
            <ul className="space-y-2 text-sm font-bold text-white/80">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[16px]">
                  check
                </span>{" "}
                Logo Design
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[16px]">
                  check
                </span>{" "}
                Vector Tracing
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[16px]">
                  check
                </span>{" "}
                Campaign Layouts
              </li>
            </ul>
          </div>

          {/* Service 6 */}
          <div
            className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-secondary/50 transition-colors group animate-on-scroll flex flex-col justify-center items-center text-center bg-gradient-to-br from-black to-surface"
            style={{ transitionDelay: "200ms" }}
          >
            <h4 className="font-heading font-bold text-white text-2xl mb-4">
              Need Something Custom?
            </h4>
            <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-6">
              We handle massive scale orders and unique printing requests.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0a0a0a] rounded-full font-heading font-bold text-sm hover:bg-primary hover:text-white transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              Request a Quote{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_downward
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us & The Process */}
      <section className="py-24 bg-surface/30 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Why Choose Us */}
            <div className="lg:w-1/2">
              <h2 className="font-heading text-sm text-primary uppercase tracking-widest font-bold mb-4">
                The Advantage
              </h2>
              <h3 className="font-heading text-4xl font-black text-white mb-8">
                Why Businesses Trust United Digital
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4 glass-panel p-6 rounded-2xl">
                  <span className="material-symbols-outlined text-4xl text-primary shrink-0">
                    speed
                  </span>
                  <div>
                    <h4 className="font-heading font-bold text-white text-xl mb-2">
                      Rapid Turnaround
                    </h4>
                    <p className="font-body text-on-surface-variant text-sm">
                      We understand business deadlines. Our high-capacity machines
                      ensure rapid delivery without compromising quality.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 glass-panel p-6 rounded-2xl">
                  <span className="material-symbols-outlined text-4xl text-primary shrink-0">
                    verified
                  </span>
                  <div>
                    <h4 className="font-heading font-bold text-white text-xl mb-2">
                      Premium Quality Control
                    </h4>
                    <p className="font-body text-on-surface-variant text-sm">
                      Every print goes through rigorous quality checks to ensure
                      color accuracy and material durability.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 glass-panel p-6 rounded-2xl">
                  <span className="material-symbols-outlined text-4xl text-primary shrink-0">
                    handshake
                  </span>
                  <div>
                    <h4 className="font-heading font-bold text-white text-xl mb-2">
                      End-to-End Service
                    </h4>
                    <p className="font-body text-on-surface-variant text-sm">
                      From conceptual design in our studio to the final printed
                      product delivered to your door.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Print Process Timeline */}
            <div className="lg:w-1/2">
              <h2 className="font-heading text-sm text-secondary uppercase tracking-widest font-bold mb-4">
                Our Workflow
              </h2>
              <h3 className="font-heading text-4xl font-black text-white mb-8">
                The Print Process
              </h3>

              <div className="relative border-l-2 border-white/10 ml-6 pl-8 space-y-12">
                <div className="relative">
                  <div className="absolute -left-[41px] bg-black border-2 border-secondary text-secondary w-8 h-8 rounded-full flex items-center justify-center font-heading font-bold text-sm">
                    1
                  </div>
                  <h4 className="font-heading font-bold text-white text-xl mb-2">
                    Consultation & Design
                  </h4>
                  <p className="font-body text-on-surface-variant text-sm">
                    We discuss your requirements, material choices, and finalize
                    the artwork for production.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] bg-black border-2 border-secondary text-secondary w-8 h-8 rounded-full flex items-center justify-center font-heading font-bold text-sm">
                    2
                  </div>
                  <h4 className="font-heading font-bold text-white text-xl mb-2">
                    Pre-Press & Proofing
                  </h4>
                  <p className="font-body text-on-surface-variant text-sm">
                    Files are optimized for our machines. We provide digital or
                    physical proofs for your final approval.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] bg-black border-2 border-secondary text-secondary w-8 h-8 rounded-full flex items-center justify-center font-heading font-bold text-sm">
                    3
                  </div>
                  <h4 className="font-heading font-bold text-white text-xl mb-2">
                    Production & Finishing
                  </h4>
                  <p className="font-body text-on-surface-variant text-sm">
                    High-speed printing followed by required finishing (lamination,
                    binding, cutting).
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] bg-secondary text-black w-8 h-8 rounded-full flex items-center justify-center font-heading font-bold text-sm shadow-[0_0_15px_rgba(255,122,0,0.5)]">
                    4
                  </div>
                  <h4 className="font-heading font-bold text-white text-xl mb-2">
                    Delivery
                  </h4>
                  <p className="font-body text-on-surface-variant text-sm">
                    Packaged securely and delivered ready for deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote / Contact Section */}
      <section
        id="quote-form"
        className="py-24 px-6 md:px-16 max-w-5xl mx-auto border-t border-white/5"
      >
        <div className="glass-panel p-10 md:p-16 rounded-[2rem] border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>

          <div className="relative z-10 text-center mb-10">
            <span className="material-symbols-outlined text-5xl text-primary mb-4">
              request_quote
            </span>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Request a Print Quote
            </h3>
            <p className="font-body text-on-surface-variant max-w-xl mx-auto">
              Provide us with the details of your print job, and we&apos;ll get
              back to you with competitive pricing within 24 hours.
            </p>
          </div>

          <form className="relative z-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-heading text-sm font-bold text-white-variant mb-2">
                  Name / Company
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block font-heading text-sm font-bold text-white-variant mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-heading text-sm font-bold text-white-variant mb-2">
                  Service Type
                </label>
                <select
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                >
                  <option value="" disabled selected>
                    Select service...
                  </option>
                  <option value="flex">Flex / Banner</option>
                  <option value="idcard">ID Cards</option>
                  <option value="merch">T-shirt / Mug</option>
                  <option value="offset">Offset / Book Printing</option>
                  <option value="design">Graphic Design</option>
                </select>
              </div>
              <div>
                <label className="block font-heading text-sm font-bold text-white-variant mb-2">
                  Estimated Quantity
                </label>
                <input
                  type="number"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-heading text-sm font-bold text-white-variant mb-2">
                Project Details
              </label>
              <textarea
                required
                rows={4}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Dimensions, paper quality, urgency..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-4 bg-primary text-black font-heading font-bold rounded-xl hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(255,122,0,0.4)]"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
