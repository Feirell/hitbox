const fs = require('fs');

const filePath = './package.json';
const encoding = 'utf8';

const fc = fs.readFileSync(filePath, encoding);
const currentPackageDefinition = JSON.parse(fc);
console.log('current version', currentPackageDefinition.version);
console.log('tag version', process.env.TRAVIS_TAG);
currentPackageDefinition.version = process.env.TRAVIS_TAG;
fs.writeFileSync(filePath, JSON.stringify(currentPackageDefinition, undefined, 4), encoding);