import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../footer/Contact";
import About from "../footer/About";
import Refund from "../footer/Refund";
import Home from "../home/Home";
import SingleProductView from "../SingleProduct/SingleProductView";

const ReactRoute = () => {
  return (
    <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/refund" element={<Refund />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product/:id" element={<SingleProductView />} />
    </Routes>
  );
};

export default ReactRoute;
