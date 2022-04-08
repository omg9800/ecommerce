import React, { useState } from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { editAddress } from "../../../../store/user";

function EditAddress({ m, setEditFlag }) {
  const [address, setAddress] = useState({
    city: m.city,
    street: m.street,
    houseNumber: m?.houseNumber,
    zipcode: m.zipcode,
    state: m?.state,
    name: m?.name,
    addressType: m?.addressType,
    phone: m?.phone,
  });

  const dispatch = useDispatch();
  const cancelEdit = () => {
    setEditFlag((prev) => !prev);
  };

  const editAddressHandler = () => {
    let userId = localStorage.getItem("userId");
    userId = JSON.parse(userId);
    dispatch(editAddress({ userId, id: m._id, address }));
    cancelEdit();
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles["new-address-form"]}>
      <ul className={styles["new-ad"]}>
        <li className={styles["new-ad-list"]}>
          <input
            type="text"
            name="name"
            onChange={(e) => handleChange(e)}
            placeholder="Name"
            value={address?.name}
          />
        </li>
        <li className={styles["new-ad-list"]}>
          <input
            type="text"
            name="phone"
            onChange={(e) => handleChange(e)}
            placeholder="Mobile Number"
            value={address?.phone}
          />
        </li>
        <li className={styles["new-ad-list"]}>
          <input
            type="text"
            name="street"
            onChange={(e) => handleChange(e)}
            placeholder="Street"
            value={address?.street}
          />
        </li>
        <li className={styles["new-ad-list"]}>
          <input
            type="text"
            name="houseNumber"
            onChange={(e) => handleChange(e)}
            placeholder="House Number"
            value={address?.houseNumber}
          />
        </li>
        <li className={styles["new-ad-list"]}>
          <input
            type="text"
            name="city"
            onChange={(e) => handleChange(e)}
            placeholder="City"
            value={address?.city}
          />
        </li>

        <li className={styles["new-ad-list"]}>
          <input
            type="text"
            name="zipcode"
            onChange={(e) => handleChange(e)}
            placeholder="Pine Code"
            value={address?.zipcode}
          />
        </li>

        <li className={styles["new-ad-list"]}>
          <input
            type="text"
            name="state"
            onChange={(e) => handleChange(e)}
            placeholder="State"
            value={address?.state}
          />
        </li>
      </ul>
      <div className="address-btn">
        <li onClick={editAddressHandler}>
          <button className="abtn">Submit</button>
        </li>
        <li onClick={cancelEdit}>
          <button className="abtn">Cancel</button>
        </li>
      </div>
    </div>
  );
}

export default EditAddress;
