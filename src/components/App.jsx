import { Profile } from './Profile/Profile';
import user from '../data/user.json';
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
      </div>
    </div>
  );
};
