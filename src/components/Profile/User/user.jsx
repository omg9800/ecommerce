import React from "react";
import { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
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
            <Link className="li-item" to="/user">
              Profile
            </Link>
          </li>
          <li>
            <Link className="li-item" to="/user/orders">
              My Orders
            </Link>
          </li>
          <li>
            <Link className="li-item" to="/user/wishlist">
              Wishlist
            </Link>
          </li>
          <li>
            <Link className="li-item" to="/user/addresses">
              Addresses
            </Link>
          </li>
          <li>
            <Link className="li-item" to="/user/cards">
              Saved Cards
            </Link>
          </li>
          <li>
            <Link className="li-item" to="/" onClick={logout}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
      <div className="user-details">
        <Switch>
          <Route path="/user/orders" exact>
            <Order />
          </Route>
          <Route path="/user/wishlist" exact>
            <h1>wish</h1>
          </Route>
          <Route path="/user" exact>
            <Profile />
          </Route>
          <Route path="/user/addresses" exact>
            <Address />
          </Route>
          <Route path="/user/cards" exact>
            <h1>cards</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default User;
