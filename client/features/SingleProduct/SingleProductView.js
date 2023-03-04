import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../../app/slices/productsSlice";
import Add2Cart from "../cart/Add2Cart";
import { motion } from "framer-motion";
import { container } from "../variants";

import "./css/SingleProdView.css";

const SingleProductView = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.auth.me.admin === true);
  const productsLength = useSelector((state) => {
    return state.products.products.flat().length;
  });

  console.log(productsLength);

  useEffect(() => {
    dispatch(fetchSingleProduct(params.id));
  }, []);

  const nextButton = () => {
    if (Number(params.id) < productsLength) {
      navigate("/product/" + (Number(params.id) + 1));
    } else {
      navigate("/product/" + 1);
    }
  };

  const prevButton = () => {
    if (Number(params.id) > 1) {
      navigate("/product/" + (Number(params.id) - 1));
    } else {
      navigate("/product/" + productsLength);
    }
  };

  const single = useSelector((state) => {
    return state.products.singleProduct;
  });
  console.log(single);
  return (
    <motion.div
      variants={container}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <h1>{single.name}</h1>
      <img src={single.imageUrl} />
      <h2>
        {single.price}
        <Add2Cart props={single} />
      </h2>
      <h3>{single.rating}</h3>
      <p>{single.description}</p>
      <button onClick={prevButton}>Previous</button>
      <button onClick={nextButton}>Next</button>
    </motion.div>
  );
};

export default SingleProductView;
