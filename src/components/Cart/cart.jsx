import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./cart.css";
import Card from "./Card/card";

const Cart = ({ setSuccessFlag, successFlag }) => {
  const [flag, setFlag] = useState(false);
  const [arr, setArr] = useState([]);

  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems, "cartItems======>");

  // useEffect(() => {
  //   setArr(arr);
  // }, [cartItems]);

  const closeModal = () => {
    setFlag(false);
  };

  const findTotalPrice = () => {
    var s = 0;
    for (let i = 0; i < cartItems?.length; i++) {
      let k = cartItems[i].quantity * cartItems[i].price;
      s = s + k;
    }
    return s;
  };

  useEffect(async () => {
    setFlag(successFlag);
    var modal = document.getElementById("myModal");
    var close = document.getElementById("close-btn");

    if (flag == true) {
      modal.style.display = "block";
    } else {
      modal.style.display = "none";
    }

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
      modal.style.display = "none";
      setSuccessFlag(false);
    };

    close.onclick = function () {
      modal.style.display = "none";
      setSuccessFlag(false);
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        setSuccessFlag(false);
      }
    };
  });

  // console.log(bagArr);
  // console.log(arr);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <div className="flex">Your Cart</div>
          <div className="content">
            {cartItems.map((m, i) => {
              return (
                <>
                  <Card key={m?.id + i} ind={i} product={m} />
                </>
              );
            })}
          </div>

          <div className="checkout">
            <p className="total">Total Amount: {findTotalPrice()}</p>

            <Link id="close-btn" className="checkout-btn" to="/checkout">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
