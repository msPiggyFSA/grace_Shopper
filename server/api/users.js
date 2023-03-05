const router = require("express").Router();
const {
  models: { User },
} = require("../db");
const Cart = require("../db/models/Cart");

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "username", "email", "fName", "lName"],
      include: Cart
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: ["id", "username", "email", "fName", "lName"],
      include: Cart,
    });
    res.send(user);
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: err.message,
    });
  }
});



module.exports = router;
