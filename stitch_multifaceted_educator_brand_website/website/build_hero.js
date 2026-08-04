const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const newHero = `
        <!-- MODULE: Premium Hero (Scroll Jacking) -->
        <section class="relative h-[500vh] bg-black">
            <div class="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                
                <!-- Preloader -->
                <div id="hero-loading" class="absolute z-50 text-white font-heading text-xl font-bold tracking-widest flex items-center gap-4">
                    <div class="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <span id="hero-loading-text">Loading Sequence 0%</span>
                </div>
                
                <!-- Canvas for scroll sequence -->
                <canvas id="scroll-sequence" class="absolute inset-0 w-full h-full object-cover z-0 opacity-70"></canvas>
                
                <!-- Overlays -->
                <div class="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10 pointer-events-none"></div>
                <div class="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none z-10"></div>
                
                <!-- Content Overlay: Left and Right -->
                <div class="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-end md:justify-between md:flex-row items-start md:items-end pb-24 md:pb-32 h-full gap-8">
                    
                    <!-- Left Side Content -->
                    <div class="w-full md:w-7/12 flex flex-col items-start animate-on-scroll">
                        <div class="inline-flex items-center gap-3 px-5 py-2 glass-panel rounded-full mb-6 border border-white/10 shadow-[0_0_15px_rgba(255,122,0,0.3)]">
                            <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span class="text-xs font-heading text-primary uppercase tracking-widest font-bold">Impacting Lives Daily</span>
                        </div>
                        
                        <h1 class="font-heading font-black text-6xl md:text-[6.5rem] lg:text-[7.5rem] leading-[0.9] tracking-tighter drop-shadow-2xl text-left uppercase">
                            <span class="text-white">Inspiring</span><br/>
                            <span class="text-white">Minds.</span><br/>
                            <span class="relative inline-block mt-2">
                                <span class="absolute inset-0 bg-primary blur-2xl opacity-30"></span>
                                <span class="relative bg-gradient-to-r from-[#FF7A00] to-[#ff3b00] text-transparent bg-clip-text">Creating Future.</span>
                            </span>
                        </h1>
                    </div>
                    
                    <!-- Right Side Content -->
                    <div class="w-full md:w-5/12 flex flex-col items-start md:items-end text-left md:text-right animate-on-scroll" style="transition-delay: 200ms;">
                        <div class="glass-panel p-6 md:p-8 rounded-3xl border-l-4 border-l-primary mb-8 w-full backdrop-blur-3xl shadow-2xl">
                            <p class="font-body text-lg md:text-xl text-on-surface-variant leading-loose font-medium">
                                Government Teacher <br class="hidden md:block"/> 
                                Educator <br class="hidden md:block"/> 
                                Entrepreneur <br class="hidden md:block"/> 
                                Content Creator
                            </p>
                        </div>
                        
                        <div class="flex flex-col sm:flex-row gap-4 w-full md:w-auto justify-end">
                            <a href="about.html" class="w-full sm:w-auto text-center relative px-8 py-4 bg-primary text-white rounded-full font-heading font-bold uppercase tracking-wider overflow-hidden shadow-[0_0_30px_rgba(255,122,0,0.4)] hover:shadow-[0_0_50px_rgba(255,122,0,0.6)] transition-all shimmer-btn">
                                <span class="relative z-10">Discover My Journey</span>
                            </a>
                            <a href="creator.html" class="w-full sm:w-auto text-center px-8 py-4 glass-panel rounded-full font-heading font-bold uppercase tracking-wider text-white hover:bg-white/10 border border-white/20 transition-all flex items-center justify-center gap-2">
                                <span class="material-symbols-outlined">play_circle</span> Watch Content
                            </a>
                        </div>
                    </div>
                    
                </div>
                
                <div class="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-70 z-20 flex flex-col items-center">
                    <span class="block text-xs font-heading text-primary uppercase tracking-widest mb-1">Scroll to Explore</span>
                    <span class="material-symbols-outlined text-3xl text-primary">keyboard_arrow_down</span>
                </div>
            </div>
        </section>
`;

