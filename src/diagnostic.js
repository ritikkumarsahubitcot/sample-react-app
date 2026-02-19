const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'pages');
console.log('Checking src/pages directory...');

if (fs.existsSync(pagesDir)) {
  const files = fs.readdirSync(pagesDir);
  console.log('Files found:', files);
  
  // Check for each required file
  const requiredFiles = ['Home.js', 'About.js', 'Projects.js', 'Contact.js'];
  requiredFiles.forEach(file => {
    const exists = fs.existsSync(path.join(pagesDir, file));
    console.log(`${file}: ${exists ? '✓ EXISTS' : '✗ MISSING'}`);
  });
} else {
  console.log('✗ pages directory does not exist!');
}
