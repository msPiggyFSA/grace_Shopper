const {
	models: { CartProduct, Cart, User, Product },
} = require("../db");

const router = require("express").Router();

router.get("/", async (req, res, next) => {
	try {
		const cart = await Cart.findAll({
			include: [
                {model: CartProduct}, 
                {model: User}],
		});
		res.send(cart);
	} catch (error) {
		console.log(error.message);
	}
});

router.get('/:id', async(req, res, next)=>{
    try {
        const cart = await Cart.findByPk(req.params.id, {
					include: [{ model: CartProduct }, { model: User }],
				});
        res.send(cart)
    } catch (error) {
        next(error)
    }
})
module.exports = router;
