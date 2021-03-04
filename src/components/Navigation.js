import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/favicon.ico';
import { NavLink } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const Navigation = ({ isAuthenticated, setIsAuthenticated }) => {
  const handleLogOut = async () => {
    try {
      await Auth.signOut();
      setIsAuthenticated(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand>
        <NavLink to='/'>
          <img src={logo} alt='logo' />
          <strong className='red-title mx-1'>KONBINI</strong>
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <NavLink to='/about' className='blue-title px-2'>
            ABOUT
          </NavLink>
          <NavLink to='/products/new' className='blue-title px-2'>
            NEW PRODUCT
          </NavLink>
          {isAuthenticated ? (
            <NavLink
              to='/'
              className='blue-title px-2'
              onClick={() => {
                handleLogOut();
              }}
            >
              LOGOUT
            </NavLink>
          ) : (
            <>
              <NavLink to='/login' className='blue-title px-2'>
                LOGIN
              </NavLink>
              <NavLink to='/register' className='blue-title px-2'>
                REGISTER
              </NavLink>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
