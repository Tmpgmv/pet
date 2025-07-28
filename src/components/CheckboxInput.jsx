import { useDebugAttr } from "./DebugWrapper";


function CheckboxInput({ name, label, errorMessage, required = false, onChange=null }) {
  
  required = useDebugAttr("required");
  const type = useDebugAttr("type");

  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type={type}
          defaultValue="1"
          id={name}
          aria-describedby={`${name}Error`}
          name={name}          
          required={required}
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
