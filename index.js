const fs= require('fs');
var colors = require('colors');
//const chalk = require('chalk');
//const http = require('http');
var util=require('./util');
console.log(util.getName());
console.log(util.getVersion());
fs.writeFileSync("test.txt","This is Tanwir Ahmad.");
const serverFnc=(req,res)=>{
res.write('Hello World');
res.end();
}
//http.createServer(serverFnc).listen(2000);


 
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the 

