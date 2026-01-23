const express = require('express')

const app = express();  //creating server instance
app.use(express.json())

let notes = [];



app.post('/notes', (req, res)=>{
    console.log(req.body);
    notes.push(req.body);
    res.send("notes created!!!");
})

app.get("/notes", (req, res)=>{
    console.log(notes);
    res.send(notes)
})


app.listen(3000, ()=>{
    console.log("Server is running on port number 3000");
})