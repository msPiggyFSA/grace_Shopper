import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import "./Footer.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="foot">
      <div>
        <Link to="/about" className="footer-link">
          About
        </Link>
        <Link to="/contact" className="footer-link">
          Contact
        </Link>
{/* 
        {
          <Link to="/feedback" className="footer-link">
            Feedback
          </Link>
        } */}
      </div>
      <div className="logo-container">
        <ExternalLink href="https://www.twitter.com">
          <motion.img
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ repeat: Infinity, duration: 1 }}
            src="assets/img/twitter-white.png"
            className="footer-logo"
          />
        </ExternalLink>
        <ExternalLink href="https://www.facebook.com">
          <motion.img
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ repeat: Infinity, duration: 1 }}
            src="assets/img/facebook-white.png"
            className="footer-logo"
          />
        </ExternalLink>
        <ExternalLink href="https://www.instagram.com">
          <motion.img
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ repeat: Infinity, duration: 1 }}
            src="assets/img/insta-white.png"
            className="footer-logo"
          />
        </ExternalLink>
      </div>
    </footer>
  );
};

export default Footer;
