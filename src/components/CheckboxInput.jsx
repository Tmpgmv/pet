import React from "react";

function CheckboxInput({name,     
    label,
    errorMessage,
    isRequired=false}) {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input is-invalid"
          type="checkbox"
          defaultValue=""
          id={`validationServer${name}`}
          aria-describedby={`${name}Error`}
          name={name}
          required={isRequired ? true : undefined}
        />
        <label className="form-check-label" htmlFor={`validationServer${name}`}>
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
