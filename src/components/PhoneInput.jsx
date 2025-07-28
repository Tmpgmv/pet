import {attr} from "../general/debugFunctions";

function PhoneInput({ defaultValue=null}) {

  // Debug {
    var required = attr({ debugValue: false, prodValue: true });
    var pattern = attr({ debugValue: "*", prodValue: "^\+?\d+$" });
    var type = attr({ debugValue: "text", prodValue: "tel" });
  // } Debug

  return (
    <div>
      <label htmlFor="phone" className="form-label">
        Телефон (цифры, может начинаться со знака +)
      </label>
      <input
        type={type}
        className="form-control"
        id="phone"
        aria-describedby="phoneError"
        name="phone"
        pattern={pattern}
        required={required}
        defaultValue={defaultValue ? defaultValue : undefined}
      />
      <div id="phoneError" className="invalid-feedback">
        Введите корректный телефон.
      </div>
    </div>
  );
}

export default PhoneInput;
