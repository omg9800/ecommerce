import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import HomeCarousel from "../Helper/carousel";
import { Route } from "react-router-dom";
import "./home.css";
import Card from "./Card/card";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer/footer";
import apiUrl from "../../services/service";

function Home() {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const user = useSelector((state) => state.user.user);
  let userId = user?._id;

  useEffect(async () => {
    fetch(`${apiUrl}/products/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });

    fetch(`${apiUrl}/products/brands`)
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
          <div className="category-container">
            {categories.map((m) => {
              return <Card cat={m} />;
            })}
          </div>
          {/* <h1>Explore Products by Brands</h1> */}
          {/* <div className="brands-container">
            {brands.map((m) => {
              return <Card cat={m} />;
            })}
          </div> */}
        </div>
        <Footer />
      </Route>
    </div>
  );
}

export default Home;
