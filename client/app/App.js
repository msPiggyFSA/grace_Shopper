import React from "react";
import Navbar from "../features/navbar/Navbar";
import AppRoutes from "./AppRoutes";
import Footer from "../features/footer/Footer";
import ReactRoutes from "../features/ReactRoutes/reactRoutes";

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <ReactRoutes />
      <Footer />
    </div>
  );
};

export default App;
