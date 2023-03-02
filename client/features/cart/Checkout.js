import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const Checkout = () => {
  const currentCart = useSelector((state) => {
    return state.cart.currentCart;
  });

  const currentUser = useSelector((state) => {
    return state.auth.me;
  });
  const checkoutHandler = async () => {
    try {
      await axios.post("");
    } catch (error) {
      console.log(error);
    }
  };

  return <button onClick={checkoutHandler}>Checkout</button>;
};

export default Checkout;
