import React from "react";
import CartLength from "./CartLength";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/cart")}>
      <CartLength />
    </div>
  );
};

export default Cart;
