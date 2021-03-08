import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/favicon.ico';
import { NavLink } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import Toggle from '../../styles/Toggler';
import UserContext from '../../context/user/userContext';
import { useHistory } from 'react-router-dom';

const AdminNav = ({ theme, toggleTheme }) => {
  const userContext = useContext(UserContext);
  const history = useHistory();

  const handleLogOut = async () => {
    try {
      await Auth.signOut();
      userContext.logoutUser();
      history.push('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Navbar expand='lg bg-dark'>
      <Navbar.Brand>
        <NavLink to='/admin/sales'>
          <img src={logo} alt='logo' />
          <strong className='red-title-brand mx-1'>ADMIN DASHBOARD</strong>
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <NavLink to='/admin/new' className='blue-title-lg px-2'>
            NEW PRODUCT
          </NavLink>
          <NavLink to='/admin/sales' className='blue-title-lg px-2'>
            SALES
          </NavLink>
          <NavLink to='/' className='blue-title-lg px-2'>
            PUBLIC
          </NavLink>
        </Nav>
        <Nav className='ml-auto'>
          {userContext.isAuthenticated ? (
            <NavLink
              to='/'
              className='blue-title-lg px-2'
              onClick={() => {
                handleLogOut();
              }}
            >
              LOGOUT
            </NavLink>
          ) : (
            <>
              <NavLink to='/login' className='blue-title-lg px-2'>
                LOGIN
              </NavLink>
              <NavLink to='/register' className='blue-title-lg px-2'>
                REGISTER
              </NavLink>
            </>
          )}
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AdminNav;
