import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import productReducer from "../app/slices/productsSlice";
import cartReducer from "../app/slices/cartSlice";
import userReducer from "../app/slices/userSlice";

const store = configureStore({
  reducer: { auth: authReducer, products: productReducer, cart: cartReducer, users: userReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
