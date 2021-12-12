import React, { Component, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./card.css";

const Card = (props) => {
  let {
    title,
    description,
    price,
    rating,
    image,
    category,
    size,
    id,
    updateItems,
  } = props.product;
  image = image[0];
  const [isHovering, setIsHovering] = useState(false);
  const [qty, setQty] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    console.log("useeffect ran");
  }, []);

  const handleHover = (e) => {
    setIsHovering(true);
    console.log(isHovering);
  };
  const handleSize = () => {};

  const handleLeave = (e) => {
    setIsHovering(false);
    console.log(isHovering);
  };

  const removeFromBag = async () => {
    let arr = await localStorage.getItem("products");
    arr = JSON.parse(arr);
    arr = arr.filter((m) => m.id != id);
    localStorage.setItem("products", JSON.stringify(arr));
    // updateItems();
    // console.log(updateItems);
  };

  return (
    <div className="cart-card-container">
      <div className="cart-card-img-container">
        <img
          id="cart-card-img"
          src={image}
          alt="Card Image"
          // onMouseOver={handleHover}
          // onMouseOut={handleLeave}
          // onClick={handleClick}
        />
      </div>

      <div className="card-details">
        <p className="card-title">{title}</p>
        <p className="card-desc">{description}</p>
        <p className="seller">Sold by: Flashtarsh Commerce</p>
        <div className="card-select">
          <label>
            Size:
            <select onchange={handleSize}>
              {size.map((m, i) => {
                return (
                  <>
                    <span>Size:</span>
                    <option value={m}>{m}</option>;
                  </>
                );
              })}
            </select>
          </label>
          <label>
            Qty:
            <select onchange={handleSize}>
              {qty.map((m, i) => {
                return <option value={m}>{m}</option>;
              })}
            </select>
          </label>
          <p className="card-price">Rs. {price}</p>
        </div>
      </div>
      <div className="remove">
        <button onClick={() => updateItems(id)}>X</button>
      </div>
    </div>
  );
};

export default Card;
