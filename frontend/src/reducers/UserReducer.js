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

export const UserRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAILURE:
      return { loading: false, userInfo: action.payload };
    default:
      return state;
  }
};

export const UserLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_Login_REQUEST:
      return { loading: true };
    case USER_Login_SUCCESS:
      return { loading: false, LoginInfo: action.payload };
    case USER_Login_FAILURE:
      return { loading: false, LoginInfo: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const UserListReducer = (state = {}, action) => {
  switch (action.type) {
    case ALL_USERS_DATA_REQUEST:
      return { loading: true };
    case ALL_USERS_DATA_SUCCESS:
      return { loading: false, userListInfo: action.payload };
    case ALL_USERS_DATA_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
