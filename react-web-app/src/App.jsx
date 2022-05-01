import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Cart from './components/Cart';
import Dashboard from './components/Dashboard';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Product from './components/Product';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart" >
          <Cart />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/profile">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
