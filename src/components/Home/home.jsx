import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import HomeCarousel from "../Helper/carousel";
import { Route } from "react-router-dom";
import "./home.css";
import Card from "./Card/card";
import Checkout from "../Order/Checkout/checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer/footer";

function Home() {
  const [bagArr, setBagArr] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const user = useSelector((state) => state.user.user);
  let userId = user?._id;

  useEffect(async () => {
    fetch("https://ecommerce-980.herokuapp.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });

    fetch("https://ecommerce-980.herokuapp.com/products/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);

  return (
    <div className="home-container">
      <Route path="/">
        <div className="carousel">
          <HomeCarousel />
        </div>
        <div className="home-ex-car">
          <h1>Explore Products by Category</h1>
          <div className="brands-container">
            {categories.map((m) => {
              return <Card cat={m} />;
            })}
          </div>
          <h1>Explore Products by Brands</h1>
          <div className="brands-container">
            {brands.map((m) => {
              return <Card cat={m} />;
            })}
          </div>
        </div>
        <Footer />
      </Route>
    </div>
  );
}

export default Home;
