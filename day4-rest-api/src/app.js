const express = require("express")

const app = express() //creating server
app.use(express.json())

app.get("/", (req,res)=>{
    res.send("Hello World!!! starting with actual folder structure");
})

let notes = [];

app.get('/notes', (req, res)=>{
    res.send(notes);
})

app.post('/notes', (req, res)=>{
    console.log(req.body);
    notes.push(req.body);
    res.send("Note Created!!!")
})

app.delete('/notes/:index', (req, res)=>{
    delete notes[req.params.index]
    console.log(req.params.index) //whichever value will come in url will be there in req.params, and whichever data will come from client that will be in req.body

    //Route parameters are available in req.params, and client-sent body data in req.body.

    res.send("Note deleted successfully!!!")
})

app.patch('/notes/:index', (req, res)=>{
    notes[req.params.index].description = req.body.description;
    // console.log(notes[req.params.index].description);
    // console.log(req.body.description)
    res.send("description updated successfully");
})

module.exports = app; //exporting app