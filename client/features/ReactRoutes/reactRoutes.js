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
import UserProfile from "../user/UserProfile";
import EditUserProfilePage from "../user/EditUserProfilePage";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import AdminSingleUser from "../admin/AdminSingleUser";
import AdminAllUserView from "../admin/AdminAllUserView";
import Combined from "../auth/Combined.js";

const ReactRoute = () => {
  const isAdmin = useSelector((state) => state.auth.me.admin) === true;
  const location = useLocation();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  return (
    <AnimatePresence node="wait">
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/product/:id" element={<SingleProductView />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/cart" element={<CartView />} />
        {/* <Route path="/cartProducts" element={<CartProducts />} /> */}
        <Route path="/login" element={<Combined />} />
        <Route path="/signup" element={<Combined />} />
        <Route path="/users/:id" element={<UserProfile />} />
        {isLoggedIn && isAdmin ? (
          <>
            <Route path="/addprod" element={<AddProduct />} />
            <Route path="/product/edit/:id" element={<EditProduct />} />
            <Route path="/users/:id" element={<UserProfile />} />
            <Route path="/viewAllUsers" element={<AdminAllUserView />} />
            <Route path="/admin/users/:id" element={<AdminSingleUser />} />
          </>
        ) : isLoggedIn ? (
          <Route path="/users/:id" element={<UserProfile />} />
        ) : (
          <></>
        )}
      </Routes>
    </AnimatePresence>
  );
};

export default ReactRoute;
