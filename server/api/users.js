const router = require("express").Router();
const {
  models: { User },
} = require("../db");
const Cart = require("../db/models/Cart");
const Product = require("../db/models/Product");

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      //attributes: ["id", "username"],
      include: Cart
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});


router.post('/', async(req, res)=>{
  try {
    res.status(201).send(await Product.create(req.body))
  } catch (error) {
    res.status(404).json({
			status: "error",
			message: error.message
  })
}})


module.exports = router;
