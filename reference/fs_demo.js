// FILE SYSTEM MODULE (fs module)

const fs = require('fs');
const path = require('path');

// Create folder (Async version) synchronous does one request at a time
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log('Folder created');
// });

// Create + write to FILE
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//     if(err) throw err;
//     console.log('File written');

//     // Append File
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love Node.js!', err => {
//         if(err) throw err;
//         console.log('File written');
//     });
// });

// Running another writeFile OVERWRITES whats already in the file ==> should use appendFile instead
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), ' I love Node.js!', err => {
//     if(err) throw err;
//     console.log('File written');
// });

// Read file ( 2nd parameter: character encoding, do or you wont get actual data )
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

// Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), err => {
    if(err) throw err;
    console.log('File renamed');
});