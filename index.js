const express = require('express')

const app = express();

console.log("Starting application....")

app.get ('/', (req, res)=>{

res.send("Hello World - continous deployment - port test")

})
//just a test
app.listen(80)