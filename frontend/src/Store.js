import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { UserRegisterReducer, UserLoginReducer, UserListReducer } from './reducers/UserReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { CreateCategoryReducer, GetAllCategory } from './reducers/CategoryReducer';
import { GetAllProduct, CreateProduct, getProductById } from './reducers/ProductReducer';
import { addToCardReducer } from './reducers/AddToCardReducer';

const reducer = combineReducers({
  UserRegisterReducer: UserRegisterReducer,
  UserLoginReducer: UserLoginReducer,
  UserListReducer: UserListReducer,
  CreateCategoryReducer: CreateCategoryReducer,
  GetAllCategory: GetAllCategory,
  GetAllProduct: GetAllProduct,
  CreateProduct: CreateProduct,
  getProductById: getProductById,
  addToCardReducer: addToCardReducer
});

const dataFromLocalStorage = localStorage.getItem('loginInfo')
  ? JSON.parse(localStorage.getItem('loginInfo'))
  : null;

// const cardItemsFromLocalStorage = localStorage.getItem('cardItems')
//   ? JSON.parse(localStorage.getItem('cardItems'))
//   : [];

const initialState = {
  UserLoginReducer: {
    loginInfo: dataFromLocalStorage
  }
  // addToCardReducer: {
  //   cardItems: cardItemsFromLocalStorage
  // }
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
