import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Navigation from './components/Navigation';
import About from './components/About';
import NewProduct from './components/NewProduct';
import './App.css';
import Header from './components/Header';
import EditProduct from './components/EditProduct';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

function App() {
  return (
    <Router>
      <Navigation />
      <Header />
      <Switch>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/products/new'>
          <NewProduct />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/products/:productId/edit'>
          <EditProduct />
        </Route>
        <Route path='/products/:productId'>
          <ProductDetail />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
