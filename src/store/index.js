import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import cartSlice from "./cart";
import userSlice from "./user";
import uiSlice from "./ui";
import productSlice from "./product";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    user: userSlice.reducer,
    ui: uiSlice.reducer,
    product: productSlice.reducer,
  },
});

export default store;
