import React, { Component, useState, useEffect } from "react";
import Sidebar from "../Sidebar/sidebar";
import Products from "../Products/products";
import Navbar from "../Navbar/navbar";
import "./home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [allProds, setAllProds] = useState([]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://ecommerce-980.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        setAllProds(data);
      });
  }, []);

  useEffect(async () => {
    let k = await localStorage.getItem("products");
    k = JSON.parse(k).length;
    setCount(k);
  }, []);

  return (
    <>
      <Navbar
        products={products}
        setProducts={setProducts}
        allProds={allProds}
        count={count}
      />
      <div className="home-container">
        <div className="sidebar">
          <Sidebar
            products={products}
            setProducts={setProducts}
            allProds={allProds}
            // setFlag={setFlag}
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
