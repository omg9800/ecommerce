import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products/products";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Product from "./components/Product/product";
import { Switch, Route } from "react-router";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/product" exact>
          <Product />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
