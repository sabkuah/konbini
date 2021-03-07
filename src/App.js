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
import Spinner from './components/utils/Spinner';
import Sales from './components/Sales';
import Products from './components/Products';

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
            <Switch>
              {/* Admin Routes */}
              <Route path='/admin/:path?' exact>
                <Admin>
                  <Switch>
                    <Route path='/admin/sales' component={Sales} />
                    <Route path='/admin/inventory' component={InventoryList} />
                    <GuardedRoute
                      path='/admin/products/new'
                      component={NewProduct}
                    />
                    <Route path='/admin' component={Login} />
                  </Switch>
                </Admin>
              </Route>

              {/* Public Routes */}
              <Route path='/:path' exact>
                <Public>
                  <Switch>
                    <Route path='/register' component={Register} />
                    <Route path='/login' component={Login} />
                    <Route path='/about' component={About} />
                    <Route path='/products' component={Products} />
                    <Route
                      path='/products/:productId'
                      component={ProductDetail}
                    />
                  </Switch>
                </Public>
              </Route>

              {/* Landing Page */}
              <Route path='/' exact component={Home} />
            </Switch>

            {/* <Navigation theme={theme} toggleTheme={toggleTheme} /> */}
          </Router>
        </ThemeProvider>
      </KonbiniState>
    </UserState>
  );
}

export default App;
