import { createSelector } from 'reselect';

export const getBudget = state => state.budgetInput;
export const getCurrentExpense = state => state.currentExpense;
export const getCurrentExpenseName = state => state.currentExpense.name;
export const getCurrentExpenseAmount = state => state.currentExpense.amount;
export const getAllExpenses = state => state.expenses;
export const getBudgetValue = state => state.budgetValue;

export const getTotalExpenses = createSelector(getAllExpenses, expenses => {
  return expenses.reduce((total, expense) => total + Number(expense.amount), 0);
});

export const getBalance = createSelector(
  getBudgetValue,
  getTotalExpenses,
  (budget, expenses) => Number(budget) - Number(expenses),
);

export const getExpensesLength = createSelector(
  getAllExpenses,
  expenses => expenses.length,
);
