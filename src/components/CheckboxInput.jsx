import { attr } from "../general/debugFunctions";

function CheckboxInput({
                          name,
                          label,
                          errorMessage,
                          required = false,
                          onChange = null,
                          clientOnly=false // Не отправлять на сервер. Касается флага register при добавлении нового объявления.
                        }) {
  // Debug {
  if (!clientOnly)
  {
    required = attr({ prodValue: required, debugValue: false });
    var type = attr({ prodValue: "checkbox", debugValue: "text" });
  } else {
    required = attr({ prodValue: required, debugValue: required });
    var type = attr({ prodValue: "checkbox", debugValue: "checkbox" });
  }
  // } Debug

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
