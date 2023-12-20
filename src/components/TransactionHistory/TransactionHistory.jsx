import { TransactionHistoryItem } from 'components/TransactionHistoryItem/TransactionHistoryItem';
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionsHistory = ({ transactions }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.table_title}>Type</th>
          <th className={css.table_title}>Amount</th>
          <th className={css.table_title}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionHistoryItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionsHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
