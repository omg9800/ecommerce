import React, { Component, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./cart.css";
import Card from "./Card/card";

const Cart = ({ setSuccessFlag, successFlag, setCountBag, countBag }) => {
  const [flag, setFlag] = useState(false);
  const [arr, setArr] = useState([]);

  const [selectedSize, setSelectedSize] = useState([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ]);
  const [selectedQty, setSelectedQty] = useState([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ]);
  console.log(selectedQty);
  //   const [carts, setCarts] = useState([]);
  const closeModal = () => {
    setFlag(false);
  };

  const findTotalPrice = () => {
    var s = 0;
    for (let i = 0; i < arr?.length; i++) {
      let k = selectedQty[i] * arr[i]?.price;
      s = s + k;
    }
    return s;
  };

  useEffect(async () => {
    setFlag(successFlag);
    var modal = document.getElementById("myModal");
    // var close = document.getElementById("close-btn");

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

    // close.onclick = function () {
    //   modal.style.display = "none";
    //   setSuccessFlag(false);
    // };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        setSuccessFlag(false);
      }
    };
  });

  useEffect(() => {
    var temp = 0;
    temp = localStorage.getItem("products");
    temp = JSON?.parse(temp);
    setArr(temp);
  }, [countBag]);

  const handleSizeFtn = (index, value) => {
    console.log(value, "======>onchange");
    let oldSizes = [...selectedSize];
    oldSizes[index] = value;
    setSelectedSize(oldSizes);
  };

  const handleQtyFtn = (index, value) => {
    console.log(value, "======>onchange");
    let oldQtys = [...selectedQty];
    // oldQtys.splice(index, 0, value);
    oldQtys[index] = value;
    setSelectedQty(oldQtys);
  };

  const updateItems = async (id) => {
    let t = await localStorage.getItem("products");
    t = JSON?.parse(t);
    t = arr?.filter((m) => m.id != id);
    localStorage.setItem("products", JSON.stringify(t));
    setArr(t);
    setCountBag();
  };

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
            {arr?.map((m, i) => {
              return (
                <>
                  <Card
                    key={m.id + i}
                    ind={i}
                    product={m}
                    updateItems={updateItems}
                    handleQtyFtn={handleQtyFtn}
                    handleSizeFtn={handleSizeFtn}
                    selectedQty={selectedQty}
                    selectedSize={selectedSize}
                    setSelectedQty={setSelectedQty}
                    setSelectedSize={setSelectedSize}
                    setCountBag={setCountBag}
                  />
                </>
              );
            })}
          </div>

          <div className="checkout">
            <p className="total">Total Amount: {findTotalPrice()}</p>

            <Link
              // id="close-btn"
              className="checkout-btn"
              // to="/checkout"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
