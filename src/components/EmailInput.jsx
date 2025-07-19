function EmailInput() {
  return (
    <div>
      <label htmlFor="validationServerEmail" className="form-label">
        Электронная почта
      </label>
      <input
        type="email"
        className="form-control"
        id="validationServerEmail"
        aria-describedby="emailError"
        name="email"
        required={true}
      />
      <div id="emailError" className="invalid-feedback">
        Адрес электронной почты уже занят.
      </div>
    </div>
  );
}

export default EmailInput;
