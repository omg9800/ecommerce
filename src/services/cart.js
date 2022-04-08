import url from "./service";

export const addToCart = async (carts, cart, userId) => {
  let items = [];
  carts?.forEach((e) => {
    items.push({ productId: e._id, size: e?.size, quantity: e?.quantity });
  });
  const newItem = cart.productId;

  items.push({
    productId: newItem._id,
    size: newItem?.size,
    quantity: newItem?.quantity,
  });
  const response = await fetch(`${url}/carts/user/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items, userId }),
  });
  return await response.json();
};

export const deleteCart = async (userId, cartId) => {
  const response = await fetch(`${url}/carts/${userId}/${cartId}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });

  return await response.json();
};

export const editCartService = async (userId, items) => {
  const response = await fetch(`${url}/carts/user/${userId}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ userId, items }),
  });

  return await response;
};

// export const changeQtyService = async (userId, items) => {
//   const response = await fetch(`${url}/carts/user/${userId}`, {
//     method: "PUT",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({
//       userId,
//       items,
//     }),
//   });

//   return await response;
// };
