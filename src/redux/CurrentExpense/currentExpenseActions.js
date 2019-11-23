import {
  CHANGE_EXPENSE_NAME,
  CHANGE_EXPENSE_AMOUNT,
  CLEAR_INPUT,
} from '../constants';

export const changeExpenseName = evt => ({
  type: CHANGE_EXPENSE_NAME,
  payload: evt.target.value,
});

export const changeExpenseAmount = evt => ({
  type: CHANGE_EXPENSE_AMOUNT,
  payload: evt.target.value,
});

export const clearInput = () => ({
  type: CLEAR_INPUT,
});
