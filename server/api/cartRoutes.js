const Cart = require('../db/models/Cart')
const CartProduct = require('../db/models/CartProduct')

const router = require('express').Router()

router.get("/", async(req, res, next)=>{
    try {
        const cart = await Cart.findAll({
            include: CartProduct
        })
        res.send(cart)
    } catch (error) {
        console.log(error.message)
    }
})
module.exports = router