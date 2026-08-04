const fs = require('fs');
const path = require('path');

const baseHtmlHead = `<!DOCTYPE html>
<html lang="en" class="dark scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{TITLE}} | Ram Saran Yadav</title>
    <meta name="description" content="{{DESCRIPTION}}">
    
    <script src="https://cdn.tailwindcss.com"></script>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Inter:wght@400;500;600&family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&display=swap" rel="stylesheet">
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
                        body: ['Inter', 'sans-serif'],
                        serif: ['Merriweather', 'serif']
                    }
                }
            }
        }
    </script>
    {{SCHEMA}}
</head>
<body class="bg-background text-on-surface font-body antialiased selection:bg-secondary selection:text-background">
    <!-- Reusable Navbar Component Injection -->
    <div data-component="Navbar"></div>
`;

const footerHtml = `
    <div data-component="Footer"></div>
    <script src="assets/js/app.js"></script>
</body>
</html>`;


// ============================================
// BUILD BLOG.HTML
// ============================================
const blogHtml = baseHtmlHead.replace('{{TITLE}}', 'Blog & Insights').replace('{{DESCRIPTION}}', 'Thoughts, experiences, and actionable advice on education, entrepreneurship, and digital creation.').replace('{{SCHEMA}}', '') + `
    <main class="pt-24 min-h-screen pb-24">
        
        <!-- Header Section -->
        <section class="py-16 px-6 md:px-16 max-w-7xl mx-auto text-center relative overflow-hidden border-b border-white/5">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div class="relative z-10 animate-on-scroll">
                <span class="material-symbols-outlined text-6xl text-primary mb-6">edit_document</span>
                <h1 class="font-heading font-black text-5xl md:text-7xl text-white mb-6 tracking-tighter">The Journal</h1>
                <p class="font-body text-xl text-on-surface-variant max-w-2xl mx-auto">
                    Insights on education, entrepreneurship, and building a disciplined life.
                </p>
            </div>
        </section>

        <!-- Blog Main Layout -->
        <section class="py-16 px-6 md:px-16 max-w-7xl mx-auto relative z-20">
            <div class="flex flex-col lg:flex-row gap-12">
                
                <!-- Main Feed (Left Column) -->
                <div class="lg:w-2/3 space-y-12">
                    
                    <!-- Featured Article -->
                    <article class="glass-panel rounded-[2rem] overflow-hidden group border border-primary/30 relative">
                        <a href="article.html" class="absolute inset-0 z-10"></a>
                        <div class="aspect-[16/9] relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Students writing" loading="lazy">
                            <div class="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">Featured</div>
                        </div>
                        <div class="p-8 md:p-10 relative z-20">
                            <div class="flex items-center flex-wrap gap-4 text-xs font-body text-secondary mb-4 uppercase tracking-wider font-bold">
                                <span class="flex items-center"><span class="material-symbols-outlined text-[16px] mr-1">calendar_today</span> Oct 12, 2023</span>
                                <span class="flex items-center"><span class="material-symbols-outlined text-[16px] mr-1">folder</span> Education</span>
                                <span class="flex items-center text-on-surface-variant"><span class="material-symbols-outlined text-[16px] mr-1">schedule</span> 8 Min Read</span>
                            </div>
                            <h2 class="font-heading text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                The 3Ds of Student Success: Determination, Discipline, Dedication
                            </h2>
                            <p class="font-body text-on-surface-variant leading-relaxed mb-6">
                                Over my decade-long teaching career, I have observed that academic excellence is rarely about raw talent. It is almost always a product of consistency. In this article, we break down my core philosophy for empowering students to achieve their maximum potential.
                            </p>
                            
                            <div class="flex items-center justify-between border-t border-white/10 pt-6 mt-6">
                                <div class="flex items-center gap-3">
                                    <img src="RAm.jpg" alt="Ram Saran Yadav" class="w-10 h-10 rounded-full object-cover">
                                    <div class="font-heading text-sm font-bold text-white">Ram Saran Yadav</div>
                                </div>
                                <span class="text-primary font-heading font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Read Post <span class="material-symbols-outlined text-sm">arrow_forward</span></span>
                            </div>
                        </div>
                    </article>

                    <!-- Latest Posts Grid -->
                    <div class="flex items-center justify-between border-b border-white/10 pb-4">
                        <h3 class="font-heading font-bold text-2xl text-white">Latest Articles</h3>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        
                        <!-- Article Card -->
                        <article class="glass-panel rounded-2xl overflow-hidden group flex flex-col h-full border border-white/5 hover:border-white/20 transition-colors relative">
                            <a href="article.html" class="absolute inset-0 z-10"></a>
                            <div class="aspect-video relative overflow-hidden shrink-0">
                                <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Printing Press" loading="lazy">
                            </div>
                            <div class="p-6 flex flex-col flex-grow relative z-20">
                                <div class="flex items-center gap-3 text-xs font-body text-primary mb-3 uppercase tracking-wider font-bold">
                                    <span>Sep 28, 2023</span>
                                    <span class="w-1 h-1 bg-white/30 rounded-full"></span>
                                    <span>5 Min Read</span>
                                </div>
                                <h4 class="font-heading text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    Starting a Digital Printing Press in 2023
                                </h4>
                                <p class="font-body text-sm text-on-surface-variant leading-relaxed mb-6 line-clamp-3 flex-grow">
                                    From securing the right industrial equipment to understanding the local market demands for flex and offset printing, here is a behind-the-scenes look at United Digital.
                                </p>
                                <div class="flex items-center gap-2">
                                    <span class="px-2 py-1 bg-surface rounded text-xs text-white">Entrepreneurship</span>
                                    <span class="px-2 py-1 bg-surface rounded text-xs text-white">Business</span>
                                </div>
                            </div>
                        </article>

                        <!-- Article Card -->
                        <article class="glass-panel rounded-2xl overflow-hidden group flex flex-col h-full border border-white/5 hover:border-white/20 transition-colors relative">
                            <a href="article.html" class="absolute inset-0 z-10"></a>
                            <div class="aspect-video relative overflow-hidden shrink-0">
                                <img src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1974&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Video Setup" loading="lazy">
                            </div>
                            <div class="p-6 flex flex-col flex-grow relative z-20">
                                <div class="flex items-center gap-3 text-xs font-body text-primary mb-3 uppercase tracking-wider font-bold">
                                    <span>Sep 15, 2023</span>
                                    <span class="w-1 h-1 bg-white/30 rounded-full"></span>
                                    <span>10 Min Read</span>
                                </div>
                                <h4 class="font-heading text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    Scaling Education Through YouTube
                                </h4>
                                <p class="font-body text-sm text-on-surface-variant leading-relaxed mb-6 line-clamp-3 flex-grow">
                                    The traditional classroom has limits. Digital platforms do not. Discover the workflow, equipment, and mindset required to transition from a physical classroom to a digital educator.
                                </p>
                                <div class="flex items-center gap-2">
                                    <span class="px-2 py-1 bg-surface rounded text-xs text-white">Creation</span>
                                    <span class="px-2 py-1 bg-surface rounded text-xs text-white">Tech</span>
                                </div>
                            </div>
                        </article>

                        <!-- Article Card -->
                        <article class="glass-panel rounded-2xl overflow-hidden group flex flex-col h-full border border-white/5 hover:border-white/20 transition-colors relative">
                            <a href="article.html" class="absolute inset-0 z-10"></a>
                            <div class="aspect-video relative overflow-hidden shrink-0">
                                <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Meeting" loading="lazy">
                            </div>
                            <div class="p-6 flex flex-col flex-grow relative z-20">
                                <div class="flex items-center gap-3 text-xs font-body text-primary mb-3 uppercase tracking-wider font-bold">
                                    <span>Aug 04, 2023</span>
                                    <span class="w-1 h-1 bg-white/30 rounded-full"></span>
                                    <span>4 Min Read</span>
                                </div>
                                <h4 class="font-heading text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    The Power of Community Leadership
                                </h4>
                                <p class="font-body text-sm text-on-surface-variant leading-relaxed mb-6 line-clamp-3 flex-grow">
                                    Leadership isn't about being in charge; it's about taking care of those in your charge. A reflection on community service and building teams that last.
                                </p>
                                <div class="flex items-center gap-2">
                                    <span class="px-2 py-1 bg-surface rounded text-xs text-white">Leadership</span>
                                </div>
                            </div>
                        </article>

                        <!-- Article Card -->
                        <article class="glass-panel rounded-2xl overflow-hidden group flex flex-col h-full border border-white/5 hover:border-white/20 transition-colors relative">
                            <a href="article.html" class="absolute inset-0 z-10"></a>
                            <div class="aspect-video relative overflow-hidden shrink-0">
                                <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Writing" loading="lazy">
                            </div>
                            <div class="p-6 flex flex-col flex-grow relative z-20">
                                <div class="flex items-center gap-3 text-xs font-body text-primary mb-3 uppercase tracking-wider font-bold">
                                    <span>Jul 22, 2023</span>
                                    <span class="w-1 h-1 bg-white/30 rounded-full"></span>
                                    <span>6 Min Read</span>
                                </div>
                                <h4 class="font-heading text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    Why I Still Write Everything Down
                                </h4>
                                <p class="font-body text-sm text-on-surface-variant leading-relaxed mb-6 line-clamp-3 flex-grow">
                                    In a world dominated by screens, the simple act of putting pen to paper remains one of the most powerful tools for memory retention and thought organization.
                                </p>
                                <div class="flex items-center gap-2">
                                    <span class="px-2 py-1 bg-surface rounded text-xs text-white">Productivity</span>
                                </div>
                            </div>
                        </article>
                    </div>

                    <!-- Pagination -->
                    <div class="flex justify-center mt-12 pt-8 border-t border-white/10">
                        <div class="flex items-center gap-2">
                            <button class="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 text-on-surface-variant hover:text-white hover:border-primary transition-colors"><span class="material-symbols-outlined text-sm">arrow_back_ios_new</span></button>
                            <button class="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white shadow-[0_0_10px_rgba(255,122,0,0.5)] font-bold text-sm">1</button>
                            <button class="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 text-on-surface-variant hover:text-white hover:border-white/30 transition-colors font-bold text-sm">2</button>
                            <button class="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 text-on-surface-variant hover:text-white hover:border-white/30 transition-colors font-bold text-sm">3</button>
                            <span class="text-on-surface-variant mx-2">...</span>
                            <button class="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 text-on-surface-variant hover:text-white hover:border-primary transition-colors"><span class="material-symbols-outlined text-sm">arrow_forward_ios</span></button>
                        </div>
                    </div>

                </div>

                <!-- Sidebar (Right Column) -->
                <aside class="lg:w-1/3 space-y-8">
                    
                    <!-- Search Widget -->
                    <div class="glass-panel p-6 rounded-2xl border border-white/5">
                        <h4 class="font-heading font-bold text-white mb-4 flex items-center gap-2"><span class="material-symbols-outlined text-primary text-xl">search</span> Search</h4>
                        <div class="relative">
                            <input type="text" placeholder="Search articles..." class="w-full bg-surface border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-primary transition-colors">
                            <button class="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-white transition-colors">
                                <span class="material-symbols-outlined text-xl">arrow_forward</span>
                            </button>
                        </div>
                    </div>

                    <!-- Author Widget -->
                    <div class="glass-panel p-6 rounded-2xl border border-white/5 text-center">
                        <img src="RAm.jpg" alt="Ram Saran Yadav" class="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-primary/50 p-1">
                        <h4 class="font-heading font-bold text-white text-lg mb-1">Ram Saran Yadav</h4>
                        <p class="font-heading text-xs text-primary uppercase tracking-widest font-bold mb-3">Educator & Founder</p>
                        <p class="font-body text-sm text-on-surface-variant mb-4">Sharing a decade of insights on education, community building, and enterprise.</p>
                        <a href="about.html" class="inline-block text-sm font-bold text-white hover:text-primary transition-colors border-b border-primary/30 pb-1">Read My Story</a>
                    </div>

                    <!-- Newsletter Widget -->
                    <div class="relative rounded-2xl overflow-hidden p-6 border border-primary/20">
                        <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-surface z-0"></div>
                        <div class="relative z-10 text-center">
                            <span class="material-symbols-outlined text-4xl text-primary mb-2">mark_email_read</span>
                            <h4 class="font-heading font-bold text-white text-xl mb-2">Join the Newsletter</h4>
                            <p class="font-body text-sm text-white/80 mb-4">Get weekly insights on education and business delivered straight to your inbox.</p>
                            <form class="flex flex-col gap-3">
                                <input type="email" placeholder="Email Address" required class="w-full bg-background border border-white/10 rounded-lg py-2.5 px-4 text-sm text-white focus:outline-none focus:border-primary transition-colors text-center">
                                <button type="submit" class="w-full bg-primary text-white font-heading font-bold text-sm py-2.5 rounded-lg hover:bg-white hover:text-[#0a0a0a] transition-all shadow-lg">Subscribe</button>
                            </form>
                        </div>
                    </div>

                    <!-- Categories Widget -->
                    <div class="glass-panel p-6 rounded-2xl border border-white/5">
                        <h4 class="font-heading font-bold text-white mb-4 flex items-center gap-2"><span class="material-symbols-outlined text-primary text-xl">category</span> Categories</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="flex justify-between items-center text-on-surface-variant hover:text-primary transition-colors text-sm py-2 border-b border-white/5"><span class="flex items-center gap-2"><span class="material-symbols-outlined text-sm">folder</span> Education</span> <span class="bg-surface px-2 py-0.5 rounded text-xs">12</span></a></li>
                            <li><a href="#" class="flex justify-between items-center text-on-surface-variant hover:text-primary transition-colors text-sm py-2 border-b border-white/5"><span class="flex items-center gap-2"><span class="material-symbols-outlined text-sm">folder</span> Entrepreneurship</span> <span class="bg-surface px-2 py-0.5 rounded text-xs">8</span></a></li>
                            <li><a href="#" class="flex justify-between items-center text-on-surface-variant hover:text-primary transition-colors text-sm py-2 border-b border-white/5"><span class="flex items-center gap-2"><span class="material-symbols-outlined text-sm">folder</span> Digital Creation</span> <span class="bg-surface px-2 py-0.5 rounded text-xs">5</span></a></li>
                            <li><a href="#" class="flex justify-between items-center text-on-surface-variant hover:text-primary transition-colors text-sm py-2"><span class="flex items-center gap-2"><span class="material-symbols-outlined text-sm">folder</span> Personal Growth</span> <span class="bg-surface px-2 py-0.5 rounded text-xs">15</span></a></li>
                        </ul>
                    </div>

                    <!-- Popular Posts -->
                    <div class="glass-panel p-6 rounded-2xl border border-white/5">
                        <h4 class="font-heading font-bold text-white mb-4 flex items-center gap-2"><span class="material-symbols-outlined text-primary text-xl">trending_up</span> Popular Posts</h4>
                        <div class="space-y-4">
                            <a href="article.html" class="flex gap-4 group">
                                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=200&auto=format&fit=crop" class="w-16 h-16 rounded object-cover" alt="Post">
                                <div>
                                    <h5 class="font-heading font-bold text-sm text-white group-hover:text-primary transition-colors line-clamp-2 leading-snug">The 3Ds of Student Success</h5>
                                    <span class="text-xs text-on-surface-variant mt-1 block">Oct 12, 2023</span>
                                </div>
                            </a>
                            <a href="article.html" class="flex gap-4 group">
                                <img src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=200&auto=format&fit=crop" class="w-16 h-16 rounded object-cover" alt="Post">
                                <div>
                                    <h5 class="font-heading font-bold text-sm text-white group-hover:text-primary transition-colors line-clamp-2 leading-snug">Scaling Education Through YouTube</h5>
                                    <span class="text-xs text-on-surface-variant mt-1 block">Sep 15, 2023</span>
                                </div>
                            </a>
                            <a href="article.html" class="flex gap-4 group">
                                <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=200&auto=format&fit=crop" class="w-16 h-16 rounded object-cover" alt="Post">
                                <div>
                                    <h5 class="font-heading font-bold text-sm text-white group-hover:text-primary transition-colors line-clamp-2 leading-snug">Why I Still Write Everything Down</h5>
                                    <span class="text-xs text-on-surface-variant mt-1 block">Jul 22, 2023</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <!-- Tags -->
                    <div class="glass-panel p-6 rounded-2xl border border-white/5">
                        <h4 class="font-heading font-bold text-white mb-4 flex items-center gap-2"><span class="material-symbols-outlined text-primary text-xl">sell</span> Tags</h4>
                        <div class="flex flex-wrap gap-2">
                            <a href="#" class="px-3 py-1 bg-surface border border-white/10 rounded-full font-heading text-xs text-on-surface-variant hover:text-white hover:border-primary transition-colors">Teaching</a>
                            <a href="#" class="px-3 py-1 bg-surface border border-white/10 rounded-full font-heading text-xs text-on-surface-variant hover:text-white hover:border-primary transition-colors">Business</a>
                            <a href="#" class="px-3 py-1 bg-surface border border-white/10 rounded-full font-heading text-xs text-on-surface-variant hover:text-white hover:border-primary transition-colors">Setup</a>
                            <a href="#" class="px-3 py-1 bg-surface border border-white/10 rounded-full font-heading text-xs text-on-surface-variant hover:text-white hover:border-primary transition-colors">Discipline</a>
                            <a href="#" class="px-3 py-1 bg-surface border border-white/10 rounded-full font-heading text-xs text-on-surface-variant hover:text-white hover:border-primary transition-colors">Printing</a>
                            <a href="#" class="px-3 py-1 bg-surface border border-white/10 rounded-full font-heading text-xs text-on-surface-variant hover:text-white hover:border-primary transition-colors">Life</a>
                        </div>
                    </div>

                </aside>
            </div>
        </section>

    </main>
` + footerHtml;


