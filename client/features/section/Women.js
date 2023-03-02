import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../app/slices/productsSlice";
import SingleProduct from "../SingleProduct/SingleProduct";
import { v4 as uuidv4 } from "uuid";

/**
 * COMPONENT
 */
const Women = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const username = useSelector((state) => state.auth.me.username);
  const products = useSelector((state) => {
    // state.products.products.filter((product) => {
    //   product.categoryId === 1;
    // });
    return state.products.products.flat();
  });

  return (
    <div>
      <h3
        onClick={() => {
          console.log(products);
        }}
      >
        Welcome, {username}
      </h3>
      {products.map((product) => {
        if (product.categoryId === 2) {
          return <SingleProduct key={uuidv4()} props={product} />;
        }
      })}
    </div>
  );
};

export default Women;
