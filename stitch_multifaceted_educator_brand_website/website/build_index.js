const fs = require('fs');
const path = require('path');

const indexHtml = `<!DOCTYPE html>
<html lang="en" class="dark scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ram Saran Yadav | Educator & Creator</title>
    <meta name="description" content="Official website of Ram Saran Yadav, an awarded Government Teacher, Printing Press Owner, and Digital Content Creator.">
    
    <script src="https://cdn.tailwindcss.com"></script>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet">
    
    <link rel="stylesheet" href="assets/css/style.css">
    
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        primary: '#FF7A00',
                        secondary: '#FF7A00',
                        background: '#0a0a0a',
                        surface: '#171717',
                        'on-surface': '#ffffff',
                        'on-surface-variant': '#9ca3af'
                    },
                    fontFamily: {
                        heading: ['Montserrat', 'sans-serif'],
                        body: ['Inter', 'sans-serif']
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-background text-on-surface font-body antialiased selection:bg-secondary selection:text-background">

    <div data-component="Navbar"></div>

    <main class="min-h-screen">
        
        <!-- MODULE: Premium Hero -->
        <section class="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden">
            <!-- Canvas Animation Background (Maintained from previous build) -->
            <canvas id="hero-sequence" class="absolute inset-0 w-full h-full object-cover z-0 opacity-40"></canvas>
            
            <div class="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-0"></div>
            <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] pointer-events-none z-0"></div>
            
            <div class="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 text-center animate-on-scroll">
                <div class="inline-flex items-center gap-3 px-5 py-2 glass-panel rounded-full mb-8 border border-white/10 shadow-[0_0_15px_rgba(255,122,0,0.3)]">
                    <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span class="text-xs font-heading text-primary uppercase tracking-widest font-bold">Impacting Lives Daily</span>
                </div>
                
                <h1 class="font-heading font-black text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.9] tracking-tighter mb-8 drop-shadow-2xl">
                    <span class="text-white">Inspiring Minds.</span><br/>
                    <span class="relative inline-block mt-2">
                        <span class="absolute inset-0 bg-primary blur-2xl opacity-30"></span>
                        <span class="relative bg-gradient-to-r from-[#FF7A00] to-[#ff3b00] text-transparent bg-clip-text">Creating Future.</span>
                    </span>
                </h1>
                
                <p class="font-body text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto mb-12 leading-relaxed">
                    Government Teacher <span class="text-primary/50 mx-2">|</span> Educator <span class="text-primary/50 mx-2">|</span> Entrepreneur <span class="text-primary/50 mx-2">|</span> Content Creator
                </p>
                
                <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a href="about.html" class="group relative px-10 py-4 bg-primary text-white rounded-full font-heading font-bold uppercase tracking-wider overflow-hidden shadow-[0_0_30px_rgba(255,122,0,0.4)] hover:shadow-[0_0_50px_rgba(255,122,0,0.6)] transition-all">
                        <span class="relative z-10">Discover My Journey</span>
                        <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                    </a>
                    <a href="creator.html" class="px-10 py-4 glass-panel rounded-full font-heading font-bold uppercase tracking-wider text-white hover:bg-white/10 border border-white/20 transition-all flex items-center gap-2">
                        <span class="material-symbols-outlined">play_circle</span> Watch Content
                    </a>
                </div>
            </div>
            
            <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden md:block">
                <span class="material-symbols-outlined text-4xl">keyboard_arrow_down</span>
            </div>
        </section>

        <!-- MODULE: The 3 Pillars (Bento Grid) -->
        <section class="py-24 px-6 md:px-16 max-w-7xl mx-auto relative z-20">
            <div class="text-center mb-16 animate-on-scroll">
                <h2 class="font-heading text-sm text-primary uppercase tracking-widest font-bold mb-4">Multifaceted Career</h2>
                <h3 class="font-heading text-4xl md:text-5xl font-black text-white">The Three Pillars</h3>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Pillar 1 -->
                <a href="teaching.html" class="group relative aspect-square md:aspect-auto md:h-[400px] rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-primary/50 transition-colors animate-on-scroll">
                    <img src="assets/img/Teaching_Hero.jpg" alt="Teaching" class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 p-8 w-full">
                        <span class="material-symbols-outlined text-4xl text-primary mb-4">school</span>
                        <h4 class="font-heading text-3xl font-bold text-white mb-2">Educator</h4>
                        <p class="font-body text-on-surface-variant text-sm group-hover:text-white transition-colors">Shaping the future through quality education and discipline.</p>
                    </div>
                </a>
                <!-- Pillar 2 -->
                <a href="printing.html" class="group relative aspect-square md:aspect-auto md:h-[400px] rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-primary/50 transition-colors animate-on-scroll" style="transition-delay: 100ms;">
                    <img src="assets/img/gallery/gallery_2.jpg" alt="Printing Press" class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 p-8 w-full">
                        <span class="material-symbols-outlined text-4xl text-primary mb-4">print</span>
                        <h4 class="font-heading text-3xl font-bold text-white mb-2">Entrepreneur</h4>
                        <p class="font-body text-on-surface-variant text-sm group-hover:text-white transition-colors">Founder of United Digital Printing Press. Enterprise solutions.</p>
                    </div>
                </a>
                <!-- Pillar 3 -->
                <a href="creator.html" class="group relative aspect-square md:aspect-auto md:h-[400px] rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-primary/50 transition-colors animate-on-scroll" style="transition-delay: 200ms;">
                    <img src="assets/img/gallery/gallery_5.jpg" alt="Creator" class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 p-8 w-full">
                        <span class="material-symbols-outlined text-4xl text-primary mb-4">videocam</span>
                        <h4 class="font-heading text-3xl font-bold text-white mb-2">Creator</h4>
                        <p class="font-body text-on-surface-variant text-sm group-hover:text-white transition-colors">Digital content creation, inspiring audiences across platforms.</p>
                    </div>
                </a>
            </div>
        </section>

        <!-- MODULE: Premium Statistics -->
        <section class="py-20 relative overflow-hidden border-y border-white/5 bg-surface/50">
            <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
            <div class="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10 text-center">
                <div class="animate-on-scroll">
                    <div class="font-heading font-black text-5xl md:text-7xl text-white drop-shadow-[0_0_15px_rgba(255,122,0,0.5)]">10<span class="text-primary">+</span></div>
                    <div class="font-heading text-sm text-on-surface-variant uppercase tracking-widest mt-2 font-bold">Years Experience</div>
                </div>
                <div class="animate-on-scroll" style="transition-delay: 100ms;">
                    <div class="font-heading font-black text-5xl md:text-7xl text-white drop-shadow-[0_0_15px_rgba(255,122,0,0.5)]">5k<span class="text-primary">+</span></div>
                    <div class="font-heading text-sm text-on-surface-variant uppercase tracking-widest mt-2 font-bold">Students Guided</div>
                </div>
                <div class="animate-on-scroll" style="transition-delay: 200ms;">
                    <div class="font-heading font-black text-5xl md:text-7xl text-white drop-shadow-[0_0_15px_rgba(255,122,0,0.5)]">10k<span class="text-primary">+</span></div>
                    <div class="font-heading text-sm text-on-surface-variant uppercase tracking-widest mt-2 font-bold">Print Orders</div>
                </div>
                <div class="animate-on-scroll" style="transition-delay: 300ms;">
                    <div class="font-heading font-black text-5xl md:text-7xl text-white drop-shadow-[0_0_15px_rgba(255,122,0,0.5)]">100k<span class="text-primary">+</span></div>
                    <div class="font-heading text-sm text-on-surface-variant uppercase tracking-widest mt-2 font-bold">Digital Reach</div>
                </div>
            </div>
        </section>

        <!-- MODULE: Featured Video -->
        <section class="py-24 px-6 md:px-16 max-w-7xl mx-auto">
            <div class="flex flex-col lg:flex-row gap-16 items-center">
                <div class="lg:w-1/2 animate-on-scroll">
                    <h2 class="font-heading text-sm text-primary uppercase tracking-widest font-bold mb-4">Digital Creator</h2>
                    <h3 class="font-heading text-4xl md:text-5xl font-black text-white mb-6">Watch the Journey Unfold.</h3>
                    <p class="font-body text-on-surface-variant text-lg mb-8">Follow my latest insights, vlogs, and educational content on YouTube and social platforms. Join a growing community of lifelong learners.</p>
                    <a href="https://youtube.com/@ramsaranyadav-r7v" target="_blank" class="inline-flex items-center gap-3 border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-heading font-bold transition-all shadow-[0_0_15px_rgba(255,122,0,0.2)]">
                        Subscribe to YouTube <span class="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                </div>
                <div class="lg:w-1/2 w-full animate-on-scroll" style="transition-delay: 200ms;">
                    <div class="aspect-video bg-surface rounded-3xl border border-white/10 relative overflow-hidden group shadow-2xl flex items-center justify-center cursor-pointer">
                        <img src="assets/img/gallery/gallery_8.jpg" alt="Video Thumbnail" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700">
                        <div class="w-20 h-20 bg-primary/90 text-white rounded-full flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(255,122,0,0.6)] group-hover:scale-110 transition-transform">
                            <span class="material-symbols-outlined text-4xl ml-1">play_arrow</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- MODULE: Personal Gallery Preview -->
        <section class="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-white/5">
            <div class="flex justify-between items-end mb-12 animate-on-scroll">
                <div>
                    <h2 class="font-heading text-sm text-primary uppercase tracking-widest font-bold mb-2">Life & Work</h2>
                    <h3 class="font-heading text-4xl font-black text-white">Moments & Memories</h3>
                </div>
                <a href="gallery.html" class="hidden md:inline-flex items-center gap-2 text-white hover:text-primary transition-colors font-heading font-bold">
                    View Full Gallery <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-on-scroll">
                <!-- Limit to 4 images for premium preview -->
                <div class="aspect-square rounded-2xl overflow-hidden group border border-white/10 shadow-lg relative">
                    <img src="assets/img/gallery/gallery_1.jpg" alt="Gallery Image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                    <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div class="aspect-square rounded-2xl overflow-hidden group border border-white/10 shadow-lg relative">
                    <img src="assets/img/gallery/gallery_2.jpg" alt="Gallery Image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                    <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div class="aspect-square rounded-2xl overflow-hidden group border border-white/10 shadow-lg relative md:-translate-y-6">
                    <img src="assets/img/gallery/gallery_3.jpg" alt="Gallery Image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                    <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div class="aspect-square rounded-2xl overflow-hidden group border border-white/10 shadow-lg relative md:translate-y-6">
                    <img src="assets/img/gallery/gallery_4.jpg" alt="Gallery Image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                    <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
            </div>
        </section>

        <!-- MODULE: Latest Updates (Blog & Resources) -->
        <section class="py-24 px-6 md:px-16 max-w-7xl mx-auto bg-surface/30 rounded-3xl border border-white/5 mb-24 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div class="text-center mb-16 animate-on-scroll">
                <h3 class="font-heading text-4xl font-black text-white">Latest Updates & Resources</h3>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 animate-on-scroll">
                <!-- Blog Preview Card -->
                <a href="blog.html" class="glass-panel p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors group flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-center mb-6">
                            <span class="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Latest Article</span>
                            <span class="material-symbols-outlined text-white/30 group-hover:text-primary transition-colors text-3xl">article</span>
                        </div>
                        <h4 class="font-heading text-2xl font-bold text-white mb-4">The Evolution of Modern Teaching Methods</h4>
                        <p class="font-body text-on-surface-variant mb-8 line-clamp-2">How technology is reshaping the classroom and why determination remains the key to student success.</p>
                    </div>
                    <span class="font-heading font-bold text-primary flex items-center gap-2 text-sm uppercase tracking-wider">Read Full Article <span class="material-symbols-outlined text-sm transition-transform group-hover:translate-x-2">arrow_forward</span></span>
                </a>
                
                <!-- Resources Preview Card -->
                <a href="resources.html" class="glass-panel p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors group flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-center mb-6">
                            <span class="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Student Material</span>
                            <span class="material-symbols-outlined text-white/30 group-hover:text-primary transition-colors text-3xl">download</span>
                        </div>
                        <h4 class="font-heading text-2xl font-bold text-white mb-4">Essential English Grammar Handbook</h4>
                        <p class="font-body text-on-surface-variant mb-8 line-clamp-2">Download the comprehensive guide designed specifically for secondary level students preparing for board exams.</p>
                    </div>
                    <span class="font-heading font-bold text-primary flex items-center gap-2 text-sm uppercase tracking-wider">Access Resource <span class="material-symbols-outlined text-sm transition-transform group-hover:translate-x-2">arrow_forward</span></span>
                </a>
            </div>
        </section>

        <!-- MODULE: Final CTA -->
        <section class="py-32 relative text-center overflow-hidden">
            <div class="absolute inset-0 bg-primary/20"></div>
            <div class="absolute inset-0 backdrop-blur-3xl"></div>
            <div class="relative z-10 max-w-3xl mx-auto px-6 animate-on-scroll">
                <h2 class="font-heading font-black text-5xl md:text-7xl text-white mb-8 tracking-tighter">Let's Create<br>Something Great.</h2>
                <p class="font-body text-xl text-white/80 mb-12">Whether for education, enterprise printing, or content collaboration, I am always open to new opportunities.</p>
                <a href="contact.html" class="inline-block bg-white text-background px-12 py-5 rounded-full font-heading font-black text-lg uppercase tracking-wider hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                    Get In Touch
                </a>
            </div>
        </section>

    </main>

    <div data-component="Footer"></div>
    <script src="assets/js/app.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'index.html'), indexHtml, 'utf8');
console.log('Successfully wrote the new index.html');
