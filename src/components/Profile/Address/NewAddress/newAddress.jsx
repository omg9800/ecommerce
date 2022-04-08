import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../EditAddress/styles.module.css";
import { addNewAddress } from "../../../../store/user";

function NewAddress({ setAddFlag, setAddress, address }) {
  let user = useSelector((state) => state.user.user);
  let userId = user?._id;
  const dispatch = useDispatch();

  const newAddressHelper = () => {
    dispatch(addNewAddress({ address, userId }));
    setAddress({
      name: "",
      phone: "",
      addressType: "",
      city: "",
      street: "",
      houseNumber: "",
      zipcode: "",
      state: "",
    });
    setAddFlag((prev) => !prev);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const cancelAdd = () => {
    setAddFlag((prev) => !prev);
  };

  return (
    <div className={styles["new-address-form"]}>
      <ul className={styles["new-ad"]}>
        <li className={styles["new-ad-list"]}>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Name"
            value={address.name}
          />
        </li>
        <li className={styles["new-ad-list"]}>
          <input
            type="text"
            name="phone"
            onChange={handleChange}
            placeholder="Mobile Number"
            value={address.phone}
          />
        </li>
        <li className={styles["new-ad-list"]}>
          <input
            type="text"
            name="city"
            onChange={handleChange}
            placeholder="City"
            value={address.city}
          />
        </li>
        <li className={styles["new-ad-list"]}>
          <input
            type="text"
            name="street"
            onChange={handleChange}
            placeholder="Street"
            value={address.street}
          />
        </li>
        <li className={styles["new-ad-list"]}>
          <input
            type="text"
            name="houseNumber"
            onChange={handleChange}
            placeholder="House Number"
            value={address.houseNumber}
          />
        </li>
        <li className={styles["new-ad-list"]}>
          <input
            type="text"
            name="zipcode"
            onChange={handleChange}
            placeholder="Pine Code"
            value={address.zipcode}
          />
        </li>
        <li className={styles["new-ad-list"]}>
          <input
            type="text"
            name="state"
            onChange={handleChange}
            placeholder="State"
            value={address.state}
          />
        </li>
      </ul>
      <div className="address-btn">
        <li onClick={newAddressHelper}>
          <button className="abtn">Submit</button>
        </li>
        <li onClick={cancelAdd}>
          <button className="abtn">Cancel</button>
        </li>
      </div>
    </div>
  );
}

export default NewAddress;
