//this is the access point for all things database related!

const db = require("./db");
const Cart = require("./models/Cart");
const Category = require("./models/Category");
const Product = require("./models/Product");
const CartProduct = require("./models/CartProduct");
const User = require("./models/User");

//associations could go here!

//one to one
Product.belongsTo(Category);
//one to many
Category.hasMany(Product, { foreignKey: "categoryId" });

Cart.belongsToMany(Product, { through: "Cart_Product" });
Product.belongsToMany(Cart, { through: "Cart_Product" });

//column carts->Cart_Product.CartProductCartId does not exist
//CartProduct.belongsToMany(Cart, { through: "Cart_Product" });

//can log at http://localhost:8080/api/cartProducts
CartProduct.belongsTo(Cart, { through: "Cart_Product", foreignKey: "cartId" });
// Product.belongsTo(CartProduct);
CartProduct.belongsTo(Product, { through: "Cart_Product", foreignKey: 'productId'})

Cart.belongsTo(User);
User.hasMany(Cart, { foreignKey: "userId" });

Cart.belongsTo(User);
User.hasMany(Cart, { foreignKey: "userId" });

module.exports = {
  db,
  models: {
    User,
    Product,
    Category,
    Cart,
    CartProduct,
  },
};
