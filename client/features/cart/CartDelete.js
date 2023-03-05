import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../app/slices/cartSlice";

const CartDelete = (props) => {
  const obj = props.props;
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(cartActions.deleteCartProduct(obj));
    dispatch;
  };
  return (
    <i className="cart-icon ion-bag" onClick={handleDelete}>
      Remove From Cart
    </i>
  );
};

export default CartDelete;
