import React, { Component, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Cart from "../Cart/cart";
import "./product.css";
import { FaStar } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import Rating from "../Helper/helper";
const Product = (props) => {
  console.log(props);
  const [product, setProduct] = useState(props?.location?.state?.product);
  const [failFlag, setFailFlag] = useState(true);
  console.log(product);
  const { image, title, description, size, rating, price } = product;
  const [sz, setsz] = useState("");
  const [cb, setCb] = useState(0);
  const handleOnChange = (e) => {
    console.log(e.target.value);
    setsz(e.target.value);
  };

  useEffect(async () => {
    let k = await localStorage.getItem("products");
    k = JSON.parse(k).length;
    setCb(k);
  }, []);

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
    setCb(cb + 1);
  };

  const handleSize = (i) => {
    setsz(size[i]);
  };

  // const addToWishlist = async () => {
  //   let products = [];
  //   let old = await localStorage.getItem("products");
  //   if (!old) {
  //     products.push(product);
  //     localStorage.setItem("products", JSON.stringify(products));
  //   } else {
  //     products = [...JSON.parse(old)];
  //     products.push(product);
  //     localStorage.setItem("products", JSON.stringify(products));
  //   }

  //   // let arr = await localStorage.getItem("products");
  //   // count = JSON.parse(arr).length;
  //   setCb(cb + 1);
  // };

  return (
    <>
      <Navbar count={cb} />

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
              {size.map((m, i) => (
                <div className="radio">
                  {/* <span>{m}</span>
                  <input
                    type="radio"
                    id="size"
                    name="size"
                    value={m}
                    onChange={handleOnChange}
                  />{" "} */}
                  <button className="round" onClick={() => handleSize(i)}>
                    {m}
                  </button>
                </div>
              ))}
            </div>
            <div className="btn">
              <div className="bag">
                <BiShoppingBag />
                <button
                  onClick={() => {
                    addToBag();
                  }}
                >
                  ADD TO BAG
                </button>
              </div>
              <div className="wishlist">
                <BsHeart />
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
