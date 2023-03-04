import React from "react";
import CartLength from "./CartLength";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  return (
    <>
      <button className="btn-cart" onClick={() => navigate("/cart")}>
        <span className="text">
          <CartLength />
        </span>
      </button>
    </>
  );
};

export default Cart;
