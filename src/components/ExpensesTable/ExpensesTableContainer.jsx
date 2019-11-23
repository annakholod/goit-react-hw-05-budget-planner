import { connect } from 'react-redux';
import ExpensesTable from './ExpensesTable';
import { deleteExpense } from '../../redux/Expenses/expensesActions';
import { getAllExpenses } from '../../redux/selectors/selector';

const mapStateToProps = state => ({
  expenses: getAllExpenses(state),
});

const mapDispatchToProps = {
  deleteExpense,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
