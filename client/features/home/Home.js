import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../app/slices/productsSlice";
import { v4 as uuidv4 } from "uuid";
import SingleProduct from "../SingleProduct/SingleProduct";
import {
  fetchAllCartProducts,
  fetchAllCarts,
  fetchAllThemMF,
} from "../../app/slices/cartSlice";
import { motion } from "framer-motion";
import { container } from "../variants.js";
import { cartActions } from "../../app/slices/cartSlice";
import "./css/Home.css";

/**
 * COMPONENT
 */
const Home = (props) => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.me.username);
  const userid = useSelector((state) => state.auth.me.id);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  useEffect(() => {
    isLoggedIn && dispatch(cartActions.updateUserCart(userid));
    dispatch(fetchAllCartProducts());
    dispatch(fetchAllProducts());
    dispatch(fetchAllCarts());
    dispatch(fetchAllThemMF());

    //make sure this dispatch isnt calling another dispatch (infinte loop);
  }, []);

  const products = useSelector((state) => {
    return state.products.products.flat();
  });

  const orders = useSelector((state) => {
    return state.cart.allCarts.flat();
  });

  return (
    <motion.div
      variants={container}
      initial="initial"
      animate="visible"
      exit="exit"
      className="home-container"
    >
      <h3 className="welcome-msg">Welcome, {username}</h3>
      <div className="product-container">
        {products ? (
          products.map((product) => {
            return <SingleProduct key={uuidv4()} props={product} />;
          })
        ) : (
          <div>Nothing to see here</div>
        )}
      </div>
    </motion.div>
  );
};

export default Home;
