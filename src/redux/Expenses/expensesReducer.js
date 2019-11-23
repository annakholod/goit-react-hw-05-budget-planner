import { ADD_EXPENSE, DELETE_EXPENSE } from '../constants';

const initialData = [];

const expensesReducer = (state = initialData, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.payload];
    case DELETE_EXPENSE:
      return state.filter(el => el.id !== action.payload);
    default:
      return state;
  }
};

export default expensesReducer;
