const fs = require('fs');
const path = require('path');

const targetDirs = [__dirname, path.join(__dirname, 'components'), path.join(__dirname, 'assets', 'css'), path.join(__dirname, 'assets', 'js')];
const extensions = ['.html', '.css', '.js'];

const replacements = [
    { from: /#54D5F2/gi, to: '#FF7A00' }, // Cyan -> Neon Orange
    { from: /#041520/gi, to: '#0a0a0a' }, // Dark Blue Background -> Deep Black
    { from: /#0b2336/gi, to: '#171717' }, // Dark Blue Surface -> Dark Grey
    { from: /#a0c4d8/gi, to: '#9ca3af' }  // Light Blue Text -> Gray Text
];

let updatedFiles = 0;

function processDirectory(dir) {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        // Skip subdirectories to avoid modifying libs or unintended folders, except the ones we explicitly passed
        if (stat.isFile() && extensions.some(ext => fullPath.endsWith(ext))) {
            if (fullPath.includes('theme_migration.js')) continue;
            
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;
            
            for (const rule of replacements) {
                if (content.match(rule.from)) {
                    content = content.replace(rule.from, rule.to);
                    modified = true;
                }
            }
            
            // Fix Tailwind config text descriptions so they don't look silly
            if (fullPath.endsWith('.html')) {
                content = content.replace(/Bright Cyan/gi, 'Neon Orange');
                content = content.replace(/Deep Dark Blue\/Teal/gi, 'Deep Black');
                content = content.replace(/Slightly lighter Dark Blue/gi, 'Dark Grey');
            }
            
            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated: ${fullPath}`);
                updatedFiles++;
            }
        }
    }
}

targetDirs.forEach(processDirectory);
console.log(`\nTheme migration complete! Total files updated: ${updatedFiles}`);
