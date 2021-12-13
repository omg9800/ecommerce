import React, { Component, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Rating from "../Helper/helper";
import "./card.css";

const Card = (props) => {
  let { title, description, price, rating, image, category, size } =
    props.product;
  image = image[0];
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    console.log("useffect ran");
  }, []);

  const handleHover = (e) => {
    setIsHovering(true);
    console.log(isHovering);
  };

  const handleLeave = (e) => {
    setIsHovering(false);
    console.log(isHovering);
  };

  const handleClick = () => {
    history.push({
      pathname: "/product",
      state: {
        product: props.product,
      },
    });
  };

  const history = useHistory();
  return (
    <div className="card-container" onMouseLeave={handleLeave}>
      <img
        id="card-img"
        src={image}
        alt="Card Image"
        onMouseOver={handleHover}
        onClick={handleClick}
      />
      <div className="rating-sm">
        <p className="star-num-sm">{rating.star}</p>
        <div className="star-img-sm">
          <FaStar />
        </div>
        <p className="divide-sm">|</p>
        <p className="count-sm">{rating.count}</p>
      </div>
      <div className={isHovering ? "top-of-img" : "no-button"}>
        <button>Wishlist</button>
      </div>
      <div className="details">
        <p className="title">{title}</p>
        {!isHovering ? (
          <p className="des">{description}</p>
        ) : (
          <div className="size">
            <span>Size: </span>
            {size.map((m, i) => (
              <span>{m + (i == size.length - 2 ? "," : "")} </span>
            ))}
          </div>
        )}
        <p className="price">Rs. {price}</p>
      </div>
    </div>
  );
};

export default Card;
