import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticate } from "../../app/store";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { container } from "../variants.js";
import "./css/Auth.css";
import { createNewUser } from "../../app/slices/userSlice";

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const Combined = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    fName: "",
    lName: "",
  });

  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    console.log(username, password, formName);
    dispatch(authenticate({ username, password, method: formName }));
    if (!error) {
      navigate("/home");
    } else {
      // navigate("/home");
    }
    console.log(error);
  };

  const handleSignupSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    const fName = evt.target.fName.value;
    const lName = evt.target.lName.value;
    const email = evt.target.email.value;
    const shipping = evt.target.shipping.value;
    const billing = evt.target.billing.value;

    dispatch(
      authenticate({
        username,
        password,
        fName,
        lName,
        email,
        shipping,
        billing,
        method: formName,
      })
    );
    // dispatch(createNewUser({form}))
    if (!error) {
      dispatch(createNewUser({ form }));
      navigate("/home");
    } else {
      // navigate("/home");
    }

    console.log(error);
  };

  const changeValue = (prop) => (event) => {
    setForm({
      ...form,
      [prop]: event.target.value,
    });
  };

  return (
    <motion.div
      variants={container}
      initial="initial"
      animate="visible"
      exit="exit"
      className="login-container"
    >
      <div className="main-container">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <label htmlFor="chk" aria-hidden="true" className="auth-label">
            Sign up
          </label>
          <form onSubmit={handleSignupSubmit} name="signup">
            <input
              name="fName"
              type="fName"
              value={form.fName}
              onChange={changeValue("fName")}
              className="form-input"
              placeholder="First Name"
            />

            <input
              name="lName"
              type="lName"
              value={form.lName}
              onChange={changeValue("lName")}
              className="form-input"
              placeholder="Last Name"
            />

            <input
              name="username"
              type="text"
              value={form.username}
              onChange={changeValue("username")}
              className="form-input"
              placeholder="username"
            />

            <input
              name="password"
              type="password"
              value={form.password}
              onChange={changeValue("password")}
              className="form-input"
              placeholder="password"
            />

            <input
              name="email"
              type="text"
              value={form.email}
              onChange={changeValue("email")}
              className="form-input"
              placeholder="email"
            />

            <input
              name="billing"
              type="billing"
              value={form.billing}
              onChange={changeValue("billing")}
              className="form-input"
              placeholder="Billing Address"
            />

            <input
              name="shipping"
              type="shipping"
              value={form.shipping}
              onChange={changeValue("shipping")}
              className="form-input"
              placeholder="Shipping Address"
            />

            <input
              name="shipping"
              type="checkbox"
              value={form.billing}
              onChange={changeValue("shipping")}
              className="form-input"
            />
            <label htmlFor="shipping">
              <small>My billing and shipping address are the same</small>
            </label>

            <button type="submit" className="btn-form">
              Sign Up
            </button>

            {/* {error && <div> {error} </div>} */}
          </form>
        </div>

        <div className="login">
          <form onSubmit={handleLoginSubmit} name="login">
            <label htmlFor="chk" aria-hidden="true" className="auth-label">
              Login
            </label>
            <input
              name="username"
              type="text"
              placeholder="username"
              className="form-input"
            />
            <input
              name="password"
              type="password"
              placeholder="password"
              className="form-input"
            />
            <button className="btn-form">Login</button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Combined;
