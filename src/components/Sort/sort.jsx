import React, { Component, useEffect, useState } from "react";
import "./sort.css";
const Sort = ({ setProducts }) => {
  const handleSort = (e) => {
    let type = e.target.value;

    if (type == "dec") {
      setProducts((products) =>
        products.sort((a, b) => {
          return b.price - a.price;
        })
      );
    } else if (type == "inc") {
      setProducts((products) =>
        products.sort((a, b) => {
          return a.price - b.price;
        })
      );
    }
  };

  return (
    <div className="sort">
      <select name="sort" id="sort" onChange={handleSort}>
        <option value="dec">Price:High to low</option>
        <option value="inc">Price: Low to High</option>
        <option value="discount">Better Discounts</option>
      </select>
    </div>
  );
};

export default Sort;
