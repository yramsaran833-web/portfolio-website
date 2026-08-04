const fs = require('fs');
const path = require('path');

const printingPath = path.join(__dirname, 'printing.html');
const currentHtml = fs.readFileSync(printingPath, 'utf8');

// We split right before the Services Grid to keep the Hero and Navbar intact
const splitIndex = currentHtml.indexOf('<!-- MODULE: Services Grid -->');

if (splitIndex === -1) {
    console.error("Could not find split marker <!-- MODULE: Services Grid -->");
    process.exit(1);
}

const topHalf = currentHtml.substring(0, splitIndex);

// Generate massive new business page content
const newContent = `
        <!-- MODULE: Premium Services Grid -->
        <section class="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-white/5 relative z-20">
            <div class="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
                <h2 class="font-heading text-sm text-secondary uppercase tracking-widest font-bold mb-4">What We Do</h2>
                <h3 class="font-heading text-4xl md:text-5xl font-black text-white mb-4">Commercial Printing Solutions</h3>
                <p class="font-body text-on-surface-variant">From high-impact outdoor marketing to precision corporate identity materials, we deliver unmatched quality at scale.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Service 1 -->
                <div class="glass-panel p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-colors group animate-on-scroll">
                    <span class="material-symbols-outlined text-5xl text-primary mb-6 block group-hover:scale-110 transition-transform">panorama</span>
                    <h4 class="font-heading font-bold text-white text-2xl mb-3">Flex & Banner Printing</h4>
                    <p class="font-body text-on-surface-variant text-sm leading-relaxed mb-6">High-resolution outdoor and indoor banners built to withstand the elements while maintaining vibrant colors.</p>
                    <ul class="space-y-2 text-sm font-bold text-white/80">
                        <li class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-[16px]">check</span> Hoardings</li>
                        <li class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-[16px]">check</span> Roll-up Standees</li>
                        <li class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-[16px]">check</span> Backlit Boards</li>
                    </ul>
                </div>

                <!-- Service 2 -->
                <div class="glass-panel p-8 rounded-3xl border border-white/5 hover:border-secondary/50 transition-colors group animate-on-scroll" style="transition-delay: 100ms;">
                    <span class="material-symbols-outlined text-5xl text-secondary mb-6 block group-hover:scale-110 transition-transform">badge</span>
                    <h4 class="font-heading font-bold text-white text-2xl mb-3">Corporate Identity</h4>
                    <p class="font-body text-on-surface-variant text-sm leading-relaxed mb-6">Premium stationery that represents your brand's professionalism, including ID cards and business cards.</p>
                    <ul class="space-y-2 text-sm font-bold text-white/80">
                        <li class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[16px]">check</span> PVC ID Cards</li>
                        <li class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[16px]">check</span> Lanyards & Badges</li>
                        <li class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[16px]">check</span> Matte/Glossy Business Cards</li>
                    </ul>
                </div>

                <!-- Service 3 -->
                <div class="glass-panel p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-colors group animate-on-scroll" style="transition-delay: 200ms;">
                    <span class="material-symbols-outlined text-5xl text-primary mb-6 block group-hover:scale-110 transition-transform">apparel</span>
                    <h4 class="font-heading font-bold text-white text-2xl mb-3">Custom Merchandising</h4>
                    <p class="font-body text-on-surface-variant text-sm leading-relaxed mb-6">High-quality fabric printing for school uniforms, corporate events, and personalized gifts.</p>
                    <ul class="space-y-2 text-sm font-bold text-white/80">
                        <li class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-[16px]">check</span> T-Shirt Sublimation</li>
                        <li class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-[16px]">check</span> Cap Printing</li>
                        <li class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-[16px]">check</span> Mug Customization</li>
                    </ul>
                </div>
                
                <!-- Service 4 -->
                <div class="glass-panel p-8 rounded-3xl border border-white/5 hover:border-secondary/50 transition-colors group animate-on-scroll">
                    <span class="material-symbols-outlined text-5xl text-secondary mb-6 block group-hover:scale-110 transition-transform">menu_book</span>
                    <h4 class="font-heading font-bold text-white text-2xl mb-3">Offset & Book Printing</h4>
                    <p class="font-body text-on-surface-variant text-sm leading-relaxed mb-6">Mass scale production for brochures, magazines, school diaries, and comprehensive corporate reports.</p>
                    <ul class="space-y-2 text-sm font-bold text-white/80">
                        <li class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[16px]">check</span> School Diaries</li>
                        <li class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[16px]">check</span> Multi-page Brochures</li>
                        <li class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[16px]">check</span> Leaflets & Pamphlets</li>
                    </ul>
                </div>
                
                <!-- Service 5 -->
                <div class="glass-panel p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-colors group animate-on-scroll" style="transition-delay: 100ms;">
                    <span class="material-symbols-outlined text-5xl text-primary mb-6 block group-hover:scale-110 transition-transform">design_services</span>
                    <h4 class="font-heading font-bold text-white text-2xl mb-3">Graphic Design Studio</h4>
                    <p class="font-body text-on-surface-variant text-sm leading-relaxed mb-6">Don't have a design? Our in-house creative team will architect the perfect visual identity for your campaign.</p>
                    <ul class="space-y-2 text-sm font-bold text-white/80">
                        <li class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-[16px]">check</span> Logo Design</li>
                        <li class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-[16px]">check</span> Vector Tracing</li>
                        <li class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-[16px]">check</span> Campaign Layouts</li>
                    </ul>
                </div>
                
                <!-- Service 6 -->
                <div class="glass-panel p-8 rounded-3xl border border-white/5 hover:border-secondary/50 transition-colors group animate-on-scroll flex flex-col justify-center items-center text-center bg-gradient-to-br from-background to-surface" style="transition-delay: 200ms;">
                    <h4 class="font-heading font-bold text-white text-2xl mb-4">Need Something Custom?</h4>
                    <p class="font-body text-on-surface-variant text-sm leading-relaxed mb-6">We handle massive scale orders and unique printing requests.</p>
                    <a href="#quote-form" class="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0a0a0a] rounded-full font-heading font-bold text-sm hover:bg-primary hover:text-white transition-colors shadow-lg">Request a Quote <span class="material-symbols-outlined text-sm">arrow_downward</span></a>
                </div>
            </div>
        </section>

        <!-- MODULE: Why Choose Us & The Process -->
        <section class="py-24 bg-surface/30 border-y border-white/5 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div class="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
                <div class="flex flex-col lg:flex-row gap-16">
                    
                    <!-- Why Choose Us -->
                    <div class="lg:w-1/2">
                        <h2 class="font-heading text-sm text-primary uppercase tracking-widest font-bold mb-4">The Advantage</h2>
                        <h3 class="font-heading text-4xl font-black text-white mb-8">Why Businesses Trust United Digital</h3>
                        
                        <div class="space-y-6">
                            <div class="flex gap-4 glass-panel p-6 rounded-2xl">
                                <span class="material-symbols-outlined text-4xl text-primary shrink-0">speed</span>
                                <div>
                                    <h4 class="font-heading font-bold text-white text-xl mb-2">Lightning Fast Turnaround</h4>
                                    <p class="font-body text-sm text-on-surface-variant">Our industrial machinery ensures we can process and deliver high-volume orders faster than traditional competitors.</p>
                                </div>
                            </div>
                            <div class="flex gap-4 glass-panel p-6 rounded-2xl">
                                <span class="material-symbols-outlined text-4xl text-secondary shrink-0">high_quality</span>
                                <div>
                                    <h4 class="font-heading font-bold text-white text-xl mb-2">Uncompromising Precision</h4>
                                    <p class="font-body text-sm text-on-surface-variant">We utilize advanced color-calibration and vector-rendering to ensure your brand's colors are perfectly matched.</p>
                                </div>
                            </div>
                            <div class="flex gap-4 glass-panel p-6 rounded-2xl">
                                <span class="material-symbols-outlined text-4xl text-primary shrink-0">groups</span>
                                <div>
                                    <h4 class="font-heading font-bold text-white text-xl mb-2">Expert Consultation</h4>
                                    <p class="font-body text-sm text-on-surface-variant">Led by Ram Saran Yadav and Ramesh Harijan, our team advises you on the best materials and finishes for your specific budget.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- The Process -->
                    <div class="lg:w-1/2">
                        <h2 class="font-heading text-sm text-secondary uppercase tracking-widest font-bold mb-4">Workflow</h2>
                        <h3 class="font-heading text-4xl font-black text-white mb-8">How We Work</h3>
                        
                        <div class="relative before:content-[''] before:absolute before:left-6 before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-primary before:to-background">
                            
                            <div class="relative pl-16 mb-8 group animate-on-scroll">
                                <div class="absolute left-4 top-1 w-5 h-5 rounded-full bg-background border-4 border-primary z-10 group-hover:bg-primary transition-colors"></div>
                                <h4 class="font-heading font-bold text-white text-xl mb-2 flex items-center gap-3">1. Ideation & Quote</h4>
                                <p class="font-body text-sm text-on-surface-variant">Submit your requirements via our order form. We'll provide a transparent quote and timeline.</p>
                            </div>

                            <div class="relative pl-16 mb-8 group animate-on-scroll" style="transition-delay: 100ms;">
                                <div class="absolute left-4 top-1 w-5 h-5 rounded-full bg-background border-4 border-primary z-10 group-hover:bg-primary transition-colors"></div>
                                <h4 class="font-heading font-bold text-white text-xl mb-2 flex items-center gap-3">2. Design & Proofing</h4>
                                <p class="font-body text-sm text-on-surface-variant">Send us your artwork, or let our studio design it. We send a digital proof for your final approval.</p>
                            </div>

                            <div class="relative pl-16 mb-8 group animate-on-scroll" style="transition-delay: 200ms;">
                                <div class="absolute left-4 top-1 w-5 h-5 rounded-full bg-background border-4 border-secondary z-10 group-hover:bg-secondary transition-colors"></div>
                                <h4 class="font-heading font-bold text-white text-xl mb-2 flex items-center gap-3">3. High-Speed Production</h4>
                                <p class="font-body text-sm text-on-surface-variant">Once approved, your order hits our industrial presses for precise, high-speed execution.</p>
                            </div>

                            <div class="relative pl-16 group animate-on-scroll" style="transition-delay: 300ms;">
                                <div class="absolute left-4 top-1 w-5 h-5 rounded-full bg-primary shadow-[0_0_15px_rgba(255,122,0,0.8)] z-10"></div>
                                <h4 class="font-heading font-bold text-primary text-xl mb-2 flex items-center gap-3">4. Delivery</h4>
                                <p class="font-body text-sm text-on-surface-variant">Carefully packaged and ready for pickup or direct delivery to your business.</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- MODULE: Premium Pricing Cards -->
        <section class="py-32 px-6 md:px-16 max-w-7xl mx-auto">
            <div class="text-center max-w-2xl mx-auto mb-20 animate-on-scroll">
                <h2 class="font-heading text-sm text-primary uppercase tracking-widest font-bold mb-4">Transparent Pricing</h2>
                <h3 class="font-heading text-4xl md:text-5xl font-black text-white mb-4">Popular Packages</h3>
                <p class="font-body text-on-surface-variant">Whether you are a startup or an established enterprise, we have bulk packages designed to save you money.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <!-- Package 1 -->
                <div class="glass-panel rounded-3xl p-8 border border-white/5 hover:border-white/20 transition-all flex flex-col h-full animate-on-scroll">
                    <h4 class="font-heading font-bold text-white text-2xl mb-2">Startup Identity</h4>
                    <p class="font-body text-sm text-on-surface-variant mb-6">Perfect for new businesses.</p>
                    <div class="mb-8">
                        <span class="font-heading font-black text-4xl text-white">Custom Quote</span>
                    </div>
                    <ul class="space-y-4 font-body text-sm text-white/90 mb-8 flex-grow">
                        <li class="flex items-start gap-3"><span class="material-symbols-outlined text-primary text-[18px]">check_circle</span> 500 Premium Business Cards</li>
                        <li class="flex items-start gap-3"><span class="material-symbols-outlined text-primary text-[18px]">check_circle</span> 10 PVC ID Cards with Lanyards</li>
                        <li class="flex items-start gap-3"><span class="material-symbols-outlined text-primary text-[18px]">check_circle</span> 1 Standard Flex Banner (8x4 ft)</li>
                        <li class="flex items-start gap-3"><span class="material-symbols-outlined text-primary text-[18px]">check_circle</span> Basic Logo Vectorization</li>
                    </ul>
                    <a href="#quote-form" class="w-full block text-center py-3 rounded-xl border border-white/20 font-heading font-bold text-white hover:bg-white/10 transition-colors">Request Package</a>
                </div>

                <!-- Package 2 (Featured) -->
                <div class="glass-panel rounded-3xl p-8 border border-primary relative transform md:-translate-y-4 shadow-[0_0_40px_rgba(255,122,0,0.15)] flex flex-col h-full animate-on-scroll" style="transition-delay: 100ms;">
                    <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">Most Popular</div>
                    <h4 class="font-heading font-bold text-white text-2xl mb-2">Event Complete</h4>
                    <p class="font-body text-sm text-on-surface-variant mb-6">Everything you need for a major event.</p>
                    <div class="mb-8">
                        <span class="font-heading font-black text-4xl text-primary">Custom Quote</span>
                    </div>
                    <ul class="space-y-4 font-body text-sm text-white/90 mb-8 flex-grow">
                        <li class="flex items-start gap-3"><span class="material-symbols-outlined text-primary text-[18px]">check_circle</span> 1 Massive Stage Backdrop</li>
                        <li class="flex items-start gap-3"><span class="material-symbols-outlined text-primary text-[18px]">check_circle</span> 5 Roll-up Standees</li>
                        <li class="flex items-start gap-3"><span class="material-symbols-outlined text-primary text-[18px]">check_circle</span> 50 Custom Printed T-Shirts</li>
                        <li class="flex items-start gap-3"><span class="material-symbols-outlined text-primary text-[18px]">check_circle</span> 100 VIP Badges</li>
                        <li class="flex items-start gap-3"><span class="material-symbols-outlined text-primary text-[18px]">check_circle</span> Priority Turnaround Time</li>
                    </ul>
                    <a href="#quote-form" class="w-full block text-center py-3 rounded-xl bg-primary font-heading font-bold text-white hover:bg-white hover:text-[#0a0a0a] transition-colors shadow-lg">Request Package</a>
                </div>

                <!-- Package 3 -->
                <div class="glass-panel rounded-3xl p-8 border border-white/5 hover:border-white/20 transition-all flex flex-col h-full animate-on-scroll" style="transition-delay: 200ms;">
                    <h4 class="font-heading font-bold text-white text-2xl mb-2">School & Academy</h4>
                    <p class="font-body text-sm text-on-surface-variant mb-6">Tailored for educational institutions.</p>
                    <div class="mb-8">
                        <span class="font-heading font-black text-4xl text-white">Custom Quote</span>
                    </div>
                    <ul class="space-y-4 font-body text-sm text-white/90 mb-8 flex-grow">
                        <li class="flex items-start gap-3"><span class="material-symbols-outlined text-secondary text-[18px]">check_circle</span> 1000+ Custom School Diaries</li>
                        <li class="flex items-start gap-3"><span class="material-symbols-outlined text-secondary text-[18px]">check_circle</span> 500+ Student ID Cards</li>
                        <li class="flex items-start gap-3"><span class="material-symbols-outlined text-secondary text-[18px]">check_circle</span> Admission Banners & Hoardings</li>
                        <li class="flex items-start gap-3"><span class="material-symbols-outlined text-secondary text-[18px]">check_circle</span> Prospectus Booklets</li>
                    </ul>
                    <a href="#quote-form" class="w-full block text-center py-3 rounded-xl border border-white/20 font-heading font-bold text-white hover:bg-white/10 transition-colors">Request Package</a>
                </div>

            </div>
        </section>

        <!-- MODULE: Quote Form & FAQ (Split Layout) -->
        <section id="quote-form" class="py-24 bg-surface/50 border-t border-white/5">
            <div class="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
                
                <!-- Quote Form -->
                <div class="animate-on-scroll">
                    <h2 class="font-heading text-sm text-primary uppercase tracking-widest font-bold mb-4">Let's Get Started</h2>
                    <h3 class="font-heading text-4xl font-black text-white mb-6">Request a Free Quote</h3>
                    <p class="font-body text-on-surface-variant mb-10">Fill out the details below. Our team will review your requirements and get back to you within 24 hours.</p>

                    <form onsubmit="event.preventDefault(); alert('Quote Request Submitted! We will contact you shortly.'); this.reset();" class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-xs font-bold text-white/70 uppercase tracking-widest mb-2">Full Name</label>
                                <input type="text" required class="w-full bg-background border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors">
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-white/70 uppercase tracking-widest mb-2">Phone Number</label>
                                <input type="tel" required class="w-full bg-background border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors">
                            </div>
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-white/70 uppercase tracking-widest mb-2">Service Required</label>
                            <select class="w-full bg-background border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                                <option value="flex">Flex / Banner Printing</option>
                                <option value="id">ID Cards / Stationery</option>
                                <option value="book">Book / Offset Printing</option>
                                <option value="tshirt">T-Shirt / Merchandising</option>
                                <option value="design">Graphic Design Only</option>
                                <option value="other">Other / Custom</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-white/70 uppercase tracking-widest mb-2">Project Details & Quantity</label>
                            <textarea required rows="4" placeholder="Describe what you need and rough quantity..." class="w-full bg-background border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                        </div>
                        <button type="submit" class="w-full bg-primary text-white font-heading font-bold text-lg py-4 rounded-xl hover:bg-white hover:text-[#0a0a0a] transition-all shadow-lg flex items-center justify-center gap-2">
                            Submit Request <span class="material-symbols-outlined">send</span>
                        </button>
                    </form>
                </div>

                <!-- FAQ Accordion -->
                <div class="animate-on-scroll" style="transition-delay: 100ms;">
                    <h2 class="font-heading text-sm text-secondary uppercase tracking-widest font-bold mb-4">Knowledge Base</h2>
                    <h3 class="font-heading text-4xl font-black text-white mb-6">Frequently Asked Questions</h3>
                    <p class="font-body text-on-surface-variant mb-10">Common queries about our printing capabilities and workflow.</p>

                    <div class="space-y-4" id="faq-container">
                        
                        <!-- FAQ Item 1 -->
                        <div class="glass-panel border border-white/10 rounded-xl overflow-hidden transition-all faq-item">
                            <button class="w-full px-6 py-5 flex items-center justify-between font-heading font-bold text-white text-left hover:text-primary transition-colors faq-btn">
                                What file formats do you accept for design?
                                <span class="material-symbols-outlined text-primary faq-icon transition-transform">add</span>
                            </button>
                            <div class="px-6 pb-5 font-body text-sm text-on-surface-variant hidden faq-content">
                                We highly prefer vector formats like .CDR (CorelDraw), .AI (Illustrator), or high-resolution .PDF files to ensure perfectly sharp prints. We also accept high-quality .PNG or .JPEG for photographic banners.
                            </div>
                        </div>

                        <!-- FAQ Item 2 -->
                        <div class="glass-panel border border-white/10 rounded-xl overflow-hidden transition-all faq-item">
                            <button class="w-full px-6 py-5 flex items-center justify-between font-heading font-bold text-white text-left hover:text-primary transition-colors faq-btn">
                                What is your standard turnaround time?
                                <span class="material-symbols-outlined text-primary faq-icon transition-transform">add</span>
                            </button>
                            <div class="px-6 pb-5 font-body text-sm text-on-surface-variant hidden faq-content">
                                Standard flex and banner prints are usually ready within 24 hours of design approval. Large offset runs (like school diaries or bulk brochures) typically take 3 to 7 working days depending on volume.
                            </div>
                        </div>

                        <!-- FAQ Item 3 -->
                        <div class="glass-panel border border-white/10 rounded-xl overflow-hidden transition-all faq-item">
                            <button class="w-full px-6 py-5 flex items-center justify-between font-heading font-bold text-white text-left hover:text-primary transition-colors faq-btn">
                                Do you provide delivery services?
                                <span class="material-symbols-outlined text-primary faq-icon transition-transform">add</span>
                            </button>
                            <div class="px-6 pb-5 font-body text-sm text-on-surface-variant hidden faq-content">
                                Yes. For bulk enterprise orders, we arrange direct delivery to your office or event location. Smaller orders can be picked up directly from our printing press headquarters.
                            </div>
                        </div>

                        <!-- FAQ Item 4 -->
                        <div class="glass-panel border border-white/10 rounded-xl overflow-hidden transition-all faq-item">
                            <button class="w-full px-6 py-5 flex items-center justify-between font-heading font-bold text-white text-left hover:text-primary transition-colors faq-btn">
                                Do I get a discount for bulk orders?
                                <span class="material-symbols-outlined text-primary faq-icon transition-transform">add</span>
                            </button>
                            <div class="px-6 pb-5 font-body text-sm text-on-surface-variant hidden faq-content">
                                Absolutely. The nature of commercial printing means the higher the volume, the lower the cost per unit. Contact us via the quote form for a customized bulk pricing structure.
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>

        <!-- MODULE: Beautiful CTA -->
        <section class="py-32 relative text-center px-6 border-t border-white/5 overflow-hidden">
            <div class="absolute inset-0 bg-primary/20"></div>
            <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
            
            <div class="relative z-10 max-w-4xl mx-auto animate-on-scroll">
                <h3 class="font-heading font-black text-5xl md:text-7xl text-white mb-6 drop-shadow-2xl">
                    Ready to Make an <span class="text-primary">Impact?</span>
                </h3>
                <p class="font-body text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                    Partner with United Digital Printing Press today and elevate your brand's physical presence to the next level.
                </p>
                <div class="flex flex-col md:flex-row items-center justify-center gap-4">
                    <a href="#quote-form" class="w-full md:w-auto px-10 py-4 bg-white text-[#0a0a0a] rounded-full font-heading font-bold text-lg hover:bg-primary hover:text-white transition-all shadow-xl">Get Started Now</a>
                    <a href="tel:9807514000" class="w-full md:w-auto px-10 py-4 glass-panel border border-white/20 text-white rounded-full font-heading font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                        <span class="material-symbols-outlined">call</span> Call 9807514000
                    </a>
                </div>
            </div>
        </section>

    </main>
`;

