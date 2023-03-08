"use strict";

const {
  db,
  models: { User },
} = require("../server/db");
const Cart = require("../server/db/models/Cart");
const CartProduct = require("../server/db/models/CartProduct");
const Category = require("../server/db/models/Category");
const Product = require("../server/db/models/Product");
const Contact = require("../server/db/models/Contact");

const users = [
  {
    fName: "John",
    lName: "Doe",
    username: "johndoe",
    password: "password",
    email: "johndoe@example.com",
    admin: true,
    billing: "1111 Cardboard Box",
    shipping: "1111 Cardboard Box",
  },
  {
    fName: "Jane",
    lName: "Doe",
    username: "janedoe",
    password: "password",
    email: "janedoe@example.com",
    billing: "1111 Cardboard Box",
    shipping: "1111 Cardboard Box",
  },
  {
    fName: "Bob",
    lName: "Smith",
    username: "bobsmith",
    password: "password",
    email: "bobsmith@example.com",
    billing: "1111 Cardboard Box",
    shipping: "1111 Cardboard Box",
  },
  {
    fName: "Alice",
    lName: "Jones",
    username: "alicejones",
    password: "password",
    email: "alicejones@example.com",
    billing: "1111 Cardboard Box",
    shipping: "1111 Cardboard Box",
  },
  {
    fName: "Mike",
    lName: "Johnson",
    username: "mikejohnson",
    password: "password",
    email: "mikejohnson@example.com",
    billing: "1111 Cardboard Box",
    shipping: "1111 Cardboard Box",
  },
  {
    fName: "Sarah",
    lName: "Davis",
    username: "sarahdavis",
    password: "password",
    email: "sarahdavis@example.com",
    billing: "1111 Cardboard Box",
    shipping: "1111 Cardboard Box",
  },
  {
    fName: "David",
    lName: "Brown",
    username: "davidbrown",
    password: "password",
    email: "davidbrown@example.com",
    billing: "1111 Cardboard Box",
    shipping: "1111 Cardboard Box",
  },
  {
    fName: "Karen",
    lName: "Taylor",
    username: "karentaylor",
    password: "password",
    email: "karentaylor@example.com",
    billing: "1111 Cardboard Box",
    shipping: "1111 Cardboard Box",
  },
  {
    fName: "Chris",
    lName: "Wilson",
    username: "chriswilson",
    password: "password",
    email: "chriswilson@example.com",
    billing: "1111 Cardboard Box",
    shipping: "1111 Cardboard Box",
  },
  {
    fName: "Amy",
    lName: "Martinez",
    username: "amymartinez",
    password: "password",
    email: "amymartinez@example.com",
    billing: "1111 Cardboard Box",
    shipping: "1111 Cardboard Box",
  },
  {
    fName: "Ryan",
    lName: "Anderson",
    username: "ryananderson",
    password: "password",
    email: "ryananderson@example.com",
    billing: "1111 Cardboard Box",
    shipping: "1111 Cardboard Box",
  },
  {
    fName: "Kelly",
    lName: "Clark",
    username: "kellyclark",
    password: "password",
    email: "kellyclark@example.com",
    billing: "1111 Cardboard Box",
    shipping: "1111 Cardboard Box",
  },
  {
    fName: "Mark",
    lName: "Perez",
    username: "markperez",
    password: "password",
    email: "markperez@example.com",
    billing: "1111 Cardboard Box",
    shipping: "1111 Cardboard Box",
  },
  {
    fName: "Laura",
    lName: "Garcia",
    username: "lauragarcia",
    password: "password",
    email: "lauragarcia@example.com",
    billing: "1111 Cardboard Box",
    shipping: "1111 Cardboard Box",
  },
  {
    fName: "Eric",
    lName: "Rivera",
    username: "ericrivera",
    password: "password",
    email: "ericrivera@example.com",
    billing: "1111 Cardboard Box",
    shipping: "1111 Cardboard Box",
  },
];
//raza
const products = [
  {
    name: "T-Shirt",
    imageUrl: "/assets/img/shirt.png",

    size: "xs",
    price: 5,
    rating: 4.5,
    quantity: 100,
    description:
      "Comfortable and lightweight, this 100% cotton shirt made from the sheeps in the himalayans will not let your friends and family know your next move.",
    categoryId: 1,
  },
  {
    name: "T-Shirt",
    imageUrl: "/assets/img/women-shirt.png",

    size: "s",
    price: 500,
    rating: 3.5,
    quantity: 10,
    description:
      "This moisture wicking shirt is perfect for the summertime. Made out of 100% USA grown pixels, this shirt will keep your screen nice and cool.",
    categoryId: 2,
  },
  {
    name: "Jeans",
    imageUrl: "/assets/img/women-jean.png",

    size: "l",
    price: 5,
    rating: 4.5,
    quantity: 100,
    description:
      "Women jeans so tight, you'll be accused of animal abuse for strangling your cat.",
    categoryId: 2,
  },
  {
    name: "Dress Shirt",
    imageUrl: "/assets/img/men-dress.png",
    size: "xl",
    price: 55,
    rating: 5.0,
    quantity: 10,
    description:
      "Not the flyest shirt, but we sell red bull if you wanna go that route",
    categoryId: 1,
  },
  {
    name: "Polo Shirt",
    imageUrl: "/assets/img/men-polo.png",
    size: "m",
    price: 55,
    rating: 5.0,
    quantity: 150,
    description:
      "Artisan crafted by 8 year olds in a third world country, you are guaranteed the blood and tears which give us the quality we are known for.",
    categoryId: 1,
  },
  {
    name: "Short-Sleeve",
    imageUrl: "/assets/img/women-ss.png",
    size: "l",
    price: 150,
    rating: 3.0,
    quantity: 50,
    description:
      "Just a regular short-sleeve shirt. Literally, nothing special about it. Like its just expensive for no reason. If you buy this shirt, you are a goofy.",
    categoryId: 2,
  },
];
//Jon
const cart = [
  {
    purchased: true,
    billAddress: "123 Sesame St. New York, NY 10001",
    shipAddress: "123 Sesame St. New York, NY 10001",
    total: 100.0,
    userId: 1,
    cartId: 1,
  },
  {
    purchased: true,
    billAddress: "1428 Elm St. Springwood, OH 43212",
    shipAddress: "1428 Elm St. Springwood, OH 43212",
    total: 50.0,
    userId: 3,
  },
  {
    purchased: true,
    billAddress: "124 Conch St., Bikini Bottom, Pacific Ocean",
    shipAddress: "124 Conch St., Bikini Bottom, Pacific Ocean",
    total: 25.0,
    userId: 2,
  },
  {
    purchased: false,
    billAddress: "742 Evergreen Terrace, Springfield, USA",
    shipAddress: "742 Evergreen Terrace, Springfield, USA",
    total: 75.0,
    userId: 5,
  },
  {
    purchased: false,
    billAddress: "31 Spooner Street, Quahog, Rhode Island",
    shipAddress: "31 Spooner Street, Quahog, Rhode Island",
    total: 69.69,
    userId: 10,
  },
];
//victor
const categories = [
  { name: "men" },
  { name: "women" },
  // { name: "Top" },
  // { name: "Bottom" },
  // { name: "Glasses" },
];
const contact = [
  {
    name: "John",
    email: "johndoe@example.com",
    message: "hello i am your new customer and i was at the store today",
  },
  {
    name: "Jane",
    email: "janedoe@example.com",
    message: "hello i am your new customer and i was at the store today",
  },
];

