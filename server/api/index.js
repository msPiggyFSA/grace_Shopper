const router = require("express").Router();
const express = require("express");
router.use(express.json());

router.use("/users", require("./users"));
router.use("/products", require("./productRoutes"));
router.use("/categories", require("./categoryRoutes"));
router.use("/cartProducts", require("./cartProductRoutes"));
router.use("/carts", require("./cartRoutes"));
router.use("/contact", require("./contactRoutes"));
router.use("/feedback", require("./feedbackRoutes"));


router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
module.exports = router;
