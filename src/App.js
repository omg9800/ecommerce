import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products/products";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Product from "./components/Product/product";
import Main from "./components/Main/main";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Main />
      {/* <Switch>
        <Route path="/main" exact>
          <Main />
        </Route>
        
      </Switch> */}
    </div>
  );
}

export default App;
