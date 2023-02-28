"use strict";

const {
  db,
  models: { User },
} = require("../server/db");
const Cart = require("../server/db/models/Cart");
const Category = require("../server/db/models/Category");
const Product = require("../server/db/models/Product");

const users = [
  {
    fName: "John",
    lName: "Doe",
    username: "johndoe",
    password: "password",
    email: "johndoe@example.com",
  },
  {
    fName: "Jane",
    lName: "Doe",
    username: "janedoe",
    password: "password",
    email: "janedoe@example.com",
  },
  {
    fName: "Bob",
    lName: "Smith",
    username: "bobsmith",
    password: "password",
    email: "bobsmith@example.com",
  },
  {
    fName: "Alice",
    lName: "Jones",
    username: "alicejones",
    password: "password",
    email: "alicejones@example.com",
  },
  {
    fName: "Mike",
    lName: "Johnson",
    username: "mikejohnson",
    password: "password",
    email: "mikejohnson@example.com",
  },
  {
    fName: "Sarah",
    lName: "Davis",
    username: "sarahdavis",
    password: "password",
    email: "sarahdavis@example.com",
  },
  {
    fName: "David",
    lName: "Brown",
    username: "davidbrown",
    password: "password",
    email: "davidbrown@example.com",
  },
  {
    fName: "Karen",
    lName: "Taylor",
    username: "karentaylor",
    password: "password",
    email: "karentaylor@example.com",
  },
  {
    fName: "Chris",
    lName: "Wilson",
    username: "chriswilson",
    password: "password",
    email: "chriswilson@example.com",
  },
  {
    fName: "Amy",
    lName: "Martinez",
    username: "amymartinez",
    password: "password",
    email: "amymartinez@example.com",
  },
  {
    fName: "Ryan",
    lName: "Anderson",
    username: "ryananderson",
    password: "password",
    email: "ryananderson@example.com",
  },
  {
    fName: "Kelly",
    lName: "Clark",
    username: "kellyclark",
    password: "password",
    email: "kellyclark@example.com",
  },
  {
    fName: "Mark",
    lName: "Perez",
    username: "markperez",
    password: "password",
    email: "markperez@example.com",
  },
  {
    fName: "Laura",
    lName: "Garcia",
    username: "lauragarcia",
    password: "password",
    email: "lauragarcia@example.com",
  },
  {
    fName: "Eric",
    lName: "Rivera",
    username: "ericrivera",
    password: "password",
    email: "ericrivera@example.com",
  },
];
//raza
const products = [
  {
    name: "t-shirt",
    imageUrl:
      "https://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,q_auto:eco,so_0.1/0e744966-f8f8-4aae-97a5-2761f14798a6/dri-fit-mens-fitness-t-shirt-nhgSHx.jpg",

    size: "xs",
    price: 5,
    rating: 4.5,
    quantity: 100,
    category: "1",
    description: "this is new addition to collection",
  },
  {
    name: "t-shirt",
    imageUrl:
      "https://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,q_auto:eco,so_0.1/0e744966-f8f8-4aae-97a5-2761f14798a6/dri-fit-mens-fitness-t-shirt-nhgSHx.jpg",

    size: "s",
    price: 500,
    rating: 3.5,
    quantity: 10,
    category: "2",
    description: "this is new addition to collection",
  },
  {
    name: "jeans",
    imageUrl:
      "https://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,q_auto:eco,so_0.1/0e744966-f8f8-4aae-97a5-2761f14798a6/dri-fit-mens-fitness-t-shirt-nhgSHx.jpg",

    size: "l",
    price: 5,
    rating: 4.5,
    quantity: 100,
    category: "3",
    description: "this is new addition to collection",
  },
  {
    name: "Dress Shirt",
    imageUrl:
      "https://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,q_auto:eco,so_0.1/0e744966-f8f8-4aae-97a5-2761f14798a6/dri-fit-mens-fitness-t-shirt-nhgSHx.jpg",
    size: "xl",
    price: 55,
    rating: 5.0,
    quantity: 10,
    category: "1",
    description: "this is new addition to Shirts",
  },
  {
    name: "Polo Shirt",
    imageUrl:
      "https://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,q_auto:eco,so_0.1/0e744966-f8f8-4aae-97a5-2761f14798a6/dri-fit-mens-fitness-t-shirt-nhgSHx.jpg",
    size: "m",
    price: 55,
    rating: 5.0,
    quantity: 150,
    category: "3",
    description: "this is new addition to Shirts",
  },
  {
    name: "Short-Sleeve",
    imageUrl:
      "https://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,q_auto:eco,so_0.1/0e744966-f8f8-4aae-97a5-2761f14798a6/dri-fit-mens-fitness-t-shirt-nhgSHx.jpg",
    size: "l",
    price: 150,
    rating: 3.0,
    quantity: 50,
    category: "2",
    description: "this is new addition to Shirts",
  },
];
//Jon
const cart = [
  {
    purchased: true,
    billAddress: "123 Sesame St. New York, NY 10001",
    shipAddress: "123 Sesame St. New York, NY 10001",
    total: 100.0,
  },
  {
    purchased: true,
    billAddress: "1428 Elm St. Springwood, OH 43212",
    shipAddress: "1428 Elm St. Springwood, OH 43212",
    total: 50.0,
  },
  {
    purchased: true,
    billAddress: "124 Conch St., Bikini Bottom, Pacific Ocean",
    shipAddress: "124 Conch St., Bikini Bottom, Pacific Ocean",
    total: 25.0,
  },
  {
    purchased: false,
    billAddress: "742 Evergreen Terrace, Springfield, USA",
    shipAddress: "742 Evergreen Terrace, Springfield, USA",
    total: 75.0,
  },
  {
    purchased: false,
    billAddress: "31 Spooner Street, Quahog, Rhode Island",
    shipAddress: "31 Spooner Street, Quahog, Rhode Island",
    total: 69.69,
  },
];
//victor
const categories = [
  { name: "Men" },
  { name: "Women" },
  // { name: "Top" },
  // { name: "Bottom" },
  // { name: "Glasses" },
];

let cat_product = [{ product: 1, categoryId: 1 }];
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
      categories.map((cat) => {
        return Category.create(cat);
      })
    );

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
