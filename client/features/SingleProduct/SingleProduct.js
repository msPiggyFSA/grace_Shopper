import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { fetchSingleProduct } from "../../app/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import Add2Cart from "../cart/Add2Cart";
import "./css/SingleProduct.css";

const SingleProduct = (props) => {
  const product = props.props;
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  //   useEffect(() => {
  //     if (params === "number") {
  //       dispatch(fetchSingleProduct(params));
  //     }
  //   }, []);
  //   const single = useSelector((state) => {
  //     return state.products.singleProduct;
  //   });
  // console.log(product);
  return (
    <div className="product-list">
      <div onClick={() => navigate(`/product/${product.id}`)}>
        {product.name}
      </div>

      <Add2Cart />
    </div>
  );
};

export default SingleProduct;
