import css from './Input.module.css';
import PropTypes from 'prop-types';

function Input({ color = 'light', type = 'text', children, ...rest }) {
  if (type === 'textarea') {
    return (
      <textarea className={`${css.input} ${css.txa} ${css[color]}`} {...rest}>
        {children}
      </textarea>
    );
  }

  return <input className={`${css.input} ${css[color]}`} {...rest} />;
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['light', 'dark']),
  type: PropTypes.oneOf(['text', 'textarea']),
  value: PropTypes.string,
};
export default Input;
