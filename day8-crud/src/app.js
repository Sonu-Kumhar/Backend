/**
 * 1. server create karna
 */

const express = require("express")

const app = express();


app.get("/", (req,res)=>{
    res.send("server is ready for crud operations")
})



module.exports = app;