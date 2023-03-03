import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../app/slices/cartSlice";

const Checkout = (props) => {
  //navigate to end of transactiopn page "thank you for shopping, click here to return to homepage" or "...click here to continue shopping"
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentCart = useSelector((state) => {
    return state.cart.currentCart;
  });
  // console.log(currentCart);

  const currentUser = useSelector((state) => {
    return state.auth.me;
  });

  //console.log("This is current cart", currentCart);
  //console.log("This is current user", currentUser);
  const checkoutHandler = async () => {
    console.log("this is current cart", currentCart);
    cartCheckOut();
  };
  // try {
  //        const cart = await Cart.findAll(
  //        );

  //       const data = response.data;
  //       console.log("this is", data);
  //       return data;
  //     } catch (error) {
  //       console.log(error);
  //     }
  // const checkoutHandler = async () => {
  //   dispatch(checkOut(props));
  //   console.log("this is delete button log", props);
  // };
  //use navigate to go to new page thank purchase

  return <button onClick={checkoutHandler}>Checkout</button>;
};

export default Checkout;
