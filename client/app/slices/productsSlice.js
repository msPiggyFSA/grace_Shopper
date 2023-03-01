import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { products: [], singleProduct: [] };

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
        "http://localhost:8080/api/products" + id
      );
      const data = response.data;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

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
        state.singleProduct.length = 0;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.singleProduct.push(action.payload);
      });
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
