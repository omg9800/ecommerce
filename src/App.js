import logo from "./logo.svg";
import "./App.css";

import Main from "./components/Main/main";
import Home from "./components/Home/home";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route path="/" exact></Route>
      </Switch> */}
      <Home />
      {/* <Switch>
        <Route path="/" exact></Route>
        <Route path="/main" exact>
          <Main />
          
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;
