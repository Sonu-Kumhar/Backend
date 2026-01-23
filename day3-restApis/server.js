const express = require('express')

const app = express();  //creating server instance




app.listen(3000, ()=>{
    console.log("Server is running on port number 3000");
})