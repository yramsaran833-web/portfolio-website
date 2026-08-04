const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// 1. Text: Even smaller and less bold
html = html.replace('font-extrabold text-4xl md:text-6xl lg:text-7xl', 'font-bold text-3xl md:text-5xl lg:text-[5.5rem]');

// 2. Reduce the width of the left content so it doesn't block his body
html = html.replace('<div class="w-full md:w-7/12 flex flex-col items-start animate-on-scroll">', '<div class="w-full md:w-5/12 lg:w-4/12 flex flex-col items-start animate-on-scroll">');

// 3. Remove/reduce the black overlays further
// Change gradient to be mostly transparent in the middle
html = html.replace('bg-gradient-to-t from-background via-background/10 to-transparent', 'bg-gradient-to-t from-background via-transparent to-transparent');
// Make the glowing orange blur much less opaque so it doesn't wash out the image
html = html.replace('bg-primary/10 rounded-full blur-[150px]', 'bg-primary/5 rounded-full blur-[150px]');

// 4. Align the image to the top so his head doesn't get cut off
// Find: y = (h - renderH) / 2;
// Replace with: y = 0; // Align to top
html = html.replace(/y = \(h - renderH\) \/ 2;/g, 'y = (h - renderH) * 0.1;'); 
// Use 0.1 so it's almost top aligned but gives a tiny bit of breathing room.

// 5. One more thing: The user said "Header ke Niche se start karo undar se nahi" (Start below the header, not under it).
// The top-24 pushes the *canvas* down, but the *container* might still be overflowing. 
// The container is `sticky top-0 h-screen`. 
// The canvas is `absolute top-24 ... h-[calc(100vh-6rem)]`.
// This perfectly pushes the canvas below the header. It should be correct now.

fs.writeFileSync(indexPath, html, 'utf8');
console.log('✅ Hero layout further optimized (text smaller, head aligned).');
