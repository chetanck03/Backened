use("CrudDb")  // name of database

// console.log(db)

// 1) Create
        db.createCollection("courses")

        // a) Insert one data

        // db.courses.insertOne({
        //     name: "chetan ck",
        //     price: 0,
        //     assignments: 12,
        //     projects: 45
        // })

        // b) Insert Many data using Array

        // db.courses.insertMany([{
        //         "name": "Rajesh Kumar",
        //         "price": 10,
        //         "assignments": 8,
        //         "projects": 32
        //     },
        //     {
        //         "name": "Priya Sharma",
        //         "price": 15,
        //         "assignments": 10,
        //         "projects": 40
        //     },
        //     {
        //         "name": "Anil Singh",
        //         "price": 5,
        //         "assignments": 6,
        //         "projects": 25
        //     }])

 
// 2) Read 

        // let a =db.courses.find({price:10})   
        // console.log(a.count()) 
        // console.log(a.toArray()) 

        // let b =db.courses.findOne({price:10})   
        // console.log(b) 

// 3) Update

// db.courses.updateOne({price: 10},{$set:{price:100}})

// 4) Delete

db.courses.deleteOne({price:15})
db.courses.deleteMany({price:15})






