import React from "react";

import Navbar from "../features/navbar/Navbar";
import Contact from "../features/footer/Contact";
import Refund from "../features/footer/Refund";
import AppRoutes from "./AppRoutes";
import Footer from "../features/footer/Footer";
import { Routes } from "react-router-dom";
import About from "../features/footer/About";
import ReactRoutes from "../features/ReactRoutes/reactRoutes";

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <Footer />
      <ReactRoutes />
    </div>
  );
};

export default App;
