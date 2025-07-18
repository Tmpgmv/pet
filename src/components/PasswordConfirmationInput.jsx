import React from "react";

function PasswordConfirmationInput() {
  return (
    <div>
      <label
        htmlFor="validationServerPasswordConfirmation"
        className="form-label"
      >
        Повтор пароля
      </label>
      <input
        type="password"
        className="form-control is-invalid"
        id="validationServerPasswordConfirmation"
        aria-describedby="passwordConfirmationError"
        name="passwordConfirmation"
        required=""
      />
      <div id="passwordConfirmationError" className="invalid-feedback">
        Пароли не совпадают.
      </div>
    </div>
  );
}

export default PasswordConfirmationInput;
