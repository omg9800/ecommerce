import React, { Component, useState, useEffect } from "react";
import { withRouter } from "react-router";
import Navbar from "../Navbar/navbar";
import Cart from "../Cart/cart";
import "./product.css";
import { FaStar } from "react-icons/fa";
import Rating from "../Helper/helper";
const Product = (props) => {
  console.log(props);
  const [product, setProduct] = useState(props.location.state.product);
  const [successFlag, setSuccessFlag] = useState(false);
  const [failFlag, setFailFlag] = useState(true);
  console.log(product);
  const { image, title, description, size, rating, price } = product;
  const [sz, setsz] = useState("");

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setsz(e.target.value);
  };
  var count = 0;

  const addToBag = async () => {
    product.selectedSize = sz;
    let products = [];
    let old = await localStorage.getItem("products");
    if (!old) {
      products.push(product);
      localStorage.setItem("products", JSON.stringify(products));
    } else {
      products = [...JSON.parse(old)];
      products.push(product);
      localStorage.setItem("products", JSON.stringify(products));
    }

    // let arr = await localStorage.getItem("products");
    // count = JSON.parse(arr).length;
    count = 1;
  };

  return (
    <>
      <Navbar
        setSuccessFlag={setSuccessFlag}
        successFlag={successFlag}
        setFailFlag={setFailFlag}
        count={count}
      />
      <Cart
        successFlag={successFlag}
        setFailFlag={setFailFlag}
        setSuccessFlag={setSuccessFlag}
      />
      <div className="product-container">
        <div className="prod-img">
          <img src={image} alt="" />
        </div>
        <div className="prod-details">
          <div className="title-with-rating">
            <p className="prod-title">{title}</p>
            <p className="prod-desc">{description}</p>

            <div className="rating">
              <p className="star-num">{rating.star}</p>
              <div className="star-img">
                <FaStar />
              </div>
              <p className="divide">|</p>
              <p className="count">{rating.count} Ratings</p>
            </div>
          </div>
          <div className="price">
            <span>Rs. {price}</span>
            <p className="tax">inclusive of all taxes.</p>
          </div>
          <div className="size">
            <div className="size-heading">
              <p className="select">SELECT SIZE</p>
              <p className="chart">SIZE CHART</p>
            </div>
            <div className="select-option">
              {size.map((m) => (
                <div className="radio">
                  <span>{m}</span>
                  <input
                    type="radio"
                    id="size"
                    name="size"
                    value={m}
                    onChange={handleOnChange}
                  />{" "}
                </div>
              ))}
            </div>
            <div className="btn">
              <div className="bag">
                <button
                  onClick={() => {
                    addToBag();
                  }}
                >
                  ADD TO BAG
                </button>
              </div>
              <div className="wishlist">
                <button>WISHLIST</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Product);
