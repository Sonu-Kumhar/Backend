/**
 * 1. server start krna
 * 2. server ko database se connect karna
 */

const app = require("./src/app")


app.listen(3000, ()=>{
    console.log("server running on port number 3000")
})