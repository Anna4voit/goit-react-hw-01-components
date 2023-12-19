import css from './TransactionHistory.module.css';

export const TransactionsHistory = ({ children }) => {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {children}
    </table>
  );
};
