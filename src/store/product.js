import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { product: null };

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice;
