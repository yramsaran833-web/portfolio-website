const fs = require('fs');
const path = require('path');

const websiteDir = __dirname;
const htmlFiles = [
    'index.html', 'about.html', 'gallery.html', 'blog.html', 
    'article.html', 'printing.html', 'creator.html', 'awards.html', 'contact.html'
];

htmlFiles.forEach(file => {
    const filePath = path.join(websiteDir, file);
    if (!fs.existsSync(filePath)) return;
    
    let html = fs.readFileSync(filePath, 'utf8');
    
    // The SEO script injected literal '\n' which shows up as text. Let's fix that.
    html = html.replace(/\\n/g, '\n');
    
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`✅ Fixed newlines in: ${file}`);
});
