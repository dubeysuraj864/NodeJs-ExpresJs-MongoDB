// var a= 1034;
// var b = 23;
// var sum = a+b;
// console.log(sum)

//use of filter in js

// let arr = [23,43,54,45,34,65,6,56,56]

// let result = arr.filter((item) => {
//     return item > 40
// })
// console.log(result)

// global and non global modules in  node
// console.log("surds")

// FileSystem.writeFileSync("hello.txt", "Wow, I'm learning node js and the good thing is that i am having fun also. lol")

//so console is the global module because we don't have to assign it for using it console.log("ex")

//fs, here fs stands for fileSystem, and it should be imported before using it. that's why we call it non- global module.

// const fs = require('fs')
// fs.writeFileSync("hello.txt", "Wow, I'm learning node js and the good thing is that i am having fun also. lol")

// console.log(__dirname)
// for checking the current directory

// console.log("-->",__filename
// )
// it tells the filename with along with the directory

// const fs = require('fs').writeFileSync
// fs("xyz.txt", "non-global module shit")

// ------------------

// make basic server output on browser
// 1.make basic server.
// 2.function as parameter in node.
// 3.arrow function.
// 4.get output on browser
// 5.interview question

// 1
// const http = require("http");

// const dataControl = (req, resp) => {
//   resp.write("<h1>Hello, I'm learning Node.js.</h1>");
//   resp.end();
// };

// http.createServer(dataControl).listen(3500);

// Q- What does http module
// ans- it handles the request and response of the server in node js



/* --------------------------------
    All about package.json
    1. What is the package file?
    // it contains all the files details like it version and date etc.
    2.How to make it?
    // npm init
    // node package manager - *package*
    3.check the file in detail
    // We can see all the details of your project in package.json file. Also it is the essential file if it got deleted for some reason the project will be destroyed and we can not make it back, sad.
    4.install external package 
    // npm i example
    // now will create node module folder
    // we can the info about it in package called "dependencies:{ }"
    // or will can install all node module using npm install/ npm i

    // now What is package-lock.json, well package.json contain all details about project, and package-lock contains details about package.json
    5.Interview question
    // 
*/ 

const colors = require('colors')
console.log("hello.json".bgBlue)

// small challenge for you
// Q1.what happens if the node_module folder got deleted?
// We wont be able to use that module that we had installed through NPM.
//modules are blocks of encapsulated code that communicates with an external application on the basis of their related functionality.
//Q2.Correct way to push data on git.
/* 
    git init
    git add -A/ git add .
    git commit -m 'added my project'
    git remote add  origin ~link~
    git push -u origin master
*/

