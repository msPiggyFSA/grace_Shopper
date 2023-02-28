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

// router.get("/:category", async (req, res, next) => {

// });

module.exports = router;
