import React from "react";
import CartLength from "./CartLength";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/cart")}>
      <CartLength />
    </button>
  );
};

export default Cart;
