const fs = require('fs');
const path = require('path');

const replacements = {
    '#0b1324': '#0a0a0a',
    '#171f31': '#171717',
    '#1e40af': '#FF7A00',
    '#ffb59c': '#FF7A00',
    '#dae2fa': '#ffffff',
    '#c4c5d5': '#9ca3af'
};

function processDirectory(dir) {
    let count = 0;
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            if (file === 'components' || file === 'pages' || file === 'seo') {
                processDirectory(filePath);
            }
        } else if (file.endsWith('.html')) {
            let content = fs.readFileSync(filePath, 'utf-8');
            let originalContent = content;
            
            for (const [oldHex, newHex] of Object.entries(replacements)) {
                // global case-insensitive replace for the hex code
                const regex = new RegExp(oldHex, 'gi');
                content = content.replace(regex, newHex);
            }
            
            if (content !== originalContent) {
                fs.writeFileSync(filePath, content, 'utf-8');
                console.log(`Updated hex codes in ${filePath}`);
                count++;
            }
        }
    });
}

processDirectory('.');
console.log('Hex replacement complete.');
