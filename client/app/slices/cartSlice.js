import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  currentCart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.currentCart.push(action.payload);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
