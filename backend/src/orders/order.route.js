const express = require('express')
const Order = require('./order.model')
const { 
    createOrder, 
    getOrderByEmaiil,
} = require('./order.controller')
const router = express.Router()

router.post("/", createOrder)

// get all books
router.get("/email/:email", getOrderByEmaiil)


module.exports = router;