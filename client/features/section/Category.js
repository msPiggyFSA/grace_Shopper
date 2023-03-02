import React from "react";
import Men from "./Men.js";
import Women from "./Women.js";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Category = () => {
  const params = useParams();
  const products = useSelector((state) => {
    return state.products.products.flat();
  });
  return (
    <div>
      {params.id === 1 ?? <Men />}
      {params.id === 2 ?? <Women />}
    </div>
  );
};

export default Category;
