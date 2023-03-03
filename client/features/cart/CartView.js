import React from "react";
import { useSelector } from "react-redux";
import SingleProduct from "../SingleProduct/SingleProduct";
import { v4 as uuidv4 } from "uuid";
import CartLength from "./CartLength";
import CartDelete from "./CartDelete";
import Checkout from "./Checkout";

const CartView = (props) => {
  const currentCart = useSelector((state) => {
    return state.cart.currentCart;
  });

  return (
    <div>
      {currentCart.length > 0 ? (
        currentCart.map((product) => {
          console.log(product, "this is product");
          return (
            <div key={uuidv4()}>
              <SingleProduct cart="cart" props={product} />
              {/* <CartDelete props={product} /> */}
            </div>
          );
        })
      ) : (
        <div>Add items to your cart!</div>
      )}
      {currentCart.length > 0 && <Checkout />}
    </div>
  );
};
export default CartView;
