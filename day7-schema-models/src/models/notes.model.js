/**
 * 1. in the beginning, first create the schema
 * 2. then create the model 
 */

const mongoose = require("mongoose")

const noteSchema = mongoose.Schema({
    title:String,
    description:String
});

const notesModel = mongoose.model("notes", noteSchema); //creating collection (notes) with noteSchema;

module.exports = notesModel;