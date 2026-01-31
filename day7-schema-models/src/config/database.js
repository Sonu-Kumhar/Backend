/**
 * writing code to connect with database
 */

const mongoose = require("mongoose")

function connectToDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connected with MongoDB ✅")
    })
}

module.exports = connectToDB;