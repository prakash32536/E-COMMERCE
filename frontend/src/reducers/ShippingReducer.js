import {
  SAVE_SHIPPING_REQUEST,
  SAVE_SHIPPING_SUCCESS,
  SAVE_SHIPPING_FAILURE,
  GET_SHIPPING_REQUEST,
  GET_SHIPPING_FAILURE,
  GET_SHIPPING_SUCCESS
} from '../constants/ShippingConstants';

const saveShippingDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_SHIPPING_REQUEST:
      return { lodding: true };
    case SAVE_SHIPPING_SUCCESS:
      return { lodding: false, saveShippingInfo: action.payload };
    case SAVE_SHIPPING_FAILURE:
      return { lodding: false, saveShippingError: action.payload };
    default:
      return state;
  }
};

const getShippingDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SHIPPING_REQUEST:
      return { lodding: true };
    case GET_SHIPPING_SUCCESS:
      return { lodding: false, getShippingDetailsInfo: action.payload };
    case GET_SHIPPING_FAILURE:
      return { lodding: false, getShippingDetailsError: action.payload };
    default:
      return state;
  }
};

export { saveShippingDetailsReducer, getShippingDetailsReducer };
