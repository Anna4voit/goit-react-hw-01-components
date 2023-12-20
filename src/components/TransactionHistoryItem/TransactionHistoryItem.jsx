import PropTypes from 'prop-types';
import css from './TransactionHistoryItem.module.css';

export const TransactionHistoryItem = ({ type, amount, currency }) => {
  let newType = type[0].toUpperCase() + type.slice(1);
  return (
    <tr>
      <td className={css.cell}>{newType}</td>
      <td className={css.cell}>{amount}</td>
      <td className={css.cell}>{currency}</td>
    </tr>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
