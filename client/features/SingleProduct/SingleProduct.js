import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  fetchSingleProduct,
  deleteProduct,
  fetchAllProducts,
} from "../../app/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import Add2Cart from "../cart/Add2Cart";

import "./css/SingleProduct.css";
import CartDelete from "../cart/CartDelete";
// import EditProduct from "../../admin/EditProduct";

const SingleProduct = (props) => {
  const product = props.props;

  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.auth.me.admin);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    dispatch(fetchAllProducts());
  };

  return (
    <div className="product-list">
      <div onClick={() => navigate(`/product/${product.id}`)}>
        {product.name}: ${product.price}
      </div>

      {admin === true ? (
        <>
          <Add2Cart props={product} />{" "}
          <button onClick={() => handleDelete(product.id)}>❎</button>
          <button>
            <Link to={`/product/edit/${product.id}`}>EditProduct</Link>
          </button>
        </>
      ) : props.cart === "cart" ? (
        <CartDelete props={product} />
      ) : (
        <Add2Cart props={product} />
      )}
    </div>
  );
};

export default SingleProduct;
