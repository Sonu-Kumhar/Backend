const express = require("express")
const galleryRouter = express.Router();
const multer = require("multer")
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
const ImageKit = require('@imagekit/nodejs');
const { toFile } = require('@imagekit/nodejs');
const galleryModel = require("../models/gallery")

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

/**
 * @route POST /api/gallery
 * @description upload a file from the frontend
 */

galleryRouter.post("/", upload.single("avatar"), async (req, res) => {
    // console.log(req.body, req.file)

    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: 'avatar',
        folder: "multer"
    });

    console.log(file)

    const photo = await galleryModel.create({
        title: req.body.title,
        description: req.body.description,
        imgUrl: file.url
    })

    res.status(201).json({
        message: "photo uploaded successfully on your gallery",
        photo
    })
})





module.exports = galleryRouter