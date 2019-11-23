import { ADD_EXPENSE, DELETE_EXPENSE } from '../constants';

export const addExpense = newExpense => ({
  type: ADD_EXPENSE,
  payload: newExpense,
});

export const deleteExpense = id => ({
  type: DELETE_EXPENSE,
  payload: id,
});
