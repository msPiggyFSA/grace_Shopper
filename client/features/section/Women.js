import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../app/slices/productsSlice";
<<<<<<< HEAD
import SingleProduct from "../SingleProduct/SingleProduct";
import { v4 as uuidv4 } from "uuid";

/**
 * COMPONENT
 */
const Women = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const username = useSelector((state) => state.auth.me.username);
  const products = useSelector((state) => {
    // state.products.products.filter((product) => {
    //   product.categoryId === 1;
    // });
    return state.products.products.flat();
  });

  return (
    <div>
      <h3
        onClick={() => {
          console.log(products);
        }}
      >
        Welcome, {username}
      </h3>
      {products.map((product) => {
        if (product.categoryId === 2) {
          return <SingleProduct key={uuidv4()} props={product} />;
        }
      })}
    </div>
  );
};
=======

import { v4 as uuidv4 } from "uuid";

function Women(props) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllProducts());
	}, []);

	const username = useSelector((state) => state.auth.me.username);
	const products = useSelector((state) => {
		// state.products.products.filter((product) => {
		//   product.categoryId === 2;
		// });
		// console.log("filtered products", state.products.products);
		return state.products.products.flat();
	});
	const filter = products.filter((product) => product.categoryId === 2);
	console.log(filter);
	return (
		<div
			onClick={() => {
				// console.log(products);
			}}>
			<h3>Welcome, {username}</h3>
			{filter.map((product) => {
				return (
					<>
						<div className="card">
							<p>{product.name}</p>
							<img src="{product.imageUrl}" />
							<p>{product.price}</p>
							<p>{product.description}</p>
							<button key={uuidv4()} to={`/products/${product.id}`}>
								product Details
							</button>
						</div>
					</>
				);
			})}
		</div>
	);
}
>>>>>>> d20e29fdaf27f95721cf23e857ad411df2959e68

export default Women;
