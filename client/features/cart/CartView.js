import React from "react";
import { useSelector } from "react-redux";
import SingleProduct from "../SingleProduct/SingleProduct";
import { v4 as uuidv4 } from "uuid";
import CartLength from "./CartLength";
import CartDelete from "./CartDelete";
import CartTotal from "./CartTotal";
import Checkout from "./Checkout";

const CartView = (props) => {
  const currentCart = useSelector((state) => {
    return state.cart.currentCart;
  });

  return (
    <div>
      {currentCart.map((product) => {
        console.log(product, "this is product");
        return (
          <>
            <SingleProduct key={uuidv4()} props={product} />
            <CartDelete props={product} />
          </>
        );
      })}
      <CartTotal />
      {currentCart.length > 0 && <Checkout />}
    </div>
  );
};
export default CartView;
