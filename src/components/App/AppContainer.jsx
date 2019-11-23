import { connect } from 'react-redux';
import App from './App';
import { getExpensesLength } from '../../redux/selectors/selector';

const mapStateToProps = state => ({
  expensesLength: getExpensesLength(state),
});

export default connect(mapStateToProps, null)(App);
