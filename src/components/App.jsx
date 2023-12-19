import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { StatisticsList } from './StatisticsList/StatisticsList';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistoryList } from './TransactionHistoryList/TransactionHistoryList';
import { TransactionsHistory } from './TransactionHistory/TransactionHistory';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.box}>
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data}>
        <StatisticsList stats={data} />
      </Statistics>
      <FriendList friends={friends} />
      <TransactionsHistory>
        <TransactionHistoryList transactions={transactions} />
      </TransactionsHistory>
    </div>
  );
};
