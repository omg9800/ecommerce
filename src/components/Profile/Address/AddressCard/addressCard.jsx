import React, { useState } from "react";
import EditAddress from "../EditAddress/editAddress";
import "../address.css";
import { deleteAddress } from "../../../../store/user";
import { useDispatch } from "react-redux";

function AddressCard({ m, setEditUpdate }) {
  const [editFlag, setEditFlag] = useState(false);
  const dispatch = useDispatch();

  const removeForm = () => {
    setEditFlag((prev) => !prev);
  };

  const deleteAddressHelper = () => {
    let userId = localStorage.getItem("userId");
    userId = JSON.parse(userId);
    dispatch(deleteAddress({ userId, m }));
  };

  return (
    <div className="address-container">
      <div
        className="address-all"
        style={{ display: !editFlag ? "block" : "none" }}
      >
        <div className="address-card">
          <p className="address-list">
            <p className="address-value">{m.city}</p>
          </p>
          <p className="address-list">
            <p className="address-value">{m.street}</p>
          </p>
          <p className="address-list">
            <p className="address-value">{m.houseNumber}</p>
          </p>
          <p className="address-list">
            <p className="address-value">{m.zipcode}</p>
          </p>
        </div>

        <div className="address-btn">
          <button className="abtn" onClick={removeForm}>
            Edit
          </button>
          <button className="abtn" onClick={deleteAddressHelper}>
            Delete
          </button>
        </div>
      </div>

      <div
        className="edit-form"
        style={{ display: editFlag ? "block" : "none" }}
      >
        <EditAddress
          m={m}
          setEditFlag={setEditFlag}
          setEditUpdate={setEditUpdate}
        />
      </div>
    </div>
  );
}

export default AddressCard;
