import fs from "fs/promises"

// Read a File
let a = await fs.readFile("ck.txt")

// Append File
let b = await fs.appendFile("ck.txt",
"\n\n\n\nThis is Amazing Promise")

console.log(a.toString(),b)