import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/favicon.ico";

const Navigation = ({ isAuthenticated }) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
                <img src={logo} alt="logo" />
                <text className="red-title mx-1">KONBINI</text>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/about" className="blue-title">
                        ABOUT
                    </Nav.Link>
                    <Nav.Link href="/products/new" className="blue-title">
                        NEW PRODUCT
                    </Nav.Link>
                    {isAuthenticated ? (
                        <Nav.Link href="/login" className="blue-title">
                            Logout
                        </Nav.Link>
                    ) : (
                        <>
                            <Nav.Link href="/login" className="blue-title">
                                LOGIN
                            </Nav.Link>
                            <Nav.Link href="/register" className="blue-title">
                                REGISTER
                            </Nav.Link>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;
