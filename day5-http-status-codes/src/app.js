const express = require("express");

const app = express(); //creating server

app.use(express.json())

let notes = [];

app.get('/', (req, res)=>{
    res.status(200).json({ // 200 -> Success: The request was successful.
        message:"hello from server with status code 200"
    })
})

app.get('/notes', (req, res)=>{
    res.status(200).json({
        data : notes
    })
    // res.send(notes); //error because server sirf ek hi response bhej skta hai ek req. pe, Ek request → ek response
})

app.post('/notes', (req, res)=>{
    notes.push(req.body)
    console.log(req.body);
    res.status(201).json({ //201 -> Success: A new resource has been created.
        message:"Note created successfully" 
    })
})


module.exports = app;