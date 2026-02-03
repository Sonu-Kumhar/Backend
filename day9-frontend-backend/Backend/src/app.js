const express = require("express")

const app = express();
app.use(express.json())
const noteModel = require("./models/note.model")

app.get("/",(req, res)=>{
    res.send("Integrating backend with frontend")
})

app.post("/api/notes",async (req, res)=>{
    const {title, description} = req.body;

    const note = await noteModel.create({
        title, description
    })

    res.status(201).json({
        message:"Note created✅",
        note
    })
})

app.get("/api/notes", async (req, res)=>{
    const notes = await noteModel.find();
    res.status(200).json({
        message:"Fetched all notes",
        notes
    })
})


module.exports = app;