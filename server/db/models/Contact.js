const Sequelize = require("sequelize");
const db = require("../db");

console.log("hello Contacts");

const Contact = db.define("contact", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmail: true,
    unique: true,
  },
  message: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Contact;
