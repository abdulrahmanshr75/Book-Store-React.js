import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Books from "./components/Books";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Books />
        </Route>
        <Route path="/Categories">
          <Categories />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
