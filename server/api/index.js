const router = require("express").Router();
const express = require('express')
router.use(express.json());

router.use("/users", require("./users"));
router.use("/products", require("./productRoutes"));
router.use("/categories", require("./categoryRoutes"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
module.exports = router;