import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='/'>KONBINI</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/about'>ABOUT</Nav.Link>
          <Nav.Link href='/products/new'>NEW PRODUCT</Nav.Link>
          <Nav.Link href='/login'>LOGIN</Nav.Link>
          <Nav.Link href='/register'>REGISTER</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
