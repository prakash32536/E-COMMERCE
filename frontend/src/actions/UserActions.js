import axios from 'axios';
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_Login_REQUEST,
  USER_Login_SUCCESS,
  USER_Login_FAILURE,
  USER_LOGOUT,
  ALL_USERS_DATA_REQUEST,
  ALL_USERS_DATA_SUCCESS,
  ALL_USERS_DATA_FAILURE
} from '../constants/UserConstants';

export const register = (name, email, password, role) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST
    });
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      }
    };
    const { data } = await axios.post(
      'http://localhost:8000/api/users/register',
      { name, email, password, role },
      config
    );
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: USER_REGISTER_FAILURE,
      payload: err
    });
    console.log('error', err);
  }
};

//login

export const Login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_Login_REQUEST
    });
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      }
    };
    const { data } = await axios.post(
      'http://localhost:8000/api/users/login',
      { email, password },
      config
    );
    dispatch({
      type: USER_Login_SUCCESS,
      payload: data
    });
    localStorage.setItem('loginInfo', JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: USER_Login_FAILURE,
      payload: err
    });
    console.log('error', err);
  }
};

// logout

export const logout = () => async (dispatch) => {
  localStorage.removeItem('loginInfo');
  dispatch({
    type: USER_LOGOUT
  });
};

// get all user

export const allUsers = (token, selectData, searchData) => async (dispatch) => {
  try {
    dispatch({
      type: ALL_USERS_DATA_REQUEST
    });
    console.log('token', token);
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };
    if (selectData >= 0 || searchData) {
      const { data } = await axios.get(
        `http://localhost:8000/api/users/getAllUsers/?role=${selectData}&name=${searchData}`,
        config
      );
      dispatch({
        type: ALL_USERS_DATA_SUCCESS,
        payload: data
      });
    } else {
      const { data } = await axios.get(`http://localhost:8000/api/users/getAllUsers`, config);
      dispatch({
        type: ALL_USERS_DATA_SUCCESS,
        payload: data
      });
    }
  } catch (error) {
    dispatch({
      type: ALL_USERS_DATA_FAILURE,
      payload: error
    });
  }
};
