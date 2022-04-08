import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navbar.css";
import logo from "../../images/logo.svg";
import { MdSearch } from "react-icons/md";
import { BsPerson, BsHeart } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import Cart from "../Cart/cart";

const Navbar = ({ setSearchText, searchText }) => {
  const [cartFlag, setCartFlag] = useState(false);

  const isAuth = useSelector((state) => state.auth.isAuth);
  const user = useSelector((state) => state.user.user);
  const items = useSelector((state) => state.cart.items);
  let countBag = items.length;

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const openPopup = () => {
    setCartFlag(true);
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
              <Link className="link" to="/male">
                MEN
              </Link>
            </li>
            <li>
              <Link className="link" to="/female">
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
          placeholder="Search for product's brand"
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
            <Link className="link" to={isAuth ? "/user" : "/profile"}>
              {isAuth ? user?.name?.firstname : "Profile"}
            </Link>
          </li>
          <li className="li-flex">
            <BsHeart />

            <Link className="link" to="#" style={{ position: "relative" }}>
              Wishlist
            </Link>
          </li>
          <li className="li-flex" style={{ position: "relative" }}>
            <BiShoppingBag />
            {countBag > 0 ? <span className="bag-count">{countBag}</span> : ""}
            <Link className="link" onClick={openPopup}>
              Bag
            </Link>
          </li>
        </ul>
      </div>
      {cartFlag && <Cart setSuccessFlag={setCartFlag} successFlag={cartFlag} />}
    </div>
  );
};

export default Navbar;
