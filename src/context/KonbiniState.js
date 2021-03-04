import React, { useReducer } from 'react';
import axios from 'axios';
import KonbiniContext from './konbiniContext';
import KonbiniReducer from './konbiniReducer';
import {
  SCAN_PRODUCTS,
  GET_PRODUCT,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from '../../types';

const KonbiniState = (props) => {
  const initialState = {
    loading: false,
    products: [],
    product: {},
    newProduct: {},
  };

  const [state, dispatch] = useReducer(KonbiniReducer, initialState);
  const BASE_URL =
    'https://bc0a6qqmm3.execute-api.ca-central-1.amazonaws.com/prod';
};
