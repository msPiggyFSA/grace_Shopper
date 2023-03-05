import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SingleProduct from "../SingleProduct/SingleProduct";
import { v4 as uuidv4 } from "uuid";
import { cartActions } from "../../app/slices/cartSlice";
import CartTotal from "./CartTotal";
import Checkout from "./Checkout";
import OrderHistory from "./OrderHistory";
import axios from "axios";
import { motion } from "framer-motion";
import { container } from "../variants";

const CartView = (props) => {
  const dispatch = useDispatch();
  const currentCart = useSelector((state) => {
    return state.cart.currentCart;
  });

  const me = useSelector((state) => {
    return state.auth.me;
  });

  const allCarts = useSelector((state) => {
    return state.cart.allCarts.flat();
  });

  const fulfilled = useSelector((state) => {
    return state.cart.fulfilled.flat();
  });

  const unfulfilled = useSelector((state) => {
    return state.cart.unfulfilled.flat();
  });

  const userfullfilled = useSelector((state) => {
    return state.cart.userfulfilled.flat();
  });

  // const meOrders = allCarts.flat().filter((cart) => {
  //   console.log(cart);
  //   console.log(me.id);
  //   return cart.userId === me.id;
  // });

  // const meOrdersFulfilled = meOrders.filter((cart) => cart.purchased === true);
  // console.log(meOrdersFulfilled);

  // const unfulfilled = meOrders.filter((cart) => cart.purchased === false);

  // useEffect(() => {
  //   dispatch(cartActions.updateUserCart(me.id));
  // }, []);

  return (
    <motion.div
      variants={container}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      {currentCart.map((product) => {
        console.log(userfullfilled);

        return (
          <div key={uuidv4()}>
            <SingleProduct cart="cart" props={product} />
            {/* <CartDelete props={product} /> */}
          </div>
        );
      })}
      {currentCart.length === 0 && <div>Add items to your cart!</div>}
      {currentCart.length > 0 && <CartTotal />}
      {currentCart.length > 0 && <Checkout currentCart={currentCart} />}
      {/* {meOrdersFulfilled.length > 0 && (
        <OrderHistory props={meOrdersFulfilled} />
      )} */}
      {/* <Checkout currentCart={currentCart} /> */}
    </motion.div>
  );
};
export default CartView;
