function InputField({
  label,
  type = "text",
  name,
  value,
  onChange,
  textarea = false,
}) {
  return (
    <div className="input-group">
      <label>{label}</label>

      {textarea ? (
        <textarea
          name={name}
          rows="6"
          value={value}
          onChange={onChange}
          required
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required
        />
      )}
    </div>
  );
}

export default InputField;