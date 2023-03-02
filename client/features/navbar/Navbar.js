import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
import Cart from "../cart/Cart";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div>
      <h1>FS-App-Template</h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/category/1">Men</Link>
        <Link to="/category/2">Women</Link>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login/Signup</Link>
            {/* <Link to="/signup">Sign Up</Link> */}
          </div>
        )}
        <Cart />
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
