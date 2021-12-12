import React, { Component, useEffect, useState } from "react";
import "./sort.css";
const Sort = ({ setProducts, products }) => {
  const handleSort = (e) => {
    let type = e.target.value;

    const tProds = [...products];
    if (type == "dec") {
      tProds.sort((a, b) => {
        return b.price - a.price;
      });
      setProducts(tProds);
    } else if (type == "inc") {
      tProds.sort((a, b) => {
        return a.price - b.price;
      });
      setProducts(tProds);
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
