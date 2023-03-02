import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { fetchSingleProduct, deleteProduct, fetchAllProducts } from "../../app/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import Add2Cart from "../cart/Add2Cart";

import "./css/SingleProduct.css";

const SingleProduct = (props) => {
  const product = props.props;
  console.log(product);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.auth.me.admin);
  console.log(admin)
  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
    dispatch(fetchAllProducts());
  }

  console.log(product);

  return (
    <div className="product-list">
      <div onClick={() => navigate(`/product/${product.id}`)}>
        {product.name}
      </div>

      
      {admin===true?
      <><Add2Cart props={product} /><button onClick={() => handleDelete(product.id)}>X</button></>:
      <Add2Cart props={product} />}
      
    </div>
  );
};

export default SingleProduct;
