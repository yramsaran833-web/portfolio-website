const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let removedCount = 0;

for (const file of files) {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Look for a floating whatsapp button directly in the root HTML files
    // It usually has href="https://wa.me/..." and fixed positioning
    const regex = /<!-- Global WhatsApp Floating Button -->[\s\S]*?<\/a>/g;
    
    if (content.match(regex)) {
        content = content.replace(regex, '');
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Removed hardcoded WhatsApp button from ${file}`);
        removedCount++;
    }
}

console.log(`Finished. Removed ${removedCount} duplicates.`);
