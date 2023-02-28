const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define("cart", {
	purchased: {
		type: Sequelize.BOOLEAN,
		defaultValue: false,
	},
	billAddress: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	shipAddress: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	total: {
		type: Sequelize.FLOAT,
	},
});
module.exports = Cart;