const fs = require('fs');
const path = require('path');

const sourceDir = 'D:\\Ram Saran Yadav\\Ram saran Images';
const destDir = path.join(__dirname, 'assets', 'img', 'gallery');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.jpg')).slice(0, 8);

files.forEach((file, index) => {
    fs.copyFileSync(path.join(sourceDir, file), path.join(destDir, `gallery_${index + 1}.jpg`));
});

const indexPath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');

const galleryHTML = `
        <!-- MODULE: Personal Gallery -->
        <section class="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-white/5">
            <div class="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
                <h2 class="font-heading text-sm text-secondary uppercase tracking-widest font-bold mb-4">Ram Saran's World</h2>
                <h3 class="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Moments & Memories</h3>
                <p class="font-body text-on-surface-variant">A glimpse into my professional journey, teaching moments, and milestones.</p>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 animate-on-scroll">
                <div class="aspect-square rounded-2xl overflow-hidden group">
                    <img src="assets/img/gallery/gallery_1.jpg" alt="Gallery Image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                </div>
                <div class="aspect-square rounded-2xl overflow-hidden group">
                    <img src="assets/img/gallery/gallery_2.jpg" alt="Gallery Image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                </div>
                <div class="aspect-square rounded-2xl overflow-hidden group">
                    <img src="assets/img/gallery/gallery_3.jpg" alt="Gallery Image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                </div>
                <div class="aspect-square rounded-2xl overflow-hidden group">
                    <img src="assets/img/gallery/gallery_4.jpg" alt="Gallery Image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                </div>
                <div class="aspect-square rounded-2xl overflow-hidden group">
                    <img src="assets/img/gallery/gallery_5.jpg" alt="Gallery Image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                </div>
                <div class="aspect-square rounded-2xl overflow-hidden group">
                    <img src="assets/img/gallery/gallery_6.jpg" alt="Gallery Image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                </div>
                <div class="aspect-square rounded-2xl overflow-hidden group">
                    <img src="assets/img/gallery/gallery_7.jpg" alt="Gallery Image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                </div>
                <div class="aspect-square rounded-2xl overflow-hidden group">
                    <img src="assets/img/gallery/gallery_8.jpg" alt="Gallery Image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                </div>
            </div>
            <div class="text-center mt-12">
                <a href="gallery.html" class="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-primary px-8 py-3 rounded-full text-white hover:text-primary transition-all">
                    View Full Gallery <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
            </div>
        </section>

        <!-- MODULE: Statistics & Impact -->`;

// Insert the gallery before the "Statistics & Impact" module
content = content.replace('<!-- MODULE: Statistics & Impact -->', galleryHTML);

fs.writeFileSync(indexPath, content, 'utf8');
console.log('index.html updated successfully with gallery.');
