import { ADD_TO_CARD } from '../constants/AddToCardConstants';

const addToCardReducer = (state = { cardItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CARD:
      // eslint-disable-next-line no-case-declarations
      const item = action.payload;
      // eslint-disable-next-line no-case-declarations
      const existItems = state.cardItems.find((x) => x.id === item.id);
      if (existItems) {
        return {
          ...state,
          cardItems: state.cardItems.map((y) => (y.id === item.id ? item : y))
        };
      } else {
        return {
          ...state,
          cardItems: [...state.cardItems, item]
        };
      }
    default:
      return state;
  }
};

export { addToCardReducer };
