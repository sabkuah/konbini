import { LOGIN_USER, LOGOUT_USER } from '../../types';
import UserReducer from './userReducer';
import React, { useReducer } from 'react';
import UserContext from './userContext';

const UserState = (props) => {
  const initialState = {
    isAuthenticated: false,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const loginUser = () => dispatch({ type: LOGIN_USER });
  const logoutUser = () => dispatch({ type: LOGOUT_USER });

  return (
    <UserContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        loginUser,
        logoutUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
