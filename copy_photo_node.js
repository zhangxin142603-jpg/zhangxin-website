const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\A\\Desktop';
const dstDir = 'C:\\Users\\A\\zhangxin-website\\public';

// Find the file
const files = fs.readdirSync(srcDir);
const targetFile = files.find(f => f.includes('921_3') && f.endsWith('.jpg'));

if (!targetFile) {
    console.log('File not found');
    process.exit(1);
}

const srcPath = path.join(srcDir, targetFile);
const dstPath = path.join(dstDir, 'zhangxin.jpg');

console.log('Found:', targetFile);

const stats = fs.statSync(srcPath);
console.log('Size:', stats.size);

// Copy
fs.copyFileSync(srcPath, dstPath);
console.log('Copied to:', dstPath);

// Verify
const dstStats = fs.statSync(dstPath);
console.log('Destination size:', dstStats.size);
