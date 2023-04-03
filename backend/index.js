const data = require("./data")
const Express = require("express")
const express = Express()
const path = require("path")

express.use(Express.static(path.join(__dirname, 'build')))

express.get("/",(req,res) => {
    res.status(200).send(path.join(__dirname, 'build', 'index.html'))
})
express.get("/wildAnimalsData/somewhere/lost",(req,res) => {
    res.status(200).json(data)
})

express.listen(3000,() => console.log("Connected"))