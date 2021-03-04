import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Navigation from './components/Navigation';
import About from './components/About';
import NewProduct from './components/NewProduct';
import './App.css';
import Header from './components/Header';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import GuardedRoute from './components/auth/GuardedRoute';
import KonbiniState from './context/KonbiniState';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    console.log(`Authenticated: ${isAuthenticated}`);
  }, [isAuthenticated]);

  return (
    <KonbiniState>
      <Router>
        <Navigation
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
        <Header />
        <Switch>
          <Route path='/register'>
            <Register setIsAuthenticated={setIsAuthenticated} />
          </Route>
          <Route path='/login'>
            <Login setIsAuthenticated={setIsAuthenticated} />
          </Route>
          <GuardedRoute
            path='/products/new'
            auth={isAuthenticated}
            component={NewProduct}
          />
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/products/:productId'>
            <ProductDetail isAuthenticated={isAuthenticated} />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </KonbiniState>
  );
}

export default App;