const cart_product = [
  { cartId: 1, productId: 1 },
  { cartId: 1, productId: 2 },
  { cartId: 1, productId: 5 },
  { cartId: 2, productId: 2 },
  { cartId: 2, productId: 3 },
  { cartId: 3, productId: 4 },
];
/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(
      users.map((user) => {
        return User.create(user);
      })
    );

    await Promise.all(
      categories.map((cat) => {
        return Category.create(cat);
      })
    );

    await Promise.all(
      products.map((product) => {
        return Product.create(product);
      })
    );

    await Promise.all(
      cart.map((cart) => {
        return Cart.create(cart);
      })
    );

    await Promise.all(
      cart_product.map((cart) => {
        return CartProduct.create(cart);
      })
    );

    await Promise.all(
      contact.map((cont) => {
        console.log("Single Cont:", cont);
        return Contact.create(cont);
      })
    );

    /* Below Code establishes a relationship between products */
    // const shoes = await Product.create({
    //   name: "Polo Shirt",
    //   imageUrl:
    //     "http://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,q_auto:eco,so_0.1/0e744966-f8f8-4aae-97a5-2761f14798a6/dri-fit-mens-fitness-t-shirt-nhgSHx.jpg",
    //   size: "m",
    //   price: 55,
    //   rating: 5.0,
    //   quantity: 150,
    //   category: "3",
    //   description: "this is new addition to Shirts",
    // });

    // const category = await Category.create({ name: "Accessory" });

    // await cart.addProduct(id);

    // createdCategories.forEach((category) => {
    //   category.addProduct(shoes);
    // });

    console.log("Seeding success!");
    db.close();
  } catch (err) {
    console.error("Oh noes! Something went wrong!");
    console.error(err);
    db.close();
  }
};

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
