import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../../app/slices/productsSlice";
import Add2Cart from "../cart/Add2Cart";
import { motion } from "framer-motion";
import { container } from "../variants";
// import "./css/SingleProduct.css";

import "./css/SingleProdView.css";

const SingleProductView = () => {
  const [direction, setDirection] = useState("");
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
    setDirection("next");
    console.log(direction);
  };

  const prevButton = (event) => {
    if (Number(params.id) > 1) {
      navigate("/product/" + (Number(params.id) - 1));
    } else {
      navigate("/product/" + productsLength);
    }

    console.log(event.target.innerText);
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
      exit={direction === "next" ? "next" : "exit"}
      // className="card"
    >
      <div className="card">
        <div className="left">
          <img src={single.imageUrl} />
          <div>
            <button onClick={prevButton}>Previous</button>
            <button onClick={nextButton}>Next</button>
          </div>
        </div>
        <div className="right">
          <div className="product-info">
            <div className="product-name">
              <h1>{single.name}</h1>
            </div>
            <div className="details">
              <h3>Get Your Game On, Dawg</h3>
              <h2>{single.name}</h2>
              <p>{single.description}</p>
            </div>

            <span className="prod-button">
              <p>{single.price}</p>
              <p>
                <Add2Cart props={single} />
              </p>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleProductView;
