const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'assets', 'img', 'printing');
const files = fs.readdirSync(imgDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

// Generate Gallery HTML
let galleryHtml = `
        <!-- MODULE: Recent Work / Portfolio -->
        <section class="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-white/5">
            <div class="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
                <h2 class="font-heading text-sm text-secondary uppercase tracking-widest font-bold mb-4">Portfolio</h2>
                <h3 class="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Our Recent Work</h3>
                <p class="font-body text-on-surface-variant">A showcase of our premium printing projects.</p>
            </div>
            
            <div class="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
`;

files.forEach((file, index) => {
    // Alternate animations or styles
    const delay = (index % 3) * 100;
    galleryHtml += `
                <div class="break-inside-avoid animate-on-scroll relative group rounded-2xl overflow-hidden cursor-pointer shadow-lg" style="transition-delay: ${delay}ms;">
                    <img src="assets/img/printing/${file}" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" alt="Printing Work ${index + 1}" loading="lazy">
                    <div class="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                        <span class="text-white font-heading font-bold drop-shadow-md">Printing Project</span>
                    </div>
                </div>
`;
});

galleryHtml += `            </div>
        </section>
`;

const htmlPath = path.join(__dirname, 'printing.html');
let content = fs.readFileSync(htmlPath, 'utf8');

// Insert the gallery before the Transparent Pricing section
const targetMarker = '<!-- MODULE: Pricing Cards -->';
if (content.includes(targetMarker)) {
    content = content.replace(targetMarker, galleryHtml + '\n' + targetMarker);
    fs.writeFileSync(htmlPath, content, 'utf8');
    console.log('Gallery successfully added to printing.html');
} else {
    console.log('Marker not found in printing.html');
}
