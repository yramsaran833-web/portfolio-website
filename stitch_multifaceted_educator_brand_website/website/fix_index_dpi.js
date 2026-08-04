const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const oldScriptRegex = /<script>[\s\S]*?document\.addEventListener\("DOMContentLoaded"[\s\S]*?const canvas = document\.getElementById\("scroll-sequence"\);[\s\S]*?<\/script>/;

const newScript = `
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
                    y = 0;
                }
                ctx.drawImage(img, x, y, renderW, renderH);
            }

            function resizeCanvas() {
                const dpr = window.devicePixelRatio || 1;
                const rect = canvas.parentElement.getBoundingClientRect();
                
                canvas.width = rect.width * dpr;
                canvas.height = rect.height * dpr;
                
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
    </script>`;

if (html.match(oldScriptRegex)) {
    html = html.replace(oldScriptRegex, newScript);
    console.log('✅ Successfully replaced script for High-DPI support on index.html.');
} else {
    console.log('❌ Could not find old script to replace on index.html.');
}

fs.writeFileSync(indexPath, html, 'utf8');
