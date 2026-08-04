const fs = require('fs');
const path = require('path');

const awardsPath = path.join(__dirname, 'awards.html');
const currentHtml = fs.readFileSync(awardsPath, 'utf8');

// Split right before the Recognition Grid so we keep the Hero
const splitIndex = currentHtml.indexOf('<!-- Recognition Cards Grid -->');

if (splitIndex === -1) {
    console.error("Could not find split marker <!-- Recognition Cards Grid -->");
    process.exit(1);
}

const topHalf = currentHtml.substring(0, splitIndex);

// Generate massive new awards page content
const newContent = `
        <!-- MODULE: Professional Timeline (Government & Enterprise) -->
        <section class="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-white/5 relative">
            <div class="text-center mb-16 animate-on-scroll">
                <h2 class="font-heading text-sm text-secondary uppercase tracking-widest font-bold mb-4">Milestones</h2>
                <h3 class="font-heading text-4xl md:text-5xl font-black text-white">Career Achievements</h3>
            </div>
            
            <div class="relative max-w-4xl mx-auto">
                <!-- Vertical Line -->
                <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-background md:-translate-x-1/2 opacity-30"></div>

                <!-- Timeline Item 1 (Right on Desktop) -->
                <div class="relative flex flex-col md:flex-row items-center mb-16 md:justify-end animate-on-scroll group">
                    <div class="absolute left-2 md:left-1/2 w-5 h-5 rounded-full bg-background border-4 border-primary z-10 md:-translate-x-1/2 shadow-[0_0_15px_rgba(255,122,0,0.8)] group-hover:scale-125 transition-transform"></div>
                    <div class="w-full md:w-5/12 pl-12 md:pl-0 md:pr-12 text-left md:text-right hidden md:block">
                        <span class="font-heading text-4xl font-black text-white/20">2023</span>
                    </div>
                    <div class="w-full md:w-5/12 pl-12 md:pl-0 text-left">
                        <div class="glass-panel p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors shadow-xl group-hover:-translate-y-1 transform duration-300">
                            <span class="md:hidden font-heading text-sm font-bold text-primary mb-2 block">2023</span>
                            <div class="flex items-center gap-3 mb-3">
                                <span class="material-symbols-outlined text-primary text-2xl" style="font-variation-settings: 'FILL' 1;">diamond</span>
                                <h4 class="font-heading font-bold text-white text-xl">Enterprise Quality Award</h4>
                            </div>
                            <p class="font-body text-sm text-on-surface-variant leading-relaxed">Recognized by the Local Chamber of Commerce for outstanding print quality, scale, and business integrity at United Digital Printing Press.</p>
                        </div>
                    </div>
                </div>

                <!-- Timeline Item 2 (Left on Desktop) -->
                <div class="relative flex flex-col md:flex-row items-center mb-16 md:justify-start animate-on-scroll group" style="transition-delay: 100ms;">
                    <div class="absolute left-2 md:left-1/2 w-5 h-5 rounded-full bg-background border-4 border-secondary z-10 md:-translate-x-1/2 shadow-[0_0_15px_rgba(255,122,0,0.8)] group-hover:scale-125 transition-transform"></div>
                    <div class="w-full md:w-5/12 pl-12 md:pl-0 md:pr-12 text-left md:text-right">
                        <div class="glass-panel p-6 rounded-2xl border border-white/10 hover:border-secondary/50 transition-colors shadow-xl group-hover:-translate-y-1 transform duration-300">
                            <span class="md:hidden font-heading text-sm font-bold text-secondary mb-2 block">2022</span>
                            <div class="flex items-center md:justify-end gap-3 mb-3">
                                <h4 class="font-heading font-bold text-white text-xl order-2 md:order-1">Excellence in Education</h4>
                                <span class="material-symbols-outlined text-secondary text-2xl order-1 md:order-2" style="font-variation-settings: 'FILL' 1;">school</span>
                            </div>
                            <p class="font-body text-sm text-on-surface-variant leading-relaxed">Awarded for maintaining the highest student pass percentage in the district during the annual board examinations.</p>
                        </div>
                    </div>
                    <div class="w-full md:w-5/12 pl-12 md:pl-12 text-left hidden md:block">
                        <span class="font-heading text-4xl font-black text-white/20">2022</span>
                    </div>
                </div>

                <!-- Timeline Item 3 (Right on Desktop) -->
                <div class="relative flex flex-col md:flex-row items-center md:justify-end animate-on-scroll group" style="transition-delay: 200ms;">
                    <div class="absolute left-2 md:left-1/2 w-5 h-5 rounded-full bg-background border-4 border-primary z-10 md:-translate-x-1/2 shadow-[0_0_15px_rgba(255,122,0,0.8)] group-hover:scale-125 transition-transform"></div>
                    <div class="w-full md:w-5/12 pl-12 md:pl-0 md:pr-12 text-left md:text-right hidden md:block">
                        <span class="font-heading text-4xl font-black text-white/20">2020</span>
                    </div>
                    <div class="w-full md:w-5/12 pl-12 md:pl-0 text-left">
                        <div class="glass-panel p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors shadow-xl group-hover:-translate-y-1 transform duration-300">
                            <span class="md:hidden font-heading text-sm font-bold text-primary mb-2 block">2020</span>
                            <div class="flex items-center gap-3 mb-3">
                                <span class="material-symbols-outlined text-primary text-2xl" style="font-variation-settings: 'FILL' 1;">military_tech</span>
                                <h4 class="font-heading font-bold text-white text-xl">Government Appointment</h4>
                            </div>
                            <p class="font-body text-sm text-on-surface-variant leading-relaxed">Officially appointed as a Government Teacher at Shree Janta Secondary School, Odwaliya, recognizing pedagogical expertise and dedication.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- MODULE: Certificates & Modal Gallery -->
        <section class="py-24 bg-surface/30 border-y border-white/5 relative overflow-hidden">
            <div class="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div class="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
                <div class="text-center mb-16 animate-on-scroll">
                    <h2 class="font-heading text-sm text-primary uppercase tracking-widest font-bold mb-4 flex items-center justify-center gap-2">
                        <span class="material-symbols-outlined text-[18px]">workspace_premium</span> Verification
                    </h2>
                    <h3 class="font-heading text-4xl md:text-5xl font-black text-white">Certificates & Licenses</h3>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                    <!-- Certificate 1 -->
                    <div class="glass-panel p-4 rounded-2xl border border-white/5 hover:border-primary/50 transition-all group animate-on-scroll cursor-pointer" onclick="openModal('https://images.unsplash.com/photo-1589330694653-06188e630ff0?q=80&w=2070&auto=format&fit=crop', 'Government Teaching License')">
                        <div class="aspect-[4/3] rounded-xl overflow-hidden bg-surface relative mb-4">
                            <img src="https://images.unsplash.com/photo-1589330694653-06188e630ff0?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700">
                            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span class="material-symbols-outlined text-white text-3xl">zoom_in</span>
                            </div>
                        </div>
                        <h4 class="font-heading font-bold text-white text-center mb-1">Teaching License</h4>
                        <p class="font-body text-xs text-on-surface-variant text-center uppercase tracking-widest">Government of Nepal</p>
                    </div>

                    <!-- Certificate 2 -->
                    <div class="glass-panel p-4 rounded-2xl border border-white/5 hover:border-primary/50 transition-all group animate-on-scroll cursor-pointer" style="transition-delay: 100ms;" onclick="openModal('https://images.unsplash.com/photo-1589330694653-06188e630ff0?q=80&w=2070&auto=format&fit=crop', 'Business Registration Certificate')">
                        <div class="aspect-[4/3] rounded-xl overflow-hidden bg-surface relative mb-4">
                            <img src="https://images.unsplash.com/photo-1589330694653-06188e630ff0?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700">
                            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span class="material-symbols-outlined text-white text-3xl">zoom_in</span>
                            </div>
                        </div>
                        <h4 class="font-heading font-bold text-white text-center mb-1">Business Registration</h4>
                        <p class="font-body text-xs text-on-surface-variant text-center uppercase tracking-widest">United Digital Press</p>
                    </div>

                    <!-- Certificate 3 -->
                    <div class="glass-panel p-4 rounded-2xl border border-white/5 hover:border-primary/50 transition-all group animate-on-scroll cursor-pointer" style="transition-delay: 200ms;" onclick="openModal('https://images.unsplash.com/photo-1589330694653-06188e630ff0?q=80&w=2070&auto=format&fit=crop', 'Advanced Pedagogy Training')">
                        <div class="aspect-[4/3] rounded-xl overflow-hidden bg-surface relative mb-4">
                            <img src="https://images.unsplash.com/photo-1589330694653-06188e630ff0?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700">
                            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span class="material-symbols-outlined text-white text-3xl">zoom_in</span>
                            </div>
                        </div>
                        <h4 class="font-heading font-bold text-white text-center mb-1">Advanced Pedagogy</h4>
                        <p class="font-body text-xs text-on-surface-variant text-center uppercase tracking-widest">Ministry of Education</p>
                    </div>

                </div>
            </div>
        </section>

        <!-- MODULE: Training, Workshops & Seminars (CPD) -->
        <section class="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-white/5">
            <div class="flex flex-col md:flex-row gap-16">
                
                <!-- Title Side -->
                <div class="md:w-1/3 animate-on-scroll">
                    <h2 class="font-heading text-sm text-secondary uppercase tracking-widest font-bold mb-4">CPD</h2>
                    <h3 class="font-heading text-4xl font-black text-white mb-6">Continuous Professional Development</h3>
                    <p class="font-body text-on-surface-variant leading-relaxed mb-6">Learning never stops. A list of workshops and seminars attended to stay at the forefront of educational psychology and digital enterprise.</p>
                </div>
                
                <!-- List Side -->
                <div class="md:w-2/3 space-y-4">
                    
                    <div class="glass-panel p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-on-scroll">
                        <div>
                            <h4 class="font-heading font-bold text-white text-lg mb-1">Digital Marketing & SEO Seminar</h4>
                            <p class="font-body text-sm text-on-surface-variant">Kathmandu Chamber of Commerce</p>
                        </div>
                        <span class="text-xs font-bold font-body text-primary bg-primary/10 px-3 py-1.5 rounded-full whitespace-nowrap self-start sm:self-auto">Oct 2023</span>
                    </div>

                    <div class="glass-panel p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-on-scroll" style="transition-delay: 100ms;">
                        <div>
                            <h4 class="font-heading font-bold text-white text-lg mb-1">Advanced Child Psychology in Education</h4>
                            <p class="font-body text-sm text-on-surface-variant">National Teachers Association</p>
                        </div>
                        <span class="text-xs font-bold font-body text-secondary bg-secondary/10 px-3 py-1.5 rounded-full whitespace-nowrap self-start sm:self-auto">Aug 2022</span>
                    </div>

                    <div class="glass-panel p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-on-scroll" style="transition-delay: 200ms;">
                        <div>
                            <h4 class="font-heading font-bold text-white text-lg mb-1">Modern Printing Machinery Workshop</h4>
                            <p class="font-body text-sm text-on-surface-variant">Industrial Print Expo, Delhi</p>
                        </div>
                        <span class="text-xs font-bold font-body text-primary bg-primary/10 px-3 py-1.5 rounded-full whitespace-nowrap self-start sm:self-auto">Mar 2021</span>
                    </div>

                </div>
            </div>
        </section>

        <!-- MODULE: Media & Press Coverage -->
        <section class="py-24 bg-surface/20 border-t border-white/5">
            <div class="max-w-7xl mx-auto px-6 md:px-16">
                <div class="text-center mb-16 animate-on-scroll">
                    <h2 class="font-heading text-sm text-primary uppercase tracking-widest font-bold mb-4">Press</h2>
                    <h3 class="font-heading text-4xl font-black text-white">Media Coverage</h3>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    <!-- Press Item 1 -->
                    <div class="glass-panel p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all flex flex-col md:flex-row gap-8 items-center group animate-on-scroll">
                        <div class="w-full md:w-48 aspect-video md:aspect-square bg-surface-variant rounded-xl overflow-hidden shrink-0 relative">
                            <img src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Newspaper">
                        </div>
                        <div class="flex-1">
                            <div class="flex items-center gap-3 mb-3">
                                <span class="text-xs font-bold text-white bg-primary px-3 py-1 rounded">Daily News Nepal</span>
                                <span class="text-xs text-on-surface-variant font-bold">Aug 2023</span>
                            </div>
                            <h4 class="font-heading font-bold text-white text-xl mb-3 group-hover:text-primary transition-colors leading-tight">Transforming Rural Education Through Digital Platforms</h4>
                            <a href="#" class="inline-flex items-center gap-1 text-sm font-heading font-bold text-on-surface-variant hover:text-white transition-colors">Read Full Article <span class="material-symbols-outlined text-[16px]">open_in_new</span></a>
                        </div>
                    </div>

                    <!-- Press Item 2 -->
                    <div class="glass-panel p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all flex flex-col md:flex-row gap-8 items-center group animate-on-scroll" style="transition-delay: 100ms;">
                        <div class="w-full md:w-48 aspect-video md:aspect-square bg-surface-variant rounded-xl overflow-hidden shrink-0 relative">
                            <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Magazine">
                        </div>
                        <div class="flex-1">
                            <div class="flex items-center gap-3 mb-3">
                                <span class="text-xs font-bold text-[#0a0a0a] bg-white px-3 py-1 rounded">Business Times</span>
                                <span class="text-xs text-on-surface-variant font-bold">Jan 2022</span>
                            </div>
                            <h4 class="font-heading font-bold text-white text-xl mb-3 group-hover:text-white transition-colors leading-tight">United Digital: Scaling Local Printing Operations</h4>
                            <a href="#" class="inline-flex items-center gap-1 text-sm font-heading font-bold text-on-surface-variant hover:text-white transition-colors">Read Full Article <span class="material-symbols-outlined text-[16px]">open_in_new</span></a>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- MODULE: Certificate Preview Modal (Hidden by Default) -->
        <div id="certModal" class="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl hidden flex items-center justify-center p-6 opacity-0 transition-opacity duration-300">
            <button onclick="closeModal()" class="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-50">
                <span class="material-symbols-outlined">close</span>
            </button>
            <div class="max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
                <img id="modalImage" src="" alt="Certificate Preview" class="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl mb-6">
                <h3 id="modalTitle" class="font-heading font-black text-2xl text-white text-center"></h3>
            </div>
        </div>

    </main>
`;

const finalHtml = topHalf + newContent + `
    <!-- Reusable Footer Component Injection -->
    <div data-component="Footer"></div>

    <script src="assets/js/app.js"></script>
    <script>
        // Modal Logic for Certificates
        const modal = document.getElementById('certModal');
        const modalImg = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');

        function openModal(imgSrc, title) {
            modalImg.src = imgSrc;
            modalTitle.innerText = title;
            modal.classList.remove('hidden');
            // Slight delay to allow display:block to apply before changing opacity for transition
            setTimeout(() => {
                modal.classList.remove('opacity-0');
            }, 10);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        function closeModal() {
            modal.classList.add('opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
            document.body.style.overflow = 'auto'; // Restore scrolling
        }

        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
        });
    </script>
</body>
</html>
`;

fs.writeFileSync(awardsPath, finalHtml, 'utf8');
console.log('Successfully wrote the new Awards & Honors page.');
