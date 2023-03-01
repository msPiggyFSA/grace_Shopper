import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Refund from "./Refund";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/refund">Refund</Link>
    </footer>
  );
};

export default Footer;
