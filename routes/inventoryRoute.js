// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")

router.get("/", () => {res.send('hello')})

module.exports = router