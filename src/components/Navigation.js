import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='/'>
        <img src='favicon.ico' alt='logo' />
        <text className='red-title mx-1'>KONBINI</text>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/about' className='blue-title'>
            ABOUT
          </Nav.Link>
          <Nav.Link href='/products/new' className='blue-title'>
            NEW PRODUCT
          </Nav.Link>
          <Nav.Link href='/login' className='blue-title'>
            LOGIN
          </Nav.Link>
          <Nav.Link href='/register' className='blue-title'>
            REGISTER
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
