// Express Js : Web FrameWork &  install it : npm i express

const express = require('express')
const app = express()
const port = 3000

// Static Files serving public
app.use(express.static('public'))

// app.get or app.post or app.put or app.delete (path , handler)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Pages
app.get('/about', (req, res) => {
  res.send('Hello about!')
})
app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})
app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})
app.get('/description', (req, res) => {
  res.send('Hello description!')
})

// slug : used for the parameters for the multiple values
app.get('/description/:slug', (req, res) => {
   res.send(`Hello ${req.params.slug}`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})