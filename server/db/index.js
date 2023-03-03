//this is the access point for all things database related!

const db = require('./db');
const Cart = require('./models/Cart');
const Category = require('./models/Category')
const Product = require('./models/Product')
const CartProduct = require('./models/CartProduct')
const User = require('./models/User')

//associations could go here!

Product.belongsTo(Category);
Category.hasMany(Product, {foreignKey: 'categoryId'} );

Cart.belongsToMany(Product, { through: "Cart_Product" });

Product.belongsToMany(Cart, { through: "Cart_Product" });

CartProduct.belongsToMany(Cart, { through: "Cart_Product" });

Cart.belongsTo(User)
User.hasMany(Cart, {foreignKey:'userId'})


module.exports = {
  db,
  models: {
    User,
    Product,
    Category,
    Cart,
    CartProduct
  },
}
