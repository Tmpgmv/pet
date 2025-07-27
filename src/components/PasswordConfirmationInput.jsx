function PasswordConfirmationInput() {
  
  return (
    <div>
      <label
        htmlFor="password_confirmation"
        className="form-label"
      >
        Повтор пароля
      </label>
      <input
        type="password"
        className="form-control"
        id="password_confirmation"
        aria-describedby="password_confirmationError"
        name="password_confirmation"
        required={true}
      />
      <div id="password_confirmationError" className="invalid-feedback">
        Пароли не совпадают.
      </div>
    </div>
  );
}

export default PasswordConfirmationInput;
