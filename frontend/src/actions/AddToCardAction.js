import { ADD_TO_CARD } from '../constants/AddToCardConstants';
import axios from 'axios';
// import { addToCardReducer } from '../reducers/AddToCardReducer';

const addToCard = (productId, productQuantity) => async (dispatch) => {
  try {
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-type': 'multipart/form-data'
      }
    };
    const { data } = await axios.get(`http://localhost:8000/api/product/${productId}`, config);
    dispatch({
      type: ADD_TO_CARD,
      payload: {
        name: data.result.name,
        price: data.result.price,
        quantity: productQuantity,
        description: data.result.description,
        shipping: data.result.shipping,
        id: data.result._id
      }
    });
    // eslint-disable-next-line no-undef
    // localStorage.setItem('cardItems', JSON.stringify(addToCardReducer.cardItems));
  } catch (error) {
    console.log(error);
  }
};

export { addToCard };
