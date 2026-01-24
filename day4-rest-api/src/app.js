const express = require("express")

const app = express() //creating server

app.get("/", (req,res)=>{
    res.send("Hello World!!! starting with actual folder structure");
})

module.exports = app; //exporting app