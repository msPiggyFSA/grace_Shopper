import React from "react";
import { cartActions } from "../../app/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Add2Cart = (props) => {
  const obj = props.props;
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart.currentCart);

  const addHandler = () => {
    dispatch(cartActions.addToCart(obj));
    console.log(obj);
  };
  return (
    <div>
      <button onClick={addHandler}>Add to Cart 🛒</button>;
    </div>
  );
};

export default Add2Cart;
