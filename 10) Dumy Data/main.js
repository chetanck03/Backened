// npm init -y 
// npm i express
// npm i ejs
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Employee = require("./models/Employee")
mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 3000

app.set('view engine','ejs')

// Random Functions
const getRandom =(arr)=>{
    let b = Math.floor(Math.random()*(arr.length-1))
    return arr[b]
}

app.get('/', (req, res) => {
  res.render('index',{foo:'FOO'})
})


app.get('/generate', async (req, res) => {
  // Clear the collection Employee
  await Employee.deleteMany({})
  // Generate random data
 let randomNames = ['ck','chetan','gautam','rahul']
 let randomLang =['python','js','c++','c']
 let randomCities =['punjab','delhi','up','mp']


  for (let index = 0; index < 5; index++) {
    let e =  await Employee.create({
        name:getRandom(randomNames),
        salary: Math.floor(Math.random()*22000),
        language:getRandom(randomLang),
        city:getRandom(randomCities),
        isManager: Math.random()>0.5?true:false
    })
    console.log(e)

  }
  res.render('index',{foo:'FOO'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})