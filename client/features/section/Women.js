import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../app/slices/productsSlice";

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

export default Women;
