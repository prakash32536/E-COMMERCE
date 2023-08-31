import {
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILURE,
  GET_ALL_CATEGORY_REQUEST,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_FAILURE
} from '../constants/CategoryConstants';

export const CreateCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_CATEGORY_REQUEST:
      return { lodding: true };
    case CREATE_CATEGORY_SUCCESS:
      return { lodding: false, categoryInfo: action.payload };
    case CREATE_CATEGORY_FAILURE:
      return { lodding: false, error: action.payload };
    default:
      return state;
  }
};

export const GetAllCategory = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY_REQUEST:
      return { lodding: true };
    case GET_ALL_CATEGORY_SUCCESS:
      return { lodding: false, CategoryList: action.payload };
    case GET_ALL_CATEGORY_FAILURE:
      return { lodding: false, error: action.payload };
    default:
      return state;
  }
};
