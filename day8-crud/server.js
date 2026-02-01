/**
 * 1. server start karna
 */

require("dotenv").config()
const app = require("./src/app")
const connectTODB = require("./src/config/database")

connectTODB()

app.listen(3000, ()=>{
    console.log("server is running on port number 3000");
})