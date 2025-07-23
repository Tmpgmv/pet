function PasswordConfirmationInput({required=true}) {
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
        className="form-control"
        id="validationServerPasswordConfirmation"
        aria-describedby="passwordConfirmationError"
        name="password_confirmation"
        required={required}
      />
      <div id="passwordConfirmationError" className="invalid-feedback">
        Пароли не совпадают.
      </div>
    </div>
  );
}

export default PasswordConfirmationInput;
