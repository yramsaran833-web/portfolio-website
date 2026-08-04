const fs = require('fs');
const path = require('path');

const dir = '.';
const newColors = `                    colors: {
                        primary: '#FF7A00', // Bright Cyan
                        secondary: '#FF7A00', // Bright Cyan
                        background: '#0a0a0a', // Deep Dark Blue/Teal
                        surface: '#171717', // Slightly lighter Dark Blue
                        'on-surface': '#ffffff',
                        'on-surface-variant': '#9ca3af'
                    }`;

const regex = /colors:\s*\{[^\}]+\}/;

let count = 0;
fs.readdirSync(dir).forEach(file => {
    if (file.endsWith('.html')) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf-8');
        let newContent = content.replace(regex, newColors);
        if (newContent !== content) {
            fs.writeFileSync(filePath, newContent, 'utf-8');
            count++;
        }
    }
});
console.log(`Updated ${count} HTML files in root.`);

const componentsDir = './components';
if (fs.existsSync(componentsDir)) {
    fs.readdirSync(componentsDir).forEach(file => {
        if (file.endsWith('.html')) {
            const filePath = path.join(componentsDir, file);
            let content = fs.readFileSync(filePath, 'utf-8');
            let newContent = content.replace(regex, newColors);
            if (newContent !== content) {
                fs.writeFileSync(filePath, newContent, 'utf-8');
                console.log(`Updated ${file} in components.`);
            }
        }
    });
}
