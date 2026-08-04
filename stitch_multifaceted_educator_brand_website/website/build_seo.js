const fs = require('fs');
const path = require('path');

const websiteDir = path.join(__dirname);
const baseUrl = 'https://ramsaran.com';

const pages = [
    {
        file: 'index.html',
        title: 'Ram Saran Yadav | Educator, Entrepreneur & Digital Creator',
        desc: 'Official website of Ram Saran Yadav. Government Teacher at Shree Janta Secondary School and Founder of United Digital Printing Press.',
        type: 'website',
        schema: `
        {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ram Saran Yadav",
            "jobTitle": "Government Teacher & Entrepreneur",
            "worksFor": [
                { "@type": "Organization", "name": "Shree Janta Secondary School" },
                { "@type": "Organization", "name": "United Digital Printing Press" }
            ],
            "url": "https://ramsaran.com",
            "image": "https://ramsaran.com/RAm.jpg",
            "sameAs": [
                "https://www.facebook.com/ramsaran.yadav.73",
                "https://youtube.com/@ramsaranyadav-r7v",
                "https://www.tiktok.com/@ramsaran3389"
            ]
        }
        `
    },
    {
        file: 'about.html',
        title: 'About Ram Saran Yadav | Journey & Vision',
        desc: 'Read the professional biography and career journey of Ram Saran Yadav, spanning education, digital printing, and content creation.',
        type: 'profile',
        schema: `
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramsaran.com/" },
                { "@type": "ListItem", "position": 2, "name": "About", "item": "https://ramsaran.com/about.html" }
            ]
        }
        `
    },
    {
        file: 'printing.html',
        title: 'United Digital Printing Press | Odwaliya, Nepal',
        desc: 'Premium digital printing, flex banners, business cards, and graphic design services by United Digital Printing Press. Order online or via WhatsApp.',
        type: 'website',
        schema: `
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "United Digital Printing Press",
            "image": "https://ramsaran.com/RAm.jpg",
            "url": "https://ramsaran.com/printing.html",
            "telephone": "+9779807514000",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Odwaliya",
                "addressRegion": "Province 5",
                "addressCountry": "NP"
            },
            "founder": {
                "@type": "Person",
                "name": "Ram Saran Yadav"
            },
            "priceRange": "$$"
        }
        `
    },
    {
        file: 'creator.html',
        title: 'Content Creator Hub | Ram Saran Yadav',
        desc: 'Explore viral shorts, YouTube vlogs, and behind-the-scenes studio setups. Over 50K followers on Facebook and growing.',
        type: 'website',
        schema: `
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramsaran.com/" },
                { "@type": "ListItem", "position": 2, "name": "Creator Hub", "item": "https://ramsaran.com/creator.html" }
            ]
        }
        `
    },
    {
        file: 'gallery.html',
        title: 'Portfolio & Gallery | Ram Saran Yadav',
        desc: 'View high-quality photography and design portfolios from United Digital Printing Press and personal educational events.',
        type: 'website',
        schema: `
        {
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "url": "https://ramsaran.com/gallery.html",
            "description": "Portfolio of printing designs and educational events."
        }
        `
    },
    {
        file: 'blog.html',
        title: 'Blog & Articles | Insights by Ram Saran Yadav',
        desc: 'Read articles on educational psychology, digital printing industry trends, and social media growth strategies.',
        type: 'blog',
        schema: `
        {
            "@context": "https://schema.org",
            "@type": "Blog",
            "url": "https://ramsaran.com/blog.html",
            "author": {
                "@type": "Person",
                "name": "Ram Saran Yadav"
            }
        }
        `
    },
    {
        file: 'article.html',
        title: 'The Future of Digital Printing | Ram Saran Yadav',
        desc: 'An in-depth look at how digital printing is transforming rural businesses and local commerce in Nepal.',
        type: 'article',
        schema: `
        {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "The Future of Digital Printing",
            "author": {
                "@type": "Person",
                "name": "Ram Saran Yadav"
            },
            "publisher": {
                "@type": "Organization",
                "name": "United Digital Printing Press"
            }
        }
        `
    },
    {
        file: 'awards.html',
        title: 'Awards & Honors | Ram Saran Yadav',
        desc: 'A professional timeline of government teaching appointments, enterprise quality awards, and continuous professional development.',
        type: 'website',
        schema: `
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramsaran.com/" },
                { "@type": "ListItem", "position": 2, "name": "Awards", "item": "https://ramsaran.com/awards.html" }
            ]
        }
        `
    },
    {
        file: 'contact.html',
        title: 'Contact & Bookings | Ram Saran Yadav',
        desc: 'Schedule a meeting, request a printing quote, or send a direct inquiry to Ram Saran Yadav.',
        type: 'website',
        schema: `
        {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "url": "https://ramsaran.com/contact.html",
            "mainEntity": {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How fast do you reply to emails?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "For general inquiries and business collaborations, I aim to respond within 24 hours."
                        }
                    }
                ]
            }
        }
        `
    }
];

