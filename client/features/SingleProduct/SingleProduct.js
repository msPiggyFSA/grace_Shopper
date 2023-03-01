import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchSingleProduct } from "../../app/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";

const SingleProduct = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (params === "number") {
      dispatch(fetchSingleProduct(params));
    }
  }, []);
  const single = useSelector((state) => {
    return state.products.singleProduct;
  });

  return <div onClick={() => console.log(single)}>Item</div>;
};

export default SingleProduct;