// ============================================
// BUILD ARTICLE.HTML
// ============================================
const schemaStr = `
    <!-- Article JSON-LD -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://ramsaran.com/article.html"
      },
      "headline": "The 3Ds of Student Success: Determination, Discipline, Dedication",
      "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",  
      "author": {
        "@type": "Person",
        "name": "Ram Saran Yadav"
      },  
      "publisher": {
        "@type": "Organization",
        "name": "Ram Saran Yadav",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ramsaran.com/assets/img/Logo.png"
        }
      },
      "datePublished": "2023-10-12",
      "dateModified": "2023-10-12"
    }
    </script>
`;

const articleHtml = baseHtmlHead.replace('{{TITLE}}', 'The 3Ds of Student Success').replace('{{DESCRIPTION}}', 'Over my decade-long teaching career, I break down my core philosophy for empowering students.').replace('{{SCHEMA}}', schemaStr) + `
    <main class="pt-24 min-h-screen pb-12">
        
        <!-- Article Hero -->
        <header class="relative pt-12 pb-24 px-6">
            <div class="max-w-4xl mx-auto text-center relative z-20">
                <div class="flex items-center justify-center gap-4 text-sm font-heading text-primary mb-6 uppercase tracking-widest font-bold">
                    <span>Education</span>
                    <span class="w-1 h-1 bg-white/30 rounded-full"></span>
                    <span>8 Min Read</span>
                </div>
                <h1 class="font-heading font-black text-4xl md:text-6xl text-white mb-6 leading-tight">
                    The 3Ds of Student Success: Determination, Discipline, Dedication
                </h1>
                <div class="flex items-center justify-center gap-4 text-on-surface-variant font-body">
                    <img src="RAm.jpg" alt="Ram Saran Yadav" class="w-12 h-12 rounded-full object-cover border-2 border-surface">
                    <div class="text-left">
                        <div class="text-white font-bold text-sm">Ram Saran Yadav</div>
                        <div class="text-xs">Published on Oct 12, 2023</div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Featured Image -->
        <div class="max-w-6xl mx-auto px-6 -mt-16 relative z-10 mb-16">
            <div class="aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-surface">
                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover" alt="Students writing in a notebook">
            </div>
        </div>

        <!-- Article Layout -->
        <div class="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12 relative">
            
            <!-- Floating Share Buttons (Desktop) -->
            <aside class="hidden lg:flex flex-col gap-4 sticky top-32 h-max w-16 items-center shrink-0">
                <span class="text-xs font-heading font-bold text-on-surface-variant uppercase rotate-180" style="writing-mode: vertical-rl;">Share</span>
                <div class="w-[1px] h-12 bg-white/10 my-2"></div>
                <button class="w-10 h-10 rounded-full bg-surface border border-white/5 flex items-center justify-center text-white hover:bg-[#1DA1F2] hover:border-transparent transition-colors shadow-lg group"><span class="material-symbols-outlined text-[18px]">share</span></button>
                <button class="w-10 h-10 rounded-full bg-surface border border-white/5 flex items-center justify-center text-white hover:bg-[#4267B2] hover:border-transparent transition-colors shadow-lg group"><span class="material-symbols-outlined text-[18px]">thumb_up</span></button>
                <button class="w-10 h-10 rounded-full bg-surface border border-white/5 flex items-center justify-center text-white hover:bg-[#0077b5] hover:border-transparent transition-colors shadow-lg group"><span class="material-symbols-outlined text-[18px]">work</span></button>
                <button class="w-10 h-10 rounded-full bg-surface border border-white/5 flex items-center justify-center text-white hover:bg-[#25D366] hover:border-transparent transition-colors shadow-lg group"><span class="material-symbols-outlined text-[18px]">chat</span></button>
            </aside>

            <!-- Main Article Content -->
            <article class="lg:w-3/4 max-w-3xl mx-auto prose prose-invert prose-lg prose-headings:font-heading prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl font-serif text-white/90 leading-relaxed tracking-wide">
                <p class="text-xl text-white/70 italic mb-10 leading-relaxed font-body">
                    Over my decade-long teaching career, I have observed that academic excellence is rarely about raw talent. It is almost always a product of consistency. In this article, we break down my core philosophy for empowering students to achieve their maximum potential.
                </p>

                <h2>The Myth of Pure Talent</h2>
                <p>
                    When students look at top performers in their class, they often assume those students possess a natural gift. "They're just smart," they say. But as an educator who has spent thousands of hours in the classroom, I can tell you that this is a dangerous myth. Raw intelligence will only take you so far. When the curriculum becomes difficult, when the pressure mounts before board exams, talent cracks. What holds a student together is a system.
                </p>
                <p>
                    I call this system the <strong>3Ds of Success</strong>. It is the framework I instill in every classroom I walk into at Shree Janta Secondary School.
                </p>

                <blockquote class="border-l-4 border-primary pl-6 my-10 italic text-2xl font-heading text-white bg-white/5 p-6 rounded-r-xl shadow-inner">
                    "Education is not the filling of a pail, but the lighting of a fire. But to keep a fire burning, you must continuously feed it with discipline."
                </blockquote>

                <h2>1. Determination: The Spark</h2>
                <p>
                    Everything begins with a desire to achieve. Determination is the spark. It's the moment a student decides they want to score an A, win a debate, or secure a scholarship. Without this intrinsic motivation, no amount of external pressure from parents or teachers will yield long-term results.
                </p>
                <p>
                    However, determination is an emotion. It is fleeting. You might feel determined on Monday morning, but by Thursday evening, that fire often dwindles. That is why determination alone is never enough. It must immediately be handed over to the second D.
                </p>

                <h2>2. Discipline: The Engine</h2>
                <p>
                    If determination is the spark, discipline is the engine. Discipline is doing the work even when you don't feel like it. It is sitting down at the desk at 6:00 AM because that is what your schedule dictates, regardless of your mood.
                </p>
                <ul>
                    <li>Creating a rigid study timetable.</li>
                    <li>Removing digital distractions during study hours.</li>
                    <li>Completing assignments on the day they are given.</li>
                </ul>
                <p>
                    In my experience running <a href="#">United Digital Printing Press</a>, I apply the exact same discipline. A business cannot run on motivation; it runs on systems and discipline. The classroom is no different.
                </p>

                <h2>3. Dedication: The Long Game</h2>
                <p>
                    Dedication is the commitment to the long game. It is the resilience to bounce back after a failure. When a student fails a mock exam, discipline dictates they study again, but dedication is what prevents them from giving up entirely. It is the deep-rooted belief that the end goal is worth the temporary struggle.
                </p>
                
                <hr class="border-white/10 my-12">

                <h2>The Teacher's Role</h2>
                <p>
                    As educators, it is not our job to just deliver a syllabus. It is our job to model these 3Ds. If I expect my students to be disciplined, I must arrive to class prepared and on time. If I expect them to be dedicated, I must show dedication to their individual growth.
                </p>
                <p>
                    To all the students reading this: Stop relying on motivation. Build discipline. Your future self will thank you.
                </p>

                <!-- Article Tags -->
                <div class="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center gap-3 font-body">
                    <span class="font-bold text-sm text-white mr-2">Tags:</span>
                    <a href="#" class="px-4 py-1.5 bg-surface border border-white/10 rounded-full text-xs text-on-surface-variant hover:text-white hover:border-primary transition-colors">Education</a>
                    <a href="#" class="px-4 py-1.5 bg-surface border border-white/10 rounded-full text-xs text-on-surface-variant hover:text-white hover:border-primary transition-colors">Philosophy</a>
                    <a href="#" class="px-4 py-1.5 bg-surface border border-white/10 rounded-full text-xs text-on-surface-variant hover:text-white hover:border-primary transition-colors">Discipline</a>
                </div>

                <!-- Mobile Share Buttons -->
                <div class="lg:hidden mt-8 flex items-center justify-center gap-4">
                    <button class="w-12 h-12 rounded-full bg-surface border border-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors"><span class="material-symbols-outlined">share</span></button>
                    <button class="w-12 h-12 rounded-full bg-surface border border-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors"><span class="material-symbols-outlined">thumb_up</span></button>
                </div>

                <!-- Author Box -->
                <div class="mt-16 glass-panel rounded-2xl p-8 border border-primary/20 flex flex-col md:flex-row items-center md:items-start gap-6 font-body not-prose relative overflow-hidden group">
                    <div class="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent z-0"></div>
                    <img src="RAm.jpg" alt="Ram Saran Yadav" class="w-24 h-24 rounded-full object-cover border-4 border-surface shadow-xl relative z-10 shrink-0">
                    <div class="text-center md:text-left relative z-10">
                        <h4 class="font-heading font-black text-2xl text-white mb-1">Written by Ram Saran Yadav</h4>
                        <p class="text-primary text-sm font-bold uppercase tracking-widest mb-3">Educator & Entrepreneur</p>
                        <p class="text-on-surface-variant text-sm leading-relaxed mb-4">Ram Saran is a Government English Teacher with over 10 years of experience. He is also the founder of United Digital Printing Press, blending his passion for teaching with a drive for enterprise and community development.</p>
                        <a href="about.html" class="inline-flex items-center gap-2 text-white font-bold text-sm hover:text-primary transition-colors">Read Full Bio <span class="material-symbols-outlined text-sm">arrow_forward</span></a>
                    </div>
                </div>

            </article>
        </div>
        
        <!-- Related Posts Section -->
        <section class="mt-24 py-16 bg-surface/30 border-y border-white/5">
            <div class="max-w-7xl mx-auto px-6 md:px-16">
                <h3 class="font-heading font-black text-3xl text-white mb-10 text-center md:text-left">Related Articles</h3>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    <!-- Card 1 -->
                    <article class="glass-panel rounded-2xl overflow-hidden group flex flex-col h-full border border-white/5 hover:border-white/20 transition-colors relative">
                        <a href="#" class="absolute inset-0 z-10"></a>
                        <div class="aspect-video relative overflow-hidden shrink-0">
                            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Leadership" loading="lazy">
                        </div>
                        <div class="p-6 flex flex-col flex-grow relative z-20">
                            <div class="flex items-center gap-3 text-xs font-body text-primary mb-3 uppercase tracking-wider font-bold">
                                <span>Aug 04, 2023</span>
                            </div>
                            <h4 class="font-heading text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                The Power of Community Leadership
                            </h4>
                        </div>
                    </article>

                    <!-- Card 2 -->
                    <article class="glass-panel rounded-2xl overflow-hidden group flex flex-col h-full border border-white/5 hover:border-white/20 transition-colors relative">
                        <a href="#" class="absolute inset-0 z-10"></a>
                        <div class="aspect-video relative overflow-hidden shrink-0">
                            <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Writing" loading="lazy">
                        </div>
                        <div class="p-6 flex flex-col flex-grow relative z-20">
                            <div class="flex items-center gap-3 text-xs font-body text-primary mb-3 uppercase tracking-wider font-bold">
                                <span>Jul 22, 2023</span>
                            </div>
                            <h4 class="font-heading text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                Why I Still Write Everything Down
                            </h4>
                        </div>
                    </article>

                    <!-- Card 3 -->
                    <article class="glass-panel rounded-2xl overflow-hidden group flex flex-col h-full border border-white/5 hover:border-white/20 transition-colors relative">
                        <a href="#" class="absolute inset-0 z-10"></a>
                        <div class="aspect-video relative overflow-hidden shrink-0">
                            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Business" loading="lazy">
                        </div>
                        <div class="p-6 flex flex-col flex-grow relative z-20">
                            <div class="flex items-center gap-3 text-xs font-body text-primary mb-3 uppercase tracking-wider font-bold">
                                <span>Sep 28, 2023</span>
                            </div>
                            <h4 class="font-heading text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                Starting a Digital Printing Press in 2023
                            </h4>
                        </div>
                    </article>

                </div>
            </div>
        </section>

    </main>
` + footerHtml;

fs.writeFileSync(path.join(__dirname, 'blog.html'), blogHtml, 'utf8');
fs.writeFileSync(path.join(__dirname, 'article.html'), articleHtml, 'utf8');
console.log('Successfully wrote the new blog.html and article.html pages.');