// Helper to remove old SEO tags (basic regex, careful with multiline)
function cleanOldSeo(html) {
    let clean = html.replace(/<title>[\s\S]*?<\/title>/gi, '');
    clean = clean.replace(/<meta name="description".*?>/gi, '');
    clean = clean.replace(/<meta name="keywords".*?>/gi, '');
    clean = clean.replace(/<meta property="og:.*?".*?>/gi, '');
    clean = clean.replace(/<link rel="canonical".*?>/gi, '');
    clean = clean.replace(/<meta name="twitter:.*?".*?>/gi, '');
    return clean;
}

pages.forEach(page => {
    const filePath = path.join(websiteDir, page.file);
    if (!fs.existsSync(filePath)) {
        console.warn("Skipping " + page.file + ", does not exist.");
        return;
    }

    let html = fs.readFileSync(filePath, 'utf8');
    
    // Clean old basic SEO tags
    html = cleanOldSeo(html);

    const seoBlock = [
        '<!-- ENTERPRISE SEO INJECTION -->',
        '<title>' + page.title + '</title>',
        '<meta name="description" content="' + page.desc + '">',
        '<link rel="canonical" href="' + baseUrl + '/' + page.file + '">',
        '',
        '<!-- Open Graph / Social -->',
        '<meta property="og:title" content="' + page.title + '">',
        '<meta property="og:description" content="' + page.desc + '">',
        '<meta property="og:type" content="' + page.type + '">',
        '<meta property="og:url" content="' + baseUrl + '/' + page.file + '">',
        '<meta property="og:image" content="' + baseUrl + '/RAm.jpg">',
        '<meta property="og:site_name" content="Ram Saran Yadav">',
        '',
        '<!-- Twitter Cards -->',
        '<meta name="twitter:card" content="summary_large_image">',
        '<meta name="twitter:title" content="' + page.title + '">',
        '<meta name="twitter:description" content="' + page.desc + '">',
        '<meta name="twitter:image" content="' + baseUrl + '/RAm.jpg">',
        '',
        '<!-- JSON-LD Schema -->',
        '<script type="application/ld+json">',
        page.schema,
        '</script>',
        '<!-- END SEO INJECTION -->'
    ].join('\\n');

    // Inject right after <meta name="author"... or charset
    // A safe place is right before the Tailwind CSS inclusion
    const injectionPoint = '<script src="https://cdn.tailwindcss.com"></script>';
    if (html.includes(injectionPoint)) {
        html = html.replace(injectionPoint, seoBlock + '\\n    ' + injectionPoint);
        fs.writeFileSync(filePath, html, 'utf8');
        console.log("SEO Injected: " + page.file);
    } else {
        console.error("Could not find injection point in " + page.file);
    }
});

// GENERATE sitemap.xml
let sitemapUrls = "";
pages.forEach(p => {
    const freq = p.file === 'index.html' ? 'daily' : 'weekly';
    const prio = p.file === 'index.html' ? '1.0' : '0.8';
    sitemapUrls += '  <url>\\n';
    sitemapUrls += '    <loc>' + baseUrl + '/' + p.file + '</loc>\\n';
    sitemapUrls += '    <changefreq>' + freq + '</changefreq>\\n';
    sitemapUrls += '    <priority>' + prio + '</priority>\\n';
    sitemapUrls += '  </url>\\n';
});

const sitemapContent = '<?xml version="1.0" encoding="UTF-8"?>\\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\\n' + sitemapUrls + '</urlset>';

fs.writeFileSync(path.join(websiteDir, 'sitemap.xml'), sitemapContent, 'utf8');
console.log('Generated sitemap.xml');

// GENERATE robots.txt
const robotsContent = 'User-agent: *\\nAllow: /\\n\\nSitemap: ' + baseUrl + '/sitemap.xml\\n';
fs.writeFileSync(path.join(websiteDir, 'robots.txt'), robotsContent, 'utf8');
console.log('Generated robots.txt');

// GENERATE manifest.json (PWA)
const manifestContent = {
  "name": "Ram Saran Yadav",
  "short_name": "RS Yadav",
  "description": "Official website of Ram Saran Yadav. Educator & Founder of United Digital Printing Press.",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#0a0a0a",
  "theme_color": "#FF7A00",
  "icons": [
    {
      "src": "/RAm.jpg",
      "sizes": "192x192",
      "type": "image/jpeg"
    },
    {
      "src": "/RAm.jpg",
      "sizes": "512x512",
      "type": "image/jpeg"
    }
  ]
};
fs.writeFileSync(path.join(websiteDir, 'manifest.json'), JSON.stringify(manifestContent, null, 2), 'utf8');
console.log('Generated manifest.json');
