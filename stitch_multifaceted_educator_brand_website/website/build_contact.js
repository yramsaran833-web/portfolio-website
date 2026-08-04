const fs = require('fs');
const path = require('path');

const contactPath = path.join(__dirname, 'contact.html');
const currentHtml = fs.readFileSync(contactPath, 'utf8');

// Split right before the Main Contact Layout so we keep the Hero
const splitIndex = currentHtml.indexOf('<!-- Main Contact Layout -->');

if (splitIndex === -1) {
    console.error("Could not find split marker <!-- Main Contact Layout -->");
    process.exit(1);
}

const topHalf = currentHtml.substring(0, splitIndex);

// Generate massive new contact page content
const newContent = `
        <!-- MODULE: High-Priority Contact Cards -->
        <section class="py-12 px-6 md:px-16 max-w-7xl mx-auto relative z-20 -mt-12">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <!-- Direct Contact -->
                <div class="glass-panel p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-all text-center group animate-on-scroll">
                    <div class="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <span class="material-symbols-outlined text-3xl">mail</span>
                    </div>
                    <h3 class="font-heading font-bold text-white text-xl mb-2">Direct Inquiry</h3>
                    <p class="font-body text-sm text-on-surface-variant mb-4">Email me directly for speaking engagements or general queries.</p>
                    <a href="mailto:contact@ramsaran.com" class="font-heading font-bold text-primary hover:text-white transition-colors">contact@ramsaran.com</a>
                </div>

                <!-- Office Hours -->
                <div class="glass-panel p-8 rounded-3xl border border-white/5 hover:border-secondary/50 transition-all text-center group animate-on-scroll" style="transition-delay: 100ms;">
                    <div class="w-16 h-16 rounded-full bg-secondary/20 text-secondary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <span class="material-symbols-outlined text-3xl">schedule</span>
                    </div>
                    <h3 class="font-heading font-bold text-white text-xl mb-2">Office Hours</h3>
                    <p class="font-body text-sm text-on-surface-variant mb-4">Available for press meetings and consultations.</p>
                    <div class="font-heading font-bold text-secondary">Sun - Thu: 9AM - 6PM</div>
                </div>

                <!-- Emergency / WhatsApp -->
                <div class="glass-panel p-8 rounded-3xl border border-white/5 hover:border-[#25D366]/50 transition-all text-center group animate-on-scroll" style="transition-delay: 200ms;">
                    <div class="w-16 h-16 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(37,211,102,0.3)]">
                        <!-- WhatsApp Icon via SVG since Material Symbols doesn't have it natively -->
                        <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.337a9.993 9.993 0 004.779 1.226h.004c5.505 0 9.988-4.478 9.989-9.9840-2.669-1.037-5.18-3.074-7.062-4.96-1.883-6.84-3.92-7.876-6.589-7.876-2.67 0-9.986 4.478-9.986 9.984m5.455 14.185c-.22.62-1.282 1.157-1.772 1.206-.432.043-1.008.13-2.85-.635-2.222-.924-3.642-3.18-3.753-3.327-.11-.146-.897-1.196-.897-2.279 0-1.084.563-1.616.76-1.825.197-.208.43-.26.574-.26.143 0 .286.002.414.008.133.006.312-.05.478.35.17.408.574 1.405.626 1.508.051.103.085.223.017.369-.068.146-.103.237-.205.356-.102.119-.214.254-.307.346-.103.103-.21.216-.092.42.118.204.526.87 1.127 1.405.776.69 1.43.9 1.636.997.206.098.326.082.447-.055.121-.137.525-.612.666-.822.141-.21.282-.175.467-.105.185.07 1.171.552 1.371.652.2.1.334.151.382.235.048.084.048.49-.172 1.11z"/></svg>
                    </div>
                    <h3 class="font-heading font-bold text-white text-xl mb-2">WhatsApp Order</h3>
                    <p class="font-body text-sm text-on-surface-variant mb-4">Urgent printing requirement? Message the press directly.</p>
                    <a href="https://wa.me/9779807514000" class="font-heading font-bold text-[#25D366] hover:text-white transition-colors flex items-center justify-center gap-1">Message Now <span class="material-symbols-outlined text-[16px]">open_in_new</span></a>
                </div>

            </div>
        </section>

        <!-- MODULE: Split Layout (Booking UI & Contact Form) -->
        <section class="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-white/5">
            <div class="flex flex-col lg:flex-row gap-16">
                
                <!-- Left: Appointment Booking UI -->
                <div class="lg:w-1/2 animate-on-scroll">
                    <h2 class="font-heading text-sm text-primary uppercase tracking-widest font-bold mb-4">Schedule</h2>
                    <h3 class="font-heading text-4xl font-black text-white mb-6">Book a Meeting</h3>
                    <p class="font-body text-on-surface-variant mb-10">Select an available time slot below for a 30-minute virtual consultation or a business meeting at the printing press.</p>
                    
                    <!-- Booking UI Mockup -->
                    <div class="glass-panel p-6 md:p-8 rounded-[2rem] border border-white/10 shadow-2xl">
                        
                        <!-- Calendar Header -->
                        <div class="flex items-center justify-between mb-8">
                            <button class="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5"><span class="material-symbols-outlined text-sm">arrow_back_ios_new</span></button>
                            <h4 class="font-heading font-bold text-white">August 2026</h4>
                            <button class="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5"><span class="material-symbols-outlined text-sm">arrow_forward_ios</span></button>
                        </div>

                        <!-- Calendar Grid -->
                        <div class="grid grid-cols-7 gap-2 text-center mb-8 font-body text-sm">
                            <div class="text-on-surface-variant font-bold text-xs uppercase mb-2">Su</div>
                            <div class="text-on-surface-variant font-bold text-xs uppercase mb-2">Mo</div>
                            <div class="text-on-surface-variant font-bold text-xs uppercase mb-2">Tu</div>
                            <div class="text-on-surface-variant font-bold text-xs uppercase mb-2">We</div>
                            <div class="text-on-surface-variant font-bold text-xs uppercase mb-2">Th</div>
                            <div class="text-on-surface-variant font-bold text-xs uppercase mb-2">Fr</div>
                            <div class="text-on-surface-variant font-bold text-xs uppercase mb-2">Sa</div>

                            <!-- Empty days -->
                            <div></div><div></div><div></div><div></div><div></div>
                            
                            <!-- Active days -->
                            <div class="w-10 h-10 mx-auto rounded-full flex items-center justify-center text-white/50 cursor-not-allowed">1</div>
                            <div class="w-10 h-10 mx-auto rounded-full flex items-center justify-center text-white/50 cursor-not-allowed">2</div>
                            <div class="w-10 h-10 mx-auto rounded-full flex items-center justify-center text-white hover:bg-white/10 cursor-pointer transition-colors">3</div>
                            <div class="w-10 h-10 mx-auto rounded-full flex items-center justify-center bg-primary text-white font-bold shadow-[0_0_15px_rgba(255,122,0,0.5)] cursor-pointer">4</div>
                            <div class="w-10 h-10 mx-auto rounded-full flex items-center justify-center text-white hover:bg-white/10 cursor-pointer transition-colors">5</div>
                            <div class="w-10 h-10 mx-auto rounded-full flex items-center justify-center text-white hover:bg-white/10 cursor-pointer transition-colors">6</div>
                            <div class="w-10 h-10 mx-auto rounded-full flex items-center justify-center text-white/50 cursor-not-allowed">7</div>
                            <div class="w-10 h-10 mx-auto rounded-full flex items-center justify-center text-white hover:bg-white/10 cursor-pointer transition-colors">8</div>
                        </div>

                        <!-- Time Slots -->
                        <div class="pt-6 border-t border-white/10">
                            <h4 class="font-heading font-bold text-white text-sm mb-4">Available Times (Aug 4)</h4>
                            <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                                <button class="py-2 px-4 rounded-xl border border-white/10 font-body text-sm text-white hover:border-primary transition-colors">10:00 AM</button>
                                <button class="py-2 px-4 rounded-xl border border-white/10 font-body text-sm text-white hover:border-primary transition-colors">11:30 AM</button>
                                <button class="py-2 px-4 rounded-xl bg-primary text-white font-body font-bold text-sm shadow-lg">01:00 PM</button>
                                <button class="py-2 px-4 rounded-xl border border-white/10 font-body text-sm text-white hover:border-primary transition-colors">03:30 PM</button>
                            </div>
                        </div>

                        <button onclick="alert('Booking confirmed for Aug 4 at 1:00 PM!')" class="w-full mt-8 bg-white text-[#0a0a0a] font-heading font-bold py-3 rounded-xl hover:bg-primary hover:text-white transition-all">Confirm Booking</button>
                    </div>
                </div>

                <!-- Right: General Contact Form -->
                <div class="lg:w-1/2 animate-on-scroll" style="transition-delay: 100ms;">
                    <h2 class="font-heading text-sm text-secondary uppercase tracking-widest font-bold mb-4">Inquire</h2>
                    <h3 class="font-heading text-4xl font-black text-white mb-6">Send a Message</h3>
                    <p class="font-body text-on-surface-variant mb-10">Prefer to write? Drop your details and message below. I strive to respond to all inquiries within 24 hours.</p>

                    <form onsubmit="event.preventDefault(); alert('Message sent successfully!'); this.reset();" class="space-y-6 glass-panel p-8 md:p-12 rounded-[2rem] border border-white/5">
                        <div>
                            <label class="block text-xs font-bold text-white/70 uppercase tracking-widest mb-2">Your Name</label>
                            <div class="relative">
                                <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/30">person</span>
                                <input type="text" required class="w-full bg-background border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-secondary transition-colors">
                            </div>
                        </div>
                        
                        <div>
                            <label class="block text-xs font-bold text-white/70 uppercase tracking-widest mb-2">Email Address</label>
                            <div class="relative">
                                <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/30">mail</span>
                                <input type="email" required class="w-full bg-background border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-secondary transition-colors">
                            </div>
                        </div>
                        
                        <div>
                            <label class="block text-xs font-bold text-white/70 uppercase tracking-widest mb-2">Subject</label>
                            <div class="relative">
                                <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/30">subject</span>
                                <input type="text" required class="w-full bg-background border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-secondary transition-colors">
                            </div>
                        </div>
                        
                        <div>
                            <label class="block text-xs font-bold text-white/70 uppercase tracking-widest mb-2">Your Message</label>
                            <textarea required rows="5" class="w-full bg-background border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-secondary transition-colors resize-none"></textarea>
                        </div>
                        
                        <button type="submit" class="w-full bg-gradient-to-r from-primary to-secondary text-white font-heading font-bold text-lg py-4 rounded-xl hover:brightness-110 transition-all shadow-lg flex items-center justify-center gap-2">
                            Send Message <span class="material-symbols-outlined">send</span>
                        </button>
                    </form>
                </div>

            </div>
        </section>

        <!-- MODULE: Map & FAQ -->
        <section class="py-24 bg-surface/30 border-y border-white/5 relative overflow-hidden">
            <div class="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                
                <!-- FAQ Accordion -->
                <div class="animate-on-scroll">
                    <h2 class="font-heading text-sm text-primary uppercase tracking-widest font-bold mb-4">Knowledge Base</h2>
                    <h3 class="font-heading text-4xl font-black text-white mb-6">Common Questions</h3>
                    
                    <div class="space-y-4 mt-8" id="faq-container">
                        <!-- FAQ Item 1 -->
                        <div class="glass-panel border border-white/10 rounded-xl overflow-hidden transition-all faq-item">
                            <button class="w-full px-6 py-5 flex items-center justify-between font-heading font-bold text-white text-left hover:text-primary transition-colors faq-btn">
                                How fast do you reply to emails?
                                <span class="material-symbols-outlined text-primary faq-icon transition-transform">add</span>
                            </button>
                            <div class="px-6 pb-5 font-body text-sm text-on-surface-variant hidden faq-content">
                                For general inquiries and business collaborations, I aim to respond within 24 hours. For urgent printing press orders, please use the WhatsApp number provided for immediate assistance.
                            </div>
                        </div>

                        <!-- FAQ Item 2 -->
                        <div class="glass-panel border border-white/10 rounded-xl overflow-hidden transition-all faq-item">
                            <button class="w-full px-6 py-5 flex items-center justify-between font-heading font-bold text-white text-left hover:text-primary transition-colors faq-btn">
                                Do you accept international design orders?
                                <span class="material-symbols-outlined text-primary faq-icon transition-transform">add</span>
                            </button>
                            <div class="px-6 pb-5 font-body text-sm text-on-surface-variant hidden faq-content">
                                Yes. While United Digital Printing Press physical prints are fulfilled locally in Nepal, our graphic design services (logos, vector tracing, digital assets) are available globally.
                            </div>
                        </div>

                        <!-- FAQ Item 3 -->
                        <div class="glass-panel border border-white/10 rounded-xl overflow-hidden transition-all faq-item">
                            <button class="w-full px-6 py-5 flex items-center justify-between font-heading font-bold text-white text-left hover:text-primary transition-colors faq-btn">
                                Can I visit the printing press in person?
                                <span class="material-symbols-outlined text-primary faq-icon transition-transform">add</span>
                            </button>
                            <div class="px-6 pb-5 font-body text-sm text-on-surface-variant hidden faq-content">
                                Absolutely. The press is located in Odwaliya, Province 5, Nepal. You can use the appointment booking tool above to schedule an in-person meeting to discuss your bulk printing needs.
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Google Maps Embed -->
                <div class="animate-on-scroll" style="transition-delay: 100ms;">
                    <h2 class="font-heading text-sm text-secondary uppercase tracking-widest font-bold mb-4">Headquarters</h2>
                    <h3 class="font-heading text-4xl font-black text-white mb-6">Find the Press</h3>
                    
                    <div class="glass-panel p-2 rounded-3xl border border-white/10 shadow-2xl h-[400px] mt-8 overflow-hidden">
                        <!-- Standard Google Maps Iframe showing Nepal -->
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d113032.64621369792!2d83.371258!3d27.508537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39969a888c3aebdb%3A0xc68297bdf51ffcd9!2sLumbini%20Province%2C%20Nepal!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus" width="100%" height="100%" style="border:0; border-radius: 1rem; filter: grayscale(80%) invert(90%) contrast(80%);" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
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
        // Interactive FAQ Logic (reused from Printing page)
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
                        icon.innerText = 'add'; 
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

fs.writeFileSync(contactPath, finalHtml, 'utf8');
console.log('Successfully wrote the new Contact page.');
