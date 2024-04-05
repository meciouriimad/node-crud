const express = require('express')
const route = require('express').Router();
const UserController = require("../controllers/usercontroller")
const db = require('../config/db')

route.get("/",(req,res,next)=>{
    res.send("hello world")
})

route.get("/user",UserController.getalluser)

route.post("/adduser",UserController.addnewUser)

route.post("/deleteuser",UserController.deleteUser)

route.post("/edit",UserController.updateUser)

module.exports = route;