import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNewProduct } from '../../app/slices/productsSlice'

function AddProduct() {
    const dispatch = useDispatch()
    const [form, setForm] = useState({ 
        name: '',
        imageUrl:"",
        price:"",
        description:'',
      
})

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
                step='0.01'
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
			<button
				onClick={() => {
					dispatch(createNewProduct({ form }));
				}}>
				Submit
			</button>
		</div>
	);
}

export default AddProduct