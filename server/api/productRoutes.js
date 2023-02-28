const router = require("express").Router();
const {
  models: { Product },
} = require("../db");

router.get("/", async (req, res) => {
  try {
    const allProducts = await Product.findAll();
    console.log(allProducts);
    res.status(200).json({
      status: "success",
      data: {
        allProducts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: err,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);

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
