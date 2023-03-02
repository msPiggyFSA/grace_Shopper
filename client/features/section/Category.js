import React from "react";
import Men from "./Men.js";
import Women from "./Women.js";
import { useParams } from "react-router-dom";

const Category = () => {
  const params = useParams();
  const id = Number(params.id);
  console.log(params.id);
  return (
    <div>
      <div>hello</div>
      {id === 1 ? (
        <Men />
      ) : id === 2 ? (
        <Women />
      ) : (
        <div>
          Sorry, but the page you requested could not be found, nerd. 😂 😂 😈
        </div>
      )}
    </div>
  );
};

export default Category;
