import css from './Input.module.css';
import PropTypes from 'prop-types';

function Input({ errorMsg, color = 'light', type = 'text', children, ...rest }) {
  if (type === 'textarea') {
    return (
      <textarea className={`${css.input} ${css.txa} ${css[color]}`} {...rest}>
        {children}
      </textarea>
    );
  }

  return (
    <div>
      <input
        className={`${css.input} ${css[color]} ${errorMsg ? css.errField : ''}`}
        {...rest}
      />
      {errorMsg && <p className={css.errorMsg}>{errorMsg}</p>}
    </div>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['light', 'dark']),
  type: PropTypes.oneOf(['text', 'textarea']),
  value: PropTypes.string,
  errorMsg: PropTypes.string,
};
export default Input;
