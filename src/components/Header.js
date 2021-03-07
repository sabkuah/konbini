import React from 'react';
import logo from '../assets/konbini-logo.png';

const Header = () => {
  return (
    <div className='header mx-1 row d-flex align-items-center justify-content-center'>
      <img className='logo mr-3' src={logo} alt='konbini-logo' />
      <h1 className='red-title' style={{ fontSize: '3.5em' }}>
        KONBINI JAPANESE CONVENIENCE
      </h1>
    </div>
  );
};

export default Header;
