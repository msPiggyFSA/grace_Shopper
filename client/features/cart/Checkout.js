import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = (prop) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();



  const currentCart = useSelector((state) => {
    return state.cart.currentCart;
  });
  console.log(currentCart);

  const currentUser = useSelector((state) => {
    return state.auth.me;
  });

  //console.log("This is current cart", currentCart);
  //console.log("This is current user", currentUser);
  const checkoutHandler = async () => {
    try {
      const response = await axios.post("../api/cartProducts");

      const data = response.data;
      console.log(data);
      //https://www.youtube.com/watch?v=hw6NCvu45JA
      await db.sync({force:true});
      return data;
    } catch (error) {
      console.log(error);
    }
  };
//use navigate to go to new page thank purchase
  return <button onClick={checkoutHandler}>Checkout</button>;
};

export default Checkout;
