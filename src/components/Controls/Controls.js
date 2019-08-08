import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({
  handleGetValue,
  handleDeposit,
  handleWithdrawal,
  inputValue,
}) => (
  <section className={styles.controls}>
    <input
      type="number"
      name="value"
      onChange={handleGetValue}
      placeholder="0"
      value={inputValue}
    />
    <button type="button" onClick={handleDeposit}>
      Deposit
    </button>
    <button type="button" onClick={handleWithdrawal}>
      Withdraw
    </button>
  </section>
);
Controls.propTypes = {
  handleGetValue: PropTypes.func.isRequired,
  handleDeposit: PropTypes.func.isRequired,
  handleWithdrawal: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};
export default Controls;
