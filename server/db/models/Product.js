const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	imageUrl: {
		type: Sequelize.TEXT,
		defaultValue: "i am default value",
	},
	// size: {
	// 	type: Sequelize.ENUM('m', 's'),
	// 	// defaultValue: 'm'
	// },
	price: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	rating: {
		type: Sequelize.FLOAT,
		validate: {
			min: 0.0,
			max: 5.0,
		},
	},
	quantity: {
		type: Sequelize.INTEGER,
		validate: {
			notEmpty: true,
		},
	},
	// categoryId: {
	// 	type: Sequelize.INTEGER,
	// 	// allowNull: false,
	// 	validate: {
	// 		notEmpty: true,
	// 	},
	// },
	description: {
		type: Sequelize.TEXT,
	},
});

module.exports = Product;