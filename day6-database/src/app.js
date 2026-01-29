/**
 * 1. server create karna
 * 2. server config karna
 */

const express = require('express')

const app = express();


app.get('/',(req,res)=>{
    res.send("connecting the server with the database")
})

app.get('/home',(req,res)=>{
    res.send("adding one more route")
})


module.exports = app;