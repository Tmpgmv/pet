function CheckboxInput({ name, label, errorMessage, isRequired = false, onChange=null }) {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          defaultValue="1"
          id={name}
          aria-describedby={`${name}Error`}
          name={name}
          required={isRequired ? true : undefined}
          onChange={onChange ? onChange : undefined}
        />
        <label className="form-check-label" htmlFor={name}>
          {label}
        </label>
        <div id={`${name}Error`} className="invalid-feedback">
          {errorMessage}
        </div>
      </div>
    </div>
  );
}

export default CheckboxInput;
