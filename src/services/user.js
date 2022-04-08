import url from "./service";

export const addAddress = async (userId, address) => {
  const response = await fetch(`${url}/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ address }),
  });

  return await response.json();
};

export const deleteAddressService = async (userId, id) => {
  const response = await fetch(`${url}/users/${userId}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
  return await response;
};

export const editAddressService = async (userId, id, address) => {
  const response = await fetch(`${url}/users/${userId}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ address }),
  });
  console.log(response);
  return await response.json();
};

export const getUpdatedUser = async (userId) => {
  const response = await fetch(`${url}/users/${userId}`);
  const user = await response.json();
  return user;
};
