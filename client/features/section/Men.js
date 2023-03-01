import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../app/slices/productsSlice";

import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

/**
 * COMPONENT
 */
const Men = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const username = useSelector((state) => state.auth.me.username);
  const products = useSelector((state) => {
    state.products.products.filter((product) => {
      product.categoryId === 2;
    });
    console.log("filtered products", state.products.products);
    return state.products.products.flat();
  });

  return (
    <div
      onClick={() => {
        // console.log(products);
      }}
    >
      <h3>Welcome, {username}</h3>
      {products.map((product) => {
        return (
          <>
            <div class="card">
              <p>{product.name}</p>
              <p>{product.imageUrl}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
              <button>product Details</button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Men;
