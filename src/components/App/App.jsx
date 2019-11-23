import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BudgetForm from '../BudgetForm/BudgetFormContainer';
import ExpenseForm from '../ExpenseForm/ExpenseFormContainer';
import ExpensesTable from '../ExpensesTable/ExpensesTableContainer';
import Values from '../Values/ValuesContainer';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const App = ({ expensesLength }) => (
  <Container>
    <BudgetForm />
    <Values />
    <ExpenseForm />
    {expensesLength > 0 && <ExpensesTable />}
  </Container>
);

App.propTypes = {
  expensesLength: PropTypes.number.isRequired,
};

export default App;
