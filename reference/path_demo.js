// path module already included with node ==> don't need './path', just 'path'
const path = require('path');

// Base filename
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object ==> path.parse(__filename)
console.log(path.parse(__filename).base);

// Concatenate paths (
// ../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));