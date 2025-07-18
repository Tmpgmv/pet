import React from "react";

function PhoneInput() {
  return (
    <div>
      <label htmlFor="validationServerPhone" className="form-label">
        Телефон (цифры, может начинаться со знака +)
      </label>
      <input
        type="tel"
        className="form-control is-invalid"
        id="validationServerPhone"
        aria-describedby="phoneError"
        name="phone"
        pattern="^\+?\d+$"
        required=""
      />
      <div id="phoneError" className="invalid-feedback">
        Введите корректный телефон.
      </div>
    </div>
  );
}

export default PhoneInput;
