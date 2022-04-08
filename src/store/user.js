import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addAddress,
  deleteAddressService,
  editAddressService,
} from "../services/user";
const initialState = { user: null };

export const addNewAddress = createAsyncThunk("addAddress", async (data) => {
  const { address, userId } = data;
  const res = await addAddress(userId, address);
  return res;
});

export const editAddress = createAsyncThunk("editAddress", async (data) => {
  const { userId, id, address } = data;
  console.log("id....", id);

  const res = await editAddressService(userId, id, address);
  return { ...address, _id: id };
});

export const deleteAddress = createAsyncThunk("delAddress", async (data) => {
  const { m, userId } = data;
  const id = m._id;
  console.log("id....", id);
  const res = await deleteAddressService(userId, id);
  return id;
});

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [addNewAddress.pending]: () => {
      console.log("pending");
    },
    [addNewAddress.fulfilled]: (state, action) => {
      // console.log(action, state, "exttttttt");
      state.user = action.payload;
      console.log(action.payload);
    },
    [addNewAddress.rejected]: (state, action) => {
      console.log("rejected", state, action);
    },

    [deleteAddress.pending]: () => {
      console.log("pending");
    },
    [deleteAddress.fulfilled]: (state, action) => {
      console.log("fulfill", action);
      const id = action.payload;
      state.user.address = state.user.address.filter((item) => item._id !== id);
    },
    [deleteAddress.rejected]: (state, action) => {
      console.log("rejected", state, action);
    },
    [editAddress.pending]: () => {
      console.log("pending");
    },
    [editAddress.fulfilled]: (state, action) => {
      let newAddress = action.payload;
      state.user.address = state.user.address.filter(
        (item) => item._id !== newAddress._id
      );
      state.user.address.push(newAddress);
    },
    [editAddress.rejected]: (state, action) => {
      console.log("rejected", state, action);
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
