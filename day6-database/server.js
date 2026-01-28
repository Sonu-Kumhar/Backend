/**
 * 1. server start krna
 * 2. server ko database se connect karna
 */

const app = require("./src/app")
const mongoose = require('mongoose')

function connectionToDB(){
    mongoose.connect("mongodb://localhost:27017/day-6")
    .then(()=>{
        console.log("Connected with MongoDB✅")
    })
}

connectionToDB()

app.listen(3000, ()=>{
    console.log("server running on port number 3000")
})