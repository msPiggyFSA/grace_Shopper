import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
import Cart from "../cart/Cart";
import { motion } from "framer-motion";
import "./Navbar.css";
import { navHover } from "../variants.js";
import axios from "axios";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAdmin = useSelector((state) => state.auth.me.admin);
  const currentUser = useSelector((state) => state.auth.me);
  const currentCart = useSelector((state) => {
    return state.cart.currentCart;
  });

  console.log("#########################CURRENT USER", currentUser);

  const total = currentCart.map((product) => {
    return product.price;
  });

  let totalPrice = total.reduce((a, b) => {
    return a + b;
  }, 0);

  const logoutAndRedirectHome = async () => {
    dispatch(logout());
    navigate("/login");
    try {
      const cart = await axios.post("/api/carts", {
        purchased: false,
        billAddress: currentUser.billing,
        shipAddress: currentUser.shipping,
        total: totalPrice,
        userId: currentUser.id,
      });
      console.log(cart.data);

      currentCart.map(async (product) => {
        await axios.post("/api/cartProducts", {
          cartId: cart.data.id,
          productId: product.id,
        });
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <motion.div
      initial={{ y: -300 }}
      animate={{ y: 0 }}
      transition={{ duration: 2 }}
      className="navbar"
    >
      <h1 className="title">
        THE
        <motion.span
          animate={{ color: ["#ff0000", "#000000"] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          {" "}
          AMAZON{" "}
        </motion.span>
        KILLER
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
        {isLoggedIn && isAdmin ? (
          <div>
            <div>
              {/* <button type="button" onClick={logoutAndRedirectHome}>
                Logout
              </button> */}
              <Link to={`/admin/users/${currentUser.id}`} className="nav-link">
                Account
              </Link>
              <Link to="/addprod" className="nav-link">
                add new product
              </Link>
              <Link to="/admin/viewAllUsers" className="nav-link">
                view all users
              </Link>
              <Link to="/feedback" className="nav-link">
                Feedback
              </Link>
              <button type="button" onClick={logoutAndRedirectHome}>
                Logout
              </button>
            </div>
          </div>
        ) : isLoggedIn ? (
          <>
            <Link to={`/users/${currentUser.id}`} className="nav-link">
              Account
            </Link>
            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="nav-link">
            <motion.span whileHover={navHover} whileTap={{ scale: 1.5 }}>
              Login/Signup
            </motion.span>
          </Link>
        )}
        {/* {isLoggedIn && isAdmin ? (
          (
            <div>
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
        )} */}
        <Cart />
      </nav>
    </motion.div>
  );
};

export default Navbar;
