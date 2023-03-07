const router = require("express").Router();
const {
  models: { Contact },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const contacts = await Contact.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["name", "email", "message"],
    });
    res.json(contacts);
    console.log("inside server", contacts);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Contact.create(req.body));
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const contact = await Contact.findByPk(req.params.id, {});
    res.json(contact);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
