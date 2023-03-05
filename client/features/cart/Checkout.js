import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../app/slices/cartSlice";

const Checkout = (props) => {
  //navigate to end of transactiopn page "thank you for shopping, click here to return to homepage" or "...click here to continue shopping"
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentCart = useSelector((state) => {
    return state.cart.currentCart;
  });

  const allUsersProducts = useSelector((state) => {
    return state.cart.allCartProducts.flat();
  });
  const currentUser = useSelector((state) => {
    return state.auth.me;
  });

  const total = currentCart.map((product) => {
    return product.price;
  });

  let totalPrice = total.reduce((a, b) => {
    return a + b;
  }, 0);

  const checkoutHandler = async () => {
    console.log(currentUser);
    console.log(currentCart);
    console.log(allUsersProducts);
    try {
      const cart = await axios.post("/api/carts", {
        purchased: true,
        billAddress: currentUser.billing,
        shipAddress: currentUser.shipping,
        total: totalPrice,
        userId: currentUser.id,
      });
      console.log(cart.data);

      currentCart.map(async (product) => {
        await axios.post("/api/cartProducts", {
          cartId: cart.data.id,
          productId: product.id,
        });
      });
    } catch (err) {
      console.log(err);
    }
    dispatch(cartActions.checkedOut());
  };

  //use navigate to go to new page thank purchase

  return <button onClick={checkoutHandler}>Checkout</button>;
};

export default Checkout;
