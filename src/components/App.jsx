import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { StatisticsList } from './Statistics/StatisticsList/StatisticsList';
import { FriendList } from './FriendList/FriendList';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import css from './App.module.css';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
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
      </div>
    </div>
  );
};
