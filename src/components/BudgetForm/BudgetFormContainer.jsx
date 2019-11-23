import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
import { getBudget } from '../../redux/selectors/selector';
import {
  changeBudget,
  clearInput,
} from '../../redux/BudgetInput/budgetInputActions';
import addBudget from '../../redux/BudgetValue/budgetValueActions';

const mapStateToProps = state => ({
  budgetInput: getBudget(state),
});

const mapDispatchToProps = {
  changeBudget,
  clearInput,
  addBudget,
};

export default connect(mapStateToProps, mapDispatchToProps)(BudgetForm);
