import css from './Input.module.css';

const Input = (props) => {
  return (
    <div className={css.inputBox}>
      <label className={css.label} htmlFor={props.name}>
        {props.children}
      </label>
      <input
        value={props.value}
        onChange={props.onChange}
        className={css.input}
        type={props.type}
        name={props.name}
        required
      />
    </div>
  );
};

export default Input;
