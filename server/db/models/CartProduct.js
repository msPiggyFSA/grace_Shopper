const Sequelize = require('sequelize');
const db = require('../db');

console.log("hi");

const CartProduct = db.define("Cart_Product", {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	}
});

module.exports = CartProduct;
