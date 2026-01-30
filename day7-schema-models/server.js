/**
 * 1. server start karna
 * 2. server database se connect karna
 */

const app = require('./src/app')

app.listen(3000, ()=>{
    console.log("server is running on port number 3000")
})