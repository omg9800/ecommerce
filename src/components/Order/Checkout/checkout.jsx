import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./checkout.css";
import { useSelector } from "react-redux";
import url from "../../../services/service";
import Products from "./../../Products/products";

function Checkout() {
  const [products, setProducts] = useState([]);
  const [address, setAddress] = useState({
    city: "",
    street: "",
    houseNumber: "",
    zipcode: "",
    state: "",
    name: "",
    addressType: "",
    phone: "",
  });

  const bagArr = useSelector((state) => state.cart.items);

  const user = useSelector((state) => state.user.user);
  const prods = useSelector((state) => state.cart.items);
  const userId = user?._id;
  const addresses = user?.address;

  const calculatePrice = () => {
    let k = 0;
    for (let i = 0; i < bagArr.length; i++) {
      k = k + bagArr[i]?.price * bagArr[i]?.quantity;
    }

    return k;
  };

  const notify = () => {
    toast.success("Order placed Successfully!");
    // window.location = "/profile";
  };
  const placeOrder = async () => {
    fetch(`${url}/orders/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        product: prods,
        address: address,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        notify();
      });
  };

  const handleAddress = (e, m) => {
    // console.log(e.target, addresses);
    setAddress({
      city: m.city,
      street: m.street,
      houseNumber: m?.houseNumber,
      zipcode: m.zipcode,
      state: m?.state,
      name: m?.name,
      addressType: m?.addressType,
      phone: m?.phone,
    });
    console.log(address);
  };

  return (
    <div className="checkout-container">
      <div className="addresses">
        <p className="bold">Delivery Address</p>
        {!addresses?.length && (
          <div className="no-address">
            <h3>No address found!</h3>
            <Link className="no-address-link" to="/user/addresses">
              Add Address
            </Link>
          </div>
        )}
        {addresses?.map((m) => {
          return (
            <div
              className="address-card-checkout"
              //   style={{ marginTop: "15vh", backgroundColor: "red" }}
            >
              <div className="address-input">
                <input
                  type="radio"
                  name="address"
                  onChange={(e) => handleAddress(e, m)}
                />
              </div>
              <div className="address-al">
                <div className="personal">
                  <span>{m?.name}</span>
                  <span className="addresstype">{m?.addressType}</span>
                  <span>{m?.phone}</span>
                </div>
                <div className="address">
                  <span>{m.street},</span>
                  <span>{m.city},</span>
                  <span>{m?.state},</span>
                  <span className="pin">{m.zipcode}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="price-detail">
        <p className="bold">Price Details</p>
        <p className="total-price">
          <span>Total Price: </span>
          <span>{calculatePrice()}</span>
        </p>
        <p className="total-price">
          <span>Delivery Charge </span>
          <span className="green-text">Free</span>
        </p>
        <p className="total-price">
          <span>Total Discounts: </span>
          <span>200</span>
        </p>
        <p className="green-text">You saved 200 on this order!</p>

        <button className="checkout-btn center" onClick={() => {}}>
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;
