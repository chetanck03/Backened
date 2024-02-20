// Middleware : Modify the Request and checking request

const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")

// request And Response
// app.use(express.static("public"))

// Middleware 1 : Logger for our Application
app.use((req, res, next) => {
    // console.log(req.headers)

    req.ck="i am ck"
    // file create
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)

    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("Hacked by Middleware 1")
    next()
  })
// Middleware 2
app.use((req, res, next) => {
    console.log('m2')
    next()
  })

app.get('/', (req, res) => {
  res.send('Hello World!'+req.ck)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})