//File System Module

const fs = require("fs")
// console.log(fs)

// 1) Create a File

console.log("starting")
// fs.writeFileSync("chetan.txt","Chetan is a good boy")

fs.writeFile("ck.txt","Chetan is a good boy too much", ()=>{
    console.log("done")
    // Read File
    fs.readFile("ck.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})

// 2) Add something in file (e:data & d:data)

fs.appendFile("ck.txt"," CK",(e,d)=>{
    console.log(d)
})
console.log("ending")
