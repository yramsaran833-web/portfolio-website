const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// 1. Revert canvas back to full screen (inset-0)
html = html.replace('absolute top-24 left-0 w-full h-[calc(100vh-6rem)] object-cover z-0 opacity-100', 'absolute inset-0 w-full h-full object-cover z-0 opacity-100');
html = html.replace('absolute top-24 left-0 w-full h-[calc(100vh-6rem)] bg-gradient-to-t', 'absolute inset-0 w-full h-full bg-gradient-to-t');
html = html.replace('absolute top-24 left-0 w-full h-[calc(100vh-6rem)] bg-black/0', 'absolute inset-0 w-full h-full bg-black/0');

// 2. Revert canvas height logic
html = html.replace(/canvas\.height = window\.innerHeight - 96;/g, 'canvas.height = window.innerHeight;');

// 3. Shift the image down in drawImageCover so his head isn't at the very top edge
// Replace y = (h - renderH) * 0.1; with y = 50; (Shift it down 50 pixels)
html = html.replace(/y = \(h - renderH\) \* 0\.1;/g, 'y = Math.min(0, (h - renderH) * 0.1) + 60;'); // Shift down by 60px

fs.writeFileSync(indexPath, html, 'utf8');
console.log('✅ index.html updated.');

const appPath = path.join(__dirname, 'assets', 'js', 'app.js');
let appJs = fs.readFileSync(appPath, 'utf8');

// 4. Update Navbar Scroll Effect so it doesn't turn black during the 500vh hero
// It currently checks `if (window.scrollY > 50)`. 
// We should check if we are past the hero section if it exists.
const oldScrollLogic = `if (window.scrollY > 50) {
                    nav.classList.add('py-2');
                    nav.classList.remove('py-4');
                    // Stronger glass blur on scroll down
                    nav.style.backgroundColor = 'rgba(10, 10, 10, 0.85)';
                    nav.style.backdropFilter = 'blur(20px)';
                    nav.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
                } else {
                    nav.classList.add('py-4');
                    nav.classList.remove('py-2');
                    nav.style.backgroundColor = 'transparent';
                    nav.style.backdropFilter = 'none';
                    nav.style.borderBottom = 'none';
                }`;

const newScrollLogic = `
                // If there's a scroll-sequence canvas (hero), delay the black navbar until past it
                const scrollCanvas = document.getElementById('scroll-sequence');
                const threshold = scrollCanvas ? (window.innerHeight * 4) : 50;
                
                if (window.scrollY > threshold) {
                    nav.classList.add('py-2');
                    nav.classList.remove('py-4');
                    nav.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
                    nav.style.backdropFilter = 'blur(20px)';
                    nav.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
                } else if (window.scrollY > 50) {
                    // While scrolling hero, make it slightly glass but mostly transparent so head is visible
                    nav.classList.add('py-2');
                    nav.classList.remove('py-4');
                    nav.style.backgroundColor = 'rgba(10, 10, 10, 0.2)'; // Very light!
                    nav.style.backdropFilter = 'blur(8px)';
                    nav.style.borderBottom = '1px solid rgba(255,255,255,0.02)';
                } else {
                    nav.classList.add('py-4');
                    nav.classList.remove('py-2');
                    nav.style.backgroundColor = 'transparent';
                    nav.style.backdropFilter = 'none';
                    nav.style.borderBottom = 'none';
                }`;

if (appJs.includes('if (window.scrollY > 50) {')) {
    appJs = appJs.replace(oldScrollLogic, newScrollLogic);
    fs.writeFileSync(appPath, appJs, 'utf8');
    console.log('✅ app.js updated.');
}
