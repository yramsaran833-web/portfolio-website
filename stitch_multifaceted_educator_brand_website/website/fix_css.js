const fs = require('fs');
const path = require('path');
const cssPath = path.join(__dirname, 'assets', 'css', 'style.css');

let content = fs.readFileSync(cssPath, 'utf8');

// The regex might not catch the null bytes from UTF-16, so let's just trim the file manually if needed, or read it properly.
// Since powershell appended it, let's just find the '.no-scrollbar' block and keep everything up to there.
const cleanIndex = content.lastIndexOf('.no-scrollbar {');
if (cleanIndex !== -1) {
    // Keep up to the end of the .no-scrollbar block
    const endOfBlock = content.indexOf('}', cleanIndex) + 1;
    content = content.substring(0, endOfBlock);
}

// Now append the correct CSS
content += `

.logo-typography { 
    font-family: 'Montserrat', sans-serif; 
    font-weight: 900; 
    font-size: 1.8rem; 
    letter-spacing: -0.05em; 
    color: #ffffff; 
    text-shadow: 1px 1px 0px #0a0a0a, 2px 2px 0px #0a0a0a, 3px 3px 0px #FF7A00, 4px 4px 15px rgba(0,0,0,0.8); 
    line-height: 1; 
}
`;

fs.writeFileSync(cssPath, content, 'utf8');
console.log('CSS fixed.');
