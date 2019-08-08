import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionsHistory.module.css';

const TransactionHistory = ({ transactions }) => (
  <table className={styles.history}>
    <thead>
      <tr>
        <th>Transaction</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(transaction => (
        <tr key={transaction.id}>
          <td>{transaction.type}</td>
          <td>{(transaction.amount / 100).toFixed(2)}$</td>
          <td>{transaction.date}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default TransactionHistory;
