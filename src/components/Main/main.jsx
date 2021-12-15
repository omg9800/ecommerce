import React, { Component, useState, useEffect } from "react";
import Sidebar from "../Sidebar/sidebar";
import Products from "../Products/products";
import Home from "../Home/home";
import Product from "../Product/product";
import Navbar from "../Navbar/navbar";

import App from "../Loader/loader";
import { Switch, Route } from "react-router-dom";

const Main = () => {
  const [searchText, setSearchText] = useState("");
  const [countB, setCountB] = useState(0);
  const [countW, setCountW] = useState(0);
  const [successFlag, setSuccessFlag] = useState(false);

  useEffect(async () => {
    setCountBag();
    setCountWishlist();
  }, []);

  const setCountBag = async () => {
    let k = await localStorage.getItem("products");
    k = JSON.parse(k)?.length;
    setCountB(k);
  };

  const setCountWishlist = async () => {
    let k = await localStorage.getItem("wishlists");
    k = JSON.parse(k)?.length;
    setCountW(k);
  };

  return (
    <div className="all">
      {false ? (
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
            setSearchText={setSearchText}
            countBag={countB}
            countWish={countW}
            successFlag={successFlag}
            setSuccessFlag={setSuccessFlag}
            setCountBag={setCountBag}
            setCountWishlist={setCountWishlist}
          />

          <Switch>
            <Route path="/" exact>
              <Home
                searchText={searchText}
                setCountWishlist={setCountWishlist}
              />
            </Route>
            <Route path="/product">
              <Product
                setCountBag={setCountBag}
                setCountWishlist={setCountWishlist}
              />
            </Route>
          </Switch>
        </>
      )}
    </div>
  );
};

export default Main;
