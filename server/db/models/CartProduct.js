const Sequelize = require('sequelize');
const db = require('../db');
const Cart = require('./Cart');
const Product = require('./Product');

const CartProduct = db.define("Cart_Product", {
	cartId: {
		type: Sequelize.INTEGER,
		references:{
      model: Cart,
      key: 'id',
    },
	},
	productId: {
		type: Sequelize.INTEGER,
		references:{
      model: Product,
      key: 'id',
    },
	},
});
module.exports = CartProduct;
