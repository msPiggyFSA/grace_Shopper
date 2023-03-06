import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store.js";
import App from "./app/App";
import { BrowserRouter as Router } from "react-router-dom";
import "./app/body.css";
import Footer from "./features/footer/Footer.js";
import Navbar from "./features/navbar/Navbar.js";

const root = createRoot(document.getElementById("app"));

root.render(
  <Router>
    <Provider store={store}>
      <Navbar />
      <App />
      <Footer />
    </Provider>
  </Router>
);
