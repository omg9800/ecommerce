import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./address.css";
import NewAddress from "./NewAddress/newAddress";
import AddressCard from "./AddressCard/addressCard";
import url from "../../../services/service";
function Address() {
  const dispatch = useDispatch();

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    addressType: "",
    city: "",
    street: "",
    houseNumber: "",
    zipcode: "",
    state: "",
  });
  const [addFlag, setAddFlag] = useState(false);
  const [editUpdate, setEditUpdate] = useState(false);
  const [delFlag, setDelFlag] = useState(false);
  const user = useSelector((state) => state.user.user);
  const userId = user._id;
  const addresses = user?.address;

  // http://localhost:6400
  // useEffect(() => {
  //   fetch(`${url}/users/${userId}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setAddresses(data.address);
  //     })
  //     .catch((e) => {
  //       console.log(e.message);
  //     });
  // }, [addFlag, delFlag, editUpdate]);

  // const user=useSelector(state=>state.user.user);

  return (
    <div className="address-container">
      <div className="new-address-con">
        <button
          style={{ display: !addFlag ? "block" : "none" }}
          className="new-address-btn"
          onClick={() => setAddFlag((prev) => !prev)}
        >
          New Address
        </button>

        <div
          className="new-address"
          style={{ display: addFlag ? "block" : "none" }}
        >
          <NewAddress
            userId={userId}
            setAddress={setAddress}
            setAddFlag={setAddFlag}
            address={address}
          />
        </div>
      </div>

      <div className="address-lists">
        {!addresses.length && !addFlag && <h1>No Saved Addresses</h1>}
        {addresses.map((m, i) => {
          return (
            <div className="address-card">
              <AddressCard
                m={m}
                setDelFlag={setDelFlag}
                setEditUpdate={setEditUpdate}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Address;
