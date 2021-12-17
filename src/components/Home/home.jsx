import React, { useState, useEffect } from "react";
import HomeCarousel from "../Helper/carousel";
import Navbar from "../Navbar/navbar";
import { Link, NavLink, Route, Switch, useParams } from "react-router-dom";
import "./home.css";
import Card from "./Card/card";
import Main from "../Main/main";
import Product from "../Product/product";
function Home() {
  const [searchText, setSearchText] = useState("");
  const [countB, setCountB] = useState(0);
  const [countW, setCountW] = useState(0);
  const [successFlag, setSuccessFlag] = useState(false);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(async () => {
    setCountBag();
    setCountWishlist();
  }, []);

  useEffect(async () => {
    fetch("https://ecommerce-980.herokuapp.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        console.log(data);
      });

    fetch("https://ecommerce-980.herokuapp.com/products/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
        console.log(data);
      });
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

  let { cat } = useParams();
  console.log(cat, "in home=========>");

  return (
    <div className="home-container">
      <div className="navbar-container">
        <Navbar
          setSearchText={setSearchText}
          countBag={countB}
          countWish={countW}
          successFlag={successFlag}
          setSuccessFlag={setSuccessFlag}
          setCountBag={setCountBag}
          setCountWishlist={setCountWishlist}
        />
      </div>

      <Route path="/:cat" exact>
        <Main
          searchText={searchText}
          setSearchText={setSearchText}
          setCountBag={setCountBag}
          setCountWishlist={setCountWishlist}
        />
      </Route>
      <Route path="/:cat/product">
        <Product
          setCountBag={setCountBag}
          setCountWishlist={setCountWishlist}
        />
      </Route>
      <Route path="/" exact>
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
        <div className="footer">
          <div className="footer-icon"></div>
          <div className="footer-text">
            <div className="footer-col">
              <p className="head">About Us</p>
              <Link className="link-item">About Us</Link>
              <Link className="link-item">About Us</Link>
              <Link className="link-item">About Us</Link>
              <Link className="link-item">About Us</Link>
              <Link className="link-item">About Us</Link>
            </div>
            <div className="footer-col">
              <p className="head">About Us</p>
              <Link className="link-item">About Us</Link>
              <Link className="link-item">About Us</Link>
              <Link className="link-item">About Us</Link>
              <Link className="link-item">About Us</Link>
              <Link className="link-item">About Us</Link>
            </div>
            <div className="footer-col">
              <p className="head">About Us</p>
              <Link className="link-item">About Us</Link>
              <Link className="link-item">About Us</Link>
              <Link className="link-item">About Us</Link>
              <Link className="link-item">About Us</Link>
              <Link className="link-item">About Us</Link>
            </div>
            <div className="footer-col">
              <p className="head">About Us</p>
              <Link className="link-item">About Us</Link>
              <Link className="link-item">About Us</Link>
              <Link className="link-item">About Us</Link>
              <Link className="link-item">About Us</Link>
              <Link className="link-item">About Us</Link>
            </div>
          </div>
        </div>
      </Route>
    </div>
  );
}

export default Home;
