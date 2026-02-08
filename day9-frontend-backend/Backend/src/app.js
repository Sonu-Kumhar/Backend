const express = require("express")
const cors = require("cors")

const app = express();
app.use(express.json())
app.use(cors())
const noteModel = require("./models/note.model")

app.get("/",(req, res)=>{
    res.send("Integrating backend with frontend")
})

app.post("/api/notes",async (req, res)=>{
    console.log("request received", req.body)
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

app.delete("/api/notes/:id", async (req, res)=>{
    const id = req.params.id;
    console.log(id);

    await noteModel.findByIdAndDelete(id);

    res.status(200).json({
        message:"Note deleted successfully."
    })
})


module.exports = app;