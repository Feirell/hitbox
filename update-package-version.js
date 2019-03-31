const fs = require('fs');
const fc = fs.readFileSync('./package.json', 'utf8');
console.log('current content\n' + fs);
const currentPackageDefinition = JSON.parse(fc);
console.log('current version', currentPackageDefinition.version);
console.log('tag version', process.env.TRAVIS_TAG);