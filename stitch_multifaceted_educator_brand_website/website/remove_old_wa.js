const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let removedCount = 0;

for (const file of files) {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Search for any <a> tag containing wa.me with fixed positioning
    const regex = /<a href="https:\/\/wa\.me\/9779807514000" target="_blank" rel="noopener noreferrer" class="fixed[\s\S]*?<\/a>/gi;
    
    if (content.match(regex)) {
        content = content.replace(regex, '');
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Removed old WhatsApp button from ${file}`);
        removedCount++;
    }
}

console.log(`Finished. Removed ${removedCount} duplicates.`);
