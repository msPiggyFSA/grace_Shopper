import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../app/slices/productsSlice";
import { v4 as uuidv4 } from "uuid";

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
    <div
      onClick={() => {
        console.log(products);
      }}
    >
      <h3>Welcome, {username}</h3>
      {products.map((product) => {
        return <div key={uuidv4()}>{product.name}</div>;
      })}
    </div>
  );
};

export default Home;
