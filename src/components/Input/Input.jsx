import css from './Input.module.css';
import PropTypes from 'prop-types';

function Input({ color = 'light' }) {
  return <input className={`${css.input} ${css[color]}`} />;
}

Input.propTypes = {
  color: PropTypes.oneOf(['light', 'dark']),
};
export default Input;
