import React, { Component, useState, useEffect } from "react";
import Sidebar from "../Sidebar/sidebar";
import Products from "../Products/products";
import FilterableProducts from "../FilterableProducts/filterableProducts";
import Product from "../Product/product";
import Navbar from "../Navbar/navbar";
import Home from "../Home/home";
import App from "../Loader/loader";
import { Switch, Route } from "react-router-dom";

const Main = ({ searchText, setCountBag, setCountWishlist }) => {
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
          <Switch>
            <Route path="/:cat" exact>
              <FilterableProducts
                searchText={searchText}
                setCountWishlist={setCountWishlist}
              />
            </Route>

            <Route path="/main/product">
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
