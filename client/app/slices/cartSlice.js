import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  currentCart: [],
  allCarts: [],
  fulfilled: [],
  unfulfilled: [],
  userfulfilled: [],
  userunfulfilled: {},
};

export const fetchAllCarts = createAsyncThunk("fetch/usercart", async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/carts");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.currentCart.push(action.payload);
    },
    deleteCartProduct(state, action) {
      let index = state.currentCart.lastIndexOf(action.payload);

      if (index === -1) {
        index = 0;
      }
      console.log(index, "this is index");
      state.currentCart.splice(index, 1);
    },
    cartTotal(state, action) {
      let here = state.currentCart.length(action.payload);
      console.log(here, "this is here");
    },
    updateUserCart(state, action) {
      state.fulfilled.flat().forEach((order) => {
        console.log(current(order).userId);
        if (current(order).userId === action.payload) {
          state.userfulfilled.push(current(order));
        }
      });

      state.unfulfilled.flat().forEach((order) => {
        console.log(current(order).userId);

        if (current(order).userId === action.payload) {
          state.userunfulfilled = current(order);
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCarts.pending, (state, action) => {
        state.allCarts.length = 0;
        state.fulfilled.length = 0;
        state.unfulfilled.length = 0;
      })
      .addCase(fetchAllCarts.fulfilled, (state, action) => {
        state.allCarts.push(action.payload);
        state.fulfilled.push(
          action.payload.flat().filter((cart) => cart.purchased === true)
        );
        state.unfulfilled.push(
          action.payload.flat().filter((cart) => cart.purchased === false)
        );
      });
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
