import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
import Cart from "../cart/Cart";
import { motion } from "framer-motion";
import "./Navbar.css";
import { navHover } from "../variants.js";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAdmin = useSelector((state) => state.auth.me.admin);
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <motion.div
      initial={{ y: -300 }}
      animate={{ y: 0 }}
      transition={{ duration: 2 }}
      className="navbar"
    >
      <h1 className="title">
        Lets
        <motion.span
          animate={{ color: ["#ff0000", "#000000"] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          {" "}
          F{" "}
        </motion.span>
        Go!!!!
      </h1>
      <nav className="nav-portion">
        <Link to="/home" className="nav-link">
          <motion.span whileHover={navHover} whileTap={{ scale: 1.5 }}>
            Home
          </motion.span>
        </Link>
        <Link to="/category/1" className="nav-link">
          <motion.span whileHover={navHover} whileTap={{ scale: 1.5 }}>
            Men
          </motion.span>
        </Link>
        <Link to="/category/2" className="nav-link">
          <motion.span whileHover={navHover} whileTap={{ scale: 1.5 }}>
            Women
          </motion.span>
        </Link>
        {isLoggedIn ? (
          (
            <div>
              {/* The navbar will show these links after you log in */}
              <button type="button" onClick={logoutAndRedirectHome}>
                Logout
              </button>
            </div>
          ) && isAdmin === true ? (
            <>
              <Link to="/addprod">add new product</Link>
              <button type="button" onClick={logoutAndRedirectHome}>
                Logout
              </button>
            </>
          ) : (
            <div>
              {/* The navbar will show these links before you log in */}
              <Link to="/login" className="nav-link">
                Login/Signup
              </Link>
            </div>
          )
        ) : (
          <>
            <Link to="/login" className="nav-link">
              <motion.span whileHover={navHover}>Login/Signup</motion.span>
            </Link>
          </>
        )}
        <Cart />
      </nav>
      {/* <hr /> */}
    </motion.div>
  );
};

export default Navbar;
