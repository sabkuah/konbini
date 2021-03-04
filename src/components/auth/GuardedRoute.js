import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../../context/user/userContext';

export default function GuardedRoute({ component: Component, ...rest }) {
  const userContext = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        userContext.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  );
}
