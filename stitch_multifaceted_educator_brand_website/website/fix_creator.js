const fs = require('fs');
const path = require('path');

const creatorPath = path.join(__dirname, 'creator.html');
let html = fs.readFileSync(creatorPath, 'utf8');

const newHero = `
        <!-- MODULE: Premium Hero Scroll Animation -->
        <section id="creator-scroll-container" class="relative h-[500vh] bg-black">
            <div class="sticky top-24 h-[calc(100vh-6rem)] w-full overflow-hidden flex items-center justify-center text-left">
                
                <!-- Preloader -->
                <div id="hero-loading" class="absolute z-50 text-white font-heading text-xl font-bold tracking-widest flex items-center gap-4">
                    <div class="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <span id="hero-loading-text">Loading Sequence 0%</span>
                </div>
                
                <!-- Canvas Animation Background -->
                <canvas id="creator-sequence" class="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-100" aria-hidden="true"></canvas>
                
                <!-- Dark overlays -->
                <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-black/80 via-black/30 to-transparent z-10 pointer-events-none"></div>
                
                <div class="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-end md:justify-center items-start pb-24 md:pb-32 h-full">
                    
                    <!-- Left Side Content -->
                    <div class="w-full md:w-5/12 lg:w-4/12 flex flex-col items-start animate-on-scroll">
                        <span class="material-symbols-outlined text-4xl text-primary mb-4 drop-shadow-lg">videocam</span>
                        <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 drop-shadow-2xl tracking-tight">Digital<br/>Creator</h1>
                        <p class="font-body text-base md:text-lg text-white/90 mb-8 drop-shadow-md font-medium leading-relaxed">
                            Scaling education and inspiring millions through high-quality video production and engaging social content.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4">
                            <a href="https://youtube.com/@ramsaranyadav-r7v?si=uRewHhs0ZvLMsefl" target="_blank" class="bg-[#ff0000] text-white px-6 py-3 rounded-full font-heading text-sm font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-[0_0_20px_rgba(255,0,0,0.4)]">
                                <span class="material-symbols-outlined">play_circle</span> Subscribe
                            </a>
                            <a href="https://www.facebook.com/ramsaran.yadav.73" target="_blank" class="bg-[#1877f2] text-white px-6 py-3 rounded-full font-heading text-sm font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-[0_0_20px_rgba(24,119,242,0.4)]">
                                <span class="material-symbols-outlined">thumb_up</span> Follow
                            </a>
                        </div>
                    </div>
                    
                </div>
                
                <div class="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-70 z-20 flex flex-col items-center">
                    <span class="block text-xs font-heading text-primary uppercase tracking-widest mb-1">Scroll</span>
                    <span class="material-symbols-outlined text-3xl text-primary">keyboard_arrow_down</span>
                </div>
            </div>
        </section>
`;

// Replace the Hero block reliably
const heroRegex = /<!-- MODULE: Premium Hero Scroll Animation -->[\s\S]*?(?=<!-- MODULE: Social Statistics -->)/;
if (html.match(heroRegex)) {
    html = html.replace(heroRegex, newHero + '\\n        ');
    console.log('✅ Successfully replaced Creator Hero HTML block.');
} else {
    console.log('❌ Could not find Hero block to replace.');
}

// 2. Fix the pixelation issue.
// The canvas may be rendering blurry if devicePixelRatio is not accounted for.
// We should update the script to multiply width/height by window.devicePixelRatio and scale the context.
// Let's replace the script logic injected earlier to handle devicePixelRatio.

const oldScriptRegex = /<!-- Scroll Jacking Script for Creator Page -->[\s\S]*?<\/html>/;
const newScript = `
    <!-- Scroll Jacking Script for Creator Page -->
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const canvas = document.getElementById("creator-sequence");
            if(!canvas) return;
            const context = canvas.getContext("2d");
            const loading = document.getElementById("hero-loading");
            const loadingText = document.getElementById("hero-loading-text");
            
            const frameCount = 100;
            const currentFrame = index => \`Final_Crator/Content_\${index.toString().padStart(3, '0')}.jpg\`;
            
            const images = [];
            let loaded = 0;
            
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
                    // Force top alignment so head doesn't get cut
                    y = 0; 
                }
                ctx.drawImage(img, x, y, renderW, renderH);
            }

            function resizeCanvas() {
                // High-DPI support to prevent pixelation
                const dpr = window.devicePixelRatio || 1;
                const rect = canvas.parentElement.getBoundingClientRect();
                
                canvas.width = rect.width * dpr;
                canvas.height = rect.height * dpr;
                
                // CSS size
                canvas.style.width = \`\${rect.width}px\`;
                canvas.style.height = \`\${rect.height}px\`;
                
                context.scale(dpr, dpr);
                
                return { w: rect.width, h: rect.height };
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
                    if (i === 0) {
                        const dims = resizeCanvas();
                        drawImageCover(context, img, dims.w, dims.h);
                    }
                };
                images.push(img);
            }
            
            let isScrolling = false;
            window.addEventListener('scroll', () => {  
                if (!isScrolling) {
                    window.requestAnimationFrame(() => {
                        const scrollTop = window.scrollY;
                        const maxScroll = window.innerHeight * 4; 
                        
                        if (scrollTop <= maxScroll) {
                            let scrollFraction = scrollTop / maxScroll;
                            if (scrollFraction > 1) scrollFraction = 1;
                            if (scrollFraction < 0) scrollFraction = 0;
                            
                            const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
                            if (images[frameIndex] && images[frameIndex].complete) {
                                const dims = { w: canvas.clientWidth, h: canvas.clientHeight };
                                context.clearRect(0, 0, canvas.width, canvas.height);
                                drawImageCover(context, images[frameIndex], dims.w, dims.h);
                            }
                        }
                        isScrolling = false;
                    });
                    isScrolling = true;
                }
            });
            
            window.addEventListener('resize', () => {
                const dims = resizeCanvas();
                const scrollTop = window.scrollY;
                const maxScroll = window.innerHeight * 4;
                let scrollFraction = scrollTop / maxScroll;
                if (scrollFraction > 1) scrollFraction = 1;
                if (scrollFraction < 0) scrollFraction = 0;
                const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
                
                if(images[frameIndex] && images[frameIndex].complete) {
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    drawImageCover(context, images[frameIndex], dims.w, dims.h);
                }
            });
        });
    </script>
</body>
</html>`;

if (html.match(oldScriptRegex)) {
    html = html.replace(oldScriptRegex, newScript);
    console.log('✅ Successfully replaced script for High-DPI support.');
} else {
    console.log('❌ Could not find old script to replace.');
}

fs.writeFileSync(creatorPath, html, 'utf8');
