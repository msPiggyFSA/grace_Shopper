const Sequelize = require('sequelize');
const db = require('../db');

console.log("hi");

const CartProduct = db.define("Cart_Product", {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	quantity:{
		type: Sequelize.INTEGER,
		defaultValue: 0
	}
});

module.exports = CartProduct;
