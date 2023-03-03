import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { products: [], singleProduct: {} };

export const fetchAllProducts = createAsyncThunk("allproducts", async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/products");
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const fetchSingleProduct = createAsyncThunk(
  "singleproduct",
  async (id) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/products/" + id
      );
      const data = response.data;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const createNewProduct = createAsyncThunk(
  'createproduct',
  async({form})=>{
    try {
      await axios.post("http://localhost:8080/api/products", form);
console.log(form)
    } catch (error) {
      console.log(error.message)
    }
  }
)

export const editProduct = createAsyncThunk('editProduct',
async({form, params})=>{
  console.log(params, 'this is id in slice')
  console.log(form, 'this is forms in slice')
  try {
    await axios.put(`http://localhost:8080/api/products/${params}`, form);
  } catch (error) {
    
    console.log(error.message)
  }
}
)

export const deleteProduct = createAsyncThunk(
  'deleteproduct', async(id)=>{ try {
    await axios.delete(`http://localhost:8080/api/products/${id}`);
    return id;
  } catch (error) {
    console.log(error.message)
  }
  }
)


const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state, action) => {
        state.products.length = 0;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(fetchSingleProduct.pending, (state, action) => {
        state.singleProduct = {};
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.singleProduct = action.payload;
      })
      .addCase(createNewProduct.pending, (state, action) => {
				state.createproduct = {};
			})
      .addCase(createNewProduct.fulfilled, (state, action) => {
				state.createproduct = action.payload;
			})
      .addCase(deleteProduct.fulfilled, (state, action) => {
				state.createproduct = action.payload;
			});
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
