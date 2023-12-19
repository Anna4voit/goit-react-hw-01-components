import PropTypes from 'prop-types';
import css from './TransactionHistoryList.module.css';

export const TransactionHistoryList = ({ transactions }) => {
  return (
    <tbody className={css.tbody}>
      {transactions.map(transaction => (
        <tr key={transaction.id}>
          <td>{transaction.type}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.currency}</td>
        </tr>
      ))}
    </tbody>
  );
};

TransactionHistoryList.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
