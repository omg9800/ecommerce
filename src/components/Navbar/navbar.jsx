import React, { Component, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../../images/logo.png";
import { MdSearch } from "react-icons/md";
import { BsFillPersonFill, BsPerson, BsHeart } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import Cart from "../Cart/cart";
const Navbar = ({
  products,
  setProducts,
  allProds,
  setSuccessFlag,
  successFlag,
  setFailFlag,
  count,
}) => {
  const [searchText, setSearchText] = useState("");
  const [countBag, setCountBag] = useState(0);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    // const results = allProds.filter((product) =>
    //   product.title.toLowerCase().includes(searchText)
    // );
    // console.log(e);
    // if (e.code === "Enter" || e.code === "NumpadEnter") {
    //   console.log("Enter key was pressed. Run your function.");
    //   e.preventDefault();
    //   setProducts(results);
    // }
  };

  useEffect(async () => {
    let products = await localStorage.getItem("products");
    let count = JSON.parse(products).length;
    console.log(count);
    setCountBag(countBag + count);
  }, [count]);

  const listener = (event) => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      console.log("Enter key was pressed. Run your function.");
      event.preventDefault();
      const results = allProds.filter((product) =>
        product.title.toLowerCase().includes(searchText)
      );
      setProducts(results);
    }
  };
  document.addEventListener("keydown", listener);

  const openPopup = () => {
    setSuccessFlag(true);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <div className="logo">
          <Link to="/">
            <img className="logo-img" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-left-right">
          <ul>
            <li>
              <Link className="link" to="#">
                MEN
              </Link>
            </li>
            <li>
              <Link className="link" to="#">
                WOMEN
              </Link>
            </li>
            <li>
              <Link className="link" to="#">
                KIDS
              </Link>
            </li>
            <li>
              <Link className="link" to="#">
                HOME & LIVING
              </Link>
            </li>
            <li>
              <Link className="link" to="#">
                BEAUTY
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-mid">
        <input
          className="search"
          type="text"
          placeholder="Search for products, brands and more"
          name="search"
          value={searchText}
          onChange={handleSearch}
        />
        <span className="search-icon">
          <MdSearch />
        </span>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="li-flex">
            <BsPerson />
            <Link className="link" to="#">
              Profile
            </Link>
          </li>
          <li className="li-flex">
            <BsHeart />
            <Link className="link" to="#">
              Wishlist
            </Link>
          </li>
          <li className="li-flex" style={{ position: "relative" }}>
            <BiShoppingBag />
            <span className="bag-count">{countBag}</span>
            <Link className="link" onClick={openPopup}>
              Bag
            </Link>
          </li>
        </ul>
      </div>
      <Cart
        successFlag={successFlag}
        setFailFlag={setFailFlag}
        setSuccessFlag={setSuccessFlag}
      />
    </div>
  );
};

export default Navbar;
