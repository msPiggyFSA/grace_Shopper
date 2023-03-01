import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { products: [] };

export const fetchAllProducts = createAsyncThunk("allproducts", async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/products");
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.products.push(action.payload);
      });
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
