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
  SET_LOADING,
} from '../../types';

const KonbiniState = (props) => {
  const initialState = {
    loading: false,
    products: [],
    product: {},
  };

  const [state, dispatch] = useReducer(KonbiniReducer, initialState);
  const BASE_URL =
    'https://bc0a6qqmm3.execute-api.ca-central-1.amazonaws.com/prod';

  //=======================
  //    Scan Products
  //=======================

  const getProducts = async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    const items = JSON.parse(response.data.body);
    console.log('getProducts in state>>', items);

    dispatch({
      type: SCAN_PRODUCTS,
      payload: items,
    });
  };

  //=======================
  //  Get Product By Id
  //=======================

  const getProductById = async (productId) => {
    const response = await axios.get(`${BASE_URL}/products/${productId}`);
    console.log('getProduct in state>>', response.data);
    dispatch({
      type: GET_PRODUCT,
      payload: response.data,
    });
  };

  //=======================
  //   Update Product
  //=======================

  const updateProduct = async (productId, product) => {
    const response = await axios.put(`${BASE_URL}/products/${productId}`, {
      product: product,
    });
    console.log('update product response:', response);
    dispatch({
      type: UPDATE_PRODUCT,
    });
  };

  //=======================
  //    Delete Product
  //=======================
  const deleteProduct = async (productId) => {
    await axios.delete(`${BASE_URL}/products/${productId}`);
    dispatch({
      type: DELETE_PRODUCT,
    });
  };

  //=======================
  //     Add Product
  //=======================
  const addProduct = async (newProduct) => {
    console.log('context reached!!!');
    const response = await axios.post(`${BASE_URL}/products`, {
      product: newProduct,
    });
    console.log('post sent!!!', response);
    dispatch({
      type: ADD_PRODUCT,
    });
  };

  //=======================
  //    Set Loading
  //=======================
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <KonbiniContext.Provider
      value={{
        loading: state.loading,
        products: state.products,
        product: state.product,
        newProduct: state.newProduct,
        getProducts,
        getProductById,
        updateProduct,
        deleteProduct,
        addProduct,
        setLoading,
      }}
    >
      {props.children}
    </KonbiniContext.Provider>
  );
};

export default KonbiniState;
