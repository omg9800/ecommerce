import React from "react";
import shirt from "../../../images/shirt.png";
import shoes from "../../../images/shoes.jpg";
import jeans from "../../../images/jeans.jpg";
import tshirt from "../../../images/t-shirt.jpg";
import { Link, NavLink, route } from "react-router-dom";
import "./card.css";

// import shirt from "../../../images/shirt.png";
function Card({ cat }) {
  return (
    <div className="card-cont">
      {cat == "shirt" ? (
        <Link to="/shirt">
          <img src={shirt} alt="" />
        </Link>
      ) : cat == "jeans" ? (
        <Link to="/jeans">
          <img src={jeans} alt="" />
        </Link>
      ) : cat == "shoes" ? (
        <Link to="/shoes">
          <img src={shoes} alt="" />
        </Link>
      ) : cat == "t-shirt" ? (
        <Link to="/t-shirt">
          <img src={tshirt} alt="" />
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}

export default Card;
