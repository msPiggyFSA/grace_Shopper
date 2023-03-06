import React from "react";
import Navbar from "../features/navbar/Navbar";
import AppRoutes from "./AppRoutes";
import Footer from "../features/footer/Footer";
import ReactRoutes from "../features/ReactRoutes/reactRoutes";
import "./body.css";

const App = () => {
  return (
    <div className="body-ig">
      {/* <Navbar /> */}
      <ReactRoutes />
    </div>
    //  <><Footer /></>
  );
};

export default App;
