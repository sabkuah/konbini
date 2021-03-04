import { LOGIN_USER, LOGOUT_USER } from '../../types';

const UserReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default UserReducer;
