const fs = require('fs');
const src = 'C:\\Users\\A\\Desktop\\微信图片_20260319120931_921_3.jpg';
const dst = 'C:\\Users\\A\\zhangxin-website\\public\\zhangxin.jpg';

try {
  const content = fs.readFileSync(src);
  fs.writeFileSync(dst, content);
  console.log('Copied successfully');
  console.log('Size:', content.length);
} catch(e) {
  console.error('Error:', e.message);
}
