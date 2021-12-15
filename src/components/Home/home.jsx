import React, { Component, useState, useEffect } from "react";
import Sidebar from "../Sidebar/sidebar";
import Products from "../Products/products";
import Navbar from "../Navbar/navbar";
import "./home.css";
import App from "../Loader/loader";

const Home = ({ searchText, setCountWishlist }) => {
  const [products, setProducts] = useState([]);
  const [allProds, setAllProds] = useState([]);
  const [loader, setLoader] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://ecommerce-980.herokuapp.com/products/category/shirt")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        setAllProds(data);
        setLoader(false);
      });
  }, []);

  useEffect(() => {
    const results = allProds.filter((product) =>
      product.title.toLowerCase().includes(searchText)
    );

    setProducts(results);
  }, [searchText]);

  useEffect(async () => {
    let k = 0;
    k = await localStorage.getItem("products");
    k = JSON.parse(k)?.length;
    setCount(k);
  }, []);

  return (
    <div className="all">
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
              <Products
                products={products}
                setProducts={setProducts}
                setCountWishlist={setCountWishlist}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
