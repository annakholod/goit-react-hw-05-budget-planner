import { combineReducers } from 'redux';
import {
  CHANGE_EXPENSE_NAME,
  CHANGE_EXPENSE_AMOUNT,
  CLEAR_INPUT,
} from '../constants';

const nameReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_EXPENSE_NAME:
      return action.payload;
    case CLEAR_INPUT:
      return '';
    default:
      return state;
  }
};

const amountReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_EXPENSE_AMOUNT:
      return action.payload;
    case CLEAR_INPUT:
      return '';
    default:
      return state;
  }
};

export default combineReducers({
  name: nameReducer,
  amount: amountReducer,
});
