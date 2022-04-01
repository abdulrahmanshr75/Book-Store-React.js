import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Categories from './pages/Categories';
import Navbar from './components/Navbar';
import Mainpage from './pages/Mainpage';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Mainpage />
        </Route>
        <Route path="/Categories">
          <Categories />
        </Route>
      </Switch>
    </>
  );
}

export default App;
