import React, { Component, useState, useEffect } from "react";
import Card from "../Card/card";
import Sort from "../Sort/sort";
import "./products.css";
const Products = ({ products, setProducts, setCountWishlist }) => {
  const [newProducts, setNewProducts] = useState([]);
  // const [OriginalProducts, setOriginalProducts] = useState(props.products);

  useEffect(() => {
    setNewProducts(products);
    console.log(products);
  }, [products]);
  console.log(products, "hello");
  return (
    <>
      <div className="products-container">
        <div className="sort-container">
          <Sort setProducts={setProducts} products={products} />
        </div>
        <div className="products">
          {products.map((m, i) => {
            const key = m.title + m.id;
            console.log(key);
            return (
              // <div key={key.toString()}>
              <Card product={m} setCountWishlist={setCountWishlist} />
              // </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