const newScript = `
    <!-- Scroll Jacking Script -->
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const canvas = document.getElementById("scroll-sequence");
            if(!canvas) return;
            const context = canvas.getContext("2d");
            const loading = document.getElementById("hero-loading");
            const loadingText = document.getElementById("hero-loading-text");
            
            const frameCount = 100;
            // Images are 0 to 99
            const currentFrame = index => \`Final_Teacher/Teaching_\${index.toString().padStart(3, '0')}.jpg\`;
            
            const images = [];
            let loaded = 0;
            
            // Draw image covering the whole canvas (like object-fit: cover)
            function drawImageCover(ctx, img, w, h) {
                const imgRatio = img.width / img.height;
                const canvasRatio = w / h;
                let renderW, renderH, x = 0, y = 0;
                if(imgRatio > canvasRatio) {
                    renderH = h;
                    renderW = h * imgRatio;
                    x = (w - renderW) / 2;
                } else {
                    renderW = w;
                    renderH = w / imgRatio;
                    y = (h - renderH) / 2;
                }
                ctx.drawImage(img, x, y, renderW, renderH);
            }

            for (let i = 0; i < frameCount; i++) {
                const img = new Image();
                img.src = currentFrame(i);
                img.onload = () => {
                    loaded++;
                    loadingText.innerText = \`Loading Sequence \${Math.floor((loaded / frameCount) * 100)}%\`;
                    if (loaded === frameCount) {
                        loading.style.opacity = '0';
                        setTimeout(() => loading.style.display = 'none', 500);
                    }
                    // Draw first frame immediately when it loads
                    if (i === 0) {
                        canvas.width = window.innerWidth;
                        canvas.height = window.innerHeight;
                        drawImageCover(context, img, canvas.width, canvas.height);
                    }
                };
                images.push(img);
            }
            
            let isScrolling = false;
            window.addEventListener('scroll', () => {  
                if (!isScrolling) {
                    window.requestAnimationFrame(() => {
                        // The hero section is 500vh (which is 5 * window.innerHeight).
                        const scrollTop = window.scrollY;
                        const maxScroll = window.innerHeight * 4; // Because 1vh is taken by the sticky container itself
                        
                        if (scrollTop <= maxScroll) {
                            let scrollFraction = scrollTop / maxScroll;
                            if (scrollFraction > 1) scrollFraction = 1;
                            if (scrollFraction < 0) scrollFraction = 0;
                            
                            const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
                            if (images[frameIndex] && images[frameIndex].complete) {
                                context.clearRect(0, 0, canvas.width, canvas.height);
                                drawImageCover(context, images[frameIndex], canvas.width, canvas.height);
                            }
                        }
                        isScrolling = false;
                    });
                    isScrolling = true;
                }
            });
            
            window.addEventListener('resize', () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                // Redraw current frame
                const scrollTop = window.scrollY;
                const maxScroll = window.innerHeight * 4;
                let scrollFraction = scrollTop / maxScroll;
                if (scrollFraction > 1) scrollFraction = 1;
                if (scrollFraction < 0) scrollFraction = 0;
                const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
                
                if(images[frameIndex] && images[frameIndex].complete) {
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    drawImageCover(context, images[frameIndex], canvas.width, canvas.height);
                }
            });
        });
    </script>
</body>
`;

// Replace the Hero block
const heroRegex = /<!-- MODULE: Premium Hero -->(.*?)<!-- MODULE: The 3 Pillars \(Bento Grid\) -->/s;
html = html.replace(heroRegex, newHero + '\n        <!-- MODULE: The 3 Pillars (Bento Grid) -->');

// Replace the end of body to inject the script
html = html.replace(/<\/body>/, newScript);

fs.writeFileSync(indexPath, html, 'utf8');
console.log('✅ Hero replaced successfully with sticky scroll-jacking layout');
