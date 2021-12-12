import React, { Component, useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
const Rating = ({ fsz, width, height, rating }) => {
  return (
    <div
      className="rating"
      style={{ width: width, height: height, fontSize: fsz }}
    >
      <p className="star-num">{rating.star}</p>
      <div className="star-img">
        <FaStar />
      </div>
      <p className="divide">|</p>
      <p className="count">{rating.count} Ratings</p>
    </div>
  );
};

export default Rating;
