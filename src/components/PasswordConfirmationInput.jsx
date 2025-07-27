function PasswordConfirmationInput() {
  return (
    <div>
      <label
        htmlFor="passwordConfirmation"
        className="form-label"
      >
        Повтор пароля
      </label>
      <input
        type="password"
        className="form-control"
        id="passwordConfirmation"
        aria-describedby="passwordConfirmationError"
        name="password_confirmation"
        required={true}
      />
      <div id="passwordConfirmationError" className="invalid-feedback">
        Пароли не совпадают.
      </div>
    </div>
  );
}

export default PasswordConfirmationInput;
