const fs = require('fs');
const path = require('path');

const testPath = path.join(__dirname, 'test.txt');
fs.writeFileSync(testPath, 'test');
console.log('Test file created');
