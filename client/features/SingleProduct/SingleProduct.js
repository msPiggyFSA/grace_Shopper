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
import { motion } from "framer-motion";

const SingleProduct = (props) => {
  const product = props.props;

  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.auth.me.admin);

  const handleDelete = async (id) => {
    await dispatch(deleteProduct(id));
    await dispatch(fetchAllProducts());
  };

  // useEffect(()=>{
  //   dispatch(fetchAllProducts())
  // }, [])

  return (
    <div className="product-wrapper">
      <motion.div
        whileHover={{
          boxShadow: "0px 0px 8px rgb(255, 255, 255)",
          scale: 1.1,
        }}
        className="outer"
        onClick={(event) => {
          console.log(event.target.nodeName);
          if (event.target.nodeName === "DIV") {
            navigate(`/product/${product.id}`);
          }
        }}
      >
        <div className="content">
          <span className="icon">JUST IN</span>
          <img src={product.imageUrl} className="product-img" />

          <h1>{product.name}</h1>
          <p className="prod-description">{product.description}</p>

          <div className="prod-button">
            <p>${product.price}</p>
            <p>
              {admin === true ? (
                <>
                  <button onClick={() => handleDelete(product.id)}>X</button>
                  <button>
                    <Link to={`/product/edit/${product.id}`}>EditProduct</Link>
                  </button>
                </>
              ) : props.cart === "cart" ? (
                <CartDelete props={product} />
              ) : (
                <Add2Cart props={product} />
              )}
            </p>
          </div>
        </div>
      </motion.div>
      <p className="footer">More description</p>
    </div>

    // <div className="product-list">
    //   <div onClick={() => navigate(`/product/${product.id}`)}>
    //     {product.name}: ${product.price}
    //   </div>

    //   {admin === true ? (
    //     <>
    //       <Add2Cart props={product} />{" "}
    //       <button onClick={() => handleDelete(product.id)}>X</button>
    //       <button>
    //         <Link to={`/product/edit/${product.id}`}>EditProduct</Link>
    //       </button>
    //     </>
    //   ) : props.cart === "cart" ? (
    //     <CartDelete props={product} />
    //   ) : (
    //     <Add2Cart props={product} />
    //   )}
    // </div>
  );
};

export default SingleProduct;
