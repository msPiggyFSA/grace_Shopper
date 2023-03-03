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
    deleteCartProduct(state, action){
      let index = state.currentCart.lastIndexOf(action.payload)

      if(index === -1){
        index = 0
      }
      console.log(index, 'this is index')
      state.currentCart.splice(index, 1)
    },
    cartTotal(state, action) {
      let here = state.currentCart.length(action.payload);
      console.log(here, 'this is here')
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
