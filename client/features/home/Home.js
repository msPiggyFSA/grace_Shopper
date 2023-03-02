import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../app/slices/productsSlice";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import SingleProduct from "../SingleProduct/SingleProduct";

/**
 * COMPONENT
 */
const Home = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const username = useSelector((state) => state.auth.me.username);
  const products = useSelector((state) => {
    return state.products.products.flat();
  });

  return (
    <div>
      <h3>Welcome, {username}</h3>
      {products.map((product) => {
        return <SingleProduct key={uuidv4()} props={product} />;
      })}
    </div>
  );
};

export default Home;
