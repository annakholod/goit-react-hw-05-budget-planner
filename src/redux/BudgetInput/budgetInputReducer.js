import { CHANGE_BUDGET_INPUT, CLEAR_INPUT } from '../constants';

const budgetInputReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_BUDGET_INPUT:
      return action.payload;
    case CLEAR_INPUT:
      return '';
    default:
      return state;
  }
};

export default budgetInputReducer;
