const mongoose = require("mongoose")

const gallerySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"]
    },
    description: {
        type: String,
        default: "Hello world",
    },
    imgUrl: {
        type: String,
        required: [true, "img url is required"]
    },
}, {
    timestamps: true
})

const galleryModel = mongoose.model("gallery", gallerySchema)

module.exports = galleryModel