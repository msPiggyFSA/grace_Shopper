import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
	currentCart: [],
	currentCartInfo: {},
	allCarts: [],
	allCartProducts: [],
	fulfilled: [],
	unfulfilled: [],
	userfulfilled: [],
	cartProducts: [],
	allProducts: [],
};

export const fetchAllCarts = createAsyncThunk("fetch/usercart", async () => {
	try {
		const response = await axios.get(" /api/carts");
		return response.data;
	} catch (error) {
		console.log(error);
	}
});

export const fetchAllThemMF = createAsyncThunk("fetch/allem", async () => {
	try {
		const response = await axios.get(" /api/products");
		return response.data;
	} catch (error) {
		console.log(error);
	}
});

export const fetchAllCartProducts = createAsyncThunk(
	"fetch/cartproducts",
	async () => {
		try {
			const response = await axios.get(" /api/cartProducts");
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
);

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
			state.currentCart.splice(index, 1);
		},
		cartTotal(state, action) {
			let here = state.currentCart.length(action.payload);
		},
		updateUserCart(state, action) {
			state.currentCart.length = 0;
			state.userfulfilled.length = 0;
			state.fulfilled.flat().forEach((order) => {
				// console.log(current(order).userId);
				if (current(order).userId === action.payload) {
					state.userfulfilled.push(current(order));
				}
			});

			state.unfulfilled.flat().forEach((order) => {
				if (current(order).userId === action.payload) {
					state.currentCartInfo = current(order);

					state.allCartProducts.flat().forEach((prod) => {
						console.log(current(prod));
						if (current(order).id === current(prod).cartId) {
							state.allProducts.flat().forEach((product) => {
								console.log(current(product));
								if (current(product).id === current(prod).productId) {
									state.currentCart.push(current(product));
								}
							});
						}
					});
				}
			});
		},
		checkedOut(state, action) {
			state.currentCart.length = 0;
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
			})
			.addCase(fetchAllCartProducts.pending, (state, action) => {
				state.allCartProducts.length = 0;
			})
			.addCase(fetchAllCartProducts.fulfilled, (state, action) => {
				state.allCartProducts.push(action.payload);
			})
			.addCase(fetchAllThemMF.pending, (state, action) => {
				state.allProducts.length = 0;
			})
			.addCase(fetchAllThemMF.fulfilled, (state, action) => {
				state.allProducts.push(action.payload);
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
//     await axios.post(" /api/cartProducts");
//     console.log("success")
//   } catch (error) {
//     console.log("sorry dude", error.message)
//   }
// });

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
