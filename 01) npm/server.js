console.log("Hello World...!!")


// 1. npm project initialization => npm init
// 2. install npm package like => npm i slugify


var slugify = require('slugify')

let a = slugify('some string')
console.log(a)

const b = slugify('some string','_') //string converted into slugify
console.log(b)