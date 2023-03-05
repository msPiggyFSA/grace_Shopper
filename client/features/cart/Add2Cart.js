import React from "react";
import { cartActions } from "../../app/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import "../SingleProduct/css/SingleProduct.css";

const Add2Cart = (props) => {
  const obj = props.props;
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart.allCarts);
  const user = useSelector((state) => {
    return state.auth.me;
  });
  // console.log(user);

  const addHandler = () => {
    dispatch(cartActions.addToCart(obj));
    console.log(cartState);
  };
  return (
    <i className="cart-icon ion-bag" onClick={addHandler}>
      Add to Cart
    </i>
  );
};

export default Add2Cart;
