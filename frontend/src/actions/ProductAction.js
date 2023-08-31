import axios from 'axios';
import {
  GET_ALL_PRODUCT_REQUEST,
  GET_ALL_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAUILURE,
  GET_ONE_PRODUCT_FAUILURE,
  GET_ONE_PRODUCT_REQUEST,
  GET_ONE_PRODUCT_SUCCESS
} from '../constants/ProductConstants';

//Get all product
export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_PRODUCT_REQUEST
    });
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      }
    };
    const { data } = await axios.get('http://localhost:8000/api/product/get-all', config);
    dispatch({
      type: GET_ALL_PRODUCT_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_PRODUCT_FAILURE,
      payload: error
    });
    console.log(error);
  }
};

//create product
export const createProduct = (token, productFormData) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_PRODUCT_REQUEST
    });
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      }
    };
    const { data } = await axios.post(
      'http://localhost:8000/api/product/create-product',
      productFormData,
      config
    );
    dispatch({
      type: CREATE_PRODUCT_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: CREATE_PRODUCT_FAUILURE,
      payload: error
    });
    console.log(error);
  }
};

export const getProductByID = (ProductID) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ONE_PRODUCT_REQUEST
    });
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-type': 'multipart/form-data'
      }
    };
    const { data } = await axios.get(`http://localhost:8000/api/product/${ProductID}`, config);
    console.log('data from get product by id', data);
    dispatch({
      type: GET_ONE_PRODUCT_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GET_ONE_PRODUCT_FAUILURE,
      payload: error
    });
    console.log(error);
  }
};
