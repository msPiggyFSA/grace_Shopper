//this is the access point for all things database related!

const db = require('./db');
const Cart = require('./models/Cart');
const Category = require('./models/Category')
const Product = require('./models/Product')

const User = require('./models/User')

//associations could go here!

Product.belongsToMany(Category, {through: 'Category_Product'});
Category.belongsToMany(Product, { through: "Category_Product" });

Cart.belongsToMany(Product, { through: "Cart_Product" });
Product.belongsToMany(Cart, { through: "Cart_Product" });

Cart.belongsTo(User)
User.hasMany(Cart, {foreignKey:'userId'})

module.exports = {
  db,
  models: {
    User,
    Product,
    Category,
    Cart
  },
}
