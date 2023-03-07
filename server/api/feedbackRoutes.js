const router = require("express").Router();
const {
  models: { Contact },
} = require("../db");

router.get("/feedback", async (req, res, next) => {
  try {
    const feedback = await Contact.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["name", "email", "message"],
    });
    res.json(feedback);
    console.log("inside server", contacts);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
