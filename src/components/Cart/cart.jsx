import React, { Component, useCallback, useEffect, useState } from "react";
import "./cart.css";
import Card from "./Card/card";
import { findRenderedComponentWithType } from "react-dom/test-utils";

const Cart = ({ setSuccessFlag, setFailFlag, successFlag }) => {
  const [flag, setFlag] = useState(false);
  //   const [carts, setCarts] = useState([]);
  const closeModal = () => {
    setFlag(false);
  };

  useEffect(async () => {
    console.log(successFlag);
    setFlag(successFlag);
    var modal = document.getElementById("myModal");
    var close = document.getElementById("close-btn");
    console.log(flag);
    if (flag == true) {
      modal.style.display = "block";

      console.log(flag);
    } else {
      modal.style.display = "none";
    }

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
      modal.style.display = "none";
      setSuccessFlag(false);
      setFailFlag(false);
    };

    close.onclick = function () {
      modal.style.display = "none";
      setSuccessFlag(false);

      setFailFlag(false);
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        setSuccessFlag(false);

        setFailFlag(false);
      }
    };
  });

  const updateItems = async (id) => {
    // var arr = localStorage.getItem("products");
    // arr = JSON.parse(arr);
    let arr = await localStorage.getItem("products");
    arr = JSON.parse(arr);
    arr = arr.filter((m) => m.id != id);
    localStorage.setItem("products", JSON.stringify(arr));
  };
  var arr = localStorage.getItem("products");
  arr = JSON.parse(arr);

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
            {arr.map((m, i) => {
              return (
                <>
                  <Card
                    product={m}
                    updateItems={updateItems}
                    // setSuccessFlag={setSuccessFlag}
                  />
                </>
              );
            })}
          </div>
          {/* updateItems={updateItems} */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button id="close-btn" className="save-test-btn cursor upload-btn">
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
