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
    handleQty,
    handleSize,
  } = props;
  console.log(props, "props");

  image = image[0];
  const [isHovering, setIsHovering] = useState(false);
  const [qty, setQty] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    console.log("useeffect ran");
  }, []);

  const removeFromBag = async () => {
    let arr = await localStorage.getItem("products");
    arr = JSON?.parse(arr);
    arr = arr?.filter((m) => m.id != id);
    localStorage.setItem("products", JSON.stringify(arr));
    // updateItems();
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
            <select name="size" id="size" onchange={handleSize}>
              {size?.map((m, i) => (
                <option value={m} key={i + m}>
                  {m}
                </option>
              ))}
            </select>
          </label>
          <label>
            Qty:
            <select onchange={handleQty}>
              {qty?.map((m, i) => (
                <option value={m} key={i + m}>
                  {m}
                </option>
              ))}
            </select>
          </label>
          {/* <input type="text" onchange={handleChange} /> */}
          <p className="card-price">Rs. {selectedQty * price}</p>
        </div>
      </div>
      <div className="remove">
        <button onClick={() => updateItems(id)}>X</button>
      </div>
    </div>
  );
};

export default Card;
