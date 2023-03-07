require('dotenv').config()
const router = require("express").Router();
const express = require("express");
router.use(express.json());
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)



router.use("/users", require("./users"));
router.use("/products", require("./productRoutes"));
router.use("/categories", require("./categoryRoutes"));
router.use("/cartProducts", require("./cartProductRoutes"));
router.use("/carts", require("./cartRoutes"));
router.use("/contact", require("./contactRoutes"));
router.use("/feedback", require("./feedbackRoutes"));


router.post('/create-checkout-session', async (req, res)=>{
 
  try { console.log(req.body, 'this is request.body')
    const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			mode: "payment",
			line_items: req.body.items.map((item) => {
				return {
					price_data: {
						currency: "usd",
						product_data: {
							name: item.name,
						},
						unit_amount: item.price * 100,
					},
					quantity: 1,
				};
			}),
			success_url: `${process.env.SERVER_URL}/order/success`,
			cancel_url: `${process.env.SERVER_URL}/order/unsuccess`,
		});
    res.json({url: session.url})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;

