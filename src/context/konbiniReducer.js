import {
  SCAN_PRODUCTS,
  GET_PRODUCT,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case SCAN_PRODUCTS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
