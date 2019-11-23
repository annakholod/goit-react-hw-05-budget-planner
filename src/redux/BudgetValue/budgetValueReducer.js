import { ADD_BUDGET } from '../constants';

const budgetValueReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_BUDGET:
      return action.payload;
    default:
      return state;
  }
};

export default budgetValueReducer;
