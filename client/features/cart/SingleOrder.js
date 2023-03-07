import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAllCartProducts } from "../../app/slices/cartSlice";
import SingleProduct from "../SingleProduct/SingleProduct";

const SingleOrder = (props) => {
  const [orderProd, setOrderProd] = useState([]);
  const params = useParams();
  const products = useSelector((state) => {
    return state.products.products.flat();
  });
  const cartProducts = useSelector((state) => {
    return state.cart.allCartProducts.flat();
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCartProducts());
    const id = Number(params.id);

    const userOrder = cartProducts.filter((product) => product.cartId === id);

    const idk = () => {
      const orderProducts = [];

      for (let i = 0; i < userOrder.length; i++) {
        for (let j = 0; j < products.length; j++) {
          if (userOrder[i].productId === products[j].id) {
            orderProducts.push(products[j]);
          }
        }
      }
      setOrderProd(orderProducts);
    };

    idk();
  }, []);
  //   const orderNum = props.id;
  //   const params = useParams();
  //   const id = Number(params.id);

  //   const products = useSelector((state) => {
  //     return state.products.products.flat();
  //   });
  //   const cartProducts = useSelector((state) => {
  //     return state.cart.allCartProducts.flat();
  //   });
  //   const userOrder = cartProducts.filter((product) => product.cartId === id);

  //   const idk = () => {
  //     const orderProducts = [];

  //     for (let i = 0; i < userOrder.length; i++) {
  //       for (let j = 0; j < products.length; j++) {
  //         if (userOrder[i].productId === products[j].id) {
  //           orderProducts.push(products[j]);
  //         }
  //       }
  //     }
  //     setOrderProd(orderProducts);
  //   };

  //   idk();

  return (
    <div
      onClick={() => {
        console.log(orderProducts);
      }}
    >
      <h1>Order: </h1>
      {orderProd.map((product) => {
        return <SingleProduct props={product} />;
      })}
    </div>
  );
};

export default SingleOrder;
