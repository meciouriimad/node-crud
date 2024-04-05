const express = require('express')
const app = express();
const router = require("./routes/route")
const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({extended:true}))
app.use(router)

app.listen(3001,()=>{
    console.log("server is running");
})