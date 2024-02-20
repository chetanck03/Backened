const express = require('express')
// Routes
const blog = require('./routes/blog')

const app = express()
const port = 3000
// get: used for the send small queries to the Severs
// post: used for the send sensitive queries to the Severs
// put: used for the update the queries

// Static Files serving public
app.use(express.static('public'))
app.use('/blog', blog)

app.get('/', (req, res) => {
  console.log("hey its a get request")
  res.send('Hello World1 ck!')
})

app.post('/', (req, res) => {
  console.log("hey its a post request")
  res.send('Hello World2 post!')
})

app.put('/', (req, res) => {
  console.log("hey its a put request")
  res.send('Hello World3 put!')
})

app.get('/index', (req, res) => {
  console.log("hey its a get request")
  res.send('Hello World4 index!')
})

// Send a html file
app.get('/ind', (req, res) => {
  console.log("hey its a get request")
  res.sendFile('templates/index.html',{root: __dirname})
})

// Send Json File
app.get('/api', (req, res) => {
  console.log("hey its a api get request")
  res.json({a:1,b:2,c:3, name:["chetan","ck"]})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})