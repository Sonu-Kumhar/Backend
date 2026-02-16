const express = require("express")


const galleryRouter = require("./routes/gallery.routes")

const app = express()
app.use(express.json())


app.get("/", (req,res)=>{
    res.status(200).json({
        message:"practising multer"
    })
})

app.use("/api/gallery", galleryRouter)

module.exports = app