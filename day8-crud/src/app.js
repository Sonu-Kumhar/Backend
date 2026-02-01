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

/**
 * GET /api/notes
 * Fetch all the notes from the mongoDB
 */

app.get("/api/notes", async (req, res)=>{
    const notes = await noteModel.find();

    res.status(200).json({
        message:"Notes fetched successfully.",
        notes
    })
})

/**
 * DELETE /api/notes/:id
 * Delete a note with id
 */

app.delete("/api/notes/:id", async (req, res)=>{
    const id = req.params.id;
    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message:"Note deleted successfully."
    })
})

/**
 * PATCH /api/notes/:id
 * Update the description of the note with an id
 */

app.patch("/api/notes/:id", async (req, res)=>{
    const {description} = req.body;
    const id = req.params.id;

    await noteModel.findByIdAndUpdate(id, {description});

    res.status(200).json({
        message:"description updated successfully."
    })
})

module.exports = app;