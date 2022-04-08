import React, { Component, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart";

import "./product.css";
import { FaStar } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { toast } from "react-toastify";

const Product = (props) => {
  const [product, setProduct] = useState(props?.location?.state?.product);
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.items);

  const { image, title, description, size, rating, price, _id } = product;
  const { setCountBag, setCountWishlist } = props;
  const [sz, setsz] = useState("");
  const [cb, setCb] = useState(0);

  // const userId = useSelector((state) => state.user._id);
  let cart = {
    userId: JSON.parse(localStorage.getItem("user"))?._id,
    productId: { title, description, image, price, _id, quantity: 1, size: sz },
  };

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setsz(e.target.value);
  };

  const notify = () => {
    toast.warning("Please login first");
  };

  useEffect(async () => {
    let k = 0;
    k = await localStorage.getItem("products");
    k = JSON?.parse(k)?.length;
    setCb(k);
  }, []);

  const addToBag = () => {
    dispatch(addItemToCart({ cart, carts }));
  };

  const handleSize = (i) => {
    setsz(size[i]);
  };

  const addToWishlist = async () => {
    let wishlists = [];
    let old = await localStorage.getItem("wishlists");
    if (!old) {
      wishlists.push(product);
      localStorage.setItem("wishlists", JSON.stringify(wishlists));
    } else {
      wishlists = [...JSON.parse(old)];
      wishlists.push(product);
      localStorage.setItem("wishlists", JSON.stringify(wishlists));
    }

    setCountWishlist();
  };

  return (
    <div className="product-all">
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
                  <button className="round" onClick={() => handleSize(i)}>
                    {m}
                  </button>
                </div>
              ))}
            </div>
            <div className="btn">
              <div className="bag" onClick={addToBag}>
                <BiShoppingBag />
                <button>ADD TO BAG</button>
              </div>
              <div
                className="wishlist"
                onClick={() => {
                  addToWishlist();
                }}
              >
                <BsHeart />
                <button>WISHLIST</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Product);
