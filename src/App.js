import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import Navigation from "./components/Navigation";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
