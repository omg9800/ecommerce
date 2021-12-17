import React, { Component, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./card.css";

const Card = (props) => {
  let { title, description, price, rating, image, category, size, id } =
    props.product;
  const {
    updateItems,
    onChange,
    selectedQty,
    selectedSize,
    handleQtyFtn,
    handleSizeFtn,
    setCountBag,
    ind,
  } = props;
  // console.log(props, "props");

  image = image[0];
  const [isHovering, setIsHovering] = useState(false);
  const [qty, setQty] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    console.log("useeffect ran");
  });

  const handleSize = (e) => {
    console.log(e.target, "======>onchange");
    handleSizeFtn(ind, e.target.value);
  };
  const handleQty = (e) => {
    console.log(e.target, "======>onchange");
    handleQtyFtn(ind, e.target.value);
  };

  return (
    <div className="cart-card-container">
      <div className="cart-card-img-container">
        <img id="cart-card-img" src={image} alt="Card Image" />
      </div>

      <div className="card-details">
        <p className="card-title">{title}</p>
        <p className="card-desc">{description}</p>
        <p className="seller">Sold by: Flashtarsh Commerce</p>
        <div className="card-select">
          <label>
            Size:
            <select name="size" id="size" onChange={(e) => handleSize(e)}>
              {size?.map((m, i) => (
                <option value={m} key={i + m}>
                  {m}
                </option>
              ))}
            </select>
          </label>
          <label>
            Qty:
            <select onChange={(e) => handleQty(e)}>
              {qty?.map((m, i) => (
                <option value={m} key={i + m}>
                  {m}
                </option>
              ))}
            </select>
          </label>

          <p className="card-price">
            Rs. {selectedQty[ind] > 1 ? selectedQty[ind] * price : 1 * price}
          </p>
        </div>
      </div>
      <div className="remove">
        {/* <input type="text" onChange={handleChange} /> */}
        <button onClick={() => updateItems(id)}>X</button>
      </div>
    </div>
  );
};

export default Card;
