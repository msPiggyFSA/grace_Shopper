import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../footer/Contact";
import About from "../footer/About";
import Refund from "../footer/Refund";
import Home from "../home/Home";
const ReactRoute = () => {
  return (
    <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/refund" element={<Refund />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default ReactRoute;
