import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../app/slices/productsSlice";

/**
 * COMPONENT
 */
const Home = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const username = useSelector((state) => state.auth.me.username);
  const products = useSelector((state) => state.products.products[0]);
  // console.log(products);

  return (
    <div>
      <h3>Welcome, {username}</h3>
    </div>
  );
};

export default Home;
