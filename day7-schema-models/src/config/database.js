/**
 * writing code to connect with database
 */

const mongoose = require("mongoose")

function connectToDB(){
    mongoose.connect("mongodb://localhost:27017/day7")
    .then(()=>{
        console.log("Connected with MongoDB ✅")
    })
}

module.exports = connectToDB;