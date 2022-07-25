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

// const colors = require('colors')
// console.log("hello.json".bgBlue)

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

// package and module are the same thing, only they have different names.

/*
    Nodemon | time saving module
    Q1.What is the Nodemon package?
    Q2.How to install it?
    Q3.How to use it?
    Q4.Interview Question.


    how to install

    npm i nodemon -g // -g means globally

*/

// console.warn(__dirname)

/*

    Node js is async

    1.Run first script
    2.Run second script( complex data )
        ---- it will not wait to finish 2nd  script ----
    3.Run third script
    4.Continue

*/

/*

        MAKE A SIMPLE API

        1. Make a server,
        2.create header and API body,
        3.create an API with static data.
        4.put data in another file.
        5.Interview question

*/


// let http = require('http');
// let data = require('./data');

// http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "application\json" });
//     res.write(JSON.stringify(data));
//     res.end();
//   })
//   .listen(8000);

//   here 200 is http status code which indicates that the request has succeeded.
//  "https://www.whatismyip.com/images/https-codes.png"


// input from command line
// - set input from command line
// - create file with input
// - delete file from with input
// - interview question

// console.log(process.argv[4])

// const fs = require('fs');
// const input = process.argv;

// if(input[2]=='add')
// {
//     fs.writeFileSync(input[3], input[4])
// }
// else if(input[2]=='remove'){
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log("Invalid output")
// }



// --------------------------------
// Show file list
// -make files in a folder
//- use path module
//- get the file names and print
//interview question

// const fs = require('fs');
// fs.writeFileSync("apple.txt", "A Bunch of apples are here. Wanna eat?") 
// const path = require('path')
// const dirPath = path.join(__dirname,'files');
// console.warn(dirPath)
// for(let i=0 ; i<5 ; i++){
//     fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple text file")
// }

// fs.readdir(dirPath,(err, files )=>{
//     files.forEach((item)=>{
//         console.log(item)
//     })
// })

//Q. what if we want to access another files which is located outside of current node directory?.
// Ans. No, We can not access file that is located outside the current directory. When we code in command node .\index.js. At that time this command acts like web server. Also but we can access it force using some spacial modules. in html etc.by Default it cant access the files from outside the current directory.

// --------------------------------------------------

// CRUD with the file system
// create file.
// read file.
// update file.
// rename file.
// delete file.
// Interview questions


// const fs = require('fs');
// const path = require('path')
// const dirPath = path.join(__dirname, 'crud')
// const filePath = `${dirPath}/apple.txt`;

// create
// fs.writeFileSync(filePath,'this is a simple text file')

// read
// fs.readFile(filePath,'utf8' ,(err, item) => {
//     console.log(item)
// })

// update

// fs.appendFile(filePath, ' and the file name is apple.txt', (err)=>{
//     if(!err) console.log("file is updated.")
// })

//rename
// fs.rename(filePath,`${dirPath}/fruit.txt`, (err) => {
//     if(!err) console.log("file name is updated")
// })

// delete
// fs.unlinkSync( `${dirPath}/fruit.txt`, (err)=> {
//     if(!err) console.log("file deleted successfully")
// })


// out <Buffer 74 68 69 73 20 69 73 20 61 20 73 69 6d 70 6c 65 20 74 65 78 74 20 66 69 6c 65>

// Now an interview question is that what is buffer.
//buffer is a temporary memory location when we perform any operation upon file system node js needs some memory. same like our system needs ram.

// to deal with this we only just need to put 'utf8' just before the parameters.
//  utf8 module from npm to encode/decode the string. Encodes any given JavaScript string (string) as UTF-8, and returns the UTF-8-encoded version of the string
// Encodes any given JavaScript string (string) as UTF-8, and returns the UTF-8-encoded version of the string\


// php is a synchronous language

// Asynchronous Basic in Node.js - asynchronous languages are fast.

// Asynchronous and Synchronous

// In Synchronous operations tasks are performed one at a time.
// For example we have three functions 1.Users. 2.Products 3.Cities. When execution will start it first load Users function and it still load Users util it not finished loading. It will wait for loading the function/code. After that it will move to next function and again for the next function the fully load.

// In Asynchronous, Second Task do not wait to finish first task.
// for example we have three function Users(), Products() and Cities(), When execution will start it first load to Users() or then it move to next function which is products() even though loading was not finished. and it will execute all the functions. Will not wait to finish the loading.
