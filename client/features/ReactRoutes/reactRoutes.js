import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Contact from "../footer/Contact";
import About from "../footer/About";
import Refund from "../footer/Refund";
import Home from "../home/Home";
import SingleProductView from "../SingleProduct/SingleProductView";
import Category from "../section/Category";
import CartView from "../cart/CartView";
import AddProduct from "../admin/AddProduct";
import AuthForm from "../auth/AuthForm";
import SignUpForm from "../auth/SignUpForm";
// import CartProducts from "../cart/CartProduct";
import EditProduct from "../admin/EditProduct";
import UserView from "../user/UserView";
import { AnimatePresence } from "framer-motion";

const ReactRoute = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/addprod" element={<AddProduct />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/refund" element={<Refund />} />
      <Route path="/product/:id" element={<SingleProductView />} />
      <Route path="/category/:id" element={<Category />} />
      <Route path="/cart" element={<CartView />} />
      {/* <Route path="/cartProducts" element={<CartProducts />} /> */}
      <Route path="/product/edit/:id" element={<EditProduct/>}/>
      <Route
        path="/login"
        element={<AuthForm name="login" displayName="Login" />}
      />
      <Route
        path="/signup"
        element={<SignUpForm name="signup" displayName="Signup" />}
      />
      <Route
        path="/user"
        element={<UserView />}
      />
    </Routes>
  );
};

export default ReactRoute;
