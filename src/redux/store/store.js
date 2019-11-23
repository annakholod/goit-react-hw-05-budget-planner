import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import budgetInputReducer from '../BudgetInput/budgetInputReducer';
import currentExpenseReducer from '../CurrentExpense/currentExpenseReducer';
import expensesReducer from '../Expenses/expensesReducer';
import budgetValueReducer from '../BudgetValue/budgetValueReducer';

const rootReducer = combineReducers({
  budgetInput: budgetInputReducer,
  budgetValue: budgetValueReducer,
  currentExpense: currentExpenseReducer,
  expenses: expensesReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
