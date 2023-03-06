import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticate } from "../../app/store";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { createNewUser } from "../../app/slices/userSlice";

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const SignUpForm = ({ name, displayName }) => {
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

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    const fName = evt.target.fName.value
    const lName = evt.target.lName.value
    const email = evt.target.email.value
    const billing = evt.target.billing.value
    const shipping = evt.target.shipping.value

    console.log(formName, username, password, ' thisis formname, user, password')
    dispatch(authenticate({ username, password, fName, lName, email, billing, shipping, method: formName }));
    // dispatch(createNewUser({form}))
    if (!error) {
      dispatch(createNewUser({form}))
      navigate('/home')
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
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 50, duration: 1.5 }}
    >
      <form onSubmit={handleSubmit} name={name}>
        <div>
        <div>
          <label htmlFor="fName">
            <small>First Name</small>
          </label>
            <input
              name="fName"
              type="fName"
              value={form.fName}
              onChange={changeValue("fName")}
            />
        </div>
        <div>
          <label htmlFor="lName">
            <small>Last Name</small>
          </label>
            <input
              name="lName"
              type="lName"
              value={form.lName}
              onChange={changeValue("lName")}
            />
        </div>
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <input
            name="username"
            type="text"
            value={form.username}
            onChange={changeValue("username")}
          />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={changeValue("password")}
          />
        </div>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input
            name="email"
            type="text"
            value={form.email}
            onChange={changeValue("email")}
          />
        </div>
        <div>
          <label htmlFor="shipping">
            <small>Shipping Address</small>
          </label>
          <input
            name="shipping"
            type="text"
            value={form.shipping}
            onChange={changeValue("shipping")}
          />
        </div>
        <div>
          <label htmlFor="billing">
            <small>Billing Address</small>
          </label>
          <input
            name="billing"
            type="text"
            value={form.billing}
            onChange={changeValue("billing")}
          />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && <div> {error} </div>}
      </form>
    </motion.div>
  );
};

export default SignUpForm;
