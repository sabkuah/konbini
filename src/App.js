import React from 'react';
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
import KonbiniState from './context/konbini/KonbiniState';
import UserState from './context/user/UserState';
import Footer from './components/footer';
import Products from './components/Products';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globalStyles';
import { lightTheme, darkTheme } from './styles/Themes';
import { useDarkMode } from './styles/useDarkMode';

import Spinner from './components/utils/Spinner';

function App() {
  const [theme, toggleTheme, loading] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (loading) return <Spinner />;
  return (
    <UserState>
      <KonbiniState>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <Router>
            <Navigation theme={theme} toggleTheme={toggleTheme} />
            <Header />
            <Switch>
              <Route path='/register'>
                <Register />
              </Route>
              <Route path='/login'>
                <Login />
              </Route>
              <GuardedRoute path='/products/new' component={NewProduct} />
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/products/:productId'>
                <ProductDetail />
              </Route>
              <Route path='/products'>
                <Products />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </ThemeProvider>
      </KonbiniState>
    </UserState>
  );
}

export default App;
