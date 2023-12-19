import PropTypes from 'prop-types';
import css from './StatisticsList.module.css';
import { getRandomHexColor } from './RandomColor';

export const StatisticsList = ({ stats }) => {
  return (
    <ul className={css.stat_list}>
      {stats.map(item => (
        <li
          className={css.item}
          key={item.id}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <span className={css.label}>{item.label}</span>
          <span className={css.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

StatisticsList.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
