import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProducts: (state, action) => {
      state.quantity -= 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    // removeAll: (state) => {
    //   state.products = [];
    //   state.quantity = 0;
    //   state.total = 0;
    // },
  },
});

export const { addProduct, removeAll } = cartSlice.actions;
export default cartSlice.reducer;
