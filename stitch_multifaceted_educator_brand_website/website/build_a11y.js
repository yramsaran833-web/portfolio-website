const fs = require('fs');
const path = require('path');

const websiteDir = path.join(__dirname);
const htmlFiles = [
    'index.html', 'about.html', 'gallery.html', 'blog.html', 
    'article.html', 'printing.html', 'creator.html', 'awards.html', 'contact.html'
];
const jsFile = path.join(websiteDir, 'assets', 'js', 'app.js');

const focusClasses = " focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background";

// 1. Process HTML Files
htmlFiles.forEach(file => {
    const filePath = path.join(websiteDir, file);
    if (!fs.existsSync(filePath)) return;

    let html = fs.readFileSync(filePath, 'utf8');

    // Add Focus states to <button> and <a> if they have class="..."
    // We'll use a basic regex to find class="..." inside <button and <a and append the focus classes.
    html = html.replace(/(<(?:a|button)\b[^>]*?class=")([^"]*)(")/gi, (match, p1, p2, p3) => {
        if (!p2.includes('focus:ring-2')) {
            return p1 + p2 + focusClasses + p3;
        }
        return match;
    });

    // Add ARIA labels to social links
    html = html.replace(/(<a[^>]*href="https:\/\/www\.facebook\.com[^>]*)(>)/gi, '$1 aria-label="Visit Facebook Profile"$2');
    html = html.replace(/(<a[^>]*href="https:\/\/youtube\.com[^>]*)(>)/gi, '$1 aria-label="Visit YouTube Channel"$2');
    html = html.replace(/(<a[^>]*href="https:\/\/www\.tiktok\.com[^>]*)(>)/gi, '$1 aria-label="Visit TikTok Profile"$2');
    html = html.replace(/(<a[^>]*href="https:\/\/wa\.me[^>]*)(>)/gi, '$1 aria-label="Send WhatsApp Message"$2');

    // Fix Modal accessibility (gallery.html and awards.html)
    html = html.replace(/(id="imageModal"[^>]*)(>)/gi, '$1 role="dialog" aria-modal="true" aria-label="Image Preview"$2');
    html = html.replace(/(id="certModal"[^>]*)(>)/gi, '$1 role="dialog" aria-modal="true" aria-label="Certificate Preview"$2');

    // Add aria-label to modal close buttons (looking for the specific SVG or material symbol)
    // In our modals, close buttons have onclick="closeModal()"
    html = html.replace(/(<button[^>]*onclick="closeModal\(\)"[^>]*)(>)/gi, (match, p1, p2) => {
        if(!p1.includes('aria-label')) return p1 + ' aria-label="Close Modal"' + p2;
        return match;
    });

    // Add aria-label to mobile menu toggle
    html = html.replace(/(<button[^>]*id="mobile-menu-btn"[^>]*)(>)/gi, (match, p1, p2) => {
        if(!p1.includes('aria-label')) return p1 + ' aria-label="Toggle Mobile Menu" aria-expanded="false" aria-controls="mobile-menu"' + p2;
        return match;
    });

    // Forms: Fix Contact Page Inputs
    // Change <input type="text"> to have id and link label
    if (file === 'contact.html') {
        html = html.replace(/<label class="([^"]*)">Your Name<\/label>\s*<div class="relative">\s*<span[^>]*>.*?<\/span>\s*<input type="text" required class="([^"]*)">/gi, 
            '<label for="contact-name" class="$1">Your Name</label>\n                            <div class="relative">\n                                <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/30">person</span>\n                                <input id="contact-name" name="name" type="text" required class="$2" aria-required="true">');
            
        html = html.replace(/<label class="([^"]*)">Email Address<\/label>\s*<div class="relative">\s*<span[^>]*>.*?<\/span>\s*<input type="email" required class="([^"]*)">/gi, 
            '<label for="contact-email" class="$1">Email Address</label>\n                            <div class="relative">\n                                <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/30">mail</span>\n                                <input id="contact-email" name="email" type="email" required class="$2" aria-required="true">');
            
        html = html.replace(/<label class="([^"]*)">Subject<\/label>\s*<div class="relative">\s*<span[^>]*>.*?<\/span>\s*<input type="text" required class="([^"]*)">/gi, 
            '<label for="contact-subject" class="$1">Subject</label>\n                            <div class="relative">\n                                <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/30">subject</span>\n                                <input id="contact-subject" name="subject" type="text" required class="$2" aria-required="true">');
            
        html = html.replace(/<label class="([^"]*)">Your Message<\/label>\s*<textarea required rows="5" class="([^"]*)"><\/textarea>/gi, 
            '<label for="contact-message" class="$1">Your Message</label>\n                            <textarea id="contact-message" name="message" required rows="5" class="$2" aria-required="true"></textarea>');
    }

    // Forms: Fix Printing Page Inputs
    if (file === 'printing.html') {
        html = html.replace(/<label class="([^"]*)">Full Name<\/label>\s*<input type="text" required class="([^"]*)">/gi, 
            '<label for="order-name" class="$1">Full Name</label>\n                            <input id="order-name" name="name" type="text" required class="$2" aria-required="true">');
            
        html = html.replace(/<label class="([^"]*)">Email Address<\/label>\s*<input type="email" required class="([^"]*)">/gi, 
            '<label for="order-email" class="$1">Email Address</label>\n                            <input id="order-email" name="email" type="email" required class="$2" aria-required="true">');
            
        html = html.replace(/<label class="([^"]*)">Service Type<\/label>\s*<select class="([^"]*)">\s*<option>Flex Banner Printing<\/option>\s*<option>Business Cards<\/option>\s*<option>Custom Graphic Design<\/option>\s*<option>Bulk Book Printing<\/option>\s*<\/select>/gi, 
            '<label for="order-service" class="$1">Service Type</label>\n                            <select id="order-service" name="service" class="$2" aria-required="true">\n                                <option>Flex Banner Printing</option>\n                                <option>Business Cards</option>\n                                <option>Custom Graphic Design</option>\n                                <option>Bulk Book Printing</option>\n                            </select>');
            
        html = html.replace(/<label class="([^"]*)">Project Details<\/label>\s*<textarea rows="4" required class="([^"]*)"><\/textarea>/gi, 
            '<label for="order-details" class="$1">Project Details</label>\n                            <textarea id="order-details" name="details" rows="4" required class="$2" aria-required="true"></textarea>');
    }

    // Ensure FAQ buttons have aria-expanded (initial state)
    html = html.replace(/(<button[^>]*class="[^"]*faq-btn[^"]*"[^>]*)(>)/gi, (match, p1, p2) => {
        if(!p1.includes('aria-expanded')) return p1 + ' aria-expanded="false"' + p2;
        return match;
    });

    // Make sure all imgs have an alt tag. If missing, inject empty alt.
    html = html.replace(/<img((?!alt=)[^>])+>/gi, (match) => {
        return match.replace('>', ' alt="">');
    });

    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`✅ Processed A11y on: ${file}`);
});

// 2. Process JS File (app.js) to toggle aria attributes dynamically
if (fs.existsSync(jsFile)) {
    let js = fs.readFileSync(jsFile, 'utf8');
    
    // Add logic to toggle aria-expanded in mobile menu
    if (!js.includes("mobileMenuBtn.setAttribute('aria-expanded'")) {
        js = js.replace(/mobileMenu.classList.toggle\('hidden'\);/, `mobileMenu.classList.toggle('hidden');
            const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
            mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);`);
    }

    fs.writeFileSync(jsFile, js, 'utf8');
    console.log(`✅ Processed A11y JS on: app.js`);
}

// 3. To handle inline FAQ logic in contact.html and printing.html
['contact.html', 'printing.html'].forEach(file => {
    const filePath = path.join(websiteDir, file);
    if (!fs.existsSync(filePath)) return;
    let html = fs.readFileSync(filePath, 'utf8');
    
    // Update inline FAQ scripts to toggle aria-expanded
    if (html.includes("content.classList.remove('hidden')") && !html.includes("btn.setAttribute('aria-expanded', 'true')")) {
        html = html.replace(/content\.classList\.remove\('hidden'\);/g, "content.classList.remove('hidden');\n                        btn.setAttribute('aria-expanded', 'true');");
        html = html.replace(/content\.classList\.add\('hidden'\);/g, "content.classList.add('hidden');\n                        btn.setAttribute('aria-expanded', 'false');");
        
        // Also close others logic
        html = html.replace(/if\(c !== content\) c\.classList\.add\('hidden'\);/g, "if(c !== content) {\n                            c.classList.add('hidden');\n                            c.previousElementSibling.setAttribute('aria-expanded', 'false');\n                        }");
        
        fs.writeFileSync(filePath, html, 'utf8');
        console.log(`✅ Processed inline FAQ A11y on: ${file}`);
    }
});

console.log('🎉 Enterprise Accessibility Upgrade Complete!');
