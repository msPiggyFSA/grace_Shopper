const router = require("express").Router();
const {
  models: { CartProduct, Cart, User, Product },
} = require("../db");
//comeback????????
router.get("/", async (req, res, next) => {
  try {
    // const cartProducts = await CartProduct.findAll({
    //   include: [{ model: Product }, { model: Cart }],
    // });

    const cartProducts = await CartProduct.findAll();
    console.log(JSON.stringify(cartProducts));
    res.send(cartProducts);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const { cartId, productId } = req.body;
    const cart = await CartProduct.create({
      cartId,
      productId,
    });
    res.send(cart);
  } catch (error) {
    console.log(error);
  }
});

//check out cartProduct

// router.post('/', async(req, res)=>{

//   try {
//     const cartProducts = await CartProduct.findAll({
//       include:{
//         model: Cart,
//         through: {where:{cartId: this.cartId}},
//       }
//     });
//     console.log(req)
//     console.log("this is", )
//     console.log(req.body, 'this is req.body')
//     console.log(cartProducts)
//     return res.json(cartProducts)

//   } catch (error) {
//     res.status(404).json({
// 			status: "error",
// 			message: error.message,
// 		});
//   }
// })

//individual Checkout cart

module.exports = router;
