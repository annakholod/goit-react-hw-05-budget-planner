import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {
  changeExpenseName,
  changeExpenseAmount,
  clearInput,
} from '../../redux/CurrentExpense/currentExpenseActions';
import {
  getCurrentExpenseName,
  getCurrentExpenseAmount,
  getCurrentExpense,
  getBalance,
} from '../../redux/selectors/selector';
import { addExpense } from '../../redux/Expenses/expensesActions';

const mapStateToProps = state => ({
  name: getCurrentExpenseName(state),
  amount: getCurrentExpenseAmount(state),
  currentExpense: getCurrentExpense(state),
  balance: getBalance(state),
});

const mapDispatchToProps = {
  changeExpenseName,
  changeExpenseAmount,
  clearInput,
  addExpense,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
