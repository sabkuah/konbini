import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import Navigation from "./components/Navigation";
import About from "./components/About";
import NewProduct from "./components/NewProduct";
import "./App.css";
import Header from "./components/Header";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import GuardedRoute from "./components/auth/GuardedRoute";
import KonbiniState from "./context/konbini/KonbiniState";
import UserState from "./context/user/UserState";

function App() {
    return (
        <UserState>
            <KonbiniState>
                <Router>
                    <Navigation />
                    <Header />
                    <Switch>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <GuardedRoute
                            path="/products/new"
                            component={NewProduct}
                        />
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/products/:productId">
                            <ProductDetail />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </KonbiniState>
        </UserState>
    );
}

export default App;
