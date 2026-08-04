const fs = require('fs');
const path = require('path');

const creatorPath = path.join(__dirname, 'creator.html');
const currentHtml = fs.readFileSync(creatorPath, 'utf8');

// Split right before the YouTube Showcase so we keep the Hero and Social Statistics
const splitIndex = currentHtml.indexOf('<!-- MODULE: Featured Videos (YouTube Showcase) -->');

if (splitIndex === -1) {
    console.error("Could not find split marker <!-- MODULE: Featured Videos (YouTube Showcase) -->");
    process.exit(1);
}

const topHalf = currentHtml.substring(0, splitIndex);

// Generate massive new creator hub content
const newContent = `
        <!-- MODULE: Content Categories (Filters) -->
        <section class="py-8 border-t border-white/5 bg-surface/20 sticky top-24 z-30 backdrop-blur-xl">
            <div class="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-center gap-4 flex-wrap">
                <button class="px-6 py-2 bg-primary text-white rounded-full font-heading font-bold text-sm shadow-[0_0_15px_rgba(255,122,0,0.4)]">All Content</button>
                <button class="px-6 py-2 bg-background border border-white/10 text-white rounded-full font-heading font-bold text-sm hover:border-white/30 transition-colors">Grammar Lessons</button>
                <button class="px-6 py-2 bg-background border border-white/10 text-white rounded-full font-heading font-bold text-sm hover:border-white/30 transition-colors">Vlogs</button>
                <button class="px-6 py-2 bg-background border border-white/10 text-white rounded-full font-heading font-bold text-sm hover:border-white/30 transition-colors">Shorts/Reels</button>
                <button class="px-6 py-2 bg-background border border-white/10 text-white rounded-full font-heading font-bold text-sm hover:border-white/30 transition-colors">Motivation</button>
            </div>
        </section>

        <!-- MODULE: YouTube Showcase (Horizontal Layout) -->
        <section class="py-24 px-6 md:px-16 max-w-7xl mx-auto">
            <div class="flex justify-between items-end mb-12 animate-on-scroll">
                <div>
                    <h2 class="font-heading text-sm text-[#ff0000] uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
                        <span class="material-symbols-outlined text-[18px]">play_circle</span> YouTube Showcase
                    </h2>
                    <h3 class="font-heading text-4xl md:text-5xl font-black text-white">Latest Masterclasses</h3>
                </div>
                <a href="https://youtube.com/@ramsaranyadav-r7v" class="hidden md:flex items-center gap-2 text-[#ff0000] font-heading text-sm font-bold border-b border-[#ff0000]/30 hover:border-[#ff0000] transition-colors pb-1">
                    View Channel <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
            </div>
            
            <div class="flex flex-col lg:flex-row gap-8">
                
                <!-- Massive Featured Video -->
                <div class="lg:w-2/3 glass-panel rounded-3xl overflow-hidden group border border-[#ff0000]/30 relative shadow-[0_0_30px_rgba(255,0,0,0.1)] animate-on-scroll">
                    <a href="#" class="absolute inset-0 z-20"></a>
                    <div class="absolute top-4 left-4 bg-[#ff0000] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider z-10 shadow-lg">Featured</div>
                    
                    <div class="aspect-video relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Video Thumbnail">
                        
                        <div class="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                            <div class="w-20 h-20 bg-[#ff0000] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.8)] group-hover:scale-110 transition-transform">
                                <span class="material-symbols-outlined text-white text-4xl ml-1">play_arrow</span>
                            </div>
                        </div>
                        
                        <!-- Video Duration Badge -->
                        <div class="absolute bottom-4 right-4 bg-black/80 backdrop-blur text-white text-xs font-bold px-2 py-1 rounded">24:15</div>
                    </div>
                    
                    <div class="p-8">
                        <div class="flex items-center gap-4 text-xs font-body text-on-surface-variant mb-4 uppercase tracking-wider font-bold">
                            <span>1.2M Views</span>
                            <span class="w-1 h-1 bg-white/30 rounded-full"></span>
                            <span>3 Weeks Ago</span>
                        </div>
                        <h4 class="font-heading text-3xl font-bold text-white mb-4 group-hover:text-[#ff0000] transition-colors leading-tight">Mastering English Grammar: The 10 Secrets to Acing Your Board Exams</h4>
                        <p class="font-body text-sm text-on-surface-variant line-clamp-2">An in-depth guide covering the most crucial rules of grammar. We break down complex syntax into easily digestible formulas for high school students.</p>
                    </div>
                </div>
                
                <!-- Video Sidebar List -->
                <div class="lg:w-1/3 flex flex-col gap-6">
                    
                    <!-- Small Video Card -->
                    <div class="glass-panel rounded-2xl overflow-hidden group flex border border-white/5 hover:border-white/20 transition-colors relative animate-on-scroll">
                        <a href="#" class="absolute inset-0 z-20"></a>
                        <div class="w-2/5 aspect-video relative overflow-hidden shrink-0">
                            <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Video Thumbnail">
                            <div class="absolute bottom-2 right-2 bg-black/80 backdrop-blur text-white text-[10px] font-bold px-1.5 py-0.5 rounded">12:04</div>
                        </div>
                        <div class="p-4 flex flex-col justify-center">
                            <h5 class="font-heading font-bold text-sm text-white group-hover:text-[#ff0000] transition-colors line-clamp-2 mb-2 leading-snug">The 3Ds of Student Success Explained</h5>
                            <span class="text-[11px] text-on-surface-variant font-bold uppercase tracking-wide">450K Views • 1 Month</span>
                        </div>
                    </div>

                    <!-- Small Video Card -->
                    <div class="glass-panel rounded-2xl overflow-hidden group flex border border-white/5 hover:border-white/20 transition-colors relative animate-on-scroll" style="transition-delay: 100ms;">
                        <a href="#" class="absolute inset-0 z-20"></a>
                        <div class="w-2/5 aspect-video relative overflow-hidden shrink-0">
                            <img src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1974&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Video Thumbnail">
                            <div class="absolute bottom-2 right-2 bg-black/80 backdrop-blur text-white text-[10px] font-bold px-1.5 py-0.5 rounded">08:45</div>
                        </div>
                        <div class="p-4 flex flex-col justify-center">
                            <h5 class="font-heading font-bold text-sm text-white group-hover:text-[#ff0000] transition-colors line-clamp-2 mb-2 leading-snug">My Complete Studio Tour 2023</h5>
                            <span class="text-[11px] text-on-surface-variant font-bold uppercase tracking-wide">200K Views • 2 Months</span>
                        </div>
                    </div>
                    
                    <!-- Small Video Card -->
                    <div class="glass-panel rounded-2xl overflow-hidden group flex border border-white/5 hover:border-white/20 transition-colors relative animate-on-scroll" style="transition-delay: 200ms;">
                        <a href="#" class="absolute inset-0 z-20"></a>
                        <div class="w-2/5 aspect-video relative overflow-hidden shrink-0">
                            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Video Thumbnail">
                            <div class="absolute bottom-2 right-2 bg-black/80 backdrop-blur text-white text-[10px] font-bold px-1.5 py-0.5 rounded">15:20</div>
                        </div>
                        <div class="p-4 flex flex-col justify-center">
                            <h5 class="font-heading font-bold text-sm text-white group-hover:text-[#ff0000] transition-colors line-clamp-2 mb-2 leading-snug">How to Build Confidence for Public Speaking</h5>
                            <span class="text-[11px] text-on-surface-variant font-bold uppercase tracking-wide">800K Views • 4 Months</span>
                        </div>
                    </div>
                    
                    <!-- Subscribe CTA inside list -->
                    <div class="mt-auto glass-panel p-6 rounded-2xl border border-[#ff0000]/20 flex flex-col items-center justify-center text-center relative overflow-hidden animate-on-scroll" style="transition-delay: 300ms;">
                        <div class="absolute inset-0 bg-gradient-to-t from-[#ff0000]/10 to-transparent"></div>
                        <h5 class="font-heading font-black text-xl text-white mb-2 relative z-10">Want More?</h5>
                        <p class="font-body text-xs text-on-surface-variant mb-4 relative z-10">Join 100,000+ students on YouTube.</p>
                        <a href="https://youtube.com/@ramsaranyadav-r7v" class="bg-[#ff0000] text-white px-6 py-2 rounded-lg font-heading text-sm font-bold hover:brightness-110 transition-all shadow-[0_0_15px_rgba(255,0,0,0.4)] relative z-10 w-full">Subscribe Now</a>
                    </div>
                    
                </div>
            </div>
        </section>

        <!-- MODULE: Vertical Content (Shorts / Reels / Instagram) -->
        <section class="py-24 bg-surface/30 border-y border-white/5 relative overflow-hidden">
            <div class="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-[#E1306C]/10 rounded-full blur-[150px] pointer-events-none"></div>
            
            <div class="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
                <div class="text-center mb-16 animate-on-scroll">
                    <h2 class="font-heading text-sm text-[#E1306C] uppercase tracking-widest font-bold mb-4 flex items-center justify-center gap-2">
                        <span class="material-symbols-outlined text-[18px]">photo_camera</span> Viral Content
                    </h2>
                    <h3 class="font-heading text-4xl md:text-5xl font-black text-white">Shorts & Reels</h3>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    
                    <!-- Vertical Video Card -->
                    <div class="glass-panel rounded-2xl overflow-hidden group relative aspect-[9/16] animate-on-scroll">
                        <img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1788&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Reel">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div class="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                                <span class="material-symbols-outlined text-white text-4xl">play_arrow</span>
                            </div>
                        </div>
                        <div class="absolute bottom-0 left-0 w-full p-4">
                            <h5 class="font-heading font-bold text-white text-sm line-clamp-2 mb-2">1 Minute English: Using Articles Correctly</h5>
                            <div class="flex items-center gap-3 text-xs font-bold text-white/80">
                                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">visibility</span> 1.5M</span>
                                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">favorite</span> 240K</span>
                            </div>
                        </div>
                    </div>

                    <!-- Vertical Video Card -->
                    <div class="glass-panel rounded-2xl overflow-hidden group relative aspect-[9/16] animate-on-scroll" style="transition-delay: 100ms;">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1771&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Reel">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div class="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                                <span class="material-symbols-outlined text-white text-4xl">play_arrow</span>
                            </div>
                        </div>
                        <div class="absolute bottom-0 left-0 w-full p-4">
                            <h5 class="font-heading font-bold text-white text-sm line-clamp-2 mb-2">Motivation Monday: Don't Stop Now</h5>
                            <div class="flex items-center gap-3 text-xs font-bold text-white/80">
                                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">visibility</span> 890K</span>
                                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">favorite</span> 120K</span>
                            </div>
                        </div>
                    </div>

                    <!-- Vertical Video Card -->
                    <div class="glass-panel rounded-2xl overflow-hidden group relative aspect-[9/16] animate-on-scroll" style="transition-delay: 200ms;">
                        <img src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1770&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Reel">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div class="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                                <span class="material-symbols-outlined text-white text-4xl">play_arrow</span>
                            </div>
                        </div>
                        <div class="absolute bottom-0 left-0 w-full p-4">
                            <h5 class="font-heading font-bold text-white text-sm line-clamp-2 mb-2">Behind the Scenes at United Digital</h5>
                            <div class="flex items-center gap-3 text-xs font-bold text-white/80">
                                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">visibility</span> 650K</span>
                                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">favorite</span> 85K</span>
                            </div>
                        </div>
                    </div>

                    <!-- Vertical Video Card -->
                    <div class="glass-panel rounded-2xl overflow-hidden group relative aspect-[9/16] animate-on-scroll" style="transition-delay: 300ms;">
                        <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1770&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Reel">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div class="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                                <span class="material-symbols-outlined text-white text-4xl">play_arrow</span>
                            </div>
                        </div>
                        <div class="absolute bottom-0 left-0 w-full p-4">
                            <h5 class="font-heading font-bold text-white text-sm line-clamp-2 mb-2">My Daily Routine as an Educator</h5>
                            <div class="flex items-center gap-3 text-xs font-bold text-white/80">
                                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">visibility</span> 1.1M</span>
                                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">favorite</span> 190K</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- MODULE: The Studio & Gear -->
        <section class="py-24 px-6 md:px-16 max-w-7xl mx-auto">
            <div class="flex flex-col lg:flex-row gap-16 items-center mb-24 animate-on-scroll">
                
                <div class="lg:w-1/2">
                    <h2 class="font-heading text-sm text-primary uppercase tracking-widest font-bold mb-4">Behind The Scenes</h2>
                    <h3 class="font-heading text-4xl md:text-5xl font-black text-white mb-6">The Studio Setup</h3>
                    <p class="font-body text-lg text-on-surface-variant mb-6 leading-relaxed">
                        High-quality education requires high-quality production. My studio is acoustically treated and lit with cinematic precision to ensure that students focus entirely on the lesson, without distractions.
                    </p>
                    <p class="font-body text-sm text-on-surface-variant mb-8 leading-relaxed">
                        The entire workflow, from multi-camera recording to post-production color grading and audio mastering, is handled in-house to maintain a consistent, premium standard across all channels.
                    </p>
                    <a href="gallery.html" class="inline-flex items-center gap-2 px-8 py-3 glass-panel border border-white/20 text-white rounded-full font-heading font-bold text-sm hover:bg-white hover:text-[#0a0a0a] transition-all">
                        View Full Gallery <span class="material-symbols-outlined text-sm">photo_library</span>
                    </a>
                </div>
                
                <div class="lg:w-1/2 relative">
                    <div class="aspect-[4/3] rounded-3xl overflow-hidden glass-panel border border-white/10 p-2 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                        <img src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1974&auto=format&fit=crop" class="w-full h-full object-cover rounded-2xl" alt="Studio Setup">
                    </div>
                    <!-- Floating Badge -->
                    <div class="absolute -bottom-6 -left-6 glass-panel border border-primary/30 p-4 rounded-xl flex items-center gap-4 shadow-xl -rotate-6 hover:rotate-0 transition-transform">
                        <span class="material-symbols-outlined text-3xl text-primary">mic_external_on</span>
                        <div>
                            <div class="font-heading font-bold text-white">Pro Audio</div>
                            <div class="font-body text-xs text-on-surface-variant">Broadcast Quality</div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Equipment Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div class="glass-panel p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-colors group animate-on-scroll">
                    <span class="material-symbols-outlined text-4xl text-primary mb-6 block group-hover:-translate-y-2 transition-transform">videocam</span>
                    <h4 class="font-heading font-bold text-white text-xl mb-3">Camera & Lenses</h4>
                    <ul class="space-y-3 font-body text-sm text-on-surface-variant">
                        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-white/30"></span> Sony A7IV (4K 10-bit)</li>
                        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-white/30"></span> Sigma 24-70mm f/2.8</li>
                        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-white/30"></span> Sony 35mm f/1.4 GM</li>
                    </ul>
                </div>

                <div class="glass-panel p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-colors group animate-on-scroll" style="transition-delay: 100ms;">
                    <span class="material-symbols-outlined text-4xl text-primary mb-6 block group-hover:-translate-y-2 transition-transform">lightbulb</span>
                    <h4 class="font-heading font-bold text-white text-xl mb-3">Lighting & Grip</h4>
                    <ul class="space-y-3 font-body text-sm text-on-surface-variant">
                        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-white/30"></span> Aputure 120d II Key Light</li>
                        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-white/30"></span> Light Dome II Softbox</li>
                        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-white/30"></span> RGB Tube Lights (Accent)</li>
                    </ul>
                </div>

                <div class="glass-panel p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-colors group animate-on-scroll" style="transition-delay: 200ms;">
                    <span class="material-symbols-outlined text-4xl text-primary mb-6 block group-hover:-translate-y-2 transition-transform">laptop_mac</span>
                    <h4 class="font-heading font-bold text-white text-xl mb-3">Editing Workflow</h4>
                    <ul class="space-y-3 font-body text-sm text-on-surface-variant">
                        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-white/30"></span> Custom PC (RTX 4080)</li>
                        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-white/30"></span> Adobe Premiere Pro</li>
                        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-white/30"></span> DaVinci Resolve (Color)</li>
                    </ul>
                </div>

            </div>
        </section>

        <!-- MODULE: Facebook Feed -->
        <section class="py-24 bg-[#1877f2]/5 border-t border-white/5">
            <div class="max-w-7xl mx-auto px-6 md:px-16 text-center animate-on-scroll">
                <h2 class="font-heading text-sm text-[#1877f2] uppercase tracking-widest font-bold mb-4 flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-[18px]">public</span> Facebook Community
                </h2>
                <h3 class="font-heading text-4xl font-black text-white mb-12">Recent Updates</h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                    
                    <!-- FB Post 1 -->
                    <div class="glass-panel p-6 rounded-2xl border border-white/5 hover:border-[#1877f2]/50 transition-colors">
                        <div class="flex items-center gap-3 mb-4">
                            <img src="RAm.jpg" class="w-10 h-10 rounded-full object-cover border border-[#1877f2]">
                            <div>
                                <div class="font-heading font-bold text-sm text-white">Ram Saran Yadav</div>
                                <div class="font-body text-[11px] text-on-surface-variant flex items-center gap-1">2h ago • <span class="material-symbols-outlined text-[12px]">public</span></div>
                            </div>
                        </div>
                        <p class="font-body text-sm text-white/90 mb-4 line-clamp-4">
                            Just finished a massive 4-hour workshop on spoken English at Shree Janta Secondary School. The energy from the students was absolutely incredible today! Never underestimate the power of determination. 🔥📚
                        </p>
                        <div class="aspect-video rounded-xl overflow-hidden mb-4 bg-surface">
                            <img src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1770&auto=format&fit=crop" class="w-full h-full object-cover" alt="Post Image">
                        </div>
                        <div class="flex items-center gap-6 pt-3 border-t border-white/10 text-on-surface-variant">
                            <button class="flex items-center gap-1 text-xs font-bold hover:text-[#1877f2] transition-colors"><span class="material-symbols-outlined text-[16px]">thumb_up</span> 1.2K</button>
                            <button class="flex items-center gap-1 text-xs font-bold hover:text-white transition-colors"><span class="material-symbols-outlined text-[16px]">chat_bubble</span> 84</button>
                            <button class="flex items-center gap-1 text-xs font-bold hover:text-white transition-colors ml-auto"><span class="material-symbols-outlined text-[16px]">share</span> Share</button>
                        </div>
                    </div>

                    <!-- FB Post 2 -->
                    <div class="glass-panel p-6 rounded-2xl border border-white/5 hover:border-[#1877f2]/50 transition-colors hidden md:block">
                        <div class="flex items-center gap-3 mb-4">
                            <img src="RAm.jpg" class="w-10 h-10 rounded-full object-cover border border-[#1877f2]">
                            <div>
                                <div class="font-heading font-bold text-sm text-white">Ram Saran Yadav</div>
                                <div class="font-body text-[11px] text-on-surface-variant flex items-center gap-1">Yesterday • <span class="material-symbols-outlined text-[12px]">public</span></div>
                            </div>
                        </div>
                        <p class="font-body text-sm text-white/90 mb-4 line-clamp-4">
                            New video is live on YouTube! 🎬 We break down the exact strategy I used to learn advanced grammar rules. Link in the comments below! 👇
                        </p>
                        <div class="aspect-video rounded-xl overflow-hidden mb-4 bg-surface relative flex items-center justify-center">
                            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover opacity-50" alt="Post Image">
                            <span class="material-symbols-outlined text-white text-4xl absolute">play_circle</span>
                        </div>
                        <div class="flex items-center gap-6 pt-3 border-t border-white/10 text-on-surface-variant">
                            <button class="flex items-center gap-1 text-xs font-bold hover:text-[#1877f2] transition-colors"><span class="material-symbols-outlined text-[16px]">thumb_up</span> 3.4K</button>
                            <button class="flex items-center gap-1 text-xs font-bold hover:text-white transition-colors"><span class="material-symbols-outlined text-[16px]">chat_bubble</span> 210</button>
                            <button class="flex items-center gap-1 text-xs font-bold hover:text-white transition-colors ml-auto"><span class="material-symbols-outlined text-[16px]">share</span> Share</button>
                        </div>
                    </div>

                    <!-- FB Post 3 -->
                    <div class="glass-panel p-6 rounded-2xl border border-white/5 hover:border-[#1877f2]/50 transition-colors hidden lg:block">
                        <div class="flex items-center gap-3 mb-4">
                            <img src="RAm.jpg" class="w-10 h-10 rounded-full object-cover border border-[#1877f2]">
                            <div>
                                <div class="font-heading font-bold text-sm text-white">Ram Saran Yadav</div>
                                <div class="font-body text-[11px] text-on-surface-variant flex items-center gap-1">Oct 12 • <span class="material-symbols-outlined text-[12px]">public</span></div>
                            </div>
                        </div>
                        <p class="font-body text-sm text-white/90 mb-4 line-clamp-4">
                            Huge milestone! We just delivered a batch of 5,000 custom printed school diaries from United Digital Printing Press. Grateful for the trust! 🖨️✨
                        </p>
                        <div class="aspect-video rounded-xl overflow-hidden mb-4 bg-surface">
                            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover" alt="Post Image">
                        </div>
                        <div class="flex items-center gap-6 pt-3 border-t border-white/10 text-on-surface-variant">
                            <button class="flex items-center gap-1 text-xs font-bold hover:text-[#1877f2] transition-colors"><span class="material-symbols-outlined text-[16px]">thumb_up</span> 890</button>
                            <button class="flex items-center gap-1 text-xs font-bold hover:text-white transition-colors"><span class="material-symbols-outlined text-[16px]">chat_bubble</span> 45</button>
                            <button class="flex items-center gap-1 text-xs font-bold hover:text-white transition-colors ml-auto"><span class="material-symbols-outlined text-[16px]">share</span> Share</button>
                        </div>
                    </div>

                </div>
                
                <div class="mt-12">
                    <a href="https://www.facebook.com/ramsaran.yadav.73" class="inline-flex items-center gap-2 px-8 py-3 bg-[#1877f2] text-white rounded-full font-heading font-bold text-sm hover:brightness-110 transition-all shadow-[0_0_20px_rgba(24,119,242,0.4)]">
                        View All on Facebook
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
</body>
</html>
`;

fs.writeFileSync(creatorPath, finalHtml, 'utf8');
console.log('Successfully wrote the new Creator Hub page.');
