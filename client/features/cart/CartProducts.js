import React from "react";
import { useSelector } from "react-redux";
import SingleProduct from "../SingleProduct/SingleProduct";
import { v4 as uuidv4 } from "uuid";
import CartLength from "./CartLength";
import CartDelete from "./CartDelete";
import CartTotal from "./CartTotal";
import Checkout from "./Checkout";

const CartProducts = () => {
  const currentCart = useSelector((state) => {
    return state.cart.currentCart;
  });
  console.log(currentCart);

  return (
    <div>
      <p>hi</p>
    </div>
  );
};
export default CartProducts;
