const express = require('express')

const app = express();

console.log("Starting application....")

app.get ('/', (req, res)=>{

res.send("Hello World - cloud run app")

})
//just a test
app.listen(8080)