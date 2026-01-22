const express = require('express')
const app = express() //creating server instance

app.get('/', (req,res)=>{
    res.send("Hello From Server")
})

app.get('/about', (req, res)=>{
    res.send("This is Server, created by Sonu Kumhar")
})

app.get('/contact', (req, res)=>{
    res.send("Want to contact me? 📲📞")
})

app.listen(3000); //server start karna