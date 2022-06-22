import css from './Button.module.css';

function Button({
  children,
  variant = 'primary',
  size = 'medium',
  customFontSize = null,
}) {
  const styles = {
    fontSize: customFontSize + 'px',
  };
  return (
    <button
      style={customFontSize ? styles : {}}
      className={`${css.btn} ${css[variant]} ${css[size]}`}
    >
      {children}
    </button>
  );
}
export default Button;
