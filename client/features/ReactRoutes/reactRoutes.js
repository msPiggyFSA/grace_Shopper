import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../footer/Contact";
import About from "../footer/About";
import Refund from "../footer/Refund";
import Home from "../home/Home";
import SingleProductView from "../SingleProduct/SingleProductView";
import Category from "../section/Category";
import CartView from "../cart/CartView";

const ReactRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/refund" element={<Refund />} />
      <Route path="/product/:id" element={<SingleProductView />} />
      <Route path="/category/:id" element={<Category />} />
      <Route path="/cart" element={<CartView />} />
    </Routes>
  );
};

export default ReactRoute;
