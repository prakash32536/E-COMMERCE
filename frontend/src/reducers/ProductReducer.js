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

export const GetAllProduct = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT_REQUEST:
      return { loddingGetAllProduct: true };
    case GET_ALL_PRODUCT_SUCCESS:
      return { loddingGetAllProduct: false, productList: action.payload };
    case GET_ALL_PRODUCT_FAILURE:
      return { loddingGetAllProduct: false, error: action.payload };
    default:
      return state;
  }
};

export const CreateProduct = (state = {}, action) => {
  switch (action.type) {
    case CREATE_PRODUCT_REQUEST:
      return { lodding: true };
    case CREATE_PRODUCT_SUCCESS:
      return { lodding: false, ProductInfo: action.payload };
    case CREATE_PRODUCT_FAUILURE:
      return { lodding: false, error: action.payload };
    default:
      return state;
  }
};

export const getProductById = (state = {}, action) => {
  switch (action.type) {
    case GET_ONE_PRODUCT_REQUEST:
      return { lodding: true };
    case GET_ONE_PRODUCT_SUCCESS:
      return { lodding: false, ProductInfo: action.payload };
    case GET_ONE_PRODUCT_FAUILURE:
      return { lodding: false, error: action.error };
    default:
      return state;
  }
};
