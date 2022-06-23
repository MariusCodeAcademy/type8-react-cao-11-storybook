import css from './Input.module.css';
import PropTypes from 'prop-types';

function Input({ color = 'light', ...rest }) {
  return <input className={`${css.input} ${css[color]}`} {...rest} />;
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['light', 'dark']),
  value: PropTypes.string,
};
export default Input;
