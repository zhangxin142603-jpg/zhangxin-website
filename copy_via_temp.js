const fs = require('fs');

// Step 1: Copy to a temp location first
const src = 'C:\\Users\\A\\Desktop\\微信图片_20260319120931_921_3.jpg';
const temp = 'C:\\Users\\A\\Desktop\\temp_photo.jpg';
const dst = 'C:\\Users\\A\\zhangxin-website\\public\\zhangxin.jpg';

// Read
const data = fs.readFileSync(src);
console.log('Read', data.length, 'bytes');

// Write to temp
fs.writeFileSync(temp, data);
console.log('Written to temp');

// Copy to dest
fs.copyFileSync(temp, dst);
console.log('Copied to dest');

// Cleanup
fs.unlinkSync(temp);
console.log('Done!');
