import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import url from "../services/service";
import { uiActions } from "./ui";
import { useSelector } from "react-redux";
import { addToCart, deleteCart, editCartService } from "../services/cart";

const initialState = { items: [], totalQty: 0, notification: null };

export const addItemToCart = createAsyncThunk("addItem", async (data) => {
  const carts = data.carts;
  const cart = data.cart;
  const userId = data.cart.userId;
  const response = await addToCart(carts, cart, userId);
  return response;
});

export const removeCart = createAsyncThunk("removeItem", async (data) => {
  const cartId = data._id;
  const userId = data.userId;
  const response = await deleteCart(userId, cartId);
  return response;
});

export const editCart = createAsyncThunk("changeSize", async (data) => {
  const { items, userId, frontProds } = data;
  const response = await editCartService(userId, items);
  return frontProds;
});

// export const changeQty = createAsyncThunk("changeQty", async (data) => {
//   const { userId, items } = data;

//   const response = await changeQtyService(userId, items);
//   return response;
// });

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
    },
  },
  extraReducers: {
    [addItemToCart.pending]: () => {
      console.log("pending");
    },
    [addItemToCart.fulfilled]: (state, action) => {
      console.log(action, state, "exttttttt");
      const { carts, cart } = action.meta.arg;
      const newItem = cart.productId;
      const existingItem = state.items.find((item) => item._id === newItem._id);

      if (!existingItem) {
        state.items.push(newItem);
        console.log(state.items, "updated items");
      } else {
        console.log(state.items, "qty inc");
        existingItem.quantity++;
        // existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    [addItemToCart.rejected]: (state, action) => {
      console.log("rejected", state, action);
    },

    [removeCart.pending]: () => {
      console.log("pending");
    },
    [removeCart.fulfilled]: (state, action) => {
      const id = action.meta.arg._id;
      const existingItem = state.items.find((item) => item._id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item._id !== id);
      } else if (existingItem.quantity > 1) {
        existingItem.quantity--;
      }
    },
    [removeCart.rejected]: (state, action) => {
      console.log("rejected", state, action);
    },
    [editCart.pending]: () => {
      console.log("pending");
    },
    [editCart.fulfilled]: (state, action) => {
      // const id = action.meta.arg._id;
      console.log("fulfilled", action);
      state.items = action.payload;
    },
    [editCart.rejected]: (state, action) => {
      console.log("rejected", state, action);
    },
  },
});

export const cartActions = cartSlice.actions;

export const fetchCartData = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(`${url}/carts/user/${id}`);
      console.log(response);
      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      console.log(data);
      return data;
    };

    try {
      const cartData = await fetchData();
      let items = [];
      cartData[0].products.forEach((e) => {
        items.push({
          title: e.productId.title,
          image: e.productId.image,
          description: e.productId.description,
          price: e.productId.price,
          quantity: e.quantity,
          size: e.size,
          _id: e.productId._id,
        });
      });
      dispatch(
        cartActions.replaceCart({
          items: items, //cartData[0].products,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export default cartSlice;
