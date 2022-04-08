import { useEffect, useState } from "react";
import "./App.css";

import Home from "./components/Home/home";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth";
import { userActions } from "./store/user";
import Navbar from "./components/Navbar/nav";
import FilterableProducts from "./components/FilterableProducts/filterableProducts";
import Product from "./components/Product/product";
import User from "./components/Profile/User/user";
import Login from "./components/Profile/Login/login";
import Register from "./components/Profile/Register/register";
import Checkout from "./components/Order/Checkout/checkout";
import { fetchCartData } from "./store/cart";
import { getUpdatedUser } from "./services/user";

function App() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  let user = useSelector((state) => state.user.user);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(authActions.login(user));
      getUpdatedUser(user._id).then((data) =>
        dispatch(userActions.setUser(data))
      );
    }
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    dispatch(fetchCartData(user?._id));
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/profile">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/:cat/product">
          <Product />
        </Route>
        <Route path="/:cat">
          <FilterableProducts searchText={searchText} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
