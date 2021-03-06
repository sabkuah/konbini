import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
import NewProduct from './components/NewProduct';
import './App.css';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import GuardedRoute from './components/auth/GuardedRoute';
import KonbiniState from './context/konbini/KonbiniState';
import UserState from './context/user/UserState';
import InventoryList from './components/InventoryList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globalStyles';
import { lightTheme, darkTheme } from './styles/Themes';
import { useDarkMode } from './styles/useDarkMode';
import Public from './containers/layouts/Public';
import Admin from './containers/layouts/Admin';
import Sales from './components/Sales';
import Products from './components/Products';
import NotFound from './components/utils/NotFound';

function App() {
  const [theme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  {
    /* <Navigation theme={theme} toggleTheme={toggleTheme} /> */
  }

  return (
    <UserState>
      <KonbiniState>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <Router>
            <Switch>
              {/* Admin Routes */}
              <Route path='/admin/:path?' exact>
                <Admin>
                  {/* To Do: Guard Admin Routes, fix GuardedRouteHOC */}
                  <Switch>
                    <Route path='/admin/sales' component={Sales} />
                    <Route path='/admin/inventory' component={InventoryList} />
                    <Route path='/admin/new' component={NewProduct} />
                    <Route path='/admin' component={Login} />
                    <Route component={NotFound} />
                  </Switch>
                </Admin>
              </Route>

              {/* Public Routes */}
              <Route path='/:path'>
                <Public>
                  <Switch>
                    <Route path='/register' component={Register} />
                    <Route path='/login' component={Login} />
                    <Route path='/about' component={About} />
                    <Route path='/products' exact component={Products} />
                    <Route
                      path='/products/:productId'
                      component={ProductDetail}
                    />
                    <Route component={NotFound} />
                  </Switch>
                </Public>
              </Route>

              {/* Landing Page */}
              <Route path='/' exact component={Home} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </ThemeProvider>
      </KonbiniState>
    </UserState>
  );
}

export default App;
