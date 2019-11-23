import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../../shared/Button/Button';

const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  width: 100%;

  tr {
    border-bottom: 1px solid #212121;
  }

  td,
  th {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const ExpensesTable = ({ expenses, deleteExpense }) => (
  <Table>
    <thead>
      <tr>
        <th>Expense name</th>
        <th>Expense amount</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {expenses.map(({ id, name, amount }) => (
        <tr key={id}>
          <td>{name}</td>
          <td>{amount}</td>
          <td>
            <Button label="Delete" onClick={() => deleteExpense(id)} />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default ExpensesTable;
