import React from "react";
import { useSelector, useDispatch } from "react-redux";

const XButton = (props) => {
  const state = useSelector((state) => {
    return state.cart.currentCart;
  });

  const xHandler = () => {
    console.log(state);
  };
  return <button>X</button>;
};

export default XButton;
