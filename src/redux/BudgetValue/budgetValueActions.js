import { ADD_BUDGET } from '../constants';

const addBudget = value => ({
  type: ADD_BUDGET,
  payload: +value,
});

export default addBudget;
