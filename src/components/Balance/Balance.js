import React from 'react';
import PropTypes from 'prop-types';
import styles from './Balance.module.css';

const Balance = ({ balance, sumDeposit, sumWithdrawal }) => (
  <section className={styles.balance}>
    <span className={styles.balanceDeposit}>
      {(sumDeposit / 100).toFixed(2)}$
    </span>
    <span className={styles.balanceWithdrawal}>
      {(sumWithdrawal / 100).toFixed(2)}$
    </span>
    <span>Balance: {(balance / 100).toFixed(2)}$</span>
  </section>
);
Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  sumDeposit: PropTypes.number.isRequired,
  sumWithdrawal: PropTypes.number.isRequired,
};
export default Balance;
