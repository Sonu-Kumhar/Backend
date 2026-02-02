const express = require("express")

const app = express();


app.get("/",(req, res)=>{
    res.send("Integrating backend with frontend")
})


module.exports = app;