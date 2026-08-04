const fs = require('fs');
const path = require('path');

const fbUrl = 'https://www.facebook.com/ramsaran.yadav.73';
const ytUrl = 'https://youtube.com/@ramsaranyadav-r7v?si=uRewHhs0ZvLMsefl';
const ttUrl = 'https://www.tiktok.com/@ramsaran3389';
const waLink = 'https://wa.me/9779807514000';
const waDisplay = '980 751 4000';

function processDirectory(dir) {
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
            
            // Replace WhatsApp values
            content = content.replace(/wa\.me\/9779800000000/g, 'wa.me/9779807514000');
            content = content.replace(/980\s*000\s*0000/g, '980 751 4000');
            
            // Replace Facebook links
            // Look for href="#" where there is bg-[#1877f2] nearby, or just generic replace if it's social link
            content = content.replace(/href="#"([^>]+hover:(?:bg|text)-\[#1877f2\])/gi, `href="${fbUrl}"$1`);
            content = content.replace(/href="#"([^>]+bg-\[#1877f2\])/gi, `href="${fbUrl}"$1`);
            
            // Replace YouTube links
            content = content.replace(/href="#"([^>]+hover:(?:bg|text)-\[#ff0000\])/gi, `href="${ytUrl}"$1`);
            content = content.replace(/href="#"([^>]+bg-\[#ff0000\])/gi, `href="${ytUrl}"$1`);
            content = content.replace(/href="#"(.*aria-label="YouTube".*)/gi, `href="${ytUrl}"$1`);
            content = content.replace(/href="#"(.*aria-label="Facebook".*)/gi, `href="${fbUrl}"$1`);
            
            // Replace Instagram with TikTok (URL and color)
            content = content.replace(/href="#"([^>]+hover:(?:bg|text)-\[#e1306c\])/gi, `href="${ttUrl}"$1`);
            // Change color #e1306c to #000000 for TikTok
            content = content.replace(/#e1306c/g, '#000000');

            if (content !== originalContent) {
                fs.writeFileSync(filePath, content, 'utf-8');
                console.log(`Updated links in ${filePath}`);
            }
        }
    });
}

processDirectory('.');
console.log('Link updates complete.');
