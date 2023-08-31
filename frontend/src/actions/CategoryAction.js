import axios from 'axios';
import {
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILURE,
  GET_ALL_CATEGORY_REQUEST,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_FAILURE
} from '../constants/CategoryConstants';

// create category
export const CreateCategory = (name, token) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_CATEGORY_REQUEST
    });
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };
    const { data } = await axios.post(
      'http://localhost:8000/api/category/create-category',
      { name },
      config
    );
    dispatch({
      type: CREATE_CATEGORY_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: CREATE_CATEGORY_FAILURE,
      payload: error
    });
    console.log(error);
  }
};

// get all category

export const geAllCategory = (categoryFilterById) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_CATEGORY_REQUEST
    });
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      }
    };
    if (categoryFilterById) {
      const { data } = await axios.get(
        `http://localhost:8000/api/category/all-category?category=${categoryFilterById}`,
        config
      );
      dispatch({
        type: GET_ALL_CATEGORY_SUCCESS,
        payload: data
      });
    } else {
      const { data } = await axios.get(`http://localhost:8000/api/category/all-category`, config);
      dispatch({
        type: GET_ALL_CATEGORY_SUCCESS,
        payload: data
      });
    }
  } catch (error) {
    dispatch({
      type: GET_ALL_CATEGORY_FAILURE,
      payload: error
    });
    console.log(error);
  }
};
