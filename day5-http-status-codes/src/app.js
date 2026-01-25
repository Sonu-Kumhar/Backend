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

app.delete('/notes/:index', (req, res)=>{
    delete notes[req.params.index];
    res.status(204).json({  //
        success:true, 
        message:"Note deleted successfully"
    })

//     HTTP 204 ka matlab hota hai: NO CONTENT

// 👉 Is status code ke saath:

// Response body allowed hi nahi hota

// Browser / client body ignore kar deta hai

})

app.patch("/notes/:index", (req, res)=>{
    notes[req.params.index].description = req.body.description;

    res.status(200).json({
        message:"description updated successfully"
    })
})

module.exports = app;