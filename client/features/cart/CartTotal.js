import React from 'react'
import { useSelector } from "react-redux";

const CartTotal=()=> {
  const cartState = useSelector((state) => {
    return state.cart.currentCart;
  });

    const total = cartState.map((product) => {
      return product.price})

    let totalPrice = total.reduce((a, b) => {
      return a + b;
    },0);

  return (
    <div>Cart Total: $ {totalPrice}</div>
  )
};


export default CartTotal;