const finalHtml = topHalf + newContent + `
    <!-- Reusable Footer Component Injection -->
    <div data-component="Footer"></div>

    <script src="assets/js/app.js"></script>
    <script>
        // Interactive FAQ Logic
        document.addEventListener('DOMContentLoaded', () => {
            const faqBtns = document.querySelectorAll('.faq-btn');
            
            faqBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const content = btn.nextElementSibling;
                    const icon = btn.querySelector('.faq-icon');
                    
                    // Close others
                    document.querySelectorAll('.faq-content').forEach(c => {
                        if(c !== content) c.classList.add('hidden');
                    });
                    document.querySelectorAll('.faq-icon').forEach(i => {
                        if(i !== icon) {
                            i.innerText = 'add';
                            i.classList.remove('rotate-45', 'text-white');
                            i.classList.add('text-primary');
                        }
                    });

                    // Toggle current
                    if (content.classList.contains('hidden')) {
                        content.classList.remove('hidden');
                        icon.innerText = 'add'; // keep add but rotate it to look like an X
                        icon.classList.add('rotate-45', 'text-white');
                        icon.classList.remove('text-primary');
                    } else {
                        content.classList.add('hidden');
                        icon.classList.remove('rotate-45', 'text-white');
                        icon.classList.add('text-primary');
                    }
                });
            });
        });
    </script>
</body>
</html>
`;

fs.writeFileSync(printingPath, finalHtml, 'utf8');
console.log('Successfully wrote the new Printing Press page.');
