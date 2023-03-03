import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createNewProduct } from '../../app/slices/productsSlice'

function AddProduct() {
	const navigate = useNavigate()
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        name: '',
        imageUrl:"",
        price:"",
        description:'',
        categoryId:'',

})
console.log(form)
const changeValue = (prop)=>(event)=>{
    setForm({
        ...form,
        [prop]:event.target.value
    })
}
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
            <input type='radio' id='createMenCat' name='productCat'value={1} onChange={changeValue('categoryId')}/>
            <label htmlFor="createWomenCat">Women</label>
            <input type='radio' id='createWomenCat' name='productCat'value={2} onChange={changeValue('categoryId')}/>
			<div><button
				onClick={() => {
					dispatch(createNewProduct({ form }));
					navigate('/home');
				}}>
				Submit
			</button>
            </div>
		</div>
	);
}

export default AddProduct
