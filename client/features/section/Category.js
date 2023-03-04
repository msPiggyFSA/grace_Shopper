import React from "react";
import Men from "./Men.js";
import Women from "./Women.js";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { container } from "../variants.js";

const Category = () => {
  const params = useParams();
  const id = Number(params.id);
  // console.log(params.id);
  return (
    <motion.div
      variants={container}
      initial="initial"
      animate="visible"
      // transition={{ type: "spring", stiffness: 50, duration: 1.5 }}
      exit="exit"
    >
      {id === 1 && <Men />}
      {id === 2 && <Women />}
      {id > 2 && (
        <div>
          Sorry, but the page you requested could not be found, nerd. 😂 😂 😈
        </div>
      )}
    </motion.div>
  );
};

export default Category;
