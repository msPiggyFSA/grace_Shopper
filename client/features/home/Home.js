import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../app/slices/productsSlice";
import { v4 as uuidv4 } from "uuid";
import SingleProduct from "../SingleProduct/SingleProduct";
import { fetchAllCarts } from "../../app/slices/cartSlice";
import { motion } from "framer-motion";
import { container } from "../variants.js";

/**
 * COMPONENT
 */
const Home = (props) => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.me.username);
  const userid = useSelector((state) => state.auth.me.id);
  console.log(userid);
  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchAllCarts());

    //make sure this dispatch isnt calling another dispatch (infinte loop);
  }, []);

  const products = useSelector((state) => {
    return state.products.products.flat();
  });

  const orders = useSelector((state) => {
    return state.cart.allCarts.flat();
  });

  console.log(orders);

  return (
    <motion.div
      variants={container}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <h3>Welcome, {username}</h3>
      {products &&
        products.map((product) => {
          return <SingleProduct key={uuidv4()} props={product} />;
        })}
    </motion.div>
  );
};

export default Home;
