const express = require('express')
const Orders = require('../../db/schema/customer')
const router = express.Router()


router.get('/', (req, res) => {
    res.send("hello")
})

router.post('/', async(req, res) => {
    try {
        const {name, size, colour} = req.body;
        const order = await Orders.create({name, size, colour})
        return res.status(200).json(order)
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"Server Error"})
    }
})

module.exports = router;