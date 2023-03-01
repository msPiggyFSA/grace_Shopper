const router = require("express").Router();
const {
  models: { Product },
} = require("../db");
const Category = require("../db/models/Category");

router.get("/", async (req, res) => {
  try {
    const allProducts = await Product.findAll({
      include: Category,
    });
    console.log(allProducts);
    res.send(allProducts);
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: err,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: Category,
    });

    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: err.message,
    });
  }
});

// router.get("/:category", async (req, res, next) => {

// });

module.exports = router;
