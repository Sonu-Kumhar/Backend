/**
 * 1. server create krna
 * 2. server config karna
 */

const express = require("express")
const notesModel = require("./models/notes.model")

const app = express(); //creating server
app.use(express.json())

app.post("/notes",async (req, res)=>{
    const {title, description} = req.body;

    const note = await notesModel.create({
        title, description
    })

    res.status(201).json({
        message:"note created successfully",
        note
    })
})

module.exports = app;