const fs = require('fs');
const path = require('path');

const creatorPath = path.join(__dirname, 'creator.html');
let creatorHtml = fs.readFileSync(creatorPath, 'utf8');

// Change y = 0 to y = (h - renderH) * 0.25;
// This balances the vertical cropping. Instead of 0% top crop and 100% bottom crop (which cut off the thumb),
// or 50% top crop (which cut off the head), it uses 25% top crop and 75% bottom crop.
// This should keep the head safe while bringing the thumb into view.

creatorHtml = creatorHtml.replace(/y = 0;/g, 'y = (h - renderH) * 0.25;');
fs.writeFileSync(creatorPath, creatorHtml, 'utf8');

const indexPath = path.join(__dirname, 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');
indexHtml = indexHtml.replace(/y = 0;/g, 'y = (h - renderH) * 0.25;');
fs.writeFileSync(indexPath, indexHtml, 'utf8');

console.log('✅ Adjusted Y alignment to 0.25 for both pages.');
