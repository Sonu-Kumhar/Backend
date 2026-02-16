const express = require("express")
const galleryRouter = express.Router();
const multer = require("multer")
const storage = multer.memoryStorage()
const upload = multer({storage: storage})


galleryRouter.post("/", upload.single("avatar") ,(req, res)=>{
    console.log(req.body, req.file)
    res.send("creating your post...")
})





module.exports = galleryRouter