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
        {transactions.map(({ id, type, amount, currency }) => {
          let newType = type[0].toUpperCase() + type.slice(1);
          return (
            <tr key={id}>
              <td className={css.cell}>{newType}</td>
              <td className={css.cell}>{amount}</td>
              <td className={css.cell}>{currency}</td>
            </tr>
          );
        })}
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
