export default function Input({ inputLabel, value, name, onChangeHandler }) {
  return (
    <p>
      <label>{inputLabel}</label>
      <input
        onChange={onChangeHandler}
        type="number"
        value={value}
        name={name}
        required
      />
    </p>
  );
}
