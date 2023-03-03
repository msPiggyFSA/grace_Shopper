import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../../app/slices/productsSlice";
import Add2Cart from "../cart/Add2Cart";

import "./css/SingleProdView.css";

const SingleProductView = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.auth.me.admin === true);

  useEffect(() => {
    dispatch(fetchSingleProduct(params.id));
  }, []);

  const single = useSelector((state) => {
    return state.products.singleProduct;
  });
  console.log(single);
  return (
    <div>
      <h1>{single.name}</h1>
      <img src={single.imageUrl} />
      <h2>
        {single.price}
        <Add2Cart props={single} />
      </h2>
      <h3>{single.rating}</h3>
      <p>{single.description}</p>
    </div>
  );
};

export default SingleProductView;
