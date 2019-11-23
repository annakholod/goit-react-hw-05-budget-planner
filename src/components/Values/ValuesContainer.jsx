import { connect } from 'react-redux';
import Values from './Values';
import {
  getBudgetValue,
  getTotalExpenses,
  getBalance,
} from '../../redux/selectors/selector';

const mapStateToProps = state => ({
  budgetValue: getBudgetValue(state),
  expenses: getTotalExpenses(state),
  balance: getBalance(state),
});

export default connect(mapStateToProps, null)(Values);
