import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <Link to="/about" className="footer-link">
          About
        </Link>
        <Link to="/contact" className="footer-link">
          Contact
        </Link>
        <Link to="/refund" className="footer-link">
          Refund
        </Link>
      </div>
      <div className="logo-container">
        <ExternalLink href="https://www.twitter.com">
          <img src="assets/img/twitter.png" className="footer-logo" />
        </ExternalLink>
        <ExternalLink href="https://www.facebook.com">
          <img src="assets/img/facebook.png" className="footer-logo" />
        </ExternalLink>
        <ExternalLink href="https://www.instagram.com">
          <img src="assets/img/insta.jpg" className="footer-logo" />
        </ExternalLink>
      </div>
    </footer>
  );
};

export default Footer;
