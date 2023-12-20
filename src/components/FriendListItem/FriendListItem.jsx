import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        className={
          isOnline ? `${css.status} ${css.status_isOnline}` : `${css.status}`
        }
      ></span>

      <div className={css.box_img}>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      </div>
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
