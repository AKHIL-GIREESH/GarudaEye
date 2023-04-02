const data = require("./data")
const Express = require("express")
const express = Express()

express.get("/",(req,res) => {
    res.status(200).send("<h1>HomePage</h1>")
})
express.get("/wildAnimalsData",(req,res) => {
    res.status(200).json(data)
})

express.listen(3000,() => console.log("Connected"))