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
    // console.log(allProducts);
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

    res.send(product);
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: err.message,
    });
  }
});

//add new products
router.post('/', async(req, res)=>{
  console.log(req.body, 'this is req.body')
  try {
    res.status(201).send(await Product.create(req.body))
  } catch (error) {
    res.status(404).json({
			status: "error",
			message: error.message,
		});
  }
})
//edit current product

//delete product

module.exports = router;
