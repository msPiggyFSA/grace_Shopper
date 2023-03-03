import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
    cartCheckOut(state, action) {
      const value= async () => {await action};
      console.log("this is state", state);
      console.log("this is action", action.payload);
      console.log("this is value", action)
      state.currentCart.push(action.payload);
      console.log(state.currentCart, 'this is state.currentCart')
    },
  },
});

// export const checkOut = createAsyncThunk( "cartCheckOut",
  // const value= async () => {await action};
  // console.log("this is state", state);
  // console.log("this is action", action.payload);
  // console.log("this is value", action);
  // async()=>{
  //   try {
  //     await axios.post("http://localhost:8080/api/cartProducts");
  //     console.log("success")
  //   } catch (error) {
  //     console.log("sorry dude", error.message)
  //   }
  // });

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
