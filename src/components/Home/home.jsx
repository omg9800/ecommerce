import React, { Component, useState, useEffect } from "react";
import Sidebar from "../Sidebar/sidebar";
import Products from "../Products/products";
import Navbar from "../Navbar/navbar";
import "./home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [allProds, setAllProds] = useState([]);

  const [flag, setFlag] = useState(0);

  useEffect(() => {
    fetch("http://localhost:6400/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        setAllProds(data);
      });
  }, []);

  return (
    <>
      <Navbar
        products={products}
        setProducts={setProducts}
        allProds={allProds}
      />
      <div className="home-container">
        <div className="sidebar">
          <Sidebar
            products={products}
            setProducts={setProducts}
            allProds={allProds}
            setFlag={setFlag}
          />
        </div>
        <div className="products">
          <Products products={products} setProducts={setProducts} />
        </div>
      </div>
    </>
  );
};

export default Home;
