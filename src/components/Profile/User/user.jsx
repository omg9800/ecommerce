import React from "react";
import { useEffect, useState } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import "./user.css";
import Profile from "../ProfileDetails/profile";
import Address from "../Address/address";
import Order from "../Order/order";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/auth";

function User(props) {
  const dispatch = useDispatch();
  const [user, setUser] = useState(Object);

  useEffect(async () => {
    let user = await localStorage.getItem("user");
    user = JSON.parse(user);
    setUser(user);
  }, []);

  const logout = () => {
    localStorage.clear();
    dispatch(authActions.logout());
    window.location = "/";
  };

  return (
    <div className="user-container">
      <div className="user-sidebar">
        <ul className="ul-list">
          <li>
            <NavLink
              activeClassName="selected"
              className="li-item"
              to="/user/profile"
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="selected"
              className="li-item"
              to="/user/orders"
            >
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="selected"
              className="li-item"
              to="/user/wishlist"
            >
              Wishlist
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="selected"
              className="li-item"
              to="/user/addresses"
            >
              Addresses
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="selected"
              className="li-item"
              to="/user/cards"
            >
              Saved Cards
            </NavLink>
          </li>
          <li>
            <NavLink className="li-item" to="/" onClick={logout}>
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="user-details">
        <Switch>
          <Route path="/user/orders" exact>
            <Order />
          </Route>
          <Route path="/user/wishlist" exact>
            <h3 className="center-bold">Wishlists</h3>
          </Route>
          <Route path="/user/profile" exact>
            <Profile />
          </Route>
          <Route path="/user/addresses" exact>
            <Address />
          </Route>
          <Route path="/user/cards" exact>
            <h3 className="center-bold">Cards</h3>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default User;
