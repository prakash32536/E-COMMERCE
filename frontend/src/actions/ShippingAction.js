import axios from 'axios';
import {
  SAVE_SHIPPING_REQUEST,
  SAVE_SHIPPING_SUCCESS,
  SAVE_SHIPPING_FAILURE,
  GET_SHIPPING_REQUEST,
  GET_SHIPPING_SUCCESS,
  GET_SHIPPING_FAILURE
} from '../constants/ShippingConstants';

const saveShippingDetails = (token, shippingData) => async (dispatch) => {
  try {
    dispatch({
      type: SAVE_SHIPPING_REQUEST
    });
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };
    const { data } = await axios.post(
      'http://localhost:8000/api/shipping/save-address',
      shippingData,
      config
    );
    console.log('data from saveShipping action', data);
    dispatch({
      type: SAVE_SHIPPING_SUCCESS,
      payload: data
    });
  } catch (error) {
    console.log('error from saveShipping action', error);
    dispatch({
      type: SAVE_SHIPPING_FAILURE,
      payload: error
    });
  }
};

const getShippingdetails = (token, userId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_SHIPPING_REQUEST
    });
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };
    const { data } = await axios.get(
      `http://localhost:8000/api/shipping/get-address/${userId}`,
      config
    );
    dispatch({
      type: GET_SHIPPING_SUCCESS,
      payload: data
    });
  } catch (error) {
    console.log('error from getShippingDetails Action', error);
    dispatch({
      type: GET_SHIPPING_FAILURE,
      payload: error
    });
  }
};

export { saveShippingDetails, getShippingdetails };
