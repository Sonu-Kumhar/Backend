const express = require("express")
const galleryRouter = express.Router();
const multer = require("multer")
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
const galleryController = require('../controllers/gallery.controller')


/**
 * @route POST /api/gallery
 * @description upload a file from the frontend
 */

galleryRouter.post("/", upload.single("avatar"), galleryController.createGalleryController)





module.exports = galleryRouter