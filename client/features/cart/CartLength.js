import React from "react";
import { useSelector } from "react-redux";

const CartLength = () => {
  const cartState = useSelector((state) => {
    return state.cart.currentCart;
  });

  return (
    <div>
      <p>{cartState.length}</p>
    </div>
  );
};

export default CartLength;
