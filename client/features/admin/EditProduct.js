import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { editProduct, fetchSingleProduct } from '../../app/slices/productsSlice';

function EditProduct() {
	const params = useParams();

  const[id, setId] = useState('')

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSingleProduct(params.id));
	}, [form]);

	const product = useSelector((state) => {
		return state.products.singleProduct;
	});

	useEffect(() => {setForm(product)}, [product]);

	const [form, setForm] = useState({
		name: "",
		imageUrl: "",
		price: "",
		description: "",
		categoryId: "",
	});
	console.log(form);
	const changeValue = (prop) => (event) => {
		setForm({
      ...form,
			[prop]: event.target.value,
		});

	};
	return (
		<div className="addProduct">
			<div>Add new products</div>
			<input
				placeholder="Product Name?"
				type="text"
				value={form.name}
				onChange={changeValue("name")}
			/>
			<input
				placeholder="product price?"
				type="number"
				step="0.01"
				value={form.price}
				onChange={changeValue("price")}
			/>
			<input
				placeholder="image URL"
				type="text"
				value={form.imageUrl}
				onChange={changeValue("imageUrl")}
			/>
			<textarea
				placeholder="product description?"
				value={form.description}
				onChange={changeValue("description")}
			/>
			<div>Choose product category</div>
			<label htmlFor="createMenCat">Men</label>
			<input
				type="radio"
				id="createMenCat"
				name="productCat"
				value={1}
				onChange={changeValue("categoryId")}
			/>
			<label htmlFor="createWomenCat">Women</label>
			<input
				type="radio"
				id="createWomennCat"
				name="productCat"
				value={2}
				onChange={changeValue("categoryId")}
			/>
			<div>
				<button
					onClick={() => {
						dispatch(editProduct({form, params}));
						// navigate("/home");
            console.log(params, 'this is params');
					}}>
					Submit
				</button>
			</div>
		</div>
	);
}
export default EditProduct
