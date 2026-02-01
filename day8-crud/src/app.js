/**
 * 1. server create karna
 */

const express = require("express")
const noteModel = require("./models/note.model")


const app = express();
app.use(express.json())

app.get("/", (req,res)=>{
    res.send("server is ready for crud operations")
})

/**
 * POST /api/notes
 * to create a new note with title and description
 */

app.post("/api/notes", async (req, res)=>{
    console.log(req.body);
    const {title, description} = req.body;

    const note = await noteModel.create({
        title, description
    })

    res.status(201).json({
        message:"note created successfully",
        note
    })

})

module.exports = app;