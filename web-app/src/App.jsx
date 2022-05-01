import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/cart" >
          <Cart />
        </Route>
      </Switch>
    </Router>
  )
}

const Home = () => {
  return (
    <div>
      HOME
    </div>
  )
}

const Cart = () => {
  return (
    <div>
      CART
    </div>
  ) 
}

export default App