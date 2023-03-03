const router = require("express").Router();
const {
  models: { CartProduct, Cart, User },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const cartProducts = await CartProduct.findAll();
    const cart = await Cart.findAll();
    // console.log(
    //   "######################################stuff on cartProducts: ",
    //   { Cart }.__proto__
    // );
    // console.log(
    //   "######################################stuff on cartProducts: ",
    //   `get${CartProduct.cartId}`
    // );

    return res.json(cart);
  } catch (err) {
    next(err);
  }
});

//check out cartProduct

router.post("/", async (req, res) => {
  console.log(req.body, "this is req.body");
  try {
    res.status(201).send(await CartProduct.create(req.body));
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
});

module.exports = router;
