import React, { Component, useState, useEffect } from "react";
import Sidebar from "../Sidebar/sidebar";
import Products from "../Products/products";
import Navbar from "../Navbar/navbar";
import "./home.css";
import App from "../Loader/loader";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [allProds, setAllProds] = useState([]);
  const [loader, setLoader] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://ecommerce-980.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        setAllProds(data);
        setLoader(false);
      });
  }, []);

  useEffect(async () => {
    let k = await localStorage.getItem("products");
    k = JSON.parse(k).length;
    setCount(k);
  }, []);

  return (
    <>
      {loader == true ? (
        <div
          className="center"
          style={{
            // backgroundColor: "#02176f",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <App />
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Home;
