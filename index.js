const http = require('http');
const path = require('path');
const fs = require('fs');

// CREATING A SEREVER
// #1 CREATE SERVER THAT ACCEPTS A REQUEST AND RESPONSE
const server = http.createServer((req, res) => {
    // CHECKING URL. IF SLASH...
    // if(req.url == '/') {
    //     // THEN READ FILE index.html INSIDE public FOLDER
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         // CHECK FOR AN ERROR
    //         if (err) throw err;
    //         // Add content type: writeHead == write to the headers; '200' == everything is ok; set content type
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         // SERVE HTML PAGE
    //         res.end(content);
    //     })
    // }

    // // MUST USE NODEMON EXTENSION TO AUTO REFRESH PAGE CHANGES
    // // ==> Modify 'package.json' 1. Change "test" to "start": "node.js"; 2. Add "dev": "nodemon index" under that
    // // prints url user types in searchbar
    // // console.log(req.url);

    // // if(req.url == '/about') {
    // //     // THEN READ FILE about.html INSIDE public FOLDER
    // //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    // //         // CHECK FOR AN ERROR
    // //         if (err) throw err;
    // //         // Add content type: writeHead == write to the headers; '200' == everything is ok; set content type
    // //         res.writeHead(200, { 'Content-Type': 'text/html' });
    // //         // SERVE HTML PAGE
    // //         res.end(content);
    // //     })
    // // }

    // if(req.url == '/api/users') {
    //     const users = [
    //         { name: 'Bobby Wobb', age: 28 },
    //         { name: 'Ked Line', age: 22 }
    //     ];
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify(users));
    // }


    // #2 LOOK IN PUBLIC FOLDER TO EVALUATE req.url ==> if/else conditions
    // BUILD FILE PATH
    let filePath = path.join(__dirname, 'public', req.url == '/' ? 'index.html' : req.url );

    // CHECKING that server knows what templatese to use
    // console.log(filePath);
    // res.end();

    // #3 GET EXTENSION
    // Extension of file
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html';

    // #4 EVALUATE EXTENSION AND GET CONTENTTYPE BASED ON IT
    // check ext and set content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // #5 READ FILE: IF ERROR == CHECK FOR ERROR CODE + load 404.html; some other error; or FIND FILE AND SEND CONTENT
    // Read File
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                })
            } else {
                // Some server eerror
                res.writeHead(500);
                resizeBy.end(`Server Error: ${err.code}`);
            }
        } else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType });
            // Send content of file
            res.end(content, 'utf8');
        }
    });
});

// first going to look for "process.env.PORT" which is environment variable for different users, else use my default port
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// "ES6" importing (Doesn't work?)
// from Person import './person';


// "Common js" importing
// const person = require('./person');


// const person1 = new person('Mike She', 26);

// using Person class
// person1.greeting();


// console.log ==> print
// console.log(Person.name);

// // Logger_demo
// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', (data) => console.log('Called Listender:', data));

// logger.log('Hello World!');
// logger.log('Another message');
// logger.log('And more');
