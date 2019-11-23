import { CHANGE_BUDGET_INPUT, CLEAR_INPUT } from '../constants';

export const changeBudget = evt => ({
  type: CHANGE_BUDGET_INPUT,
  payload: evt.target.value,
});

export const clearInput = () => ({
  type: CLEAR_INPUT,
});
