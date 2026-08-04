const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// 1. Text: Smaller and Less Bold
// From: font-black text-6xl md:text-[6.5rem] lg:text-[7.5rem]
// To: font-extrabold text-5xl md:text-6xl lg:text-7xl
html = html.replace('font-black text-6xl md:text-[6.5rem] lg:text-[7.5rem]', 'font-extrabold text-4xl md:text-6xl lg:text-7xl');

// 2. Black Overlay & Canvas Opacity
// Reduce canvas opacity from 70% to 90% (meaning it's less transparent, more visible)
html = html.replace('opacity-70', 'opacity-90');
// Reduce dark overlay from 30% to 0% (remove it or make it very light)
html = html.replace('bg-black/30', 'bg-black/0');
// Reduce gradient overlay
html = html.replace('via-background/40', 'via-background/10');

// 3. Prevent Canvas from going under the Header
// The header is roughly 96px (6rem or 24 in Tailwind).
// Change inset-0 to top-24 and calc height.
html = html.replace('absolute inset-0 w-full h-full object-cover z-0 opacity-90', 'absolute top-24 left-0 w-full h-[calc(100vh-6rem)] object-cover z-0 opacity-100');
html = html.replace('<div class="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent z-10 pointer-events-none"></div>', '<div class="absolute top-24 left-0 w-full h-[calc(100vh-6rem)] bg-gradient-to-t from-background via-background/10 to-transparent z-10 pointer-events-none"></div>');
html = html.replace('<div class="absolute inset-0 bg-black/0 z-10 pointer-events-none"></div>', '<div class="absolute top-24 left-0 w-full h-[calc(100vh-6rem)] bg-black/0 z-10 pointer-events-none"></div>');

// Also shift the glowing blur down so it matches
html = html.replace('top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', 'top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2');

// 4. Update JS so canvas respects the new height (innerHeight - 96)
html = html.replace(/canvas\.height = window\.innerHeight;/g, 'canvas.height = window.innerHeight - 96;');

fs.writeFileSync(indexPath, html, 'utf8');
console.log('✅ Hero layout updated based on feedback.');
